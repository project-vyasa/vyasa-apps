<script lang="ts">
	import type { MapNode } from '../ExploreView.svelte';
	import type { FacetIndex, FacetSelection } from '$lib/explore/facet-index';
	import {
		buildFacetValueColorMap,
		cornerGradient,
		isCoverageFacet,
		leafFacetCornerColors,
		leafMatchesFacetSelection,
		paintLeafCoverageFacet,
		paintLeafMapFacet
	} from '$lib/explore/facet-index';
	import { MAP_UNMATCHED_FILL } from '$lib/explore/facet-colors';

	interface Props {
		containerData: MapNode & { type: 'leaf-container' };
		manualSelections?: Array<{ startUrn: string; endUrn: string }>;
		activeFacets?: FacetSelection;
		facetIndex?: FacetIndex;
		mapFacetTypeId?: string | null;
		blocksPerRow?: number;
	}

	let {
		containerData,
		manualSelections = [],
		activeFacets = {},
		facetIndex,
		mapFacetTypeId = null,
		blocksPerRow = 10
	}: Props = $props();

	const mapColorMap = $derived(
		mapFacetTypeId && facetIndex
			? buildFacetValueColorMap(facetIndex, mapFacetTypeId)
			: new Map<string, string>()
	);

	const coverageSelection = $derived.by(() => {
		for (const [typeId, values] of Object.entries(activeFacets)) {
			if (isCoverageFacet(typeId) && values.size === 1) {
				return { typeId, valueId: [...values][0] };
			}
		}
		return null;
	});

	const coverageColorMap = $derived(
		coverageSelection && facetIndex
			? buildFacetValueColorMap(facetIndex, coverageSelection.typeId)
			: new Map<string, string>()
	);

	const highlightMode = $derived(!!mapFacetTypeId || !!coverageSelection);

	const urnRangeLabel = $derived.by(() => {
		const indices = containerData.leafIndices;
		if (indices.length === 0) return containerData.id;
		if (indices.length === 1) return `${containerData.id}:${indices[0]}`;
		return `${containerData.id}:${indices[0]} – ${containerData.id}:${indices[indices.length - 1]}`;
	});

	function parseUrn(urn: string) {
		const parts = urn.split(':').map(Number);
		return (parts[0] || 0) * 1000000 + (parts[1] || 0) * 1000 + (parts[2] || 0);
	}

	function isUrnRangeSelected(urn: string) {
		const val = parseUrn(urn);
		for (const sel of manualSelections) {
			const startVal = parseUrn(sel.startUrn);
			const endVal = parseUrn(sel.endUrn);
			if (val >= Math.min(startVal, endVal) && val <= Math.max(startVal, endVal)) {
				return true;
			}
		}
		return false;
	}

	const hasFilterSelection = $derived(
		!highlightMode && Object.keys(activeFacets).length > 0
	);

	const leaves = $derived.by(() => {
		const list = [];
		for (const leafIndex of containerData.leafIndices) {
			const urn = `${containerData.id}:${leafIndex}`;
			const rangeSelected = isUrnRangeSelected(urn);

			let fill = '#475569';
			let facetMatch = false;
			let mapLabel: string | undefined;

			if (coverageSelection && facetIndex) {
				const painted = paintLeafCoverageFacet(
					urn,
					coverageSelection.typeId,
					coverageSelection.valueId,
					facetIndex,
					coverageColorMap
				);
				fill = painted.fill;
				facetMatch = painted.valueId !== undefined;
				mapLabel = painted.label;
			} else if (mapFacetTypeId && facetIndex) {
				const painted = paintLeafMapFacet(urn, mapFacetTypeId, facetIndex, mapColorMap);
				fill = painted.fill;
				facetMatch = painted.valueId !== undefined;
				mapLabel = painted.label;
			} else if (hasFilterSelection && facetIndex) {
				facetMatch = leafMatchesFacetSelection(urn, activeFacets, facetIndex.leafFacetKeys);
				const cornerColors = facetMatch
					? leafFacetCornerColors(urn, activeFacets, facetIndex, facetIndex.leafFacetKeys)
					: [];
				fill = cornerGradient(cornerColors) ?? fill;
			}

			const titleParts = [`URN: ${urn}`, `block ${leafIndex}`];
			if (mapLabel) titleParts.push(mapLabel);

			list.push({
				urn,
				index: leafIndex,
				rangeSelected,
				facetMatch,
				fill,
				title: titleParts.join(' · ')
			});
		}
		return list;
	});
</script>

<div class="leaf-matrix-wrapper" class:map-mode={highlightMode}>
	<div class="matrix-header">
		<h4>{containerData.title}</h4>
		<span class="count">{urnRangeLabel}</span>
	</div>

	<div
		class="leaf-grid"
		style={`--cols: ${blocksPerRow}; --unmatched: ${MAP_UNMATCHED_FILL}`}
		aria-label={`Leaf blocks for ${containerData.title}`}
	>
		{#each leaves as leaf (leaf.urn)}
			<a
				href="#{leaf.urn}"
				class="leaf-cell"
				class:range-selected={leaf.rangeSelected}
				class:facet-match={leaf.facetMatch}
				class:unmatched={highlightMode && !leaf.facetMatch}
				style:background={leaf.fill}
				title={leaf.title}
			></a>
		{/each}
	</div>
</div>

<style>
	.leaf-matrix-wrapper {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		width: max-content;
	}

	.matrix-header {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.matrix-header h4 {
		margin: 0;
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--text-primary);
		line-height: 1.2;
	}

	.matrix-header .count {
		font-size: 0.75rem;
		color: var(--text-tertiary);
		font-family: var(--font-mono, ui-monospace, monospace);
	}

	.leaf-grid {
		display: grid;
		grid-template-columns: repeat(var(--cols), 14px);
		gap: 2px;
	}

	.leaf-cell {
		width: 14px;
		height: 14px;
		border-radius: 2px;
		background: #475569;
		border: 1px solid color-mix(in srgb, var(--border-base) 70%, transparent);
		display: block;
		cursor: pointer;
		transition: transform 0.08s ease, box-shadow 0.08s ease;
		-webkit-user-drag: none;
		user-select: none;
	}

	.map-mode .leaf-cell.unmatched {
		opacity: 0.45;
	}

	.leaf-cell:hover {
		transform: scale(1.2);
		z-index: 1;
		box-shadow: 0 0 0 1px var(--action-primary);
		opacity: 1;
	}

	.leaf-cell.range-selected {
		box-shadow: inset 0 0 0 2px #38bdf8;
	}

	.leaf-cell.facet-match {
		border-color: color-mix(in srgb, var(--text-primary) 35%, transparent);
	}

	.leaf-cell.facet-match.range-selected {
		box-shadow: inset 0 0 0 2px #38bdf8, 0 0 0 1px color-mix(in srgb, var(--text-primary) 25%, transparent);
	}
</style>
