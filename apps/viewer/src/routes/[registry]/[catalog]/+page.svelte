<script lang="ts">
	import { page } from '$app/state';
	import LibraryContainer from '$lib/components/LibraryContainer.svelte';

	const registryId = $derived(page.params.registry || '');
	const catalogId = $derived(page.params.catalog || '');
</script>

<LibraryContainer {registryId} {catalogId} />
