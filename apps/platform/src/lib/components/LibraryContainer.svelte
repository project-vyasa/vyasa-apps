<script lang="ts">
	import { base } from '$app/paths';
	import { AppShell, AppHeader } from '@project-vyasa/vyasa-ui';
	import { onMount } from 'svelte';
	import { getAllPublishers, fetchCatalog, resolvePublisherCatalogUrl } from '$lib/registry';
	import ViewerAppBar from '$lib/components/ViewerAppBar.svelte';
	import LibraryView from '$lib/components/LibraryView.svelte';
	import DiagnosticsView from '$lib/components/DiagnosticsView.svelte';
	import type { LibraryPublisherData } from '$lib/types';

	interface Props {
		publisher?: string;
	}

	let { publisher = '' }: Props = $props();

	let libraryData = $state<LibraryPublisherData[]>([]);
	let loading = $state(true);
	let multiplePublishers = $state(false);
	let showDiagnostics = $state(false);

	const diagRegistryUrl = $derived('https://project-vyasa.github.io/vyasa-docs/registry.json');
	let diagCatalogUrl = $state('');

	// AppShell layout state
	let leftVisible = $state(true);
	let rightVisible = $state(false);
	let bottomVisible = $state(false);

	onMount(async () => {
		try {
			loading = true;
			const allPubs = await getAllPublishers();
			multiplePublishers = allPubs.length > 1;

			if (publisher) {
				// Filtered view logic
				const catalogUrl = await resolvePublisherCatalogUrl(publisher);
				diagCatalogUrl = catalogUrl;
				const catalogData = await fetchCatalog(catalogUrl);

				libraryData = [
					{
						publisher: {
							identifier: publisher,
							title: catalogData.title || publisher,
							catalog_url: catalogUrl
						},
						sourceUrl: catalogUrl,
						catalog: catalogData
					}
				];
			} else {
				// Global directory view logic
				libraryData = await Promise.all(
					allPubs.map(async (p) => {
						const data: LibraryPublisherData = {
							publisher: p.publisher,
							sourceUrl: p.sourceUrl,
							catalog: null
						};
						try {
							data.catalog = await fetchCatalog(p.publisher.catalog_url);
						} catch (e: any) {
							data.error = e.message || String(e);
						}
						return data;
					})
				);
			}
		} catch (e: any) {
			console.error('Failed to load catalog(s):', e);
			if (publisher) {
				libraryData = [
					{
						publisher: {
							identifier: publisher,
							title: publisher,
							catalog_url: diagCatalogUrl || ''
						},
						sourceUrl: diagCatalogUrl || '',
						catalog: null,
						error: e.message || String(e)
					}
				];
			}
		} finally {
			loading = false;
		}
	});
</script>

{#snippet headerContent()}
	<AppHeader
		appName="Vyasa Viewer"
		href={base || '/'}
		bind:leftVisible
		bind:rightVisible
		bind:bottomVisible
	/>
{/snippet}

{#snippet appBarContent()}
	<ViewerAppBar
		active={publisher ? 'library' : 'home'}
		{publisher}
		bind:expanded={leftVisible}
		diagnosticsOpen={showDiagnostics}
		onToggleDiagnostics={() => (showDiagnostics = !showDiagnostics)}
	/>
{/snippet}

<AppShell
	{leftVisible}
	{rightVisible}
	{bottomVisible}
	appBar={appBarContent}
	header={headerContent}
>
	<div class="content-container">
		{#if showDiagnostics}
			<div style="height: calc(100vh - 64px); width: 100%;">
				<DiagnosticsView
					open={showDiagnostics}
					onClose={() => (showDiagnostics = false)}
					{diagRegistryUrl}
					{diagCatalogUrl}
					diagCatalog={libraryData[0]?.catalog}
				/>
			</div>
		{:else}
			<div class="header-section">
				<div>
					<h1 class="page-title">
						{publisher ? libraryData[0]?.publisher.title || publisher : 'Vyasa Directory'}
					</h1>
					<p class="page-desc">
						{#if publisher}
							Showing publications for {libraryData[0]?.publisher.title || publisher}.
							{#if multiplePublishers}
								<a href="{base}/" style="color: var(--text-primary);">View all publishers</a>
							{/if}
						{:else}
							Browse publishers and their catalogs.
						{/if}
					</p>
				</div>
			</div>

			<LibraryView publishers={libraryData} {loading} />
		{/if}
	</div>
</AppShell>

<style>
	.content-container {
		max-width: 1200px;
		margin: 0 auto;
	}
	.header-section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--space-8);
		padding-bottom: 0;
	}
	.page-title {
		font-size: 2.5rem;
		font-weight: bold;
		margin: 0;
	}
	.page-desc {
		color: var(--text-secondary);
		font-size: 1.125rem;
		margin-top: var(--space-2);
	}
</style>
