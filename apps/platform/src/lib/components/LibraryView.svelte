<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import type { LibraryPublisherData } from '$lib/types';
	import { viewerSettings } from '$lib/settings.svelte';
	import { DEFAULT_REGISTRY_URL } from '$lib/registry';

	interface Props {
		publishers: LibraryPublisherData[];
		loading?: boolean;
	}

	let { publishers, loading = false }: Props = $props();

	let globalUrl = $derived(viewerSettings.globalRegistryUrl || DEFAULT_REGISTRY_URL);
	let customPublishers = $derived(publishers.filter((p) => p.sourceUrl !== globalUrl));
	let globalPublishers = $derived(publishers.filter((p) => p.sourceUrl === globalUrl));
</script>

<div class="library-container">
	{#if loading}
		<div class="loading-container">
			<p class="loading-text">Loading library...</p>
		</div>
	{:else if publishers.length === 0}
		<div class="empty-container">
			<p>No catalogs configured or available.</p>
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
	<div class="publisher-section">
		<div class="catalog-header">
			<h3 class="catalog-title">
				{pubData.catalog?.catalog?.publisher ||
					pubData.publisher.title ||
					pubData.publisher.identifier}
			</h3>
			{#if pubData.catalog?.catalog?.description}
				<p class="catalog-desc">{pubData.catalog.catalog.description}</p>
			{/if}
			<div class="catalog-meta">
				<span class="catalog-id">Publisher ID: {pubData.publisher.identifier}</span>
			</div>
		</div>

		{#if pubData.error}
			<div class="error-container">
				<p>Failed to load catalog: {pubData.error}</p>
			</div>
		{:else if pubData.catalog}
			<div class="grid-container">
				{#each pubData.catalog.items || [] as item}
					<button
						class="library-card"
						onclick={() => goto(`${base}/${pubData.publisher.identifier}/${item.id}`)}
					>
						<h4 class="library-card-title">{item.title || item.id}</h4>
						<div class="library-card-meta">
							<span class="library-card-id">ID: {item.id}</span>
						</div>
					</button>
				{/each}
			</div>
			{#if (pubData.catalog.items || []).length === 0}
				<p class="empty-catalog">No publications found in this catalog.</p>
			{/if}
		{/if}
	</div>
{/snippet}

<style>
	.library-container {
		padding: var(--space-8);
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 3rem; /* Fallback from var(--space-16) which is undefined in design-system */
	}
	.loading-container {
		display: flex;
		justify-content: center;
		padding: 4rem;
	}
	.loading-text {
		color: var(--text-tertiary);
	}
	.empty-container,
	.empty-catalog {
		padding: 2rem;
		text-align: center;
		color: var(--text-tertiary);
		background-color: var(--bg-surface-alt);
		border-radius: var(--control-radius);
	}
	.error-container {
		padding: 1rem;
		background-color: var(--bg-surface-alt);
		border-radius: var(--control-radius);
		color: var(--text-negative);
	}

	/* Registry Group */
	.registry-group {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}
	.registry-group-title {
		font-size: 1.5rem;
		font-weight: bold;
		color: var(--text-secondary);
		margin: 0;
		margin-bottom: -1rem; /* bring it closer to the first publisher */
		padding-bottom: var(--space-2);
		border-bottom: 2px solid var(--border-base);
	}

	/* Publisher Section */
	.publisher-section {
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
	}
	.catalog-header {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding-bottom: var(--space-4);
		border-bottom: 1px solid var(--border-base);
	}
	.catalog-title {
		font-size: 2rem;
		font-weight: bold;
		margin: 0;
	}
	.catalog-desc {
		color: var(--text-secondary);
		font-size: 1.125rem;
		margin: 0;
	}
	.catalog-meta {
		display: flex;
		gap: var(--space-4);
		font-size: 0.875rem;
		color: var(--text-tertiary);
	}
	.catalog-id {
		font-family: var(--font-mono);
	}

	/* Card Grid */
	.grid-container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: var(--space-6);
	}
	.library-card {
		background-color: var(--bg-surface-alt);
		border: 1px solid var(--border-base);
		border-radius: var(--control-radius);
		padding: var(--space-6);
		cursor: pointer;
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		transition:
			transform 0.2s,
			box-shadow 0.2s;
		text-align: left;
		color: inherit;
		text-decoration: none;
	}
	.library-card:hover,
	.library-card:focus {
		transform: translateY(-2px);
		box-shadow: var(--shadow-sm);
	}
	.library-card-title {
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0;
	}
	.library-card-meta {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		margin-top: auto;
		color: var(--text-tertiary);
		font-size: 0.875rem;
	}
	.library-card-id {
		font-family: var(--font-mono);
	}
</style>
