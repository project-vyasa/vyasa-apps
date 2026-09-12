export const DEFAULT_CHROME_SCRIPT = 'iast';
export const CHROME_SCRIPT_STORAGE_KEY = 'vyasa-sanskrit-chrome-script';

export type TransliterateFn = (text: string, from: string, to: string) => string;

/** Lipi IAST is lowercase; title-case Latin (`Varṇa`) would otherwise leak through as `Vर्ण`. */
export function iastForLipi(iast: string): string {
	return iast.toLocaleLowerCase('en-US');
}

/** Render an IAST Sanskrit chrome string into a lipi script. English is not passed through here. */
export function renderSa(
	iast: string,
	script: string,
	transliterate?: TransliterateFn | null
): string {
	if (!iast || script === 'iast' || script === DEFAULT_CHROME_SCRIPT) return iast;
	if (!transliterate) return iast;
	try {
		return transliterate(iastForLipi(iast), 'iast', script);
	} catch {
		return iast;
	}
}

/** Swap the `iti` token in pāṭha formulas into the chrome script. */
export function renderFormula(formula: string, iti: string): string {
	if (!formula || iti === 'iti') return formula;
	return formula.replaceAll('iti', iti);
}

export function readSavedChromeScript(): string {
	if (typeof localStorage === 'undefined') return DEFAULT_CHROME_SCRIPT;
	try {
		const saved = localStorage.getItem(CHROME_SCRIPT_STORAGE_KEY);
		return saved?.trim() || DEFAULT_CHROME_SCRIPT;
	} catch {
		return DEFAULT_CHROME_SCRIPT;
	}
}

export function persistChromeScript(script: string): void {
	if (typeof localStorage === 'undefined') return;
	try {
		localStorage.setItem(CHROME_SCRIPT_STORAGE_KEY, script);
	} catch {
		/* ignore quota / private-mode */
	}
}
