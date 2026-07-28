import { describe, it, expect } from 'vitest';
import { appendCacheBuster, vyviewCacheToken } from './cache-bust';

describe('cache-bust', () => {
	it('appends t query param', () => {
		expect(appendCacheBuster('https://example.com/a.vyview', 123)).toBe(
			'https://example.com/a.vyview?t=123'
		);
	});

	it('uses ampersand when url already has query string', () => {
		expect(appendCacheBuster('https://example.com/a.vyview?x=1', 456)).toBe(
			'https://example.com/a.vyview?x=1&t=456'
		);
	});

	it('vyviewCacheToken prefers the latest of catalog and manifest times', () => {
		expect(vyviewCacheToken(100, 200)).toBeGreaterThanOrEqual(200);
	});
});
