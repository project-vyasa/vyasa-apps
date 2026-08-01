<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import { Panel } from '@project-vyasa/vyasa-ui';
	import { goto } from '$app/navigation';
	import { onDestroy, getContext, untrack, type Snippet } from 'svelte';
	import { ViewerDb } from '$lib/ViewerDb';
	import { loadPublication } from '$lib/viewer/publication-loader';
	import { renderUrn } from '$lib/viewer/urn-renderer';
	import { SidebarState } from '$lib/viewer/sidebar.svelte';
	import { navigateReaderNext, navigateReaderPrev, readerNavUrl } from '$lib/viewer/reader-navigation';
	import ViewerNavBar from '$lib/components/ViewerNavBar.svelte';
	import ReaderNavigationPanel from '$lib/components/ReaderNavigationPanel.svelte';
	import LoadingBrand from '$lib/components/LoadingBrand.svelte';
	import { activePublication } from '$lib/viewer/active-publication.svelte';
	import { viewerSettings } from '$lib/settings.svelte';
	import { chromeStreamsFromVocabulary } from '$lib/viewer/vocabulary';
	import { catalogRefFromParams, publicationReaderPath } from '$lib/catalog-ref';
	import type { PackageData } from '$lib/types';
	import type { VyasaViewerRuntime } from '@project-vyasa/vyasa-viewer-wasm';

	const registryId = $derived(page.params.registry || '');
	const catalogId = $derived(page.params.catalog || '');
	const publicationId = $derived(page.params.publication || '');
	const urn = $derived(page.params.urn || 'root');

	const catalogRef = $derived(
		registryId && catalogId && publicationId
			? catalogRefFromParams(registryId, catalogId, publicationId)
			: null
	);

	const shell = getContext<{
		setSidebarLeft: (s: Snippet | undefined) => void;
		setSidebarRight: (s: Snippet | undefined) => void;
		setSidebarTop: (s: Snippet | undefined) => void;
		setPanelBottom: (s: Snippet | undefined) => void;
	}>('shellState');

	let isFullWidth = $state(false);
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
	let showReferenceGutter = $state(true);
	let renderGeneration = 0;

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

	let lastLoadedRegistryId = '';
	let lastLoadedCatalog = '';
	let lastLoadedPublication = '';

	const viewerDb = new ViewerDb();
	const sidebar = new SidebarState(
		() => packageData,
		() => urnComponents,
		() => urn,
		() => chromeStream || undefined
	);

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

	$effect(() => {
		const ref = catalogRef;
		untrack(() => {
			if (ref) handleLoadPublication();
		});
	});

	$effect(() => {
		const currentUrn = urn;
		const r = graphRuntime;
		const p = packageData;
		if (r && p) {
			untrack(() => handleRenderUrn(currentUrn));
		}
	});

	onDestroy(() => viewerDb.close());

	async function handleLoadPublication() {
		const ref = catalogRef;
		if (!ref) return;
		errorMessage = null;
		try {
			if (
				ref.registryId === lastLoadedRegistryId &&
				ref.catalogId === lastLoadedCatalog &&
				ref.publicationId === lastLoadedPublication
			) {
				return;
			}
			lastLoadedRegistryId = ref.registryId;
			lastLoadedCatalog = ref.catalogId;
			lastLoadedPublication = ref.publicationId;

			const result = await loadPublication(ref, viewerDb);
			urnComponents = result.urnComponents;
			graphRuntime = result.graphRuntime;

			const pubTitle =
				result.diagCatalog?.publications?.find((i) => i.id === ref.publicationId)?.title ||
				result.packageData.manifest.title ||
				ref.publicationId;
			activePublication.setPublication(ref, result.diagCatalogUrl);
			activePublication.setMetadata(
				pubTitle,
				result.diagPublicationUrl,
				result.manifestTimestamp ?? result.packageData.manifest.timestamp,
				result.diagCatalogUrl,
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

			packageData = result.packageData;

			if ((urn === 'root' || !urn) && result.initialTargetUrn) {
				setTimeout(() => {
					goto(publicationReaderPath(ref, result.initialTargetUrn!, base), {
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
			srcdocContent = result.srcdocContent;
		} catch (e: unknown) {
			if (generation !== renderGeneration) return;
			console.error('Render failed', e);
			const msg = e instanceof Error ? e.message : String(e);
			srcdocContent = `<div class="render-error">Failed to weave view: ${msg}</div>`;
		}
	}

	function navUrl(targetUrn: string) {
		const ref = catalogRef;
		if (!ref) return base || '/';
		return readerNavUrl(ref, targetUrn, base);
	}

	function onNavigate(target: string) {
		if (target) goto(navUrl(target));
	}

	function navigateUrn() {
		const target = currentUrnParts.filter((p) => p.trim() !== '').join(':');
		onNavigate(target);
	}

	function navigateNext() {
		navigateReaderNext(sidebar.flatUrns, activeUrns, goto, navUrl);
	}

	function navigatePrev() {
		navigateReaderPrev(sidebar.flatUrns, activeUrns, urn, goto, navUrl);
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
		isDocumentLayout={(packageData?.manifest as { layout?: string })?.layout === 'document'}
		onNavigatePrev={navigatePrev}
		onNavigateNext={navigateNext}
		onNavigateUrn={navigateUrn}
		onToggleFullWidth={() => (isFullWidth = !isFullWidth)}
	/>
{/snippet}

{#snippet sidebarLeftContent()}
	<ReaderNavigationPanel
		{sidebar}
		{packageData}
		{chromeStreams}
		bind:chromeStream
		bind:showAnnotationGutter
		onNavigate={onNavigate}
	/>
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
		<LoadingBrand message="Loading {publicationId}…" />
	{:else}
		<iframe
			srcdoc={srcdocContent}
			title="Vyasa Content"
			class="viewer-iframe"
			class:full-width={isFullWidth}
		></iframe>
	{/if}
</div>

<style>
	.sidebar-panel-content {
		padding: var(--space-4);
		color: var(--text-secondary);
	}

	.viewer-container {
		width: 100%;
		height: 100%;
		min-height: 100%;
		flex: 1 1 auto;
		background-color: var(--bg-surface);
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: auto;
	}
	.error-box {
		margin: var(--space-8);
		padding: var(--space-4);
		background-color: var(--color-red-100);
		color: var(--color-red-900);
		border: 1px solid var(--color-red-200);
		border-radius: var(--control-radius);
	}
	.viewer-iframe {
		width: 100%;
		max-width: 900px;
		height: 100%;
		min-height: 100%;
		flex: 1 1 auto;
		align-self: stretch;
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
