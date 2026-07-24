import { browser } from '$app/environment';

export class ViewerSettings {
	// Defaults
	private _enableGlobalRegistry = $state(true);

	private _enableCustomRegistries = $state(true);
	private _customRegistries = $state('');

	private _enableCustomCatalogs = $state(true);
	private _customCatalogs = $state('');

	private _debugMode = $state(false);

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

				if (typeof parsed.enableCustomRegistries === 'boolean')
					this._enableCustomRegistries = parsed.enableCustomRegistries;
				if (parsed.customRegistries) this._customRegistries = parsed.customRegistries;

				if (typeof parsed.enableCustomCatalogs === 'boolean')
					this._enableCustomCatalogs = parsed.enableCustomCatalogs;
				if (parsed.customCatalogs) this._customCatalogs = parsed.customCatalogs;

				if (typeof parsed.debugMode === 'boolean') this._debugMode = parsed.debugMode;
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
					debugMode: this._debugMode
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
			.map((s) => s.trim())
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
			.map((s) => s.trim())
			.filter((s) => s.length > 0);
	}

	get debugMode() {
		return this._debugMode;
	}
	set debugMode(val: boolean) {
		this._debugMode = val;
		this.save();
	}
}

export const viewerSettings = new ViewerSettings();
