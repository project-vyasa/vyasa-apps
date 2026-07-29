<script lang="ts">
	import { base } from '$app/paths';
	import { getAllPublishers, fetchCatalog, resolvePublisherCatalogUrl } from '$lib/registry';
	import type { CatalogSourceError } from '$lib/registry';
	import LibraryView from '$lib/components/LibraryView.svelte';
	import BrandMark from '$lib/components/BrandMark.svelte';
	import { viewerSettings } from '$lib/settings.svelte';
	import type { LibraryPublisherData } from '$lib/types';

	interface Props {
		publisher?: string;
	}

	let { publisher = '' }: Props = $props();

	let libraryData = $state<LibraryPublisherData[]>([]);
	let sourceErrors = $state<CatalogSourceError[]>([]);
	let loading = $state(true);
	let multiplePublishers = $state(false);

	const catalogSourceKey = $derived(
		JSON.stringify({
			publisher,
			enableGlobalRegistry: viewerSettings.enableGlobalRegistry,
			enableCustomRegistries: viewerSettings.enableCustomRegistries,
			customRegistries: viewerSettings.customRegistries,
			enableCustomCatalogs: viewerSettings.enableCustomCatalogs,
			customCatalogs: viewerSettings.customCatalogs
		})
	);

	async function loadLibrary() {
		try {
			loading = true;
			const { publishers: allPubs, sourceErrors: errors } = await getAllPublishers();
			sourceErrors = errors;
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
						sourceKind: 'global' as const,
						catalog: catalogData
					}
				];
			} else {
				libraryData = await Promise.all(
					allPubs.map(async (p) => {
						const data: LibraryPublisherData = {
							publisher: p.publisher,
							sourceUrl: p.sourceUrl,
							sourceKind: p.sourceKind,
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
	}

	$effect(() => {
		catalogSourceKey;
		void loadLibrary();
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
		<BrandMark variant="logo" href={base || '/'} class="library-brand" />
	</div>

	<LibraryView publishers={libraryData} {sourceErrors} {loading} />
</div>

<style>
	.content-container {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		min-height: 100%;
		flex: 1 1 auto;
		width: 100%;
	}
	.header-section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--space-8);
		padding: var(--space-8);
		padding-bottom: var(--space-4);
	}
	.header-section :global(.library-brand) {
		width: min(11rem, 34vw);
		aspect-ratio: 1;
		flex-shrink: 0;
	}
	.library-brand :global(img) {
		opacity: 0.95;
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
