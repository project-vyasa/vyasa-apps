<script lang="ts">
	import { Button } from '@project-vyasa/vyasa-ui';
	import { BookOpen, Search, Grid, Calendar, Filter } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import type { PackageData } from '$lib/types';
	import { activePublication } from '$lib/viewer/active-publication.svelte';
	import { onMount } from 'svelte';

	interface Props {
		publisher: string;
		publication: string;
		packageData: PackageData | null;
	}

	let { publisher, publication, packageData }: Props = $props();

	// Controls
	let selectedBookFilter = $state<string>('ALL');
	let searchQuery = $state<string>('');
	let startUrn = $state<string>('1:1');
	let endUrn = $state<string>('1:1');

	// Marquee Drag Selection State
	let gridContainer = $state<HTMLElement>();
	let isDragging = $state(false);
	let dragStartPos = $state<{ x: number; y: number } | null>(null);
	let dragCurrentPos = $state<{ x: number; y: number } | null>(null);
	let dragStartUrn = $state<string | null>(null);

	// --- Structure Parsing ---
	interface ContainerNode {
		id: string;
		chapterNum: string;
		title: string;
		leafCount: number;
		bookId: string;
		bookTitle: string;
	}

	interface BookGroup {
		id: string;
		title: string;
		containers: ContainerNode[];
		totalLeafCount: number;
	}

	const parsedBooks = $derived.by<BookGroup[]>(() => {
		const tree = packageData?.structure?.catalogTree;
		if (!tree || typeof tree !== 'object') return [];

		const titles = packageData?.titles || {};
		const groups: BookGroup[] = [];

		if (Array.isArray(tree)) {
			groups.push({
				id: '1',
				title: 'Publication Content',
				containers: [
					{
						id: '1',
						chapterNum: '1',
						title: titles['1'] || 'Chapter 1',
						leafCount: tree.length,
						bookId: '1',
						bookTitle: 'Main'
					}
				],
				totalLeafCount: tree.length
			});
			return groups;
		}

		const groupKeys = Object.keys(tree as Record<string, unknown>).sort((a, b) => Number(a) - Number(b));

		for (const gKey of groupKeys) {
			const subNode = (tree as Record<string, unknown>)[gKey];
			const groupTitle = titles[gKey] || `Book ${gKey}`;
			const containers: ContainerNode[] = [];
			let totalLeaves = 0;

			if (Array.isArray(subNode)) {
				containers.push({
					id: gKey,
					chapterNum: gKey,
					title: groupTitle,
					leafCount: subNode.length,
					bookId: gKey,
					bookTitle: groupTitle
				});
				totalLeaves += subNode.length;
			} else if (typeof subNode === 'object' && subNode !== null) {
				const cKeys = Object.keys(subNode as Record<string, unknown>).sort((a, b) => Number(a) - Number(b));
				for (const cKey of cKeys) {
					const leaves = (subNode as Record<string, unknown>)[cKey];
					const fullId = `${gKey}:${cKey}`;
					const cTitle = titles[fullId] || `Chapter ${cKey}`;
					const count = Array.isArray(leaves) ? leaves.length : 1;
					containers.push({
						id: fullId,
						chapterNum: cKey,
						title: cTitle,
						leafCount: count,
						bookId: gKey,
						bookTitle: groupTitle
					});
					totalLeaves += count;
				}
			}

			groups.push({
				id: gKey,
				title: groupTitle,
				containers,
				totalLeafCount: totalLeaves
			});
		}

		return groups;
	});

	// Filtered Books & Containers
	const filteredBooks = $derived.by<BookGroup[]>(() => {
		let list = parsedBooks;
		if (selectedBookFilter !== 'ALL') {
			list = list.filter((b) => b.id === selectedBookFilter);
		}

		if (!searchQuery.trim()) return list;

		const q = searchQuery.toLowerCase().trim();
		return list
			.map((book) => {
				const matchingContainers = book.containers.filter(
					(c) => c.title.toLowerCase().includes(q) || c.id.toLowerCase().includes(q)
				);
				return {
					...book,
					containers: matchingContainers
				};
			})
			.filter((book) => book.containers.length > 0);
	});

	// Total visible stats
	const totalVisibleVerses = $derived(
		filteredBooks.reduce((sum, b) => sum + b.containers.reduce((cSum, c) => cSum + c.leafCount, 0), 0)
	);

	// --- Drag Marquee Selection Logic ---
	function onMouseDownNode(e: MouseEvent, urn: string) {
		e.preventDefault();
		isDragging = true;
		dragStartPos = { x: e.clientX, y: e.clientY };
		dragCurrentPos = { x: e.clientX, y: e.clientY };
		dragStartUrn = urn;
		startUrn = urn;
		endUrn = urn;
	}

	function onMouseMove(e: MouseEvent) {
		if (!isDragging || !gridContainer) return;
		dragCurrentPos = { x: e.clientX, y: e.clientY };

		// Calculate marquee box bounds
		if (!dragStartPos) return;
		const minX = Math.min(dragStartPos.x, e.clientX);
		const maxX = Math.max(dragStartPos.x, e.clientX);
		const minY = Math.min(dragStartPos.y, e.clientY);
		const maxY = Math.max(dragStartPos.y, e.clientY);

		const dots = gridContainer.querySelectorAll<HTMLButtonElement>('.cell-node');
		let firstUrn: string | null = null;
		let lastUrn: string | null = null;

		dots.forEach((dot) => {
			const rect = dot.getBoundingClientRect();
			// Check bounding box intersection
			const intersects =
				rect.left <= maxX && rect.right >= minX && rect.top <= maxY && rect.bottom >= minY;

			if (intersects) {
				const urn = dot.dataset.urn;
				if (urn) {
					if (!firstUrn) firstUrn = urn;
					lastUrn = urn;
				}
			}
		});

		if (firstUrn && lastUrn) {
			startUrn = firstUrn;
			endUrn = lastUrn;
		}
	}

	function onMouseUp() {
		isDragging = false;
		dragStartPos = null;
		dragCurrentPos = null;
	}

	function selectChapter(c: ContainerNode) {
		startUrn = `${c.id}:1`;
		endUrn = `${c.id}:${c.leafCount}`;
	}

	function hopToReader() {
		if (publisher && publication) {
			const target = startUrn || activePublication.lastUrn || '1:1';
			goto(`${base}/${publisher}/${publication}/${target}`);
		}
	}

	// Marquee style helper
	const marqueeStyle = $derived.by(() => {
		if (!isDragging || !dragStartPos || !dragCurrentPos || !gridContainer) return '';
		const containerRect = gridContainer.getBoundingClientRect();
		const left = Math.min(dragStartPos.x, dragCurrentPos.x) - containerRect.left + gridContainer.scrollLeft;
		const top = Math.min(dragStartPos.y, dragCurrentPos.y) - containerRect.top + gridContainer.scrollTop;
		const width = Math.abs(dragCurrentPos.x - dragStartPos.x);
		const height = Math.abs(dragCurrentPos.y - dragStartPos.y);

		return `left: ${left}px; top: ${top}px; width: ${width}px; height: ${height}px;`;
	});

	onMount(() => {
		const handleGlobalMouseUp = () => {
			if (isDragging) onMouseUp();
		};
		window.addEventListener('mouseup', handleGlobalMouseUp);
		return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
	});
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="explore-view-page"
	onmousemove={onMouseMove}
