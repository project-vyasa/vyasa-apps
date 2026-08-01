/** Catalog pointer in a registry index (`catalogs[]`). */
export interface CatalogRegistryEntry {
	id: string;
	title: string;
	catalog_url: string;
	description?: string;
	homepage?: string;
}

export interface Registry {
	schemaVersion?: string;
	id: string;
	title?: string;
	description?: string;
	homepage?: string;
	catalogs: CatalogRegistryEntry[];
}

export interface RegistryInfo {
	id: string;
	title: string;
	description?: string;
	homepage?: string;
	sourceUrl: string;
}

export type CatalogSourceKind = 'local-catalog' | 'local-registry' | 'global';

export interface CatalogListing {
	registryId: string;
	catalogEntry: CatalogRegistryEntry;
	sourceUrl: string;
	sourceKind: CatalogSourceKind;
}

export interface LibraryCatalogData extends CatalogListing {
	/** Loaded catalog.json document. */
	catalog: Catalog | null;
	error?: string;
}

export interface PublisherInfo {
	id: string;
	title: string;
	homepage?: string;
}

export interface PublicationEntry {
	id: string;
	title: string;
	vyviewUrl: string;
	updated?: number;
	description?: string;
	type?: string;
	language?: string;
	license?: string;
	schemaVersion?: string;
}

export interface Catalog {
	schemaVersion: string;
	/** Catalog id (route segment; often matches a publisher slug when 1:1). */
	id: string;
	title: string;
	description?: string;
	homepage?: string;
	publisher?: PublisherInfo;
	publications: PublicationEntry[];
}

export interface Manifest {
	title?: string;
	timestamp?: string | number;
	package_type: string;
	layout?: string;
	primary_stream?: string;

	catalog_tree: string;
	catalog_tree_encoding?: string;
	streams_config?: string;
	urn_hierarchy?: string;
	urn_bit_layout?: string;
	[key: string]: any;
}

export interface VocabularyEntry {
	category: string;
	key: string;
	stream_name: string;
	value: string;
}

export interface AnnotationEntry {
	urn: string;
	label: string;
	attributes: Record<string, any>;
}

export interface PackageData {
	manifest: Manifest;
	structure: {
		catalogTree: any;
	};
	projections: Record<string, string>;
	/** @deprecated Prefer titlesByStream + chrome stream selection */
	titles?: Record<string, string>;
	/** URN → title, keyed by stream name (e.g. mula / iast) */
	titlesByStream?: Record<string, Record<string, string>>;
	/** Relative URN → packed block attribute JSON (rishi, chandas, title, …) */
	blockAttributesByUrn?: Record<string, Record<string, string>>;
	/** Relative leaf URN → stream ids with html_blocks */
	streamsByUrn?: Record<string, string[]>;
	streams?: Array<{ id: string; label: string; count: number }>;
	/** Per-stream SegmentBreak join characters from manifest `stream_separators`. */
	streamSeparators?: Record<string, string>;
	vocabulary?: VocabularyEntry[];
	annotations?: AnnotationEntry[];
}
