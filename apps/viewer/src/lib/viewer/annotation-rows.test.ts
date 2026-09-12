import { describe, it, expect } from 'vitest';
import { parseAnnotationAttributes, parseAnnotationRows } from './annotation-rows';

describe('parseAnnotationAttributes', () => {
	it('parses JSON string attributes', () => {
		expect(parseAnnotationAttributes('{"value":"agni"}')).toEqual({ value: 'agni' });
	});

	it('passes through object attributes', () => {
		expect(parseAnnotationAttributes({ speaker: 'krishna' })).toEqual({ speaker: 'krishna' });
	});

	it('returns empty object for invalid JSON', () => {
		expect(parseAnnotationAttributes('not-json')).toEqual({});
	});
});

describe('parseAnnotationRows', () => {
	it('maps SQL rows to annotation entries', () => {
		const rows = [
			[42, 'Devata', '{"value":"agni"}'],
			[43, 'Action', '{"speaker":"krishna"}']
		];
		const entries = parseAnnotationRows(rows, (id) => `urn:test:${id}`);
		expect(entries).toEqual([
			{ urn: 'urn:test:42', label: 'Devata', attributes: { value: 'agni' } },
			{ urn: 'urn:test:43', label: 'Action', attributes: { speaker: 'krishna' } }
		]);
	});
});
