<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { AppShell, Button } from '@project-vyasa/vyasa-ui';
	import { Settings } from 'lucide-svelte';
	import { getAllPublishers, fetchCatalog } from '$lib/registry';
	import type { RegistryEntry, LibraryPublisherData } from '$lib/types';
	import ViewerHeader from '$lib/components/ViewerHeader.svelte';
	import ViewerAppBar from '$lib/components/ViewerAppBar.svelte';
	import LibraryView from '$lib/components/LibraryView.svelte';

	let libraryData = $state<LibraryPublisherData[]>([]);
	let loading = $state(true);

	onMount(async () => {
		try {
			const publishers = await getAllPublishers();
			
			// Fetch all catalogs in parallel
			libraryData = await Promise.all(publishers.map(async (p) => {
				const data: LibraryPublisherData = {
					publisher: p.publisher,
					sourceUrl: p.sourceUrl,
					catalog: null
				};
				
				try {
					data.catalog = await fetchCatalog(p.publisher.catalog_url);
				} catch (e: any) {
					data.error = e.message || String(e);
				}
				
				return data;
			}));
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
	<ViewerAppBar active="home" />
{/snippet}

<AppShell header={headerContent} appBar={appBarContent}>
	<div class="content-container">
		<div class="header-section">
			<div>
				<h1 class="page-title">Vyasa Directory</h1>
				<p class="page-desc">Browse publishers and their catalogs.</p>
			</div>
		</div>

		<LibraryView publishers={libraryData} {loading} />
	</div>
</AppShell>
