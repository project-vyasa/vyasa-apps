import { describe, it, expect } from 'vitest';
import { resolveFacetConfig, resolveTemplateContextKeys, shouldIndexBlockAttributeKey } from './facet-config';

const STRUCTURAL = new Set(['title', 'mandala']);

describe('resolveFacetConfig', () => {
	it('reads manifest.facet_attributes JSON array', () => {
		const config = resolveFacetConfig(
			{ facet_attributes: '["rishi","devata","chandas"]' } as any,
			undefined
		);
		expect(config.declaredBlockKeys).toEqual(new Set(['rishi', 'devata', 'chandas']));
	});

	it('merges vocabulary facets category', () => {
		const config = resolveFacetConfig(
			{ facet_attributes: '["devata"]' } as any,
			[{ category: 'facets', key: 'rishi', stream_name: 'mula', value: 'Ṛṣi' }]
		);
		expect(config.declaredBlockKeys).toEqual(new Set(['devata', 'rishi']));
	});

	it('returns empty config when nothing declared', () => {
		expect(resolveFacetConfig({} as any, [])).toEqual({});
	});
});

describe('resolveTemplateContextKeys', () => {
	it('merges template_context_keys, facet_attributes, and vocabulary facets', () => {
		const keys = resolveTemplateContextKeys(
			{
				template_context_keys: '["chandas"]',
				facet_attributes: '["devata"]'
			} as any,
			[{ category: 'facets', key: 'rishi', stream_name: '', value: 'ऋषि' }]
		);
		expect(keys).toEqual(new Set(['chandas', 'devata', 'rishi']));
	});
});

describe('shouldIndexBlockAttributeKey', () => {
	it('allows only declared keys when publisher config is present', () => {
		const config = resolveFacetConfig(
			{ facet_attributes: '["devata"]' } as any,
			undefined
		);
		expect(shouldIndexBlockAttributeKey('devata', config, STRUCTURAL)).toBe(true);
		expect(shouldIndexBlockAttributeKey('rishi', config, STRUCTURAL)).toBe(false);
	});

	it('uses structural denylist when no publisher config', () => {
		expect(shouldIndexBlockAttributeKey('devata', {}, STRUCTURAL)).toBe(true);
		expect(shouldIndexBlockAttributeKey('title', {}, STRUCTURAL)).toBe(false);
	});
});
