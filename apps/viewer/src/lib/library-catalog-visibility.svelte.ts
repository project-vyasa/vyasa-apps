import {
	isCatalogHidden,
	loadHiddenCatalogKeys,
	saveHiddenCatalogKeys,
	withCatalogHidden
} from './library-catalog-visibility-storage';

export class LibraryCatalogVisibility {
	private _hiddenKeys = $state<Set<string>>(loadHiddenCatalogKeys());

	isHidden(registryId: string, catalogId: string): boolean {
		return isCatalogHidden(this._hiddenKeys, registryId, catalogId);
	}

	setHidden(registryId: string, catalogId: string, hidden: boolean) {
		this._hiddenKeys = withCatalogHidden(this._hiddenKeys, registryId, catalogId, hidden);
		saveHiddenCatalogKeys(this._hiddenKeys);
	}

	toggle(registryId: string, catalogId: string) {
		this.setHidden(registryId, catalogId, !this.isHidden(registryId, catalogId));
	}

	showAll() {
		this._hiddenKeys = new Set();
		saveHiddenCatalogKeys(this._hiddenKeys);
	}

	get hiddenCount(): number {
		return this._hiddenKeys.size;
	}

	/** Read hidden keys so library views subscribe to visibility changes. */
	get hiddenRevision(): number {
		return this._hiddenKeys.size;
	}
}

export const libraryCatalogVisibility = new LibraryCatalogVisibility();
