<script lang="ts">
	import { base } from '$app/paths';
	import { getAllCatalogs, fetchCatalog, resolveCatalogUrl } from '$lib/registry';
	import type { CatalogSourceError } from '$lib/registry';
	import type { RegistryInfo, LibraryCatalogData } from '$lib/types';
	import LibraryView from '$lib/components/LibraryView.svelte';
	import BrandMark from '$lib/components/BrandMark.svelte';
	import { LOCAL_REGISTRY_ID, registryLibraryPath } from '$lib/catalog-ref';
	import { viewerSettings } from '$lib/settings.svelte';

	interface Props {
		registryId?: string;
		catalogId?: string;
	}

	let { registryId = '', catalogId = '' }: Props = $props();

	let libraryData = $state<LibraryCatalogData[]>([]);
	let registries = $state<RegistryInfo[]>([]);
	let sourceErrors = $state<CatalogSourceError[]>([]);
	let loading = $state(true);
	let multipleCatalogs = $state(false);

	const catalogSourceKey = $derived(
		JSON.stringify({
			registryId,
			catalogId,
			localSources: viewerSettings.localSources
		})
	);

	async function loadLibrary() {
		try {
			loading = true;
			const { registries: allRegistries, catalogs: allCatalogs, sourceErrors: errors } =
				await getAllCatalogs();
			sourceErrors = errors;
			registries = allRegistries;

			let filtered = allCatalogs;
			if (registryId) {
				filtered = filtered.filter((c) => c.registryId === registryId);
			}
			if (catalogId) {
				filtered = filtered.filter((c) => c.catalogEntry.id === catalogId);
			}
			multipleCatalogs = filtered.length > 1;

			if (catalogId && filtered.length === 1) {
				const entry = filtered[0];
				const catalogUrl = await resolveCatalogUrl(entry.registryId, entry.catalogEntry.id);
				const catalogData = await fetchCatalog(catalogUrl);
				libraryData = [
					{
						...entry,
						catalogEntry: { ...entry.catalogEntry, catalog_url: catalogUrl },
						catalog: catalogData
					}
				];
			} else if (catalogId && filtered.length === 0 && registryId) {
				const catalogUrl = await resolveCatalogUrl(registryId, catalogId);
				const catalogData = await fetchCatalog(catalogUrl);
				const sourceKind =
					registryId === LOCAL_REGISTRY_ID ? ('local-registry' as const) : ('global' as const);
				libraryData = [
					{
						registryId,
						catalogEntry: {
							id: catalogId,
							title: catalogData.title || catalogId,
							catalog_url: catalogUrl
						},
						sourceUrl: catalogUrl,
						sourceKind,
						catalog: catalogData
					}
				];
			} else {
				libraryData = await Promise.all(
					filtered.map(async (c) => {
						const data: LibraryCatalogData = { ...c, catalog: null };
						try {
							data.catalog = await fetchCatalog(c.catalogEntry.catalog_url);
						} catch (e: unknown) {
							data.error = e instanceof Error ? e.message : String(e);
						}
						return data;
					})
				);
			}
		} catch (e: unknown) {
			console.error('Failed to load catalog(s):', e);
		} finally {
			loading = false;
		}
	}

	const pageTitle = $derived.by(() => {
		if (catalogId && libraryData[0]) {
			return libraryData[0].catalog?.title || libraryData[0].catalogEntry.title || catalogId;
		}
		if (registryId) {
			return registries.find((r) => r.id === registryId)?.title || registryId;
		}
		return 'Vyasa Directory';
	});

	$effect(() => {
		catalogSourceKey;
		void loadLibrary();
	});
</script>

<div class="content-container">
	<div class="header-section">
		<div>
			<h1 class="page-title">{pageTitle}</h1>
			<p class="page-desc">
				{#if catalogId}
					Showing publications in this catalog.
					{#if registryId}
						<a href="{registryLibraryPath(registryId, base)}" style="color: var(--text-primary);"
							>All catalogs in this registry</a
						>
					{/if}
					{#if multipleCatalogs || registryId}
						<a href="{base}/" style="color: var(--text-primary);">View all registries</a>
					{/if}
				{:else if registryId}
					Browse catalogs in this registry.
					<a href="{base}/" style="color: var(--text-primary);">View all registries</a>
				{:else}
					Browse registries and their catalogs.
				{/if}
			</p>
		</div>
		<BrandMark variant="logo" href={base || '/'} class="library-brand" />
	</div>

	<LibraryView
		{registries}
		catalogs={libraryData}
		{sourceErrors}
		{loading}
		scopeRegistryId={registryId}
		scopeCatalogId={catalogId}
	/>
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
	.page-desc a {
		margin-left: 0.5rem;
	}
</style>
