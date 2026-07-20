import { browser } from '$app/environment';

export class ViewerSettings {
	// Defaults
	private _enableGlobalRegistry = $state(true);
	private _globalRegistryUrl = $state('https://project-vyasa.github.io/vyasa-docs/registry.json');
	private _enableCustomCatalogs = $state(true);
	private _customCatalogs = $state('');

	constructor() {
		if (browser) {
			this.load();
		}
	}

	private load() {
		try {
			const saved = localStorage.getItem('vyasa_viewer_settings');
			if (saved) {
				const parsed = JSON.parse(saved);
				if (typeof parsed.enableGlobalRegistry === 'boolean')
					this._enableGlobalRegistry = parsed.enableGlobalRegistry;
				if (parsed.globalRegistryUrl) this._globalRegistryUrl = parsed.globalRegistryUrl;
				if (typeof parsed.enableCustomCatalogs === 'boolean')
					this._enableCustomCatalogs = parsed.enableCustomCatalogs;
				if (parsed.customCatalogs) this._customCatalogs = parsed.customCatalogs;
			}

			// Inject local dev catalog if running in development mode and custom catalogs is empty
			if (import.meta.env.DEV && !this._customCatalogs) {
				this._customCatalogs = 'http://localhost:8080/catalog.json';
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
					globalRegistryUrl: this._globalRegistryUrl,
					enableCustomCatalogs: this._enableCustomCatalogs,
					customCatalogs: this._customCatalogs
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

	get globalRegistryUrl() {
		return this._globalRegistryUrl;
	}
	set globalRegistryUrl(val: string) {
		this._globalRegistryUrl = val;
		this.save();
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

	// Helper to get parsed custom catalog URLs
	get customCatalogUrls(): string[] {
		if (!this._enableCustomCatalogs || !this._customCatalogs) return [];
		return this._customCatalogs
			.split(/[;,]/)
			.map((s) => s.trim())
			.filter((s) => s.length > 0);
	}
}

export const viewerSettings = new ViewerSettings();
