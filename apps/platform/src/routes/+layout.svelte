<script lang="ts">
	import '@project-vyasa/vyasa-ui/style/design-system.css';
	import { ThemeProvider, ToastProvider, AppShell } from '@project-vyasa/vyasa-ui';
	import { setContext, type Snippet } from 'svelte';
	import ViewerAppBar from '$lib/components/ViewerAppBar.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	let sidebarLeft = $state<Snippet | undefined>(undefined);
	let sidebarRight = $state<Snippet | undefined>(undefined);
	let sidebarTop = $state<Snippet | undefined>(undefined);
	let panelBottom = $state<Snippet | undefined>(undefined);

	let leftVisible = $state(true);
	let rightVisible = $state(false);
	let topVisible = $state(true);
	let bottomVisible = $state(false);

	setContext('shellState', {
		setSidebarLeft: (s: Snippet | undefined) => (sidebarLeft = s),
		setSidebarRight: (s: Snippet | undefined) => (sidebarRight = s),
		setSidebarTop: (s: Snippet | undefined) => (sidebarTop = s),
		setPanelBottom: (s: Snippet | undefined) => (panelBottom = s),
		toggleLeft: () => (leftVisible = !leftVisible),
		toggleRight: () => (rightVisible = !rightVisible),
		toggleTop: () => (topVisible = !topVisible),
		toggleBottom: () => (bottomVisible = !bottomVisible)
	});
</script>

<svelte:head></svelte:head>

<ToastProvider>
	<ThemeProvider>
		<AppShell
			{sidebarLeft}
			{sidebarRight}
			{sidebarTop}
			{panelBottom}
			{leftVisible}
			{rightVisible}
			{topVisible}
			{bottomVisible}
			topHeight={48}
		>
			{#snippet appBar()}
				<ViewerAppBar />
			{/snippet}

			{@render children?.()}
		</AppShell>
	</ThemeProvider>
</ToastProvider>
