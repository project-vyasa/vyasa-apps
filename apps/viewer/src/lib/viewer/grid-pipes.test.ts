import { describe, expect, it } from 'vitest';
import { applyGridPipesWithEngine, lipiMapsScript, type SanskritPipeEngine } from './grid-pipes';
import type { StreamDescriptor } from '$lib/types';
import type { GridCell } from './grid-pipe-parser';

const meta: Record<string, StreamDescriptor> = {
	mula: { language: 'sa', script: 'Deva', kind: 'source' },
	padapatha: { language: 'sa', script: 'Deva', kind: 'source' },
	translation: { language: 'en', script: 'Latn', kind: 'translation' }
};

function mockEngine(calls: string[] = []): SanskritPipeEngine {
	return {
		transliterate: (text, from, to) => {
			calls.push(`lipi:${from}->${to}`);
			return `[${to}]${text}`;
		},
		generate_krama_text: (pada, script) => {
			calls.push(`krama:${script}`);
			return `krama(${script}):${pada}`;
		},
		generate_jata_text: (pada, script) => {
			calls.push(`jata:${script}`);
			return `jata(${script}):${pada}`;
		}
	};
}

const col = (block: string, inner: string) =>
	`<div class="vyasa-layout-col vyasa-block-${block}">${inner}</div>`;

describe('grid pipes', () => {
	it('does not treat Latn as a lipi source', () => {
		expect(lipiMapsScript('Deva')).toBe(true);
		expect(lipiMapsScript('Mlym')).toBe(true);
		expect(lipiMapsScript('IAST')).toBe(true);
		expect(lipiMapsScript('Latn')).toBe(false);
	});

	it('walks lipi text nodes and keeps tags', () => {
		const html = col('mula', '<span class="accent">अग्नि</span>मीळे');
		const cells: GridCell[] = [{ block: 'mula', pipe: ['lipi:Mlym'] }];
		const out = applyGridPipesWithEngine(html, cells, meta, mockEngine());
		expect(out).toContain('class="accent"');
		expect(out).toContain('[Mlym]अग्नि');
		expect(out).toContain('[Mlym]मीळे');
		expect(out).toContain('vyasa-block-mula');
		expect(out).toContain('vyasa-pipe-lipi');
		expect(out).toContain('aria-label="mula (Mlym)"');
		expect(out).not.toContain('vyasa-block-mula-malayalam');
	});

	it('pairs the same packed block twice so only the piped column transforms', () => {
		const html = `${col('mula', 'A')}${col('mula', 'A')}`;
		const cells: GridCell[] = [{ block: 'mula' }, { block: 'mula', pipe: ['lipi:Mlym'] }];
		const out = applyGridPipesWithEngine(html, cells, meta, mockEngine());
		expect(out).toContain('>A</div>');
		expect(out).toContain('[Mlym]A');
	});

	it('uses innerText for krama and wraps with packed-id plus pipe class', () => {
		const html = col('padapatha', '<em>अग्निम् । ईळे</em>');
		const cells: GridCell[] = [{ block: 'padapatha', pipe: ['krama'] }];
		const out = applyGridPipesWithEngine(html, cells, meta, mockEngine());
		expect(out).toContain('vyasa-pipe-krama');
		expect(out).toContain('class="vyasa-block-padapatha vyasa-pipe-krama"');
		expect(out).toContain('krama(Deva):अग्निम् । ईळे');
		expect(out).toContain('aria-label="padapatha (krama)"');
	});

	it('collapses krama | lipi into one generate_krama_text call', () => {
		const calls: string[] = [];
		const html = col('padapatha', 'अग्निम् । ईळे');
		const cells: GridCell[] = [{ block: 'padapatha', pipe: ['krama', 'lipi:Mlym'] }];
		const out = applyGridPipesWithEngine(html, cells, meta, mockEngine(calls));
		expect(calls).toEqual(['krama:Mlym']);
		expect(out).toContain('krama(Mlym):अग्निम् । ईळे');
		expect(out).toContain('vyasa-pipe-krama');
		expect(out).toContain('vyasa-pipe-lipi');
	});

	it('errors on unknown engine instead of showing the source cell', () => {
		const html = col('mula', 'SOURCE');
		const cells: GridCell[] = [{ block: 'mula', pipe: ['banana'] }];
		const out = applyGridPipesWithEngine(html, cells, meta, null);
		expect(out).toContain('Unknown engine: banana');
		expect(out).toContain('vyasa-pipe-error');
		expect(out).not.toContain('SOURCE');
	});

	it('errors when lipi cannot map packed script, even if WASM is missing', () => {
		const html = col('translation', 'Hello');
		const cells: GridCell[] = [{ block: 'translation', pipe: ['lipi:Mlym'] }];
		const out = applyGridPipesWithEngine(html, cells, meta, null);
		expect(out).toContain('lipi cannot map packed script Latn');
		expect(out).not.toContain('Hello');
	});

	it('shows the source cell when WASM is missing for a legal lipi pipe', () => {
		const html = col('mula', 'SOURCE');
		const cells: GridCell[] = [{ block: 'mula', pipe: ['lipi:Mlym'] }];
		const out = applyGridPipesWithEngine(html, cells, meta, null);
		expect(out).toBe(html);
		expect(out).toContain('SOURCE');
		expect(out).not.toContain('vyasa-pipe-error');
	});

	it('errors when streams_meta is absent rather than guessing script', () => {
		const html = col('mula', 'SOURCE');
		const cells: GridCell[] = [{ block: 'mula', pipe: ['lipi:Mlym'] }];
		const out = applyGridPipesWithEngine(html, cells, {}, mockEngine());
		expect(out).toContain('packed script missing for mula');
		expect(out).not.toContain('SOURCE');
	});
});
