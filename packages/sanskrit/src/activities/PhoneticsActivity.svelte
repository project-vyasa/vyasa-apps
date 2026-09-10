<script lang="ts">
	import { Badge, SegmentedControl } from '@project-vyasa/vyasa-ui';
	import EngineBanner from '../components/EngineBanner.svelte';
	import { PRATISAKHYA_GROUPS, PRATYAHARA_CHIPS } from '../phonetic-sets';
	import {
		ensureEngine,
		inspectVarna,
		pratyaharaSounds,
		shivaSutras,
		type EngineStatus,
		type ShivaSutra,
		type VarnaAnalysis
	} from '../wasm';

	const traditionOptions = [
		{ value: 'panini', label: 'Pāṇini' },
		{ value: 'pratisakhya', label: 'Ṛgveda-Prātiśākhya' }
	];

	let status = $state<EngineStatus>('loading');
	let tradition = $state('panini');
	let sutras = $state<ShivaSutra[]>([]);
	let selected = $state('ac');
	let matches = $state<VarnaAnalysis[]>([]);
	let inspected = $state<VarnaAnalysis | null>(null);
	let error = $state('');

	const selectedPratyahara = $derived(PRATYAHARA_CHIPS.find((p) => p.id === selected));
	const isVowel = $derived(inspected?.varna_type.toLowerCase() === 'vowel');
	const matchVowels = $derived(matches.filter((m) => m.varna_type === 'vowel'));
	const matchConsonants = $derived(matches.filter((m) => m.varna_type === 'consonant'));

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
		const name = selected;
		if (status !== 'ready' || tradition !== 'panini') return;
		let cancelled = false;
		void pratyaharaSounds(name)
			.then((next) => {
				if (!cancelled) {
					matches = next;
					error = '';
				}
			})
			.catch((err: unknown) => {
				if (cancelled) return;
				matches = [];
				error = err instanceof Error ? err.message : String(err);
			});
		return () => {
			cancelled = true;
		};
	});

	function selectPratyahara(id: string) {
		selected = id;
		inspected = null;
	}

	async function onGlyph(symbol: string) {
		if (status !== 'ready') return;
		try {
			inspected = await inspectVarna(symbol);
			error = '';
		} catch (err) {
			error = err instanceof Error ? err.message : String(err);
		}
	}
</script>

