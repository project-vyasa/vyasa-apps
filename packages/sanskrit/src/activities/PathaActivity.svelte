<script lang="ts">
	import { Badge, Button, DataGrid, Select, SegmentedControl } from '@project-vyasa/vyasa-ui';
	import EngineBanner from '../components/EngineBanner.svelte';
	import {
		ensureEngine,
		generateKrama,
		GOLDEN_PADA_PATHA,
		supportedScripts,
		type EngineStatus,
		type KramaStep,
		type ScriptInfo
	} from '../wasm';
	import { CURRENT_PATHA_PATTERN, PATHA_PATTERNS } from '../patha-patterns';

	let status = $state<EngineStatus>('loading');
	let scripts = $state<ScriptInfo[]>([]);
	let script = $state('devanagari');
	let inputPada = $state(GOLDEN_PADA_PATHA);
	let view = $state('table');
	let steps = $state<KramaStep[]>([]);
	let current = $state(0);
	let error = $state('');

	const scriptOptions = $derived(scripts.map((s) => ({ label: s.name, value: s.id })));
	const viewOptions = [
		{ value: 'table', label: 'Table' },
		{ value: 'trainer', label: 'Trainer' }
	];
	const columns = [
		{ key: 'step_number' as const, label: '#' },
		{ key: 'formula' as const, label: 'Formula' },
		{ key: 'raw_pada' as const, label: 'Raw' },
		{ key: 'sandhied' as const, label: 'Sandhied' }
	];

	const step = $derived(steps[current]);

	$effect(() => {
		void ensureEngine().then(async (next) => {
			status = next;
			scripts = await supportedScripts();
		});
	});

	$effect(() => {
		const pada = inputPada;
		const to = script;
		if (status !== 'ready') {
			steps = [];
			return;
		}
		void (async () => {
			try {
				steps = await generateKrama(pada, to);
				if (current >= steps.length) current = 0;
				error = '';
			} catch (err) {
				error = err instanceof Error ? err.message : String(err);
				steps = [];
			}
		})();
	});

	function nextStep() {
		if (!steps.length) return;
		current = current + 1 >= steps.length ? 0 : current + 1;
	}

	function prevStep() {
		if (current > 0) current -= 1;
	}

	function onKey(e: KeyboardEvent) {
		if (view !== 'trainer') return;
		if (e.key === ' ' || e.key === 'ArrowRight') {
			e.preventDefault();
			nextStep();
		} else if (e.key === 'ArrowLeft') {
			e.preventDefault();
			prevStep();
		}
	}
</script>

<svelte:window onkeydown={onKey} />

