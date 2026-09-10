<script lang="ts">
	import StudioShell, { type StudioActivity } from '$lib/components/StudioShell.svelte';
	import { LipiActivity, PathaActivity, PhoneticsActivity } from '@project-vyasa/sanskrit';

	let activity = $state<StudioActivity>('lipi');
</script>

<svelte:head>
	<title>Sanskrit Studio — Project Vyasa</title>
</svelte:head>

<StudioShell bind:activity>
	{#if activity === 'lipi'}
		<LipiActivity />
	{:else if activity === 'patha'}
		<PathaActivity />
	{:else}
		<PhoneticsActivity />
	{/if}
</StudioShell>
