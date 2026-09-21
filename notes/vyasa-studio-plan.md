# Vyasa Studio — play area + authoring IDE

> **Status:** Design — 2026-09-14  
> **Repos:** `vyasa-apps` (app), `vyasa` (`vyasac` WASM), `vyasa-samples` (workspaces), `vyasa-docs` (frozen PlayArea prototype only)  
> **Not this:** [Sanskrit Studio](https://project-vyasa.github.io/vyasa-apps/sanskrit/) (Lipi / Pāṭha / Varṇa). Keep that name and `/sanskrit/` dest.

Two jobs, one app:

1. **Play area** — get people curious about the Vyasa *language* and the rest of the ecosystem (compile a real workspace in the browser, see HTML come out, jump to docs / Viewer / samples).
2. **Studio IDE** — linguists, publishers, and SMEs who will eventually attach **annotation overlays** to packed works (and, later, author `.vy` workspaces).

Prototype to steal from: latest PlayArea at [`/vyasa-docs/playarea/`](https://project-vyasa.github.io/vyasa-docs/playarea/) (`PlayArea.svelte`). Leave `playarea_v1` and the frozen WASM in vyasa-docs alone.

## Why not grow the docs PlayArea

vyasa-docs PlayArea is a **frozen** authoring demo. Notes here already say: do not replace WASM there. Production Viewer already moved to `vyasa-apps`. Studio belongs next to it (`dest: studio` → `/vyasa-apps/studio/`), same assemble/Pages pattern as Viewer and Sanskrit Studio.

RFC-018 still wants `<vyasa-studio>` as a web component *later*. First ship a SvelteKit app that actually works; extract a WC after the UX is real. Do not start with `vyasa-elements`.

The 2026-01 architecture note wanted one unified Kit app (`/`, `/playground`, `/studio`). We already nested **separate** apps under dests. Keep that: Studio is its own Kit app, not a route inside the Viewer SPA.

## What the latest PlayArea already proves

Worth porting (with current `@project-vyasa/vyasa-compiler-wasm`, not the frozen docs bundle):

| Keep | Notes |
|------|--------|
| AppShell: source tree, editor, preview, console | Same chrome as Viewer / Sanskrit Studio |
| Catalog of sample ZIPs | Point at **vyasa-samples** (or a slim subset), not docs `public/samples` |
| `compile_workspace` + template picker (AST / built-in HTML / workspace `*.html`) | Needs live vyasac WASM |
| iframe preview of compile output | Not the packed Viewer weave |
| Manual **Run** (no keystroke compile) | Fine for v1 |

Drop or defer from the prototype:

| Drop / defer | Why |
|--------------|-----|
| OPFS “git-in-a-DB” as the product | RFC-012 prototype; export-to-sqlite is stubbed; not needed to interest people |
| Stacked-textarea `playarea_v1` | Superseded |
| Compiling with docs’ frozen WASM | Shipping bug waiting to happen |
| Viewer weave inside PlayArea | That is `apps/viewer`. Link out. |
| New `annotate { }` syntax in the editor | Blocked: [`annotation-syntax-review.md`](./annotation-syntax-review.md) + `vyasa/notes/task-annotations-feature-review.md` |

## Audiences and jobs

| Who | Job in Studio | Not this app |
|-----|----------------|--------------|
| Curious / student | Play: open a canned workspace, hit Run, see preview, follow “how this is written” | Packing CLI, registry hosting |
| Publisher | Workspace: edit `.vy` / `context.vy` / templates, see compiler diagnostics, eventually export / pack | Hosting catalogs (CLI + GH Pages) |
| Linguist | Same workspace + later overlay UI over leaves/spans | Sanskrit Studio (script/recitation/phonetics) |
| SME | Overlay-only: attach facts to a **packed** publication without owning the source tree | Inventing pack grammar |

Play and IDE share compiler WASM and AppShell. They are **activities**, not two repos.

## Product shape

```
/vyasa-apps/studio/          Play (default) — interest
/vyasa-apps/studio/workspace  IDE — files + compile + preview
/vyasa-apps/studio/overlay    SME overlays — after provenance review
```

Local: new port (e.g. 5376), `dest: studio` reserved (already listed as later dest in Pages notes).

**Play (interest)**

- One or two showcases (vyasa-bg is enough at first). No ZIP file picker on the first screen.
- Short copy: this is a *language* for packing meaning with text; Viewer reads the pack; this screen compiles source in the browser.
- Editor read-mostly or lightly editable; Run; preview; links to [vyasa-docs](https://project-vyasa.github.io/vyasa-docs/), [Viewer](https://project-vyasa.github.io/vyasa-apps/viewer/), [samples repo](https://github.com/project-vyasa/vyasa-samples).
- Failure mode: WASM missing banner (same pattern as Sanskrit Studio).

**Workspace (IDE)**

- Port PlayArea file tree + CodeEditor + template select + console diagnostics.
- Load from: bundled samples, optional ZIP, later a local folder / gist (not v1).
- Compile uses **current** vyasac WASM from `vyasa/vyasac/pkg`.
- Preview is compile HTML, with a control “Open this pack in Viewer” only after pack/export exists.
- Diagnostics: surface `compile_workspace` errors next to the file, not only a console dump.

**Overlay (SME)** — later, gated

- Input: a packed `.vyview` (or catalog publication), not a source ZIP.
- UI: pick a leaf/span in a **read** surface (reuse Viewer weave in an iframe or shared session), attach overlay records.
- On-disk / pack composition waits on the provenance review (publisher pack vs SME overlay pack vs included graph). **Do not** invent a second annotate syntax in Studio first.
- Until then: Workspace can show existing `annotate` in source as ordinary `.vy` text.

## Phases

### A — Shell and Play (interest)

- New `apps/studio` (name in UI: **Vyasa Studio**; path `studio` so it does not collide with Sanskrit Studio).
- AppShell + Play activity with one sample + Run + preview.
- `file:` compiler WASM; missing-engine banner.
- Pages dest `studio`; header links from Viewer / apps docs.

Success: a newcomer compiles BG in the browser without cloning vyasa.

### B — Workspace IDE

- Source/output trees, template picker, ZIP load, console, word wrap (from PlayArea).
- Wire diagnostics to files.
- Keep vyasa-docs PlayArea as a historical demo until B is linked from docs splash (“Playground” → `/vyasa-apps/studio/`).

Success: a publisher can edit `context.vy` / a chapter, Run, and see the change.

### C — Overlay (after provenance)

- Overlay activity on a packed publication.
- No new grammar until BACKLOG §9 decides composition.
- Linguist-friendly grid/form can still emit today’s `annotate` maps as an implementation detail.

### D — Distribution (optional)

- RFC-018 `<vyasa-studio>` web component for CMS embed.
- Only after A–B are the source of truth.

## Upstream / blocked

| Item | Repo | Notes |
|------|------|-------|
| Live `compile_workspace` WASM in apps | `vyasa` | Same discipline as viewer WASM: rebuild `vyasac/pkg` before calling Studio done |
| Sample ZIPs that match current grammar | `vyasa-samples` | Do not freeze docs `public/samples` |
| Overlay pack vs publisher pack | `vyasa` BACKLOG §9 | Blocks Studio Overlay activity |
| Annotate authoring syntax | this note’s sibling | After provenance, not instead of it |

## Open questions

1. **Default landing:** Play vs Workspace? Recommend Play (interest) as `/studio/`, Workspace behind an activity icon.
2. **How much editing in Play?** Recommend editable buffer that resets; no save.
3. **Pack from the browser?** v1 compile-to-HTML only. Pack/export is a later publisher job (may stay CLI).
4. **Share PlayArea sqlite VFS?** No for A–B.

## References

- PlayArea (latest): `vyasa-docs/astro-starlight/src/components/PlayArea.svelte` — route `/vyasa-docs/playarea/`
- RFC-018: `vyasa-docs/.../notes/rfc-018-embedded-viewer.md`
- RFC-012 SQLite VFS (prototype, not product): `vyasa-docs/.../notes/rfc-012-sqlite-vfs.md`
- Platform architecture (unified app — superseded by nested dests): `vyasa/notes/design-notes/vyasa-apps-architecture.md`
- Overlay syntax (blocked): [`annotation-syntax-review.md`](./annotation-syntax-review.md)
