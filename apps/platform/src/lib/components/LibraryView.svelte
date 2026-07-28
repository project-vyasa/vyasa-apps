<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import type { LibraryPublisherData } from '$lib/types';
	import { viewerSettings } from '$lib/settings.svelte';
	import { Panel, ListView, Badge, Alert } from '@project-vyasa/vyasa-ui';
	import { Library } from 'lucide-svelte';
	import type { CatalogSourceError } from '$lib/registry';

	interface Props {
		publishers: LibraryPublisherData[];
		sourceErrors?: CatalogSourceError[];
		loading?: boolean;
	}

	let { publishers, sourceErrors = [], loading = false }: Props = $props();

	let localCatalogPublishers = $derived(
		publishers.filter((p) => p.sourceKind === 'local-catalog')
	);
	let localRegistryPublishers = $derived(
		publishers.filter((p) => p.sourceKind === 'local-registry')
	);
	let globalPublishers = $derived(publishers.filter((p) => p.sourceKind === 'global'));

	let customCatalogsDisabled = $derived(
		!viewerSettings.enableCustomCatalogs &&
			viewerSettings.customCatalogs.trim().length > 0
	);
	let localRegistriesConfigured = $derived(
		viewerSettings.enableCustomRegistries &&
			viewerSettings.customRegistryUrls.length > 0
	);
	let localRegistryErrors = $derived(
		sourceErrors.filter((e) => e.kind === 'registry')
	);
	let localRegistriesUnavailable = $derived(
		localRegistriesConfigured && localRegistryPublishers.length === 0
	);

	function catalogQuery(pubData: LibraryPublisherData): string {
		if (pubData.sourceKind === 'global') return '';
		return pubData.publisher.catalog_url
			? `?catalog=${encodeURIComponent(pubData.publisher.catalog_url)}`
			: '';
	}
</script>

<div class="library-container">
	{#if loading}
		<div class="status-wrapper">
			<Alert variant="info" title="Loading Library">Please wait while catalogs are being loaded...</Alert>
		</div>
	{:else if publishers.length === 0}
		<div class="status-wrapper">
			<Alert variant="warning" title="No Catalogs">No catalogs are currently configured or available.</Alert>
		</div>
	{:else}
		{#if customCatalogsDisabled}
			<Alert variant="warning" title="Custom Catalogs Disabled">
				You have local catalog URLs saved in Settings, but <strong>Enable Custom Catalogs</strong> is off.
				Turn it on to restore the Local Catalogs section above Global Registry.
			</Alert>
		{/if}

		{#if localRegistriesUnavailable}
			<Alert variant="warning" title="Local Registries Unavailable">
				Custom registry URLs are configured ({viewerSettings.customRegistryUrls.join(', ')}) but none
				responded.
				{#if localRegistryErrors.length > 0}
					<ul class="registry-error-list">
						{#each localRegistryErrors as err}
							<li><strong>{err.url}</strong>: {err.error}</li>
						{/each}
					</ul>
				{:else}
					Ensure Caddy is running on port 8080 (<code>Caddyfile</code> in vyasa-samples) and that
					<strong>Enable Custom Registries</strong> is on in Settings.
				{/if}
			</Alert>
		{/if}

		{#if localCatalogPublishers.length > 0}
			<div class="registry-group">
				<h2 class="registry-group-title">Local Catalogs</h2>
				{#each localCatalogPublishers as pubData}
					{@render publisherSection(pubData)}
				{/each}
			</div>
		{/if}

		{#if localRegistryPublishers.length > 0}
			<div class="registry-group">
				<h2 class="registry-group-title">Local Registries</h2>
				{#each localRegistryPublishers as pubData}
					{@render publisherSection(pubData)}
				{/each}
			</div>
		{/if}

		{#if globalPublishers.length > 0}
			<div class="registry-group">
				<h2 class="registry-group-title">Global Registry</h2>
				{#each globalPublishers as pubData}
					{@render publisherSection(pubData)}
				{/each}
			</div>
		{/if}
	{/if}
</div>

{#snippet publisherSection(pubData: LibraryPublisherData)}
	<div class="publisher-card">
		<Panel
			title={pubData.catalog?.title || pubData.publisher.title || pubData.publisher.identifier}
			icon={Library}
		>
			{#snippet actions()}
				{#if viewerSettings.debugMode}
					<div class="flex items-center gap-2">
						<Badge variant="neutral">ID: {pubData.publisher.identifier}</Badge>
						<Badge variant="neutral">{pubData.sourceKind}</Badge>
						{#if pubData.publisher.catalog_url}
							<a href={pubData.publisher.catalog_url} target="_blank" rel="noopener noreferrer" class="catalog-link">
								<Badge variant="primary">URL</Badge>
							</a>
						{/if}
					</div>
				{/if}
			{/snippet}

			<div class="panel-body">
				{#if pubData.catalog?.catalog?.description}
					<p class="catalog-desc">{pubData.catalog.catalog.description}</p>
				{/if}

				{#if pubData.error}
					<div class="error-wrapper">
						<Alert variant="danger" title="Catalog Error">{pubData.error}</Alert>
					</div>
				{:else if pubData.catalog}
					{#if (pubData.catalog.items || []).length > 0}
						<div class="list-wrapper">
							<ListView
								items={pubData.catalog.items || []}
								titleField="title"
								subtitleField="id"
								showFilterInput={(pubData.catalog.items || []).length > 5}
								onSelect={(item: any) => {
									goto(`${base}/${pubData.publisher.identifier}/${item.id}${catalogQuery(pubData)}`);
								}}
							>
								{#snippet meta(item: any)}
									{#if viewerSettings.debugMode}
										<Badge variant="neutral">ID: {item.id}</Badge>
										{#if item.updated}
											<Badge variant="neutral">
												updated {new Date(Number(item.updated) * 1000).toLocaleString()}
											</Badge>
										{/if}
									{/if}
								{/snippet}
							</ListView>
						</div>
					{:else}
						<div class="empty-catalog">No publications found in this catalog.</div>
					{/if}
				{/if}
			</div>
		</Panel>
	</div>
{/snippet}

<style>
	.library-container {
		padding: var(--space-8);
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.status-wrapper {
		padding: var(--space-8) 0;
	}

	.registry-group {
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
	}

	.registry-group-title {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--text-primary);
		margin: 0;
		padding-bottom: var(--space-2);
		border-bottom: 2px solid var(--border-base);
	}

	.publisher-card {
		display: flex;
		flex-direction: column;
	}

	.panel-body {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		padding: var(--space-4);
	}

	.catalog-desc {
		color: var(--text-secondary);
		font-size: 0.95rem;
		margin: 0;
	}

	.list-wrapper {
		max-height: 450px;
		min-height: 80px;
		display: flex;
		flex-direction: column;
	}

	.empty-catalog {
		padding: var(--space-6);
		text-align: center;
		color: var(--text-tertiary);
		background-color: var(--bg-surface-alt);
		border-radius: var(--control-radius);
		font-size: 0.9rem;
	}

	.catalog-link {
		text-decoration: none;
	}

	.error-wrapper {
		padding: var(--space-2) 0;
	}

	.registry-error-list {
		margin: var(--space-2) 0 0;
		padding-left: 1.25rem;
		font-size: 0.9rem;
	}
</style>
