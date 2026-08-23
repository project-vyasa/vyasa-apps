/** Iframe chrome for the left gutter. Off hides the whole column (URN + annotations). */
export function viewerGutterChromeCss(
	showReferenceGutter: boolean,
	showAnnotationGutter: boolean
): string {
	const showGutter = showReferenceGutter;
	return `.urn-row {
	display: flex;
	align-items: flex-start;
	gap: ${showGutter ? '1.25rem' : '0'};
	padding: 0.75rem 0;
	border-bottom: 1px solid #eee;
	width: 100%;
}
.left-gutter {
	display: ${showGutter ? 'flex' : 'none'};
	flex-direction: column;
	gap: 0.5rem;
	flex: 0 0 ${showGutter && showAnnotationGutter ? '120px' : '50px'};
	position: sticky;
	top: 1rem;
	font-family: monospace;
	font-size: 0.85rem;
}
.urn-badge-wrapper {
	display: ${showGutter ? 'block' : 'none'};
}
.urn-content {
	flex: 1 1 0%;
	min-width: 0;
}
.gutter-annotations {
	display: ${showGutter && showAnnotationGutter ? 'flex' : 'none'};
	flex-direction: column;
	gap: 0.35rem;
	align-items: flex-start;
}`;
}
