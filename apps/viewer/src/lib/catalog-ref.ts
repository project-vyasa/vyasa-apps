/** Reserved registry id for Settings-driven custom catalogs and registries. */
export const LOCAL_REGISTRY_ID = 'local';

/** True for the legacy `local` bucket and for `local-{name}` registries. */
export function isLocalRegistryId(id: string): boolean {
	return id === LOCAL_REGISTRY_ID || id.startsWith('local-');
}

export interface LocalRegistryIdSource {
	url: string;
	/** Registry document `id`, when this URL is a registry index. */
	id?: string;
	/** Registry document `name`, used only when `id` is absent. */
	name?: string;
}

function localSlug(raw: string): string {
	return raw
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

function withLocalPrefix(slug: string): string {
	if (slug === LOCAL_REGISTRY_ID || slug.startsWith('local-')) return slug;
	return `local-${slug}`;
}

/** Host, port, and last path segment so two URLs on one machine stay distinct. */
function urlRegistrySlug(sourceUrl: string): string {
	try {
		const url = new URL(sourceUrl);
		const host = localSlug(url.hostname) || 'host';
		const port = url.port || (url.protocol === 'https:' ? '443' : '80');
		const leafName = (url.pathname.split('/').filter(Boolean).pop() || 'root').replace(
			/\.json$/i,
			''
		);
		const leaf = localSlug(leafName) || 'root';
		return `${host}-${port}-${leaf}`;
	} catch {
		return localSlug(sourceUrl) || 'source';
	}
}

function preferredLocalRegistryId(source: LocalRegistryIdSource): string {
	const named = localSlug(source.id || source.name || '');
	if (named) return withLocalPrefix(named);
	return withLocalPrefix(urlRegistrySlug(source.url));
}

/**
 * One route id per configured local source, in list order.
 * A registry `id` becomes `local-{id}`. Without an id, the URL is used.
 * A repeated id gets the URL slug appended.
 */
export function assignLocalRegistryIds(sources: LocalRegistryIdSource[]): string[] {
	const used = new Set<string>();
	return sources.map((source) => {
		const preferred = preferredLocalRegistryId(source);
		let id = preferred;
		if (used.has(id)) {
			const fromUrl = withLocalPrefix(urlRegistrySlug(source.url));
			id = fromUrl === preferred ? `${preferred}-2` : fromUrl;
			let n = 2;
			while (used.has(id)) {
				id = `${preferred}-${n++}`;
			}
		}
		used.add(id);
		return id;
	});
}

/** Default id for the Adi global registry (`vyasa-docs/registry.json`). */
export const ADI_REGISTRY_ID = 'adi';

/** First path segments reserved for platform semantics — not catalog ids. */
export const RESERVED_REGISTRY_IDS = new Set([
	'adi',
	'local',
	'global',
	'sanskrit',
	'studio',
	'docs'
]);

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
