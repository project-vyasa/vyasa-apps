import type { StreamDescriptor } from '$lib/types';

function isNonEmptyString(value: unknown): value is string {
	return typeof value === 'string' && value.trim().length > 0;
}

function asDescriptor(value: unknown): StreamDescriptor | null {
	if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
	const rec = value as Record<string, unknown>;
	if (!isNonEmptyString(rec.language) || !isNonEmptyString(rec.script) || !isNonEmptyString(rec.kind)) {
		return null;
	}
	return {
		language: rec.language.trim(),
		script: rec.script.trim(),
		kind: rec.kind.trim()
	};
}

/** Parse manifest `streams_meta`. Keys are packed stream ids (folder), never Toml `primary`. */
export function parseStreamsMeta(raw: unknown): Record<string, StreamDescriptor> {
	if (raw == null) return {};
	if (typeof raw === 'string') {
		if (!raw.trim()) return {};
		try {
			return descriptorsFromObject(JSON.parse(raw) as unknown);
		} catch {
			return {};
		}
	}
	if (typeof raw === 'object') return descriptorsFromObject(raw);
	return {};
}

function descriptorsFromObject(parsed: unknown): Record<string, StreamDescriptor> {
	if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
	const out: Record<string, StreamDescriptor> = {};
	for (const [key, value] of Object.entries(parsed as Record<string, unknown>)) {
		const packed = key.trim();
		if (!packed) continue;
		const desc = asDescriptor(value);
		if (desc) out[packed] = desc;
	}
	return out;
}

export function streamDescriptor(
	meta: Record<string, StreamDescriptor> | undefined,
	packedId: string
): StreamDescriptor | undefined {
	return meta?.[packedId];
}

/** Distinct kind / language tokens present in the pack (for customizer filters). */
export function streamFilterTokens(
	meta: Record<string, StreamDescriptor> | undefined,
	field: 'kind' | 'language'
): string[] {
	if (!meta) return [];
	const seen = new Set<string>();
	for (const desc of Object.values(meta)) {
		const token = desc[field];
		if (token) seen.add(token);
	}
	return [...seen].sort();
}

export function streamMatchesFilters(
	packedId: string,
	meta: Record<string, StreamDescriptor> | undefined,
	kind: string,
	language: string
): boolean {
	if (!kind && !language) return true;
	const desc = meta?.[packedId];
	if (!desc) return false;
	if (kind && desc.kind !== kind) return false;
	if (language && desc.language !== language) return false;
	return true;
}
