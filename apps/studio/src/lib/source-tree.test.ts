import { describe, expect, it } from 'vitest';
import { sourceTree, workspaceSourcePaths } from './source-tree';

describe('sourceTree', () => {
	it('groups workspace files and hides publisher copies', () => {
		const paths = workspaceSourcePaths({
			'content/mula/1.vy': 'm',
			'content/iast/1.vy': 'i',
			'templates/html/default.html': '<p>',
			'context.vy': 'c',
			'vysamples/styles/indic-verse.css': 'css'
		});
		expect(paths).not.toContain('vysamples/styles/indic-verse.css');
		const tree = sourceTree(paths);
		expect(tree.map((node) => node.label)).toEqual(['content', 'templates', 'context.vy']);
		const content = tree.find((node) => node.label === 'content');
		expect(content?.children?.map((node) => node.label)).toEqual(['iast', 'mula']);
		expect(content?.id).toBe('dir:content');
		const mula = content?.children?.find((node) => node.label === 'mula');
		expect(mula?.children?.[0]).toMatchObject({ id: 'content/mula/1.vy', label: '1.vy' });
	});
});
