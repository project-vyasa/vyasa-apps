import { afterEach, describe, expect, it } from 'vitest';
import { formatUrnDisplay, publicationUrnKey } from './urn-recents';
import {
	clearUrnFavorites,
	isUrnFavorite,
	listUrnFavorites,
	toggleUrnFavorite
} from './urn-favorites';

describe('urn favorites', () => {
	afterEach(() => {
		clearUrnFavorites();
	});

	it('formats stored colons as dotted labels', () => {
		expect(formatUrnDisplay('1:185')).toBe('1.185');
		expect(formatUrnDisplay('2:47')).toBe('2.47');
	});

	it('toggles a per-publication pin', () => {
		const key = publicationUrnKey('adi', 'sa-wikisource', 'rigveda');
		expect(toggleUrnFavorite(key, '1.185')).toEqual(['1:185']);
		expect(isUrnFavorite(key, '1:185')).toBe(true);
		expect(listUrnFavorites('other')).toEqual([]);
		expect(toggleUrnFavorite(key, '1:185')).toEqual([]);
		expect(isUrnFavorite(key, '1:185')).toBe(false);
	});

	it('keeps newest first and caps length', () => {
		const key = 'pub';
		for (let i = 0; i < 10; i++) toggleUrnFavorite(key, `1:${i}`);
		const list = listUrnFavorites(key);
		expect(list).toHaveLength(8);
		expect(list[0]).toBe('1:9');
		expect(list).not.toContain('1:0');
	});
});
