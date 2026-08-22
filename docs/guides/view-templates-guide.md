---
title: View Templates & Reader Presentation
description: Draft publisher guide — grid vs craft views, content themes, stream styling, and reader controls. To be merged into vyasa-docs alongside the Template Guide.
status: draft
target: vyasa-docs/src/content/docs/guides/view-templates-guide.md
companion: https://vyasa-docs/guides/template-guide/
---

# View templates & reader presentation

> **Status:** Draft in **vyasa-apps** for iteration. Destination: user-facing docs next to [Native Templates Guide](https://vyasa-docs/guides/template-guide/) in **vyasa-docs**.  
> **Companion (viewer obligations):** [`notes/explicit-workspace-design.md`](../../notes/explicit-workspace-design.md)  
> **Reference publication for iteration:** **vyasa-bg** (small, fast pack cycle).

This guide extends the [Template Guide](https://vyasa-docs/guides/template-guide/) (command templates, `context.vy`) with **view layouts** (`theme.vy`, `reading.vy`) and how the **platform reader** presents packed content.

> **Publisher simplification:** Once vyasa-bg is a full working example, expect follow-up edits here to reduce what publishers must define. This draft is the target architecture; the example will drive cuts.

**CSS lives in `.css` files** (not Vyasa `style` commands). There is **no `families/` folder**. Pack lists two roots; listed paths themselves must not contain `..`:

```toml
[publish]
publisher_dir = "../.."

[build.default]
publisher_css = ["styles/indic-verse.css"]   # relative to publisher_dir (shared)
css = ["templates/html/theme.css"]           # relative to workspace (overrides)
```

Order: **`publisher_css`, then `css`**. Missing file → pack error. `publisher_css` requires `publisher_dir`. A special work (e.g. bible) can omit `publisher_css` and list only workspace `css`. See [`vyasa/notes/html-target-css-pack.md`](../../../vyasa/notes/html-target-css-pack.md).

---

## Two channels, one publication

| Channel | Packed template | Renders | Edition |
|---------|-----------------|---------|---------|
| **Grid** | `theme.vy` → `theme_layout` | Raw `html_blocks` in layout columns | Bare-bones reference |
| **Craft views** | `reading.vy` → `reading_layout` + `item` | Woven streams via `context.vy` | Rich reading edition |

- **Grid is not a shortcut for reading CSS.** Share **design tokens** once in `theme.vy`; craft views add labels, cards, and metadata only.
- **First workspace to align:** `vyasa-samples/workspaces/vyasa-bg`.

### `default.html` (per-file SSG) — deprecate for platform

Historically, vyasac could emit **one standalone HTML file per source file** (classic SSG). That path predates packed `theme_layout` / `html_blocks` and the platform viewer.

| Output | Platform viewer | Role going forward |
|--------|-----------------|-------------------|
| `theme_layout`, `html_blocks`, view templates | **Yes** | Canonical presentation |
| `default.html` per document | **No** | Redundant if `theme.vy` + views cover the same styles |

**TODO (vyasac):** Deprecate per-file `default.html` for publications targeting the platform reader. Publishers should express shell, tokens, and themes only in `templates/html/views/theme.vy`. Keep SSG output only where an external static host still needs it (document separately).

---

## File layout (every publication)

```text
# publisher_dir (catalog root)
publisher.toml
styles/indic-verse.css     # publisher_css — shared by works that list it

# workspace
templates/html/
  context.vy
  views/
    theme.vy               # Optional if packer default shell + css lists suffice
    reading.vy             # Optional — craft edition
  theme.css                # css — workspace overrides
```

| Packed key | Source | Used when |
|------------|--------|-----------|
| `theme_layout` | `theme.vy` `layout` | Grid, sequence, outer shell for all views |
| `reading_layout` | `reading.vy` `layout` | Reading view |
| `reading_item` | `reading.vy` `item` | Per-URN item in reading view |

Viewer fallback: craft `{view}_layout` wraps items, then **`theme_layout` wraps that**. Grid uses `theme_layout` only.

---

## Packed HTML contract

Grid injects **raw** packed HTML. A leading newline after an opening tag renders as a **blank line** when `white-space: pre-line` is set — CSS `margin: 0` cannot fix it.

```html
<!-- BAD -->
<div class="verse">
धर्मक्षेत्रे…

<!-- GOOD -->
<div class="verse">धर्मक्षेत्रे…
```

**Pack lint rules (target: `vyasac`):**

1. No leading/trailing whitespace in `html_blocks`.
2. Opening tag abuts text content.

**Presentation line breaks (not pack lint):**

- Use publisher CSS (`white-space: pre-line` on `.verse`, `.rik`, etc.) and/or HTML output from the packer (`<br />` where the HTML backend emits breaks).
- **`SegmentBreak` is not a presentation knob.** It is the structural unit for [RFC-005 segment addressing](https://vyasa-docs/notes/rfc-005-segment-addressing/) (`…/d/s:1`, interlinear alignment, fine-grained links). `break_after` (RFC-016) inserts `SegmentBreak` nodes after danda, etc.; backends may render those as `<br />`, but the *purpose* is addressable segments, not “how to wrap a grid column.” Do not conflate segment addressing with packed-HTML whitespace hygiene.

---

## Reader controls (platform — planned)

These are **reader preferences**, separate from publisher `theme.vy`. They apply inside the content iframe via classes the viewer sets on `<html>`.

### Chrome vs content (do not conflate)

| Control | What it styles | Where | Today |
|---------|----------------|-------|-------|
| **Chrome theme** | App shell, library, sidebars | `ThemeProvider` light / dark / system | Settings → Appearance |
| **Chrome density** | UI spacing (`--density`) | vyasa-ui shell | Compact / Standard / Comfortable (3 steps) |
| **Content text size** | Publication text in iframe | `html` `--vyasa-text-scale` | Settings → Publication content (S/M/L) |
| **Content theme** | Publisher paper/ink | `html.theme-{id}` on iframe | Settings → Publication content (light/dark; `content_themes` later) |

`html.theme-light` (etc.) names a **presentation variant**. It is unrelated to grid stream hooks (`.vyasa-block-mula`).

**Why `style;css [ … ]css`?** `[` and `]` are Vyasa structure. A bare `` `style [ `` closes at the first `]` — including CSS `[attr]` or `]` inside `/* … */`. CSS `/* */` is **not** a Vyasa comment (those are `//` or `` `[ … ] ``). `vyasac pack` must fail if the packed layout looks truncated.

**Classes vs attribute selectors:** `html.theme-light` avoids `[` entirely. Attribute selectors are valid **inside** a delimited `style;css` block. The viewer sets `class="theme-{id}"` on iframe `<html>`. After pack, confirm with `vyasac inspect --table html_templates --limit 0` (full stylesheet, no inspect `warnings`).

### 1. Content text size — **3 steps**

Mirror density: **Small · Medium · Large**.

| Step | Scale | Typical use |
|------|-------|-------------|
| Small | `0.9` | Dense scripts, large monitors |
| Medium | `1` (default) | Matches publisher `theme.vy` base |
| Large | `1.15` | Accessibility, Devanagari on mobile |

```css
/* Viewer injects on iframe root; publisher tokens inherit */
html { font-size: calc(1rem * var(--vyasa-text-scale, 1)); }
```

Publishers: define sizes in `rem` / `em` so user scale multiplies predictably.

### 2. Content theme picker

User selects a **publication presentation theme** (not dark/light chrome). Variants live in `theme.vy` as `html.theme-{id}` rules.

**Manifest (proposed) — one field, first entry is default:**

```json
{
  "content_themes": ["neutral", "light", "dark", "parchment"]
}
```

- **Default** = `content_themes[0]` (no separate `content_theme` key).
- Viewer populates the settings dropdown from the array; on first load, apply index `0`.

**Who ships `neutral`?**

| Approach | Recommendation |
|----------|----------------|
| **Packer merges a standard `neutral` theme** into every `theme_layout` (vyasac built-in CSS block) | **Preferred** — shift left; one definition, all packs readable before publisher customizes |
| **Viewer injects fallback CSS** when manifest omits themes | **Thin safety net only** — reset margins, system font, no publisher branding; not a substitute for pack |

**TODO (vyasac):** Pack a minimal `html.theme-neutral` baseline into `theme_layout` when the publisher does not define one; ensure `content_themes` in manifest always includes it as `[0]` unless the publisher overrides the full array.

Viewer sets on iframe `<html>`:

```html
<html lang="sa" class="theme-parchment">
```

Publisher CSS pattern (classes only — no `[attr]` in `theme.vy`):

```css
html.theme-neutral {
  --vyasa-paper: #fafafa;
  --vyasa-ink: #1a1a1a;
}

html.theme-light {
  --vyasa-paper: #fcfcfc;
  --vyasa-ink: #333;
}

html.theme-dark {
  --vyasa-paper: #1a1a1a;
  --vyasa-ink: #e8e8e8;
}

html.theme-parchment {
  --vyasa-paper: #ebe1c8;
  --vyasa-ink: #3d3428;
  --vyasa-paper-panel: #f4ead6;
}
html.theme-parchment .content {
  background-color: var(--vyasa-paper-panel);
}
```

**Reference:** Yogavasistha `theme.vy` — parchment palette. Avoid styling `.urn-row` in publisher themes (platform chrome).

### 3. What publishers ship in `theme.vy`

| Include | Example |
|---------|---------|
| `:root` / `html` tokens | `--vyasa-font-deva`, `--vyasa-stream-body-size` |
| `html.theme-*` variants | `theme-light`, `theme-dark`, `theme-parchment`, … |
| Grid stream rules | `.vyasa-block-{streamId}` — see below |
| `body`, `.content` shell | Max-width, paper background |
| Craft-only rules | Prefer `reading.vy` (cards, meta) |

| Do not include | Why |
|----------------|-----|
| `.urn-row`, `.urn-gutter`, `.urn-badge` | Platform chrome |
| Duplicate `body` reset in `reading.vy` | Inherit `theme_layout` shell |

---

## Stream hooks for grid CSS

### How `.vyasa-block-{streamId}` is produced

Not magic — deterministic at weave time:

1. **Manifest** carries `streams_config` (from `vyasac.toml` `[build.default] streams = [...]`).
2. **Layout JSON** for the grid names each column’s `block` field with a stream id (`mula`, `iast`, `primary`, …).
3. **`weave_layout` (vyasav)** places each column’s packed `html_blocks` for that stream inside:

```html
<div class="vyasa-layout-grid" style="display:grid; gap:0.5rem; …">
  <div class="vyasa-layout-col vyasa-block-mula" style="grid-column:span 1">…packed HTML…</div>
  <div class="vyasa-layout-col vyasa-block-iast" style="grid-column:span 1">…packed HTML…</div>
</div>
```

The class is **`vyasa-block-` + layout column `block` id**. Publishers style that hook; they do not emit it in source.

| Class | Owner | Publisher styles? |
|-------|-------|-------------------|
| `.vyasa-layout-grid` | WASM | **No** — geometry only |
| `.vyasa-layout-col` | WASM | **No** |
| `.vyasa-block-{streamId}` | WASM | **Yes** — stream column typography |
| `.verse`, `.rik`, … | Packed HTML | **Yes** — inner tags, `pre-line`, etc. |

Use **`.vyasa-block-{streamId}`** in `theme.vy` (explicit, namespaced, no collision with inner `.mula` / `.iast` classes from `context.vy` or packed HTML).

---

## CSS architecture — tokens once, two surfaces

### `theme.vy` — tokens + grid + content themes

```css
:root {
  --vyasa-font-deva: 'Noto Sans Devanagari', sans-serif;
  --vyasa-font-body: 'Noto Serif', serif;
  --vyasa-stream-body-size: 1.05rem;
  --vyasa-stream-body-line: 1.5;
  --vyasa-stream-body-color: #334155;
  --vyasa-stream-commentary-size: 0.95rem;
  --vyasa-stream-commentary-color: #555;
}

.vyasa-block-mula {
  font-family: var(--vyasa-font-deva);
  font-size: var(--vyasa-stream-body-size);
  line-height: var(--vyasa-stream-body-line);
  color: var(--vyasa-stream-body-color);
}
.vyasa-block-mula .verse {
  white-space: pre-line;
  overflow-wrap: break-word;
}

.vyasa-block-iast {
  font-family: var(--vyasa-font-body);
  font-style: italic;
  font-size: var(--vyasa-stream-body-size);
  color: var(--vyasa-stream-commentary-color);
}
.vyasa-block-iast .verse {
  white-space: pre-line;
  overflow-wrap: break-word;
}
```

### `reading.vy` — craft only

- Verse card, speaker line, centered layout
- Reuse `var(--vyasa-stream-*)` — no second `body { }` block
- `` `stream { ref="mula" } `` in `item` template

---

## Gutter & content width

**Deferred.** The reader already exposes a **left-sidebar toggle** for the annotation gutter (`ReaderNavigationPanel` → Annotations). Reference URN badges remain in the iframe gutter for now. Revisit full-width content and gutter placement after vyasa-bg `theme.vy` is the reference example.

---

## Stream order

```toml
# vyasac.toml
[build.default]
streams = ["mula", "iast"]
```

Writes `streams_config` to manifest for grid column order.

---

## vyasa-bg iteration checklist

Use **vyasa-bg** as the template for all publications.

### Phase A — `theme.vy` (tokens + grid + content themes)

- [x] vyasa-bg: `:root` tokens + `html.theme-light` / `html.theme-dark`
- [x] vyasa-bg: grid rules on `.vyasa-block-mula` / `.vyasa-block-iast` only
- [x] vyasa-bg: craft styles moved to `_reading.vy` (draft)
- [x] vyasa-bg: `build.default.streams = ["mula", "iast"]`
- [ ] Repack vyasa-bg and verify grid at `/adi/vysamples/vyasa-bg/1`
- [ ] Manifest `content_themes` when vyasac field exists (first = default)

### Phase B — `reading.vy` (craft)

- [x] Promote `_reading.vy` → `reading.vy`; `style;css` delimited CSS
- [x] Viewer: `theme_layout` wraps all views; `reading_layout` wraps items only
- [x] Stacked verse card (centered column) vs grid columns — nav labels Grid (columns) / Reading (stacked)
- [x] Tokens + `white-space: pre-line` on `.verse-block .mula` / `.iast`

### Phase C — pack quality (`vyasac inspect`, not sqlite3)

Packed artifact: `dist/vyasa-bg/vyasa-bg.vyview` (after `bun run build:vyasa-bg`).

```bash
vyasac inspect dist/vyasa-bg/vyasa-bg.vyview
vyasac inspect --table html_templates dist/vyasa-bg/vyasa-bg.vyview
vyasac inspect --urn 1:1 dist/vyasa-bg/vyasa-bg.vyview
vyasac inspect --check dist/vyasa-bg/vyasa-bg.vyview
```

Expect: `theme.layout` with `{{ body }}` and no template warnings; `streams_config=["mula","iast"]`; verse `1:1` HTML with **no** newline immediately after `<div class="verse">`.

- [ ] Inspect summary: `streams_config`, `.vyasa-block-*` CSS present in `html_templates`
- [ ] `--urn 1:1`: mula/iast `stream_name`, no leading-newline warning
- [ ] `--check` exits 0
- [ ] Reload grid at `/adi/vysamples/vyasa-bg/1`

### Phase D — platform / vyasac (separate PRs)

- [x] Content text size: 3-step setting → `--vyasa-text-scale` on iframe
- [x] Content theme picker (`theme-light` / `theme-dark` until manifest `content_themes`)
- [ ] **vyasac:** pack built-in `neutral` theme baseline; emit `content_themes` in manifest
- [ ] **vyasac:** deprecate per-file `default.html` for platform-targeted publications

### Phase E — rigveda

Apply same pattern after vyasa-bg is stable.

---

## Checklist before publish

- [ ] `theme.vy` structure (`{{ body }}`); tokens and `html.theme-*` in `.css` (`publisher_css` / `css`)
- [ ] `reading.vy` craft-only; no duplicated base CSS
- [ ] Packed HTML spot-check (no leading newlines)
- [ ] Grid + reading typography aligned
- [ ] No `.urn-*` overrides in publisher CSS
- [ ] `streams_config` / `build.streams` order declared
- [ ] `content_themes` in manifest (first entry = default)

---

## Related docs

| Doc | Role |
|-----|------|
| [Template Guide](https://vyasa-docs/guides/template-guide/) | `context.vy` command templates |
| [RFC-005 Segment Addressing](https://vyasa-docs/notes/rfc-005-segment-addressing/) | `SegmentBreak` and `/s:N` paths |
| [RFC-016 Break-After](https://vyasa-docs/notes/rfc-016-break-after/) | Danda → `SegmentBreak` (addressing + HTML `<br />`) |
| [`explicit-workspace-design.md`](../../notes/explicit-workspace-design.md) | Viewer vs publisher obligations |

---

## Open questions

1. **Packer `neutral` theme** — always prepend to `content_themes`, or only when publisher omits themes?
2. **Gutter** — revisit after vyasa-bg example lands.
3. **Publisher simplification** — which `theme.vy` sections can vyasac generate from tokens alone?
