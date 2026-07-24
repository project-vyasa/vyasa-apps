import type { Registry, Catalog, CatalogItem, RegistryEntry } from './types';
import { viewerSettings } from './settings.svelte';

export const DEFAULT_REGISTRY_URL = 'https://project-vyasa.github.io/vyasa-docs/registry.json';

export async function resolvePublisherCatalogUrl(publisher: string): Promise<string> {
	const fetchErrors: string[] = [];

	// 1. Custom catalogs first
	const customUrls = viewerSettings.customCatalogUrls;
	for (const url of customUrls) {
		try {
			const res = await fetch(url);
			if (res.ok) {
				const catalog = await res.json();
				if (catalog.identifier === publisher) {
					return url;
				}
			} else {
				fetchErrors.push(`${url} (HTTP ${res.status})`);
			}
		} catch (e: any) {
			console.warn(`Failed to check custom catalog ${url}`);
			fetchErrors.push(`${url} (${e.message})`);
		}
	}

	// 2. Custom / Local Registries second
	for (const regUrl of viewerSettings.customRegistryUrls) {
		try {
			const res = await fetch(regUrl);
			if (res.ok) {
				const registry: Registry = await res.json();
				const pubEntry = registry.publishers?.find((p) => p.identifier === publisher);
				if (pubEntry) {
					return pubEntry.catalog_url;
				}
			} else {
				fetchErrors.push(`${regUrl} (HTTP ${res.status})`);
			}
		} catch (e: any) {
			console.warn(`Failed to check custom registry ${regUrl}`);
			fetchErrors.push(`${regUrl} (${e.message})`);
		}
	}

	// 3. Global Registry last (if enabled)
	if (viewerSettings.enableGlobalRegistry) {
		let registryRes;
		try {
			registryRes = await fetch(DEFAULT_REGISTRY_URL);
		} catch (e: any) {
			throw new Error(`Failed to fetch global registry from ${DEFAULT_REGISTRY_URL}: ${e.message}`);
		}

		if (!registryRes.ok) {
			throw new Error(
				`Global registry not found at ${DEFAULT_REGISTRY_URL} (Status: ${registryRes.status})`
			);
		}

		const registry: Registry = await registryRes.json();
		const pubEntry = registry.publishers?.find((p) => p.identifier === publisher);

		if (pubEntry) {
			return pubEntry.catalog_url;
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
		res = await fetch(catalogUrl);
	} catch (e: any) {
		throw new Error(`Failed to fetch catalog from ${catalogUrl}: ${e.message}`);
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

export async function getAllPublishers(): Promise<
	{ publisher: RegistryEntry; sourceUrl: string }[]
> {
	const allPublishers: { publisher: RegistryEntry; sourceUrl: string }[] = [];

	// 1. Custom catalogs first
	for (const url of viewerSettings.customCatalogUrls) {
		let pubId = 'unknown';
		try {
			const res = await fetch(url);
			if (res.ok) {
				const data = await res.json();
				pubId = data.identifier || 'unknown';
				const pubName = data.title || pubId;
				allPublishers.push({
					publisher: { identifier: pubId, title: pubName, catalog_url: url },
					sourceUrl: url
				});
			} else {
				allPublishers.push({
					publisher: { identifier: pubId, title: `Custom Catalog (${url})`, catalog_url: url },
					sourceUrl: url
				});
			}
		} catch (e) {
			console.warn(`Failed to fetch custom catalog ${url}:`, e);
			allPublishers.push({
				publisher: { identifier: pubId, title: `Custom Catalog (${url})`, catalog_url: url },
				sourceUrl: url
			});
		}
	}

	// 2. Custom / Local Registries second
	for (const regUrl of viewerSettings.customRegistryUrls) {
		try {
			const res = await fetch(regUrl);
			if (res.ok) {
				const registry: Registry = await res.json();
				if (registry.publishers) {
					for (const p of registry.publishers) {
						allPublishers.push({ publisher: p, sourceUrl: regUrl });
					}
				}
			}
		} catch (e) {
			console.warn(`Failed to fetch custom registry ${regUrl}:`, e);
		}
	}

	// 3. Global Registry last
	if (viewerSettings.enableGlobalRegistry) {
		try {
			const res = await fetch(DEFAULT_REGISTRY_URL);
			if (res.ok) {
				const registry: Registry = await res.json();
				if (registry.publishers) {
					for (const p of registry.publishers) {
						allPublishers.push({ publisher: p, sourceUrl: DEFAULT_REGISTRY_URL });
					}
				}
			}
		} catch (e) {
			console.warn(`Failed to fetch global registry:`, e);
		}
	}

	return allPublishers;
}
