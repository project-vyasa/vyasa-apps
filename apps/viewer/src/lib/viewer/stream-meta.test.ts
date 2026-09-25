import { describe, expect, it } from 'vitest';
import {
	parseStreamsMeta,
	streamFilterTokens,
	streamMatchesFilters
} from './stream-meta';

const packed = `{
  "samhita": { "language": "sa", "script": "Deva", "kind": "source" },
  "padapatha": { "language": "sa", "script": "Deva", "kind": "source" },
  "sayana": { "language": "sa", "script": "Deva", "kind": "commentary" },
  "translation": { "language": "en", "script": "Latn", "kind": "translation" }
}`;

describe('parseStreamsMeta', () => {
	it('keys descriptors by packed stream id, never Toml primary', () => {
		const meta = parseStreamsMeta(packed);
		expect(Object.keys(meta).sort()).toEqual(['padapatha', 'samhita', 'sayana', 'translation']);
		expect(meta.samhita).toEqual({ language: 'sa', script: 'Deva', kind: 'source' });
		expect(meta.primary).toBeUndefined();
	});

	it('returns empty for missing, invalid, or incomplete JSON', () => {
		expect(parseStreamsMeta(undefined)).toEqual({});
		expect(parseStreamsMeta('{')).toEqual({});
		expect(parseStreamsMeta('[]')).toEqual({});
		expect(
			parseStreamsMeta('{"mula":{"language":"sa","script":"Deva"}}')
		).toEqual({});
	});

	it('accepts an already-parsed object', () => {
		expect(
			parseStreamsMeta({ mula: { language: 'sa', script: 'Deva', kind: 'source' } })
		).toEqual({ mula: { language: 'sa', script: 'Deva', kind: 'source' } });
	});

	it('exposes kind and language tokens for customizer filters', () => {
		const meta = parseStreamsMeta(packed);
		expect(streamFilterTokens(meta, 'kind')).toEqual(['commentary', 'source', 'translation']);
		expect(streamFilterTokens(meta, 'language')).toEqual(['en', 'sa']);
		expect(streamMatchesFilters('samhita', meta, 'source', '')).toBe(true);
		expect(streamMatchesFilters('translation', meta, 'source', '')).toBe(false);
		expect(streamMatchesFilters('translation', meta, '', 'en')).toBe(true);
		expect(streamMatchesFilters('unknown', meta, 'source', '')).toBe(false);
	});
});
