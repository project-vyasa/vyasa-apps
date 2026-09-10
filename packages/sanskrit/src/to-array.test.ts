import { describe, expect, it } from 'vitest';
import { toArray } from './wasm';

describe('toArray', () => {
	it('keeps real arrays', () => {
		expect(toArray([1, 2])).toEqual([1, 2]);
	});

	it('reads numeric keys from serde-style objects', () => {
		expect(toArray({ 0: 'h', 1: 'y', 2: 'v' })).toEqual(['h', 'y', 'v']);
	});
});
