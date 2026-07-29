import { describe, it, expect } from 'vitest';
import {
	isLegacyUntouchedCustomRegistryDefaults,
	shouldWarnCustomCatalogsDisabled,
	shouldWarnLocalRegistriesUnavailable
} from './library-warnings';

describe('library warning guards', () => {
	it('does not warn about custom catalogs when none are configured', () => {
		expect(shouldWarnCustomCatalogsDisabled(false, '')).toBe(false);
		expect(shouldWarnCustomCatalogsDisabled(true, '')).toBe(false);
	});

	it('warns when custom catalog URLs are saved but disabled', () => {
		expect(
			shouldWarnCustomCatalogsDisabled(false, 'http://example.com/catalog.json')
		).toBe(true);
	});

	it('does not warn about registries when none are configured', () => {
		expect(shouldWarnLocalRegistriesUnavailable(false, [], 0)).toBe(false);
		expect(shouldWarnLocalRegistriesUnavailable(true, [], 0)).toBe(false);
	});

	it('warns when configured registry URLs fail to load publishers', () => {
		expect(
			shouldWarnLocalRegistriesUnavailable(true, ['http://localhost:8080/registry.json'], 0)
		).toBe(true);
		expect(
			shouldWarnLocalRegistriesUnavailable(true, ['http://localhost:8080/registry.json'], 2)
		).toBe(false);
	});

	it('detects legacy dev default registry settings', () => {
		expect(
			isLegacyUntouchedCustomRegistryDefaults({
				enableCustomRegistries: true,
				customRegistries: 'http://localhost:8080/registry.json'
			})
		).toBe(true);
		expect(
			isLegacyUntouchedCustomRegistryDefaults({
				enableCustomRegistries: true,
				customRegistries: 'http://localhost:8080/registry.json',
				debugMode: true
			})
		).toBe(false);
	});
});
