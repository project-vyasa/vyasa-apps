import { describe, it, expect } from 'vitest';
import { chromeStreamsFromVocabulary, getVocabularyLabel, titlesForChromeStream } from './vocabulary';
import type { VocabularyEntry } from '$lib/types';

const vocab: VocabularyEntry[] = [
	{ category: 'entities', key: 'sanjaya', stream_name: 'mula', value: 'सञ्जय' },
	{ category: 'entities', key: 'sanjaya', stream_name: 'iast', value: 'sañjaya' },
	{ category: 'entities', key: 'sanjaya', stream_name: 'vocabulary', value: 'sanjaya' },
	{ category: 'structure', key: 'chapter', stream_name: 'iast', value: 'adhyāya' },
	{ category: 'structure', key: 'chapter', stream_name: 'mula', value: 'अध्याय' }
];

describe('vocabulary helpers', () => {
	it('lists chrome streams without the vocabulary registry bucket', () => {
		expect(chromeStreamsFromVocabulary(vocab, 'mula')).toEqual(['iast', 'mula']);
	});

	it('resolves labels for the selected chrome stream', () => {
		expect(getVocabularyLabel(vocab, 'entities', 'sanjaya', 'iast', 'mula')).toBe('sañjaya');
		expect(getVocabularyLabel(vocab, 'entities', 'sanjaya', 'mula', 'mula')).toBe('सञ्जय');
	});

	it('falls back to primary stream when chrome stream has no key', () => {
		expect(getVocabularyLabel(vocab, 'structure', 'chapter', 'missing', 'mula')).toBe('अध्याय');
	});

	it('picks titles for the chrome stream', () => {
		const byStream = {
			mula: { '1': 'अर्जुनविषादयोगः' },
			iast: { '1': 'Arjuna-viṣāda-yogaḥ' }
		};
		expect(titlesForChromeStream(byStream, undefined, 'iast', 'mula')['1']).toBe(
			'Arjuna-viṣāda-yogaḥ'
		);
		expect(titlesForChromeStream(byStream, undefined, 'mula', 'mula')['1']).toBe(
			'अर्जुनविषादयोगः'
		);
	});
});
