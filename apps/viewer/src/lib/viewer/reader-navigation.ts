import { publicationReaderPath, type CatalogRef } from '$lib/catalog-ref';
import { matchUrns } from '$lib/urn-utils';
import { normalizeUrnInput } from '$lib/viewer/urn-recents';

export function readerNavUrl(
	ref: CatalogRef,
	targetUrn: string,
	appBase: string,
	query?: Record<string, string | undefined>
): string {
	const path = publicationReaderPath(ref, targetUrn, appBase);
	if (!query) return path;
	const params = new URLSearchParams();
	for (const [key, value] of Object.entries(query)) {
		if (value) params.set(key, value);
	}
	const qs = params.toString();
	return qs ? `${path}?${qs}` : path;
}

export type ReaderAddressMode = 'leaf' | 'container';

export interface ReaderAddress {
	urn: string;
	mode: ReaderAddressMode;
}

/** Leaf-container depth: sukta in RV (m:s:r), adhyaya in BG (adhyaya:verse). */
export function leafContainerDepth(leafDepth: number): number {
	return Math.max(0, leafDepth - 1);
}

function compareUrn(a: string, b: string): number {
	const ap = a.split(':');
	const bp = b.split(':');
	const n = Math.max(ap.length, bp.length);
	for (let i = 0; i < n; i++) {
		const av = ap[i] ?? '';
		const bv = bp[i] ?? '';
		const an = Number(av);
		const bn = Number(bv);
		if (Number.isFinite(an) && Number.isFinite(bn) && an !== bn) return an - bn;
		if (av !== bv) return av < bv ? -1 : 1;
	}
	return 0;
}

function orderedPrefixes(flatUrns: string[], depth: number, containerUrns: string[] = []): string[] {
	const out: string[] = [];
	const seen = new Set<string>();
	for (const urn of flatUrns) {
		const parts = urn.split(':');
		if (parts.length < depth) continue;
		const key = parts.slice(0, depth).join(':');
		if (seen.has(key)) continue;
		seen.add(key);
		out.push(key);
	}
	for (const urn of containerUrns) {
		if (seen.has(urn) || urn.split(':').length !== depth) continue;
		seen.add(urn);
		let index = out.findIndex((existing) => compareUrn(existing, urn) > 0);
		if (index < 0) index = out.length;
		out.splice(index, 0, urn);
	}
	return out;
}

function absentAddress(urn: string, containerUrns: string[]): string | null {
	if (containerUrns.includes(urn)) return urn;
	const stripped = urn.replace(/:0$/, '');
	if (stripped !== urn && containerUrns.includes(stripped)) return stripped;
	return null;
}

/** First leaf-container (RV sukta, BG chapter) after opening a publication. */
export function initialReaderUrn(flatUrns: string[], leafDepth: number): string | null {
	if (flatUrns.length === 0) return null;
	const firstLeaf = flatUrns[0];
	const depth = leafContainerDepth(leafDepth);
	if (depth < 1) return firstLeaf;
	const parts = firstLeaf.split(':');
	if (parts.length < depth) return firstLeaf;
	return parts.slice(0, depth).join(':');
}

/**
 * URN to weave for the current route. `root` (catalog open with no path)
 * becomes the first leaf-container; other addresses go through
 * {@link resolveReaderAddress}.
 */
export function readerWeaveUrn(
	raw: string,
	flatUrns: string[],
	leafDepth: number,
	spanContainerUrn?: string | null,
	containerUrns: string[] = []
): string | null {
	if (spanContainerUrn) return spanContainerUrn;
	const urn = normalizeUrnInput(raw);
	if (!urn || urn === 'root') {
		return initialReaderUrn(flatUrns, leafDepth);
	}
	return resolveReaderAddress(urn, flatUrns, leafDepth, containerUrns)?.urn ?? null;
}

/**
 * Canonical reader address. A short prefix (RV `1`) expands to the first
 * leaf-container (`1:1`). Full-depth and ranged URNs stay leaves.
 */
