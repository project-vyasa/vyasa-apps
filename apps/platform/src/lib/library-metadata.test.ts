import { describe, it, expect } from 'vitest';
import {
	catalogHeaderLine2,
	catalogHeaderLine3,
	publicationMetaLine,
	publicationDescriptionLine,
	publicationDisplayBadges
} from './library-metadata';
import type { LibraryCatalogData } from './types';

describe('library metadata lines', () => {
	const catalogRow: LibraryCatalogData = {
		registryId: 'adi',
		catalogEntry: { id: 'vysamples', title: 'Vyasa Samples', catalog_url: 'https://x/catalog.json' },
		sourceUrl: 'https://x/registry.json',
		sourceKind: 'global',
		catalog: {
			schemaVersion: '1.0.0',
			id: 'vysamples',
			title: 'Vyasa Samples',
			description: 'Sample publications for development.',
			publisher: { id: 'project-vyasa', title: 'Project Vyasa' },
			publications: [{ id: 'vyasa-bg', title: 'Gita', vyviewUrl: 'x.vyview' }]
		}
	};

	it('formats catalog header lines', () => {
		expect(catalogHeaderLine2(catalogRow)).toBe('Project Vyasa · 1 publication');
		expect(catalogHeaderLine3(catalogRow)).toBe('Sample publications for development.');
	});

	it('formats publication metadata lines', () => {
		const item = {
			id: 'vyasa-bg',
			title: 'Bhagavad Gita',
			vyviewUrl: 'x.vyview',
			type: 'work',
			language: 'sa',
			license: 'CC0',
			description: 'Canonical sample edition.'
		};
		expect(publicationMetaLine(item)).toBe('work · sa · CC0');
		expect(publicationDescriptionLine(item)).toBe('Canonical sample edition.');
		expect(publicationDisplayBadges(item)).toEqual(['work', 'sa']);
	});
});
