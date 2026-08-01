/** Reserved registry id for Settings-driven custom catalogs and registries. */
export const LOCAL_REGISTRY_ID = 'local';

/** Default id for the Adi global registry (`vyasa-docs/registry.json`). */
export const ADI_REGISTRY_ID = 'adi';

/** Registry ids reserved for platform semantics — not valid catalog or publication ids. */
export const RESERVED_REGISTRY_IDS = new Set(['adi', 'local', 'global']);

/** Unique catalog identity for opening a publication in the viewer. */
export interface CatalogRef {
	registryId: string;
	catalogId: string;
	publicationId: string;
}

/** Cross-publication link (commentary → source verse, etc.). */
export interface CatalogLink extends CatalogRef {
	/** Structure-relative path only (e.g. `2:47`) — no urn prefix. */
	urn?: string;
}

export function catalogRefKey(ref: CatalogRef): string {
	return `${ref.registryId}/${ref.catalogId}/${ref.publicationId}`;
}

/** Stable key for a catalog listing (`registryId/catalogId`). */
export function catalogListingKey(registryId: string, catalogId: string): string {
	return `${registryId}/${catalogId}`;
}

/** Reader path: /{registry}/{catalog}/{publication}[/{urn}] */
export function publicationReaderPath(ref: CatalogRef, urn?: string, appBase = ''): string {
	const prefix = appBase.replace(/\/$/, '');
	let path = `${prefix}/${ref.registryId}/${ref.catalogId}/${ref.publicationId}`;
	if (urn && urn !== 'root') {
		path += `/${urn}`;
	}
	return path || '/';
}

export function publicationExplorePath(ref: CatalogRef, appBase = ''): string {
	const prefix = appBase.replace(/\/$/, '');
	return `${prefix}/${ref.registryId}/${ref.catalogId}/${ref.publicationId}/explore`;
}

export function catalogLibraryPath(registryId: string, catalogId: string, appBase = ''): string {
	const prefix = appBase.replace(/\/$/, '');
	return `${prefix}/${registryId}/${catalogId}`;
}

export function registryLibraryPath(registryId: string, appBase = ''): string {
	const prefix = appBase.replace(/\/$/, '');
	return `${prefix}/${registryId}`;
}

/** Durable link: vyasa://registry/catalog/publication[/urn] */
export function catalogLinkToVyasaUri(link: CatalogLink): string {
	const parts = [link.registryId, link.catalogId, link.publicationId];
	if (link.urn && link.urn !== 'root') {
		parts.push(link.urn);
	}
	return `vyasa://${parts.join('/')}`;
}

/** HTTP variant inferrable from a Vyasa URI given deployment origin + app base. */
export function catalogLinkToHttp(link: CatalogLink, origin: string, appBase = ''): string {
	const path = publicationReaderPath(link, link.urn, appBase);
	const base = origin.replace(/\/$/, '');
	return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

const VYASA_URI_RE = /^vyasa:\/\/([^/]+)\/([^/]+)\/([^/]+)(?:\/(.+))?$/;

/** Parse vyasa:// links; HTTP paths are handled by the router. */
export function parseVyasaCatalogLink(href: string): CatalogLink | null {
	const trimmed = href.trim();
	const match = trimmed.match(VYASA_URI_RE);
	if (!match) return null;
	return {
		registryId: match[1],
		catalogId: match[2],
		publicationId: match[3],
		urn: match[4]
	};
}

export function catalogRefFromParams(
	registryId: string,
	catalogId: string,
	publicationId: string
): CatalogRef {
	return { registryId, catalogId, publicationId };
}