<div class="phonetics">
	<EngineBanner {status} />

	<div class="toolbar">
		<SegmentedControl bind:value={tradition} options={traditionOptions} aria-label="Phonetic tradition" />
		{#if tradition === 'panini'}
			<span class="label">Pratyāhāra</span>
			{#each PRATYAHARA_CHIPS as p (p.id)}
				<button
					type="button"
					class="chip"
					class:active={selected === p.id}
					title={p.rule}
					aria-label={`${p.id}: ${p.gloss}`}
					onclick={() => selectPratyahara(p.id)}
				>
					<span class="chip-id">{p.id}</span>
					<span class="chip-gloss">{p.gloss}</span>
				</button>
			{/each}
		{:else}
			<span class="label">Śaunaka · Śaiśirīya śākhā</span>
		{/if}
	</div>

	{#if error && tradition === 'panini'}
		<p class="error">{error}</p>
	{/if}

	<div class="body">
		{#if tradition === 'pratisakhya'}
			<section class="vedic">
				{#each PRATISAKHYA_GROUPS as group (group.id)}
					<div class="vedic-group">
						<h2>{group.label}</h2>
						<p class="group-hint">{group.hint}</p>
						<div class="glyphs">
							{#each group.glyphs as v (`${group.id}-${v.glyph_deva}-${v.glyph_iast}`)}
								<button
									type="button"
									class="glyph font-sanskrit"
									onclick={() => onGlyph(v.glyph_deva)}
								>
									{v.glyph_deva}
									<span>{v.glyph_iast}</span>
								</button>
							{/each}
						</div>
					</div>
				{/each}
			</section>
			<section>
				<h2>Inspector</h2>
				{#if inspected}
					<div class="inspector">
						<h3 class="font-sanskrit">{inspected.glyph_deva} / {inspected.glyph_iast}</h3>
						<p>{inspected.varna_type} · {inspected.sthana.join(', ')}</p>
						<p>{inspected.abhyantara_prayatna}</p>
						<div class="flags">
							<Badge variant={inspected.is_ghosha ? 'success' : 'neutral'}>
								{inspected.is_ghosha ? 'Ghoṣa' : 'Aghoṣa'}
							</Badge>
							{#if !isVowel}
								<Badge variant={inspected.is_alpaprana ? 'neutral' : 'warning'}>
									{inspected.is_alpaprana ? 'Alpaprāṇa' : 'Mahāprāṇa'}
								</Badge>
							{/if}
							<Badge variant="primary">Mātrā {inspected.matra}</Badge>
						</div>
					</div>
				{:else}
					<p class="empty">Click a sound. Inspector uses the engine when it is loaded.</p>
				{/if}
			</section>
		{:else}
		<section>
			<h2>Śiva Sūtras</h2>
			<p class="group-hint">
				Red is an <em>it</em>-marker (anubandha). It bounds a pratyāhāra and is not a member.
				<em> a-i-u-ṇ</em> is sūtra 1: the fourth item is ण्, not a vowel.
			</p>
			<ol class="sutras font-sanskrit">
				{#each sutras as s (s.index)}
					<li>
						<span class="idx">{s.index}.</span>
						{s.sounds_deva.join(' ')}
						<span class="it">{s.it_marker_deva}</span>
					</li>
				{/each}
			</ol>
		</section>
		<section>
			<h2>
				Sounds in <span class="font-sanskrit">{selected}</span>
				{#if selectedPratyahara}
					<span class="gloss"> · {selectedPratyahara.gloss}</span>
				{/if}
				<span class="count">{matches.length}</span>
			</h2>
			{#if selectedPratyahara}
				<p class="group-hint">{selectedPratyahara.rule}</p>
			{/if}
			{#key selected}
				{#if matchVowels.length && matchConsonants.length}
					<h3>Vowels ({matchVowels.length})</h3>
					<div class="glyphs">
						{#each matchVowels as v, i (`v-${i}-${v.glyph_deva}`)}
							<button
								type="button"
								class="glyph font-sanskrit"
								onclick={() => onGlyph(v.glyph_iast)}
							>
								{v.glyph_deva}
								<span>{v.glyph_iast}</span>
							</button>
						{/each}
					</div>
					<h3>Consonants ({matchConsonants.length})</h3>
					<div class="glyphs">
						{#each matchConsonants as v, i (`c-${i}-${v.glyph_deva}`)}
							<button
								type="button"
								class="glyph font-sanskrit"
								onclick={() => onGlyph(v.glyph_iast)}
							>
								{v.glyph_deva}
								<span>{v.glyph_iast}</span>
							</button>
						{/each}
					</div>
				{:else}
					<div class="glyphs">
						{#each matches as v, i (`${i}-${v.glyph_deva}-${v.glyph_iast}`)}
							<button
								type="button"
								class="glyph font-sanskrit"
								onclick={() => onGlyph(v.glyph_iast)}
							>
								{v.glyph_deva}
								<span>{v.glyph_iast}</span>
							</button>
						{/each}
					</div>
				{/if}
			{/key}
			{#if inspected}
				<div class="inspector">
					<h3 class="font-sanskrit">{inspected.glyph_deva} / {inspected.glyph_iast}</h3>
					<p>{inspected.varna_type} · {inspected.sthana.join(', ')}</p>
					<p>{inspected.abhyantara_prayatna}</p>
					<div class="flags">
						<Badge variant={inspected.is_ghosha ? 'success' : 'neutral'}>
							{inspected.is_ghosha ? 'Ghoṣa' : 'Aghoṣa'}
						</Badge>
						{#if !isVowel}
							<Badge variant={inspected.is_alpaprana ? 'neutral' : 'warning'}>
								{inspected.is_alpaprana ? 'Alpaprāṇa' : 'Mahāprāṇa'}
							</Badge>
						{/if}
						<Badge variant="primary">Mātrā {inspected.matra}</Badge>
					</div>
				</div>
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

	.label {
		font-size: var(--text-xs);
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--text-secondary);
		margin-right: var(--space-2);
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
		align-items: center;
		gap: 0.05rem;
		min-width: 3.25rem;
	}

	.chip-id {
		font-family: inherit;
		font-size: var(--text-sm);
	}

	.chip-gloss,
	.gloss {
		font-size: 0.65rem;
		font-weight: var(--font-medium);
		letter-spacing: 0.02em;
		text-transform: none;
		color: var(--text-secondary);
	}

	.chip.active,
	.glyph:hover {
		border-color: var(--action-primary);
		background: var(--bg-surface-elevated);
	}

	.body {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-6);
		padding: var(--space-4);
		overflow: auto;
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
		margin: var(--space-3) 0 var(--space-2);
	}

	.count {
		margin-left: var(--space-2);
		font-size: var(--text-xs);
		font-weight: var(--font-medium);
		letter-spacing: 0.04em;
		text-transform: none;
		color: var(--text-tertiary);
	}

	.vedic {
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
	}

	.group-hint,
	.empty {
		font-size: var(--text-xs);
		color: var(--text-tertiary);
		margin: 0 0 var(--space-3);
		line-height: 1.4;
	}

	.sutras {
		margin: 0;
		padding: 0;
		list-style: none;
		line-height: 1.8;
		font-size: 1.15rem;
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
		margin-top: var(--space-4);
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
