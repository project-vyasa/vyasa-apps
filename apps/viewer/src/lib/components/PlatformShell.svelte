<script lang="ts">
	import { AppShell, AppHeader } from '@project-vyasa/vyasa-ui';
	import { setContext, getContext, type Snippet } from 'svelte';
	import { MediaQuery } from 'svelte/reactivity';
	import EditionBanner from '$lib/components/EditionBanner.svelte';
	import ViewerActivityBar from '$lib/components/ViewerActivityBar.svelte';
	import { Info } from 'lucide-svelte';
	import { activePublication } from '$lib/viewer/active-publication.svelte';
	import { viewerSettings } from '$lib/settings.svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { brandIconSrc } from '$lib/brand';
	import { AppSwitcher } from '@project-vyasa/platform-chrome';
	import { dev } from '$app/environment';
	import { otherPlatformApps, pagesAppGuideHref } from '../../../../../scripts/gh-pages-apps.mjs';

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
	let chromeHidden = $state(false);
	let editionOpen = $state(false);

	const handsetQuery = new MediaQuery('max-width: 48rem');
	let wasHandset = $state(false);
	const isReaderSurface = $derived(
		Boolean(page.params.publication) &&
			!page.url.pathname.includes('/explore') &&
			!page.url.pathname.includes('/diagnostics')
	);
	$effect(() => {
		const now = handsetQuery.current;
		if (now && !wasHandset) leftVisible = false;
		wasHandset = now;
	});
	$effect(() => {
		if (!handsetQuery.current || !isReaderSurface) chromeHidden = false;
	});

	setContext('shellState', {
		setSidebarLeft: (s: Snippet | undefined) => (sidebarLeft = s),
		setLeftWidth: (w: number) => (leftWidth = w),
		setSidebarRight: (s: Snippet | undefined) => (sidebarRight = s),
		setSidebarTop: (s: Snippet | undefined) => (sidebarTop = s),
		setPanelBottom: (s: Snippet | undefined) => (panelBottom = s),
		toggleLeft: () => (leftVisible = !leftVisible),
		closeLeft: () => (leftVisible = false),
		toggleRight: () => (rightVisible = !rightVisible),
		toggleTop: () => (topVisible = !topVisible),
		toggleBottom: () => (bottomVisible = !bottomVisible),
		toggleChrome: () => {
			if (!handsetQuery.current) return;
			chromeHidden = !chromeHidden;
		},
		revealChrome: () => {
			chromeHidden = false;
		}
	});

	function closeEdition() {
		editionOpen = false;
	}

	$effect(() => {
		activePublication.publicationId;
		editionOpen = false;
	});

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && editionOpen) {
			e.preventDefault();
			closeEdition();
			return;
		}
		if (e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey) {
			const key = e.key.toLowerCase();
			if (key === 'b' || e.code === 'KeyB') {
				e.preventDefault();
				viewerSettings.debugMode = !viewerSettings.debugMode;
			} else if ((key === 'u' || e.code === 'KeyU') && (viewerSettings.debugMode || page.url.pathname.includes('/diagnostics'))) {
				e.preventDefault();
				if (page.url.pathname.includes('/diagnostics')) {
					// Toggle back to active publication or library
					if (activePublication.publicationId) {
						goto(activePublication.readerUrl);
					} else {
						goto(base || '/');
					}
				} else {
					goto(activePublication.diagnosticsUrl);
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
	{topVisible}
	{bottomVisible}
	{leftWidth}
	topHeight={48}
	bind:leftVisible
	bind:rightVisible
	bind:chromeHidden
>
	{#snippet header()}
		<AppHeader
			appName="Project Vyasa"
			href={base || '/'}
			logoSrc={brandIconSrc(base)}
			logoAlt="Project Vyasa"
			bind:leftVisible
			bind:rightVisible
			{themeContext}
		>
			{#snippet headerRight()}
				<AppSwitcher
					apps={otherPlatformApps('viewer', { dev })}
					guideHref={pagesAppGuideHref('viewer', { dev })}
				/>
			{/snippet}
			{#if activePublication.publicationId}
				{@const displayTitle = activePublication.title || activePublication.publicationId}
				{@const hasEditionDetails =
					Boolean(activePublication.edition) || activePublication.workNotes.length > 0}
				<div class="header-center-info">
					<div class="pub-title-row">
						<strong class="pub-title">{displayTitle}</strong>
						{#if hasEditionDetails}
							<button
								type="button"
								class="edition-cue"
								aria-label="Edition details"
								aria-expanded={editionOpen}
								onclick={() => (editionOpen = !editionOpen)}
							>
								<Info size={15} strokeWidth={2} />
							</button>
						{/if}
					</div>
					{#if viewerSettings.debugMode}
						<div class="debug-meta">
							<span class="debug-item">
								<span class="debug-label">registry</span>
								<span class="debug-value">{activePublication.registryId}</span>
							</span>
							<span class="debug-item">
								<span class="debug-label">catalog</span>
								<span class="debug-value">{activePublication.catalogId}</span>
							</span>
							<span class="debug-item">
								<span class="debug-label">publication</span>
								<span class="debug-value">{activePublication.publicationId}</span>
							</span>
							<span class="debug-item">
								<span class="debug-label">vyasa</span>
								<span class="debug-value" title={activePublication.vyasaUri}>
									{activePublication.vyasaUri}
								</span>
							</span>
							{#if activePublication.catalogUrl}
								<span class="debug-item">
									<span class="debug-label">catalog.json</span>
									<span class="debug-value" title={activePublication.catalogUrl}>
										{shortUrl(activePublication.catalogUrl)}
									</span>
								</span>
							{/if}
							{#if activePublication.vyviewUrl}
								<span class="debug-item">
									<span class="debug-label">vyview</span>
									<a
										class="debug-value debug-link"
										href={activePublication.vyviewUrl}
										target="_blank"
										rel="noopener noreferrer"
										title={activePublication.vyviewUrl}
									>
										{shortUrl(activePublication.vyviewUrl)}
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
									<span class="debug-value">{formatEpoch(Number(activePublication.timestamp))}</span
									>
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

{#if editionOpen && (activePublication.edition || activePublication.workNotes.length > 0)}
	<div class="edition-layer">
		<button type="button" class="edition-backdrop" aria-label="Close edition details" onclick={closeEdition}></button>
		<div class="edition-popover" role="dialog" aria-label="Edition details">
			<EditionBanner edition={activePublication.edition} workNotes={activePublication.workNotes} />
		</div>
	</div>
{/if}

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
	.pub-title-row {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.15rem;
		max-width: 100%;
		min-width: 0;
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
		min-width: 0;
	}
	.edition-cue {
		flex: 0 0 auto;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1.75rem;
		height: 1.75rem;
		margin: 0;
		padding: 0;
		border: 0;
		border-radius: 999px;
		background: transparent;
		color: var(--text-secondary);
		cursor: pointer;
	}
	.edition-cue:hover,
	.edition-cue[aria-expanded='true'] {
		color: var(--text-primary);
		background: color-mix(in srgb, var(--text-primary) 8%, transparent);
	}
	.edition-layer {
		position: fixed;
		inset: 0;
		z-index: 80;
	}
	.edition-backdrop {
		position: absolute;
		inset: 0;
		margin: 0;
		padding: 0;
		border: 0;
		background: transparent;
		cursor: default;
	}
	.edition-popover {
		position: absolute;
		top: 2.75rem;
		left: 50%;
		transform: translateX(-50%);
		width: min(28rem, calc(100vw - 1rem));
		max-height: min(70dvh, 22rem);
		overflow: auto;
		margin: 0;
		padding: 0.75rem 0.9rem;
		border: 1px solid var(--border-base);
		border-radius: 6px;
		background: var(--bg-surface);
		color: var(--text-primary);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
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
