<script lang="ts">
	import { Button, Switch, Select } from '@project-vyasa/vyasa-ui';
	import { BookOpen, Search, FilterX } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import type { PackageData } from '$lib/types';
	import { activePublication } from '$lib/viewer/active-publication.svelte';
	import { viewerSettings } from '$lib/settings.svelte';
	import { titlesForChromeStream, chromeStreamsFromVocabulary, getVocabularyLabel } from '$lib/viewer/vocabulary';
	import { onMount, getContext } from 'svelte';
	import DataMap from './explore/DataMap.svelte';
	import FacetSidebar from './explore/FacetSidebar.svelte';
	import { buildFacetIndex, type FacetSelection } from '$lib/explore/facet-index';
	import { catalogLeafIndices, isCatalogRangesNode } from '$lib/explore/urn-utils';

	interface Props {
		publisher: string;
		publication: string;
		packageData: PackageData | null;
	}

	let { publisher, publication, packageData }: Props = $props();

	// Shell Context
	const shellState = getContext<any>('shellState');

	// Controls
	let selectedBookFilter = $state<string>('ALL');
	let searchQuery = $state<string>('');
	let activeFacets = $state<FacetSelection>({});
	let mapFacetTypeId = $state<string | null>(null);
	let userDismissedMap = $state(false);
	let chromeStream = $state('');

	const primaryStream = $derived(
		(packageData?.manifest as { primary_stream?: string } | undefined)?.primary_stream
	);
	const chromeStreams = $derived(
		chromeStreamsFromVocabulary(packageData?.vocabulary, primaryStream)
	);

	$effect(() => {
		const preferred = viewerSettings.chromeStream;
		const streams = chromeStreams;
		if (preferred && streams.includes(preferred)) {
			chromeStream = preferred;
		} else if (streams.length > 0) {
			chromeStream = streams[0];
		}
	});

	$effect(() => {
		if (chromeStream) viewerSettings.chromeStream = chromeStream;
	});

	// Multi-select State
	let multiSelectMode = $state(false);
	let manualSelections = $state<{ startUrn: string; endUrn: string }[]>([]);

	// Linear Drag Selection State
	let isDragging = $state(false);
	let dragStartUrn = $state<string | null>(null);

	// --- Structure Parsing ---
	export type MapNode =
		| { type: 'branch'; id: string; title: string; children: MapNode[] }
		| { type: 'leaf-container'; id: string; title: string; leafIndices: number[] };

	function parseTree(tree: any, titles: Record<string, string>, prefix = ''): MapNode[] {
		if (Array.isArray(tree) || isCatalogRangesNode(tree)) {
			const leafIndices = catalogLeafIndices(tree);
			if (leafIndices.length === 0) return [];
			return [
				{
					type: 'leaf-container',
					id: prefix,
					title: titles[prefix] || `Container ${prefix}`,
					leafIndices
				}
			];
		}

		const nodes: MapNode[] = [];
		const groupKeys = Object.keys(tree).sort((a, b) => Number(a) - Number(b));

		for (const key of groupKeys) {
			const subNode = tree[key];
			const fullId = prefix ? `${prefix}:${key}` : key;
			const title = titles[fullId] || `Node ${fullId}`;

			if (Array.isArray(subNode) || isCatalogRangesNode(subNode)) {
				const leafIndices = catalogLeafIndices(subNode);
				if (leafIndices.length === 0) continue;
				nodes.push({
					type: 'leaf-container',
					id: fullId,
					title: title,
					leafIndices
				});
			} else if (typeof subNode === 'object' && subNode !== null) {
				nodes.push({
					type: 'branch',
					id: fullId,
					title: title,
					children: parseTree(subNode, titles, fullId)
				});
			}
		}

		return nodes;
	}

	const parsedNodes = $derived.by<MapNode[]>(() => {
		const tree = packageData?.structure?.catalogTree;
		if (!tree || typeof tree !== 'object') return [];
		const primary = (packageData?.manifest as { primary_stream?: string } | undefined)
			?.primary_stream;
		const titles = titlesForChromeStream(
			packageData?.titlesByStream,
			packageData?.titles,
			viewerSettings.chromeStream || undefined,
			primary
		);
		return parseTree(tree, titles);
	});

	function filterNodes(nodes: MapNode[], query: string): MapNode[] {
		const result: MapNode[] = [];
		for (const node of nodes) {
			if (node.type === 'leaf-container') {
				if (node.title.toLowerCase().includes(query) || node.id.toLowerCase().includes(query)) {
					result.push(node);
				}
			} else if (node.type === 'branch') {
				const matchingChildren = filterNodes(node.children, query);
				if (matchingChildren.length > 0) {
					result.push({ ...node, children: matchingChildren });
				} else if (
					node.title.toLowerCase().includes(query) ||
					node.id.toLowerCase().includes(query)
				) {
					result.push(node);
				}
			}
		}
		return result;
	}

	const labelStream = $derived(chromeStream || primaryStream);

	const facetIndex = $derived(buildFacetIndex(packageData, labelStream));

	$effect(() => {
		if (
			!userDismissedMap &&
			mapFacetTypeId === null &&
			facetIndex.types.some((t) => t.id === 'speaker')
		) {
			mapFacetTypeId = 'speaker';
		}
	});
	const filteredNodes = $derived.by<MapNode[]>(() => {
		let list = parsedNodes;
		if (selectedBookFilter !== 'ALL') {
			list = list.filter((n) => n.id === selectedBookFilter);
		}
		if (!searchQuery.trim()) return list;

		const q = searchQuery.toLowerCase().trim();
		return filterNodes(list, q);
	});

	// Total visible stats
	function countLeaves(nodes: MapNode[]): number {
		let count = 0;
		for (const node of nodes) {
			if (node.type === 'leaf-container') count += node.leafIndices.length;
			else if (node.type === 'branch') count += countLeaves(node.children);
		}
		return count;
	}

	const totalVisibleVerses = $derived(countLeaves(filteredNodes));

	const leafUnitLabel = $derived(
		getVocabularyLabel(
			packageData?.vocabulary,
			'structure',
			'verse',
			labelStream || '',
			primaryStream
		) ?? 'verses'
	);

	const leafCountLabel = $derived(`${totalVisibleVerses} ${leafUnitLabel}`);

	// --- Marquee Selection Logic ---
	function handleMarqueeSelection(urns: string[]) {
		if (urns.length === 0) return;

		const numericUrns = urns.map((u) => parseInt(u, 10)).sort((a, b) => a - b);
		const startUrn = numericUrns[0].toString();
		const endUrn = numericUrns[numericUrns.length - 1].toString();

		if (multiSelectMode) {
			manualSelections = [...manualSelections, { startUrn, endUrn }];
		} else {
			manualSelections = [{ startUrn, endUrn }];
		}
	}

	function hopToReader() {
		if (publisher && publication) {
			let target = activePublication.lastUrn || '1:1';
			if (manualSelections.length > 0) {
				target = manualSelections[0].startUrn;
			}
			goto(`${base}/${publisher}/${publication}/${target}`);
		}
	}

	function clearFacets() {
		activeFacets = {};
		mapFacetTypeId = null;
		userDismissedMap = true;
	}

	const EXPLORE_SIDEBAR_WIDTH = 380;

	onMount(() => {
		if (shellState) {
			shellState.setSidebarTop(topSidebar);
			shellState.setSidebarLeft(leftSidebar);
			shellState.setLeftWidth?.(EXPLORE_SIDEBAR_WIDTH);
		}

		return () => {
			if (shellState) {
				shellState.setSidebarTop(undefined);
				shellState.setSidebarLeft(undefined);
				shellState.setLeftWidth?.(320);
			}
		};
	});
