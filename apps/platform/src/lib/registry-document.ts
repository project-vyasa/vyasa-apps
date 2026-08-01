import type { CatalogRegistryEntry, Registry } from './types';

/** Pre–catalog-identity registry JSON (`publishers[]` + `identifier`). */
interface LegacyRegistryPublisher {
	identifier: string;
	title?: string;
	catalog_url: string;
	description?: string;
	homepage?: string;
}

export type RegistryDocument = Registry & {
	name?: string;
	publishers?: LegacyRegistryPublisher[];
};

/** Normalize registry index entries from current or legacy JSON. */
export function catalogEntriesFromRegistry(data: RegistryDocument): CatalogRegistryEntry[] {
	if (data.catalogs?.length) {
		return data.catalogs;
	}
	return (data.publishers ?? []).map((p) => ({
		id: p.identifier,
		title: p.title || p.identifier,
		catalog_url: p.catalog_url,
		description: p.description,
		homepage: p.homepage
	}));
}

export function registryTitle(data: RegistryDocument, fallback: string): string {
	return data.title || data.name || fallback;
}
