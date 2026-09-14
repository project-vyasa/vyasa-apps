/** Small palette for concurrent facet highlights. Do not wrap — unused slots stay unmatched. */
export const FACET_PALETTE = [
	'#0ea5e9',
	'#f59e0b',
	'#10b981',
	'#ec4899',
	'#8b5cf6',
	'#ef4444',
	'#14b8a6',
	'#f97316'
] as const;

export const FACET_PALETTE_SIZE = FACET_PALETTE.length;

/** Top-k values shown before “More”. */
export const FACET_VISIBLE_VALUES = FACET_PALETTE_SIZE;

export function facetColor(index: number): string | undefined {
	if (index < 0 || index >= FACET_PALETTE.length) return undefined;
	return FACET_PALETTE[index];
}

/** Leaf blocks with no value for the active map facet. */
export const MAP_UNMATCHED_FILL = '#334155';
