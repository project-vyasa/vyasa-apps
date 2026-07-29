<script lang="ts">
	import { page } from '$app/state';
	import { loadPublication } from '$lib/viewer/publication-loader';
	import { ViewerDb } from '$lib/ViewerDb';
	import { onMount, onDestroy } from 'svelte';
	import type { PackageData } from '$lib/types';
	import { activePublication } from '$lib/viewer/active-publication.svelte';
	import ExploreView from '$lib/components/ExploreView.svelte';
	import LoadingBrand from '$lib/components/LoadingBrand.svelte';

	const publisher = $derived(page.params.publisher || '');
	const publication = $derived(page.params.publication || '');

	let packageData = $state<PackageData | null>(null);
	let loading = $state(true);

	const viewerDb = new ViewerDb();

	onMount(async () => {
		if (publisher && publication) {
			try {
				const catalogParam = page.url.searchParams.get('catalog') || activePublication.catalogUrl || null;
				const result = await loadPublication(publisher, publication, viewerDb, catalogParam);
				packageData = result.packageData;
				activePublication.setPublication(publisher, publication, catalogParam);
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
	<LoadingBrand message="Loading visual explore data for {publication}…" />
{:else}
	<ExploreView {publisher} {publication} {packageData} />
{/if}
