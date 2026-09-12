<script lang="ts">
	import LeafMatrix from './LeafMatrix.svelte';
	import { BookOpen } from 'lucide-svelte';
	import type { MapNode } from '../ExploreView.svelte';
	import type { FacetIndex, FacetSelection } from '$lib/explore/facet-index';
	import { flattenMapTiles } from '$lib/explore/map-tiles';
	import SelectionMarquee from './SelectionMarquee.svelte';

	interface Props {
		nodes: MapNode[];
		manualSelections: Array<{ startUrn: string; endUrn: string }>;
		activeFacets?: FacetSelection;
		facetIndex?: FacetIndex;
		mapFacetTypeId?: string | null;
		onMarqueeSelection?: (urns: string[]) => void;
	}

	let {
		nodes,
		manualSelections = [],
		activeFacets = {},
		facetIndex,
		mapFacetTypeId = null,
		onMarqueeSelection
	}: Props = $props();

	const tiles = $derived(flattenMapTiles(nodes));

	function handleMarqueeSelection(rect: DOMRect) {
		const intersectingUrns: string[] = [];
		const links = document.querySelectorAll('.leaf-grid a, .plot-container a');
		links.forEach((link) => {
			const linkRect = link.getBoundingClientRect();
			const intersect = !(
				rect.right < linkRect.left ||
				rect.left > linkRect.right ||
				rect.bottom < linkRect.top ||
				rect.top > linkRect.bottom
			);
			if (intersect) {
				const href = link.getAttribute('href');
				if (href && href.startsWith('#')) {
					intersectingUrns.push(href.slice(1));
				}
			}
		});

		if (intersectingUrns.length > 0 && onMarqueeSelection) {
			onMarqueeSelection(intersectingUrns);
		}
	}
</script>

<div class="data-map-container">
	<SelectionMarquee onSelectionComplete={handleMarqueeSelection}>
		<div class="map-content">
			{#if tiles.length === 0}
				<div class="map-empty">No containers match the current filters.</div>
			{:else}
				<div class="leaf-grid-wrapper">
					{#each tiles as tile (tile.kind === 'book' ? `book:${tile.id}` : tile.node.id)}
						{#if tile.kind === 'book'}
							<section class="book-marker" aria-label={`Book ${tile.title}`}>
								<BookOpen size={14} class="book-marker-icon" aria-hidden="true" />
								<h3>{tile.title}</h3>
								<span class="book-id">{tile.id}</span>
							</section>
						{:else}
							<LeafMatrix
								containerData={tile.node}
								{manualSelections}
								{activeFacets}
								{facetIndex}
								{mapFacetTypeId}
								blocksPerRow={10}
							/>
						{/if}
					{/each}
				</div>
			{/if}
		</div>
	</SelectionMarquee>
</div>

<style>
	.data-map-container {
		flex: 1;
		background: var(--bg-body);
		overflow-y: auto;
		padding: var(--space-4);
		--leaf-cell: 8px;
		--leaf-gap: 1px;
		--leaf-cols: 10;
		--chapter-width: calc(
			var(--leaf-cols) * var(--leaf-cell) + (var(--leaf-cols) - 1) * var(--leaf-gap)
		);
	}

	.map-content {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		max-width: 1400px;
		margin: 0 auto;
	}

	.leaf-grid-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fill, var(--chapter-width));
		justify-content: start;
		gap: var(--space-4) var(--space-3);
		align-items: start;
	}

	.book-marker {
		box-sizing: border-box;
		width: var(--chapter-width);
		min-height: var(--chapter-width);
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		gap: 2px;
		padding: var(--space-2);
		border: 1px dashed color-mix(in srgb, var(--border-strong) 65%, transparent);
		border-radius: var(--radius-md);
		background: color-mix(in srgb, var(--bg-surface-alt) 80%, transparent);
		color: var(--text-secondary);
	}

	.book-marker :global(.book-marker-icon) {
		margin-bottom: auto;
		opacity: 0.7;
	}

	.book-marker h3 {
		margin: 0;
		font-size: 0.6875rem;
		font-weight: 400;
		line-height: 1.2;
		color: var(--text-primary);
		overflow-wrap: anywhere;
	}

	.book-marker .book-id {
		font-family: var(--font-mono, ui-monospace, monospace);
		font-size: 0.625rem;
		font-weight: 400;
		white-space: nowrap;
		color: var(--text-secondary);
	}

	.map-empty {
		padding: var(--space-8);
		text-align: center;
		color: var(--text-tertiary);
		font-size: 0.9rem;
	}
</style>
