import { activePublication } from '$lib/viewer/active-publication.svelte';
import { lastReportedWeaveDiagnostics } from '$lib/viewer/weave-diagnostics';
import { type ReadingReportInput } from '$lib/viewer/reading-report';

let lastReadingView = '';
let lastApiVersion: number | null = null;

/** Last view the reader actually showed. The report uses this when weave has not run. */
export function rememberReadingView(view: string): void {
	if (view) lastReadingView = view;
}

/** ABI reported by the loaded viewer runtime. */
export function rememberViewerApiVersion(version: number): void {
	lastApiVersion = version;
}

export function readingReportInput(): ReadingReportInput {
	const urn = activePublication.lastUrn;
	const weave = lastReportedWeaveDiagnostics();
	return {
		title: activePublication.title || activePublication.publicationId || 'This publication',
		publicationId: activePublication.publicationId,
		urn: urn && urn !== 'root' ? urn : '',
		view: weave?.view || lastReadingView,
		pageUrl: activePublication.httpReaderUrl,
		apiVersion: weave?.api_version ?? lastApiVersion,
		weave
	};
}
