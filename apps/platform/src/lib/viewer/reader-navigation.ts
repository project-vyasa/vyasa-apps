import { publicationReaderPath, type CatalogRef } from '$lib/catalog-ref';

export function readerNavUrl(ref: CatalogRef, targetUrn: string, appBase: string): string {
	return publicationReaderPath(ref, targetUrn, appBase);
}

export function navigateReaderNext(
	flatUrns: string[],
	activeUrns: string[],
	goto: (url: string) => void,
	urlFor: (urn: string) => string
): void {
	if (!flatUrns.length) return;
	if (activeUrns.length > 0) {
		const lastActive = activeUrns[activeUrns.length - 1];
		const idx = flatUrns.indexOf(lastActive);
		if (idx !== -1 && idx < flatUrns.length - 1) {
			goto(urlFor(flatUrns[idx + 1]));
		}
		return;
	}
	goto(urlFor(flatUrns[0]));
}

export function navigateReaderPrev(
	flatUrns: string[],
	activeUrns: string[],
	currentUrn: string,
	goto: (url: string) => void,
	urlFor: (urn: string) => string
): void {
	if (!flatUrns.length) return;
	if (activeUrns.length > 0) {
		const firstActive = activeUrns[0];
		const idx = flatUrns.indexOf(firstActive);
		if (idx > 0) {
			goto(urlFor(flatUrns[idx - 1]));
		}
		return;
	}
	const firstIdx = flatUrns.findIndex((f) => f.startsWith(currentUrn));
	if (firstIdx > 0) {
		goto(urlFor(flatUrns[firstIdx - 1]));
	}
}
