import { describe, it, expect } from 'vitest';
import { catalogEntriesFromRegistry, type RegistryDocument } from './registry-document';

describe('catalogEntriesFromRegistry', () => {
	it('reads current catalogs[] shape', () => {
		const entries = catalogEntriesFromRegistry({
			id: 'adi',
			catalogs: [
				{
					id: 'vysamples',
					title: 'Vyasa Samples',
					catalog_url: 'https://example.com/catalog.json'
				}
			]
		});
		expect(entries).toEqual([
			{
				id: 'vysamples',
				title: 'Vyasa Samples',
				catalog_url: 'https://example.com/catalog.json'
			}
		]);
	});

	it('maps legacy publishers[] + identifier to catalog entries', () => {
		const entries = catalogEntriesFromRegistry({
			id: 'adi',
			name: 'Vyasa Global Publisher Registry',
			publishers: [
				{
					identifier: 'vysamples',
					title: 'Project Vyasa Samples',
					catalog_url: 'http://localhost:8080/vysamples/catalog.json'
				}
			]
		} as RegistryDocument);
		expect(entries).toEqual([
			{
				id: 'vysamples',
				title: 'Project Vyasa Samples',
				catalog_url: 'http://localhost:8080/vysamples/catalog.json'
			}
		]);
	});

	it('returns empty when neither catalogs nor publishers exist', () => {
		expect(catalogEntriesFromRegistry({ id: 'adi', catalogs: [] })).toEqual([]);
		expect(catalogEntriesFromRegistry({ id: 'adi' } as Parameters<typeof catalogEntriesFromRegistry>[0])).toEqual(
			[]
		);
	});
});
