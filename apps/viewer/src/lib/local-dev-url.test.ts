import { describe, it, expect } from 'vitest';
import { normalizeSourceUrl } from './local-dev-url';

describe('normalizeSourceUrl', () => {
	it('adds http when scheme is omitted', () => {
		expect(normalizeSourceUrl('localhost:8080/registry.json')).toBe(
			'http://localhost:8080/registry.json'
		);
	});

	it('preserves explicit http URLs', () => {
		expect(normalizeSourceUrl('http://localhost:8080/registry.json')).toBe(
			'http://localhost:8080/registry.json'
		);
	});
});
