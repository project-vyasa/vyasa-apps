import { describe, expect, it } from 'vitest';
import {
	isTypingTarget,
	padasForStep,
	rawLine,
	segmentsFromSteps,
	streamsForPattern,
	tokenizePadas
} from './interlinear';
import { GOLDEN_PADA_PATHA } from './sanskrit-wasm-stub';

describe('streamsForPattern', () => {
	it('uses one chant stream for Krama and three for Jaṭā/Ghana', () => {
		expect(streamsForPattern('krama')).toEqual(['sandhied']);
		expect(streamsForPattern('jata')).toEqual(['pada', 'raw', 'sandhied']);
		expect(streamsForPattern('ghana')).toEqual(['pada', 'raw', 'sandhied']);
	});
});

describe('tokenizePadas', () => {
	it('splits the golden pada-pāṭha on daṇḍas', () => {
		expect(tokenizePadas(GOLDEN_PADA_PATHA)).toEqual([
			'अ॒ग्निम्',
			'ई॒ळे॒',
			'पु॒रःऽहि॑तम्',
			'य॒ज्ञस्य॑',
			'दे॒वम्',
			'ऋ॒त्विज॑म्',
			'होता॑रम्',
			'र॒त्न॒ऽधात॑मम्'
		]);
	});
});

describe('padasForStep', () => {
	it('joins the covered tokens in order', () => {
		const tokens = tokenizePadas(GOLDEN_PADA_PATHA);
		expect(padasForStep(tokens, 1, 2)).toBe('अ॒ग्निम् ई॒ळे॒');
		expect(padasForStep(tokens, 1, 2, 3)).toBe('अ॒ग्निम् ई॒ळे॒ पु॒रःऽहि॑तम्');
	});
});

describe('rawLine', () => {
	it('braids forward and reverse for Jaṭā', () => {
		expect(
			rawLine({
				step_number: 1,
				formula: '1-2-2-1-1-2',
				first_index: 1,
				forward_text: 'अ॒ग्निमी॑ळे',
				reverse_text: 'ई॒ळे॒ऽग्निम्'
			})
		).toBe('अ॒ग्निमी॑ळे · ई॒ळे॒ऽग्निम् · अ॒ग्निमी॑ळे');
	});
});

describe('segmentsFromSteps', () => {
	it('maps a Krama pair onto pada, raw, and sandhied', () => {
		const tokens = tokenizePadas(GOLDEN_PADA_PATHA);
		const [seg] = segmentsFromSteps(
			[
				{
					step_number: 1,
					formula: '1-2',
					first_index: 1,
					second_index: 2,
					raw_pada: 'अ॒ग्निम् ई॒ळे॒',
					sandhied: 'अ॒ग्निमी॑ळे',
					is_parigraha: false
				}
			],
			tokens
		);
		expect(seg.pada).toBe('अ॒ग्निम् ई॒ळे॒');
		expect(seg.raw).toBe('अ॒ग्निम् ई॒ळे॒');
		expect(seg.sandhied).toBe('अ॒ग्निमी॑ळे');
	});
});

describe('isTypingTarget', () => {
	it('is false for null', () => {
		expect(isTypingTarget(null)).toBe(false);
	});
});
