import type { TreeNode } from '@project-vyasa/vyasa-ui';

/** Workspace files Play can open. Publisher assets copied in for the compiler stay out of the tree. */
export function workspaceSourcePaths(files: Record<string, string>): string[] {
	return Object.keys(files)
		.filter((path) => path.length > 0 && !path.startsWith('vysamples/'))
		.sort();
}

export function sourceTree(paths: string[]): TreeNode[] {
	const roots: TreeNode[] = [];
	for (const path of paths) {
		const parts = path.split('/').filter(Boolean);
		let siblings = roots;
		let prefix = '';
		for (let index = 0; index < parts.length; index++) {
			const part = parts[index];
			const isFile = index === parts.length - 1;
			prefix = prefix ? `${prefix}/${part}` : part;
			const id = isFile ? path : `dir:${prefix}`;
			let node = siblings.find((item) => item.id === id);
			if (!node) {
				node = isFile ? { id, label: part } : { id, label: part, children: [] };
				siblings.push(node);
			}
			if (!isFile) siblings = node.children ?? [];
		}
	}
	return sortTree(roots);
}

function sortTree(nodes: TreeNode[]): TreeNode[] {
	for (const node of nodes) {
		if (node.children) node.children = sortTree(node.children);
	}
	return nodes.sort(compareNodes);
}

function compareNodes(a: TreeNode, b: TreeNode): number {
	const aDir = a.children ? 0 : 1;
	const bDir = b.children ? 0 : 1;
	if (aDir !== bDir) return aDir - bDir;
	return a.label.localeCompare(b.label);
}
