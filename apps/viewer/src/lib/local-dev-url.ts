/** Ensure catalog/registry URLs entered without a scheme still fetch correctly. */
export function normalizeSourceUrl(raw: string): string {
	const trimmed = raw.trim();
	if (!trimmed) return trimmed;
	if (/^https?:\/\//i.test(trimmed)) return trimmed;
	if (trimmed.startsWith('/')) return trimmed;
	return `http://${trimmed}`;
}
