import type { Registry, Catalog, CatalogItem, PublisherListing, PublisherSourceKind } from './types';
import { viewerSettings } from './settings.svelte';
import { appendCacheBuster } from './cache-bust';

export const DEFAULT_REGISTRY_URL = 'https://project-vyasa.github.io/vyasa-docs/registry.json';

export interface CatalogSourceError {
	url: string;
	error: string;
	kind: 'registry' | 'catalog';
}

export interface AllPublishersResult {
	publishers: PublisherListing[];
	sourceErrors: CatalogSourceError[];
}

async function fetchJson<T>(url: string): Promise<{ ok: true; data: T } | { ok: false; status: number }> {
	const res = await fetch(appendCacheBuster(url));
	if (!res.ok) return { ok: false, status: res.status };
	return { ok: true, data: (await res.json()) as T };
}

export async function resolvePublisherCatalogUrl(publisher: string): Promise<string> {
	const fetchErrors: string[] = [];

	// 1. Global Registry first (if enabled) - default canonical source
	if (viewerSettings.enableGlobalRegistry) {
		try {
			const result = await fetchJson<Registry>(DEFAULT_REGISTRY_URL);
			if (!result.ok) {
				throw new Error(
					`Global registry not found at ${DEFAULT_REGISTRY_URL} (Status: ${result.status})`
				);
			}
			const pubEntry = result.data.publishers?.find((p) => p.identifier === publisher);
			if (pubEntry) {
				return pubEntry.catalog_url;
			}
		} catch (e: unknown) {
			const msg = e instanceof Error ? e.message : String(e);
			throw new Error(`Failed to fetch global registry from ${DEFAULT_REGISTRY_URL}: ${msg}`);
		}
	}

	// 2. Custom catalogs second
	for (const url of viewerSettings.customCatalogUrls) {
		try {
			const result = await fetchJson<{ identifier?: string }>(url);
			if (result.ok && result.data.identifier === publisher) {
				return url;
			}
			if (!result.ok) {
				fetchErrors.push(`${url} (HTTP ${result.status})`);
			}
		} catch (e: unknown) {
			console.warn(`Failed to check custom catalog ${url}`);
			fetchErrors.push(`${url} (${e instanceof Error ? e.message : String(e)})`);
		}
	}

	// 3. Custom / Local Registries third
	for (const regUrl of viewerSettings.customRegistryUrls) {
		try {
			const result = await fetchJson<Registry>(regUrl);
			if (result.ok) {
				const pubEntry = result.data.publishers?.find((p) => p.identifier === publisher);
				if (pubEntry) {
					return pubEntry.catalog_url;
				}
			} else {
				fetchErrors.push(`${regUrl} (HTTP ${result.status})`);
			}
		} catch (e: unknown) {
			console.warn(`Failed to check custom registry ${regUrl}`);
			fetchErrors.push(`${regUrl} (${e instanceof Error ? e.message : String(e)})`);
		}
	}

	const errorMsg =
		fetchErrors.length > 0
			? `Publisher ${publisher} not found. Note: Some custom sources failed to load: ${fetchErrors.join(', ')}`
			: `Publisher ${publisher} not found in enabled catalogs or registries.`;
	throw new Error(errorMsg);
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

	if (!data.publications) {
		throw new Error(`Catalog at ${catalogUrl} is missing 'publications' array`);
	}

	return {
		schemaVersion: data.schemaVersion,
		identifier: data.identifier,
		title: data.title,
		items: data.publications
	};
}

export function getPublicationVyviewUrl(catalogUrl: string, pubItem: CatalogItem): string {
	const url = pubItem.vyviewUrl;
	if (!url) {
		throw new Error(`Publication ${pubItem.id} is missing vyviewUrl`);
	}
	const catalogBase = catalogUrl.substring(0, catalogUrl.lastIndexOf('/') + 1);
	return url.startsWith('http') || url.startsWith('/') ? url : catalogBase + url;
}

export async function getAllPublishers(): Promise<AllPublishersResult> {
	const allPublishers: PublisherListing[] = [];
	const sourceErrors: CatalogSourceError[] = [];

	const pushListing = (
		publisher: PublisherListing['publisher'],
		sourceUrl: string,
		sourceKind: PublisherSourceKind
	) => {
		allPublishers.push({ publisher, sourceUrl, sourceKind });
	};

	// 1. Local / custom catalogs first
	for (const url of viewerSettings.customCatalogUrls) {
		let pubId = 'unknown';
		try {
			const result = await fetchJson<{ identifier?: string; title?: string }>(url);
			if (result.ok) {
				pubId = result.data.identifier || 'unknown';
				const pubName = result.data.title || pubId;
				pushListing({ identifier: pubId, title: pubName, catalog_url: url }, url, 'local-catalog');
			} else {
				sourceErrors.push({ url, error: `HTTP ${result.status}`, kind: 'catalog' });
				pushListing(
					{ identifier: pubId, title: `Custom Catalog (${url})`, catalog_url: url },
					url,
					'local-catalog'
				);
			}
		} catch (e) {
			const msg = e instanceof Error ? e.message : String(e);
			console.warn(`Failed to fetch custom catalog ${url}:`, e);
			sourceErrors.push({ url, error: msg, kind: 'catalog' });
			pushListing(
				{ identifier: pubId, title: `Custom Catalog (${url})`, catalog_url: url },
				url,
				'local-catalog'
			);
		}
	}

	// 2. Local / custom registries second
	for (const regUrl of viewerSettings.customRegistryUrls) {
		try {
			const result = await fetchJson<Registry>(regUrl);
			if (result.ok && result.data.publishers?.length) {
				for (const p of result.data.publishers) {
					pushListing(p, regUrl, 'local-registry');
				}
			} else if (result.ok) {
				sourceErrors.push({
					url: regUrl,
					error: 'Registry JSON loaded but has no publishers',
					kind: 'registry'
				});
			} else {
				sourceErrors.push({ url: regUrl, error: `HTTP ${result.status}`, kind: 'registry' });
			}
		} catch (e) {
			const msg = e instanceof Error ? e.message : String(e);
			console.warn(`Failed to fetch custom registry ${regUrl}:`, e);
			sourceErrors.push({ url: regUrl, error: msg, kind: 'registry' });
		}
	}

	// 3. Global registry last
	if (viewerSettings.enableGlobalRegistry) {
		try {
			const result = await fetchJson<Registry>(DEFAULT_REGISTRY_URL);
			if (result.ok && result.data.publishers) {
				for (const p of result.data.publishers) {
					pushListing(p, DEFAULT_REGISTRY_URL, 'global');
				}
			}
		} catch (e) {
			console.warn(`Failed to fetch global registry:`, e);
		}
	}

	return { publishers: allPublishers, sourceErrors };
}
