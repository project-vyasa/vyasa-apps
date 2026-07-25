<script lang="ts">
	import { viewerSettings } from '$lib/settings.svelte';
	import { DEFAULT_REGISTRY_URL, fetchCatalog } from '$lib/registry';
	import { loadPublication } from '$lib/viewer/publication-loader';
	import { ViewerDb } from '$lib/ViewerDb';
	import { activePublication } from '$lib/viewer/active-publication.svelte';
	import { onMount, onDestroy } from 'svelte';
	import type { Registry, Catalog, PackageData } from '$lib/types';
	import { Panel, Badge, Alert, CodeEditor, Tree, type TreeNode } from '@project-vyasa/vyasa-ui';
	import { Globe, Server, Database, FileCode } from 'lucide-svelte';

	interface CatalogDiagnostic {
		url: string;
		status: 'loading' | 'success' | 'error';
		error?: string;
		catalog?: Catalog | null;
	}

	interface CustomRegistryDiagnostic {
		url: string;
		status: 'loading' | 'success' | 'error';
		error?: string;
		registryData?: Registry | null;
		publisherCatalogs: CatalogDiagnostic[];
	}

	let globalRegistryUrl = $derived(
		viewerSettings.enableGlobalRegistry ? DEFAULT_REGISTRY_URL : ''
	);
	let globalRegistryData = $state<Registry | null>(null);
	let globalRegistryError = $state<string | null>(null);
	let globalPublisherCatalogs = $state<CatalogDiagnostic[]>([]);

	let customRegistries = $state<CustomRegistryDiagnostic[]>([]);
	let customCatalogs = $state<CatalogDiagnostic[]>([]);

	let activePubUrl = $state('');
	let activePackageData = $state<PackageData | null>(null);
	let activePubError = $state<string | null>(null);

	let selectedId = $state<string | undefined>(undefined);
	let expandedIds = $state<Set<string>>(new Set(['global-reg', 'custom-regs-group', 'custom-cats-group']));

	const viewerDb = new ViewerDb();

	onMount(async () => {
		// 1. Fetch Global Registry JSON and its Publisher Catalogs
		if (viewerSettings.enableGlobalRegistry) {
			const regUrl = globalRegistryUrl;
			try {
				const res = await fetch(regUrl);
				if (res.ok) {
					const data: Registry = await res.json();
					globalRegistryData = data;
					if (data.publishers) {
						globalPublisherCatalogs = await Promise.all(
							data.publishers.map(async (p) => {
								try {
									const cat = await fetchCatalog(p.catalog_url);
									return { url: p.catalog_url, status: 'success', catalog: cat };
								} catch (err: any) {
									return { url: p.catalog_url, status: 'error', error: err.message };
								}
							})
						);
					}
				} else {
					globalRegistryError = `HTTP ${res.status}: ${res.statusText}`;
				}
			} catch (err: any) {
				globalRegistryError = err.message || String(err);
			}
		}

		// 2. Fetch Custom / Local Registries JSON and their Publisher Catalogs
		if (viewerSettings.enableCustomRegistries) {
			const regUrls = viewerSettings.customRegistryUrls;
			customRegistries = await Promise.all(
				regUrls.map(async (url) => {
					try {
						const res = await fetch(url);
						if (res.ok) {
							const data: Registry = await res.json();
							let pubCats: CatalogDiagnostic[] = [];
							if (data.publishers) {
								pubCats = await Promise.all(
									data.publishers.map(async (p) => {
										try {
											const cat = await fetchCatalog(p.catalog_url);
											return { url: p.catalog_url, status: 'success', catalog: cat };
										} catch (err: any) {
											return { url: p.catalog_url, status: 'error', error: err.message };
										}
									})
								);
							}
							return {
								url,
								status: 'success',
								registryData: data,
								publisherCatalogs: pubCats
							};
						} else {
							return {
								url,
								status: 'error',
								error: `HTTP ${res.status}: ${res.statusText}`,
								publisherCatalogs: []
							};
						}
					} catch (err: any) {
						return {
							url,
							status: 'error',
							error: err.message || String(err),
							publisherCatalogs: []
						};
					}
				})
			);
		}

		// 3. Fetch ALL Custom / Private Catalogs configured in settings
		const customUrls = viewerSettings.customCatalogUrls;
		customCatalogs = await Promise.all(
			customUrls.map(async (url) => {
				try {
					const cat = await fetchCatalog(url);
					return { url, status: 'success', catalog: cat };
				} catch (err: any) {
					return { url, status: 'error', error: err.message };
				}
			})
		);

		// 4. Fetch Active Publication Manifest (if active)
		const pub = activePublication.publisher;
		const publicationId = activePublication.publication;
		if (pub && publicationId) {
			try {
				const result = await loadPublication(pub, publicationId, viewerDb, activePublication.catalogUrl);
				activePubUrl = result.diagPublicationUrl;
				activePackageData = result.packageData;
			} catch (err: any) {
				activePubError = err.message || String(err);
			}
		}
	});

	onDestroy(() => {
		viewerDb.close();
	});

	let treeData = $derived.by<TreeNode[]>(() => {
		const nodes: TreeNode[] = [];

		// 1. Global Registry
		if (viewerSettings.enableGlobalRegistry) {
			const children: TreeNode[] = globalPublisherCatalogs.map((item) => ({
				id: `global-cat-${item.url}`,
				label: item.catalog?.identifier || item.catalog?.title || item.url.split('/').slice(-2).join('/'),
				icon: Database,
				targetType: 'catalog',
				url: item.url,
				status: item.status,
				error: item.error,
				data: item.catalog
			}));

			nodes.push({
				id: 'global-reg',
				label: 'Global Registry',
				icon: Globe,
				targetType: 'registry',
				url: globalRegistryUrl,
				status: globalRegistryError ? 'error' : globalRegistryData ? 'success' : 'loading',
				error: globalRegistryError,
				data: globalRegistryData,
				children: children.length > 0 ? children : undefined
			});
		}

		// 2. Custom Registries
		if (viewerSettings.enableCustomRegistries && customRegistries.length > 0) {
			const regChildren: TreeNode[] = customRegistries.map((reg) => {
				const pubChildren: TreeNode[] = reg.publisherCatalogs.map((item) => ({
					id: `custom-cat-${reg.url}-${item.url}`,
					label: item.catalog?.identifier || item.catalog?.title || item.url.split('/').slice(-2).join('/'),
					icon: Database,
					targetType: 'catalog',
					url: item.url,
					status: item.status,
					error: item.error,
					data: item.catalog
				}));

				return {
					id: `custom-reg-${reg.url}`,
					label: reg.registryData?.title || reg.url,
					icon: Server,
					targetType: 'registry',
					url: reg.url,
					status: reg.status,
					error: reg.error,
					data: reg.registryData,
					children: pubChildren.length > 0 ? pubChildren : undefined
				};
			});

			nodes.push({
				id: 'custom-regs-group',
				label: `Custom Registries (${customRegistries.length})`,
				icon: Server,
				children: regChildren
			});
		}

		// 3. Standalone Catalogs
		if (customCatalogs.length > 0) {
			const catChildren: TreeNode[] = customCatalogs.map((item) => ({
				id: `standalone-cat-${item.url}`,
				label: item.catalog?.identifier || item.catalog?.title || item.url.split('/').slice(-2).join('/'),
				icon: Database,
				targetType: 'catalog',
				url: item.url,
				status: item.status,
				error: item.error,
				data: item.catalog
			}));

			nodes.push({
				id: 'custom-cats-group',
				label: `Standalone Catalogs (${customCatalogs.length})`,
				icon: Database,
				children: catChildren
			});
		}

		// 4. Active Publication
		if (activePublication.publication) {
			nodes.push({
				id: 'active-pub',
				label: `Active Publication (${activePublication.publication})`,
				icon: FileCode,
				targetType: 'manifest',
				url: activePubUrl || `${activePublication.publisher}/${activePublication.publication}`,
				status: activePubError ? 'error' : activePackageData ? 'success' : 'loading',
				error: activePubError,
				data: activePackageData?.manifest
			});
		}

		return nodes;
	});

	// Default selection to first available target
	$effect(() => {
		if (!selectedId && treeData.length > 0) {
			selectedId = treeData[0].id;
		}
	});

	function findNode(nodes: TreeNode[], id?: string): TreeNode | undefined {
		if (!id) return undefined;
		for (const node of nodes) {
			if (node.id === id) return node;
			if (node.children) {
				const found = findNode(node.children, id);
				if (found) return found;
			}
		}
		return undefined;
	}

	let selectedNode = $derived(findNode(treeData, selectedId));
