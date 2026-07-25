<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import type { LibraryPublisherData } from '$lib/types';
	import { viewerSettings } from '$lib/settings.svelte';
	import { DEFAULT_REGISTRY_URL } from '$lib/registry';
	import { Panel, ListView, Badge, Alert } from '@project-vyasa/vyasa-ui';
	import { Library } from 'lucide-svelte';

	interface Props {
		publishers: LibraryPublisherData[];
		loading?: boolean;
	}

	let { publishers, loading = false }: Props = $props();

	let globalUrl = DEFAULT_REGISTRY_URL;
	let customPublishers = $derived(publishers.filter((p) => p.sourceUrl !== globalUrl));
	let globalPublishers = $derived(publishers.filter((p) => p.sourceUrl === globalUrl));
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
		{#if customPublishers.length > 0}
			<div class="registry-group">
				{#if globalPublishers.length > 0}
					<h2 class="registry-group-title">Custom Catalogs</h2>
				{/if}
				{#each customPublishers as pubData}
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
			title={pubData.catalog?.catalog?.publisher || pubData.publisher.title || pubData.publisher.identifier}
			icon={Library}
		>
			{#snippet actions()}
				{#if viewerSettings.debugMode}
					<div class="flex items-center gap-2">
						<Badge variant="neutral">ID: {pubData.publisher.identifier}</Badge>
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
									const query = pubData.sourceUrl !== globalUrl && pubData.publisher.catalog_url ? `?catalog=${encodeURIComponent(pubData.publisher.catalog_url)}` : '';
									goto(`${base}/${pubData.publisher.identifier}/${item.id}${query}`);
								}}
							>
								{#snippet meta(item: any)}
									{#if viewerSettings.debugMode}
										<Badge variant="neutral">ID: {item.id}</Badge>
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
</style>
