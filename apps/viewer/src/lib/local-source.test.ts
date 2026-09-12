import { describe, it, expect } from 'vitest';
import { classifyLocalSourceDocument, migrateLocalSourcesFromSettings } from './local-source';

describe('classifyLocalSourceDocument', () => {
	it('detects catalog JSON', () => {
		expect(classifyLocalSourceDocument({ identifier: 'vysamples', publications: [] })).toBe(
			'catalog'
		);
	});

	it('detects registry JSON (current and legacy)', () => {
		expect(classifyLocalSourceDocument({ id: 'adi', catalogs: [] })).toBe('registry');
		expect(classifyLocalSourceDocument({ publishers: [] })).toBe('registry');
	});

	it('returns null for unrecognized JSON', () => {
		expect(classifyLocalSourceDocument({})).toBe(null);
		expect(classifyLocalSourceDocument(null)).toBe(null);
	});
});

describe('migrateLocalSourcesFromSettings', () => {
	it('prefers localSources when present', () => {
		expect(
			migrateLocalSourcesFromSettings({
				localSources: 'http://example.com/registry.json',
				customRegistries: 'http://old.example/registry.json'
			})
		).toBe('http://example.com/registry.json');
	});

	it('merges legacy customRegistries and customCatalogs', () => {
		expect(
			migrateLocalSourcesFromSettings({
				customRegistries: 'http://localhost:8080/registry.json',
				customCatalogs: 'http://localhost:8080/vysamples/catalog.json'
			})
		).toBe(
			'http://localhost:8080/registry.json; http://localhost:8080/vysamples/catalog.json'
		);
	});
});
