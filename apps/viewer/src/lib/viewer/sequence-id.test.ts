import { describe, expect, it } from 'vitest';
import { toSequenceId } from './sequence-id';

describe('toSequenceId', () => {
	it('passes bigint through', () => {
		expect(toSequenceId(131072n)).toBe(131072n);
	});

	it('converts JS numbers that wasm-bindgen cannot accept as i64', () => {
		expect(toSequenceId(131072)).toBe(131072n);
	});

	it('converts numeric strings', () => {
		expect(toSequenceId('131072')).toBe(131072n);
	});
});
