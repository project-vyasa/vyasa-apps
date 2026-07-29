<script lang="ts">
	import '@project-vyasa/vyasa-ui/style/design-system.css';
	import '$lib/brand-theme.css';
	import { ThemeProvider, ToastProvider } from '@project-vyasa/vyasa-ui';
	import PlatformShell from '$lib/components/PlatformShell.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head></svelte:head>

<ToastProvider>
	<ThemeProvider>
		<PlatformShell>
			{@render children?.()}
		</PlatformShell>
	</ThemeProvider>
</ToastProvider>

<style>
	/* Let route pages fill the AppShell content pane for centered loading states. */
	:global(main.area-content) {
		display: flex;
		flex-direction: column;
		min-height: 0;
	}

	:global(main.area-content > *) {
		flex: 1 1 auto;
		display: flex;
		flex-direction: column;
		min-height: 100%;
		width: 100%;
	}
</style>
