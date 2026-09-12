import { collectLeafUrns } from '$lib/explore/urn-utils';

/** Flatten a catalog tree to relative leaf URNs (supports legacy arrays and ranges_v1). */
export function flattenTree(node: unknown, prefix = ''): string[] {
	return collectLeafUrns(node, prefix);
}

export function matchUrns(targetUrn: string, flatUrns: string[]): string[] {
	if (targetUrn === 'root') {
		targetUrn = flatUrns.length > 0 ? flatUrns[0] : '1';
	}

	// If targetUrn matches a full leaf, fetch 1. If it's a prefix or range, figure out how many leaf urns match.
	return flatUrns.filter((u) => {
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