export function resolveReaderAddress(
	raw: string,
	flatUrns: string[],
	leafDepth: number,
	containerUrns: string[] = []
): ReaderAddress | null {
	const urn = normalizeUrnInput(raw);
	if (!urn || urn === 'root') return null;
	if (leafDepth < 1 || flatUrns.length === 0) {
		const absent = absentAddress(urn, containerUrns);
		if (absent) return { urn: absent, mode: 'container' };
		return { urn, mode: 'leaf' };
	}

	const parts = urn.split(':');
	const hasRange = parts.some((part) => part.includes('-'));
	const matches = matchUrns(urn, flatUrns);
	if (matches.length === 0) {
		const absent = absentAddress(urn, containerUrns);
		if (absent) return { urn: absent, mode: 'container' };
		return null;
	}

	if (hasRange || parts.length >= leafDepth) {
		return { urn, mode: 'leaf' };
	}

	const containerDepth = leafContainerDepth(leafDepth);
	if (containerDepth === 0) {
		return { urn: matches[0], mode: 'leaf' };
	}

	const resolved = matches[0].split(':').slice(0, containerDepth).join(':');
	return { urn: resolved, mode: 'container' };
}

function stepLeaf(
	flatUrns: string[],
	currentUrn: string,
	direction: 1 | -1,
	goto: (url: string) => void,
	urlFor: (urn: string) => string
): void {
	const matches = matchUrns(currentUrn, flatUrns);
	const edge = direction === 1 ? matches[matches.length - 1] : matches[0];
	const idx = edge ? flatUrns.indexOf(edge) : -1;
	if (idx < 0) return;
	const nextIdx = idx + direction;
	if (nextIdx < 0 || nextIdx >= flatUrns.length) return;
	goto(urlFor(flatUrns[nextIdx]));
}

function stepContainer(
	flatUrns: string[],
	currentUrn: string,
	leafDepth: number,
	direction: 1 | -1,
	goto: (url: string) => void,
	urlFor: (urn: string) => string,
	containerUrns: string[] = []
): void {
	const depth = leafContainerDepth(leafDepth);
	if (depth === 0) {
		stepLeaf(flatUrns, currentUrn, direction, goto, urlFor);
		return;
	}
	const prefixes = orderedPrefixes(flatUrns, depth, containerUrns);
	const idx = prefixes.indexOf(currentUrn);
	if (idx < 0) return;
	const nextIdx = idx + direction;
	if (nextIdx < 0 || nextIdx >= prefixes.length) return;
	goto(urlFor(prefixes[nextIdx]));
}

function stepFromAddress(
	flatUrns: string[],
	rawUrn: string,
	leafDepth: number,
	direction: 1 | -1,
	goto: (url: string) => void,
	urlFor: (urn: string) => string,
	containerUrns: string[] = []
): void {
	if (!flatUrns.length && containerUrns.length === 0) return;
	const address = resolveReaderAddress(rawUrn, flatUrns, leafDepth, containerUrns);
	if (!address) return;
	if (address.mode === 'leaf') {
		stepLeaf(flatUrns, address.urn, direction, goto, urlFor);
		return;
	}
	stepContainer(flatUrns, address.urn, leafDepth, direction, goto, urlFor, containerUrns);
}

export function navigateReaderNext(
	flatUrns: string[],
	currentUrn: string,
	leafDepth: number,
	goto: (url: string) => void,
	urlFor: (urn: string) => string,
	containerUrns: string[] = []
): void {
	stepFromAddress(flatUrns, currentUrn, leafDepth, 1, goto, urlFor, containerUrns);
}

export function navigateReaderPrev(
	flatUrns: string[],
	currentUrn: string,
	leafDepth: number,
	goto: (url: string) => void,
	urlFor: (urn: string) => string,
	containerUrns: string[] = []
): void {
	stepFromAddress(flatUrns, currentUrn, leafDepth, -1, goto, urlFor, containerUrns);
}
