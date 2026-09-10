/** Pre-Pāṇinian inventories from Śaunaka's Ṛgveda-Prātiśākhya (Śaiśirīya). */

export type PhoneticGlyph = {
	glyph_deva: string;
	glyph_iast: string;
	note?: string;
};

export type PhoneticGroup = {
	id: string;
	label: string;
	hint: string;
	glyphs: PhoneticGlyph[];
};

/** Vocal-tract order: ṛ before i, unlike Pāṇini a-i-u-ṇ. */
export const SHAISHIRIYA_VOWELS: PhoneticGlyph[] = [
	{ glyph_deva: 'अ', glyph_iast: 'a' },
	{ glyph_deva: 'ऋ', glyph_iast: 'ṛ' },
	{ glyph_deva: 'इ', glyph_iast: 'i' },
	{ glyph_deva: 'उ', glyph_iast: 'u' },
	{ glyph_deva: 'ए', glyph_iast: 'e' },
	{ glyph_deva: 'ओ', glyph_iast: 'o' },
	{ glyph_deva: 'ऐ', glyph_iast: 'ai' },
	{ glyph_deva: 'औ', glyph_iast: 'au' }
];

export const PRATISAKHYA_GROUPS: PhoneticGroup[] = [
	{
		id: 'shaishiriya',
		label: 'Śaiśirīya vowels',
		hint: 'Ṛgveda-Prātiśākhya order: a, ṛ, i, u, e, o, ai, au (ṛ before i).',
		glyphs: SHAISHIRIYA_VOWELS
	},
	{
		id: 'samanakshara',
		label: 'Samānākṣara',
		hint: 'Simple vowels (RPr. 1.1): a ā ṛ ṝ i ī u ū, plus ḷ.',
		glyphs: [
			{ glyph_deva: 'अ', glyph_iast: 'a' },
			{ glyph_deva: 'आ', glyph_iast: 'ā' },
			{ glyph_deva: 'ऋ', glyph_iast: 'ṛ' },
			{ glyph_deva: 'ॠ', glyph_iast: 'ṝ' },
			{ glyph_deva: 'इ', glyph_iast: 'i' },
			{ glyph_deva: 'ई', glyph_iast: 'ī' },
			{ glyph_deva: 'उ', glyph_iast: 'u' },
			{ glyph_deva: 'ऊ', glyph_iast: 'ū' },
			{ glyph_deva: 'ऌ', glyph_iast: 'ḷ' }
		]
	},
	{
		id: 'sandhyakshara',
		label: 'Sandhyakṣara',
		hint: 'Diphthongs: e, ai, o, au.',
		glyphs: [
			{ glyph_deva: 'ए', glyph_iast: 'e' },
			{ glyph_deva: 'ऐ', glyph_iast: 'ai' },
			{ glyph_deva: 'ओ', glyph_iast: 'o' },
			{ glyph_deva: 'औ', glyph_iast: 'au' }
		]
	},
	{
		id: 'vedic-consonants',
		label: 'Vedic consonants',
		hint: 'Ṛgvedic ळ / ळ्ह (ḍa / ḍha in pada-pāṭha).',
		glyphs: [
			{ glyph_deva: 'ळ', glyph_iast: 'ḷa', note: 'LVedic' },
			{ glyph_deva: 'ळ्ह', glyph_iast: 'ḷha', note: 'LhVedic' }
		]
	}
];

export type PratyaharaChip = {
	id: string;
	gloss: string;
	rule: string;
};

/** Common abbreviations (Pāṇini 1.1.71: first sound through an it-marker). */
export const PRATYAHARA_CHIPS: PratyaharaChip[] = [
	{
		id: 'ac',
		gloss: 'vowels',
		rule: 'a → च्: a i u ṛ ḷ e o ai au. ण् in sūtra 1 is the it-marker, not a vowel.'
	},
	{
		id: 'hal',
		gloss: 'consonants',
		rule: 'h → ल्: all consonants in Śiva-sūtra order.'
	},
	{
		id: 'yaṇ',
		gloss: 'semivowels',
		rule: 'y → ण्: y v r l (antaḥstha).'
	},
	{
		id: 'jhaś',
		gloss: 'voiced stops',
		rule: 'jh → श्: jh bh gh ḍh dh j b g ḍ d.'
	},
	{
		id: 'al',
		gloss: 'all sounds',
		rule: 'a → ल्: vowels plus consonants (ac + hal).'
	}
];
