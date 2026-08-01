import type { LibraryCatalogData } from './types';
import type { PublicationEntry } from './types';

export function joinMetaParts(parts: Array<string | undefined | null>): string {
	return parts.map((p) => p?.trim()).filter((p): p is string => Boolean(p)).join(' · ');
}

/** Line 2 for catalog cards: publisher + publication count. */
export function catalogHeaderLine2(row: LibraryCatalogData): string {
	const publisher = row.catalog?.publisher?.title;
	const count = row.catalog?.publications?.length ?? 0;
	const countLabel = count === 1 ? '1 publication' : `${count} publications`;
	return joinMetaParts([publisher, count > 0 ? countLabel : undefined]);
}

/** Line 3 for catalog cards: catalog description. */
export function catalogHeaderLine3(row: LibraryCatalogData): string {
	return row.catalog?.description?.trim() || row.catalogEntry.description?.trim() || '';
}

/** Line 2 for publication rows: type, language, license. */
export function publicationMetaLine(item: PublicationEntry): string {
	return joinMetaParts([item.type, item.language, item.license]);
}

/** Line 3 for publication rows: description. */
export function publicationDescriptionLine(item: PublicationEntry): string {
	return item.description?.trim() || '';
}

/** Up to two muted badges for publication rows (type + language). */
export function publicationDisplayBadges(item: PublicationEntry): string[] {
	const badges: string[] = [];
	if (item.type?.trim()) badges.push(item.type.trim());
	if (item.language?.trim()) badges.push(item.language.trim());
	return badges.slice(0, 2);
}
