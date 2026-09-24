import { catalogLeafIndices, isCatalogRangesNode } from './urn-utils';
import { formatContainerDisplay } from '$lib/viewer/sidebar-items';

export type MapNode =
	| {
			type: 'branch';
			id: string;
			title: string;
			subtitle?: string;
			depth: number;
			children: MapNode[];
	  }
	| {
			type: 'leaf-container';
			id: string;
			title: string;
			subtitle?: string;
			depth: number;
			leafIndices: number[];
	  };

export interface ParseMapTreeOptions {
	urnComponents: string[];
	titles: Record<string, string>;
	structureLabel: (componentKey: string, fallback: string) => string;
}

function containerLabels(
	pathParts: string[],
	options: ParseMapTreeOptions
): { title: string; subtitle?: string } {
	return formatContainerDisplay(
		pathParts,
		options.urnComponents,
		options.titles,
		options.structureLabel
	);
}

/** Build the explore map tree with the same container naming rules as the reader sidebar. */
export function parseMapTree(
	tree: unknown,
	options: ParseMapTreeOptions,
	prefix = ''
): MapNode[] {
	if (Array.isArray(tree) || isCatalogRangesNode(tree)) {
		const leafIndices = catalogLeafIndices(tree);
		if (leafIndices.length === 0) return [];
		const pathParts = prefix ? prefix.split(':') : [];
		const { title, subtitle } = containerLabels(pathParts, options);
		return [
			{
				type: 'leaf-container',
				id: prefix,
				title,
				subtitle,
				depth: Math.max(0, pathParts.length - 1),
				leafIndices
			}
		];
	}

	const nodes: MapNode[] = [];
	const groupKeys = Object.keys(tree as Record<string, unknown>).sort(
		(a, b) => Number(a) - Number(b)
	);

	for (const key of groupKeys) {
		const subNode = (tree as Record<string, unknown>)[key];
		const fullId = prefix ? `${prefix}:${key}` : key;
		const pathParts = fullId.split(':');
		const { title, subtitle } = containerLabels(pathParts, options);

		if (Array.isArray(subNode) || isCatalogRangesNode(subNode)) {
			const leafIndices = catalogLeafIndices(subNode);
			if (leafIndices.length === 0) continue;
			nodes.push({
				type: 'leaf-container',
				id: fullId,
				title,
				subtitle,
				depth: pathParts.length - 1,
				leafIndices
			});
		} else if (typeof subNode === 'object' && subNode !== null) {
			nodes.push({
				type: 'branch',
				id: fullId,
				title,
				subtitle,
				depth: pathParts.length - 1,
				children: parseMapTree(subNode, options, fullId)
			});
		}
	}

	return nodes;
}
