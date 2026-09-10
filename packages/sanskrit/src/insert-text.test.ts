import { describe, expect, it } from 'vitest';
import { insertAtCursor, PALETTE_GROUPS, VEDIC_PALETTE } from './insert-text';

describe('insertAtCursor', () => {
	it('inserts at the caret', () => {
		expect(insertAtCursor('अग्नि', '॒', 1, 1)).toEqual({ value: 'अ॒ग्नि', caret: 2 });
	});

	it('replaces a selection', () => {
		expect(insertAtCursor('hello', 'X', 1, 4)).toEqual({ value: 'hXo', caret: 2 });
	});
});

describe('VEDIC_PALETTE', () => {
	it('groups pitch accents separately from typing signs', () => {
		expect(PALETTE_GROUPS.map((g) => g.id)).toEqual(['pitch', 'signs']);
		expect(VEDIC_PALETTE.filter((m) => m.group === 'pitch').map((m) => m.id)).toEqual([
			'anudatta',
			'svarita',
			'dirgha'
		]);
		expect(new Set(VEDIC_PALETTE.map((m) => m.id)).size).toBe(VEDIC_PALETTE.length);
	});
});
