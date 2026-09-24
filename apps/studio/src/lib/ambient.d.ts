declare module '@project-vyasa/vyasa-compiler-wasm' {
	export const COMPILER_WASM_STUB: boolean | undefined;
	export function compile_workspace(
		files: Record<string, string>,
		templateName?: string | null
	): string;
	export function init_hooks(): void;
	export default function init(moduleOrPath?: unknown): Promise<unknown>;
}

declare module '@project-vyasa/vyasa-ui/code-editor' {
	import type { Component } from 'svelte';
	export const CodeEditor: Component<{
		value: string;
		language?: 'markdown' | 'html' | 'handlebars' | 'typescript' | 'vy';
		readonly?: boolean;
		lineWrapping?: boolean;
		theme?: 'light' | 'dark';
		class?: string;
	}>;
}

declare module 'virtual:studio-sample' {
	export const sample: {
		id: string;
		title: string;
		description: string;
		showcaseFile: string;
		available: boolean;
		missingMessage: string;
		files: Record<string, string>;
	};
}
