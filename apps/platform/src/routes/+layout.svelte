<script lang="ts">
	import '@project-vyasa/vyasa-ui/style/design-system.css';
	import { ThemeProvider, ToastProvider } from '@project-vyasa/vyasa-ui';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head></svelte:head>

<ToastProvider>
	<ThemeProvider>
		{@render children?.()}
	</ThemeProvider>
</ToastProvider>
