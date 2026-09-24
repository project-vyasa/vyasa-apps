# Vyasa Apps

Front-end apps for the Vyasa ecosystem, published together on GitHub Pages:

| App | Source | Local | GitHub Pages |
|-----|--------|-------|----------------|
| Viewer | `apps/viewer` | http://localhost:5373/ | https://project-vyasa.github.io/vyasa-apps/viewer/ |
| Sanskrit Studio | `apps/sanskrit-studio` | http://localhost:5374/ | https://project-vyasa.github.io/vyasa-apps/sanskrit/ |
| Apps docs | `apps/docs` | http://localhost:5375/ | https://project-vyasa.github.io/vyasa-apps/docs/ |
| Vyasa Studio | `apps/studio` | http://localhost:5376/ | https://project-vyasa.github.io/vyasa-apps/studio/ |

The site root `https://project-vyasa.github.io/vyasa-apps/` redirects to the Viewer for now (`SITE_INDEX_REDIRECT_ID` in `scripts/gh-pages-apps.mjs`). Switch that to `'docs'` when the docs splash should be the landing page. Old catalog paths (`/vyasa-apps/adi/…`) rewrite into `/viewer/`.

Nested dests (`viewer`, `sanskrit`, `studio`, `docs`) are first path segments under the project site.

Shared Starlight chrome: [`vyasa-ui/starlight`](../vyasa-ui/starlight/README.md) (`@project-vyasa/starlight-theme`).

```bash
bun run assemble:pages   # build viewer + sanskrit + studio + docs → dist-pages/
bun run deploy           # assemble and publish the gh-pages branch
```

**Public user docs:** `apps/docs` (Starlight). **Internal notes** (agents, drafts): [`docs/guides/`](docs/guides/), [`notes/`](notes/).
