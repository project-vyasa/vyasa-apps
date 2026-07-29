/** Small palette for concurrent facet highlights (≤8 active values). */
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

export function facetColor(index: number): string {
	return FACET_PALETTE[index % FACET_PALETTE.length];
}

/** Leaf blocks with no value for the active map facet. */
export const MAP_UNMATCHED_FILL = '#334155';
