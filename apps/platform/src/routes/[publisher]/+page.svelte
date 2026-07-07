<script lang="ts">
	import { page } from '$app/stores';
	import LibraryContainer from '$lib/components/LibraryContainer.svelte';

	const publisher = $derived($page.params.publisher || '');
</script>

<LibraryContainer {publisher} />
