import { describe, it, expect } from 'vitest';
import {
	buildDefaultGridLayoutJson,
	defaultGridTextFromStreams,
	resolveManifestStreamOrder
} from './grid-default-layout';
import type { Manifest } from '$lib/types';

describe('grid default layout', () => {
	const manifest = { primary_stream: 'primary' } as Manifest;

	it('uses explicit streams_config order', () => {
		const order = resolveManifestStreamOrder(
			['primary', 'padapatha', 'sayana'],
			['sayana', 'primary', 'padapatha'],
			manifest
		);
		expect(order).toEqual(['primary', 'padapatha', 'sayana']);
	});

	it('puts primary_stream first when streams_config is absent', () => {
		const order = resolveManifestStreamOrder(
			[],
			['sayana', 'padapatha', 'primary'],
			manifest
		);
		expect(order).toEqual(['primary', 'sayana', 'padapatha']);
	});

	it('stacks three streams vertically in manifest order', () => {
		const json = buildDefaultGridLayoutJson(['primary', 'padapatha', 'sayana']);
		expect(JSON.parse(json)).toEqual({
			rows: [
				[{ block: 'primary', span: 2 }],
				[{ block: 'padapatha', span: 2 }],
				[{ block: 'sayana', span: 2 }]
			]
		});
	});

	it('places two streams on one row', () => {
		const json = buildDefaultGridLayoutJson(['mula', 'iast']);
		expect(JSON.parse(json)).toEqual({
			rows: [[{ block: 'mula' }, { block: 'iast' }]]
		});
	});

	it('formats customizer text for multi-stream publications', () => {
		expect(defaultGridTextFromStreams(['primary', 'padapatha', 'sayana'])).toBe(
			'primary\npadapatha\nsayana'
		);
	});
});
