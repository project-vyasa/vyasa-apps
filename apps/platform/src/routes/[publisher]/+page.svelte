<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { AppShell, Button } from '@project-vyasa/vyasa-ui';
	import { Settings, Library, BookOpen, Bug } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { resolvePublisherCatalogUrl, fetchCatalog } from '$lib/registry';
	import type { Catalog } from '$lib/types';
	import ViewerHeader from '$lib/components/ViewerHeader.svelte';
	import ViewerAppBar from '$lib/components/ViewerAppBar.svelte';
	import LibraryView from '$lib/components/LibraryView.svelte';
	import type { LibraryPublisherData } from '$lib/types';

	const publisher = $derived($page.params.publisher || '');
	
	let libraryData = $state<LibraryPublisherData[]>([]);
	let loading = $state(true);
	
	const diagRegistryUrl = $derived('https://project-vyasa.github.io/vyasa-docs/registry.json');
	let diagCatalogUrl = $state('');

	onMount(async () => {
		try {
			loading = true;
			const catalogUrl = await resolvePublisherCatalogUrl(publisher);
			diagCatalogUrl = catalogUrl;
			
			const catalogData = await fetchCatalog(catalogUrl);
			
			libraryData = [{
				publisher: {
					identifier: publisher,
					title: catalogData.catalog?.publisher || publisher,
					catalog_url: catalogUrl
				},
				sourceUrl: catalogUrl,
				catalog: catalogData
			}];
		} catch (e: any) {
			console.error("Failed to load catalog:", e);
			libraryData = [{
				publisher: {
					identifier: publisher,
					title: publisher,
					catalog_url: diagCatalogUrl || ''
				},
				sourceUrl: diagCatalogUrl || '',
				catalog: null,
				error: e.message || String(e)
			}];
		} finally {
			loading = false;
		}
	});
</script>

<style>
	.content-container {
		max-width: 1200px;
		margin: 0 auto;
	}
	.header-section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--space-8);
		padding-bottom: 0;
	}
	.page-title {
		font-size: 2.5rem;
		font-weight: bold;
		margin: 0;
	}
	.page-desc {
		color: var(--text-secondary);
		font-size: 1.125rem;
		margin-top: var(--space-2);
	}
</style>

{#snippet headerContent()}
	<ViewerHeader showRightToggle={false} />
{/snippet}

{#snippet appBarContent()}
	<ViewerAppBar 
		active="library" 
		{publisher} 
		{diagRegistryUrl}
		{diagCatalogUrl}
		diagCatalog={libraryData[0]?.catalog}
	/>
{/snippet}

<AppShell 
	appBar={appBarContent} 
	header={headerContent} 
>
	<div class="content-container">
		<div class="header-section">
			<div>
				<h1 class="page-title">Filtered View</h1>
				<p class="page-desc">Showing library for publisher '{publisher}'. <a href="{base}/" style="color: var(--text-primary);">View all publishers</a></p>
			</div>
		</div>

		<LibraryView publishers={libraryData} {loading} />
	</div>
</AppShell>
