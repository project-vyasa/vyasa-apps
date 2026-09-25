/** Grid layout cell: packed `block` plus optional view-time pipes (RFC-022). */
export type GridCell = {
	block: string;
	pipe?: string[];
	span?: number;
};

export type GridLayout = {
	rows: GridCell[][];
	columns?: number;
};

export const PIPE_ENGINES = ['lipi', 'krama', 'jata'] as const;
export type PipeEngine = (typeof PIPE_ENGINES)[number];

const ENGINE_SET = new Set<string>(PIPE_ENGINES);

const CELL_STEP = /^([a-z][a-z0-9-]*)(?:\(([^)]+)\))?$/i;

export function isPipeEngine(name: string): name is PipeEngine {
	return ENGINE_SET.has(name);
}

/** `lipi(Mlym)` → `lipi:Mlym`; `krama` → `krama`. */
export function parsePipeStep(raw: string): { step: string; error?: string } {
	const trimmed = raw.trim();
	const match = trimmed.match(CELL_STEP);
	if (!match) {
		return { step: trimmed, error: `Invalid pipe step: ${trimmed}` };
	}
	const engine = match[1].toLowerCase();
	const arg = match[2]?.trim();
	if (!isPipeEngine(engine)) {
		return { step: arg ? `${engine}:${arg}` : engine, error: `Unknown engine: ${engine}` };
	}
	if (engine === 'lipi' && !arg) {
		return { step: 'lipi', error: 'lipi needs a target script, e.g. lipi(Mlym)' };
	}
	if ((engine === 'krama' || engine === 'jata') && arg) {
		return { step: `${engine}:${arg}`, error: `${engine} does not take an argument` };
	}
	return { step: arg ? `${engine}:${arg}` : engine };
}

export function splitPipeStep(step: string): { engine: string; arg?: string } {
	const i = step.indexOf(':');
	if (i === -1) return { engine: step };
	return { engine: step.slice(0, i), arg: step.slice(i + 1) };
}

/**
 * Parse one customizer column: `mula | lipi(Mlym)` → `{ block, pipe }`.
 */
export function parseGridCellText(text: string): { cell: GridCell; error?: string } {
	const parts = text
		.split('|')
		.map((p) => p.trim())
		.filter(Boolean);
	if (parts.length === 0) {
		return { cell: { block: '' }, error: 'Empty grid cell' };
	}
	const block = parts[0];
	if (block.includes('(') || isPipeEngine(block.toLowerCase())) {
		return { cell: { block }, error: `Cell must start with a packed stream id, not ${block}` };
	}
	if (parts.length === 1) {
		return { cell: { block } };
	}
	const pipe: string[] = [];
	let error: string | undefined;
	for (const part of parts.slice(1)) {
		const parsed = parsePipeStep(part);
		pipe.push(parsed.step);
		if (parsed.error && !error) error = parsed.error;
	}
	return { cell: { block, pipe }, error };
}

export function parseGridCustomizerText(
	text: string,
	columnCount = 0
): { layout: GridLayout; error?: string } {
	const lines = text
		.split('\n')
		.map((l) => l.trim())
		.filter(Boolean);
	let derivedMaxCols = 1;
	const rowsRaw: string[][] = [];
	for (const line of lines) {
		const cols = line
			.split(',')
			.map((c) => c.trim())
			.filter(Boolean);
		if (cols.length > derivedMaxCols) derivedMaxCols = cols.length;
		rowsRaw.push(cols);
	}
	const effectiveCols = columnCount > 0 ? columnCount : derivedMaxCols;
	let error: string | undefined;
	const rows = rowsRaw.map((cols) => {
		const span = cols.length < effectiveCols && effectiveCols > 1 ? effectiveCols : 1;
		return cols.map((col, idx) => {
			const parsed = parseGridCellText(col);
			if (parsed.error && !error) error = parsed.error;
			const item: GridCell = { ...parsed.cell };
			if (idx === 0 && span > 1 && cols.length === 1) item.span = span;
			return item;
		});
	});
	const layout: GridLayout = { rows };
	if (columnCount > 0) layout.columns = columnCount;
	return { layout, error };
}

export function flattenGridCells(layout: GridLayout): GridCell[] {
	return layout.rows.flat();
}

export function layoutHasPipes(layout: GridLayout): boolean {
	return flattenGridCells(layout).some((c) => (c.pipe?.length ?? 0) > 0);
}

/** Weave still keys HTML by packed `block` only. */
export function stripPipesForWeave(layout: GridLayout): GridLayout {
	return {
		...layout,
		rows: layout.rows.map((row) =>
			row.map((cell) => {
				const next: GridCell = { block: cell.block };
				if (cell.span && cell.span > 1) next.span = cell.span;
				return next;
			})
		)
	};
}

export function parseLayoutJson(raw: string | undefined | null): GridLayout | null {
	if (!raw?.trim()) return null;
	try {
		const parsed = JSON.parse(raw) as unknown;
		if (!parsed || typeof parsed !== 'object' || !Array.isArray((parsed as GridLayout).rows)) {
			return null;
		}
		return parsed as GridLayout;
	} catch {
		return null;
	}
}

/** Weave still keys HTML by packed `block`. Keep original JSON when there are no pipes. */
export function layoutJsonForWeave(raw: string): { weaveJson: string; cells: GridCell[] } {
	const layout = parseLayoutJson(raw);
	if (!layout) return { weaveJson: raw, cells: [] };
	const cells = flattenGridCells(layout);
	if (!layoutHasPipes(layout)) return { weaveJson: raw, cells };
	return { weaveJson: JSON.stringify(stripPipesForWeave(layout)), cells };
}
