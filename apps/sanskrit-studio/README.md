# Sanskrit Studio

Browser-first Lipi / Pāṭha / Varṇa studio. WASM engine: `vyutils/crates/vyasa-sanskrit-wasm` (`@project-vyasa/sanskrit-wasm`).

```bash
# In vyutils, once the crate is ready:
cd crates/vyasa-sanskrit-wasm
wasm-pack build --target web --scope project-vyasa

# In this app:
cd apps/sanskrit-studio
bun install
bun run dev   # http://localhost:5374
```

Until `pkg/` exists, Vite aliases the engine to a stub. Lipi/Pāṭha/Phonetics show an engine-missing banner; restart `bun run dev` after wasm-pack.

## GitHub Pages

This is its own SvelteKit app (own router), nested on the same project site as the viewer:

- Dev: http://localhost:5374/ (no base path)
- Prod: https://project-vyasa.github.io/vyasa-apps/apps/sanskrit-studio/

Studio is a single-route SPA. The nested Pages dest must include `index.html` (assemble copies the Kit fallback if the build only emitted `404.html`). GitHub Pages would otherwise serve the viewer 404 at this path.

