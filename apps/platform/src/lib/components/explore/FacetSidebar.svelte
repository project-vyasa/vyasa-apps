<script lang="ts">
	// Scaffolding for the FacetSidebar
	// This would take props for available facets/dimensions and bind to active selections.
	
	import type { PackageData } from '$lib/types';

	interface Props {
		activeFacets: Record<string, any>;
		packageData: PackageData | null;
	}

	let { activeFacets = $bindable({}), packageData }: Props = $props();

	const streams = $derived(packageData?.streams || []);
	const maxStreamCount = $derived(Math.max(0, ...streams.map(s => s.count)));
	const showStreamsFacet = $derived(streams.length > 1 && streams.some(s => s.count < maxStreamCount));

	function toggleFacet(category: string, id: string) {
		if (!activeFacets[category]) {
			activeFacets[category] = new Set();
		}
		if (activeFacets[category].has(id)) {
			activeFacets[category].delete(id);
		} else {
			activeFacets[category].add(id);
		}
		// Force reactivity in Svelte 5 with deep objects can require re-assignment
		activeFacets = { ...activeFacets };
	}

	function hasFacet(category: string, id: string) {
		return activeFacets[category]?.has(id) || false;
	}
</script>

<div class="facet-sidebar">
	{#if showStreamsFacet}
		<div class="facet-group">
			<h4 class="group-title">Streams</h4>
			<div class="facet-list">
				{#each streams as stream}
					<label class="facet-item">
						<input 
							type="checkbox" 
							checked={hasFacet('streams', stream.id)}
							onchange={() => toggleFacet('streams', stream.id)}
						/>
						<span class="facet-label">{stream.label}</span>
						<span class="facet-count">{stream.count}</span>
					</label>
				{/each}
			</div>
		</div>
	{:else}
		<div class="empty-facets">
			<p>All streams have 100% coverage across this publication.</p>
		</div>
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
		font-style: italic;
	}

	.empty-facets p {
		margin: 0;
	}

	.facet-group {
		padding: var(--space-4);
		border-bottom: 1px solid var(--border-base);
	}

	.group-title {
		margin: 0 0 var(--space-3) 0;
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		color: var(--text-secondary);
	}

	.facet-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.facet-item {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-size: 0.85rem;
		color: var(--text-primary);
		cursor: pointer;
	}

	.facet-item input[type="checkbox"] {
		accent-color: var(--action-primary);
		cursor: pointer;
	}

	.facet-label {
		flex: 1;
	}

	.facet-count {
		font-size: 0.75rem;
		color: var(--text-tertiary);
		background: var(--bg-surface);
		padding: 2px 6px;
		border-radius: 10px;
	}


</style>
