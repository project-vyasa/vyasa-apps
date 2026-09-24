import { describe, expect, it } from 'vitest';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadStudioSample, rewritePublisherDir } from '../../../../scripts/studio-sample.mjs';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../../../');

describe('rewritePublisherDir', () => {
	it('rewrites an existing publisher_dir for the WASM VFS', () => {
		const toml = `[publish]\npublisher_dir = "../../vysamples"\n`;
		expect(rewritePublisherDir(toml)).toContain('publisher_dir = "vysamples"');
		expect(rewritePublisherDir(toml)).not.toContain('../');
	});

	it('appends [publish] when missing', () => {
		const next = rewritePublisherDir('[workspace]\nname = "demo"\n');
		expect(next).toContain('[publish]');
		expect(next).toContain('publisher_dir = "vysamples"');
	});
});

describe('loadStudioSample', () => {
	it('bundles vyasa-bg plus publisher CSS for the WASM VFS', () => {
		const sample = loadStudioSample(projectRoot);
		expect(sample.available).toBe(true);
		expect(sample.files['content/mula/1.vy']).toBeTruthy();
		expect(sample.files['vyasac.toml']).toContain('publisher_dir = "vysamples"');
		expect(sample.files['vysamples/styles/indic-verse.css']).toBeTruthy();
	});
});
