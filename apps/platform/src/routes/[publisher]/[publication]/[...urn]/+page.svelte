<script lang="ts">
	import { page } from '$app/stores';
	import { AppShell, Button, Icon, Input, Panel } from '@project-vyasa/vyasa-ui';
	import { Menu, Search, Sun, Moon, Maximize2, Settings, AlignLeft, ChevronLeft, ChevronRight, LayoutPanelTop, PanelRight, Library, BookOpen } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { onMount, onDestroy, untrack, getContext } from 'svelte';
	import { ViewerDb } from '$lib/ViewerDb';
	import initWasm, { VyasaViewerRuntime } from '@project-vyasa/vyasa-viewer-wasm';

	// Extract URL parameters
	const publisher = $derived($page.params.publisher);
	const publication = $derived($page.params.publication);
	const urn = $derived($page.params.urn || 'root');
	
	// Query parameters
	const embed = $derived($page.url.searchParams.get('embed') === 'true');

	// --- AppShell State ---
	let leftVisible = $state(true);
	let rightVisible = $state(false);
	let topVisible = $state(true);
	let maximizedZone = $state<'none' | 'bottom' | 'content'>('none');

	// --- Context ---
	const themeContext = getContext<{ toggleTheme: () => void; cycleDensity: () => void; current: 'light' | 'dark' }>('theme');

	// --- Viewer State ---
	let srcdocContent = $state('');
	let errorMessage = $state<string | null>(null);
	let activeView = $state('reference');
	let availableViews = $state<string[]>([]);
	let activeUrns = $state<string[]>([]);

	let packageData = $state<{
		manifest: any;
		structure: any;
		projections: Record<string, string>;
	} | null>(null);

	let iframeElement: HTMLIFrameElement;
	let viewerDb = new ViewerDb();
	let graphRuntime = $state<VyasaViewerRuntime | null>(null);
	let schemeParts = $state<string[]>([]);
	let urnComponents = $state<string[]>([]);
	let flatUrns = $state<string[]>([]);
	
	let currentUrnParts = $state<string[]>([]);
	
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

	async function loadPublication() {
		errorMessage = null;
		try {
			// 1. Initialize WASM
			await initWasm();
			
			// 2. Fetch the global registry
			// TODO: Allow overriding the global registry URL in Settings
			const registryUrl = 'https://project-vyasa.github.io/vyasa-docs/registry.json';
			const registryRes = await fetch(registryUrl);
			if (!registryRes.ok) throw new Error('Global registry not found');
			
			const registry = await registryRes.json();
			const pubEntry = registry.publishers?.find((p: any) => p.identifier === publisher);
			if (!pubEntry) throw new Error(`Publisher ${publisher} not found in global registry`);
			
			let catalogUrl = pubEntry.catalog_url;
			// Local dev intercept
			if (catalogUrl.includes('project-vyasa.github.io/vyasa-samples')) {
				catalogUrl = '/samples/catalog.json';
			}
			
			const res = await fetch(catalogUrl);
			if (!res.ok) throw new Error('Catalog not found');
			
			const data = await res.json();
			const items = data.items || data;
			
			const pubItem = items.find((item: any) => item.id === publication);
			if (!pubItem) throw new Error(`Publication ${publication} not found in catalog`);

			const catalogBase = catalogUrl.substring(0, catalogUrl.lastIndexOf('/') + 1);
			const payloadFullUrl = pubItem.payloadUrl.startsWith('http') || pubItem.payloadUrl.startsWith('/') 
								   ? pubItem.payloadUrl 
								   : catalogBase + pubItem.payloadUrl;
			
			await viewerDb.loadFromUrl(payloadFullUrl + "?t=" + Date.now());
			
			const manifestRows = await viewerDb.query(VyasaViewerRuntime.build_manifest_query());
			const manifest: Record<string, string> = {};
			for (const row of manifestRows) {
				manifest[row[0] as string] = row[1] as string;
			}
			
			if (manifest['package_type'] !== 'view') throw new Error("Unsupported package type.");
			
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
			packageData = { manifest, structure: { catalogTree }, projections };
			
			const urnScheme = manifest['urn_scheme'] || 'urn:vyasa:{id}';
			schemeParts = urnScheme.replace(/^urn:vyasa:/, '').split(':');
			let globalPrefix = schemeParts[0] || 'urn:vyasa:';
			if (!globalPrefix.startsWith('urn:vyasa:')) globalPrefix = 'urn:vyasa:' + globalPrefix;
			
			let hierarchyJson = manifest.urn_hierarchy || "[]";
			let bitLayoutJson = manifest.urn_bit_layout || "null";
			
			try {
				urnComponents = JSON.parse(hierarchyJson);
			} catch (e) {
				urnComponents = schemeParts.filter(s => s.startsWith('{') && s.endsWith('}')).map(s => s.substring(1, s.length - 1));
				hierarchyJson = JSON.stringify(urnComponents);
			}
			
			graphRuntime = new VyasaViewerRuntime(hierarchyJson, bitLayoutJson, globalPrefix);
			
			// Build flat URNs list for easy navigation
			flatUrns = [];
			function flattenTree(node: any, prefix: string) {
				if (Array.isArray(node)) {
					for (const val of node) {
						flatUrns.push(prefix ? `${prefix}:${val}` : `${val}`);
					}
				} else if (typeof node === 'object' && node !== null) {
					// sort keys numerically if possible
					const keys = Object.keys(node).sort((a, b) => Number(a) - Number(b));
					for (const k of keys) {
						flattenTree(node[k], prefix ? `${prefix}:${k}` : `${k}`);
					}
				}
			}
			flattenTree(catalogTree, "");
			
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
			if (targetUrn === 'root') {
				targetUrn = flatUrns.length > 0 ? flatUrns[0] : '1';
			}
			
			// If targetUrn matches a full leaf, fetch 1. If it's a prefix or range, figure out how many leaf urns match.
			const matchingUrns = flatUrns.filter(u => {
				if (u === targetUrn || u.startsWith(targetUrn + ':')) return true;
				
				const urnParts = u.split(':');
				const targetParts = targetUrn.split(':');
				
				if (targetParts.length > urnParts.length) return false;
				
				for (let i = 0; i < targetParts.length; i++) {
					const t = targetParts[i];
					const partU = parseInt(urnParts[i]);
					
					if (t.includes('-')) {
						const [start, end] = t.split('-').map(Number);
						if (partU >= start && partU <= end) {
							continue;
						}
						return false;
					} else {
						if (partU !== parseInt(t)) return false;
					}
				}
				return true;
			});
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
					sourceToName[s.source] = s.name;
				}
				rowsJson = rowsJson.map(r => {
					r.stream = sourceToName[r.stream] || r.stream.replace(/^local\./, '');
					return r;
				});
			} else {
				rowsJson = rowsJson.map(r => ({ ...r, stream: r.stream.replace(/^local\./, '') }));
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
			console.log("RENDER URN:", targetUrn, "=> HTML Length:", itemsHtml.length);
			
		} catch (e: any) {
			console.error("Render failed", e);
			srcdocContent = `<div style="padding: 2rem; color: red;">Failed to weave view: ${e.message || e}</div>`;
		}
	}

	function navigateUrn() {
		// filter out empty parts
		const target = currentUrnParts.filter(p => p.trim() !== '').join(':');
		if (target) {
			goto(`/${publisher}/${publication}/${target}`);
		}
	}
	
	function navigateNext() {
		if (activeUrns.length > 0) {
			const lastUrn = activeUrns[activeUrns.length - 1];
			const lastIdx = flatUrns.indexOf(lastUrn);
			if (lastIdx >= 0 && lastIdx < flatUrns.length - 1) {
				goto(`/${publisher}/${publication}/${flatUrns[lastIdx + 1]}`);
				return;
			}
		}
		if (flatUrns.length > 0) goto(`/${publisher}/${publication}/${flatUrns[0]}`);
	}
	
	function navigatePrev() {
		if (activeUrns.length > 0) {
			const firstUrn = activeUrns[0];
			const firstIdx = flatUrns.indexOf(firstUrn);
			if (firstIdx > 0) {
				goto(`/${publisher}/${publication}/${flatUrns[firstIdx - 1]}`);
				return;
			}
		}
	}
