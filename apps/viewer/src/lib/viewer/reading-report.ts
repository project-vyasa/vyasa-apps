import type { WeaveDiagnostics } from '$lib/viewer/weave-diagnostics';

export type ReadingReportInput = {
	title: string;
	publicationId: string;
	urn: string;
	view: string;
	pageUrl: string;
	apiVersion: number | null;
	weave: WeaveDiagnostics | null;
};

function problemSentences(weave: WeaveDiagnostics): string[] {
	const lines: string[] = [];
	if (weave.decompress_errors > 0) {
		lines.push('Some text in this publication could not be opened.');
	}
	if (weave.grid_missing > 0) {
		lines.push('A column in the grid did not match a packed stream.');
	}
	if (weave.grid_scraped > 0) {
		lines.push('A column was taken from the page text instead of the packed stream.');
	}
	if (weave.refer_cycle > 0) {
		lines.push('A cross-reference pointed back at itself.');
	}
	if (weave.refer_fallback > 0) {
		lines.push('A cross-reference could not be found, so a stand-in was shown.');
	}
	if (weave.events_truncated) {
		lines.push('Some details were left out of the check.');
	}
	if (!lines.length) {
		lines.push('The page looked fine when it was drawn.');
	}
	return lines;
}

/** Plain sentences, then a packet for a publisher or the Vyasa team. No layout JSON. */
export function formatReadingReport(input: ReadingReportInput): string {
	const place = input.urn || 'not chosen yet';
	const view = input.view || 'not chosen yet';
	const sentences = input.weave
		? problemSentences(input.weave)
		: ['This place has not been drawn yet, so there is no reading check.'];
	const packet = {
		api_version: input.apiVersion,
		publication: input.publicationId,
		page: input.pageUrl,
		urn: input.urn,
		view: input.view,
		weave: input.weave
	};
	return [
		input.title,
		`Place: ${place}`,
		`View: ${view}`,
		...sentences,
		'',
		'---',
		JSON.stringify(packet, null, 2)
	].join('\n');
}
