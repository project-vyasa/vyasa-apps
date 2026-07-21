export interface RegistryEntry {
	identifier: string;
	title: string;
	catalog_url: string;
}

export interface Registry {
	publishers: RegistryEntry[];
}

export interface LibraryPublisherData {
	publisher: RegistryEntry;
	sourceUrl: string;
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

	catalog_tree: string;
	streams_config?: string;
	urn_hierarchy?: string;
	urn_bit_layout?: string;
}

export interface PackageData {
	manifest: Manifest;
	structure: {
		catalogTree: any;
	};
	projections: Record<string, string>;
	titles?: Record<string, string>;
}
