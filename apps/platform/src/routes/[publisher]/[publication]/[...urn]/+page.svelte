<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import { Panel, ListView, Select, Switch } from '@project-vyasa/vyasa-ui';
	import { BookOpen } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { onDestroy, getContext, untrack, type Snippet } from 'svelte';
	import { ViewerDb } from '$lib/ViewerDb';
	import { loadPublication } from '$lib/viewer/publication-loader';
	import { renderUrn } from '$lib/viewer/urn-renderer';
	import { SidebarState } from '$lib/viewer/sidebar.svelte';
	import ViewerNavBar from '$lib/components/ViewerNavBar.svelte';
	import { activePublication } from '$lib/viewer/active-publication.svelte';
	import { viewerSettings } from '$lib/settings.svelte';
	import { chromeStreamsFromVocabulary } from '$lib/viewer/vocabulary';
	import type { PackageData, Catalog } from '$lib/types';
	import type { VyasaViewerRuntime } from '@project-vyasa/vyasa-viewer-wasm';

	// --- URL Parameters ---
	const publisher = $derived(page.params.publisher || '');
	const publication = $derived(page.params.publication || '');
	const urn = $derived(page.params.urn || 'root');

	// Register sidebars with root shell layout
	const shell = getContext<{
		setSidebarLeft: (s: Snippet | undefined) => void;
		setSidebarRight: (s: Snippet | undefined) => void;
		setSidebarTop: (s: Snippet | undefined) => void;
		setPanelBottom: (s: Snippet | undefined) => void;
	}>('shellState');

	// --- Layout state ---
	let isFullWidth = $state(false);

	// --- Viewer State ---
	let srcdocContent = $state('');
	let errorMessage = $state<string | null>(null);
	let activeView = $state<string | undefined>(undefined);
	let availableViews = $state<string[]>([]);
	let availableStreams = $state<string[]>([]);
	let customGridLayoutJson = $state<string | undefined>(undefined);
	let activeUrns = $state<string[]>([]);
	let packageData = $state<PackageData | null>(null);
	let graphRuntime = $state<VyasaViewerRuntime | null>(null);
	let urnComponents = $state<string[]>([]);
	let currentUrnParts = $state<string[]>([]);
	let iframeElement = $state<HTMLIFrameElement>();
	let showReferenceGutter = $state(true);
	let renderGeneration = 0;

	/** Chrome label stream — persisted; drives speaker badges and nav structure terms. */
	let chromeStream = $state('');
	let showAnnotationGutter = $state(viewerSettings.showAnnotationGutter);
	const chromeStreams = $derived(
		chromeStreamsFromVocabulary(
			packageData?.vocabulary,
			(packageData?.manifest as { primary_stream?: string } | undefined)?.primary_stream
		)
	);

	$effect(() => {
		const stream = chromeStream;
		if (stream) untrack(() => (viewerSettings.chromeStream = stream));
	});
	$effect(() => {
		const show = showAnnotationGutter;
		untrack(() => (viewerSettings.showAnnotationGutter = show));
	});

	// --- Diagnostics metadata for debug display ---
	let diagPublicationUrl = $state('');
	let diagCatalog = $state<Catalog | null>(null);
	let lastLoadedPublisher = '';
	let lastLoadedPublication = '';
	let lastLoadedCatalog = '';

	// --- DB & Sidebar State ---
	const viewerDb = new ViewerDb();
	const sidebar = new SidebarState(
		() => packageData,
		() => urnComponents,
		() => urn,
		() => chromeStream || undefined
	);

	// Register sidebars with Shell
	$effect(() => {
		if (shell) {
			shell.setSidebarLeft(sidebarLeftContent);
			shell.setSidebarTop(sidebarTopContent);
			shell.setSidebarRight(sidebarRightContent);
			return () => {
				shell.setSidebarLeft(undefined);
				shell.setSidebarTop(undefined);
				shell.setSidebarRight(undefined);
			};
		}
	});

	// Synchronize URN parts with sidebar state when URN or catalog changes
	$effect(() => {
		const u = urn;
		const l = urnComponents.length;
		untrack(() => {
			if (l > 0) {
				const parts = u ? u.split(':') : [];
				currentUrnParts = Array.from({ length: l }, (_, i) => parts[i] || '');
			} else {
				currentUrnParts = [];
			}
		});
	});

	// Trigger data loading when route parameters change
	$effect(() => {
		const pub = publisher;
		const publ = publication;
		const catalogParam = page.url.searchParams.get('catalog') || activePublication.catalogUrl || null;
		untrack(() => {
			if (pub && publ) {
				handleLoadPublication();
			}
		});
	});

	// Render content when URN or runtime changes
	$effect(() => {
		const currentUrn = urn;
		const r = graphRuntime;
		const p = packageData;
		const v = activeView;
		const s = chromeStream;
		const c = customGridLayoutJson;
		const refGutter = showReferenceGutter;
		const annGutter = showAnnotationGutter;
		if (r && p) {
			untrack(() => handleRenderUrn(currentUrn));
		}
	});

	onDestroy(() => {
		viewerDb.close();
	});

	// --- Handlers ---

	async function handleLoadPublication() {
		errorMessage = null;
		try {
			const catalogParam = page.url.searchParams.get('catalog') || activePublication.catalogUrl || null;
			if (
				publisher === lastLoadedPublisher &&
				publication === lastLoadedPublication &&
				(catalogParam || '') === lastLoadedCatalog
			) {
				return;
			}
			lastLoadedPublisher = publisher;
			lastLoadedPublication = publication;
			lastLoadedCatalog = catalogParam || '';

			const result = await loadPublication(publisher, publication, viewerDb, catalogParam);

			diagPublicationUrl = result.diagPublicationUrl;
			diagCatalog = result.diagCatalog;
			urnComponents = result.urnComponents;
			graphRuntime = result.graphRuntime;

			const pubTitle = result.diagCatalog?.items?.find((i) => i.id === publication)?.title || result.packageData.manifest.title || publication;
			activePublication.setMetadata(
				pubTitle,
				result.diagPublicationUrl,
				result.manifestTimestamp ?? result.packageData.manifest.timestamp,
				catalogParam,
				result.catalogUpdated
			);

			availableViews = [];
			activeView = undefined;
			customGridLayoutJson = undefined;

			const primary =
				(result.packageData.manifest as { primary_stream?: string })?.primary_stream;
			const labelStreams = chromeStreamsFromVocabulary(result.packageData.vocabulary, primary);
			const preferred = viewerSettings.chromeStream;
			chromeStream =
				preferred && labelStreams.includes(preferred)
					? preferred
					: primary && labelStreams.includes(primary)
						? primary
						: labelStreams[0] || '';
			showAnnotationGutter = viewerSettings.showAnnotationGutter;

			// Set packageData LAST to avoid triggering the render $effect
			// before initialization is complete (WASM Asyncify stack safety).
			packageData = result.packageData;

			// Navigate to first content if arriving at 'root'
			if ((urn === 'root' || !urn) && result.initialTargetUrn) {
				setTimeout(() => {
					const query = catalogParam ? `?catalog=${encodeURIComponent(catalogParam)}` : '';
					goto(`${base}/${publisher}/${publication}/${result.initialTargetUrn}${query}`, {
						replaceState: true
					});
				}, 0);
			}
		} catch (err: unknown) {
			console.error('Failed to load publication:', err);
			errorMessage = err instanceof Error ? err.message : String(err);
		}
	}

	async function handleRenderUrn(targetUrn: string) {
		if (!graphRuntime || !packageData) return;
		const generation = ++renderGeneration;
		try {
			const result = await renderUrn(
				targetUrn,
				viewerDb,
				graphRuntime,
				packageData,
				sidebar.flatUrns,
				activeView || '',
				availableViews,
				chromeStream,
				customGridLayoutJson,
				showReferenceGutter,
				showAnnotationGutter
			);
			if (generation !== renderGeneration) return;
			activeUrns = result.activeUrns;
			availableViews = result.availableViews;
			availableStreams = result.availableStreams;
			if (activeView !== result.activeView) activeView = result.activeView;
			// Do not overwrite chromeStream from weave discovery — chrome is user/settings controlled.
			srcdocContent = result.srcdocContent;
		} catch (e: unknown) {
			if (generation !== renderGeneration) return;
			console.error('Render failed', e);
			const msg = e instanceof Error ? e.message : String(e);
			srcdocContent = `<div class="render-error">Failed to weave view: ${msg}</div>`;
		}
	}

	// --- Navigation ---

	function getNavUrl(targetUrn: string) {
		const catalogParam = page.url.searchParams.get('catalog') || activePublication.catalogUrl;
		const query = catalogParam ? `?catalog=${encodeURIComponent(catalogParam)}` : '';
		return `${base}/${publisher}/${publication}/${targetUrn}${query}`;
	}

	function onNavigate(target: string) {
		if (target) goto(getNavUrl(target));
	}

	function navigateUrn() {
		const target = currentUrnParts.filter((p) => p.trim() !== '').join(':');
		onNavigate(target);
	}

	function navigateNext() {
		const flatUrns = sidebar.flatUrns;
		if (!flatUrns || flatUrns.length === 0) return;
		if (activeUrns.length > 0) {
			const lastActive = activeUrns[activeUrns.length - 1];
			const idx = flatUrns.indexOf(lastActive);
			if (idx !== -1 && idx < flatUrns.length - 1) {
				goto(getNavUrl(flatUrns[idx + 1]));
			}
		} else {
			goto(getNavUrl(flatUrns[0]));
		}
	}

	function navigatePrev() {
		const flatUrns = sidebar.flatUrns;
		if (!flatUrns || flatUrns.length === 0) return;
		if (activeUrns.length > 0) {
			const firstActive = activeUrns[0];
			const idx = flatUrns.indexOf(firstActive);
			if (idx > 0) {
				goto(getNavUrl(flatUrns[idx - 1]));
			}
		} else {
			const u = urn ? urn : '';
			const firstIdx = flatUrns.findIndex((f) => f.startsWith(u));
			if (firstIdx > 0) {
				goto(getNavUrl(flatUrns[firstIdx - 1]));
			}
		}
	}
