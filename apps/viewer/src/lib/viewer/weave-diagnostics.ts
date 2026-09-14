/** Contract: `vyasa/notes/vyasa-apps-weave-diagnostics.md` (ABI 2). JSON is snake_case. */

export const WEAVE_DIAGNOSTICS_SCHEMA = 'vyasa.weave_diagnostics.v1' as const;

export const EXPECTED_VIEWER_API_VERSION = 2;

export type WeaveEventKind =
	| 'refer_cycle'
	| 'refer_fallback'
	| 'decompress_error'
	| 'grid_scraped'
	| 'grid_missing';

export interface WeaveEvent {
	kind: WeaveEventKind | string;
	urn: string;
	stream: string;
	detail: string;
}

export interface WeaveDiagnostics {
	schema: typeof WEAVE_DIAGNOSTICS_SCHEMA | string;
	api_version: number;
	op: 'weave_view' | 'weave_layout' | string;
	view: string;
	urn_count: number;
	refer_resolved: number;
	refer_fallback: number;
	refer_cycle: number;
	decompress_errors: number;
	grid_keyed: number;
	grid_scraped: number;
	grid_missing: number;
	events_truncated: boolean;
	events: WeaveEvent[];
}

export function parseWeaveDiagnostics(raw: string): WeaveDiagnostics | null {
	try {
		const parsed = JSON.parse(raw) as WeaveDiagnostics;
		if (!parsed || parsed.schema !== WEAVE_DIAGNOSTICS_SCHEMA) return null;
		return parsed;
	} catch {
		return null;
	}
}

export function weaveHasProblems(diag: WeaveDiagnostics): boolean {
	return (
		diag.refer_fallback > 0 ||
		diag.refer_cycle > 0 ||
		diag.decompress_errors > 0 ||
		diag.grid_scraped > 0 ||
		diag.grid_missing > 0
	);
}

export interface WeaveDiagnosticsContext {
	publicationId?: string;
	urn?: string;
}

/** Last parsed report (overwritten each weave). Do not read from a later $effect of another weave. */
let lastReport: WeaveDiagnostics | null = null;

export function lastReportedWeaveDiagnostics(): WeaveDiagnostics | null {
	return lastReport;
}

/**
 * Log every weave. Beacon only when problem counters are non-zero.
 * Never includes woven HTML. Does not throw.
 */
export function reportWeaveDiagnostics(
	diag: WeaveDiagnostics | null,
	context: WeaveDiagnosticsContext = {}
): void {
	lastReport = diag;
	if (!diag) {
		console.info('[vyasa weave]', 'no diagnostics (null parse or ABI < 2)');
		return;
	}
	console.info('[vyasa weave]', diag);
	if (diag.decompress_errors > 0 || diag.refer_cycle > 0) {
		console.warn('[vyasa weave]', {
			decompress_errors: diag.decompress_errors,
			refer_cycle: diag.refer_cycle,
			events: diag.events
		});
	}
	if (!weaveHasProblems(diag)) return;
	const isProd =
		typeof import.meta !== 'undefined' &&
		(import.meta as ImportMeta & { env?: { PROD?: boolean; DEV?: boolean } }).env?.PROD === true;
	if (!isProd) return;
	console.info('[vyasa weave beacon]', {
		schema: diag.schema,
		api_version: diag.api_version,
		op: diag.op,
		view: diag.view,
		urn_count: diag.urn_count,
		refer_fallback: diag.refer_fallback,
		refer_cycle: diag.refer_cycle,
		decompress_errors: diag.decompress_errors,
		grid_keyed: diag.grid_keyed,
		grid_scraped: diag.grid_scraped,
		grid_missing: diag.grid_missing,
		events_truncated: diag.events_truncated,
		events: diag.events,
		publicationId: context.publicationId,
		urn: context.urn
	});
}
