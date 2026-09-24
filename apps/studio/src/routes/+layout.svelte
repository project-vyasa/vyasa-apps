<script lang="ts">
	import '@project-vyasa/vyasa-ui/style/design-system.css';
	import { ThemeProvider, ToastProvider } from '@project-vyasa/vyasa-ui';
	import StudioShell from '$lib/components/StudioShell.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<ToastProvider>
	<ThemeProvider>
		<StudioShell>
			{@render children?.()}
		</StudioShell>
	</ThemeProvider>
</ToastProvider>

<style>
	:global(html, body) {
		height: 100%;
		margin: 0;
	}

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
