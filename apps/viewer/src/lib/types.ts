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
	/** JSON object logical id → packed stream name. */
	stream_aliases?: string;

	catalog_tree: string;
	catalog_tree_encoding?: string;
	streams_config?: string;
	/** JSON object packed-stream-id → { language, script, kind } (RFC-022). */
	streams_meta?: string;
	urn_hierarchy?: string;
	urn_bit_layout?: string;
	/** JSON array of block_attribute keys to index as explorer facets (graph annotate always ingested). */
	facet_attributes?: string | string[];
	/** JSON array of template variable keys resolved from graph annotate at weave time. */
	template_context_keys?: string | string[];
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

/** Packed `manifest.edition`. All fields are required; an incomplete object is omitted. */
export interface Edition {
	title: string;
	description: string;
	license: string;
	source: string;
	source_root: string;
	snapshot: string;
}

/** Packed `manifest.work_notes` entry (`scope = work`). */
export interface WorkNote {
	kind: string;
	content: string;
	detail?: string;
	href?: string;
}

/** Pack-time stream descriptor (RFC-022). Opaque strings; keyed by packed stream id. */
export interface StreamDescriptor {
	language: string;
	script: string;
	kind: string;
}

export interface PackageData {
	manifest: Manifest;
	structure: {
		catalogTree: any;
	};
	projections: Record<string, string>;
	/** @deprecated Prefer titlesByStream + chrome stream selection */
	titles?: Record<string, string>;
	/** URN → title, keyed by packed stream name */
	titlesByStream?: Record<string, Record<string, string>>;
	/** Relative URN → packed block attribute JSON (rishi, chandas, title, …) */
	blockAttributesByUrn?: Record<string, Record<string, string>>;
	/** Relative leaf URN → stream ids with html_blocks */
	streamsByUrn?: Record<string, string[]>;
	streams?: Array<{ id: string; label: string; count: number }>;
	/** Packed stream id → language / script / kind. Empty when the pack predates RFC-022. */
	streamsMeta?: Record<string, StreamDescriptor>;
	/** Per-stream SegmentBreak join characters from manifest `stream_separators`. */
	streamSeparators?: Record<string, string>;
	vocabulary?: VocabularyEntry[];
	annotations?: AnnotationEntry[];
	/** Pre-merged block_attributes + graph weave context (built at load). */
	weaveBlockAttributesByUrn?: Record<string, Record<string, string>>;
	/** URN → annotations for reader gutter badges (built at load). */
	annotationsByUrn?: Record<string, AnnotationEntry[]>;
	/** WASM weave templates JSON (built once at load). */
	templatesJson?: string;
	/** Load-phase performance timings (ms). */
	perfTimings?: Record<string, number>;
	/** Omitted when the pack has no complete `edition` object. */
	edition?: Edition;
	/** Work-scope notes. Empty when the pack has none. */
	workNotes?: WorkNote[];
}
