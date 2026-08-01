import type { AnnotationEntry } from '$lib/types';

const CORE_ANNOTATION_LABELS = new Set(['Action', 'Note', 'Event', 'Attribute']);

/**
 * Annotate value nodes use capitalized label + `{ value: entityKey }`
 * (see vyasac graph.rs annotate handler).
 */
export function annotateNodeLabelToFacetType(label: string): string | undefined {
	if (CORE_ANNOTATION_LABELS.has(label)) return undefined;
	if (!label || label[0] !== label[0].toUpperCase() || label[0] === label[0].toLowerCase()) {
		return undefined;
	}
	return `attr:${label.charAt(0).toLowerCase()}${label.slice(1).toLowerCase()}`;
}

/** Graph value-node annotation → categorical facet bindings. */
export function graphFacetBindings(
	ann: AnnotationEntry
): Array<{ typeId: string; valueId: string }> {
	const bindings: Array<{ typeId: string; valueId: string }> = [];
	if (ann.label === 'Attribute' && ann.attributes) {
		for (const [attrKey, rawVal] of Object.entries(ann.attributes)) {
			if (rawVal == null || rawVal === '') continue;
			bindings.push({
				typeId: `attr:${attrKey.toLowerCase()}`,
				valueId: String(rawVal)
			});
		}
		return bindings;
	}
	const annotateValue = ann.attributes?.value;
	if (annotateValue == null || annotateValue === '') return bindings;
	const facetType = annotateNodeLabelToFacetType(ann.label);
	if (facetType) {
		bindings.push({ typeId: facetType, valueId: String(annotateValue) });
	}
	return bindings;
}

/** Entity value-node annotation suitable for reader gutter badges (not Note/Event). */
export function entityAnnotateBinding(
	ann: AnnotationEntry
): { facetAttr: string; entityId: string } | undefined {
	const bindings = graphFacetBindings(ann);
	if (bindings.length !== 1) return undefined;
	const { typeId, valueId } = bindings[0];
	if (!typeId.startsWith('attr:')) return undefined;
	return { facetAttr: typeId.slice('attr:'.length), entityId: valueId };
}
