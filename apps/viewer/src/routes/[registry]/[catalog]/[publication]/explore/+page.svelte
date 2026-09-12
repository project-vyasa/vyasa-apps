<script lang="ts">
	import { page } from '$app/state';
	import { loadPublication } from '$lib/viewer/publication-loader';
	import { ViewerDb } from '$lib/ViewerDb';
	import { onMount, onDestroy } from 'svelte';
	import type { PackageData } from '$lib/types';
	import { activePublication } from '$lib/viewer/active-publication.svelte';
	import { catalogRefFromParams } from '$lib/catalog-ref';
	import ExploreView from '$lib/components/ExploreView.svelte';
	import LoadingBrand from '$lib/components/LoadingBrand.svelte';

	const registryId = $derived(page.params.registry || '');
	const catalogId = $derived(page.params.catalog || '');
	const publicationId = $derived(page.params.publication || '');

	let packageData = $state<PackageData | null>(null);
	let loading = $state(true);

	const viewerDb = new ViewerDb();

	onMount(async () => {
		if (registryId && catalogId && publicationId) {
			try {
				const ref = catalogRefFromParams(registryId, catalogId, publicationId);
				const result = await loadPublication(ref, viewerDb);
				packageData = result.packageData;
				const pubTitle =
					result.diagCatalog?.publications?.find((i) => i.id === ref.publicationId)?.title ||
					result.packageData.manifest.title ||
					ref.publicationId;
				activePublication.setPublication(ref, result.diagCatalogUrl);
				activePublication.setMetadata(
					pubTitle,
					result.diagPublicationUrl,
					result.manifestTimestamp ?? result.packageData.manifest.timestamp,
					result.diagCatalogUrl,
					result.catalogUpdated
				);
			} catch (e) {
				console.error('Failed to load explore publication:', e);
			} finally {
				loading = false;
			}
		}
	});

	onDestroy(() => {
		viewerDb.close();
	});
</script>

{#if loading}
	<LoadingBrand message="Loading visual explore data for {publicationId}…" />
{:else}
	<ExploreView {registryId} {catalogId} {publicationId} {packageData} />
{/if}
