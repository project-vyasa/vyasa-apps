<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { AppShell, AppHeader, Button, Input, Panel, ListView } from '@project-vyasa/vyasa-ui';
	import {
		Sun,
		Moon,
		Maximize2,
		Minimize2,
		Settings,
		ChevronLeft,
		ChevronRight,
		PanelRight,
		Library,
		BookOpen,
		Bug
	} from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { onMount, onDestroy, untrack, getContext } from 'svelte';
	import { ViewerDb } from '$lib/ViewerDb';
	import { dev } from '$app/environment';
	import initWasm, { VyasaViewerRuntime } from '@project-vyasa/vyasa-viewer-wasm';
	import { resolvePublisherCatalogUrl, fetchCatalog, getPublicationVyviewUrl } from '$lib/registry';
	import { flattenTree, matchUrns } from '$lib/urn-utils';
	import type { PackageData, Manifest, Catalog } from '$lib/types';
	import ViewerAppBar from '$lib/components/ViewerAppBar.svelte';

	// Extract URL parameters
	const publisher = $derived($page.params.publisher || '');
	const publication = $derived($page.params.publication || '');
	const urn = $derived($page.params.urn || 'root');

	// Query parameters
	const embed = $derived($page.url.searchParams.get('embed') === 'true');
	const showDiagnosticsQuery = $derived($page.url.searchParams.get('diagnostics') === 'true');

	// --- AppShell State ---
	let leftVisible = $state(true);
	let rightVisible = $state(false);
	let isFullWidth = $state(false);
	let bottomVisible = $state(false);
	let topVisible = $state(true);
	let maximizedZone = $state<'none' | 'bottom' | 'content'>('none');

	// Diagnostics Query Param
	$effect(() => {
		if (showDiagnosticsQuery) {
			// Note: We no longer auto-open from query param since state is in AppBar
			// A future enhancement could be to expose an open method or global store
		}
	});

	// --- Context ---
	const themeContext = getContext<{
		toggleTheme: () => void;
		cycleDensity: () => void;
		current: 'light' | 'dark';
	}>('theme');

	// --- Viewer State ---
	let srcdocContent = $state('');
	let errorMessage = $state<string | null>(null);
	let activeView = $state('reference');
	let availableViews = $state<string[]>([]);
	let activeUrns = $state<string[]>([]);

	let packageData = $state<PackageData | null>(null);

	let iframeElement = $state<HTMLIFrameElement>();
	let viewerDb = new ViewerDb();
	let graphRuntime = $state<VyasaViewerRuntime | null>(null);

	let urnComponents = $state<string[]>([]);
	let flatUrns = $derived.by<string[]>(() => {
		if (!packageData?.structure?.catalogTree) return [];
		return flattenTree(packageData.structure.catalogTree, '');
	});

	let currentUrnParts = $state<string[]>([]);


	interface SidebarItem {
		id: string;
		title: string;
		subtitle?: string;
		group?: string;
	}

	let selectedContainerId = $state<string | number | undefined>(undefined);

	let sidebarItems = $derived.by<SidebarItem[]>(() => {
		const tree = packageData?.structure?.catalogTree;
		if (!tree) return [];

		const compLen = urnComponents.length;
		const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

		// Case 1: Flat array of leaf nodes (e.g. intimate note, bible)
		if (Array.isArray(tree)) {
			const label = urnComponents[0] || 'Item';
			return tree.map((val) => ({
				id: String(val),
				title: `${capitalize(label)} ${val}`
			}));
		}

		const items: SidebarItem[] = [];

		function traverse(node: any, pathParts: string[]) {
			if (Array.isArray(node)) {
				if (pathParts.length > 0) {
					const id = pathParts.join(':');
					const lastPart = pathParts[pathParts.length - 1];
					const parentPart = pathParts.length > 1 ? pathParts[pathParts.length - 2] : '';

					const itemLabel = urnComponents[pathParts.length - 1] || 'Item';
					const groupLabel =
						pathParts.length > 1 ? urnComponents[pathParts.length - 2] || 'Group' : '';

					let titleStr = `${capitalize(itemLabel)} ${lastPart}`;

					items.push({
						id,
						title: titleStr,
						group: parentPart ? `${capitalize(groupLabel)} ${parentPart}` : undefined
					});
				}
				return;
			}

			if (typeof node === 'object' && node !== null) {
				const keys = Object.keys(node).sort((a, b) => Number(a) - Number(b));
				for (const k of keys) {
					traverse(node[k], [...pathParts, k]);
				}
			}
		}

		traverse(tree, []);
		return items;
	});

	// Sync current container selection from URN changes
	$effect(() => {
		if (!urn || urn === 'root') {
			selectedContainerId = undefined;
			return;
		}
		const urnParts = urn.split(':');
		for (let len = urnParts.length; len > 0; len--) {
			const candidate = urnParts.slice(0, len).join(':');
			if (sidebarItems.some((item) => item.id === candidate)) {
				selectedContainerId = candidate;
				return;
			}
		}
		selectedContainerId = undefined;
	});

	// Diagnostic info
	let diagRegistryUrl = $state('');
	let diagCatalogUrl = $state('');
	let diagPublicationUrl = $state('');
	let diagCatalog = $state<Catalog | null>(null);

	// Update currentUrnParts when URL changes
	$effect(() => {
		let parts = urn === 'root' ? [] : urn.split(':');
		const filledParts = [...parts];
		// Pad with empty strings if necessary to match components length
		while (filledParts.length < urnComponents.length) {
			filledParts.push('');
		}
		currentUrnParts = filledParts;
	});

	$effect(() => {
		if (publisher && publication) {
			loadPublication();
		}
	});

	onDestroy(() => {
		viewerDb.close();
	});

	async function loadPublication() {
		errorMessage = null;
		try {
			// 1. Initialize WASM
			await initWasm();

			// 2. Fetch the global registry
			const catalogUrl = await resolvePublisherCatalogUrl(publisher);
			diagCatalogUrl = catalogUrl;
			diagRegistryUrl = 'https://project-vyasa.github.io/vyasa-docs/registry.json';

			const catalogData = await fetchCatalog(catalogUrl);
			diagCatalog = catalogData;
			const items = catalogData.items || [];

			const pubItem = items.find((item) => item.id === publication);
			if (!pubItem)
				throw new Error(`Publication ${publication} not found in catalog at ${catalogUrl}`);

			const vyviewFullUrl = getPublicationVyviewUrl(catalogUrl, pubItem);
			diagPublicationUrl = vyviewFullUrl;

			const buster = pubItem.updated ? `?t=${pubItem.updated}` : dev ? `?t=${Date.now()}` : '';
			await viewerDb.loadFromUrl(vyviewFullUrl + buster);

			const manifestRows = await viewerDb.query(VyasaViewerRuntime.build_manifest_query());
			const manifest: Record<string, string> = {};
			for (const row of manifestRows) {
				manifest[row[0] as string] = row[1] as string;
			}

			if (manifest['package_type'] !== 'view')
				throw new Error(`Unsupported package type in ${vyviewFullUrl}`);

			const tplRows = await viewerDb.query(VyasaViewerRuntime.build_templates_query());
			const projections: Record<string, string> = {};
			const viewSet = new Set<string>();
			for (const row of tplRows) {
				const viewName = row[0] as string;
				const blockType = row[1] as string;
				const htmlContent = row[2] as string;
				viewSet.add(viewName);
				projections[`${viewName}_${blockType}`] = htmlContent;
			}

			const catalogTreeTemp = JSON.parse(manifest['catalog_tree'] || '[]');
			let projectionsTemp = projections;

			let globalPrefix = manifest['global_prefix'] || 'urn:vyasa:';

			let hierarchyJson = manifest['urn_hierarchy'] || '[]';
			let bitLayoutJson = manifest['urn_bit_layout'] || 'null';



			try {
				urnComponents = JSON.parse(hierarchyJson);
			} catch (e) {
				urnComponents = [];
				hierarchyJson = '[]';
			}

			graphRuntime = new VyasaViewerRuntime(hierarchyJson, bitLayoutJson, globalPrefix);



			// Set packageData LAST to avoid triggering concurrent wa-sqlite queries from the $effect
			// before the initialization queries have completed, which corrupts the WASM Asyncify stack.
			packageData = {
				manifest: manifest as unknown as Manifest,
				structure: { catalogTree: catalogTreeTemp },
				projections: projectionsTemp
			};

			// flatUrns is derived automatically now

			if (urn === 'root' || !urn) {
				if (flatUrns.length > 0) {
					const firstLeaf = flatUrns[0];
					const parts = firstLeaf.split(':');
					let targetUrn = firstLeaf;

					// If the URN has multiple components (e.g., 1:1), go to its container (e.g. 1)
					if (parts.length > 1) {
						targetUrn = parts.slice(0, parts.length - 1).join(':');
					}

					setTimeout(() => {
						goto(`${base}/${publisher}/${publication}/${targetUrn}`, { replaceState: true });
					}, 0);
					return;
				}
			}

			// Initial render is handled by the $effect block
		} catch (err: any) {
			console.error('Failed to load publication:', err);
			errorMessage = err.message || String(err);
		}
	}

	// React to URN changes (e.g. from goto navigation)
	$effect(() => {
		const currentUrn = urn;
		const r = graphRuntime;
		const p = packageData;
		if (r && p) {
			untrack(() => {
				renderCurrentUrn(currentUrn);
			});
		}
	});

	async function renderCurrentUrn(targetUrn: string) {
		if (!graphRuntime || !packageData) return;

		try {
			const matchingUrns = matchUrns(targetUrn, flatUrns);
			const limit = matchingUrns.length > 0 ? matchingUrns.length : 1;
			activeUrns = matchingUrns;

			const query = graphRuntime.build_viewport_query(targetUrn, limit);
			const rows = await viewerDb.query(query);

			let rowsJson = [];
			for (const r of rows) {
				rowsJson.push({
					id: r[0],
					stream: (r[1] as string).startsWith('dependency.') ? r[1] : `local.${r[1]}`,
					content: r[2]
				});
			}

			// Map streams if config exists
			if (packageData.manifest.streams_config) {
				const streamsConfig = JSON.parse(packageData.manifest.streams_config);
				const sourceToName: Record<string, string> = {};
				for (const s of streamsConfig) {
					if (typeof s === 'string') {
						const parts = s.split(':');
						if (parts.length > 1) {
							sourceToName[parts[0]] = parts[1];
						} else {
							sourceToName[s] = s.split('.').pop() || s;
						}
					} else if (s && s.source) {
						sourceToName[s.source] = s.name;
					}
				}
				rowsJson = rowsJson.map((r) => {
					r.stream =
						sourceToName[r.stream as string] || (r.stream as string).split('.').pop() || r.stream;
					return r;
				});
			} else {
				rowsJson = rowsJson.map((r) => ({
					...r,
					stream: (r.stream as string).split('.').pop() || r.stream
				}));
			}

			const tplRows = await viewerDb.query(VyasaViewerRuntime.build_templates_query());
			if (availableViews.length === 0) {
				const viewsRows = await viewerDb.query(VyasaViewerRuntime.build_views_query());
				availableViews = viewsRows.map((r) => r[0] as string);
				if (availableViews.length > 0) {
					if (availableViews.includes('reference')) {
						activeView = 'reference';
					} else {
						activeView = availableViews[0];
					}
				}
			}

			const templatesJson = JSON.stringify(
				tplRows.map((r) => ({
					view_name: r[0],
					block_type: r[1],
					content: r[2]
				}))
			);

			const optionsJson = JSON.stringify({ wrap_tag: 'span', separator: ' ' });
			const viewNodes = graphRuntime.weave_view(rowsJson, templatesJson, activeView, optionsJson);

			let itemsHtml = '';
			const layoutTpl = packageData.projections[`${activeView}_layout`] || '{{ body }}';
			for (const node of viewNodes) {
				itemsHtml += `<div id="${node.urn}" style="display: contents">${node.content}</div>`;
			}

			srcdocContent = layoutTpl.replace('{{ body }}', itemsHtml);
		} catch (e: any) {
			console.error('Render failed', e);
			srcdocContent = `<div class="render-error">Failed to weave view: ${e.message || e}</div>`;
		}
	}

	let onNavigate = (target: string) => {
		if (target) {
			goto(`${base}/${publisher}/${publication}/${target}`);
		}
	};

	function navigateUrn() {
		const target = currentUrnParts.filter((p) => p.trim() !== '').join(':');
		onNavigate(target);
	}

	const navigateNext = () => {
		if (flatUrns.length > 0) {
			const lastIdx = flatUrns.indexOf(activeUrns[activeUrns.length - 1]);
			if (lastIdx !== -1 && lastIdx < flatUrns.length - 1) {
				goto(`${base}/${publisher}/${publication}/${flatUrns[lastIdx + 1]}`);
			} else if (lastIdx === -1) {
				goto(`${base}/${publisher}/${publication}/${flatUrns[0]}`);
			}
		}
	};

	const navigatePrev = () => {
		if (flatUrns.length > 0) {
			const firstIdx = flatUrns.indexOf(activeUrns[0]);
			if (firstIdx > 0) {
				goto(`${base}/${publisher}/${publication}/${flatUrns[firstIdx - 1]}`);
			}
		}
	};
