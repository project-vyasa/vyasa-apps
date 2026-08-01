import { catalogListingKey } from './catalog-ref';

export const HIDDEN_CATALOGS_STORAGE_KEY = 'vyasa_hidden_catalogs';

function storage(): Storage | null {
	if (typeof window === 'undefined') return null;
	return window.localStorage;
}

export function loadHiddenCatalogKeys(): Set<string> {
	const store = storage();
	if (!store) return new Set();
	try {
		const raw = store.getItem(HIDDEN_CATALOGS_STORAGE_KEY);
		if (!raw) return new Set();
		const parsed = JSON.parse(raw) as unknown;
		if (!Array.isArray(parsed)) return new Set();
		return new Set(parsed.filter((k): k is string => typeof k === 'string' && k.includes('/')));
	} catch {
		return new Set();
	}
}

export function saveHiddenCatalogKeys(hidden: Set<string>) {
	const store = storage();
	if (!store) return;
	store.setItem(HIDDEN_CATALOGS_STORAGE_KEY, JSON.stringify([...hidden]));
}

export function isCatalogHidden(
	hidden: Set<string>,
	registryId: string,
	catalogId: string
): boolean {
	return hidden.has(catalogListingKey(registryId, catalogId));
}

export function withCatalogHidden(
	hidden: Set<string>,
	registryId: string,
	catalogId: string,
	concealed: boolean
): Set<string> {
	const key = catalogListingKey(registryId, catalogId);
	const next = new Set(hidden);
	if (concealed) next.add(key);
	else next.delete(key);
	return next;
}
