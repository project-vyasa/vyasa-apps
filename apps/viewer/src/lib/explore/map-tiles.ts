import type { MapNode } from './map-nodes';

export type MapTile =
	| { kind: 'leaf'; node: MapNode & { type: 'leaf-container' } }
	| { kind: 'book'; id: string; title: string; subtitle?: string; depth: number };

/** Flatten the explore tree into one wrapping tile row: book markers then their leaves. */
export function flattenMapTiles(nodes: MapNode[]): MapTile[] {
	const tiles: MapTile[] = [];
	for (const node of nodes) {
		if (node.type === 'leaf-container') {
			tiles.push({ kind: 'leaf', node });
			continue;
		}
		tiles.push({
			kind: 'book',
			id: node.id,
			title: node.title,
			subtitle: node.subtitle,
			depth: node.depth
		});
		tiles.push(...flattenMapTiles(node.children));
	}
	return tiles;
}
