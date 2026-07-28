# vyasa-apps notes

Coordination space for **frontend / platform work** in this repo.

## Repository locations

| Repo | Path | Role |
|------|------|------|
| **vyasa-apps** (here) | `/Users/anand/Projects/project-vyasa/vyasa-apps` | Current SvelteKit platform — viewer, explore, library |
| **vyasa** (compiler) | `/Users/anand/Projects/project-vyasa/vyasa` | Rust toolchain: `vyasac`, viewer WASM runtime, language/schema |
| **vyasa-samples** | `/Users/anand/Projects/project-vyasa/vyasa-samples` | Customer-style repo — validate end-to-end from a publisher/user POV (`vyasac pack`, catalogs) |
| **vyasa-docs** | `/Users/anand/Projects/project-vyasa/vyasa-docs` | Astro Starlight docs; hosts an **earlier frozen** viewer and playarea — **do not replace WASM builds here** |

## Boundary

| Repo | Scope | Notes location |
|------|-------|----------------|
| **`vyasa-apps`** (here) | SvelteKit platform, viewer UI, registry/catalog UX, WASM *consumption* | `notes/` |
| **`vyasa`** | Rust compiler (`vyasac`), viewer WASM runtime, language/schema | `../vyasa/notes/` |
| **`vyasa-samples`** | Sample `.vy` content, `context.vy`, packed publications | — |
| **`vyasa-docs`** | Published docs + legacy embedded apps (frozen) | `../vyasa-docs/` — read-only for WASM |

When an issue spans both sides, record it in the repo where work **starts**, and add a cross-link under **Blocked / upstream** (apps) or **Downstream** (compiler).

Compiler-facing backlog: [`vyasa/notes/compiler.md`](../../vyasa/notes/compiler.md)  
Design context: [`vyasa/notes/design-notes/vyasa-apps-architecture.md`](../../vyasa/notes/design-notes/vyasa-apps-architecture.md)

## Files

| File | Purpose |
|------|---------|
| [`explicit-workspace-design.md`](./explicit-workspace-design.md) | **Viewer obligations** — manifest-driven labels, no domain fallbacks (companion to samples doc) |
| [`TEMPLATE.md`](./TEMPLATE.md) | Blank template — copy or reset from this |
| [`WORK.md`](./WORK.md) | Live queue — edit together (NOW / NEXT / LATER) |

## Conventions

- **NOW** — actively in progress or ready to pick up next; keep short.
- **NEXT** — agreed follow-ups; do only after confirming (especially opportunistic items).
- **LATER** — ideas, design questions, post–preview-release scope.
- Prefix items with `[ ]` / `[~]` / `[x]` for open / in progress / done.
- Tag cross-repo items: `(compiler)`, `(apps)`, `(samples)`, `(blocked: …)`.
- **GitHub issues** — defer until after a preview release; track here first.
- Archive completed tranches by moving sections to the bottom of `WORK.md` or a dated snippet under **Done**.

## Agent handoff

Apps agents should read `WORK.md` before starting and update it when finishing a slice of work or discovering compiler dependencies.
