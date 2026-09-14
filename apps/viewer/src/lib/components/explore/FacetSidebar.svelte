<script lang="ts">
	import { onMount } from 'svelte';
	import { Map, List, ChevronDown, ChevronRight, ClipboardCopy, Check } from 'lucide-svelte';
	import { Switch } from '@project-vyasa/vyasa-ui';
	import { copyText } from '$lib/copy-text';
	import {
		loadCollapsedFacetTypes,
		saveCollapsedFacetTypes
	} from '$lib/explore/facet-sidebar-prefs';
	import type { FacetIndex, FacetSelection, FacetType, FacetValue } from '$lib/explore/facet-index';
	import {
		STREAM_COVERAGE_MAX,
		buildFacetValueColorMap,
		canSelectCategoricalFacet,
		encodeFacetKey,
		facetHistogramTsv,
		isCoverageFacet,
		mapFacetAllowed,
		relativeFrequency,
		selectedFacetColorMap,
		visibleFacetValues
	} from '$lib/explore/facet-index';

	interface Props {
		activeFacets: FacetSelection;
		facetIndex: FacetIndex;
		mapFacetTypeId?: string | null;
		hideContainersWithoutGaps?: boolean;
		onMapDismiss?: () => void;
	}

	let {
		activeFacets = $bindable({}),
		facetIndex,
		mapFacetTypeId = $bindable<string | null>(null),
		hideContainersWithoutGaps = $bindable(true),
		onMapDismiss
	}: Props = $props();

	const streamCoverageActive = $derived((activeFacets.stream?.size ?? 0) > 0);
	const selectionColors = $derived(selectedFacetColorMap(activeFacets));

	let collapsed = $state(new Set<string>());
	let moreOpen = $state<Record<string, boolean>>({});
	let moreQuery = $state<Record<string, string>>({});
	let copiedTypeId = $state<string | null>(null);

	onMount(() => {
		collapsed = loadCollapsedFacetTypes();
	});

	function toggleCollapsed(typeId: string) {
		const next = new Set(collapsed);
		if (next.has(typeId)) next.delete(typeId);
		else next.add(typeId);
		collapsed = next;
		saveCollapsedFacetTypes(next);
	}

	function toggleFilter(typeId: string, valueId: string) {
		if (mapFacetTypeId === typeId) return;
		if (!canSelectCategoricalFacet(activeFacets, typeId, valueId)) return;
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

	function toggleCoverage(typeId: string, valueId: string, gapCount: number) {
		if (gapCount === 0) return;
		if (mapFacetTypeId) {
			mapFacetTypeId = null;
			onMapDismiss?.();
		}
		const current = new Set(activeFacets[typeId] ?? []);
		if (current.has(valueId)) {
			current.delete(valueId);
			const next = { ...activeFacets };
			if (current.size === 0) delete next[typeId];
			else next[typeId] = current;
			activeFacets = next;
			return;
		}
		if (current.size >= STREAM_COVERAGE_MAX) return;
		current.add(valueId);
		activeFacets = { ...activeFacets, [typeId]: current };
	}

	function coverageAtMax(typeId: string, valueId: string, gapCount: number): boolean {
		if (gapCount === 0) return true;
		const current = activeFacets[typeId];
		if (!current || current.has(valueId)) return false;
		return current.size >= STREAM_COVERAGE_MAX;
	}

	function streamCoverageComplete(facetType: { values: { count: number }[] }): boolean {
		return facetType.values.every((value) => value.count === 0);
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
		if (isCoverageFacet(typeId) || mapFacetTypeId === typeId) {
			return buildFacetValueColorMap(facetIndex, typeId).get(valueId) ?? `var(--text-tertiary)`;
		}
		return selectionColors.get(encodeFacetKey(typeId, valueId)) ?? 'transparent';
	}

	function filterDisabled(typeId: string, valueId: string): boolean {
		return mapFacetTypeId === typeId || !canSelectCategoricalFacet(activeFacets, typeId, valueId);
	}

	async function copyHistogram(facetType: FacetType) {
		const ok = await copyText(facetHistogramTsv(facetType));
		if (!ok) return;
		copiedTypeId = facetType.id;
		setTimeout(() => {
			if (copiedTypeId === facetType.id) copiedTypeId = null;
		}, 1600);
	}

	function listsFor(facetType: FacetType) {
		return visibleFacetValues(
			facetType.values,
			activeFacets[facetType.id],
			undefined,
			moreQuery[facetType.id] ?? ''
		);
	}

	function maxCount(facetType: FacetType): number {
		return Math.max(0, ...facetType.values.map((value) => value.count));
	}
</script>

{#snippet valueRow(facetType: FacetType, value: FacetValue, barMax: number, coverage: boolean)}
	{@const share = relativeFrequency(value.count, barMax)}
	{@const checked = hasFilter(facetType.id, value.id)}
	{@const disabled = coverage
		? coverageAtMax(facetType.id, value.id, value.count)
		: filterDisabled(facetType.id, value.id)}
	<label
		class="facet-item"
		class:coverage-item={coverage}
		class:active={checked}
		class:disabled
	>
		<span class="freq-bar" style:width="{share * 100}%"></span>
		<input
			type="checkbox"
			checked={checked}
			{disabled}
			onchange={() =>
				coverage
					? toggleCoverage(facetType.id, value.id, value.count)
					: toggleFilter(facetType.id, value.id)}
		/>
		<span class="swatch small" style:background={colorFor(facetType.id, value.id)}></span>
		<span class="facet-label" title={value.label}>{value.label}</span>
		<span class="facet-count">{value.count}</span>
	</label>
{/snippet}

<div class="facet-sidebar">
	{#if facetIndex.types.length === 0}
		<div class="empty-facets">
			<p>No entity or attribute facets in this publication yet.</p>
			<p class="hint">Facets come from packed graph annotations and block metadata when present.</p>
		</div>
	{:else}
		{#each facetIndex.types as facetType (facetType.id)}
			{@const mapActive = mapFacetTypeId === facetType.id}
			{@const coverage = facetType.kind === 'coverage'}
			{@const isCollapsed = collapsed.has(facetType.id)}
			{@const allowMap = mapFacetAllowed(facetType)}
			{@const lists = listsFor(facetType)}
			{@const barMax = maxCount(facetType)}
			<div class="facet-group" class:map-active={mapActive} class:coverage-facet={coverage}>
				<div class="group-header">
					<button
						type="button"
						class="group-toggle"
						onclick={() => toggleCollapsed(facetType.id)}
						aria-expanded={!isCollapsed}
					>
						{#if isCollapsed}
							<ChevronRight size={14} />
						{:else}
							<ChevronDown size={14} />
						{/if}
						<span class="group-title">{facetType.label}</span>
					</button>
					<div class="group-actions">
						<button
							type="button"
							class="icon-btn"
							onclick={() => copyHistogram(facetType)}
							title="Copy histogram"
						>
							{#if copiedTypeId === facetType.id}
								<Check size={14} />
							{:else}
								<ClipboardCopy size={14} />
							{/if}
						</button>
						{#if allowMap}
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
				</div>

				{#if !isCollapsed}
					{#if coverage}
						<p class="mode-hint coverage-hint">
							Gaps vs primary stream — select up to {STREAM_COVERAGE_MAX} to highlight missing
							coverage on the map. “Without primary” marks blocks that exist only in alternate
							streams.
						</p>
						{#if streamCoverageComplete(facetType)}
							<p class="mode-hint coverage-complete">All alternate streams fully cover primary.</p>
						{/if}
						<div class="facet-list">
							{#each facetType.values as value (facetType.id + value.id)}
								{@render valueRow(facetType, value, barMax, true)}
							{/each}
						</div>
						<label
							class="coverage-map-toggle"
							class:disabled={!streamCoverageActive}
							title={streamCoverageActive
								? 'Hide containers with no matching gaps'
								: 'Select a stream gap to filter containers'}
						>
							<Switch bind:checked={hideContainersWithoutGaps} disabled={!streamCoverageActive} />
							<span class="toggle-label">Containers with gaps only</span>
						</label>
					{:else if mapActive}
						<p class="mode-hint">
							Every block is colored by {facetType.label.toLowerCase()}. Unmarked blocks stay dim.
						</p>
						<div class="facet-list legend">
							{#each facetType.values as value (facetType.id + value.id)}
								<div class="legend-item">
									<span class="freq-bar" style:width="{relativeFrequency(value.count, barMax) * 100}%"
									></span>
									<span class="swatch" style:background={colorFor(facetType.id, value.id)}></span>
									<span class="facet-label" title={value.label}>{value.label}</span>
									<span class="facet-count">{value.count}</span>
								</div>
							{/each}
						</div>
					{:else}
						<div class="facet-list">
							{#each lists.pinned as value (facetType.id + value.id)}
								{@render valueRow(facetType, value, barMax, false)}
							{/each}
						</div>
						{#if lists.hiddenCount > 0}
							<button
								type="button"
								class="more-toggle"
								onclick={() => {
									moreOpen[facetType.id] = !moreOpen[facetType.id];
									if (moreOpen[facetType.id] && moreQuery[facetType.id] === undefined) {
										moreQuery[facetType.id] = '';
									}
								}}
							>
								{moreOpen[facetType.id] ? 'Less' : `More… (${lists.hiddenCount})`}
							</button>
							{#if moreOpen[facetType.id]}
								<input
									class="more-search"
									type="search"
									placeholder="Search values…"
									bind:value={moreQuery[facetType.id]}
								/>
								<div class="facet-list">
									{#each lists.more as value (facetType.id + 'more' + value.id)}
										{@render valueRow(facetType, value, barMax, false)}
									{/each}
								</div>
							{/if}
						{/if}
					{/if}
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

	.group-toggle {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		min-width: 0;
		padding: 0;
		border: 0;
		background: transparent;
		color: inherit;
		cursor: pointer;
	}

	.group-title {
		margin: 0;
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		color: var(--text-secondary);
		text-align: left;
	}

	.group-actions {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		flex: 0 0 auto;
	}

	.icon-btn,
	.mode-toggle,
	.more-toggle {
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

	.icon-btn {
		padding: 0.2rem;
	}

	.mode-toggle.active {
		border-color: var(--action-primary);
		color: var(--action-primary);
		background: color-mix(in srgb, var(--action-primary) 10%, var(--bg-surface));
	}

	.more-toggle {
		margin-top: var(--space-2);
	}

	.more-search {
		width: 100%;
		margin: var(--space-2) 0;
		padding: 0.3rem 0.5rem;
		border: 1px solid var(--border-base);
		border-radius: var(--control-radius);
		background: var(--bg-surface);
		color: var(--text-primary);
		font-size: 0.8rem;
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

	.coverage-complete {
		color: var(--text-secondary);
	}

	.coverage-map-toggle {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		margin-top: var(--space-3);
		padding: 0.35rem;
		cursor: pointer;
	}

	.coverage-map-toggle.disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.toggle-label {
		font-size: 0.82rem;
		color: var(--text-secondary);
	}

	.facet-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.facet-item,
	.legend-item {
		position: relative;
		display: flex;
		align-items: flex-start;
		gap: var(--space-2);
		font-size: 0.85rem;
		color: var(--text-primary);
		overflow: hidden;
	}

	.facet-item {
		cursor: pointer;
		padding: 0.35rem 0.35rem;
		border-radius: var(--control-radius);
	}

	.facet-item.active {
		background: color-mix(in srgb, var(--action-primary) 12%, transparent);
	}

	.facet-item.disabled {
		opacity: 0.45;
		cursor: not-allowed;
	}

	.freq-bar {
		position: absolute;
		inset: 0 auto 0 0;
		background: color-mix(in srgb, var(--action-primary) 14%, transparent);
		pointer-events: none;
	}

	.facet-item > :not(.freq-bar),
	.legend-item > :not(.freq-bar) {
		position: relative;
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
