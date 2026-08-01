import type { Manifest, VocabularyEntry } from '$lib/types';

export interface FacetConfig {
	/**
	 * When set, only these block_attribute keys are indexed (graph annotate facets are
	 * always ingested). When unset, all non-structural block keys are indexed.
	 */
	declaredBlockKeys?: Set<string>;
}

function parseManifestStringList(
	raw: string | string[] | undefined | null
): string[] {
	if (raw == null || raw === '') return [];
	if (Array.isArray(raw)) {
		return raw.map((k) => String(k).toLowerCase());
	}
	if (typeof raw === 'string') {
		try {
			const parsed = JSON.parse(raw) as unknown;
			if (Array.isArray(parsed)) {
				return parsed.map((k) => String(k).toLowerCase());
			}
		} catch {
			return raw
				.split(',')
				.map((k) => k.trim().toLowerCase())
				.filter(Boolean);
		}
	}
	return [];
}

function parseManifestFacetKeys(manifest: Manifest): string[] {
	return parseManifestStringList(manifest.facet_attributes);
}

function parseManifestTemplateContextKeys(manifest: Manifest): string[] {
	return parseManifestStringList(manifest.template_context_keys);
}

function vocabularyFacetKeys(vocabulary: VocabularyEntry[] | undefined): string[] {
	if (!vocabulary?.length) return [];
	const keys: string[] = [];
	for (const entry of vocabulary) {
		const cat = entry.category.toLowerCase();
		if (cat === 'facets' || cat === 'facet') {
			keys.push(entry.key.toLowerCase());
		}
	}
	return keys;
}

/** Resolve publisher-declared facet keys from manifest and/or vocabulary. */
export function resolveFacetConfig(
	manifest: Manifest | undefined,
	vocabulary: VocabularyEntry[] | undefined
): FacetConfig {
	const keys = new Set<string>();
	for (const k of parseManifestFacetKeys(manifest || ({} as Manifest))) {
		keys.add(k);
	}
	for (const k of vocabularyFacetKeys(vocabulary)) {
		keys.add(k);
	}
	return keys.size > 0 ? { declaredBlockKeys: keys } : {};
}

/**
 * Keys eligible for graph → weave template context (`{{ devata }}`, etc.).
 * Merges manifest `template_context_keys`, `facet_attributes`, and vocabulary `facets`.
 */
export function resolveTemplateContextKeys(
	manifest: Manifest | undefined,
	vocabulary: VocabularyEntry[] | undefined
): Set<string> | undefined {
	const keys = new Set<string>();
	for (const k of parseManifestTemplateContextKeys(manifest || ({} as Manifest))) {
		keys.add(k);
	}
	for (const k of parseManifestFacetKeys(manifest || ({} as Manifest))) {
		keys.add(k);
	}
	for (const k of vocabularyFacetKeys(vocabulary)) {
		keys.add(k);
	}
	return keys.size > 0 ? keys : undefined;
}

/** Whether a block_attribute key should be indexed given publisher config. */
export function shouldIndexBlockAttributeKey(
	shortKey: string,
	config: FacetConfig,
	structuralSkipKeys: ReadonlySet<string>
): boolean {
	const key = shortKey.toLowerCase();
	if (config.declaredBlockKeys) {
		return config.declaredBlockKeys.has(key);
	}
	return !structuralSkipKeys.has(key);
}
