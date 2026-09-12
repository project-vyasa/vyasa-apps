import { describe, expect, it } from 'vitest';
import { flattenMapTiles } from './map-tiles';
import type { MapNode } from '../components/ExploreView.svelte';

describe('flattenMapTiles', () => {
	it('keeps a flat chapter list as leaf tiles', () => {
		const nodes: MapNode[] = [
			{ type: 'leaf-container', id: '1', title: 'Chapter 1', leafIndices: [1, 2] },
			{ type: 'leaf-container', id: '2', title: 'Chapter 2', leafIndices: [1] }
		];
		expect(flattenMapTiles(nodes)).toEqual([
			{ kind: 'leaf', node: nodes[0] },
			{ kind: 'leaf', node: nodes[1] }
		]);
	});

	it('inserts a book marker before each branch’s leaves', () => {
		const nodes: MapNode[] = [
			{
				type: 'branch',
				id: '1',
				title: 'Mandala 1',
				children: [{ type: 'leaf-container', id: '1:1', title: 'Sukta 1', leafIndices: [1] }]
			},
			{
				type: 'branch',
				id: '2',
				title: 'Mandala 2',
				children: [{ type: 'leaf-container', id: '2:1', title: 'Sukta 1', leafIndices: [1, 2] }]
			}
		];
		const tiles = flattenMapTiles(nodes);
		expect(tiles.map((t) => [t.kind, t.kind === 'book' ? t.id : t.node.id])).toEqual([
			['book', '1'],
			['leaf', '1:1'],
			['book', '2'],
			['leaf', '2:1']
		]);
	});
});
