import type {
	Registry,
	Catalog,
	PublicationEntry,
	CatalogListing,
	CatalogRegistryEntry,
	RegistryInfo,
	CatalogSourceKind
} from './types';
import {
	catalogEntriesFromRegistry,
	registryTitle,
	type RegistryDocument
} from './registry-document';
import { viewerSettings } from './settings.svelte';
import { appendCacheBuster } from './cache-bust';
import { ADI_REGISTRY_ID, LOCAL_REGISTRY_ID } from './catalog-ref';
import { classifyLocalSourceDocument } from './local-source';

export const DEFAULT_REGISTRY_URL = 'https://project-vyasa.github.io/vyasa-docs/registry.json';

export interface CatalogSourceError {
	url: string;
	error: string;
	kind: 'registry' | 'catalog';
}

export interface AllCatalogsResult {
	registries: RegistryInfo[];
	catalogs: CatalogListing[];
	sourceErrors: CatalogSourceError[];
}

async function fetchJson<T>(
	url: string
): Promise<{ ok: true; data: T } | { ok: false; status: number }> {
	const res = await fetch(appendCacheBuster(url));
	if (!res.ok) return { ok: false, status: res.status };
	return { ok: true, data: (await res.json()) as T };
}

export function normalizeCatalogRegistryEntry(raw: CatalogRegistryEntry): CatalogRegistryEntry {
	if (!raw.id) {
		throw new Error('Catalog registry entry missing id');
	}
	return {
		...raw,
		title: raw.title || raw.id,
		catalog_url: raw.catalog_url
	};
}

function registryIdFromDocument(data: RegistryDocument, sourceUrl: string, forcedLocal = false): string {
	if (forcedLocal) return LOCAL_REGISTRY_ID;
	if (data.id) return data.id;
	return sourceUrl === DEFAULT_REGISTRY_URL ? ADI_REGISTRY_ID : LOCAL_REGISTRY_ID;
}

function registryInfoFromDocument(
	data: RegistryDocument,
	sourceUrl: string,
	forcedLocal = false
): RegistryInfo {
	const id = registryIdFromDocument(data, sourceUrl, forcedLocal);
	return {
		id,
		title: registryTitle(data, id),
		description: data.description,
		homepage: data.homepage,
		sourceUrl
	};
}

const registryInfoMap = new Map<string, RegistryInfo>();

function rememberRegistry(info: RegistryInfo) {
	const existing = registryInfoMap.get(info.id);
	if (!existing || info.sourceUrl === DEFAULT_REGISTRY_URL) {
		registryInfoMap.set(info.id, info);
	}
}

/** Resolve catalog.json URL for a registry + catalog id pair. */
export async function resolveCatalogUrl(registryId: string, catalogId: string): Promise<string> {
	if (registryId === ADI_REGISTRY_ID) {
		const result = await fetchJson<Registry>(DEFAULT_REGISTRY_URL);
		if (!result.ok) {
			throw new Error(`Global registry not found (HTTP ${result.status})`);
		}
		const entry = catalogEntriesFromRegistry(result.data).find((c) => c.id === catalogId);
		if (!entry) {
			throw new Error(`Catalog "${catalogId}" not found in registry "${registryId}".`);
		}
		return normalizeCatalogRegistryEntry(entry).catalog_url;
	}

	if (registryId !== LOCAL_REGISTRY_ID) {
		throw new Error(`Unknown registry "${registryId}".`);
	}

	const fetchErrors: string[] = [];

	for (const url of viewerSettings.localSourceUrls) {
		try {
			const result = await fetchJson<Record<string, unknown>>(url);
			if (!result.ok) {
				fetchErrors.push(`${url} (HTTP ${result.status})`);
				continue;
			}
			const kind = classifyLocalSourceDocument(result.data);
			if (kind === 'catalog') {
				const resolvedId =
					(result.data.id as string | undefined) ??
					(result.data.identifier as string | undefined);
				if (resolvedId === catalogId) return url;
			} else if (kind === 'registry') {
				const entry = catalogEntriesFromRegistry(result.data as unknown as RegistryDocument).find(
					(c) => c.id === catalogId
				);
				if (entry) return normalizeCatalogRegistryEntry(entry).catalog_url;
			} else {
				fetchErrors.push(`${url} (unrecognized JSON)`);
			}
		} catch (e: unknown) {
			fetchErrors.push(`${url} (${e instanceof Error ? e.message : String(e)})`);
		}
	}

	const detail = fetchErrors.length > 0 ? ` Errors: ${fetchErrors.join('; ')}` : '';
	throw new Error(
		`Catalog "${catalogId}" not found in registry "${registryId}". Add a local source URL in Settings.${detail}`
	);
}

export async function fetchCatalog(catalogUrl: string): Promise<Catalog> {
	let res;
	try {
		res = await fetch(appendCacheBuster(catalogUrl));
	} catch (e: unknown) {
		const msg = e instanceof Error ? e.message : String(e);
		throw new Error(`Failed to fetch catalog from ${catalogUrl}: ${msg}`);
	}

	if (!res.ok) {
		throw new Error(`Catalog not found at ${catalogUrl} (Status: ${res.status})`);
	}

	const data = await res.json();
	const catalogId = data.id ?? data.identifier;

	if (!data.publications) {
		throw new Error(`Catalog at ${catalogUrl} is missing 'publications' array`);
	}
	if (!catalogId) {
		throw new Error(`Catalog at ${catalogUrl} is missing 'id'`);
	}

	return {
		schemaVersion: data.schemaVersion,
		id: catalogId,
		title: data.title || data.id,
		description: data.description,
		homepage: data.homepage,
		publisher: data.publisher,
		publications: data.publications as PublicationEntry[]
	};
}

