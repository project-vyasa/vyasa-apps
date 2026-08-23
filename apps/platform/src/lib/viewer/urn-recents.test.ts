import { afterEach, describe, expect, it } from 'vitest';
import {
	clearUrnRecents,
	listUrnRecents,
	normalizeUrnInput,
	publicationUrnKey,
	rememberUrnRecent
} from './urn-recents';

describe('urn recents', () => {
	afterEach(() => {
		clearUrnRecents();
	});

	it('normalizes spaces and dots to colon URNs', () => {
		expect(normalizeUrnInput(' 1.0.5 ')).toBe('1:0:5');
		expect(normalizeUrnInput('1:0:5')).toBe('1:0:5');
	});

	it('keeps a per-publication MRU list', () => {
		const key = publicationUrnKey('adi', 'vedabase', 'yv');
		rememberUrnRecent(key, '1:0:5');
		rememberUrnRecent(key, '2:1:1');
		rememberUrnRecent(key, '1:0:5');
		expect(listUrnRecents(key)).toEqual(['1:0:5', '2:1:1']);
		expect(listUrnRecents('other')).toEqual([]);
	});

	it('caps history length', () => {
		const key = 'pub';
		for (let i = 0; i < 12; i++) rememberUrnRecent(key, `1:0:${i}`, 8);
		expect(listUrnRecents(key)).toHaveLength(8);
		expect(listUrnRecents(key)[0]).toBe('1:0:11');
	});
});
