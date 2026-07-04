export function flattenTree(node: any, prefix: string = ""): string[] {
	const flatUrns: string[] = [];
	if (Array.isArray(node)) {
		for (const val of node) {
			flatUrns.push(prefix ? `${prefix}:${val}` : `${val}`);
		}
	} else if (typeof node === 'object' && node !== null) {
		// sort keys numerically if possible
		const keys = Object.keys(node).sort((a, b) => Number(a) - Number(b));
		for (const k of keys) {
			flatUrns.push(...flattenTree(node[k], prefix ? `${prefix}:${k}` : `${k}`));
		}
	}
	return flatUrns;
}

export function matchUrns(targetUrn: string, flatUrns: string[]): string[] {
	if (targetUrn === 'root') {
		targetUrn = flatUrns.length > 0 ? flatUrns[0] : '1';
	}
	
	// If targetUrn matches a full leaf, fetch 1. If it's a prefix or range, figure out how many leaf urns match.
	return flatUrns.filter(u => {
		if (u === targetUrn || u.startsWith(targetUrn + ':')) return true;
		
		const urnParts = u.split(':');
		const targetParts = targetUrn.split(':');
		
		if (targetParts.length > urnParts.length) return false;
		
		for (let i = 0; i < targetParts.length; i++) {
			const t = targetParts[i];
			const partU = parseInt(urnParts[i], 10);
			
			if (t.includes('-')) {
				const [start, end] = t.split('-').map(Number);
				if (partU >= start && partU <= end) {
					continue;
				}
				return false;
			} else {
				if (partU !== parseInt(t, 10)) return false;
			}
		}
		return true;
	});
}
