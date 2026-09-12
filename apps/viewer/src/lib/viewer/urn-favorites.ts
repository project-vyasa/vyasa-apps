import { normalizeUrnInput } from '$lib/viewer/urn-recents';

const STORAGE_KEY = 'vyasa_urn_favorites';
export const URN_FAVORITES_LIMIT = 8;

const memoryStore = new Map<string, string>();

function readItem(): string | null {
	try {
		if (typeof localStorage !== 'undefined') return localStorage.getItem(STORAGE_KEY);
	} catch {
		/* private mode / SSR */
	}
	return memoryStore.get(STORAGE_KEY) ?? null;
}

function writeItem(value: string) {
	try {
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem(STORAGE_KEY, value);
			return;
		}
	} catch {
		/* fall through */
	}
	memoryStore.set(STORAGE_KEY, value);
}

function readAll(): Record<string, string[]> {
	try {
		const raw = readItem();
		if (!raw) return {};
		const parsed = JSON.parse(raw) as unknown;
		if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
		const out: Record<string, string[]> = {};
		for (const [key, value] of Object.entries(parsed as Record<string, unknown>)) {
			if (Array.isArray(value)) {
				out[key] = value.filter(
					(item): item is string => typeof item === 'string' && item.length > 0
				);
			}
		}
		return out;
	} catch {
		return {};
	}
}

function writeAll(map: Record<string, string[]>) {
	writeItem(JSON.stringify(map));
}

export function clearUrnFavorites() {
	writeItem('{}');
}

export function listUrnFavorites(publicationKey: string): string[] {
	return readAll()[publicationKey] ?? [];
}

export function isUrnFavorite(publicationKey: string, urn: string): boolean {
	const next = normalizeUrnInput(urn);
	return Boolean(next) && listUrnFavorites(publicationKey).includes(next);
}

/** Pin or unpin. Newest pin first; overflow drops the oldest. */
export function toggleUrnFavorite(
	publicationKey: string,
	urn: string,
	limit = URN_FAVORITES_LIMIT
): string[] {
	const next = normalizeUrnInput(urn);
	if (!next || next === 'root') return listUrnFavorites(publicationKey);
	const map = readAll();
	const current = map[publicationKey] ?? [];
	const list = current.includes(next)
		? current.filter((item) => item !== next)
		: [next, ...current.filter((item) => item !== next)].slice(0, limit);
	map[publicationKey] = list;
	writeAll(map);
	return list;
}
