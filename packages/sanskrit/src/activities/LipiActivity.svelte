<script lang="ts">
	import { Badge, Button, Select } from '@project-vyasa/vyasa-ui';
	import EngineBanner from '../components/EngineBanner.svelte';
	import { insertAtCursor, PALETTE_GROUPS, VEDIC_PALETTE, type PaletteMark } from '../insert-text';
	import {
		ensureEngine,
		GOLDEN_PADA,
		roundTripLossless,
		supportedScripts,
		transliterate,
		type EngineStatus,
		type ScriptInfo
	} from '../wasm';

	let status = $state<EngineStatus>('loading');
	let scripts = $state<ScriptInfo[]>([]);
	let sourceScript = $state('devanagari');
	let targetScript = $state('telugu');
	let sourceText = $state(GOLDEN_PADA);
	let targetText = $state('');
	let lossless = $state(true);
	let convertError = $state('');
	let sourceEl = $state<HTMLTextAreaElement | null>(null);
	let lastInserted = $state<string | null>(null);

	const scriptOptions = $derived(scripts.map((s) => ({ label: s.name, value: s.id })));

	$effect(() => {
		void ensureEngine().then(async (next) => {
			status = next;
			scripts = await supportedScripts();
		});
	});

	$effect(() => {
		const text = sourceText;
		const from = sourceScript;
		const to = targetScript;
		if (status !== 'ready') {
			targetText = '';
			return;
		}
		void (async () => {
			try {
				targetText = await transliterate(text, from, to);
				lossless = await roundTripLossless(text, from, to);
				convertError = '';
			} catch (err) {
				convertError = err instanceof Error ? err.message : String(err);
				targetText = '';
			}
		})();
	});

	function insertAccent(mark: PaletteMark) {
		const el = sourceEl;
		const start = el?.selectionStart ?? sourceText.length;
		const end = el?.selectionEnd ?? start;
		const next = insertAtCursor(sourceText, mark.char, start, end);
		sourceText = next.value;
		lastInserted = mark.id;
		queueMicrotask(() => {
			if (!sourceEl) return;
			sourceEl.focus();
			sourceEl.setSelectionRange(next.caret, next.caret);
		});
	}

	async function copyOutput() {
		if (!targetText) return;
		await navigator.clipboard.writeText(targetText);
	}
</script>

<div class="lipi">
	<EngineBanner {status} />

	<div class="palette" role="toolbar" aria-label="Insert marks at the caret">
		{#each PALETTE_GROUPS as group (group.id)}
			<div class="palette-group">
				<div class="palette-copy">
					<span class="palette-label">{group.label}</span>
					<span class="palette-hint">{group.hint}</span>
				</div>
				<div class="palette-keys">
					{#each VEDIC_PALETTE.filter((m) => m.group === group.id) as acc (acc.id)}
						<button
							type="button"
							class="key"
							class:last={lastInserted === acc.id}
							title={acc.title}
							aria-label={acc.title}
							onclick={() => insertAccent(acc)}
						>
							<span class="font-sanskrit glyph">{acc.label}</span>
							<span class="key-name">{acc.name}</span>
						</button>
					{/each}
				</div>
			</div>
		{/each}
	</div>

	<div class="panes">
		<section class="pane">
			<div class="pane-head">
				<label for="lipi-source">Input</label>
				<Select options={scriptOptions} bind:value={sourceScript} />
			</div>
			<textarea
				id="lipi-source"
				bind:this={sourceEl}
				bind:value={sourceText}
				class="font-sanskrit editor"
				spellcheck="false"
			></textarea>
		</section>
		<section class="pane pane-out">
			<div class="pane-head">
				<label for="lipi-target">Output</label>
				<div class="pane-actions">
					{#if status === 'ready' && !convertError}
						<Badge variant={lossless ? 'success' : 'warning'}>
							{lossless ? 'Lossless round-trip' : 'Round-trip mismatch'}
						</Badge>
					{/if}
					<Select options={scriptOptions} bind:value={targetScript} />
					<Button size="sm" variant="secondary" onclick={copyOutput} disabled={!targetText}>
						Copy
					</Button>
				</div>
			</div>
			<div id="lipi-target" class="font-sanskrit output">{targetText}</div>
			{#if convertError}
				<p class="error">{convertError}</p>
			{/if}
		</section>
	</div>
</div>

<style>
	.lipi {
		display: flex;
		flex-direction: column;
		height: 100%;
		min-height: 0;
	}

	.palette {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		padding: var(--space-3) var(--space-4);
		border-bottom: 1px solid var(--border-base);
		background: var(--bg-surface);
	}

	.palette-group {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-3);
	}

	.palette-copy {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		min-width: 10rem;
		max-width: 22rem;
	}

	.palette-label {
		font-size: var(--text-xs);
		font-weight: var(--font-semibold);
		color: var(--text-secondary);
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.palette-hint {
		font-size: var(--text-xs);
		color: var(--text-tertiary);
		line-height: 1.35;
	}

	.palette-keys {
		display: flex;
		flex-wrap: wrap;
		align-items: stretch;
		gap: var(--space-2);
	}

	.key {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.1rem;
		min-width: 5.5rem;
		padding: 0.35rem 0.55rem;
		border: 1px solid var(--border-base);
		border-radius: var(--control-radius);
		background: var(--bg-canvas);
		color: var(--text-primary);
		cursor: pointer;
	}

	.key:hover,
	.key:focus-visible {
		border-color: var(--action-primary);
		background: var(--bg-surface-elevated);
	}

	.key.last {
		border-color: var(--action-primary);
		box-shadow: 0 0 0 1px var(--action-primary);
	}

	.glyph {
		font-size: 1.15rem;
		line-height: 1.3;
	}

	.key-name {
		font-size: 0.65rem;
		letter-spacing: 0.02em;
		color: var(--text-secondary);
		text-align: center;
		line-height: 1.2;
	}

	.panes {
		display: grid;
		grid-template-columns: 1fr 1fr;
		min-height: 0;
		flex: 1;
	}

	.pane {
		display: flex;
		flex-direction: column;
		min-height: 0;
		padding: var(--space-3);
		border-right: 1px solid var(--border-base);
	}

	.pane-out {
		border-right: none;
		background: var(--bg-surface);
	}

	.pane-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-3);
		margin-bottom: var(--space-2);
	}

	.pane-head label {
		font-size: var(--text-xs);
		font-weight: var(--font-semibold);
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--text-secondary);
	}

	.pane-actions {
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}

	.editor,
	.output {
		flex: 1;
		min-height: 12rem;
		width: 100%;
		padding: var(--space-3);
		font-size: 1.15rem;
		line-height: 1.7;
		border: 1px solid var(--border-base);
		border-radius: var(--control-radius);
		background: var(--bg-canvas);
		color: var(--text-primary);
		resize: none;
	}

	.output {
		overflow: auto;
		white-space: pre-wrap;
	}

	.error {
		margin: var(--space-2) 0 0;
		color: var(--color-red-700);
		font-size: var(--text-sm);
	}

	@media (max-width: 48rem) {
		.palette-copy {
			max-width: none;
			min-width: 0;
			width: 100%;
		}

		.panes {
			grid-template-columns: 1fr;
		}

		.pane {
			border-right: none;
			border-bottom: 1px solid var(--border-base);
		}
	}
</style>
