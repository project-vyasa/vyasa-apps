<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { AppShell, AppHeader, Button, Input, Panel } from '@project-vyasa/vyasa-ui';
	import { Sun, Moon, Maximize2, Settings, ChevronLeft, ChevronRight, PanelRight, Library, BookOpen, Bug } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { onMount, onDestroy, untrack, getContext } from 'svelte';
	import { ViewerDb } from '$lib/ViewerDb';
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
	const themeContext = getContext<{ toggleTheme: () => void; cycleDensity: () => void; current: 'light' | 'dark' }>('theme');

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
	let flatUrns = $state<string[]>([]);
	
	let currentUrnParts = $state<string[]>([]);
	
	// Diagnostic info
	let diagRegistryUrl = $state('');
	let diagCatalogUrl = $state('');
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
			if (!pubItem) throw new Error(`Publication ${publication} not found in catalog at ${catalogUrl}`);

			const vyviewFullUrl = getPublicationVyviewUrl(catalogUrl, pubItem);
			
			await viewerDb.loadFromUrl(vyviewFullUrl + "?t=" + Date.now());
			
			const manifestRows = await viewerDb.query(VyasaViewerRuntime.build_manifest_query());
			const manifest: Record<string, string> = {};
			for (const row of manifestRows) {
				manifest[row[0] as string] = row[1] as string;
			}
			
			if (manifest['package_type'] !== 'view') throw new Error(`Unsupported package type in ${vyviewFullUrl}`);
			
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
			
			const catalogTree = JSON.parse(manifest['catalog_tree'] || "[]");
			packageData = { manifest: manifest as unknown as Manifest, structure: { catalogTree }, projections };
			
			let globalPrefix = manifest['global_prefix'] || 'urn:vyasa:';
			
			let hierarchyJson = manifest['urn_hierarchy'] || "[]";
			let bitLayoutJson = manifest['urn_bit_layout'] || "null";
			
			try {
				urnComponents = JSON.parse(hierarchyJson);
			} catch (e) {
				urnComponents = [];
				hierarchyJson = "[]";
			}
			
			graphRuntime = new VyasaViewerRuntime(hierarchyJson, bitLayoutJson, globalPrefix);
			
			// Build flat URNs list for easy navigation
			flatUrns = flattenTree(catalogTree, "");
			
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
			console.error("Failed to load publication:", err);
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
				rowsJson = rowsJson.map(r => {
					r.stream = sourceToName[r.stream as string] || (r.stream as string).split('.').pop() || r.stream;
					return r;
				});
			} else {
				rowsJson = rowsJson.map(r => ({ ...r, stream: (r.stream as string).split('.').pop() || r.stream }));
			}
			
			const tplRows = await viewerDb.query(VyasaViewerRuntime.build_templates_query());
			if (availableViews.length === 0) {
				const viewsRows = await viewerDb.query(VyasaViewerRuntime.build_views_query());
				availableViews = viewsRows.map(r => r[0] as string);
				if (availableViews.length > 0) {
					if (availableViews.includes('reference')) {
						activeView = 'reference';
					} else {
						activeView = availableViews[0];
					}
				}
			}

			const templatesJson = JSON.stringify(tplRows.map(r => ({
				view_name: r[0],
				block_type: r[1],
				content: r[2]
			})));
			
			const viewNodes = graphRuntime.weave_view(rowsJson, templatesJson, activeView);
			
			let itemsHtml = '';
			const layoutTpl = packageData.projections[`${activeView}_layout`] || '{{ body }}';
			for (const node of viewNodes) {
				itemsHtml += `<span id="${node.urn}" class="vyasa-node ${node.type}">${node.content}</span>`;
			}
			
			srcdocContent = layoutTpl.replace('{{ body }}', itemsHtml);
			
		} catch (e: any) {
			console.error("Render failed", e);
			srcdocContent = `<div class="render-error">Failed to weave view: ${e.message || e}</div>`;
		}
	}

	let onNavigate = (target: string) => {
		if (target) {
			goto(`${base}/${publisher}/${publication}/${target}`);
		}
	};
	
	function navigateUrn() {
		const target = currentUrnParts.filter(p => p.trim() !== '').join(':');
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
		width: 56px;
	}
	.urn-separator {
		color: var(--text-tertiary);
		font-weight: bold;
		margin: 0 4px;
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


</style>

{#snippet headerContent()}
	<AppHeader 
		appName="Vyasa Viewer" 
		bind:leftVisible 
		bind:rightVisible 
		bind:bottomVisible 
	/>
{/snippet}

{#snippet appBarContent()}
	<ViewerAppBar 
		active="reader" 
		bind:expanded={leftVisible}
		{publisher} 
		{publication} 
		{diagRegistryUrl}
		{diagCatalogUrl}
		{diagCatalog}
		{packageData}
	/>
{/snippet}

{#snippet sidebarTopContent()}
	<!-- Phase 1: Tight Navigation Bar -->
	<div class="nav-bar-container">
		<div class="nav-bar-inner">
			<Button variant="ghost" size="icon" icon={ChevronLeft} title="Previous" onclick={navigatePrev} />
			<div class="nav-bar-inputs">
				{#if urnComponents.length > 0}
					{#each urnComponents as comp, i}
						<div class="urn-input-wrapper">
							<!-- svelte-ignore a11y_autofocus -->
							<Input 
								bind:value={currentUrnParts[i]} 
								onkeydown={(e) => e.key === 'Enter' && navigateUrn()} 
								onblur={navigateUrn}
								placeholder={comp} 
								style="text-align: center; font-family: var(--font-mono);"
							/>
						</div>
						{#if i < urnComponents.length - 1}
							<span class="urn-separator">:</span>
						{/if}
					{/each}
				{:else}
					<div class="urn-readonly">
						{urn}
					</div>
				{/if}
			</div>
			<Button variant="ghost" size="icon" icon={ChevronRight} title="Next" onclick={navigateNext} />
		</div>
	</div>
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
	topVisible={topVisible}
	topHeight={48}
	{bottomVisible}
	{maximizedZone}
	header={!embed ? headerContent : undefined}
	appBar={!embed ? appBarContent : undefined}
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
			></iframe>
		{/if}
	</div>
</AppShell>
