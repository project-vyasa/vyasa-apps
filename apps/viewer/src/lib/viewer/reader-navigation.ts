import { publicationReaderPath, type CatalogRef } from '$lib/catalog-ref';
import { matchUrns } from '$lib/urn-utils';
import { normalizeUrnInput } from '$lib/viewer/urn-recents';

export function readerNavUrl(ref: CatalogRef, targetUrn: string, appBase: string): string {
	return publicationReaderPath(ref, targetUrn, appBase);
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

function orderedPrefixes(flatUrns: string[], depth: number): string[] {
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
	return out;
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
	leafDepth: number
): string | null {
	const urn = normalizeUrnInput(raw);
	if (!urn || urn === 'root') {
		return initialReaderUrn(flatUrns, leafDepth);
	}
	return resolveReaderAddress(urn, flatUrns, leafDepth)?.urn ?? null;
}

/**
 * Canonical reader address. A short prefix (RV `1`) expands to the first
 * leaf-container (`1:1`). Full-depth and ranged URNs stay leaves.
 */
export function resolveReaderAddress(
	raw: string,
	flatUrns: string[],
	leafDepth: number
): ReaderAddress | null {
	const urn = normalizeUrnInput(raw);
	if (!urn || urn === 'root') return null;
	if (leafDepth < 1 || flatUrns.length === 0) {
		return { urn, mode: 'leaf' };
	}

	const parts = urn.split(':');
	const hasRange = parts.some((part) => part.includes('-'));
	const matches = matchUrns(urn, flatUrns);
	if (matches.length === 0) return null;

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
	urlFor: (urn: string) => string
): void {
	const depth = leafContainerDepth(leafDepth);
	if (depth === 0) {
		stepLeaf(flatUrns, currentUrn, direction, goto, urlFor);
		return;
	}
	const prefixes = orderedPrefixes(flatUrns, depth);
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
	urlFor: (urn: string) => string
): void {
	if (!flatUrns.length) return;
	const address = resolveReaderAddress(rawUrn, flatUrns, leafDepth);
	if (!address) return;
	if (address.mode === 'leaf') {
		stepLeaf(flatUrns, address.urn, direction, goto, urlFor);
		return;
	}
	stepContainer(flatUrns, address.urn, leafDepth, direction, goto, urlFor);
}

export function navigateReaderNext(
	flatUrns: string[],
	currentUrn: string,
	leafDepth: number,
	goto: (url: string) => void,
	urlFor: (urn: string) => string
): void {
	stepFromAddress(flatUrns, currentUrn, leafDepth, 1, goto, urlFor);
}

export function navigateReaderPrev(
	flatUrns: string[],
	currentUrn: string,
	leafDepth: number,
	goto: (url: string) => void,
	urlFor: (urn: string) => string
): void {
	stepFromAddress(flatUrns, currentUrn, leafDepth, -1, goto, urlFor);
}
