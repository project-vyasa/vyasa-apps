import { describe, expect, it } from 'vitest';
import { PRATISAKHYA_GROUPS, PRATYAHARA_CHIPS, SHAISHIRIYA_VOWELS } from './phonetic-sets';

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
