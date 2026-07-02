<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		goto(`${base}/vysamples`, { replaceState: true });
	});
</script>

<div class="flex flex-col items-center justify-center min-h-[50vh] text-center p-8">
	<p class="text-lg text-slate-600 dark:text-slate-400">
		Redirecting to Vyasa viewer...
	</p>
</div>