</script>

{#snippet headerContent()}
	<div style="display: flex; align-items: center; justify-content: space-between; width: 100%; height: 100%; padding: 0 var(--space-4); background-color: var(--bg-surface-alt);">
		<div style="display: flex; align-items: center; gap: var(--space-4);">
			<Button variant="ghost" size="icon" icon={Menu} onclick={() => leftVisible = !leftVisible} />
			<h1 style="font-size: var(--text-lg); font-weight: var(--font-semibold); margin: 0;">Vyasa Viewer</h1>
		</div>
		
		<div style="display: flex; align-items: center; gap: var(--space-2);">
			<!-- Theme and Density controls -->
			{#if themeContext}
				<Button variant="ghost" size="icon" icon={themeContext.current === 'dark' ? Sun : Moon} title="Toggle Theme" onclick={themeContext.toggleTheme} />
				<Button variant="ghost" size="icon" icon={Maximize2} title="Toggle Density" onclick={themeContext.cycleDensity} />
			{/if}
			<Button 
				variant={rightVisible ? 'secondary' : 'ghost'} 
				size="icon" 
				icon={PanelRight} 
				title="Toggle Right Sidebar" 
				onclick={() => rightVisible = !rightVisible} 
			/>
		</div>
	</div>
{/snippet}

{#snippet appBarContent()}
	<div style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: var(--space-4) 0; width: 100%; height: 100%; background-color: var(--bg-surface);">
		<div style="display: flex; flex-direction: column; align-items: center; gap: var(--space-4);">
			<Button variant="ghost" size="icon" icon={Library} title="Library" onclick={() => goto(`/${publisher}`)} />
			<Button variant="secondary" size="icon" icon={BookOpen} title="Reader" />
		</div>
		<div style="display: flex; flex-direction: column; align-items: center; gap: var(--space-4);">
			<Button variant="ghost" size="icon" icon={Settings} title="Settings" />
		</div>
	</div>
{/snippet}

{#snippet sidebarTopContent()}
	<!-- Phase 1: Tight Navigation Bar -->
	<div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; padding: var(--space-2); background-color: var(--bg-surface); border-bottom: 1px solid var(--border-base);">
		<div style="display: flex; align-items: center; gap: 0; background-color: var(--bg-surface-alt); border-radius: var(--control-radius); padding: 2px;">
			<Button variant="ghost" size="icon" icon={ChevronLeft} title="Previous" onclick={navigatePrev} />
			<div style="display: flex; align-items: center; padding: 0 var(--space-3); border-left: 1px solid var(--border-base); border-right: 1px solid var(--border-base);">
				{#if urnComponents.length > 0}
					{#each urnComponents as comp, i}
						<div style="width: 56px;">
							<Input 
								bind:value={currentUrnParts[i]} 
								onkeydown={(e) => e.key === 'Enter' && navigateUrn()} 
								onblur={navigateUrn}
								placeholder={comp} 
								style="text-align: center; font-family: var(--font-mono);"
							/>
						</div>
						{#if i < urnComponents.length - 1}
							<span style="color: var(--text-tertiary); font-weight: bold; margin: 0 4px;">:</span>
						{/if}
					{/each}
				{:else}
					<div style="font-family: var(--font-mono); font-size: var(--text-sm); min-width: 60px; text-align: center;">
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
		<div style="padding: var(--space-4); color: var(--text-secondary);">
			Select a block to see details for URN: <strong>{urn}</strong>.
		</div>
	</Panel>
{/snippet}

<AppShell
	leftVisible={!embed && leftVisible}
	rightVisible={!embed && rightVisible}
	topVisible={topVisible}
	topHeight={48}
	bottomVisible={false}
	{maximizedZone}
	header={!embed ? headerContent : undefined}
	appBar={!embed ? appBarContent : undefined}
	sidebarTop={sidebarTopContent}
	sidebarRight={sidebarRightContent}
>
	<div style="width: 100%; height: 100%; background-color: var(--bg-surface); position: relative; display: flex; flex-direction: column; align-items: center; overflow: hidden;">
		{#if errorMessage}
			<div style="margin: var(--space-8); padding: var(--space-4); background-color: var(--color-red-100); color: var(--color-red-900); border: 1px solid var(--color-red-200); border-radius: var(--control-radius);">
				{errorMessage}
			</div>
		{:else if !srcdocContent}
			<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: var(--text-secondary);">
				Loading {publication}...
			</div>
		{:else}
			<!-- TODO: Consider using direct contentDocument mutation or a shadow DOM instead of srcdoc 
			     to prevent flashing on slower devices when the content updates. -->
			<!-- TODO: Consider using direct contentDocument mutation or a shadow DOM instead of srcdoc 
			     to prevent flashing on slower devices when the content updates. -->
			<iframe 
				bind:this={iframeElement}
				srcdoc={srcdocContent} 
				title="Vyasa Content"
				style="width: 100%; max-width: 900px; height: 100%; border: 0; border-left: 1px solid var(--border-base); border-right: 1px solid var(--border-base); background-color: var(--color-white); box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);"
			></iframe>
		{/if}
	</div>
</AppShell>
