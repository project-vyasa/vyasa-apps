# Vyasa Apps

Front-end apps for the Vyasa ecosystem, published together on GitHub Pages:

| App | Local | GitHub Pages |
|-----|-------|----------------|
| Viewer (`apps/platform`) | http://localhost:5373/ | https://project-vyasa.github.io/vyasa-apps/ |
| Sanskrit Studio (`apps/sanskrit-studio`) | http://localhost:5374/ | https://project-vyasa.github.io/vyasa-apps/apps/sanskrit-studio/ |

Studio is a separate SvelteKit app (own router), nested under `apps/` so it does not collide with viewer catalog routes (`apps` is a reserved registry id).

```bash
bun run assemble:pages   # build viewer + studio → dist-pages/
bun run deploy:pages     # assemble and publish the gh-pages branch
```

Do not publish `apps/platform` alone: that replaces the whole `gh-pages` branch with the viewer and drops Studio. `bun run deploy:platform` now calls the combined `deploy:pages` script.
