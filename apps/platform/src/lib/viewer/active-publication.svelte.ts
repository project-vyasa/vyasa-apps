export class ActivePublicationState {
	private _publisher = $state('');
	private _publication = $state('');
	private _lastUrn = $state('root');

	setPublication(publisher: string, publication: string) {
		if (publisher && publication) {
			if (this._publisher !== publisher || this._publication !== publication) {
				this._publisher = publisher;
				this._publication = publication;
				this._lastUrn = 'root';
			}
		}
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
