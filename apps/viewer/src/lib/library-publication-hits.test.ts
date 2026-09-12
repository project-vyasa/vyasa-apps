import { describe, it, expect } from 'vitest';
import {
	buildLibraryPublicationHits,
	catalogMatchesLibrarySearch,
	filterPublications,
	publicationsForCatalogSearch
} from './library-publication-hits';
import type { LibraryCatalogData } from './types';

describe('library publication search', () => {
	const catalogRow: LibraryCatalogData = {
		registryId: 'adi',
		catalogEntry: { id: 'vysamples', title: 'Samples', catalog_url: 'https://x/catalog.json' },
		sourceUrl: 'https://x/registry.json',
		sourceKind: 'global',
		catalog: {
			schemaVersion: '1.0.0',
			id: 'vysamples',
			title: 'Vyasa Samples',
			description: 'Official sample publications for Project Vyasa.',
			publications: [
				{
					id: 'vyasa-bg',
					title: 'Bhagavad Gita',
					vyviewUrl: 'x.vyview',
					type: 'work',
					language: 'sa'
				},
				{
					id: 'vyasa-bg-commentary',
					title: 'Bhagavad Gita (Vedabase) Sample',
					vyviewUrl: 'y.vyview',
					type: 'commentary',
					language: 'en'
				}
			]
		}
	};

	it('filters publications by title', () => {
		const filtered = filterPublications(catalogRow.catalog!.publications, 'vedabase');
		expect(filtered).toHaveLength(1);
		expect(filtered[0].id).toBe('vyasa-bg-commentary');
	});

	it('keeps catalog visible when only catalog metadata matches', () => {
		const filtered = publicationsForCatalogSearch(catalogRow, 'official sample');
		expect(filtered).toHaveLength(0);
		expect(catalogMatchesLibrarySearch(catalogRow, 'official sample', filtered)).toBe(true);
	});
});

describe('buildLibraryPublicationHits', () => {
	const catalogs: LibraryCatalogData[] = [
		{
			registryId: 'adi',
			catalogEntry: { id: 'vysamples', title: 'Samples', catalog_url: 'https://x/catalog.json' },
			sourceUrl: 'https://x/registry.json',
			sourceKind: 'global',
			catalog: {
				schemaVersion: '1.0.0',
				id: 'vysamples',
				title: 'Vyasa Samples',
				publications: [
					{
						id: 'vyasa-bg',
						title: 'Bhagavad Gita',
						vyviewUrl: 'x.vyview',
						type: 'work',
						language: 'sa'
					}
				]
			}
		},
		{
			registryId: 'local',
			catalogEntry: { id: 'rigveda', title: 'Rig Veda', catalog_url: 'https://y/catalog.json' },
			sourceUrl: 'https://y/registry.json',
			sourceKind: 'local-registry',
			catalog: null,
			error: 'offline'
		}
	];

	it('flattens publications from loaded catalogs', () => {
		const hits = buildLibraryPublicationHits(catalogs, [
			{ id: 'adi', title: 'Adi Registry', sourceUrl: 'https://x/registry.json' }
		]);
		expect(hits).toHaveLength(1);
		expect(hits[0]).toMatchObject({
			id: 'adi/vysamples/vyasa-bg',
			title: 'Bhagavad Gita',
			catalogTitle: 'Vyasa Samples',
			registryTitle: 'Adi Registry',
			publicationId: 'vyasa-bg',
			type: 'work',
			language: 'sa'
		});
		expect(hits[0].subtitle).toContain('work');
	});
});
