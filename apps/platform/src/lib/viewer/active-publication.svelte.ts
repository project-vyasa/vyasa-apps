	import { publicationExplorePath, publicationReaderPath, catalogLinkToVyasaUri, catalogLinkToHttp, type CatalogRef } from '$lib/catalog-ref';
	import { base } from '$app/paths';
	import { browser } from '$app/environment';

export class ActivePublicationState {
	private _registryId = $state('');
	private _catalogId = $state('');
	private _publicationId = $state('');
	private _catalogUrl = $state('');
	private _lastUrn = $state('root');
	private _title = $state('');
	private _vyviewUrl = $state('');
	private _timestamp = $state('');
	private _catalogUpdated = $state<number | undefined>(undefined);

	setPublication(ref: CatalogRef, catalogUrl?: string | null) {
		if (!ref.registryId || !ref.catalogId || !ref.publicationId) return;

		const changed =
			this._registryId !== ref.registryId ||
			this._catalogId !== ref.catalogId ||
			this._publicationId !== ref.publicationId ||
			(catalogUrl !== undefined && this._catalogUrl !== (catalogUrl || ''));

		if (changed) {
			this._registryId = ref.registryId;
			this._catalogId = ref.catalogId;
			this._publicationId = ref.publicationId;
			if (catalogUrl !== undefined) {
				this._catalogUrl = catalogUrl || '';
			}
			this._lastUrn = 'root';
			this._title = '';
			this._vyviewUrl = '';
			this._timestamp = '';
			this._catalogUpdated = undefined;
		}
	}

	setMetadata(
		title: string,
		vyviewUrl: string,
		manifestTimestamp?: string | number,
		catalogUrl?: string | null,
		catalogUpdated?: number
	) {
		if (title) this._title = title;
		if (vyviewUrl) this._vyviewUrl = vyviewUrl;
		if (manifestTimestamp !== undefined) this._timestamp = String(manifestTimestamp);
		if (catalogUrl !== undefined) this._catalogUrl = catalogUrl || '';
		if (catalogUpdated !== undefined) this._catalogUpdated = catalogUpdated;
	}

	setLastUrn(urn: string) {
		if (urn && urn !== 'root') {
			this._lastUrn = urn;
		}
	}

	get catalogRef(): CatalogRef | null {
		if (!this._registryId || !this._catalogId || !this._publicationId) return null;
		return {
			registryId: this._registryId,
			catalogId: this._catalogId,
			publicationId: this._publicationId
		};
	}

	get registryId() {
		return this._registryId;
	}

	get catalogId() {
		return this._catalogId;
	}

	get publicationId() {
		return this._publicationId;
	}

	get catalogUrl() {
		return this._catalogUrl;
	}

	get lastUrn() {
		return this._lastUrn;
	}

	get title() {
		return this._title;
	}

	get vyviewUrl() {
		return this._vyviewUrl;
	}

	get timestamp() {
		return this._timestamp;
	}

	get catalogUpdated() {
		return this._catalogUpdated;
	}

	get readerUrl() {
		const ref = this.catalogRef;
		if (!ref) return '';
		const urn = this._lastUrn && this._lastUrn !== 'root' ? this._lastUrn : undefined;
		return publicationReaderPath(ref, urn, base);
	}

	get exploreUrl() {
		const ref = this.catalogRef;
		if (!ref) return '';
		return publicationExplorePath(ref, base);
	}

	get vyasaUri() {
		const ref = this.catalogRef;
		if (!ref) return '';
		const urn = this._lastUrn && this._lastUrn !== 'root' ? this._lastUrn : undefined;
		return catalogLinkToVyasaUri({ ...ref, urn });
	}

	get httpReaderUrl() {
		if (!browser) return '';
		const ref = this.catalogRef;
		if (!ref) return '';
		const urn = this._lastUrn && this._lastUrn !== 'root' ? this._lastUrn : undefined;
		return catalogLinkToHttp({ ...ref, urn }, window.location.origin, base);
	}

	get diagnosticsUrl() {
		const prefix = base.replace(/\/$/, '');
		return `${prefix}/diagnostics`;
	}
}

export const activePublication = new ActivePublicationState();
