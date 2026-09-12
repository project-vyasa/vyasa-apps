import {
	DEFAULT_CHROME_SCRIPT,
	persistChromeScript,
	readSavedChromeScript,
	renderFormula,
	renderSa
} from './chrome-script';
import {
	ensureEngine,
	FALLBACK_SCRIPTS,
	supportedScripts,
	transliterateNow,
	type ScriptInfo
} from './wasm';

class ChromeLabels {
	script = $state(DEFAULT_CHROME_SCRIPT);
	scripts = $state<ScriptInfo[]>(FALLBACK_SCRIPTS);
	ready = $state(false);
	#init: Promise<void> | null = null;

	constructor() {
		this.script = readSavedChromeScript();
	}

	init(): Promise<void> {
		if (!this.#init) {
			this.#init = (async () => {
				const status = await ensureEngine();
				this.scripts = await supportedScripts();
				this.ready = status === 'ready';
			})();
		}
		return this.#init;
	}

	setScript(id: string) {
		this.script = id || DEFAULT_CHROME_SCRIPT;
		persistChromeScript(this.script);
	}

	sa(iast: string): string {
		return renderSa(iast, this.script, this.ready ? transliterateNow : null);
	}

	formula(formula: string): string {
		return renderFormula(formula, this.sa('iti'));
	}

	glyph(iast: string): string {
		return this.sa(iast);
	}
}

export const chromeLabels = new ChromeLabels();
