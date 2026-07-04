<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import type { LibraryPublisherData } from '$lib/types';

	interface Props {
		publishers: LibraryPublisherData[];
		loading?: boolean;
	}

	let { publishers, loading = false }: Props = $props();

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
		{#each publishers as pubData}
			<div class="publisher-section">
				<div class="catalog-header">
					<h2 class="catalog-title">{pubData.catalog?.catalog?.publisher || pubData.publisher.title || pubData.publisher.identifier}</h2>
					{#if pubData.catalog?.catalog?.description}
						<p class="catalog-desc">{pubData.catalog.catalog.description}</p>
					{/if}
					<div class="catalog-meta">
						<span class="catalog-id">ID: {pubData.publisher.identifier}</span>
						<span>Source: {pubData.sourceUrl.includes('localhost') ? 'Local Catalog' : 'Global Registry'}</span>
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
								<h3 class="library-card-title">{item.name || item.id}</h3>
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
		{/each}
	{/if}
</div>

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
	.empty-container, .empty-catalog {
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
		transition: transform 0.2s, box-shadow 0.2s;
		text-align: left;
		color: inherit;
		text-decoration: none;
	}
	.library-card:hover, .library-card:focus {
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
