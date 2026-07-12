import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter({ fallback: '404.html' }),
			paths: {
				base: process.argv.includes('dev') ? '' : '/vyasa-apps'
			}
		})
	],
	server: {
		fs: {
			allow: ['../../..'] // Allow serving files from the monorepo root (e.g. linked packages)
		}
	},
	optimizeDeps: {
		exclude: [
			'@project-vyasa/vyasa-viewer-wasm',
			'@project-vyasa/vyasa-compiler-wasm'
		]
	}
});