</script>

{#snippet sidebarTopContent()}
	<ViewerNavBar
		{urn}
		{urnComponents}
		bind:currentUrnParts
		bind:isFullWidth
		bind:activeView
		{availableViews}
		{availableStreams}
		bind:customGridLayoutJson
		isDocumentLayout={(packageData?.manifest as any)?.layout === 'document'}
		onNavigatePrev={navigatePrev}
		onNavigateNext={navigateNext}
		onNavigateUrn={navigateUrn}
		onToggleFullWidth={() => (isFullWidth = !isFullWidth)}
	/>
{/snippet}

{#snippet sidebarLeftContent()}
	<Panel title="Navigation" icon={BookOpen}>
		{#if chromeStreams.length > 0 || packageData?.annotations?.length}
			<div class="nav-display-controls">
				{#if chromeStreams.length > 0}
					<div class="nav-control-row">
						<span class="nav-control-label">Labels</span>
						<div class="nav-control-field">
							<Select
								options={chromeStreams.map((s) => ({
									label: s,
									value: s
								}))}
								bind:value={chromeStream}
							/>
						</div>
					</div>
				{/if}
				{#if packageData?.annotations?.length}
					<div class="nav-control-row">
						<span class="nav-control-label">Annotations</span>
						<Switch bind:checked={showAnnotationGutter} />
					</div>
				{/if}
			</div>
		{/if}
		{#if sidebar.items.length > 0}
			<ListView
				items={sidebar.items}
				keyField="id"
				bind:selectedId={sidebar.selectedContainerId}
				titleField="title"
				subtitleField="subtitle"
				groupBy={sidebar.items.some((item) => item.group) ? 'group' : undefined}
				onSelect={(item) => onNavigate(item.id)}
			/>
		{:else}
			<div class="sidebar-panel-content">No navigation items available.</div>
		{/if}
	</Panel>
{/snippet}

{#snippet sidebarRightContent()}
	<Panel title="Details">
		<div class="sidebar-panel-content">
			Select a block to see details for URN: <strong>{urn}</strong>.
		</div>
	</Panel>
{/snippet}

<div class="viewer-container">
	{#if errorMessage}
		<div class="error-box">{errorMessage}</div>
	{:else if !srcdocContent}
		<div class="loading-box">Loading {publication}...</div>
	{:else}
		<iframe
			bind:this={iframeElement}
			srcdoc={srcdocContent}
			title="Vyasa Content"
			class="viewer-iframe"
			class:full-width={isFullWidth}
		></iframe>
	{/if}
</div>

<style>
	.nav-display-controls {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding: var(--space-3) var(--space-4);
		border-bottom: 1px solid var(--border-base);
	}
	.nav-control-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-3);
	}
	.nav-control-label {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--text-secondary);
		flex-shrink: 0;
	}
	.nav-control-field {
		flex: 1;
		min-width: 0;
		max-width: 10rem;
	}
	.sidebar-panel-content {
		padding: var(--space-4);
		color: var(--text-secondary);
	}

	.viewer-container {
		width: 100%;
		height: 100%;
		background-color: var(--bg-surface);
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: hidden;
	}
	.error-box {
		margin: var(--space-8);
		padding: var(--space-4);
		background-color: var(--color-red-100);
		color: var(--color-red-900);
		border: 1px solid var(--color-red-200);
		border-radius: var(--control-radius);
	}
	.loading-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		color: var(--text-secondary);
	}
	.viewer-iframe {
		width: 100%;
		max-width: 900px;
		height: 100%;
		border: 0;
		border-left: 1px solid var(--border-base);
		border-right: 1px solid var(--border-base);
		background-color: var(--color-white);
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
	}
	.viewer-iframe.full-width {
		max-width: none;
	}

	:global(.panel-content .list-view) {
		border: none !important;
		border-radius: 0 !important;
	}
</style>
