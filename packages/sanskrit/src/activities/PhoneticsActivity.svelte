<script lang="ts">
	import { Badge, SegmentedControl } from '@project-vyasa/vyasa-ui';
	import EngineBanner from '../components/EngineBanner.svelte';
	import { chromeLabels } from '../chrome-script.svelte.ts';
	import {
		PRATISAKHYA_GROUPS,
		PRATYAHARA_CHIPS,
		SVARITA_EXAMPLES,
		VARNA_EXAMPLES,
		type SvaritaExample
	} from '../phonetic-sets';
	import { engineRulesFor, type EngineRule } from '../engine-coverage';
	import { VARNA_SEED } from '../seed-texts';
	import {
		dvitvaWindow,
		explainTaittiriyaDvitva,
		flattenSounds,
		formatAyogavaha,
		formatSvara,
		isNaminVowel,
		normalizeGlyph,
		rprGroupIdsForSound,
		type SceneSound
	} from '../varna-explain';
	import {
		analyzeSyllables,
		checkPratyaharaContains,
		checkTaittiriyaDvitva,
		classifyTaittiriyaSvarita,
		ensureEngine,
		inspectTaittiriyaVarna,
		inspectVarna,
		pratyaharaSounds,
		shivaSutras,
		type AksharaAnalysis,
		type EngineStatus,
		type ShivaSutra,
		type TaittiriyaVarna,
		type VarnaAnalysis
	} from '../wasm';

	let status = $state<EngineStatus>('loading');
	let tradition = $state('panini');
	let inputText = $state(VARNA_SEED);
	let syllables = $state.raw<AksharaAnalysis[]>([]);
	let selectedKey = $state('');
	let sutras = $state.raw<ShivaSutra[]>([]);
	let matches = $state.raw<VarnaAnalysis[]>([]);
	let membership = $state.raw<string[]>([]);
	let focusedPratyahara = $state('ac');
	let inspected = $state<VarnaAnalysis | null>(null);
	let taittiriyaInspected = $state<TaittiriyaVarna | null>(null);
	let engineDoubles = $state<boolean | null>(null);
	let activeSvarita = $state<SvaritaExample | null>(null);
	let classifiedId = $state<string | undefined>();
	let error = $state('');

	const traditionOptions = $derived([
		{ value: 'panini', label: chromeLabels.sa('Pāṇini') },
		{ value: 'pratisakhya', label: chromeLabels.sa('Ṛgveda-Prātiśākhya') },
		{ value: 'taittiriya', label: chromeLabels.sa('Taittirīya') }
	]);
	const sounds = $derived(flattenSounds(syllables));
	const selected = $derived(sounds.find((s) => s.key === selectedKey));
	const selectedPratyahara = $derived(
		PRATYAHARA_CHIPS.find((p) => p.id === focusedPratyahara) ?? PRATYAHARA_CHIPS[0]
	);
	const matchingSutras = $derived.by(() => {
		const n = selected ? normalizeGlyph(selected.glyph_iast) : '';
		if (!n) return [];
		return sutras.filter((s) => s.sounds_iast.some((g) => normalizeGlyph(g) === n));
	});
	const rprGroups = $derived(selected ? rprGroupIdsForSound(selected.glyph_iast) : []);
	const dvitva = $derived(dvitvaWindow(sounds, selected));
	const dvitvaWhy = $derived(
		dvitva
			? explainTaittiriyaDvitva(dvitva.prev, dvitva.curr, dvitva.next)
			: explainTaittiriyaDvitva('', '', '')
	);
	const showIastSub = $derived(chromeLabels.script !== 'iast');
	const isVowel = $derived(
		(inspected ?? taittiriyaInspected)?.varna_type.toLowerCase() === 'vowel'
	);
	const coverage = $derived(engineRulesFor(tradition as EngineRule['tradition']));

	function coverageVariant(status: EngineRule['status']): 'success' | 'neutral' | 'warning' {
		if (status === 'live') return 'success';
		if (status === 'label') return 'neutral';
		return 'warning';
	}

	function coverageLabel(status: EngineRule['status']): string {
		if (status === 'live') return 'Engine';
		if (status === 'label') return 'Label only';
		return 'Not in engine';
	}

	$effect(() => {
		void ensureEngine().then(async (next) => {
			status = next;
			if (next !== 'ready') return;
			try {
				sutras = await shivaSutras();
				error = '';
			} catch (err) {
				error = err instanceof Error ? err.message : String(err);
			}
		});
	});

	$effect(() => {
		const text = inputText;
		if (status !== 'ready') {
			syllables = [];
			return;
		}
		if (!text.trim()) {
			syllables = [];
			selectedKey = '';
			return;
		}
		let cancelled = false;
		void analyzeSyllables(text)
			.then((next) => {
				if (cancelled) return;
				syllables = next;
				const nextSounds = flattenSounds(next);
				if (!nextSounds.some((s) => s.key === selectedKey)) {
					selectedKey = nextSounds[0]?.key ?? '';
				}
				error = '';
			})
			.catch((err: unknown) => {
				if (cancelled) return;
				syllables = [];
				error = err instanceof Error ? err.message : String(err);
			});
		return () => {
			cancelled = true;
		};
	});

	$effect(() => {
		const symbol = selected?.glyph_iast;
		if (status !== 'ready' || !symbol) {
			inspected = null;
			taittiriyaInspected = null;
			return;
		}
		let cancelled = false;
		const run =
			tradition === 'taittiriya' ? inspectTaittiriyaVarna(symbol) : inspectVarna(symbol);
		void run
			.then((next) => {
				if (cancelled) return;
				if (tradition === 'taittiriya') {
					taittiriyaInspected = next as TaittiriyaVarna;
					inspected = null;
				} else {
					inspected = next as VarnaAnalysis;
					taittiriyaInspected = null;
				}
				error = '';
			})
			.catch((err: unknown) => {
				if (cancelled) return;
				error = err instanceof Error ? err.message : String(err);
			});
		return () => {
			cancelled = true;
		};
	});

	$effect(() => {
		const symbol = selected?.glyph_iast;
		if (status !== 'ready' || tradition !== 'panini' || !symbol) {
			membership = [];
			return;
		}
		let cancelled = false;
		void Promise.all(
			PRATYAHARA_CHIPS.map(async (p) => ({
				id: p.id,
				hit: await checkPratyaharaContains(p.id, symbol)
			}))
		)
			.then((rows) => {
				if (cancelled) return;
				membership = rows.filter((r) => r.hit).map((r) => r.id);
				if (membership.length && !membership.includes(focusedPratyahara)) {
					focusedPratyahara = membership[0];
				}
			})
			.catch((err: unknown) => {
				if (cancelled) return;
				membership = [];
				error = err instanceof Error ? err.message : String(err);
			});
		return () => {
			cancelled = true;
		};
	});

	$effect(() => {
		const name = focusedPratyahara;
		if (status !== 'ready' || tradition !== 'panini' || !name) {
			matches = [];
			return;
		}
		let cancelled = false;
		void pratyaharaSounds(name)
			.then((next) => {
				if (!cancelled) matches = next;
			})
			.catch(() => {
				if (!cancelled) matches = [];
			});
		return () => {
			cancelled = true;
		};
	});

	$effect(() => {
		const win = dvitva;
		if (status !== 'ready' || tradition !== 'taittiriya' || !win) {
			engineDoubles = null;
			return;
		}
		let cancelled = false;
		void checkTaittiriyaDvitva(win.prev, win.curr, win.next)
			.then((next) => {
				if (!cancelled) engineDoubles = next;
			})
			.catch(() => {
				if (!cancelled) engineDoubles = null;
			});
		return () => {
			cancelled = true;
		};
	});

	function selectSound(sound: SceneSound) {
		selectedKey = sound.key;
	}

	function onGlyphFromList(iast: string) {
		const hit = sounds.find((s) => normalizeGlyph(s.glyph_iast) === normalizeGlyph(iast));
		if (hit) selectedKey = hit.key;
	}

	function loadExample(text: string) {
		inputText = text;
	}

	async function pickSvarita(ex: SvaritaExample) {
		activeSvarita = ex;
		inputText = ex.afterDeva;
		if (status !== 'ready') return;
		try {
			classifiedId = await classifyTaittiriyaSvarita(ex.context);
			error = '';
		} catch (err) {
			classifiedId = undefined;
			error = err instanceof Error ? err.message : String(err);
		}
	}

	function openPratyahara(id: string) {
		focusedPratyahara = id;
	}
