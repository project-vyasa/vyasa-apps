/** What this WASM build actually evaluates — not a critical edition of the texts. */

export type EngineRuleStatus = 'live' | 'label' | 'absent';

export type EngineRule = {
	id: string;
	tradition: 'panini' | 'pratisakhya' | 'taittiriya';
	/** Text citation researchers will look up (sūtra / chapter). */
	cite: string;
	title: string;
	status: EngineRuleStatus;
};

export const ENGINE_RULES: EngineRule[] = [
	{
		id: 'siv-sutras',
		tradition: 'panini',
		cite: 'Śiva-sūtras 1–14',
		title: 'Māheśvara list and it-markers',
		status: 'live'
	},
	{
		id: 'pratyahara',
		tradition: 'panini',
		cite: 'Aṣṭ. 1.1.71',
		title: 'Pratyāhāra membership (ādir antyena sahetā)',
		status: 'live'
	},
	{
		id: 'siksa-inspect',
		tradition: 'panini',
		cite: 'Śikṣā',
		title: 'Sthāna, prayatna, ghoṣa, prāṇa, mātrā for one sound',
		status: 'live'
	},
	{
		id: 'akshara',
		tradition: 'panini',
		cite: 'Akṣara',
		title: 'Syllable split (consonants / vowel / ayogavāha / svara)',
		status: 'live'
	},
	{
		id: 'panini-sandhi-trace',
		tradition: 'panini',
		cite: 'Aṣṭ. 6.1.77 ff.',
		title: 'Named sandhi sūtras as a rewrite trace',
		status: 'absent'
	},
	{
		id: 'rpr-1-1',
		tradition: 'pratisakhya',
		cite: 'RPr. 1.1–2',
		title: 'Samānākṣara and sandhyakṣara inventories',
		status: 'label'
	},
	{
		id: 'rpr-shaishiriya',
		tradition: 'pratisakhya',
		cite: 'Śaiśirīya',
		title: 'Vowel order a, ṛ, i, u, e, o, ai, au',
		status: 'label'
	},
	{
		id: 'rpr-1-65',
		tradition: 'pratisakhya',
		cite: 'RPr. 1.65',
		title: 'Nāmin (vowels other than a/ā) as a label',
		status: 'label'
	},
	{
		id: 'rpr-nati',
		tradition: 'pratisakhya',
		cite: 'Nati',
		title: 'Automatic retroflexion s → ṣ, n → ṇ',
		status: 'absent'
	},
	{
		id: 'tpr-2',
		tradition: 'taittiriya',
		cite: 'TPr. Ch. 2',
		title: 'Karaṇa and sthāna for one sound',
		status: 'live'
	},
	{
		id: 'tpr-14',
		tradition: 'taittiriya',
		cite: 'TPr. 14.1, 14.4, 14.8',
		title: 'Dvitva boolean on a prev/curr/next window',
		status: 'live'
	},
	{
		id: 'tpr-20-enum',
		tradition: 'taittiriya',
		cite: 'TPr. Ch. 20',
		title: 'Svarita class from a named juncture, not from raw verse',
		status: 'live'
	},
	{
		id: 'tpr-20-from-text',
		tradition: 'taittiriya',
		cite: 'TPr. Ch. 20',
		title: 'Svarita classified from a recited string',
		status: 'absent'
	},
	{
		id: 'tpr-17',
		tradition: 'taittiriya',
		cite: 'TPr. 17',
		title: 'Raṅga prolongation',
		status: 'absent'
	}
];

export function engineRulesFor(
	tradition: EngineRule['tradition']
): EngineRule[] {
	return ENGINE_RULES.filter((r) => r.tradition === tradition);
}
