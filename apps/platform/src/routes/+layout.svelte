<script lang="ts">
	import '@project-vyasa/vyasa-ui/style/design-system.css';
	import { ThemeProvider, ToastProvider } from '@project-vyasa/vyasa-ui';
	import favicon from '$lib/assets/favicon.svg';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ToastProvider>
	<ThemeProvider>
		{@render children?.()}
	</ThemeProvider>
</ToastProvider>