export function getPublicationVyviewUrl(catalogUrl: string, publication: PublicationEntry): string {
	const url = publication.vyviewUrl;
	if (!url) {
		throw new Error(`Publication ${publication.id} is missing vyviewUrl`);
	}
	const catalogBase = catalogUrl.substring(0, catalogUrl.lastIndexOf('/') + 1);
	return url.startsWith('http') || url.startsWith('/') ? url : catalogBase + url;
}

export async function getAllCatalogs(): Promise<AllCatalogsResult> {
	registryInfoMap.clear();
	const allCatalogs: CatalogListing[] = [];
	const sourceErrors: CatalogSourceError[] = [];
	const seenListingKeys = new Set<string>();

	const pushListing = (
		registryId: string,
		entry: CatalogRegistryEntry,
		sourceUrl: string,
		sourceKind: CatalogSourceKind
	) => {
		const normalized = normalizeCatalogRegistryEntry(entry);
		const key = `${registryId}/${normalized.id}`;
		if (seenListingKeys.has(key)) return;
		seenListingKeys.add(key);
		allCatalogs.push({
			registryId,
			catalogEntry: normalized,
			sourceUrl,
			sourceKind
		});
	};

	const ingestLocalCatalog = (
		url: string,
		data: { id?: string; identifier?: string; title?: string },
		ok: boolean,
		status?: number
	) => {
		let catalogId = 'unknown';
		if (ok) {
			catalogId = data.id ?? data.identifier ?? 'unknown';
			const title = data.title || catalogId;
			rememberRegistry({ id: LOCAL_REGISTRY_ID, title: 'Local', sourceUrl: url });
			pushListing(
				LOCAL_REGISTRY_ID,
				{ id: catalogId, title, catalog_url: url },
				url,
				'local-catalog'
			);
		} else {
			sourceErrors.push({ url, error: `HTTP ${status}`, kind: 'catalog' });
			pushListing(
				LOCAL_REGISTRY_ID,
				{ id: catalogId, title: `Local Catalog (${url})`, catalog_url: url },
				url,
				'local-catalog'
			);
		}
	};

	const ingestLocalRegistry = (url: string, data: RegistryDocument, ok: boolean, status?: number) => {
		const entries = ok ? catalogEntriesFromRegistry(data) : [];
		if (ok && entries.length) {
			const info = registryInfoFromDocument(data, url, true);
			rememberRegistry(info);
			for (const c of entries) {
				pushListing(LOCAL_REGISTRY_ID, c, url, 'local-registry');
			}
		} else if (ok) {
			sourceErrors.push({
				url,
				error: 'Registry JSON loaded but has no catalogs',
				kind: 'registry'
			});
		} else {
			sourceErrors.push({ url, error: `HTTP ${status}`, kind: 'registry' });
		}
	};

	for (const url of viewerSettings.localSourceUrls) {
		try {
			const result = await fetchJson<Record<string, unknown>>(url);
			if (!result.ok) {
				sourceErrors.push({ url, error: `HTTP ${result.status}`, kind: 'catalog' });
				continue;
			}
			const kind = classifyLocalSourceDocument(result.data);
			if (kind === 'catalog') {
				ingestLocalCatalog(
					url,
					result.data as { id?: string; identifier?: string; title?: string },
					true
				);
			} else if (kind === 'registry') {
				ingestLocalRegistry(url, result.data as unknown as RegistryDocument, true);
			} else {
				sourceErrors.push({
					url,
					error: 'Unrecognized JSON (expected registry or catalog document)',
					kind: 'catalog'
				});
			}
		} catch (e) {
			const msg = e instanceof Error ? e.message : String(e);
			sourceErrors.push({ url, error: msg, kind: 'catalog' });
		}
	}

	try {
		const result = await fetchJson<Registry>(DEFAULT_REGISTRY_URL);
		if (result.ok) {
			const entries = catalogEntriesFromRegistry(result.data);
			if (entries.length) {
				const info = registryInfoFromDocument(result.data, DEFAULT_REGISTRY_URL);
				rememberRegistry(info);
				for (const c of entries) {
					pushListing(info.id, c, DEFAULT_REGISTRY_URL, 'global');
				}
			}
		}
	} catch (e) {
		console.warn('Failed to fetch global registry:', e);
	}

	if (!registryInfoMap.has(LOCAL_REGISTRY_ID) && viewerSettings.localSourceUrls.length > 0) {
		rememberRegistry({ id: LOCAL_REGISTRY_ID, title: 'Local', sourceUrl: '' });
	}

	return {
		registries: [...registryInfoMap.values()].sort((a, b) => a.title.localeCompare(b.title)),
		catalogs: allCatalogs,
		sourceErrors
	};
}

export { catalogEntriesFromRegistry } from './registry-document';