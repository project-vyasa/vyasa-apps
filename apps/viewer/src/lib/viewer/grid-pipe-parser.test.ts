import { describe, expect, it } from 'vitest';
import {
	layoutJsonForWeave,
	parseGridCellText,
	parseGridCustomizerText,
	stripPipesForWeave
} from './grid-pipe-parser';

describe('grid pipe parser', () => {
	it('parses mula | lipi(Mlym) into block plus pipe', () => {
		expect(parseGridCellText('mula | lipi(Mlym)')).toEqual({
			cell: { block: 'mula', pipe: ['lipi:Mlym'] }
		});
	});

	it('parses stacked engines in user-written order', () => {
		expect(parseGridCellText('padapatha | krama | lipi(Telu)')).toEqual({
			cell: { block: 'padapatha', pipe: ['krama', 'lipi:Telu'] }
		});
	});

	it('omits pipe when the cell is a packed stream only', () => {
		expect(parseGridCellText('mula')).toEqual({ cell: { block: 'mula' } });
	});

	it('flags unknown engines without dropping the step', () => {
		const parsed = parseGridCellText('mula | banana(Mlym)');
		expect(parsed.cell).toEqual({ block: 'mula', pipe: ['banana:Mlym'] });
		expect(parsed.error).toMatch(/Unknown engine/);
	});

	it('keeps pipes in customizer JSON and strips them for weave_layout', () => {
		const { layout, error } = parseGridCustomizerText(
			'mula | lipi(Mlym), translation\npadapatha | krama'
		);
		expect(error).toBeUndefined();
		expect(layout.rows).toEqual([
			[
				{ block: 'mula', pipe: ['lipi:Mlym'] },
				{ block: 'translation' }
			],
			[{ block: 'padapatha', pipe: ['krama'], span: 2 }]
		]);
		expect(stripPipesForWeave(layout)).toEqual({
			rows: [[{ block: 'mula' }, { block: 'translation' }], [{ block: 'padapatha', span: 2 }]]
		});
		expect(JSON.stringify(stripPipesForWeave(layout))).not.toContain('"pipe"');
	});

	it('keeps original layout JSON for weave when there are no pipes', () => {
		const raw = '{"rows":[[{"block":"mula"},{"block":"translation"}]]}';
		expect(layoutJsonForWeave(raw)).toEqual({
			weaveJson: raw,
			cells: [{ block: 'mula' }, { block: 'translation' }]
		});
	});

	it('strips pipes from weave JSON while retaining cells for post-weave JS', () => {
		const raw = JSON.stringify({
			rows: [[{ block: 'mula', pipe: ['lipi:Mlym'] }]]
		});
		const prepared = layoutJsonForWeave(raw);
		expect(JSON.parse(prepared.weaveJson)).toEqual({ rows: [[{ block: 'mula' }]] });
		expect(prepared.cells).toEqual([{ block: 'mula', pipe: ['lipi:Mlym'] }]);
	});
});
