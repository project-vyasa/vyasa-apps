import { describe, expect, it } from 'vitest';
import { DEFAULT_CHROME_SCRIPT, renderFormula, renderSa } from './chrome-script';

describe('renderSa', () => {
	it('returns IAST unchanged for the default chrome script', () => {
		expect(renderSa('Jaṭā', DEFAULT_CHROME_SCRIPT, () => 'wrong')).toBe('Jaṭā');
		expect(renderSa('Pāṭha', 'iast')).toBe('Pāṭha');
	});

	it('transliterates from IAST when a function is provided', () => {
		const fn = (text: string, from: string, to: string) => `${text}:${from}:${to}`;
		expect(renderSa('Jaṭā', 'telugu', fn)).toBe('jaṭā:iast:telugu');
	});

	it('lowercases title-case IAST so Latin initials do not leak into Indic', () => {
		const seen: string[] = [];
		const fn = (text: string) => {
			seen.push(text);
			return `ok:${text}`;
		};
		expect(renderSa('Varṇa', 'devanagari', fn)).toBe('ok:varṇa');
		expect(renderSa('Pāṇini', 'devanagari', fn)).toBe('ok:pāṇini');
		expect(seen).toEqual(['varṇa', 'pāṇini']);
	});

	it('falls back to IAST when transliteration throws or is missing', () => {
		expect(renderSa('Krama', 'devanagari')).toBe('Krama');
		expect(
			renderSa('Krama', 'devanagari', () => {
				throw new Error('nope');
			})
		).toBe('Krama');
	});
});

describe('renderFormula', () => {
	it('replaces iti tokens and leaves the rest', () => {
		expect(renderFormula('1-2 | … | p-iti-p', 'इति')).toBe('1-2 | … | p-इति-p');
		expect(renderFormula('1-2, 2-1, 1-2', 'इति')).toBe('1-2, 2-1, 1-2');
	});
});
