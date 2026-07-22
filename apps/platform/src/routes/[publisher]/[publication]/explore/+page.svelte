<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import { loadPublication } from '$lib/viewer/publication-loader';
	import { ViewerDb } from '$lib/ViewerDb';
	import { onMount, onDestroy } from 'svelte';
	import { Button } from '@project-vyasa/vyasa-ui';
	import { BookOpen } from 'lucide-svelte';
	import type { PackageData } from '$lib/types';
	import { activePublication } from '$lib/viewer/active-publication.svelte';

	const publisher = $derived(page.params.publisher || '');
	const publication = $derived(page.params.publication || '');

	let packageData = $state<PackageData | null>(null);
	let loading = $state(true);
	let selectedRange = $state('1:1');

	const viewerDb = new ViewerDb();

	onMount(async () => {
		if (publisher && publication) {
			try {
				const result = await loadPublication(publisher, publication, viewerDb);
				packageData = result.packageData;
				activePublication.setPublication(publisher, publication);
			} catch (e) {
				console.error('Failed to load explore publication:', e);
			} finally {
				loading = false;
			}
		}
	});

	onDestroy(() => {
		viewerDb.close();
	});

	function hopToReader() {
		if (publisher && publication) {
			const target = selectedRange || activePublication.lastUrn || '1:1';
			goto(`${base}/${publisher}/${publication}/${target}`);
		}
	}
</script>

<div class="explore-page">
	<div class="explore-header">
		<h1 class="explore-title">Explore Publication</h1>
		<p class="explore-desc">Visual exploration and range discovery for {publication || 'Publication'}</p>
	</div>

	<div class="explore-card">
		<div class="card-body">
			<h3>Visual Block Grid & Container Density</h3>
			<p class="card-sub">Interactive verse visualizer and container heatmaps</p>

			<div class="explore-scaffold">
				<div class="placeholder-grid">
					{#each Array(18) as _, i}
						<div class="chapter-block">
							<div class="chapter-label">Chapter {i + 1}</div>
							<div class="dots-grid">
								{#each Array(i === 0 ? 47 : i === 1 ? 72 : 43) as _, j}
									<button
										class="dot-node"
										class:selected={selectedRange === `${i + 1}:${j + 1}`}
										title={`Verse ${i + 1}:${j + 1}`}
										onclick={() => (selectedRange = `${i + 1}:${j + 1}`)}
									></button>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="card-footer">
			<div class="selection-info">
				Selected Range: <strong>{selectedRange}</strong>
			</div>
			<Button variant="primary" icon={BookOpen} onclick={hopToReader}>
				Hop to Book View ({selectedRange})
			</Button>
		</div>
	</div>
</div>

<style>
	.explore-page {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: var(--space-8);
		background-color: var(--bg-surface);
		min-height: 100%;
	}
	.explore-header {
		margin-bottom: var(--space-6);
	}
	.explore-title {
		font-size: 2.25rem;
		font-weight: bold;
		margin: 0;
	}
	.explore-desc {
		color: var(--text-secondary);
		font-size: 1.125rem;
		margin-top: var(--space-2);
	}
	.explore-card {
		background: var(--bg-surface-alt);
		border: 1px solid var(--border-base);
		border-radius: var(--control-radius);
		padding: var(--space-6);
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
	}
	.card-body h3 {
		margin: 0;
		font-size: 1.25rem;
	}
	.card-sub {
		color: var(--text-secondary);
		margin-top: var(--space-1);
		margin-bottom: var(--space-4);
	}
	.explore-scaffold {
		background: var(--bg-surface);
		border: 1px solid var(--border-base);
		border-radius: var(--control-radius);
		padding: var(--space-6);
		max-height: 450px;
		overflow-y: auto;
	}
	.placeholder-grid {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
	.chapter-block {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}
	.chapter-label {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--text-secondary);
	}
	.dots-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
	.dot-node {
		width: 14px;
		height: 14px;
		border-radius: 3px;
		background: var(--action-primary);
		opacity: 0.3;
		border: none;
		cursor: pointer;
		transition: transform 0.15s, opacity 0.15s;
	}
	.dot-node:hover {
		opacity: 0.8;
		transform: scale(1.2);
	}
	.dot-node.selected {
		opacity: 1;
		transform: scale(1.3);
		box-shadow: 0 0 0 2px var(--border-focus);
	}
	.card-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: var(--space-4);
		border-top: 1px solid var(--border-base);
	}
	.selection-info {
		font-size: 1rem;
		color: var(--text-primary);
	}
</style>
