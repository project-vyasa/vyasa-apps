import { describe, expect, it } from 'vitest';
import { formatReadingReport, type ReadingReportInput } from './reading-report';
import { WEAVE_DIAGNOSTICS_SCHEMA, type WeaveDiagnostics } from './weave-diagnostics';

const fine: WeaveDiagnostics = {
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

function input(over: Partial<ReadingReportInput> = {}): ReadingReportInput {
	return {
		title: 'Bhagavad Gita',
		publicationId: 'vyasa-bg',
		urn: '1:1',
		view: 'reading',
		pageUrl: 'https://example.test/viewer/read',
		apiVersion: 2,
		weave: fine,
		...over
	};
}

describe('formatReadingReport', () => {
	it('names the work, place, and view, then says the page looked fine', () => {
		const text = formatReadingReport(input());
		expect(text.startsWith('Bhagavad Gita\nPlace: 1:1\nView: reading\n')).toBe(true);
		expect(text).toContain('The page looked fine when it was drawn.');
		expect(text).toContain('"publication": "vyasa-bg"');
		expect(text).toContain('"api_version": 2');
	});

	it('states decompress and missing-column problems in plain sentences', () => {
		const text = formatReadingReport(
			input({
				weave: { ...fine, op: 'weave_layout', view: 'grid', decompress_errors: 1, grid_missing: 1 }
			})
		);
		expect(text).toContain('Some text in this publication could not be opened.');
		expect(text).toContain('A column in the grid did not match a packed stream.');
		expect(text).not.toContain('The page looked fine');
	});

	it('says there is no reading check before the first draw', () => {
		const text = formatReadingReport(input({ weave: null, view: '', urn: '' }));
		expect(text).toContain('Place: not chosen yet');
		expect(text).toContain('View: not chosen yet');
		expect(text).toContain('This place has not been drawn yet, so there is no reading check.');
		expect(text).toContain('"weave": null');
	});

	it('keeps layout JSON out of the packet', () => {
		const text = formatReadingReport(input());
		expect(text).not.toContain('"rows"');
		expect(text).not.toContain('layout');
	});
});
