import type { Registry, Catalog, CatalogItem, RegistryEntry } from './types';
import { viewerSettings } from './settings.svelte';

export const DEFAULT_REGISTRY_URL = 'https://project-vyasa.github.io/vyasa-docs/registry.json';

export async function resolvePublisherCatalogUrl(publisher: string): Promise<string> {
	// First, check custom catalogs
	const customUrls = viewerSettings.customCatalogUrls;
	for (const url of customUrls) {
		try {
			// We fetch the catalog to see if its publisher matches, or we just assume 
			// if it's the only one, or we just have to fetch them all.
			// Actually, custom catalogs might not declare their publisher ID. 
			// Let's fetch it and see if catalog.publisher === publisher
			const res = await fetch(url);
			if (res.ok) {
				const catalog = await res.json();
				if (catalog.catalog?.publisher === publisher || catalog.id === publisher) {
					return url;
				}
			}
		} catch (e) {
			console.warn(`Failed to check custom catalog ${url}`);
		}
	}
	
	// If not found in custom catalogs, try global registry (if enabled)
	if (viewerSettings.enableGlobalRegistry) {
		const registryUrl = viewerSettings.globalRegistryUrl || DEFAULT_REGISTRY_URL;
		let registryRes;
		try {
			registryRes = await fetch(registryUrl);
		} catch (e: any) {
			throw new Error(`Failed to fetch global registry from ${registryUrl}: ${e.message}`);
		}
		
		if (!registryRes.ok) {
			throw new Error(`Global registry not found at ${registryUrl} (Status: ${registryRes.status})`);
		}
		
		const registry: Registry = await registryRes.json();
		const pubEntry = registry.publishers?.find((p) => p.identifier === publisher);
		
		if (pubEntry) {
			return pubEntry.catalog_url;
		}
	}
	
	throw new Error(`Publisher ${publisher} not found in enabled catalogs.`);
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
	if (Array.isArray(data)) {
		return { items: data } as Catalog;
	} else if (data.items) {
		return data as Catalog;
	} else {
		return { items: data } as unknown as Catalog;
	}
}

export function getPublicationPayloadUrl(catalogUrl: string, pubItem: CatalogItem): string {
	const catalogBase = catalogUrl.substring(0, catalogUrl.lastIndexOf('/') + 1);
	return pubItem.payloadUrl.startsWith('http') || pubItem.payloadUrl.startsWith('/') 
		? pubItem.payloadUrl 
		: catalogBase + pubItem.payloadUrl;
}

export async function getAllPublishers(): Promise<{ publisher: RegistryEntry, sourceUrl: string }[]> {
	const allPublishers: { publisher: RegistryEntry, sourceUrl: string }[] = [];
	const seenIds = new Set<string>();

	// 1. Fetch from Global Registry if enabled
	if (viewerSettings.enableGlobalRegistry) {
		const registryUrl = viewerSettings.globalRegistryUrl || DEFAULT_REGISTRY_URL;
		try {
			const res = await fetch(registryUrl);
			if (res.ok) {
				const registry: Registry = await res.json();
				if (registry.publishers) {
					for (const p of registry.publishers) {
						if (!seenIds.has(p.identifier)) {
							allPublishers.push({ publisher: p, sourceUrl: registryUrl });
							seenIds.add(p.identifier);
						}
					}
				}
			}
		} catch (e) {
			console.warn(`Failed to fetch global registry:`, e);
		}
	}

	// 2. Fetch from Custom Catalogs
	for (const url of viewerSettings.customCatalogUrls) {
		try {
			const res = await fetch(url);
			if (res.ok) {
				const data = await res.json();
				// A catalog might not have a full publisher record, so we construct a minimal one
				const pubId = data.catalog?.publisher || data.id || 'unknown';
				const pubName = data.catalog?.publisher || data.name || pubId;
				
				if (!seenIds.has(pubId)) {
					allPublishers.push({ 
						publisher: { identifier: pubId, title: pubName, catalog_url: url }, 
						sourceUrl: url 
					});
					seenIds.add(pubId);
				}
			}
		} catch (e) {
			console.warn(`Failed to fetch custom catalog ${url}:`, e);
		}
	}

	return allPublishers;
}
