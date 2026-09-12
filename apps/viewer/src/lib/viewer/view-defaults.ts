export function pickInitialActiveView(
	views: string[],
	opts: { isDocumentLayout?: boolean; preferNonGrid?: boolean } = {}
): string {
	if (opts.isDocumentLayout && views.includes('reading')) return 'reading';
	if (opts.preferNonGrid) {
		const stacked = views.find((view) => view !== 'grid');
		if (stacked) return stacked;
	}
	if (views.includes('grid')) return 'grid';
	return views[0] || 'grid';
}

export function defaultReferenceGutterVisible(handset: boolean): boolean {
	return !handset;
}