</script>

<div class="diagnostics-container">
	<div class="diagnostics-header">
		<h1 class="diagnostics-title">System Diagnostics</h1>
		<p class="diagnostics-desc">Global & Custom Registries, Catalogs & Active Manifest Inspection</p>
	</div>

	<div class="diagnostics-layout">
		<!-- Sidebar Tree -->
		<div class="sidebar-pane">
			<Panel title="Inspection Targets" icon={Server}>
				<div class="sidebar-tree-wrapper">
					<Tree data={treeData} bind:selectedId bind:expandedIds onSelect={(node) => (selectedId = node.id)} />
				</div>
			</Panel>
		</div>

		<!-- Content Editor Pane -->
		<div class="content-pane">
			{#if selectedNode}
				<Panel title={selectedNode.label} icon={selectedNode.icon || Globe}>
					{#snippet actions()}
						{#if selectedNode.status}
							<Badge variant={selectedNode.status === 'success' ? 'success' : selectedNode.status === 'error' ? 'danger' : 'warning'}>
								{selectedNode.status.toUpperCase()}
							</Badge>
						{/if}
					{/snippet}

					<div class="panel-body">
						{#if selectedNode.url}
							<div class="url-bar">
								<span class="url-label">URL:</span>
								<code class="url-value">{selectedNode.url}</code>
							</div>
						{/if}

						{#if selectedNode.error}
							<Alert variant="danger" title="Inspection Error">{selectedNode.error}</Alert>
						{:else if selectedNode.data}
							<div class="editor-container">
								<CodeEditor
									value={JSON.stringify(selectedNode.data, null, 2)}
									language="typescript"
									readonly={true}
									lineWrapping={true}
									theme="dark"
									class="h-full border-0"
								/>
							</div>
						{:else if selectedNode.status === 'loading'}
							<Alert variant="info" title="Loading">Fetching target data...</Alert>
						{:else}
							<Alert variant="info" title="Group Folder">Select a specific registry or catalog from the sidebar tree to inspect its JSON data.</Alert>
						{/if}
					</div>
				</Panel>
			{:else}
				<Panel title="No Target Selected">
					<div class="panel-body">
						<Alert variant="info" title="Select Target">Select a registry, catalog, or publication manifest from the sidebar tree on the left to inspect its contents.</Alert>
					</div>
				</Panel>
			{/if}
		</div>
	</div>
</div>

<style>
	.diagnostics-container {
		width: 100%;
		max-width: 1600px;
		margin: 0 auto;
		padding: var(--space-6);
		background-color: var(--bg-surface);
		min-height: calc(100vh - 4rem);
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
	}

	.diagnostics-header {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}

	.diagnostics-title {
		font-size: 1.8rem;
		font-weight: 700;
		margin: 0;
		color: var(--text-primary);
	}

	.diagnostics-desc {
		color: var(--text-secondary);
		font-size: 1rem;
		margin: 0;
	}

	.diagnostics-layout {
		display: flex;
		gap: var(--space-6);
		align-items: stretch;
		flex: 1;
		min-height: 600px;
	}

	.sidebar-pane {
		width: 320px;
		min-width: 280px;
		max-width: 400px;
		display: flex;
		flex-direction: column;
	}

	.sidebar-tree-wrapper {
		padding: var(--space-2) 0;
		overflow-y: auto;
		max-height: calc(100vh - 220px);
	}

	.content-pane {
		flex: 1;
		display: flex;
		flex-direction: column;
		min-width: 0;
	}

	.panel-body {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		padding: var(--space-4);
		flex: 1;
	}

	.editor-container {
		flex: 1;
		min-height: 480px;
		height: calc(100vh - 260px);
		width: 100%;
		position: relative;
	}

	.url-bar {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		padding: var(--space-3) var(--space-4);
		background-color: var(--bg-surface-alt);
		border-radius: var(--control-radius);
		border: 1px solid var(--border-base);
		font-size: 0.875rem;
	}

	.url-label {
		font-weight: 600;
		color: var(--text-secondary);
	}

	.url-value {
		font-family: var(--font-mono);
		color: var(--text-primary);
		word-break: break-all;
	}
</style>
