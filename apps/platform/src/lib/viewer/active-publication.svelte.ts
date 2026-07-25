export class ActivePublicationState {
	private _publisher = $state('');
	private _publication = $state('');
	private _catalogUrl = $state('');
	private _lastUrn = $state('root');
	private _title = $state('');
	private _publicationUrl = $state('');
	private _timestamp = $state('');

	setPublication(publisher: string, publication: string, catalogUrl?: string | null) {
		if (publisher && publication) {
			if (
				this._publisher !== publisher ||
				this._publication !== publication ||
				(catalogUrl !== undefined && this._catalogUrl !== (catalogUrl || ''))
			) {
				this._publisher = publisher;
				this._publication = publication;
				if (catalogUrl !== undefined) {
					this._catalogUrl = catalogUrl || '';
				}
				this._lastUrn = 'root';
				this._title = '';
				this._publicationUrl = '';
				this._timestamp = '';
			}
		}
	}

	setMetadata(title: string, publicationUrl: string, timestamp?: string | number, catalogUrl?: string | null) {
		if (title) this._title = title;
		if (publicationUrl) this._publicationUrl = publicationUrl;
		if (timestamp !== undefined) this._timestamp = String(timestamp);
		if (catalogUrl !== undefined) this._catalogUrl = catalogUrl || '';
	}

	setLastUrn(urn: string) {
		if (urn && urn !== 'root') {
			this._lastUrn = urn;
		}
	}

	get publisher() {
		return this._publisher;
	}

	get publication() {
		return this._publication;
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

	get publicationUrl() {
		return this._publicationUrl;
	}

	get timestamp() {
		return this._timestamp;
	}

	get readerUrl() {
		if (!this._publisher || !this._publication) return '';
		const query = this._catalogUrl ? `?catalog=${encodeURIComponent(this._catalogUrl)}` : '';
		return this._lastUrn && this._lastUrn !== 'root'
			? `/${this._publisher}/${this._publication}/${this._lastUrn}${query}`
			: `/${this._publisher}/${this._publication}${query}`;
	}

	get exploreUrl() {
		if (!this._publisher || !this._publication) return '';
		const query = this._catalogUrl ? `?catalog=${encodeURIComponent(this._catalogUrl)}` : '';
		return `/${this._publisher}/${this._publication}/explore${query}`;
	}

	get diagnosticsUrl() {
		return '/diagnostics';
	}
}

export const activePublication = new ActivePublicationState();
