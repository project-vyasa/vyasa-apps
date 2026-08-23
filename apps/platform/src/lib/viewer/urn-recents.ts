const STORAGE_KEY = 'vyasa_urn_recents';
export const URN_RECENTS_LIMIT = 8;

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

export function normalizeUrnInput(raw: string): string {
	return raw
		.trim()
		.replace(/\s+/g, '')
		.replace(/[./]/g, ':')
		.replace(/:+/g, ':')
		.replace(/^:|:$/g, '');
}

export function publicationUrnKey(
	registryId: string,
	catalogId: string,
	publicationId: string
): string {
	return `${registryId}/${catalogId}/${publicationId}`;
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

export function clearUrnRecents() {
	writeItem('{}');
}

function writeAll(map: Record<string, string[]>) {
	writeItem(JSON.stringify(map));
}

export function listUrnRecents(publicationKey: string): string[] {
	return readAll()[publicationKey] ?? [];
}

export function rememberUrnRecent(
	publicationKey: string,
	urn: string,
	limit = URN_RECENTS_LIMIT
): string[] {
	const next = normalizeUrnInput(urn);
	if (!next || next === 'root') return listUrnRecents(publicationKey);
	const map = readAll();
	const list = [next, ...(map[publicationKey] ?? []).filter((item) => item !== next)].slice(
		0,
		limit
	);
	map[publicationKey] = list;
	writeAll(map);
	return list;
}
