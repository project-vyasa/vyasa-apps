<script lang="ts">
	import type { MapNode } from '../ExploreView.svelte';
	import * as Plot from '@observablehq/plot';

	interface Props {
		containerData: MapNode & { type: 'leaf-container' };
		manualSelections?: Array<{startUrn: string, endUrn: string}>;
		activeFacets?: Record<string, any>;
		blocksPerRow?: number;
	}

	let {
		containerData,
		manualSelections = [],
		activeFacets = {},
		blocksPerRow = 10
	}: Props = $props();

	let containerEl = $state<HTMLElement | null>(null);

	function parseUrn(urn: string) {
		const parts = urn.split(':').map(Number);
		return (parts[0] || 0) * 1000000 + (parts[1] || 0) * 1000 + (parts[2] || 0);
	}

	function isUrnSelected(urn: string) {
		const val = parseUrn(urn);
		
		// 1. Check if it falls within any manual selection range
		for (const sel of manualSelections) {
			const startVal = parseUrn(sel.startUrn);
			const endVal = parseUrn(sel.endUrn);
			if (val >= Math.min(startVal, endVal) && val <= Math.max(startVal, endVal)) {
				return true;
			}
		}

		// 2. Check if it matches active facets (stubbed for now until block attribute lookup is implemented)
		// if (matchesFacets(urn, activeFacets)) return true;

		return false;
	}

	const leaves = $derived.by(() => {
		const list = [];
		for (let i = 0; i < containerData.leafCount; i++) {
			const urn = `${containerData.id}:${i + 1}`;
			list.push({
				urn,
				index: i + 1,
				col: i % blocksPerRow,
				row: Math.floor(i / blocksPerRow),
				selected: isUrnSelected(urn)
			});
		}
		return list;
	});

	$effect(() => {
		if (!containerEl || leaves.length === 0) return;

		containerEl.innerHTML = '';

		const totalRows = Math.ceil(containerData.leafCount / blocksPerRow);
		
		// 14px cell size + 2px gap + margins
		const cellSize = 14; 
		const plotWidth = blocksPerRow * (cellSize + 2);
		const plotHeight = totalRows * (cellSize + 2);

		const plot = Plot.plot({
			width: plotWidth,
			height: plotHeight,
			padding: 0,
			margin: 0,
			style: {
				background: "transparent"
			},
			x: {
				axis: null,
				type: "band",
				domain: Array.from({length: blocksPerRow}, (_, i) => i)
			},
			y: {
				axis: null,
				type: "band",
				domain: Array.from({length: totalRows}, (_, i) => i)
			},
			color: {
				domain: [false, true],
				range: ["#475569", "#0ea5e9"] // slate-600 to sky-500
			},
			marks: [
				Plot.cell(leaves, {
					x: "col",
					y: "row",
					fill: "selected",
					title: (d: any) => `URN: ${d.urn}\nBlock ${d.index}`,
					href: (d: any) => `#${d.urn}`,
					inset: 1,
					rx: 2
				})
			]
		});

		containerEl.appendChild(plot);
	});

	// --- LeafMatrix.svelte ---
</script>

<div class="leaf-matrix-wrapper">
	<div class="matrix-header">
		<h4>{containerData.title}</h4>
		<span class="count">{containerData.id}:1 &ndash; {containerData.id}:{containerData.leafCount}</span>
	</div>
	
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_mouse_events_have_key_events -->
	<div 
		class="plot-container" 
		bind:this={containerEl}
	>
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
	}

	.plot-container {
		display: inline-block;
	}

	:global(.plot-container a) {
		cursor: pointer;
		text-decoration: none;
		-webkit-user-drag: none;
		user-select: none;
	}
</style>
