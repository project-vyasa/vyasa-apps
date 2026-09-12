/** Whether fetched JSON is a registry index or a catalog document. */
export type LocalSourceDocumentKind = 'registry' | 'catalog';

export function classifyLocalSourceDocument(data: unknown): LocalSourceDocumentKind | null {
	if (!data || typeof data !== 'object') return null;
	const doc = data as Record<string, unknown>;
	if (Array.isArray(doc.publications)) return 'catalog';
	if (Array.isArray(doc.catalogs) || Array.isArray(doc.publishers)) return 'registry';
	return null;
}

/** Merge legacy settings fields into a single local-sources string. */
export function migrateLocalSourcesFromSettings(parsed: Record<string, unknown>): string {
	if (typeof parsed.localSources === 'string' && parsed.localSources.trim()) {
		return parsed.localSources;
	}
	const urls = new Set<string>();
	const add = (raw: unknown) => {
		if (typeof raw !== 'string' || !raw.trim()) return;
		for (const part of raw.split(/[;,]/)) {
			const trimmed = part.trim();
			if (trimmed) urls.add(trimmed);
		}
	};
	add(parsed.customRegistries);
	add(parsed.customCatalogs);
	return [...urls].join('; ');
}