>
	<!-- Top Bar Controls -->
	<div class="explore-top-bar">
		<div class="explore-title-block">
			<div class="title-with-icon">
				<Calendar size={22} class="accent-icon" />
				<h1 class="page-title">{packageData?.manifest.title || publication}</h1>
			</div>
			<span class="meta-badge">{totalVisibleVerses} total verses</span>
		</div>

		<!-- Book Pills Filter -->
		<div class="filter-pills-row">
			<button
				class="pill-btn"
				class:active={selectedBookFilter === 'ALL'}
				onclick={() => (selectedBookFilter = 'ALL')}
			>
				All Books ({parsedBooks.length})
			</button>
			{#each parsedBooks as book}
				<button
					class="pill-btn"
					class:active={selectedBookFilter === book.id}
					onclick={() => (selectedBookFilter = book.id)}
				>
					{book.title} ({book.containers.length})
				</button>
			{/each}
		</div>

		<!-- Search & CTA Row -->
		<div class="action-bar-row">
			<div class="search-box">
				<Search size={14} class="search-icon" />
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Filter chapters by title..."
					class="search-input"
				/>
			</div>

			<div class="selection-cta-box">
				<span class="selection-label">
					Range: <strong>{startUrn === endUrn ? startUrn : `${startUrn} – ${endUrn}`}</strong>
				</span>
				<Button variant="primary" icon={BookOpen} onclick={hopToReader}>
					Hop to Reader
				</Button>
			</div>
		</div>
	</div>

	<!-- Fluid D3 / Calendar View Visual Grid -->
	<div
		class="chart-container"
		bind:this={gridContainer}
	>
		{#if isDragging && marqueeStyle}
			<div class="marquee-box" style={marqueeStyle}></div>
		{/if}

		<div class="chart-content">
			{#each filteredBooks as book}
				<div class="book-chart-section">
					<div class="book-header">
						<h2 class="book-name">{book.title}</h2>
						<span class="book-sub">{book.containers.length} Chapters</span>
					</div>

					<div class="chapters-chart-rows">
						{#each book.containers as c}
							<div class="chapter-chart-row">
								<!-- svelte-ignore a11y_click_events_have_key_events -->
								<!-- svelte-ignore a11y_no_static_element_interactions -->
								<div
									class="chapter-meta"
									onclick={() => selectChapter(c)}
									title="Click to select whole chapter"
								>
									<span class="ch-title">{c.title}</span>
									<span class="ch-count">{c.leafCount}</span>
								</div>

								<!-- Horizontal D3 Calendar Grid -->
								<div class="dots-heatmap-strip">
									{#each Array(c.leafCount) as _, idx}
										{@const urn = `${c.id}:${idx + 1}`}
										{@const isSelected = startUrn === urn || (startUrn <= urn && urn <= endUrn)}
										<button
											class="cell-node"
											class:selected={isSelected}
											data-urn={urn}
											title={`Verse ${urn}`}
											onmousedown={(e) => onMouseDownNode(e, urn)}
										></button>
									{/each}
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
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
	}

	/* Top Bar Controls */
	.explore-top-bar {
		padding: var(--space-4) var(--space-6);
		background-color: var(--bg-surface-alt);
		border-bottom: 1px solid var(--border-base);
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		flex-shrink: 0;
	}

	.explore-title-block {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.title-with-icon {
		display: flex;
		align-items: center;
		gap: var(--space-3);
	}

	.page-title {
		font-size: 1.5rem;
		font-weight: 700;
		margin: 0;
	}

	.meta-badge {
		font-size: 0.8rem;
		color: var(--text-secondary);
		background: var(--bg-surface);
		padding: 2px 10px;
		border-radius: 12px;
		border: 1px solid var(--border-base);
	}

	/* Filter Pills Row */
	.filter-pills-row {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		overflow-x: auto;
		padding-bottom: 2px;
	}

	.pill-btn {
		background: var(--bg-surface);
		border: 1px solid var(--border-base);
		color: var(--text-secondary);
		padding: 4px 12px;
		border-radius: 16px;
		font-size: 0.825rem;
		font-weight: 500;
		cursor: pointer;
		white-space: nowrap;
		transition: all 0.15s ease;
	}

	.pill-btn:hover {
		color: var(--text-primary);
		border-color: var(--action-primary);
	}

	.pill-btn.active {
		background: var(--action-primary);
		color: var(--action-text, #fff);
		border-color: var(--action-primary);
	}

	/* Action Row */
	.action-bar-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-4);
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

	.selection-cta-box {
		display: flex;
		align-items: center;
		gap: var(--space-4);
	}

	.selection-label {
		font-size: 0.9rem;
		color: var(--text-secondary);
	}

	/* Chart Container */
	.chart-container {
		flex: 1;
		overflow: auto;
		padding: var(--space-6);
		position: relative;
	}

	.marquee-box {
		position: absolute;
		border: 1px solid var(--action-primary);
		background-color: rgba(99, 102, 241, 0.15);
		pointer-events: none;
		z-index: 100;
	}

	.chart-content {
		display: flex;
		flex-direction: column;
		gap: var(--space-8);
		max-width: 1400px;
		margin: 0 auto;
	}

	.book-chart-section {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	.book-header {
		display: flex;
		align-items: baseline;
		gap: var(--space-3);
		border-bottom: 2px solid var(--border-base);
		padding-bottom: var(--space-2);
	}

	.book-name {
		font-size: 1.2rem;
		font-weight: 700;
		margin: 0;
	}

	.book-sub {
		font-size: 0.85rem;
		color: var(--text-secondary);
	}

	.chapters-chart-rows {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.chapter-chart-row {
		display: flex;
		align-items: center;
		gap: var(--space-4);
	}

	.chapter-meta {
		width: 180px;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 0.825rem;
		cursor: pointer;
		padding: 2px 4px;
		border-radius: 4px;
		transition: background-color 0.15s;
	}

	.chapter-meta:hover {
		background-color: var(--bg-surface-alt);
		color: var(--action-primary);
	}

	.ch-title {
		font-weight: 500;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.ch-count {
		font-size: 0.75rem;
		color: var(--text-tertiary);
		margin-left: 4px;
	}

	/* D3 Calendar Heatmap Strip */
	.dots-heatmap-strip {
		display: flex;
		flex-wrap: wrap;
		gap: 3px;
		align-items: center;
		flex: 1;
	}

	.cell-node {
		width: 11px;
		height: 11px;
		border-radius: 2px;
		background: var(--action-primary);
		opacity: 0.25;
		border: none;
		cursor: pointer;
		padding: 0;
		transition: transform 0.1s ease, opacity 0.1s ease;
	}

	.cell-node:hover {
		opacity: 0.8;
		transform: scale(1.3);
	}

	.cell-node.selected {
		opacity: 1;
		background: var(--action-primary);
		transform: scale(1.2);
		box-shadow: 0 0 0 1px var(--bg-surface), 0 0 0 2px var(--action-primary);
	}
</style>
