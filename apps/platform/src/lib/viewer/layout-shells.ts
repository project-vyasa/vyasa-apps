/**
 * Compose publisher view layout inside the theme shell.
 * Grid uses theme_layout only. Craft views wrap items in `{view}_layout` first.
 */
export function applyLayoutShells(
	itemsHtml: string,
	activeView: string,
	projections: Record<string, string>
): string {
	const theme = projections['theme_layout'];
	const viewLayout =
		activeView !== 'grid' ? projections[`${activeView}_layout`] : undefined;

	let html = itemsHtml;
	if (viewLayout && viewLayout !== theme && viewLayout.includes('{{ body }}')) {
		html = viewLayout.replace('{{ body }}', html);
	}
	if (theme?.includes('{{ body }}')) {
		return theme.replace('{{ body }}', html);
	}
	if (viewLayout?.includes('{{ body }}') && html === itemsHtml) {
		return viewLayout.replace('{{ body }}', html);
	}
	return html;
}
