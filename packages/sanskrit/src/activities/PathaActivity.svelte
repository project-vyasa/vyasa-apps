<script lang="ts">
	import { Badge, Button, Modal, Select } from '@project-vyasa/vyasa-ui';
	import EngineBanner from '../components/EngineBanner.svelte';
	import InterlinearText from '../components/InterlinearText.svelte';
	import { chromeLabels } from '../chrome-script.svelte.ts';
	import {
		GOLDEN_PADA_PATHA,
		ensureEngine,
		generateGhana,
		generateJata,
		generateKrama,
		ghanaSupported,
		supportedScripts,
		type EngineStatus,
		type ScriptInfo
	} from '../wasm';
	import {
		isTypingTarget,
		segmentsFromSteps,
		streamsForPattern,
		tokenizePadas,
		type PathaStepLike
	} from '../interlinear';
	import {
		LIVE_PATHA_IDS,
		isLivePathaId,
		livePathaPatterns,
		patternsByFamily,
		type PathaPattern
	} from '../patha-patterns';

	let status = $state<EngineStatus>('loading');
	let scripts = $state<ScriptInfo[]>([]);
	let script = $state('devanagari');
	let patternId = $state('krama');
	let inputPada = $state(GOLDEN_PADA_PATHA);
	let steps = $state<PathaStepLike[]>([]);
	let current = $state(0);
	let error = $state('');
	let helpOpen = $state(false);
	let ghanaReady = $state(false);

	const pattern = $derived(
		livePathaPatterns().find((p) => p.id === patternId) ?? livePathaPatterns()[0]
	);
	const scriptOptions = $derived(scripts.map((s) => ({ label: s.name, value: s.id })));
	const patternOptions = $derived(
		livePathaPatterns().map((p) => ({
			label: `${chromeLabels.sa(p.name)}-${chromeLabels.sa('pāṭha')}`,
			value: p.id
		}))
	);
	const streams = $derived(streamsForPattern(patternId));
	const tokens = $derived(tokenizePadas(inputPada));
	const segments = $derived(segmentsFromSteps(steps, tokens));
	const pathaTitle = $derived(`${chromeLabels.sa(pattern.name)}-${chromeLabels.sa('pāṭha')}`);
	const prakriti = $derived(patternsByFamily('prakriti'));
	const vikriti = $derived(patternsByFamily('vikriti'));

	$effect(() => {
		void ensureEngine().then(async (next) => {
			status = next;
			scripts = await supportedScripts();
			ghanaReady = ghanaSupported();
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
				let next: PathaStepLike[] = [];
				if (id === 'ghana') next = await generateGhana(pada, to);
				else if (id === 'jata') next = await generateJata(pada, to);
				else next = await generateKrama(pada, to);
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

	function nextStep() {
		if (!segments.length) return;
		if (current < segments.length - 1) current += 1;
	}

	function prevStep() {
		if (current > 0) current -= 1;
	}

	function onKey(e: KeyboardEvent) {
		if (helpOpen) return;
		if (isTypingTarget(e.target)) return;
		if (e.key === ' ' && !e.shiftKey) {
			e.preventDefault();
			nextStep();
		} else if ((e.key === ' ' && e.shiftKey) || e.key === 'ArrowLeft') {
			e.preventDefault();
			prevStep();
		} else if (e.key === 'ArrowRight') {
			e.preventDefault();
			nextStep();
		}
	}

	function liveBadge(p: PathaPattern): string {
		if (isLivePathaId(p.id)) {
			if (p.id === 'ghana' && !ghanaReady) return 'Menu · engine pending';
			return 'In the menu';
		}
		return 'Not generated yet';
	}
</script>

<svelte:window onkeydown={onKey} />

<div class="patha">
	<EngineBanner {status} />

	<div class="toolbar">
		<label class="field pattern-field">
			<span>{chromeLabels.sa('Pāṭha')}</span>
			<Select options={patternOptions} bind:value={patternId} />
		</label>
		<label class="field">
			<span>Script</span>
			<Select options={scriptOptions} bind:value={script} />
		</label>
		<Button size="sm" variant="secondary" onclick={() => (helpOpen = true)}>Patterns</Button>
		<span class="formula font-sanskrit">{chromeLabels.formula(pattern.formula)}</span>
	</div>

	<div class="input">
		<label for="pada-input">{chromeLabels.sa('Pada')}-{chromeLabels.sa('pāṭha')}</label>
		<textarea id="pada-input" class="font-sanskrit editor" bind:value={inputPada} spellcheck="false"
		></textarea>
		<p class="hint">
			Input is already-split padas (daṇḍas or bars). Continuous saṃhitā will not be split.
			Space advances the highlighted segment; Shift-Space goes back.
		</p>
	</div>

	<section class="output font-sanskrit">
		{#if error}
			<p class="error">{error}</p>
		{:else if segments.length}
			<div class="playhead">
				<span>{pathaTitle}</span>
				<span>
					{current + 1} / {segments.length}
					{#if segments[current]}
						· {chromeLabels.formula(segments[current].formula)}
					{/if}
				</span>
				{#if segments[current]?.isParigraha}
					<Badge variant="primary">{chromeLabels.sa('Parigraha')} ({chromeLabels.sa('iti')})</Badge>
				{/if}
				{#if segments[current]?.pragrhya}
					<Badge variant="success">{chromeLabels.sa('Pragṛhya')}</Badge>
				{/if}
			</div>
			<InterlinearText {segments} {streams} active={current} onSelect={(i) => (current = i)} />
		{:else}
			<p class="empty">Enter padas to generate {pathaTitle}.</p>
		{/if}
	</section>
</div>

<Modal bind:open={helpOpen} title="Recitation patterns" size="lg">
	{#snippet body()}
		<p class="overlay-lead">
			Three prakṛti and eight vikṛti pāṭhas. The menu offers {LIVE_PATHA_IDS.length}: Krama, Jaṭā,
			and Ghana last.
		</p>
		<section class="overlay-family">
			<h3>{chromeLabels.sa('Prakṛti')}</h3>
			<ul>
				{#each prakriti as p (p.id)}
					<li>
						<div class="overlay-head">
							<strong class="font-sanskrit">{chromeLabels.sa(p.name)}</strong>
							<code>{chromeLabels.formula(p.formula)}</code>
							<Badge variant={isLivePathaId(p.id) ? 'success' : 'neutral'}>{liveBadge(p)}</Badge>
						</div>
						<p>{p.help}</p>
					</li>
				{/each}
			</ul>
		</section>
		<section class="overlay-family">
			<h3>{chromeLabels.sa('Vikṛti')}</h3>
			<ul>
				{#each vikriti as p (p.id)}
					<li>
						<div class="overlay-head">
							<strong class="font-sanskrit">{chromeLabels.sa(p.name)}</strong>
							<code>{chromeLabels.formula(p.formula)}</code>
							<Badge variant={isLivePathaId(p.id) ? 'success' : 'neutral'}>{liveBadge(p)}</Badge>
						</div>
						<p>{p.help}</p>
					</li>
				{/each}
			</ul>
		</section>
	{/snippet}
</Modal>

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
		gap: var(--space-3);
		padding: var(--space-3) var(--space-4);
		border-bottom: 1px solid var(--border-base);
	}

	.pattern-field {
		flex: 0 0 auto;
		white-space: nowrap;
	}

	/* Size the trigger to the pattern name, not the leftover toolbar. */
	.pattern-field :global(.select-container) {
		width: 14rem;
		min-width: 14rem;
		max-width: 14rem;
		flex: 0 0 14rem;
	}

	.field {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-size: var(--text-sm);
		color: var(--text-secondary);
	}

	.formula {
		font-size: var(--text-sm);
		color: var(--action-primary);
	}

	.input {
		display: flex;
		flex-direction: column;
		padding: var(--space-3) var(--space-4);
		border-bottom: 1px solid var(--border-base);
	}

	.input label {
		font-size: var(--text-xs);
		font-weight: var(--font-semibold);
		text-transform: uppercase;
		color: var(--text-secondary);
		margin-bottom: var(--space-2);
	}

	.editor {
		width: 100%;
		min-height: 6.5rem;
		max-height: 12rem;
		padding: var(--space-3);
		font-size: 1.1rem;
		line-height: 1.7;
		border: 1px solid var(--border-base);
		border-radius: var(--control-radius);
		background: var(--bg-canvas);
		color: var(--text-primary);
		resize: vertical;
	}

	.hint {
		font-size: var(--text-xs);
		color: var(--text-tertiary);
		margin: var(--space-2) 0 0;
	}

	.output {
		flex: 1;
		min-height: 0;
		overflow: auto;
		padding: var(--space-4);
		background: var(--bg-surface);
	}

	.playhead {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-2) var(--space-3);
		margin-bottom: var(--space-3);
		font-size: var(--text-xs);
		letter-spacing: 0.04em;
		text-transform: uppercase;
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

	.overlay-lead {
		margin: 0 0 var(--space-4);
		color: var(--text-secondary);
		font-size: var(--text-sm);
	}

	.overlay-family {
		margin-bottom: var(--space-5);
	}

	.overlay-family h3 {
		margin: 0 0 var(--space-2);
		font-size: var(--text-sm);
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--text-tertiary);
	}

	.overlay-family ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	.overlay-family li p {
		margin: 0.25rem 0 0;
		font-size: var(--text-sm);
		color: var(--text-secondary);
		line-height: 1.45;
	}

	.overlay-head {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: var(--space-2);
	}

	.overlay-head code {
		font-size: 0.75rem;
		color: var(--action-primary);
	}
</style>
