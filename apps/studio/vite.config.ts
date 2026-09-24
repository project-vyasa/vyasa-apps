import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { GH_PAGES_APPS } from '../../scripts/gh-pages-apps.mjs';
import { studioSamplePlugin } from '../../scripts/studio-sample.mjs';

const workspaceRoot = path.resolve(__dirname, '../../..');
const vyasaUiDist = path.join(workspaceRoot, 'vyasa-ui/svelte/dist');
const compilerWasmPkg = path.join(workspaceRoot, 'vyasa/vyasac/pkg');
const compilerWasmJs = path.join(compilerWasmPkg, 'vyasac.js');
const compilerWasmEntry = fs.existsSync(compilerWasmJs)
	? compilerWasmPkg
	: path.resolve(__dirname, 'src/lib/compiler-stub.ts');
const pagesBase = (GH_PAGES_APPS.find((app) => app.id === 'studio')?.base ??
	'/vyasa-apps/studio') as `/${string}`;

export default defineConfig({
	plugins: [
		studioSamplePlugin(workspaceRoot),
		sveltekit({
			compilerOptions: {
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter({ fallback: '404.html' }),
			paths: {
				base: process.argv.includes('dev') ? '' : pagesBase
			}
		})
	],
	server: {
		port: 5376,
		strictPort: true,
		fs: {
			allow: ['../../..']
		}
	},
	resolve: {
		dedupe: ['svelte'],
		alias: {
			'@project-vyasa/vyasa-ui/style': path.join(vyasaUiDist, 'style'),
			'@project-vyasa/vyasa-ui/code-editor': path.join(vyasaUiDist, 'code-editor.js'),
			'@project-vyasa/vyasa-ui': path.join(vyasaUiDist, 'index.js'),
			'@project-vyasa/vyasa-compiler-wasm': compilerWasmEntry
		}
	},
	ssr: {
		noExternal: ['@project-vyasa/platform-chrome']
	},
	optimizeDeps: {
		exclude: [
			'@project-vyasa/vyasa-ui',
			'@project-vyasa/platform-chrome',
			'@project-vyasa/vyasa-compiler-wasm'
		]
	}
});
