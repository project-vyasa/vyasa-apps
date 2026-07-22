<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { getAllPublishers, fetchCatalog, resolvePublisherCatalogUrl } from '$lib/registry';
	import LibraryView from '$lib/components/LibraryView.svelte';
	import type { LibraryPublisherData } from '$lib/types';

	interface Props {
		publisher?: string;
	}

	let { publisher = '' }: Props = $props();

	let libraryData = $state<LibraryPublisherData[]>([]);
	let loading = $state(true);
	let multiplePublishers = $state(false);

	onMount(async () => {
		try {
			loading = true;
			const allPubs = await getAllPublishers();
			multiplePublishers = allPubs.length > 1;

			if (publisher) {
				const catalogUrl = await resolvePublisherCatalogUrl(publisher);
				const catalogData = await fetchCatalog(catalogUrl);

				libraryData = [
					{
						publisher: {
							identifier: publisher,
							title: catalogData.title || publisher,
							catalog_url: catalogUrl
						},
						sourceUrl: catalogUrl,
						catalog: catalogData
					}
				];
			} else {
				libraryData = await Promise.all(
					allPubs.map(async (p) => {
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
					})
				);
			}
		} catch (e: any) {
			console.error('Failed to load catalog(s):', e);
		} finally {
			loading = false;
		}
	});
</script>

<div class="content-container">
	<div class="header-section">
		<div>
			<h1 class="page-title">
				{publisher ? libraryData[0]?.publisher.title || publisher : 'Vyasa Directory'}
			</h1>
			<p class="page-desc">
				{#if publisher}
					Showing publications for {libraryData[0]?.publisher.title || publisher}.
					{#if multiplePublishers}
						<a href="{base}/" style="color: var(--text-primary);">View all publishers</a>
					{/if}
				{:else}
					Browse publishers and their catalogs.
				{/if}
			</p>
		</div>
	</div>

	<LibraryView publishers={libraryData} {loading} />
</div>

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
