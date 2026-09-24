# Vyasa Studio

Play area and (later) authoring IDE for the Vyasa language. Not [Sanskrit Studio](../sanskrit-studio/) (Lipi / Pāṭha / Varṇa).

**Plan:** [`notes/vyasa-studio-plan.md`](../../notes/vyasa-studio-plan.md).  
**User guide:** [apps/docs](../docs/) → `/studio/`.

```bash
cd apps/studio
bun install
bun run dev   # http://localhost:5376
```

Compiler WASM: `vyasa/vyasac/pkg` (`@project-vyasa/vyasa-compiler-wasm`). Until `pkg/` exists, Vite aliases the engine to a stub and Play shows an engine-missing banner.

Play loads the **vyasa-bg** workspace from `vyasa-samples` at build/dev time. Clone that repo next to `vyasa-apps`.

## GitHub Pages

Own SvelteKit app (own router), nested on the same project site as the Viewer:

- Dev: http://localhost:5376/ (no base path)
- Prod: https://project-vyasa.github.io/vyasa-apps/studio/

From the repo root: `bun run deploy`.
