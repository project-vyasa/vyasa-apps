# Vyasa Apps

Front-end apps for the Vyasa ecosystem, published together on GitHub Pages:

| App | Source | Local | GitHub Pages |
|-----|--------|-------|----------------|
| Viewer | `apps/viewer` | http://localhost:5373/ | https://project-vyasa.github.io/vyasa-apps/ |
| Sanskrit Studio | `apps/sanskrit-studio` | http://localhost:5374/ | https://project-vyasa.github.io/vyasa-apps/sanskrit/ |

Sibling Kit apps use a reserved first path segment (`sanskrit`, later `studio`) so they do not collide with viewer catalog routes.

```bash
bun run assemble:pages   # build viewer + studio → dist-pages/
bun run deploy           # assemble and publish the gh-pages branch
```