</script>

{#snippet headerContent()}
	<AppHeader
		appName="Vyasa Viewer"
		href={base || '/'}
		bind:leftVisible
		bind:rightVisible
		bind:bottomVisible
	>
		<div
			style="font-size: 0.9em; color: var(--text-muted); text-align: center; display: flex; align-items: center; justify-content: center;"
		>
			{#if packageData}
				<strong>{packageData.manifest.title || publication}</strong>
				<!-- TODO: Debug flag logic here, for now it's always shown as requested -->
				<span
					style="opacity: 0.6; margin-left: 0.75rem; font-size: 0.85em; display: inline-flex; gap: 0.5rem;"
				>
					<span
						>URL: <a
							href={diagCatalogUrl}
							target="_blank"
							rel="noopener noreferrer"
							style="color: inherit; text-decoration: underline;">{diagCatalogUrl}</a
						></span
					>
					<span>|</span>
					<span
						>Built: {new Date(
							Number(packageData.manifest.timestamp || 0) * 1000
						).toLocaleString()}</span
					>
				</span>
			{/if}
		</div>
	</AppHeader>
{/snippet}

{#snippet appBarContent()}
	<ViewerAppBar
		active="reader"
		bind:expanded={leftVisible}
		{publisher}
		{publication}
		{diagRegistryUrl}
		{diagCatalogUrl}
		{diagPublicationUrl}
		{diagCatalog}
		{packageData}
	/>
{/snippet}

{#snippet sidebarTopContent()}
	<!-- Phase 1: Tight Navigation Bar -->
	<div class="nav-bar-container">
		<!-- Left spacer to keep navigation perfectly centered -->
		<div style="flex: 1; display: flex; justify-content: flex-start;"></div>

		<!-- Centered URN Navigation -->
		<div class="nav-bar-inner">
			<Button
				variant="ghost"
				size="icon"
				icon={ChevronLeft}
				title="Previous"
				onclick={navigatePrev}
			/>
			<div class="nav-bar-inputs">
				{#if urnComponents.length > 0}
					{@const lastIdx = urnComponents.length - 1}
					<div class="urn-input-wrapper">
						<!-- svelte-ignore a11y_autofocus -->
						<Input
							bind:value={currentUrnParts[lastIdx]}
							onkeydown={(e) => e.key === 'Enter' && navigateUrn()}
							onblur={navigateUrn}
							placeholder={urnComponents[lastIdx]}
							style="text-align: center; font-family: var(--font-mono);"
						/>
					</div>
				{:else}
					<div class="urn-readonly">
						{urn}
					</div>
				{/if}
			</div>
			<Button variant="ghost" size="icon" icon={ChevronRight} title="Next" onclick={navigateNext} />
		</div>

		<!-- Right-aligned Maximize Button -->
		<div style="flex: 1; display: flex; justify-content: flex-end; padding-right: var(--space-2);">
			<Button
				variant="ghost"
				size="icon"
				icon={isFullWidth ? Minimize2 : Maximize2}
				title="Toggle Full Width"
				onclick={() => (isFullWidth = !isFullWidth)}
			/>
		</div>
	</div>
{/snippet}

{#snippet sidebarLeftContent()}
	<Panel title="Navigation" icon={BookOpen}>
		{#if sidebarItems.length > 0}
			<ListView
				items={sidebarItems}
				keyField="id"
				bind:selectedId={selectedContainerId}
				titleField="title"
				subtitleField="subtitle"
				groupBy={sidebarItems.some((item) => item.group) ? 'group' : undefined}
				onSelect={(item) => onNavigate(item.id)}
			/>
		{:else}
			<div class="sidebar-panel-content">No navigation items available.</div>
		{/if}
	</Panel>
{/snippet}

{#snippet sidebarRightContent()}
	<Panel title="Details">
		<div class="sidebar-panel-content">
			Select a block to see details for URN: <strong>{urn}</strong>.
		</div>
	</Panel>
{/snippet}

<AppShell
	leftVisible={!embed && leftVisible}
	rightVisible={!embed && rightVisible}
	{topVisible}
	topHeight={48}
	{bottomVisible}
	{maximizedZone}
	header={!embed ? headerContent : undefined}
	appBar={!embed ? appBarContent : undefined}
	sidebarLeft={sidebarLeftContent}
	sidebarTop={sidebarTopContent}
	sidebarRight={sidebarRightContent}
>
	<div class="viewer-container">
		{#if errorMessage}
			<div class="error-box">
				{errorMessage}
			</div>
		{:else if !srcdocContent}
			<div class="loading-box">
				Loading {publication}...
			</div>
		{:else}
			<iframe
				bind:this={iframeElement}
				srcdoc={srcdocContent}
				title="Vyasa Content"
				class="viewer-iframe"
				class:full-width={isFullWidth}
			></iframe>
		{/if}
	</div>
</AppShell>

<style>
	.nav-bar-container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		padding: var(--space-2);
		background-color: var(--bg-surface);
		border-bottom: 1px solid var(--border-base);
	}
	.nav-bar-inner {
		display: flex;
		align-items: center;
		gap: 0;
		background-color: var(--bg-surface-alt);
		border-radius: var(--control-radius);
		padding: 2px;
	}
	.nav-bar-inputs {
		display: flex;
		align-items: center;
		padding: 0 var(--space-3);
		border-left: 1px solid var(--border-base);
		border-right: 1px solid var(--border-base);
	}
	.urn-input-wrapper {
		width: calc(3.5rem * var(--density, 1));
	}
	.urn-readonly {
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		min-width: 60px;
		text-align: center;
	}

	.sidebar-panel-content {
		padding: var(--space-4);
		color: var(--text-secondary);
	}

	.viewer-container {
		width: 100%;
		height: 100%;
		background-color: var(--bg-surface);
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: hidden;
	}
	.error-box {
		margin: var(--space-8);
		padding: var(--space-4);
		background-color: var(--color-red-100);
		color: var(--color-red-900);
		border: 1px solid var(--color-red-200);
		border-radius: var(--control-radius);
	}
	.loading-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		color: var(--text-secondary);
	}
	.viewer-iframe {
		width: 100%;
		max-width: 900px;
		height: 100%;
		border: 0;
		border-left: 1px solid var(--border-base);
		border-right: 1px solid var(--border-base);
		background-color: var(--color-white);
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
	}
	.viewer-iframe.full-width {
		max-width: none;
	}

	:global(.panel-content .list-view) {
		border: none !important;
		border-radius: 0 !important;
	}
</style>
