import type { AnnotationEntry } from '$lib/types';

/** Parse the attributes column from an annotations SQL row. */
export function parseAnnotationAttributes(attrRaw: unknown): Record<string, unknown> {
	if (attrRaw == null) return {};
	if (typeof attrRaw === 'object' && !Array.isArray(attrRaw)) {
		return attrRaw as Record<string, unknown>;
	}
	if (typeof attrRaw === 'string') {
		try {
			return JSON.parse(attrRaw) as Record<string, unknown>;
		} catch {
			return {};
		}
	}
	return {};
}

/** Map WASM annotation query rows to {@link AnnotationEntry} records. */
export function parseAnnotationRows(
	rows: unknown[][],
	resolveUrn: (urnInt: bigint) => string
): AnnotationEntry[] {
	const annotations: AnnotationEntry[] = [];
	for (const row of rows) {
		const urnInt = BigInt(row[0] as number | string);
		const urn = resolveUrn(urnInt);
		const label = String(row[1] ?? '');
		const attributes = parseAnnotationAttributes(row[2]);
		annotations.push({ urn, label, attributes });
	}
	return annotations;
}
