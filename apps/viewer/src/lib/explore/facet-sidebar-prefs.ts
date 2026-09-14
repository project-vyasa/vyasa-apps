const STORAGE_KEY = 'vyasa_explore_collapsed_facets';

function storage(): Storage | null {
	if (typeof window === 'undefined') return null;
	return window.localStorage;
}

export function loadCollapsedFacetTypes(): Set<string> {
	const raw = storage()?.getItem(STORAGE_KEY);
	if (!raw) return new Set();
	try {
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? new Set(parsed.filter((id) => typeof id === 'string')) : new Set();
	} catch {
		return new Set();
	}
}

export function saveCollapsedFacetTypes(ids: Set<string>) {
	storage()?.setItem(STORAGE_KEY, JSON.stringify([...ids]));
}