</script>

<div class="phonetics">
	<EngineBanner {status} />

	<div class="toolbar">
		<SegmentedControl
			bind:value={tradition}
			options={traditionOptions}
			aria-label="Phonetic tradition"
		/>
	</div>
	<div class="coverage-panel">
		<p class="group-hint">
			What this WASM build does for the selected tradition. Engine evaluates; Label only classifies;
			Not in engine is not run.
		</p>
		<ul class="coverage">
			{#each coverage as r (r.id)}
				<li>
					<Badge variant={coverageVariant(r.status)}>{coverageLabel(r.status)}</Badge>
					<code>{r.cite}</code>
					<span>{r.title}</span>
				</li>
			{/each}
		</ul>
	</div>

	<div class="input">
		<label for="varna-input">Text</label>
		<textarea
			id="varna-input"
			class="font-sanskrit editor"
			bind:value={inputText}
			spellcheck="false"
		></textarea>
		<p class="hint">
			Paste a short string. Each block below is one akṣara. Click a sound — the tradition switch
			re-describes the same text.
		</p>
		<div class="examples">
			{#each VARNA_EXAMPLES as ex (ex.id)}
				<button
					type="button"
					class={['chip', { active: inputText === ex.text }]}
					title={ex.hint}
					onclick={() => loadExample(ex.text)}
				>
					<span class="chip-id font-sanskrit">{ex.label}</span>
					<span class="chip-gloss">{ex.hint}</span>
				</button>
			{/each}
		</div>
	</div>

	{#if error}
		<p class="error">{error}</p>
	{/if}

	<div class="score" aria-label="Akṣaras">
		{#if syllables.length}
			{#each syllables as ak, i (`${i}-${ak.surface}-${ak.total_matra}`)}
				<div class={['unit', { active: selected?.akIndex === i }]}>
					<span class="formula">
						{ak.total_matra} mātrā
						{#if ak.svara}
							· {formatSvara(ak.svara)}
						{/if}
						{#if ak.ayogavaha}
							· {formatAyogavaha(ak.ayogavaha)}
						{/if}
					</span>
					<div class="parts">
						{#each sounds.filter((s) => s.akIndex === i) as sound (sound.key)}
							<button
								type="button"
								class={['glyph', 'font-sanskrit', { active: selectedKey === sound.key }]}
								onclick={() => selectSound(sound)}
							>
								{chromeLabels.glyph(sound.glyph_iast)}
								{#if showIastSub}
									<span>{sound.glyph_iast}</span>
								{/if}
							</button>
						{/each}
					</div>
				</div>
			{/each}
		{:else}
			<p class="empty">
				{#if status === 'ready'}
					Paste a short string or pick an example.
				{:else}
					Load the Sanskrit engine to split this string into akṣaras.
				{/if}
			</p>
		{/if}
	</div>

	<div class="body">
		<section>
			<h2>Inspector</h2>
			{#if inspected || taittiriyaInspected}
				{@const row = taittiriyaInspected ?? inspected}
				{#if row}
					<div class="inspector">
						<h3 class="font-sanskrit">
							{chromeLabels.glyph(row.glyph_iast)}
							{#if showIastSub}
								/ {row.glyph_iast}
							{/if}
						</h3>
						<p>{row.varna_type} · {chromeLabels.sa('sthāna')}: {row.sthana.join(', ')}</p>
						{#if taittiriyaInspected}
							<p class="font-sanskrit">
								{chromeLabels.sa('karaṇa')}: {taittiriyaInspected.karana}
							</p>
						{/if}
						<p>{row.abhyantara_prayatna}</p>
						<div class="flags">
							<Badge variant={row.is_ghosha ? 'success' : 'neutral'}>
								{row.is_ghosha ? chromeLabels.sa('Ghoṣa') : chromeLabels.sa('Aghoṣa')}
							</Badge>
							{#if !isVowel}
								<Badge variant={row.is_alpaprana ? 'neutral' : 'warning'}>
									{row.is_alpaprana
										? chromeLabels.sa('Alpaprāṇa')
										: chromeLabels.sa('Mahāprāṇa')}
								</Badge>
							{/if}
							<Badge variant="primary">{chromeLabels.sa('Mātrā')} {row.matra}</Badge>
						</div>
					</div>
				{/if}
			{:else}
				<p class="empty">Click a sound in the strip.</p>
			{/if}
		</section>

		{#if tradition === 'panini'}
			<section>
				<h2 class="font-sanskrit">{chromeLabels.sa('Pratyāhāra')}</h2>
				<p class="group-hint">
					Which abbreviations contain this sound (Pāṇini 1.1.71). Red *it*-markers in the sūtras
					bound a class and are not members.
				</p>
				<div class="examples">
					{#each PRATYAHARA_CHIPS as p (p.id)}
						<button
							type="button"
							class={[
								'chip',
								{ active: membership.includes(p.id), focus: focusedPratyahara === p.id }
							]}
							title={p.rule}
							onclick={() => openPratyahara(p.id)}
						>
							<span class="chip-id font-sanskrit">{chromeLabels.sa(p.id)}</span>
							<span class="chip-gloss">{p.gloss}</span>
						</button>
					{/each}
				</div>
				{#if selected && membership.length}
					<p class="group-hint font-sanskrit">
						{chromeLabels.glyph(selected.glyph_iast)} is in {membership
							.map((id) => chromeLabels.sa(id))
							.join(', ')}.
					</p>
				{:else if selected}
					<p class="group-hint">Not in the five live abbreviations — try another sound.</p>
				{/if}
				{#if selectedPratyahara}
					<p class="group-hint">{selectedPratyahara.rule}</p>
					<div class="glyphs">
						{#each matches as v, i (`${i}-${v.glyph_deva}-${v.glyph_iast}`)}
							<button
								type="button"
								class="glyph font-sanskrit"
								onclick={() => onGlyphFromList(v.glyph_iast)}
							>
								{chromeLabels.glyph(v.glyph_iast)}
								{#if showIastSub}
									<span>{v.glyph_iast}</span>
								{/if}
							</button>
						{/each}
					</div>
				{/if}
				<h3 class="font-sanskrit">{chromeLabels.sa('Śiva Sūtras')}</h3>
				<ol class="sutras font-sanskrit">
					{#each sutras as s (s.index)}
						<li class={{ hit: matchingSutras.some((m) => m.index === s.index) }}>
							<span class="idx">{s.index}.</span>
							{s.sounds_iast.map((g) => chromeLabels.glyph(g)).join(' ')}
							<span class="it">{chromeLabels.glyph(s.it_marker_iast)}</span>
						</li>
					{/each}
				</ol>
			</section>
		{:else if tradition === 'pratisakhya'}
			<section>
				<h2 class="font-sanskrit"
					>{chromeLabels.sa('Śaunaka')} · {chromeLabels.sa('Śaiśirīya')}</h2
				>
				<p class="group-hint">
					Ṛgveda-Prātiśākhya inventory for this sound. Nāmin vowels (not a/ā) trigger nati in
					recitation — the engine does not apply that rewrite here.
				</p>
				{#if selected}
					<div class="flags">
						{#each PRATISAKHYA_GROUPS.filter((g) => rprGroups.includes(g.id)) as group (group.id)}
							<Badge variant="primary">{group.label}</Badge>
						{/each}
						{#if selected.part === 'vowel'}
							<Badge variant={isNaminVowel(selected.glyph_iast) ? 'success' : 'neutral'}>
								{isNaminVowel(selected.glyph_iast) ? 'Nāmin' : 'Not nāmin (a/ā)'}
							</Badge>
						{/if}
					</div>
					{#each PRATISAKHYA_GROUPS.filter((g) => rprGroups.includes(g.id)) as group (group.id)}
						<p class="group-hint">{group.hint}</p>
					{/each}
				{:else}
					<p class="empty">Click a sound to see which RPr groups it sits in.</p>
				{/if}
			</section>
		{:else}
			<section>
				<h2 class="font-sanskrit">{chromeLabels.sa('Svarita')} · Ch. 20</h2>
				<p class="group-hint">
					Pick a worked juncture. The engine classifies it; the result is loaded into the strip.
				</p>
				<div class="examples">
					{#each SVARITA_EXAMPLES as ex (ex.id)}
						<button
							type="button"
							class={['chip', { active: activeSvarita?.id === ex.id }]}
							title={ex.hint}
							onclick={() => pickSvarita(ex)}
						>
							<span class="chip-id font-sanskrit">{ex.after}</span>
							<span class="chip-gloss">{ex.before}</span>
						</button>
					{/each}
				</div>
				{#if activeSvarita}
					<p class="group-hint">
						{activeSvarita.hint}
						{#if classifiedId}
							· classifies as {chromeLabels.sa(activeSvarita.classIast)}.
						{/if}
					</p>
				{/if}
				<h3 class="font-sanskrit">{chromeLabels.sa('Dvitva')} · Ch. 14</h3>
				{#if dvitva}
					<p class="group-hint font-sanskrit">
						Window {dvitva.prev || '∅'} · {dvitva.curr} · {dvitva.next || '∅'}
						{#if engineDoubles !== null}
							· engine {engineDoubles ? 'doubles' : 'does not double'}.
						{/if}
					</p>
					<p class="group-hint">
						{#if dvitvaWhy.rule}
							<strong>{dvitvaWhy.rule}</strong>
						{/if}
						{dvitvaWhy.why}
					</p>
				{:else}
					<p class="group-hint">
						Click a consonant in the strip (try arkaḥ) to see whether Taittirīya recitation
						doubles it.
					</p>
				{/if}
			</section>
		{/if}
	</div>
</div>

<style>
	.phonetics {
		display: flex;
		flex-direction: column;
		height: 100%;
		min-height: 0;
	}

	.toolbar {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-2);
		padding: var(--space-3) var(--space-4);
		border-bottom: 1px solid var(--border-base);
	}

	.coverage-panel {
		padding: var(--space-2) var(--space-4) 0;
		border-bottom: 1px solid var(--border-base);
	}

	.coverage-panel .coverage {
		margin-bottom: var(--space-3);
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
		min-height: 3.5rem;
		max-height: 8rem;
		padding: var(--space-3);
		font-size: 1.15rem;
		line-height: 1.7;
		border: 1px solid var(--border-base);
		border-radius: var(--control-radius);
		background: var(--bg-canvas);
		color: var(--text-primary);
		resize: vertical;
	}

	.hint,
	.group-hint,
	.empty {
		font-size: var(--text-xs);
		color: var(--text-tertiary);
		margin: var(--space-2) 0 0;
		line-height: 1.4;
	}

	.coverage {
		list-style: none;
		margin: 0 0 var(--space-4);
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	.coverage li {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0.35rem 0.55rem;
		font-size: var(--text-xs);
		line-height: 1.4;
		color: var(--text-secondary);
	}

	.coverage code {
		font-size: 0.7rem;
		color: var(--text-primary);
	}

	.examples {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		margin-top: var(--space-3);
	}

	.chip,
	.glyph {
		border: 1px solid var(--border-base);
		background: var(--bg-canvas);
		color: var(--text-primary);
		border-radius: var(--control-radius);
		padding: 0.25rem 0.6rem;
		cursor: pointer;
	}

	.chip {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.05rem;
		max-width: 16rem;
		text-align: left;
	}

	.chip-id {
		font-size: var(--text-sm);
	}

	.chip-gloss {
		font-size: 0.65rem;
		color: var(--text-secondary);
	}

	.chip.active,
	.chip.focus,
	.glyph.active,
	.glyph:hover {
		border-color: var(--action-primary);
		background: var(--bg-surface-elevated);
	}

	.score {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		gap: var(--space-2) var(--space-4);
		padding: var(--space-3) var(--space-4);
		border-bottom: 1px solid var(--border-base);
		overflow-x: auto;
	}

	.unit {
		display: flex;
		flex: 0 0 auto;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.15rem;
		width: max-content;
		padding: 0.45rem 0.7rem 0.6rem;
		border: 1px solid transparent;
		border-radius: var(--control-radius);
	}

	.unit.active {
		background: color-mix(in srgb, var(--action-primary) 12%, var(--bg-canvas));
		border-color: var(--action-primary);
	}

	.formula {
		font-size: 0.65rem;
		font-weight: var(--font-semibold);
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--text-tertiary);
		white-space: nowrap;
	}

	.parts {
		display: flex;
		flex-wrap: nowrap;
		gap: var(--space-1, 0.25rem);
	}

	.body {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-6);
		padding: var(--space-4);
		overflow: auto;
		flex: 1;
		min-height: 0;
	}

	h2 {
		font-size: var(--text-sm);
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--text-secondary);
		margin: 0 0 var(--space-3);
	}

	h3 {
		font-size: var(--text-xs);
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--text-secondary);
		margin: var(--space-4) 0 var(--space-2);
	}

	.glyphs {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}

	.glyph {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-width: 2.5rem;
		font-size: 1.25rem;
	}

	.glyph span {
		font-size: var(--text-xs);
		color: var(--text-secondary);
	}

	.inspector {
		margin-top: var(--space-2);
		padding: var(--space-3);
		border: 1px solid var(--border-base);
		border-radius: var(--control-radius);
		background: var(--bg-surface);
	}

	.inspector h3 {
		margin: 0 0 var(--space-2);
	}

	.flags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		margin-top: var(--space-2);
	}

	.sutras {
		margin: 0;
		padding: 0;
		list-style: none;
		line-height: 1.8;
		font-size: 1.05rem;
	}

	.sutras li.hit {
		background: color-mix(in srgb, var(--action-primary) 10%, transparent);
		border-radius: var(--control-radius);
	}

	.idx {
		color: var(--text-tertiary);
		font-size: var(--text-xs);
		margin-right: var(--space-2);
	}

	.it {
		color: var(--color-red-700);
		font-weight: var(--font-semibold);
	}

	.error {
		padding: 0 var(--space-4);
		color: var(--color-red-700);
	}

	@media (max-width: 48rem) {
		.body {
			grid-template-columns: 1fr;
		}
	}
</style>
