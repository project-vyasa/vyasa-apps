<script lang="ts">
	import { Map, List } from 'lucide-svelte';
	import type { FacetIndex, FacetSelection } from '$lib/explore/facet-index';
	import { buildFacetValueColorMap, isCoverageFacet } from '$lib/explore/facet-index';

	interface Props {
		activeFacets: FacetSelection;
		facetIndex: FacetIndex;
		mapFacetTypeId?: string | null;
		onMapDismiss?: () => void;
	}

	let {
		activeFacets = $bindable({}),
		facetIndex,
		mapFacetTypeId = $bindable<string | null>(null),
		onMapDismiss
	}: Props = $props();

	function toggleFilter(typeId: string, valueId: string) {
		if (mapFacetTypeId === typeId) return;
		if (!activeFacets[typeId]) {
			activeFacets[typeId] = new Set();
		}
		if (activeFacets[typeId].has(valueId)) {
			activeFacets[typeId].delete(valueId);
			if (activeFacets[typeId].size === 0) {
				const next = { ...activeFacets };
				delete next[typeId];
				activeFacets = next;
				return;
			}
		} else {
			activeFacets[typeId].add(valueId);
		}
		activeFacets = { ...activeFacets };
	}

	function selectCoverage(typeId: string, valueId: string) {
		if (mapFacetTypeId) {
			mapFacetTypeId = null;
			onMapDismiss?.();
		}
		if (activeFacets[typeId]?.has(valueId)) {
			const next = { ...activeFacets };
			delete next[typeId];
			activeFacets = next;
			return;
		}
		activeFacets = { ...activeFacets, [typeId]: new Set([valueId]) };
	}

	function toggleMapMode(typeId: string) {
		if (isCoverageFacet(typeId)) return;
		if (mapFacetTypeId === typeId) {
			mapFacetTypeId = null;
			onMapDismiss?.();
			return;
		}
		mapFacetTypeId = typeId;
		const next = { ...activeFacets };
		delete next[typeId];
		delete next.stream;
		activeFacets = next;
	}

	function hasFilter(typeId: string, valueId: string): boolean {
		return activeFacets[typeId]?.has(valueId) ?? false;
	}

	function colorFor(typeId: string, valueId: string): string {
		return buildFacetValueColorMap(facetIndex, typeId).get(valueId) ?? `var(--text-tertiary)`;
	}
</script>

