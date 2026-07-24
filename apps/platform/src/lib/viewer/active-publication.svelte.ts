export class ActivePublicationState {
	private _publisher = $state('');
	private _publication = $state('');
	private _lastUrn = $state('root');
	private _title = $state('');
	private _publicationUrl = $state('');
	private _timestamp = $state('');

	setPublication(publisher: string, publication: string) {
		if (publisher && publication) {
			if (this._publisher !== publisher || this._publication !== publication) {
				this._publisher = publisher;
				this._publication = publication;
				this._lastUrn = 'root';
				this._title = '';
				this._publicationUrl = '';
				this._timestamp = '';
			}
		}
	}

	setMetadata(title: string, publicationUrl: string, timestamp?: string | number) {
		if (title) this._title = title;
		if (publicationUrl) this._publicationUrl = publicationUrl;
		if (timestamp !== undefined) this._timestamp = String(timestamp);
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
		return this._lastUrn && this._lastUrn !== 'root'
			? `/${this._publisher}/${this._publication}/${this._lastUrn}`
			: `/${this._publisher}/${this._publication}`;
	}

	get exploreUrl() {
		if (!this._publisher || !this._publication) return '';
		return `/${this._publisher}/${this._publication}/explore`;
	}

	get diagnosticsUrl() {
		return '/diagnostics';
	}
}

export const activePublication = new ActivePublicationState();
