<script lang="ts">
	import { page } from '$app/state';
	import LibraryContainer from '$lib/components/LibraryContainer.svelte';

	const registryId = $derived(page.params.registry || '');
</script>

<LibraryContainer {registryId} />
