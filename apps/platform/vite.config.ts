import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

const workspaceRoot = path.resolve(__dirname, '../../..');

export default defineConfig({
	plugins: [
		{
			name: 'serve-local-workspaces',
			configureServer(server) {
				server.middlewares.use((req, res, next) => {
					const url = req.url || '';
					let localPath: string | null = null;

					if (url.startsWith('/local-docs/')) {
						localPath = path.join(
							workspaceRoot,
							'vyasa-docs/astro-starlight/public',
							url.slice('/local-docs/'.length).split('?')[0]
						);
					} else if (url.startsWith('/local-samples/')) {
						localPath = path.join(
							workspaceRoot,
							'vyasa-samples/dist',
							url.slice('/local-samples/'.length).split('?')[0]
						);
					} else if (url.startsWith('/local-muktabodha/')) {
						localPath = path.join(
							workspaceRoot,
							'muktabodha.org/dist',
							url.slice('/local-muktabodha/'.length).split('?')[0]
						);
					}

					if (localPath && fs.existsSync(localPath) && fs.statSync(localPath).isFile()) {
						console.log(`[serve-local-workspaces] Serving local file: ${localPath}`);
						const mimeType = localPath.endsWith('.json')
							? 'application/json'
							: localPath.endsWith('.vyview')
								? 'application/octet-stream'
								: 'text/plain';

						res.writeHead(200, {
							'Content-Type': mimeType,
							'Access-Control-Allow-Origin': '*',
							'Cache-Control': 'no-cache'
						});
						fs.createReadStream(localPath).pipe(res);
						return;
					}
					next();
				});
			}
		},
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
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
		exclude: ['@project-vyasa/vyasa-viewer-wasm', '@project-vyasa/vyasa-compiler-wasm']
	}
});
