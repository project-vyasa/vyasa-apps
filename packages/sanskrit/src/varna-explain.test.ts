import { describe, expect, it } from 'vitest';
import type { AksharaAnalysis } from './sanskrit-wasm-stub';
import {
	dvitvaWindow,
	explainTaittiriyaDvitva,
	flattenSounds,
	isNaminVowel,
	normalizeGlyph,
	rprGroupIdsForSound
} from './varna-explain';

describe('normalizeGlyph', () => {
	it('collapses inherent-a and Devanagari to IAST stems', () => {
		expect(normalizeGlyph('ka')).toBe('k');
		expect(normalizeGlyph('k')).toBe('k');
		expect(normalizeGlyph('क')).toBe('k');
		expect(normalizeGlyph('ā')).toBe('ā');
	});
});

describe('explainTaittiriyaDvitva', () => {
	it('cites TPr 14.4 for k after r (arkaḥ)', () => {
		const hit = explainTaittiriyaDvitva('r', 'k', '');
		expect(hit.doubles).toBe(true);
		expect(hit.rule).toBe('TPr 14.4');
	});

	it('cites TPr 14.8 for ś after a vowel before a consonant (aśvaḥ)', () => {
		const hit = explainTaittiriyaDvitva('a', 'ś', 'v');
		expect(hit.doubles).toBe(true);
		expect(hit.rule).toBe('TPr 14.8');
	});

	it('cites TPr 14.1 for an unaspirated stop starting a cluster (agnim)', () => {
		const hit = explainTaittiriyaDvitva('a', 'g', 'n');
		expect(hit.doubles).toBe(true);
		expect(hit.rule).toBe('TPr 14.1');
	});

	it('does not double a lone initial stop', () => {
		const miss = explainTaittiriyaDvitva('', 'k', 'a');
		expect(miss.doubles).toBe(false);
		expect(miss.rule).toBeNull();
	});
});

describe('rprGroupIdsForSound', () => {
	it('places ṛ in Śaiśirīya and samānākṣara, and marks nāmin vowels', () => {
		expect(rprGroupIdsForSound('ṛ')).toEqual(expect.arrayContaining(['shaishiriya', 'samanakshara']));
		expect(isNaminVowel('ṛ')).toBe(true);
		expect(isNaminVowel('a')).toBe(false);
		expect(rprGroupIdsForSound('e')).toEqual(expect.arrayContaining(['shaishiriya', 'sandhyakshara']));
	});
});

describe('flattenSounds / dvitvaWindow', () => {
	it('reads prev-curr-next around a cluster consonant', () => {
		const syllables: AksharaAnalysis[] = [
			{
				surface: 'अ',
				consonants: [],
				vowel: {
					glyph_deva: 'अ',
					glyph_iast: 'a',
					varna_type: 'vowel',
					sthana: [],
					abhyantara_prayatna: '',
					is_ghosha: true,
					is_alpaprana: true,
					matra: 1
				},
				ayogavaha: null,
				svara: 'Anudatta',
				total_matra: 1
			},
			{
				surface: 'ग्नि',
				consonants: [
					{
						glyph_deva: 'ग',
						glyph_iast: 'g',
						varna_type: 'consonant',
						sthana: [],
						abhyantara_prayatna: '',
						is_ghosha: true,
						is_alpaprana: true,
						matra: 0.5
					},
					{
						glyph_deva: 'न',
						glyph_iast: 'n',
						varna_type: 'consonant',
						sthana: [],
						abhyantara_prayatna: '',
						is_ghosha: true,
						is_alpaprana: true,
						matra: 0.5
					}
				],
				vowel: {
					glyph_deva: 'इ',
					glyph_iast: 'i',
					varna_type: 'vowel',
					sthana: [],
					abhyantara_prayatna: '',
					is_ghosha: true,
					is_alpaprana: true,
					matra: 1
				},
				ayogavaha: null,
				svara: null,
				total_matra: 2
			}
		];
		const sounds = flattenSounds(syllables);
		expect(sounds.map((s) => s.glyph_iast)).toEqual(['a', 'g', 'n', 'i']);
		const g = sounds.find((s) => s.glyph_iast === 'g');
		expect(dvitvaWindow(sounds, g)).toEqual({ prev: 'a', curr: 'g', next: 'n' });
	});
});
