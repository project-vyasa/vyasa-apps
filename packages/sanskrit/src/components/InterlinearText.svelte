<script lang="ts">
	import type { InterlinearSegment, InterlinearStream } from '../interlinear';

	interface Props {
		segments: InterlinearSegment[];
		streams: InterlinearStream[];
		active: number;
		onSelect: (index: number) => void;
	}

	let { segments, streams, active, onSelect }: Props = $props();

	let root = $state<HTMLElement | null>(null);

	$effect(() => {
		active;
		const el = root?.querySelector<HTMLElement>('[data-active="true"]');
		el?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
	});

	function line(seg: InterlinearSegment, stream: InterlinearStream): string {
		if (stream === 'pada') return seg.pada;
		if (stream === 'raw') return seg.raw;
		return seg.sandhied;
	}
</script>

<div class="score" bind:this={root} aria-label="Recitation steps">
	{#each segments as seg, i (seg.step)}
		<button
			type="button"
			class="unit"
			class:active={i === active}
			class:parigraha={seg.isParigraha}
			data-active={i === active ? 'true' : undefined}
			aria-current={i === active ? 'true' : undefined}
			onclick={() => onSelect(i)}
		>
			<span class="formula">{seg.formula}</span>
			{#each streams as stream (stream)}
				<span class="line font-sanskrit {stream}">{line(seg, stream)}</span>
			{/each}
		</button>
	{/each}
</div>

<style>
	.score {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		gap: var(--space-2) var(--space-4);
		padding: var(--space-2) 0;
	}

	.unit {
		display: flex;
		flex: 0 0 auto;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.15rem;
		width: max-content;
		max-width: none;
		padding: 0.45rem 0.7rem 0.6rem;
		border: 1px solid transparent;
		border-radius: var(--control-radius);
		background: transparent;
		color: inherit;
		text-align: left;
		cursor: pointer;
	}

	.unit:hover,
	.unit:focus-visible {
		background: var(--bg-surface-elevated, var(--bg-canvas));
		border-color: var(--border-base);
	}

	.unit.active {
		background: color-mix(in srgb, var(--action-primary) 12%, var(--bg-canvas));
		border-color: var(--action-primary);
		box-shadow: 0 0 0 1px var(--action-primary);
	}

	.unit.parigraha .formula {
		font-style: italic;
	}

	.formula {
		font-size: 0.65rem;
		font-weight: var(--font-semibold);
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--text-tertiary);
		line-height: 1.2;
		white-space: nowrap;
	}

	.line {
		display: block;
		white-space: nowrap;
		overflow-wrap: normal;
		word-break: keep-all;
	}

	.pada {
		font-size: 0.82rem;
		line-height: 1.55;
		color: var(--text-tertiary);
	}

	.raw {
		font-size: 0.95rem;
		line-height: 1.65;
		color: var(--text-secondary);
	}

	.sandhied {
		font-size: 1.2rem;
		line-height: 1.75;
		color: var(--text-primary);
		font-weight: var(--font-medium, 500);
	}

	.unit.active .sandhied {
		color: var(--text-primary);
	}

	@media print {
		.unit {
			break-inside: avoid;
			border-color: var(--border-base);
		}

		.unit.active {
			box-shadow: none;
			background: transparent;
		}

		.sandhied {
			font-size: 1.5rem;
		}
	}
</style>