<div class="patha">
	<EngineBanner {status} />

	<div class="toolbar">
		<div class="current">
			<span class="mode-name">{CURRENT_PATHA_PATTERN.name}-pāṭha</span>
			<span class="formula font-sanskrit">{CURRENT_PATHA_PATTERN.formula}</span>
			<span class="family">Prakṛti · 3 of 11 patterns</span>
		</div>
		<label class="field">
			<span>Script</span>
			<Select options={scriptOptions} bind:value={script} />
		</label>
		<SegmentedControl bind:value={view} options={viewOptions} aria-label="Pāṭha view" />
	</div>

	<div class="patterns" role="list" aria-label="Recitation patterns">
		{#each PATHA_PATTERNS as p (p.id)}
			<button
				type="button"
				class="pattern"
				class:current={p.available}
				disabled={!p.available}
				title={p.help}
			>
				<span class="pattern-name">{p.name}</span>
				<span class="pattern-formula">{p.formula}</span>
			</button>
		{/each}
	</div>

	<div class="body">
		<section class="input-col">
			<label for="pada-input">Pada-pāṭha</label>
			<textarea id="pada-input" class="font-sanskrit editor" bind:value={inputPada} spellcheck="false"
			></textarea>
			<p class="hint">
				Left pane is Pada-pāṭha (input). The table is Krama. Rows like 22-iti-22 with इति between two
				copies of a pada are parigraha (pragṛhya or the last word), not a typing error. Jaṭā through
				Ghana are listed but not generated yet.
			</p>
		</section>

		<section class="main font-sanskrit">
			{#if error}
				<p class="error">{error}</p>
			{:else if view === 'trainer'}
				{#if step}
					<div class="card">
						<div class="meta">
							Step {step.step_number} of {steps.length} · {step.formula}
						</div>
						<div class="font-sanskrit chant">{step.sandhied}</div>
						<div class="flags">
							<span class="raw font-sanskrit">Raw: {step.raw_pada}</span>
							{#if step.is_parigraha}
								<Badge variant="primary">Parigraha (इति)</Badge>
							{/if}
							{#if step.pragrhya_detected}
								<Badge variant="success">Pragṛhya</Badge>
							{/if}
						</div>
						<div class="nav">
							<Button variant="secondary" onclick={prevStep} disabled={current === 0}>Previous</Button>
							<Button variant="primary" onclick={nextStep}>Next (Space)</Button>
						</div>
					</div>
				{:else}
					<p class="empty">Enter padas to generate Krama-pāṭha.</p>
				{/if}
			{:else if steps.length}
				<DataGrid data={steps} {columns} keyField="step_number" />
			{:else}
				<p class="empty">Enter padas to generate Krama-pāṭha.</p>
			{/if}
		</section>
	</div>
</div>

<style>
	.patha {
		display: flex;
		flex-direction: column;
		height: 100%;
		min-height: 0;
	}

	.toolbar {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-3);
		padding: var(--space-3) var(--space-4);
		border-bottom: 1px solid var(--border-base);
	}

	.current {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: var(--space-2) var(--space-3);
		min-width: 12rem;
		flex: 1 1 14rem;
	}

	.mode-name {
		font-size: var(--text-sm);
		font-weight: var(--font-semibold);
	}

	.formula {
		font-size: var(--text-sm);
		color: var(--action-primary);
	}

	.family {
		font-size: var(--text-xs);
		color: var(--text-tertiary);
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.patterns {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		padding: var(--space-2) var(--space-4);
		border-bottom: 1px solid var(--border-base);
		background: var(--bg-surface);
	}

	.pattern {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.1rem;
		padding: 0.3rem 0.55rem;
		border: 1px solid var(--border-base);
		border-radius: var(--control-radius);
		background: var(--bg-canvas);
		color: var(--text-primary);
		text-align: left;
	}

	.pattern:disabled {
		opacity: 0.55;
		cursor: not-allowed;
	}

	.pattern.current {
		opacity: 1;
		border-color: var(--action-primary);
		box-shadow: 0 0 0 1px var(--action-primary);
	}

	.pattern-name {
		font-size: var(--text-xs);
		font-weight: var(--font-semibold);
	}

	.pattern-formula {
		font-size: 0.65rem;
		color: var(--text-secondary);
		line-height: 1.2;
	}

	.field {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-size: var(--text-sm);
		color: var(--text-secondary);
	}

	.body {
		display: grid;
		grid-template-columns: minmax(12rem, 18rem) 1fr;
		min-height: 0;
		flex: 1;
	}

	.input-col {
		display: flex;
		flex-direction: column;
		padding: var(--space-3);
		border-right: 1px solid var(--border-base);
		min-height: 0;
	}

	.input-col label {
		font-size: var(--text-xs);
		font-weight: var(--font-semibold);
		text-transform: uppercase;
		color: var(--text-secondary);
		margin-bottom: var(--space-2);
	}

	.editor {
		flex: 1;
		min-height: 10rem;
		padding: var(--space-2);
		font-size: 1.05rem;
		line-height: 1.65;
		border: 1px solid var(--border-base);
		border-radius: var(--control-radius);
		background: var(--bg-canvas);
		color: var(--text-primary);
		resize: none;
	}

	.hint {
		font-size: var(--text-xs);
		color: var(--text-tertiary);
		margin: var(--space-2) 0 0;
	}

	.main {
		padding: var(--space-4);
		overflow: auto;
		background: var(--bg-surface);
	}

	.card {
		max-width: 40rem;
		margin: 2rem auto;
		padding: var(--space-8);
		border: 1px solid var(--border-base);
		border-radius: var(--control-radius);
		background: var(--bg-canvas);
		text-align: center;
	}

	.meta {
		font-size: var(--text-xs);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--action-primary);
		font-weight: var(--font-bold);
	}

	.chant {
		font-size: 2rem;
		line-height: 1.6;
		padding: var(--space-6) 0;
	}

	.flags,
	.nav {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: var(--space-3);
		margin-top: var(--space-4);
	}

	.raw {
		font-size: var(--text-sm);
		color: var(--text-secondary);
	}

	.empty,
	.error {
		text-align: center;
		margin-top: 3rem;
		color: var(--text-secondary);
	}

	.error {
		color: var(--color-red-700);
	}

	@media (max-width: 48rem) {
		.body {
			grid-template-columns: 1fr;
		}

		.input-col {
			border-right: none;
			border-bottom: 1px solid var(--border-base);
			max-height: 12rem;
		}
	}
</style>
