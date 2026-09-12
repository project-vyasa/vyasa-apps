import { describe, it, expect } from 'vitest';
import {
	shouldWarnLocalSourcesUnavailable,
	countLocalCatalogs
} from './library-warnings';

describe('library warning guards', () => {
	it('does not warn when no local sources are configured', () => {
		expect(shouldWarnLocalSourcesUnavailable([], 0)).toBe(false);
		expect(shouldWarnLocalSourcesUnavailable([], 2)).toBe(false);
	});

	it('warns when local source URLs are configured but none loaded', () => {
		expect(
			shouldWarnLocalSourcesUnavailable(['http://localhost:8080/registry.json'], 0)
		).toBe(true);
		expect(
			shouldWarnLocalSourcesUnavailable(['http://localhost:8080/registry.json'], 2)
		).toBe(false);
	});

	it('counts catalogs under the local registry', () => {
		expect(
			countLocalCatalogs([
				{ registryId: 'local' },
				{ registryId: 'adi' },
				{ registryId: 'local' }
			])
		).toBe(2);
	});
});
