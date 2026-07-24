<script lang="ts">
	import { AppShell, AppHeader } from '@project-vyasa/vyasa-ui';
	import { setContext, getContext, type Snippet } from 'svelte';
	import ViewerAppBar from '$lib/components/ViewerAppBar.svelte';
	import { activePublication } from '$lib/viewer/active-publication.svelte';
	import { viewerSettings } from '$lib/settings.svelte';

	const themeContext = getContext<any>('theme');
	$effect(() => {
		console.log('[PlatformShell] getContext("theme") inside PlatformShell:', themeContext);
	});

	interface Props {
		children?: Snippet;
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
	{#snippet header()}
		<AppHeader
			appName="Project Vyasa"
			bind:leftVisible
			bind:rightVisible
			{themeContext}
		>
			{#if activePublication.publication}
				{@const displayTitle = activePublication.title || activePublication.publication}
				<div class="header-center-info">
					<strong class="pub-title">{displayTitle}</strong>
					{#if viewerSettings.debugMode}
						<span class="debug-meta">
							<span class="pub-id">{activePublication.publication}</span>
							{#if activePublication.publicationUrl}
								<span>|</span>
								<span class="pub-url">
									URL: <a href={activePublication.publicationUrl} target="_blank" rel="noopener noreferrer">{activePublication.publicationUrl}</a>
								</span>
							{/if}
							{#if activePublication.timestamp}
								<span>|</span>
								<span class="pub-built">
									Built: {new Date(Number(activePublication.timestamp) * 1000).toLocaleString()}
								</span>
							{/if}
						</span>
					{/if}
				</div>
			{/if}
		</AppHeader>
	{/snippet}

	{#snippet appBar()}
		<ViewerAppBar />
	{/snippet}

	{@render children?.()}
</AppShell>

<style>
	.header-center-info {
		font-size: var(--text-xs);
		color: var(--text-secondary);
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}
	.pub-title {
		font-weight: 600;
		color: var(--text-primary);
		font-size: var(--text-sm);
	}
	.debug-meta {
		opacity: 0.7;
		font-size: 0.85em;
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		font-family: var(--font-mono);
	}
	.debug-meta a {
		color: inherit;
		text-decoration: underline;
	}
</style>
