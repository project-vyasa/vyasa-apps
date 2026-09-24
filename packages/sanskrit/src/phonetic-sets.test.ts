import { describe, expect, it } from 'vitest';
import {
	PRATISAKHYA_GROUPS,
	PRATYAHARA_CHIPS,
	SHAISHIRIYA_VOWELS,
	SVARITA_EXAMPLES,
	TAITTIRIYA_GLYPHS,
	VARNA_EXAMPLES
} from './phonetic-sets';

describe('Śaiśirīya inventory', () => {
	it('places ṛ immediately after a, before i', () => {
		expect(SHAISHIRIYA_VOWELS.map((g) => g.glyph_iast)).toEqual([
			'a',
			'ṛ',
			'i',
			'u',
			'e',
			'o',
			'ai',
			'au'
		]);
		expect(PRATISAKHYA_GROUPS.map((g) => g.id)).toEqual([
			'shaishiriya',
			'samanakshara',
			'sandhyakshara',
			'vedic-consonants'
		]);
	});
});

describe('PRATYAHARA_CHIPS', () => {
	it('names the five studio abbreviations', () => {
		expect(PRATYAHARA_CHIPS.map((p) => p.id)).toEqual(['ac', 'hal', 'yaṇ', 'jhaś', 'al']);
		expect(PRATYAHARA_CHIPS[0].rule).toContain('it-marker');
	});
});

describe('Taittirīya UI catalogs', () => {
	it('lists worked svarita junctures instead of a context enum', () => {
		expect(SVARITA_EXAMPLES.map((e) => e.context)).toEqual([
			'SemivowelSandhi',
			'AbhinihitaElision',
			'CoalescentLongVowel',
			'InternalSemivowelStem'
		]);
		expect(TAITTIRIYA_GLYPHS.some((g) => g.glyph_iast === 'ka')).toBe(true);
	});
});

describe('VARNA_EXAMPLES', () => {
	it('starts from the same ṚV opening as Lipi', () => {
		expect(VARNA_EXAMPLES[0].text).toContain('अ॒ग्निमी॑ळे');
	});
});
