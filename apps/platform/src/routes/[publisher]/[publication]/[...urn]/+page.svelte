<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { AppShell, AppHeader, Panel, ListView } from '@project-vyasa/vyasa-ui';
	import { BookOpen } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { onDestroy, getContext, untrack } from 'svelte';
	import { ViewerDb } from '$lib/ViewerDb';
	import { loadPublication } from '$lib/viewer/publication-loader';
	import { renderUrn } from '$lib/viewer/urn-renderer';
	import { SidebarState } from '$lib/viewer/sidebar.svelte';
	import ViewerAppBar from '$lib/components/ViewerAppBar.svelte';
	import ViewerNavBar from '$lib/components/ViewerNavBar.svelte';
	import DiagnosticsView from '$lib/components/DiagnosticsView.svelte';
	import { viewerSettings } from '$lib/settings.svelte';
	import type { PackageData, Catalog } from '$lib/types';
	import type { VyasaViewerRuntime } from '@project-vyasa/vyasa-viewer-wasm';

	// --- URL Parameters ---
	const publisher = $derived($page.params.publisher || '');
	const publication = $derived($page.params.publication || '');
	const urn = $derived($page.params.urn || 'root');
	const embed = $derived($page.url.searchParams.get('embed') === 'true');

	// Theme context available for future use (e.g. toggling from header)
	getContext('theme');

	// --- AppShell Layout State ---
	let leftVisible = $state(true);
	let rightVisible = $state(false);
	let topVisible = $state(true);
	let showDiagnostics = $state(false);
	let bottomVisible = $state(false);
	let maximizedZone = $state<'none' | 'bottom' | 'content'>('none');
	let isFullWidth = $state(false);

	// --- Viewer State ---
	let srcdocContent = $state('');
	let errorMessage = $state<string | null>(null);
	let activeView = $state('reference');
	let availableViews = $state<string[]>([]);
	let activeUrns = $state<string[]>([]);
	let packageData = $state<PackageData | null>(null);
	let graphRuntime = $state<VyasaViewerRuntime | null>(null);
	let urnComponents = $state<string[]>([]);
	let currentUrnParts = $state<string[]>([]);
	let iframeElement = $state<HTMLIFrameElement>();

	// --- Diagnostics ---
	let diagRegistryUrl = $state('');
	let diagCatalogUrl = $state('');
	let diagPublicationUrl = $state('');
	let diagCatalog = $state<Catalog | null>(null);

	// --- DB & Sidebar State ---
	const viewerDb = new ViewerDb();
	const sidebar = new SidebarState(
		() => packageData,
		() => urnComponents,
		() => urn
	);

	// --- Effects ---

	// Load publication when publisher/publication params change
	$effect(() => {
		if (publisher && publication) {
			handleLoadPublication();
		}
	});

	// Keep currentUrnParts in sync with URL urn parameter
	$effect(() => {
		const parts = urn === 'root' ? [] : urn.split(':');
		const filledParts = [...parts];
		while (filledParts.length < urnComponents.length) {
			filledParts.push('');
		}
		currentUrnParts = filledParts;
	});

	// Render content when URN or runtime changes
	$effect(() => {
		const currentUrn = urn;
		const r = graphRuntime;
		const p = packageData;
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
			const result = await loadPublication(publisher, publication, viewerDb);

			diagRegistryUrl = result.diagRegistryUrl;
			diagCatalogUrl = result.diagCatalogUrl;
			diagPublicationUrl = result.diagPublicationUrl;
			diagCatalog = result.diagCatalog;
			urnComponents = result.urnComponents;
			graphRuntime = result.graphRuntime;

			// Set packageData LAST to avoid triggering the render $effect
			// before initialization is complete (WASM Asyncify stack safety).
			packageData = result.packageData;

			// Navigate to first content if arriving at 'root'
			if ((urn === 'root' || !urn) && result.initialTargetUrn) {
				setTimeout(() => {
					goto(`${base}/${publisher}/${publication}/${result.initialTargetUrn}`, {
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
		try {
			const result = await renderUrn(
				targetUrn,
				viewerDb,
				graphRuntime,
				packageData,
				sidebar.flatUrns,
				activeView,
				availableViews
			);
			activeUrns = result.activeUrns;
			availableViews = result.availableViews;
			activeView = result.activeView;
			srcdocContent = result.srcdocContent;
		} catch (e: unknown) {
			console.error('Render failed', e);
			const msg = e instanceof Error ? e.message : String(e);
			srcdocContent = `<div class="render-error">Failed to weave view: ${msg}</div>`;
		}
	}

	// --- Navigation ---

	function onNavigate(target: string) {
		if (target) goto(`${base}/${publisher}/${publication}/${target}`);
	}

	function navigateUrn() {
		const target = currentUrnParts.filter((p) => p.trim() !== '').join(':');
		onNavigate(target);
	}

	function navigateNext() {
		const flatUrns = sidebar.flatUrns;
		if (flatUrns.length > 0) {
			const lastIdx = flatUrns.indexOf(activeUrns[activeUrns.length - 1]);
			if (lastIdx !== -1 && lastIdx < flatUrns.length - 1) {
				goto(`${base}/${publisher}/${publication}/${flatUrns[lastIdx + 1]}`);
			} else if (lastIdx === -1) {
				goto(`${base}/${publisher}/${publication}/${flatUrns[0]}`);
			}
		}
	}

	function navigatePrev() {
		const flatUrns = sidebar.flatUrns;
		if (flatUrns.length > 0) {
			const firstIdx = flatUrns.indexOf(activeUrns[0]);
			if (firstIdx > 0) {
				goto(`${base}/${publisher}/${publication}/${flatUrns[firstIdx - 1]}`);
			}
		}
	}
</script>

{#snippet headerContent()}
	<AppHeader
		appName="Vyasa Viewer"
		href={base || '/'}
		bind:leftVisible
		bind:rightVisible
		bind:bottomVisible
	>
		<div
			style="font-size: 0.9em; color: var(--text-muted); text-align: center; display: flex; align-items: center; justify-content: center;"
		>
			{#if packageData}
				{@const pubTitle = diagCatalog?.items?.find((i) => i.id === publication)?.title || packageData.manifest.title || publication}
				<strong>{pubTitle}</strong>
				{#if viewerSettings.debugMode}
					<span
						style="opacity: 0.6; margin-left: 0.75rem; font-size: 0.85em; display: inline-flex; gap: 0.5rem;"
					>
						<span style="font-family: var(--font-mono);">{publication}</span>
						<span>|</span>
						<span
							>URL: <a
								href={diagPublicationUrl}
								target="_blank"
								rel="noopener noreferrer"
								style="color: inherit; text-decoration: underline;">{diagPublicationUrl}</a
							></span
						>
						<span>|</span>
						<span
							>Built: {new Date(
								Number(packageData.manifest.timestamp || 0) * 1000
							).toLocaleString()}</span
						>
					</span>
				{/if}
			{/if}
		</div>
	</AppHeader>
{/snippet}

{#snippet appBarContent()}
	<ViewerAppBar
		active="reader"
		bind:expanded={leftVisible}
		{publisher}
		{publication}
		diagnosticsOpen={showDiagnostics}
		onToggleDiagnostics={() => (showDiagnostics = !showDiagnostics)}
	/>
{/snippet}

{#snippet sidebarTopContent()}
	<ViewerNavBar
		{urn}
		{urnComponents}
		bind:currentUrnParts
		bind:isFullWidth
		onNavigatePrev={navigatePrev}
		onNavigateNext={navigateNext}
		onNavigateUrn={navigateUrn}
		onToggleFullWidth={() => (isFullWidth = !isFullWidth)}
	/>
{/snippet}

{#snippet sidebarLeftContent()}
	<Panel title="Navigation" icon={BookOpen}>
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

<AppShell
	leftVisible={!embed && leftVisible}
	rightVisible={!embed && rightVisible}
	{topVisible}
	topHeight={48}
	{bottomVisible}
	{maximizedZone}
	header={!embed ? headerContent : undefined}
	appBar={!embed ? appBarContent : undefined}
	sidebarLeft={sidebarLeftContent}
	sidebarTop={sidebarTopContent}
	sidebarRight={sidebarRightContent}
>
	<div class="viewer-container">
		{#if showDiagnostics}
			<DiagnosticsView
				open={showDiagnostics}
				onClose={() => (showDiagnostics = false)}
				{diagRegistryUrl}
				{diagCatalogUrl}
				{diagPublicationUrl}
				{diagCatalog}
				{packageData}
			/>
		{:else if errorMessage}
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
</AppShell>

<style>
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
