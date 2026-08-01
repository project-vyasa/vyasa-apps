import { browser } from '$app/environment';
import { normalizeSourceUrl } from './local-dev-url';
import { migrateLocalSourcesFromSettings } from './local-source';

export class ViewerSettings {
	private _localSources = $state('');

	private _debugMode = $state(false);

	/** Stream id used for chrome labels (speaker badges, structure terms). Shared with Explorer. */
	private _chromeStream = $state<string | null>(null);
	private _showAnnotationGutter = $state(true);

	constructor() {
		if (browser) {
			this.load();
		}
	}

	private load() {
		try {
			const saved = localStorage.getItem('vyasa_viewer_settings');
			if (saved) {
				const parsed = JSON.parse(saved) as Record<string, unknown>;
				const hadLegacyFormat =
					'enableGlobalRegistry' in parsed ||
					'enableCustomRegistries' in parsed ||
					'enableCustomCatalogs' in parsed ||
					'customRegistries' in parsed ||
					'customCatalogs' in parsed ||
					'showVyasaUris' in parsed;
				this._localSources = migrateLocalSourcesFromSettings(parsed);

				if (typeof parsed.debugMode === 'boolean') this._debugMode = parsed.debugMode;
				if (typeof parsed.chromeStream === 'string' || parsed.chromeStream === null)
					this._chromeStream = parsed.chromeStream;
				if (typeof parsed.showAnnotationGutter === 'boolean')
					this._showAnnotationGutter = parsed.showAnnotationGutter;

				if (hadLegacyFormat) {
					this.save();
				}
			}
		} catch (e) {
			console.error('Failed to load settings:', e);
		}
	}

	private save() {
		if (browser) {
			localStorage.setItem(
				'vyasa_viewer_settings',
				JSON.stringify({
					localSources: this._localSources,
					debugMode: this._debugMode,
					chromeStream: this._chromeStream,
					showAnnotationGutter: this._showAnnotationGutter
				})
			);
		}
	}

	/** Semicolon- or comma-separated local registry/catalog URLs (autodetected). */
	get localSources() {
		return this._localSources;
	}
	set localSources(val: string) {
		this._localSources = val;
		this.save();
	}

	get localSourceUrls(): string[] {
		if (!this._localSources.trim()) return [];
		return this._localSources
			.split(/[;,]/)
			.map((s) => normalizeSourceUrl(s))
			.filter((s) => s.length > 0);
	}

	get debugMode() {
		return this._debugMode;
	}
	set debugMode(val: boolean) {
		this._debugMode = val;
		this.save();
	}

	get chromeStream() {
		return this._chromeStream;
	}
	set chromeStream(val: string | null) {
		this._chromeStream = val;
		this.save();
	}

	get showAnnotationGutter() {
		return this._showAnnotationGutter;
	}
	set showAnnotationGutter(val: boolean) {
		this._showAnnotationGutter = val;
		this.save();
	}
}

export const viewerSettings = new ViewerSettings();
