/** Brand tokens aligned with project-vyasa.github.io Starlight custom CSS. */
export const BRAND = {
	name: 'Project Vyasa',
	primary: '#3b6ca5',
	primaryHover: '#2e5786',
	primaryMuted: '#eef3f9'
} as const;

/**
 * Self-contained assets in `apps/platform/static/`:
 * - vyasa-logo.png — master mark (1024², library + loading)
 * - vyasa-icon.png — header/UI icon (256², derived from logo)
 * - favicon.png — browser tab (32²)
 * - apple-touch-icon.png — mobile bookmark (180²)
 */
/** Resolve a static asset path under the SvelteKit base. */
export function brandAsset(base: string, file: string): string {
	const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
	return `${normalizedBase}${file.startsWith('/') ? file : `/${file}`}`;
}

export function brandIconSrc(base: string): string {
	return brandAsset(base, '/vyasa-icon.png');
}

export function brandLogoSrc(base: string): string {
	return brandAsset(base, '/vyasa-logo.png');
}
