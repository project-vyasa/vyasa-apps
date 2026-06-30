<script lang="ts">
	import { page } from '$app/stores';
	import { AppShell, Button, Icon, Input, Panel } from '@project-vyasa/vyasa-ui';
	import { Menu, Search, Sun, Moon, Maximize, Settings, AlignLeft, ChevronLeft, ChevronRight, LayoutPanelTop } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { onMount, onDestroy } from 'svelte';
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

	// --- Viewer State ---
	let currentUrnInput = $state('');
	let srcdocContent = $state('');
	let errorMessage = $state<string | null>(null);
	let activeView = $state('reference');

	let packageData = $state<{
		manifest: any;
		structure: any;
		projections: Record<string, string>;
	} | null>(null);

	let iframeElement: HTMLIFrameElement;
	let viewerDb = new ViewerDb();
	let graphRuntime: VyasaViewerRuntime | null = null;
	let schemeParts: string[] = [];
	let urnComponents: string[] = [];
	let flatUrns: string[] = [];
	
	// Update currentUrnInput when URL changes
	$effect(() => {
		currentUrnInput = urn;
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
			
			// 2. Resolve publisher's catalog URL from a registry (mocked for now to local docs or remote)
			// In a real scenario, fetch project-vyasa.github.io/vyasa-docs/registry.json
			let catalogUrl = '/samples/catalog.json';
			
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
			
			const manifestRows = await viewerDb.query("SELECT key, value FROM manifest");
			const manifest: Record<string, string> = {};
			for (const row of manifestRows) {
				manifest[row[0] as string] = row[1] as string;
			}
			
			if (manifest['package_type'] !== 'view') throw new Error("Unsupported package type.");
			
			const tplRows = await viewerDb.query("SELECT view_name, block_type, content FROM html_templates");
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
		if (graphRuntime && packageData) {
			renderCurrentUrn(currentUrn);
		}
	});

	async function renderCurrentUrn(targetUrn: string) {
		if (!graphRuntime || !packageData) return;
		
		try {
			let prefix = `urn:vyasa:${publisher}:${publication}`;
			if (targetUrn === 'root') {
				targetUrn = flatUrns.length > 0 ? flatUrns[0] : '1';
			}
			const fullUrn = `${prefix}:${targetUrn}`; 
			
			const query = graphRuntime.build_viewport_query(fullUrn, 50); // Fetch up to 50 blocks
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
			
			const tplRows = await viewerDb.query("SELECT view_name, block_type, content FROM html_templates");
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
			srcdocContent = `<div style="padding: 2rem; color: red;">Failed to weave view: ${e.message || e}</div>`;
		}
	}

	function navigateUrn() {
		if (currentUrnInput) {
			goto(`/${publisher}/${publication}/${currentUrnInput}`);
		}
	}
	
	function navigatePrev() {
		const currentIdx = flatUrns.indexOf(urn);
		if (currentIdx > 0) {
			goto(`/${publisher}/${publication}/${flatUrns[currentIdx - 1]}`);
		}
	}
	
	function navigateNext() {
		const currentIdx = flatUrns.indexOf(urn);
		if (currentIdx >= 0 && currentIdx < flatUrns.length - 1) {
			goto(`/${publisher}/${publication}/${flatUrns[currentIdx + 1]}`);
		} else if (currentIdx === -1 && flatUrns.length > 0) {
			goto(`/${publisher}/${publication}/${flatUrns[0]}`);
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
			<Button variant="ghost" size="icon" icon={Sun} title="Toggle Theme" />
			<Button variant="ghost" size="icon" icon={AlignLeft} title="Toggle Density" />
			<Button variant="ghost" size="icon" icon={Settings} title="Settings" />
		</div>
	</div>
{/snippet}

{#snippet appBarContent()}
	<div style="display: flex; flex-direction: column; align-items: center; gap: var(--space-4); padding: var(--space-4) 0; width: 100%; height: 100%; background-color: var(--bg-surface);">
		<Button variant="ghost" size="icon" icon={Search} title="Search" />
		<Button variant="ghost" size="icon" icon={LayoutPanelTop} title="Layouts" />
	</div>
{/snippet}

{#snippet sidebarTopContent()}
	<!-- Phase 1: Basic Text box with Left/Right Arrows for Navigation -->
	<div style="display: flex; align-items: center; justify-content: space-between; width: 100%; padding: var(--space-2); background-color: var(--bg-surface); border-bottom: 1px solid var(--border-base);">
		<Button variant="ghost" size="icon" icon={ChevronLeft} title="Previous" onclick={navigatePrev} />
		<div style="display: flex; gap: var(--space-2); width: 100%; max-width: 300px; padding: 0 var(--space-4);">
			<Input 
				bind:value={currentUrnInput} 
				onkeydown={(e) => e.key === 'Enter' && navigateUrn()} 
				placeholder="Enter URN e.g. 1:1" 
			/>
			<Button variant="secondary" onclick={navigateUrn}>Go</Button>
		</div>
		<Button variant="ghost" size="icon" icon={ChevronRight} title="Next" onclick={navigateNext} />
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
			<iframe 
				bind:this={iframeElement}
				srcdoc={srcdocContent} 
				title="Vyasa Content"
				style="width: 100%; max-width: 900px; height: 100%; border: 0; border-left: 1px solid var(--border-base); border-right: 1px solid var(--border-base); background-color: var(--color-white); box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);"
			></iframe>
		{/if}
	</div>
</AppShell>
