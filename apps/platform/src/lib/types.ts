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
	name: string;
	payloadUrl: string;
}

export interface Catalog {
	catalog?: {
		publisher: string;
		description?: string;
	};
	items: CatalogItem[];
}

export interface Manifest {
	package_type: string;
	urn_scheme: string;
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
}
