<script lang="ts">
	import type { Edition, WorkNote } from '$lib/types';

	let {
		edition,
		workNotes = []
	}: {
		edition?: Edition;
		workNotes?: WorkNote[];
	} = $props();
</script>

<div class="edition-details">
	{#if edition}
		<p class="edition-description">{edition.description}</p>
		<p class="edition-meta">
			{edition.license} · {edition.source} · {edition.snapshot}
		</p>
		<p class="edition-meta">{edition.source_root}</p>
	{/if}
	{#each workNotes as note, i (i)}
		<p class="work-note">
			{#if note.href}
				<a href={note.href} target="_blank" rel="noreferrer">{note.content}</a>
			{:else}
				{note.content}
			{/if}
			{#if note.detail}
				<span class="work-note-detail">{note.detail}</span>
			{/if}
		</p>
	{/each}
</div>

<style>
	.edition-details {
		font-weight: 400;
		font-size: 0.85rem;
		line-height: 1.45;
		color: var(--text-primary);
	}

	.edition-description,
	.edition-meta,
	.work-note {
		margin: 0 0 0.45rem;
	}

	.work-note:last-child,
	.edition-meta:last-child {
		margin-bottom: 0;
	}

	.edition-meta,
	.work-note-detail {
		color: var(--text-secondary);
	}

	.work-note-detail {
		display: block;
	}

	.work-note a {
		color: inherit;
	}
</style>
