/** Viewer performance budgets (milliseconds). See vyasa/docs/PERFORMANCE_GUARDS.md */

export const PERF_BUDGETS = {
	loadPublication: { warn: 4_000, fail: 8_000 },
	buildFacetIndex: { warn: 500, fail: 2_000 },
	enrichBlockAttributesForWeave: { warn: 300, fail: 1_500 },
	renderUrn: { warn: 800, fail: 3_000 }
} as const;

export type PerfPhase = keyof typeof PERF_BUDGETS;

/** Pack-time manifest keys (vyasac calculate_stats). */
export const MANIFEST_PERF_KEYS = {
	annotationEdges: 'stat_annotation_edges',
	graphEdges: 'stat_graph_edges',
	leafBlocks: 'stat_leaf_blocks',
	vocabularyEntries: 'stat_vocabulary_entries',
	runtimeStats: 'runtime_stats'
} as const;

/** Warn when packed annotation edges exceed this (viewer facet/load stress). */
export const PACK_ANNOTATION_EDGE_WARN = 10_000;