</script>

{#snippet topSidebar()}
	<div class="explore-top-sidebar">
		<div class="search-box">
			<Search size={14} class="search-icon" />
			<input
				type="text"
				bind:value={searchQuery}
				placeholder="Filter containers by title..."
				class="search-input"
			/>
		</div>
		{#if chromeStreams.length > 0}
			<div class="labels-control">
				<span class="labels-label">Labels</span>
				<Select
					options={chromeStreams.map((s) => ({ value: s, label: s }))}
					bind:value={chromeStream}
				/>
			</div>
		{/if}
	</div>
{/snippet}

{#snippet leftSidebar()}
	<div class="explore-left-sidebar">
		<div class="sidebar-header">
			<span class="meta-badge">{leafCountLabel}</span>
		</div>
		<div class="sidebar-title-row">
			<h3 class="sidebar-title">Facets</h3>
			{#if Object.keys(activeFacets).length > 0 || mapFacetTypeId}
				<Button
					variant="ghost"
					size="sm"
					icon={FilterX}
					onclick={clearFacets}
					title="Clear Filters"
				/>
			{/if}
		</div>
		<div class="sidebar-facets">
			<FacetSidebar
				bind:activeFacets
				bind:mapFacetTypeId
				{facetIndex}
				onMapDismiss={() => (userDismissedMap = true)}
			/>
		</div>
	</div>
{/snippet}

<div class="explore-view-page">
	<DataMap
		nodes={filteredNodes}
		{manualSelections}
		{activeFacets}
		{facetIndex}
		{mapFacetTypeId}
		onMarqueeSelection={handleMarqueeSelection}
	/>
</div>

<style>
	.explore-view-page {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: var(--bg-surface);
		color: var(--text-primary);
		user-select: none;
		overflow: hidden;
	}

	/* Top Sidebar */
	.explore-top-sidebar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 var(--space-4);
		height: 100%;
		width: 100%;
	}

	.search-box {
		display: flex;
		align-items: center;
		background: var(--bg-surface);
		border: 1px solid var(--border-base);
		border-radius: var(--control-radius);
		padding: 0 var(--space-3);
		gap: var(--space-2);
		width: 280px;
	}

	.search-input {
		border: none;
		background: transparent;
		color: var(--text-primary);
		padding: var(--space-2) 0;
		font-size: 0.85rem;
		outline: none;
		width: 100%;
	}

	.labels-control {
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}

	.labels-label {
		font-size: 0.8rem;
		color: var(--text-secondary);
		font-weight: 500;
		white-space: nowrap;
	}

	.top-controls {
		display: flex;
		align-items: center;
		gap: var(--space-6);
	}

	.multi-select-toggle {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		cursor: pointer;
	}

	.label-text {
		font-size: 0.85rem;
		color: var(--text-secondary);
		font-weight: 500;
	}

	/* Left Sidebar */
	.explore-left-sidebar {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.sidebar-header {
		padding: var(--space-4);
		border-bottom: 1px solid var(--border-base);
	}

	.meta-badge {
		font-size: 0.8rem;
		color: var(--text-secondary);
		background: var(--bg-surface);
		padding: 4px 12px;
		border-radius: 12px;
		border: 1px solid var(--border-base);
		font-weight: 500;
	}

	.sidebar-title-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--space-4);
		border-bottom: 1px solid var(--border-base);
	}

	.sidebar-title {
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--text-primary);
		margin: 0;
	}

	.sidebar-facets {
		flex: 1;
		overflow-y: auto;
	}
</style>
