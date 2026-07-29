import { describe, it, expect } from 'vitest';
import { brandAsset, brandIconSrc, brandLogoSrc } from './brand';

describe('brand assets', () => {
	it('resolves paths under the app base', () => {
		expect(brandAsset('/vyasa-apps', '/vyasa-icon.png')).toBe('/vyasa-apps/vyasa-icon.png');
		expect(brandIconSrc('/vyasa-apps')).toBe('/vyasa-apps/vyasa-icon.png');
		expect(brandLogoSrc('')).toBe('/vyasa-logo.png');
	});
});
