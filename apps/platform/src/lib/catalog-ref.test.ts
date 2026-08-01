import { describe, it, expect } from 'vitest';
import {
	catalogLinkToHttp,
	catalogLinkToVyasaUri,
	catalogRefKey,
	publicationExplorePath,
	publicationReaderPath,
	parseVyasaCatalogLink,
	catalogLibraryPath,
	registryLibraryPath,
	catalogListingKey
} from './catalog-ref';

describe('catalog-ref', () => {
	const ref = {
		registryId: 'adi',
		catalogId: 'vysamples',
		publicationId: 'vyasa-bg'
	};

	it('builds reader and explore paths', () => {
		expect(publicationReaderPath(ref, '2:47', '/vyasa-apps')).toBe(
			'/vyasa-apps/adi/vysamples/vyasa-bg/2:47'
		);
		expect(publicationExplorePath(ref, '')).toBe('/adi/vysamples/vyasa-bg/explore');
		expect(registryLibraryPath('adi', '/vyasa-apps')).toBe('/vyasa-apps/adi');
		expect(catalogLibraryPath('adi', 'vysamples', '')).toBe('/adi/vysamples');
		expect(catalogListingKey('adi', 'vysamples')).toBe('adi/vysamples');
	});

	it('serializes vyasa URI and HTTP link', () => {
		const link = { ...ref, urn: '2:47' };
		expect(catalogLinkToVyasaUri(link)).toBe('vyasa://adi/vysamples/vyasa-bg/2:47');
		expect(catalogLinkToHttp(link, 'https://project-vyasa.github.io', '/vyasa-apps')).toBe(
			'https://project-vyasa.github.io/vyasa-apps/adi/vysamples/vyasa-bg/2:47'
		);
	});

	it('parses vyasa URI links', () => {
		expect(parseVyasaCatalogLink('vyasa://adi/sa_wikisource/rigveda/1:1:1')).toEqual({
			registryId: 'adi',
			catalogId: 'sa_wikisource',
			publicationId: 'rigveda',
			urn: '1:1:1'
		});
	});

	it('keys catalog refs', () => {
		expect(catalogRefKey(ref)).toBe('adi/vysamples/vyasa-bg');
	});
});
