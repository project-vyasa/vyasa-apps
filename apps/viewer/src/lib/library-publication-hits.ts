import {
	catalogHeaderLine2,
	catalogHeaderLine3,
	publicationDescriptionLine,
	publicationMetaLine
} from '$lib/library-metadata';
import type { LibraryCatalogData, RegistryInfo } from '$lib/types';
import type { PublicationEntry } from '$lib/types';

export interface LibraryPublicationHit extends Pick<PublicationEntry, 'type' | 'language'> {
	/** Composite key for ListView / CardGrid selection. */
	id: string;
	title: string;
	subtitle: string;
	description: string;
	catalogTitle: string;
	registryId: string;
	registryTitle: string;
	catalogId: string;
	publicationId: string;
}

export const PUBLICATION_SEARCH_FIELDS: (keyof PublicationEntry)[] = [
	'title',
	'id',
	'description',
	'type',
	'language',
	'license'
];

/** Filter publications within a catalog for library search. */
export function filterPublications(
	publications: PublicationEntry[],
	query: string
): PublicationEntry[] {
	const q = query.trim().toLowerCase();
	if (!q) return publications;

	return publications.filter((pub) =>
		PUBLICATION_SEARCH_FIELDS.some((field) =>
			String(pub[field] ?? '')
				.toLowerCase()
				.includes(q)
		)
	);
}

/** Whether a catalog panel should remain visible for the current query. */
export function catalogMatchesLibrarySearch(
	catalogRow: LibraryCatalogData,
	query: string,
	filteredPublications: PublicationEntry[]
): boolean {
	const q = query.trim();
	if (!q) return true;
	if (filteredPublications.length > 0) return true;

	const catalogTitle =
		catalogRow.catalog?.title?.trim() ||
		catalogRow.catalogEntry.title?.trim() ||
		catalogRow.catalogEntry.id;
	const haystack = [catalogTitle, catalogHeaderLine2(catalogRow), catalogHeaderLine3(catalogRow)].filter(
		Boolean
	) as string[];

	return haystack.some((part) => part.toLowerCase().includes(q.toLowerCase()));
}

export function publicationsForCatalogSearch(
	catalogRow: LibraryCatalogData,
	query: string
): PublicationEntry[] {
	const publications = catalogRow.catalog?.publications || [];
	return filterPublications(publications, query);
}

export interface RegistrySearchStats {
	catalogs: number;
	publications: number;
}

export function registrySearchStats(
	catalogRows: LibraryCatalogData[],
	query: string,
	isCatalogHidden: (row: LibraryCatalogData) => boolean
): RegistrySearchStats {
	const q = query.trim();
	if (!q) {
		const visible = catalogRows.filter((row) => !isCatalogHidden(row));
		const publications = visible.reduce(
			(sum, row) => sum + (row.catalog?.publications?.length ?? 0),
			0
		);
		return { catalogs: visible.length, publications };
	}

	let catalogs = 0;
	let publications = 0;
	for (const row of catalogRows) {
		if (isCatalogHidden(row)) continue;
		const filtered = publicationsForCatalogSearch(row, q);
		if (!catalogMatchesLibrarySearch(row, q, filtered)) continue;
		catalogs += 1;
		publications += filtered.length;
	}
	return { catalogs, publications };
}

export function countLibrarySearchResults(
	catalogRows: LibraryCatalogData[],
	query: string,
	isCatalogHidden: (row: LibraryCatalogData) => boolean
): number {
	return registrySearchStats(catalogRows, query, isCatalogHidden).publications;
}

export const PUBLICATION_HIT_SEARCH_FIELDS: (keyof LibraryPublicationHit)[] = [
	'title',
	'subtitle',
	'description',
	'catalogTitle',
	'publicationId'
];

/** Flatten loaded catalogs into publication rows for global library search. */
export function buildLibraryPublicationHits(
	catalogs: LibraryCatalogData[],
	registries: RegistryInfo[]
): LibraryPublicationHit[] {
	const registryTitleById = new Map(registries.map((r) => [r.id, r.title]));
	const hits: LibraryPublicationHit[] = [];

	for (const row of catalogs) {
		const publications = row.catalog?.publications;
		if (!publications?.length) continue;

		const catalogTitle =
			row.catalog?.title?.trim() ||
			row.catalogEntry.title?.trim() ||
			row.catalogEntry.id;
		const registryTitle = registryTitleById.get(row.registryId) || row.registryId;

		for (const pub of publications) {
			hits.push({
				id: `${row.registryId}/${row.catalogEntry.id}/${pub.id}`,
				title: pub.title,
				subtitle: publicationMetaLine(pub),
				description: publicationDescriptionLine(pub),
				catalogTitle,
				registryId: row.registryId,
				registryTitle,
				catalogId: row.catalogEntry.id,
				publicationId: pub.id,
				type: pub.type,
				language: pub.language
			});
		}
	}

	return hits;
}
