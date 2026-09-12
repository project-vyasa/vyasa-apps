<script lang="ts">
	import { Badge, Button, DataGrid, Select, SegmentedControl } from '@project-vyasa/vyasa-ui';
	import EngineBanner from '../components/EngineBanner.svelte';
	import { chromeLabels } from '../chrome-script.svelte.ts';
	import {
		ensureEngine,
		generateJata,
		generateKrama,
		GOLDEN_PADA_PATHA,
		supportedScripts,
		type EngineStatus,
		type JataStep,
		type KramaStep,
		type ScriptInfo
	} from '../wasm';
	import { PATHA_PATTERNS, type PathaPattern } from '../patha-patterns';

	type PathaStep = KramaStep | JataStep;

	let status = $state<EngineStatus>('loading');
	let scripts = $state<ScriptInfo[]>([]);
	let script = $state('devanagari');
	let patternId = $state('krama');
	let inputPada = $state(GOLDEN_PADA_PATHA);
	let view = $state('table');
	let steps = $state<PathaStep[]>([]);
	let current = $state(0);
	let error = $state('');

	const pattern = $derived(
		PATHA_PATTERNS.find((p) => p.id === patternId) ??
			PATHA_PATTERNS.find((p) => p.id === 'krama')!
	);
	const availableCount = $derived(PATHA_PATTERNS.filter((p) => p.available).length);
	const isJata = $derived(pattern.id === 'jata');
	const scriptOptions = $derived(scripts.map((s) => ({ label: s.name, value: s.id })));
	const viewOptions = [
		{ value: 'table', label: 'Table' },
		{ value: 'trainer', label: 'Trainer' }
	];
	const kramaColumns = [
		{ key: 'step_number' as const, label: '#' },
		{ key: 'formula' as const, label: 'Formula' },
		{ key: 'raw_pada' as const, label: 'Raw' },
		{ key: 'sandhied' as const, label: 'Sandhied' }
	];
	const jataColumns = [
		{ key: 'step_number' as const, label: '#' },
		{ key: 'formula' as const, label: 'Formula' },
		{ key: 'forward_text' as const, label: 'Forward' },
		{ key: 'reverse_text' as const, label: 'Reverse' },
		{ key: 'sandhied' as const, label: 'Sandhied' }
	];
	const step = $derived(steps[current]);
	const jataStep = $derived(step && 'forward_text' in step ? step : null);
	const kramaStep = $derived(step && 'raw_pada' in step ? step : null);
	const pathaTitle = $derived(`${chromeLabels.sa(pattern.name)}-${chromeLabels.sa('pāṭha')}`);
	const familyLabel = $derived(
		pattern.family === 'prakriti' ? chromeLabels.sa('Prakṛti') : chromeLabels.sa('Vikṛti')
	);

	$effect(() => {
		void ensureEngine().then(async (next) => {
			status = next;
			scripts = await supportedScripts();
		});
	});

	$effect(() => {
		const pada = inputPada;
		const to = script;
		const id = patternId;
		if (status !== 'ready') {
			steps = [];
			return;
		}
		let cancelled = false;
		void (async () => {
			try {
				const next = id === 'jata' ? await generateJata(pada, to) : await generateKrama(pada, to);
				if (cancelled) return;
				steps = next;
				current = 0;
				error = '';
			} catch (err) {
				if (cancelled) return;
				error = err instanceof Error ? err.message : String(err);
				steps = [];
			}
		})();
		return () => {
			cancelled = true;
		};
	});

	function selectPattern(p: PathaPattern) {
		if (!p.available) return;
		patternId = p.id;
	}

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
			<span class="mode-name">{pathaTitle}</span>
			<span class="formula font-sanskrit">{chromeLabels.formula(pattern.formula)}</span>
			<span class="family">{familyLabel} · {availableCount} of 11 patterns</span>
		</div>
		<label class="field">
			<span>Script</span>
			<Select options={scriptOptions} bind:value={script} />
		</label>
		<SegmentedControl bind:value={view} options={viewOptions} aria-label="{chromeLabels.sa('Pāṭha')} view" />
	</div>

	<div class="patterns" role="list" aria-label="Recitation patterns">
		{#each PATHA_PATTERNS as p (p.id)}
			<button
				type="button"
				class="pattern"
				class:current={p.id === patternId}
				disabled={!p.available}
				title={p.help}
				onclick={() => selectPattern(p)}
			>
				<span class="pattern-name font-sanskrit">{chromeLabels.sa(p.name)}</span>
				<span class="pattern-formula">{chromeLabels.formula(p.formula)}</span>
			</button>
		{/each}
	</div>

	<div class="body">
		<section class="input-col">
			<label for="pada-input">{chromeLabels.sa('Pada')}-{chromeLabels.sa('pāṭha')}</label>
			<textarea id="pada-input" class="font-sanskrit editor" bind:value={inputPada} spellcheck="false"
			></textarea>
			<p class="hint">
				Left pane is {chromeLabels.sa('Pada')}-{chromeLabels.sa('pāṭha')} (input). Rows with
				{chromeLabels.sa('iti')} between two copies of a pada are {chromeLabels.sa('parigraha')}
				({chromeLabels.sa('pragṛhya')} or the last word), not a typing error. {chromeLabels.sa('Mālā')}
				through {chromeLabels.sa('Ghana')} are listed but not generated yet.
			</p>
		</section>

		<section class="main font-sanskrit">
			{#if error}
				<p class="error">{error}</p>
			{:else if view === 'trainer'}
				{#if step}
					<div class="card">
						<div class="meta">
							Step {step.step_number} of {steps.length} · {chromeLabels.formula(step.formula)}
						</div>
						<div class="font-sanskrit chant">{step.sandhied}</div>
						<div class="flags">
							{#if jataStep}
								<span class="raw font-sanskrit">
									Forward: {jataStep.forward_text}
									{#if jataStep.reverse_text}
										· Reverse: {jataStep.reverse_text}
									{/if}
								</span>
							{:else if kramaStep}
								<span class="raw font-sanskrit">Raw: {kramaStep.raw_pada}</span>
							{/if}
							{#if step.is_parigraha}
								<Badge variant="primary"
									>{chromeLabels.sa('Parigraha')} ({chromeLabels.sa('iti')})</Badge
								>
							{/if}
							{#if kramaStep?.pragrhya_detected}
								<Badge variant="success">{chromeLabels.sa('Pragṛhya')}</Badge>
							{/if}
						</div>
						<div class="nav">
							<Button variant="secondary" onclick={prevStep} disabled={current === 0}>Previous</Button>
							<Button variant="primary" onclick={nextStep}>Next (Space)</Button>
						</div>
					</div>
				{:else}
					<p class="empty">Enter padas to generate {pathaTitle}.</p>
				{/if}
			{:else if steps.length}
				{#if isJata}
					<DataGrid data={steps as JataStep[]} columns={jataColumns} keyField="step_number" />
				{:else}
					<DataGrid data={steps as KramaStep[]} columns={kramaColumns} keyField="step_number" />
				{/if}
			{:else}
				<p class="empty">Enter padas to generate {pathaTitle}.</p>
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
