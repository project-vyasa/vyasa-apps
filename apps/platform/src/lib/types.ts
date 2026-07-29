export interface RegistryEntry {
	identifier: string;
	title: string;
	catalog_url: string;
}

export interface Registry {
	schemaVersion?: string;
	identifier?: string;
	title?: string;
	description?: string;
	publishers: RegistryEntry[];
}

export type PublisherSourceKind = 'local-catalog' | 'local-registry' | 'global';

export interface PublisherListing {
	publisher: RegistryEntry;
	sourceUrl: string;
	sourceKind: PublisherSourceKind;
}

export interface LibraryPublisherData extends PublisherListing {
	catalog: Catalog | null;
	error?: string;
}

export interface CatalogItem {
	id: string;
	title: string;
	vyviewUrl: string;
	updated?: number;
}

export interface Catalog {
	schemaVersion: string;
	identifier: string;
	title: string;
	catalog?: {
		publisher: string;
		description?: string;
	};
	items: CatalogItem[];
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
	streams?: Array<{id: string, label: string, count: number}>;
	vocabulary?: VocabularyEntry[];
	annotations?: AnnotationEntry[];
}
