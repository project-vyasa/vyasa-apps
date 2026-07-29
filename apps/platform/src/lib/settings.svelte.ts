import { browser } from '$app/environment';
import { normalizeSourceUrl } from './local-dev-url';
import { isLegacyUntouchedCustomRegistryDefaults } from './library-warnings';

export class ViewerSettings {
	// Out-of-box: global registry only; custom sources opt-in via Settings.
	private _enableGlobalRegistry = $state(true);

	private _enableCustomRegistries = $state(false);
	private _customRegistries = $state('');

	private _enableCustomCatalogs = $state(false);
	private _customCatalogs = $state('');

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
				if (typeof parsed.enableGlobalRegistry === 'boolean')
					this._enableGlobalRegistry = parsed.enableGlobalRegistry;

				if (typeof parsed.enableCustomRegistries === 'boolean')
					this._enableCustomRegistries = parsed.enableCustomRegistries;
				if (typeof parsed.customRegistries === 'string')
					this._customRegistries = parsed.customRegistries;

				if (typeof parsed.enableCustomCatalogs === 'boolean')
					this._enableCustomCatalogs = parsed.enableCustomCatalogs;
				if (typeof parsed.customCatalogs === 'string')
					this._customCatalogs = parsed.customCatalogs;

				if (typeof parsed.debugMode === 'boolean') this._debugMode = parsed.debugMode;
				if (typeof parsed.chromeStream === 'string' || parsed.chromeStream === null)
					this._chromeStream = parsed.chromeStream;
				if (typeof parsed.showAnnotationGutter === 'boolean')
					this._showAnnotationGutter = parsed.showAnnotationGutter;

				if (isLegacyUntouchedCustomRegistryDefaults(parsed)) {
					this._enableCustomRegistries = false;
					this._customRegistries = '';
					this._enableCustomCatalogs = false;
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
					enableGlobalRegistry: this._enableGlobalRegistry,
					enableCustomRegistries: this._enableCustomRegistries,
					customRegistries: this._customRegistries,
					enableCustomCatalogs: this._enableCustomCatalogs,
					customCatalogs: this._customCatalogs,
					debugMode: this._debugMode,
					chromeStream: this._chromeStream,
					showAnnotationGutter: this._showAnnotationGutter
				})
			);
		}
	}

	get enableGlobalRegistry() {
		return this._enableGlobalRegistry;
	}
	set enableGlobalRegistry(val: boolean) {
		this._enableGlobalRegistry = val;
		this.save();
	}

	get enableCustomRegistries() {
		return this._enableCustomRegistries;
	}
	set enableCustomRegistries(val: boolean) {
		this._enableCustomRegistries = val;
		this.save();
	}

	get customRegistries() {
		return this._customRegistries;
	}
	set customRegistries(val: string) {
		this._customRegistries = val;
		this.save();
	}

	get customRegistryUrls(): string[] {
		if (!this._enableCustomRegistries || !this._customRegistries) return [];
		return this._customRegistries
			.split(/[;,]/)
			.map((s) => normalizeSourceUrl(s))
			.filter((s) => s.length > 0);
	}

	get customCatalogs() {
		return this._customCatalogs;
	}
	set customCatalogs(val: string) {
		this._customCatalogs = val;
		this.save();
	}

	get enableCustomCatalogs() {
		return this._enableCustomCatalogs;
	}
	set enableCustomCatalogs(val: boolean) {
		this._enableCustomCatalogs = val;
		this.save();
	}

	get customCatalogUrls(): string[] {
		if (!this._enableCustomCatalogs || !this._customCatalogs) return [];
		return this._customCatalogs
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
