import type { MapNode } from '../components/ExploreView.svelte';

export type MapTile =
	| { kind: 'leaf'; node: MapNode & { type: 'leaf-container' } }
	| { kind: 'book'; id: string; title: string };

/** Flatten the explore tree into one wrapping tile row: book markers then their leaves. */
export function flattenMapTiles(nodes: MapNode[]): MapTile[] {
	const tiles: MapTile[] = [];
	for (const node of nodes) {
		if (node.type === 'leaf-container') {
			tiles.push({ kind: 'leaf', node });
			continue;
		}
		tiles.push({ kind: 'book', id: node.id, title: node.title });
		tiles.push(...flattenMapTiles(node.children));
	}
	return tiles;
}
