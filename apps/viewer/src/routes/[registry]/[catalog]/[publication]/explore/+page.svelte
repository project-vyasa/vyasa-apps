<script lang="ts">
	import { page } from '$app/state';
	import { untrack } from 'svelte';
	import type { PackageData } from '$lib/types';
	import { catalogRefFromParams } from '$lib/catalog-ref';
	import { ensurePublication, peekPublication } from '$lib/viewer/publication-session';
	import ExploreView from '$lib/components/ExploreView.svelte';
	import LoadingBrand from '$lib/components/LoadingBrand.svelte';

	const registryId = $derived(page.params.registry || '');
	const catalogId = $derived(page.params.catalog || '');
	const publicationId = $derived(page.params.publication || '');
	const catalogRef = $derived(
		registryId && catalogId && publicationId
			? catalogRefFromParams(registryId, catalogId, publicationId)
			: null
	);

	let packageData = $state<PackageData | null>(null);
	let loading = $state(true);
	let loadGeneration = 0;

	$effect.pre(() => {
		const ref = catalogRef;
		untrack(() => {
			void handleLoad(ref);
		});
	});

	async function handleLoad(ref: ReturnType<typeof catalogRefFromParams> | null) {
		if (!ref) return;
		const generation = ++loadGeneration;
		const peeked = peekPublication(ref);
		if (peeked) {
			packageData = peeked.packageData;
			loading = false;
			return;
		}
		loading = true;
		try {
			const result = await ensurePublication(ref);
			if (generation !== loadGeneration) return;
			packageData = result.packageData;
		} catch (e) {
			if (generation !== loadGeneration) return;
			console.error('Failed to load explore publication:', e);
		} finally {
			if (generation === loadGeneration) loading = false;
		}
	}
</script>

{#if loading}
	<LoadingBrand message="Loading visual explore data for {publicationId}…" />
{:else}
	<ExploreView {registryId} {catalogId} {publicationId} {packageData} />
{/if}
