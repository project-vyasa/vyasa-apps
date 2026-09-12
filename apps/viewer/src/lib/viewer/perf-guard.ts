import { MANIFEST_PERF_KEYS, PACK_ANNOTATION_EDGE_WARN, PERF_BUDGETS, type PerfPhase } from './perf-budgets';

export interface PerfTimings extends Partial<Record<PerfPhase, number>> {}

function isPerfDebug(): boolean {
	return (
		typeof import.meta !== 'undefined' &&
		(import.meta as ImportMeta & { env?: { DEV?: boolean } }).env?.DEV === true
	);
}

/** Record phase duration; warn in dev when over budget. */
export function recordPerfPhase(timings: PerfTimings, phase: PerfPhase, durationMs: number): void {
	timings[phase] = durationMs;
	const budget = PERF_BUDGETS[phase];
	if (durationMs > budget.warn) {
		console.warn(
			`[Vyasa perf] ${phase} took ${durationMs.toFixed(0)}ms (budget warn ${budget.warn}ms)`
		);
	}
}

export async function measurePerfPhase<T>(
	timings: PerfTimings,
	phase: PerfPhase,
	fn: () => Promise<T>
): Promise<T> {
	const t0 = performance.now();
	try {
		return await fn();
	} finally {
		recordPerfPhase(timings, phase, performance.now() - t0);
	}
}

export function measurePerfPhaseSync<T>(timings: PerfTimings, phase: PerfPhase, fn: () => T): T {
	const t0 = performance.now();
	try {
		return fn();
	} finally {
		recordPerfPhase(timings, phase, performance.now() - t0);
	}
}

/** Fail CI tests when phase exceeds fail budget. */
export function assertPerfBudget(phase: PerfPhase, durationMs: number): void {
	const budget = PERF_BUDGETS[phase];
	if (durationMs > budget.fail) {
		throw new Error(
			`${phase} took ${durationMs.toFixed(0)}ms (CI fail budget ${budget.fail}ms)`
		);
	}
}

/** Log pack-time scale warning from manifest stats. */
export function warnManifestPerfStats(manifest: Record<string, string | undefined>): void {
	if (!isPerfDebug()) return;
	const raw =
		manifest[MANIFEST_PERF_KEYS.annotationEdges] ??
		(parseRuntimeStats(manifest[MANIFEST_PERF_KEYS.runtimeStats])?.annotation_edge_count as
			| number
			| undefined);
	if (raw == null) return;
	const n = typeof raw === 'number' ? raw : Number.parseInt(String(raw), 10);
	if (Number.isFinite(n) && n > PACK_ANNOTATION_EDGE_WARN) {
		console.warn(
			`[Vyasa perf] Publication has ${n} annotation edges (warn > ${PACK_ANNOTATION_EDGE_WARN}). Expect slower load/explore.`
		);
	}
}

function parseRuntimeStats(raw: string | undefined): Record<string, unknown> | undefined {
	if (!raw) return undefined;
	try {
		return JSON.parse(raw) as Record<string, unknown>;
	} catch {
		return undefined;
	}
}
