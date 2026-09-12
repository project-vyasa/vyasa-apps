import { describe, it, expect } from 'vitest';
import { isCatalogHidden, withCatalogHidden } from './library-catalog-visibility-storage';

describe('catalog listing visibility helpers', () => {
	it('tracks hidden catalog keys in a set', () => {
		let hidden = new Set<string>();
		hidden = withCatalogHidden(hidden, 'adi', 'vysamples', true);
		expect(isCatalogHidden(hidden, 'adi', 'vysamples')).toBe(true);
		expect(isCatalogHidden(hidden, 'adi', 'muktabodha')).toBe(false);
	});

	it('removes hidden keys when shown again', () => {
		let hidden = withCatalogHidden(new Set(), 'local', 'vysamples', true);
		hidden = withCatalogHidden(hidden, 'local', 'vysamples', false);
		expect(hidden.size).toBe(0);
	});
});
