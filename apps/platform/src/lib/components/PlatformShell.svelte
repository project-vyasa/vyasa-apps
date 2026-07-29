<script lang="ts">
	import { AppShell, AppHeader } from '@project-vyasa/vyasa-ui';
	import { setContext, getContext, type Snippet } from 'svelte';
	import ViewerActivityBar from '$lib/components/ViewerActivityBar.svelte';
	import { activePublication } from '$lib/viewer/active-publication.svelte';
	import { viewerSettings } from '$lib/settings.svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/state';

	const themeContext = getContext<any>('theme');

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
	let leftWidth = $state(320);

	setContext('shellState', {
		setSidebarLeft: (s: Snippet | undefined) => (sidebarLeft = s),
		setLeftWidth: (w: number) => (leftWidth = w),
		setSidebarRight: (s: Snippet | undefined) => (sidebarRight = s),
		setSidebarTop: (s: Snippet | undefined) => (sidebarTop = s),
		setPanelBottom: (s: Snippet | undefined) => (panelBottom = s),
		toggleLeft: () => (leftVisible = !leftVisible),
		toggleRight: () => (rightVisible = !rightVisible),
		toggleTop: () => (topVisible = !topVisible),
		toggleBottom: () => (bottomVisible = !bottomVisible)
	});

	function handleKeydown(e: KeyboardEvent) {
		if (e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey) {
			const key = e.key.toLowerCase();
			if (key === 'b' || e.code === 'KeyB') {
				e.preventDefault();
				viewerSettings.debugMode = !viewerSettings.debugMode;
			} else if (key === 'u' || e.code === 'KeyU') {
				e.preventDefault();
				if (page.url.pathname.includes('/diagnostics')) {
					// Toggle back to active publication or library
					if (activePublication.publication) {
						goto(`${base}${activePublication.readerUrl}`);
					} else {
						goto(`${base}/`);
					}
				} else {
					goto(`${base}${activePublication.diagnosticsUrl}`);
				}
			}
		}
	}

	function formatEpoch(seconds: number | undefined): string {
		if (seconds === undefined) return '';
		return new Date(Number(seconds) * 1000).toLocaleString();
	}

	function shortUrl(url: string): string {
		try {
			const u = new URL(url);
			return `${u.host}${u.pathname}`;
		} catch {
			return url;
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<AppShell
	{sidebarLeft}
	{sidebarRight}
	{sidebarTop}
	{panelBottom}
	{leftVisible}
	{rightVisible}
	{topVisible}
	{bottomVisible}
	{leftWidth}
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
						<div class="debug-meta">
							<span class="debug-item">
								<span class="debug-label">id</span>
								<span class="debug-value">{activePublication.publication}</span>
							</span>
							{#if activePublication.catalogUrl}
								<span class="debug-item">
									<span class="debug-label">catalog</span>
									<span class="debug-value" title={activePublication.catalogUrl}>
										{shortUrl(activePublication.catalogUrl)}
									</span>
								</span>
							{/if}
							{#if activePublication.publicationUrl}
								<span class="debug-item">
									<span class="debug-label">vyview</span>
									<a
										class="debug-value debug-link"
										href={activePublication.publicationUrl}
										target="_blank"
										rel="noopener noreferrer"
										title={activePublication.publicationUrl}
									>
										{shortUrl(activePublication.publicationUrl)}
									</a>
								</span>
							{/if}
							{#if activePublication.catalogUpdated}
								<span class="debug-item">
									<span class="debug-label">updated</span>
									<span class="debug-value">{formatEpoch(activePublication.catalogUpdated)}</span>
								</span>
							{/if}
							{#if activePublication.timestamp}
								<span class="debug-item">
									<span class="debug-label">packed</span>
									<span class="debug-value">{formatEpoch(Number(activePublication.timestamp))}</span>
								</span>
							{/if}
						</div>
					{/if}
				</div>
			{/if}
		</AppHeader>
	{/snippet}

	{#snippet appBar()}
		<ViewerActivityBar />
	{/snippet}

	{@render children?.()}
</AppShell>

<style>
	.header-center-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.15rem;
		width: 100%;
		max-width: 100%;
		min-width: 0;
		font-size: var(--text-xs);
		color: var(--text-secondary);
	}
	.pub-title {
		font-weight: 600;
		color: var(--text-primary);
		font-size: var(--text-sm);
		line-height: 1.2;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 100%;
	}
	.debug-meta {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: baseline;
		gap: 0.15rem 0.65rem;
		width: 100%;
		max-width: 100%;
		font-family: var(--font-mono);
		font-size: 0.68rem;
		line-height: 1.35;
		opacity: 0.85;
	}
	.debug-item {
		display: inline-flex;
		align-items: baseline;
		gap: 0.25rem;
		min-width: 0;
		max-width: 100%;
	}
	.debug-label {
		flex: 0 0 auto;
		opacity: 0.65;
	}
	.debug-label::after {
		content: ':';
	}
	.debug-value {
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		max-width: min(36rem, 48vw);
	}
	.debug-link {
		color: inherit;
		text-decoration: underline;
	}
</style>
