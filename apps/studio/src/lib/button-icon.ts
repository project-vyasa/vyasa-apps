import type { Component } from 'svelte';

/** lucide-svelte 1 icons are Svelte 4 classes; Button expects a Svelte 5 component. */
export function buttonIcon(icon: unknown): Component {
	return icon as Component;
}
