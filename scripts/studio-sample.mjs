/**
 * Bundle a live vyasa-samples workspace into the Studio Play activity.
 * Publisher CSS lives outside the workspace; we copy it in and rewrite
 * `publisher_dir` so the WASM VFS (rooted at `/`) can resolve it.
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const SKIP_DIRS = new Set(['logs', 'build', 'node_modules', '.git']);
const TEXT_EXTS = new Set(['.vy', '.toml', '.html', '.css', '.md', '.json', '.txt']);

const SAMPLE_ID = 'vyasa-bg';
const SAMPLE_TITLE = 'Bhagavad Gita';
const SHOWCASE_FILE = 'content/mula/1.vy';
const PUBLISHER_VFS_DIR = 'vysamples';

/** @typedef {{ id: string, title: string, description: string, showcaseFile: string, available: boolean, missingMessage: string, files: Record<string, string> }} StudioSample */

/**
 * @param {string} toml
 * @param {string} [dir]
 */
export function rewritePublisherDir(toml, dir = PUBLISHER_VFS_DIR) {
	if (!/publisher_dir\s*=/.test(toml)) {
		return `${toml.trimEnd()}\n\n[publish]\npublisher_dir = "${dir}"\n`;
	}
	return toml.replace(/publisher_dir\s*=\s*["'][^"']+["']/, `publisher_dir = "${dir}"`);
}

/**
 * @param {Record<string, string>} files
 */
export function showcaseFiles(files) {
	const preferred = [SHOWCASE_FILE, 'context.vy', 'vyasac.toml'];
	const listed = preferred.filter((path) => path in files);
	if (listed.length) return listed;
	return Object.keys(files).slice(0, 3);
}

/**
 * @param {string} dir
 * @param {string} root
 * @param {Record<string, string>} out
 */
function walkTextFiles(dir, root, out) {
	if (!existsSync(dir)) return;
	for (const name of readdirSync(dir)) {
		if (name.startsWith('.')) continue;
		const full = join(dir, name);
		const st = statSync(full);
		if (st.isDirectory()) {
			if (SKIP_DIRS.has(name)) continue;
			walkTextFiles(full, root, out);
			continue;
		}
		if (!TEXT_EXTS.has(extname(name))) continue;
		const rel = relative(root, full).split('\\').join('/');
		out[rel] = readFileSync(full, 'utf8');
	}
}

/**
 * @param {string} projectRoot parent of vyasa-apps / vyasa-samples / vyasa
 * @returns {StudioSample}
 */
export function loadStudioSample(projectRoot) {
	const missing = (/** @type {string} */ message) => ({
		id: SAMPLE_ID,
		title: SAMPLE_TITLE,
		description: 'Bhagavad Gita source from vyasa-samples.',
		showcaseFile: SHOWCASE_FILE,
		available: false,
		missingMessage: message,
		files: {}
	});

	const samplesRoot = join(projectRoot, 'vyasa-samples');
	const workspaceDir = join(samplesRoot, 'workspaces', SAMPLE_ID);
	if (!existsSync(workspaceDir)) {
		return missing(
			`Sample workspace not found at ${workspaceDir}. Clone vyasa-samples next to vyasa-apps.`
		);
	}

	/** @type {Record<string, string>} */
	const files = {};
	walkTextFiles(workspaceDir, workspaceDir, files);

	if (files['vyasac.toml']) {
		files['vyasac.toml'] = rewritePublisherDir(files['vyasac.toml']);
	}

	const publisherToml = join(samplesRoot, 'vysamples', 'publisher.toml');
	const publisherCss = join(samplesRoot, 'vysamples', 'styles', 'indic-verse.css');
	if (existsSync(publisherToml)) {
		files[`${PUBLISHER_VFS_DIR}/publisher.toml`] = readFileSync(publisherToml, 'utf8');
	}
	if (existsSync(publisherCss)) {
		files[`${PUBLISHER_VFS_DIR}/styles/indic-verse.css`] = readFileSync(publisherCss, 'utf8');
	}

	if (!Object.keys(files).length) {
		return missing(`No source files under ${workspaceDir}.`);
	}

	return {
		id: SAMPLE_ID,
		title: SAMPLE_TITLE,
		description: 'Bhagavad Gita source from vyasa-samples.',
		showcaseFile: SHOWCASE_FILE in files ? SHOWCASE_FILE : Object.keys(files)[0],
		available: true,
		missingMessage: '',
		files
	};
}

/**
 * @param {string} projectRoot
 */
export function studioSamplePlugin(projectRoot) {
	const virtualId = 'virtual:studio-sample';
	return {
		name: 'studio-sample',
		resolveId(/** @type {string} */ id) {
			if (id === virtualId) return id;
		},
		load(/** @type {string} */ id) {
			if (id !== virtualId) return;
			const sample = loadStudioSample(projectRoot);
			return `export const sample = ${JSON.stringify(sample)};`;
		}
	};
}
