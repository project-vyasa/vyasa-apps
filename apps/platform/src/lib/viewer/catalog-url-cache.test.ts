import { describe, expect, it } from 'vitest';
import { shouldReuseResolvedCatalogUrl } from './catalog-url-cache';

describe('shouldReuseResolvedCatalogUrl', () => {
	const vysamplesRef = { registryId: 'adi', catalogId: 'vysamples', publicationId: 'bible' };

	it('reuses URL for another publication in the same catalog', () => {
		expect(
			shouldReuseResolvedCatalogUrl(
				'adi',
				'vysamples',
				'https://project-vyasa.github.io/vyasa-samples/catalog.json',
				{ ...vysamplesRef, publicationId: 'vyasa-bg' }
			)
		).toBe(true);
	});

	it('does not reuse when catalogUrl was cleared after a catalog switch', () => {
		expect(shouldReuseResolvedCatalogUrl('adi', 'vysamples', '', vysamplesRef)).toBe(false);
	});

	it('does not reuse URL from a different catalog', () => {
		expect(
			shouldReuseResolvedCatalogUrl(
				'adi',
				'sa_wikisource',
				'https://project-vyasa.github.io/sa.wikisource.org/catalog.json',
				vysamplesRef
			)
		).toBe(false);
	});
});
