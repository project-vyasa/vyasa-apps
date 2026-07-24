<script lang="ts">
	import '@project-vyasa/vyasa-ui/style/design-system.css';
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


