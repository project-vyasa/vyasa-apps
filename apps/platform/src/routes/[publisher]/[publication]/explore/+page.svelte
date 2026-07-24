<script lang="ts">
	import { page } from '$app/state';
	import { loadPublication } from '$lib/viewer/publication-loader';
	import { ViewerDb } from '$lib/ViewerDb';
	import { onMount, onDestroy } from 'svelte';
	import type { PackageData } from '$lib/types';
	import { activePublication } from '$lib/viewer/active-publication.svelte';
	import ExploreView from '$lib/components/ExploreView.svelte';

	const publisher = $derived(page.params.publisher || '');
	const publication = $derived(page.params.publication || '');

	let packageData = $state<PackageData | null>(null);
	let loading = $state(true);

	const viewerDb = new ViewerDb();

	onMount(async () => {
		if (publisher && publication) {
			try {
				const result = await loadPublication(publisher, publication, viewerDb);
				packageData = result.packageData;
				activePublication.setPublication(publisher, publication);
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
	<div class="loading-state">Loading visual explore data for {publication}...</div>
{:else}
	<ExploreView {publisher} {publication} {packageData} />
{/if}

<style>
	.loading-state {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		padding: var(--space-12);
		color: var(--text-secondary);
		font-size: 1.125rem;
	}
</style>