<div class="facet-sidebar">
	{#if facetIndex.types.length === 0}
		<div class="empty-facets">
			<p>No entity or attribute facets in this publication yet.</p>
			<p class="hint">Speaker facets appear when annotations are packed; rishi/devata when block attributes are present.</p>
		</div>
	{:else}
		{#each facetIndex.types as facetType (facetType.id)}
			{@const mapActive = mapFacetTypeId === facetType.id}
			{@const coverage = facetType.kind === 'coverage'}
			<div class="facet-group" class:map-active={mapActive} class:coverage-facet={coverage}>
				<div class="group-header">
					<h4 class="group-title">{facetType.label}</h4>
					{#if !coverage}
						<button
							type="button"
							class="mode-toggle"
							class:active={mapActive}
							onclick={() => toggleMapMode(facetType.id)}
							title={mapActive ? 'Switch to filter mode' : 'Show full map for this facet'}
						>
							{#if mapActive}
								<List size={14} />
								<span>Filter</span>
							{:else}
								<Map size={14} />
								<span>Map</span>
							{/if}
						</button>
					{/if}
				</div>

				{#if coverage}
					<p class="mode-hint coverage-hint">
						Coverage facet — pick one stream to see which blocks include it. Blocks may carry
						multiple streams; this shows only the stream you select.
					</p>
					<div class="facet-list">
						{#each facetType.values as value (facetType.id + value.id)}
							<label class="facet-item coverage-item" class:active={hasFilter(facetType.id, value.id)}>
								<input
									type="radio"
									name="stream-coverage"
									checked={hasFilter(facetType.id, value.id)}
									onchange={() => selectCoverage(facetType.id, value.id)}
								/>
								<span
									class="swatch small"
									style:background={colorFor(facetType.id, value.id)}
								></span>
								<span class="facet-label" title={value.label}>{value.label}</span>
								<span class="facet-count">{value.count}</span>
							</label>
						{/each}
					</div>
				{:else if mapActive}
					<p class="mode-hint">
						Every block is colored by {facetType.label.toLowerCase()}. Unmarked blocks stay dim.
					</p>
					<div class="facet-list legend">
						{#each facetType.values as value (facetType.id + value.id)}
							<div class="legend-item">
								<span class="swatch" style:background={colorFor(facetType.id, value.id)}></span>
								<span class="facet-label" title={value.label}>{value.label}</span>
								<span class="facet-count">{value.count}</span>
							</div>
						{/each}
					</div>
				{:else}
					<div class="facet-list">
						{#each facetType.values as value (facetType.id + value.id)}
							<label class="facet-item" class:active={hasFilter(facetType.id, value.id)}>
								<input
									type="checkbox"
									checked={hasFilter(facetType.id, value.id)}
									onchange={() => toggleFilter(facetType.id, value.id)}
								/>
								<span
									class="swatch small"
									style:background={colorFor(facetType.id, value.id)}
								></span>
								<span class="facet-label" title={value.label}>{value.label}</span>
								<span class="facet-count">{value.count}</span>
							</label>
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	{/if}
</div>

<style>
	.facet-sidebar {
		display: flex;
		flex-direction: column;
	}

	.empty-facets {
		padding: var(--space-4);
		color: var(--text-tertiary);
		font-size: 0.85rem;
	}

	.empty-facets p {
		margin: 0 0 var(--space-2);
	}

	.hint {
		font-style: italic;
		font-size: 0.8rem;
	}

	.facet-group {
		padding: var(--space-4);
		border-bottom: 1px solid var(--border-base);
	}

	.facet-group.map-active {
		background: color-mix(in srgb, var(--action-primary) 6%, transparent);
	}

	.facet-group.coverage-facet {
		background: color-mix(in srgb, var(--text-secondary) 4%, transparent);
	}

	.group-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-2);
		margin-bottom: var(--space-3);
	}

	.group-title {
		margin: 0;
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		color: var(--text-secondary);
	}

	.mode-toggle {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		padding: 0.2rem 0.45rem;
		border: 1px solid var(--border-base);
		border-radius: var(--control-radius);
		background: var(--bg-surface);
		color: var(--text-secondary);
		font-size: 0.72rem;
		font-weight: 600;
		cursor: pointer;
	}

	.mode-toggle.active {
		border-color: var(--action-primary);
		color: var(--action-primary);
		background: color-mix(in srgb, var(--action-primary) 10%, var(--bg-surface));
	}

	.mode-hint {
		margin: 0 0 var(--space-3);
		font-size: 0.78rem;
		color: var(--text-tertiary);
		line-height: 1.35;
	}

	.coverage-hint {
		font-style: italic;
	}

	.facet-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.facet-item,
	.legend-item {
		display: flex;
		align-items: flex-start;
		gap: var(--space-2);
		font-size: 0.85rem;
		color: var(--text-primary);
	}

	.facet-item {
		cursor: pointer;
		padding: 0.35rem 0.35rem;
		border-radius: var(--control-radius);
	}

	.facet-item.active {
		background: color-mix(in srgb, var(--action-primary) 12%, transparent);
	}

	.facet-item input[type='checkbox'],
	.facet-item input[type='radio'] {
		accent-color: var(--action-primary);
		cursor: pointer;
		margin-top: 0.2rem;
		flex: 0 0 auto;
	}

	.swatch {
		width: 0.75rem;
		height: 0.75rem;
		border-radius: 2px;
		flex: 0 0 auto;
		border: 1px solid color-mix(in srgb, var(--border-base) 80%, transparent);
		margin-top: 0.2rem;
	}

	.swatch.small {
		width: 0.55rem;
		height: 0.55rem;
	}

	.facet-label {
		flex: 1;
		min-width: 0;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		white-space: normal;
		overflow-wrap: anywhere;
		line-height: 1.35;
		font-family: 'Noto Sans Devanagari', var(--font-sans, sans-serif);
	}

	.facet-count {
		font-size: 0.75rem;
		color: var(--text-tertiary);
		background: var(--bg-surface);
		padding: 2px 6px;
		border-radius: 10px;
		font-variant-numeric: tabular-nums;
		flex: 0 0 auto;
		margin-top: 0.1rem;
	}
</style>
