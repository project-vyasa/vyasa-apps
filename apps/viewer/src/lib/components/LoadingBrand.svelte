<script lang="ts">
	import BrandMark from '$lib/components/BrandMark.svelte';

	interface Props {
		message?: string;
	}

	let { message = 'Loading…' }: Props = $props();
</script>

<div class="loading-brand" role="status" aria-live="polite">
	<BrandMark variant="logo" class="loading-logo" />
	{#if message}
		<p class="loading-message">{message}</p>
	{/if}
</div>

<style>
	.loading-brand {
		box-sizing: border-box;
		display: flex;
		flex: 1 1 auto;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--space-4);
		width: 100%;
		min-height: 100%;
		padding: var(--space-8);
		text-align: center;
		color: var(--text-secondary);
		overflow: auto;
	}

	.loading-brand :global(.loading-logo) {
		width: min(10rem, 40vw);
		aspect-ratio: 1;
		height: auto;
		flex: 0 0 auto;
		animation: brand-pulse 2s ease-in-out infinite;
	}

	.loading-message {
		margin: 0;
		font-size: var(--text-sm);
		max-width: min(28rem, 90%);
		line-height: 1.5;
		overflow-wrap: anywhere;
		white-space: normal;
	}

	@keyframes brand-pulse {
		0%,
		100% {
			opacity: 0.72;
			transform: scale(0.985);
		}
		50% {
			opacity: 1;
			transform: scale(1);
		}
	}
</style>
