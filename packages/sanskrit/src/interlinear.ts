/** Stream rows in an interlinear recitation unit. */
export type InterlinearStream = 'pada' | 'raw' | 'sandhied';

export type InterlinearSegment = {
	step: number;
	formula: string;
	pada: string;
	raw: string;
	sandhied: string;
	isParigraha: boolean;
	pragrhya: boolean;
};

/** WASM step shapes we already have, plus Ghana when vyutils exports it. */
export type PathaStepLike = {
	step_number: number;
	formula: string;
	first_index: number;
	second_index?: number | null;
	third_index?: number | null;
	raw_pada?: string;
	forward_text?: string;
	reverse_text?: string;
	sandhied?: string;
	text?: string;
	is_parigraha?: boolean;
	pragrhya_detected?: boolean;
};

export function streamsForPattern(patternId: string): InterlinearStream[] {
	if (patternId === 'jata' || patternId === 'ghana') return ['pada', 'sandhied'];
	return ['sandhied'];
}

export function tokenizePadas(input: string): string[] {
	return input
		.split(/[।|॥]/u)
		.map((part) => part.trim())
		.filter((part) => part.length > 0);
}

export function padasForStep(
	tokens: string[],
	first: number,
	second?: number | null,
	third?: number | null
): string {
	const idxs = [first, second, third].filter(
		(n): n is number => typeof n === 'number' && Number.isFinite(n) && n >= 1
	);
	const unique = [...new Set(idxs)];
	return unique
		.map((i) => tokens[i - 1] ?? '')
		.filter(Boolean)
		.join(' ');
}

export function rawLine(step: PathaStepLike): string {
	const fwd = step.forward_text?.trim() ?? '';
	const rev = step.reverse_text?.trim() ?? '';
	if (fwd && rev) return `${fwd} · ${rev} · ${fwd}`;
	if (fwd) return fwd;
	return step.raw_pada?.trim() ?? '';
}

/** Padas this step covers (`1-2`, `1-2-3`), not the permutation dump. */
export function windowFormula(step: PathaStepLike): string {
	if (step.is_parigraha) return step.formula;
	const idxs = [step.first_index, step.second_index, step.third_index].filter(
		(n): n is number => typeof n === 'number' && Number.isFinite(n) && n >= 1
	);
	const unique = [...new Set(idxs)];
	return unique.length ? unique.join('-') : step.formula;
}

export function segmentsFromSteps(
	steps: PathaStepLike[],
	tokens: string[]
): InterlinearSegment[] {
	return steps.map((step) => ({
		step: step.step_number,
		formula: windowFormula(step),
		pada: padasForStep(tokens, step.first_index, step.second_index, step.third_index),
		raw: rawLine(step),
		sandhied: (step.sandhied ?? step.text ?? '').trim(),
		isParigraha: Boolean(step.is_parigraha),
		pragrhya: Boolean(step.pragrhya_detected)
	}));
}

export function isTypingTarget(el: EventTarget | null): boolean {
	if (el == null) return false;
	if (typeof HTMLElement === 'undefined' || !(el instanceof HTMLElement)) return false;
	if (el.isContentEditable) return true;
	const tag = el.tagName;
	return tag === 'TEXTAREA' || tag === 'INPUT' || tag === 'SELECT';
}
