import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { GH_PAGES_APPS } from '../../scripts/gh-pages-apps.mjs';

const workspaceRoot = path.resolve(__dirname, '../../..');
const vyasaUiDist = path.join(workspaceRoot, 'vyasa-ui/svelte/dist');
const sanskritPkg = path.resolve(__dirname, '../../packages/sanskrit/src');
const sanskritWasmPkg = path.join(workspaceRoot, 'vyutils/crates/vyasa-sanskrit-wasm/pkg');
const sanskritWasmJs = path.join(sanskritWasmPkg, 'vyasa_sanskrit_wasm.js');
const sanskritWasmEntry = fs.existsSync(sanskritWasmJs)
	? sanskritWasmPkg
	: path.join(sanskritPkg, 'sanskrit-wasm-stub.ts');
const pagesBase = GH_PAGES_APPS.find((app) => app.id === 'sanskrit-studio')?.base;

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter({ fallback: 'index.html' }),
			paths: {
				base: process.argv.includes('dev') ? '' : pagesBase
			}
		})
	],
	server: {
		port: 5374,
		strictPort: true,
		fs: {
			allow: ['../../..']
		}
	},
	resolve: {
		dedupe: ['svelte'],
		alias: {
			'@project-vyasa/vyasa-ui/style': path.join(vyasaUiDist, 'style'),
			'@project-vyasa/vyasa-ui': path.join(vyasaUiDist, 'index.js'),
			'@project-vyasa/sanskrit-wasm': sanskritWasmEntry
		}
	},
	ssr: {
		noExternal: ['@project-vyasa/sanskrit']
	},
	optimizeDeps: {
		exclude: ['@project-vyasa/vyasa-ui', '@project-vyasa/sanskrit', '@project-vyasa/sanskrit-wasm']
	}
});
