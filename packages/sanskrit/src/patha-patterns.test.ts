import { describe, expect, it } from 'vitest';
import { CURRENT_PATHA_PATTERN, PATHA_PATTERNS } from './patha-patterns';

describe('PATHA_PATTERNS', () => {
	it('lists 3 prakṛti and 8 vikṛti, with only Krama available', () => {
		expect(PATHA_PATTERNS).toHaveLength(11);
		expect(PATHA_PATTERNS.filter((p) => p.family === 'prakriti').map((p) => p.id)).toEqual([
			'samhita',
			'pada',
			'krama'
		]);
		expect(PATHA_PATTERNS.filter((p) => p.available).map((p) => p.id)).toEqual(['krama']);
		expect(CURRENT_PATHA_PATTERN.formula).toContain('p-iti-p');
		expect(CURRENT_PATHA_PATTERN.help).toContain('parigraha');
	});
});
