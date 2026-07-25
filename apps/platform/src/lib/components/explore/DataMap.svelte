<script lang="ts">
	import LeafMatrix from './LeafMatrix.svelte';
	import type { MapNode } from '../ExploreView.svelte';
	import SelectionMarquee from './SelectionMarquee.svelte';

	interface Props {
		nodes: MapNode[];
		manualSelections: Array<{startUrn: string, endUrn: string}>;
		activeFacets?: Record<string, any>;
		onMarqueeSelection?: (urns: string[]) => void;
	}

	let {
		nodes,
		manualSelections = [],
		activeFacets = {},
		onMarqueeSelection
	}: Props = $props();

	function handleMarqueeSelection(rect: DOMRect) {
		const intersectingUrns: string[] = [];
		const links = document.querySelectorAll('.plot-container a');
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

{#snippet renderNodes(nodeList: MapNode[])}
	{@const leaves = nodeList.filter(n => n.type === 'leaf-container')}
	{@const branches = nodeList.filter(n => n.type === 'branch')}

	{#if leaves.length > 0}
		<div class="leaf-grid-wrapper">
			{#each leaves as leaf}
				<LeafMatrix
					containerData={leaf}
					{manualSelections}
					{activeFacets}
					blocksPerRow={10}
				/>
			{/each}
		</div>
	{/if}

	{#if branches.length > 0}
		{#each branches as branch}
			<div class="branch-section">
				<h3 class="branch-heading">{branch.title}</h3>
				<div class="branch-children">
					{@render renderNodes(branch.children)}
				</div>
			</div>
		{/each}
	{/if}
{/snippet}

<div class="data-map-container">
	<SelectionMarquee onSelectionComplete={handleMarqueeSelection}>
		<div class="map-content">
			{@render renderNodes(nodes)}
		</div>
	</SelectionMarquee>
</div>

<style>
	.data-map-container {
		flex: 1;
		background: var(--bg-body);
		overflow-y: auto;
		padding: var(--space-8);
	}

	.map-content {
		display: flex;
		flex-direction: column;
		gap: calc(var(--space-8) * 1.5);
		max-width: 1400px;
		margin: 0 auto;
	}

	.branch-section {
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
		padding-top: var(--space-8);
		border-top: 1px solid var(--border-base);
	}

	.branch-section:first-child {
		border-top: none;
		padding-top: 0;
	}

	.branch-heading {
		font-family: var(--font-heading);
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--text-primary);
		margin: 0;
	}

	.leaf-grid-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: calc(var(--space-8) * 1.5) var(--space-8);
		align-items: start;
	}

	.branch-children {
		display: flex;
		flex-direction: column;
		gap: calc(var(--space-8) * 1.5);
	}
</style>
