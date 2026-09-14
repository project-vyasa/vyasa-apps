import { describe, expect, it } from 'vitest';
import {
	parseWeaveDiagnostics,
	weaveHasProblems,
	WEAVE_DIAGNOSTICS_SCHEMA
} from './weave-diagnostics';

const sample = {
	schema: WEAVE_DIAGNOSTICS_SCHEMA,
	api_version: 2,
	op: 'weave_view',
	view: 'reading',
	urn_count: 1,
	refer_resolved: 0,
	refer_fallback: 0,
	refer_cycle: 0,
	decompress_errors: 0,
	grid_keyed: 2,
	grid_scraped: 0,
	grid_missing: 0,
	events_truncated: false,
	events: []
};

describe('parseWeaveDiagnostics', () => {
	it('accepts snake_case ABI 2 JSON', () => {
		expect(parseWeaveDiagnostics(JSON.stringify(sample))?.grid_keyed).toBe(2);
	});

	it('rejects the wrong schema', () => {
		expect(parseWeaveDiagnostics(JSON.stringify({ ...sample, schema: 'other' }))).toBeNull();
	});
});

describe('weaveHasProblems', () => {
	it('is false when only keyed counts are set', () => {
		expect(weaveHasProblems(sample)).toBe(false);
	});

	it('is true for scraped or missing grid columns', () => {
		expect(weaveHasProblems({ ...sample, grid_scraped: 1 })).toBe(true);
		expect(weaveHasProblems({ ...sample, grid_missing: 1 })).toBe(true);
	});
});
