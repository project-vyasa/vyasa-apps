export function brandAsset(base: string, file: string): string {
	const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
	return `${normalizedBase}${file.startsWith('/') ? file : `/${file}`}`;
}

export function brandIconSrc(base: string): string {
	return brandAsset(base, '/vyasa-icon.png');
}
