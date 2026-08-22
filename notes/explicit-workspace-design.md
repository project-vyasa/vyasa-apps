# Explicit workspace design (viewer obligations)

> Platform-side companion to publisher-facing principles.  
> Canonical authoring doc: [`vyasa-samples/notes/explicit-workspace-design.md`](../../vyasa-samples/notes/explicit-workspace-design.md)

## Summary for platform work

Vyasa’s **compiler and packed publications** carry domain meaning. The **viewer** serves ~10¹⁰ readers and may optimize UX — but must not re-introduce domain logic that publishers already resolved (or should have resolved) at build time.

**Publisher rule:** explicit workspace definitions, pack-time validation, manifest carries resolved outcomes.

**Viewer rule:** consume the manifest; stay domain-neutral; no hardcoded symbol fallbacks.

---

## What the viewer must not do

Code review regularly flags **hardcoded domain symbols** in runtime paths. The vocabulary lookup in `urn-renderer.ts` is a current example:

```typescript
// Legacy — remove when manifest-driven fallback lands
match = vocabulary.find(v =>
  … && (v.stream_name === 'vocabulary' || !v.stream_name
    || v.stream_name === 'mula' || v.stream_name === 'devanagari'
    || v.stream_name === 'primary'));
```

This hides misconfigured publications and encodes vyasa-bg-specific stream names into a general-purpose viewer.

### Target behaviour

1. Load `primary_stream` id and per-stream **pre-merged** localization tables from manifest.
2. Resolve display labels by stream id + category + key — no `extend` resolution at runtime.
3. If a label is missing at runtime, show the raw key or a generic placeholder — **do not** guess from a built-in stream-name list.

Pack failures are preferable to silent wrong labels: publishers fix `localization.vy`; readers never see inconsistent chrome.

---

## Vocabulary vs localization (viewer impact)

| Layer | Packed as | Viewer uses for |
|-------|-----------|-----------------|
| **Vocabulary** (RFC-019 §4) | Entity aliases, canonical IDs | Annotation labels, search, graph facets — keyed by semantic ID |
| **Localization** | Per-stream display strings | Structure chrome (“adhyāya”, “śloka”, “ṛc”) for active stream |

The viewer should not treat the `vocabulary` SQLite stream name as a magic default bucket. That was a pack artefact, not a design contract.

---

## Primary stream (option C)

Publishers declare in `vyasac.toml`:

```toml
[streams]
primary = { path = "content/mula" }
iast      = { path = "content/iast" }
```

The packer resolves `` `localization { extend = "…" } `` at pack time and writes one flat table per stream. The viewer reads `primary_stream` for context only — not for inferring URNs or walking label inheritance.

---

## Grid view stream styling (publisher theme)

**Grid** does not apply `context.vy` stream command templates (`mula`, `samhita`, …). `weave_layout` injects **raw packed `html_blocks` HTML** into WASM columns:

| WASM class | Owner | Publisher may style? |
|------------|-------|----------------------|
| `.vyasa-layout-grid` | vyasav (row/column gap) | No — layout geometry only |
| `.vyasa-layout-col` | vyasav (column wrapper) | No — do not hijack viewer chrome |
| `.vyasa-block-{stream}` | vyasav (`{stream}` = layout JSON block id) | **Yes** — primary styling hook |
| `.urn-row`, `.urn-text`, `.urn-gutter` | platform viewer chrome | **No** — never override in publisher theme |

Declare grid stream typography and `white-space` in **`templates/html/views/theme.vy`** (packed as `theme_layout`), scoped to `.vyasa-block-{stream}` and inner packed tags (`.verse`, `.rik`, `.bhashya`):

```css
/* vyasa-bg example */
.vyasa-block-mula .verse { white-space: pre-line; overflow-wrap: break-word; }

/* rigveda example */
.vyasa-block-primary .rik { white-space: pre-line; overflow-wrap: break-word; }
```

The **viewer must not set `white-space`** on woven content. Segment breaks (`\x1f` → join char at weave) and packed newlines are publisher presentation concerns.

Reading view still uses stream templates + view-specific CSS (`reading_layout`); grid uses `theme_layout` + `.vyasa-block-*` rules.

Publisher guide (draft): [`docs/guides/view-templates-guide.md`](../../docs/guides/view-templates-guide.md) → vyasa-docs.

---

## Allowed “magic” in the viewer

Acceptable without publisher declaration:

- Responsive layout, font loading, scroll behaviour
- Graceful degradation when optional enrichment tables are absent
- Caching, prefetch, accessibility affordances

Not acceptable:

- Fallback lists of stream names or label languages
- Assuming Devanagari/IAST/English conventions
- Silently substituting structure terms (`verse` → `śloka`) without manifest data
- Setting `white-space` (or other stream typography) on `.urn-text`, `.vyasa-layout-col`, or woven body HTML
- Publisher themes overriding viewer chrome (`.urn-row`, `.urn-gutter`, …) instead of `.vyasa-block-{stream}`

---

## Implementation tracking

| Item | Location | Notes |
|------|----------|-------|
| Remove hardcoded vocabulary stream fallbacks | `apps/platform/src/lib/viewer/urn-renderer.ts` | Blocked on manifest fields from vyasac |
| Load `primary_stream` from manifest | `publication-loader.ts` | |
| Use merged localization table only | `urn-renderer.ts`, explore/nav labels | |
| Pack-time localization merge | `vyasa/vyasac` | See compiler backlog |
| Grid stream `white-space` / typography | Publisher `theme.vy` → `.vyasa-block-{stream}` | Viewer must not set `white-space` on woven content |

Queue: [`notes/WORK.md`](./WORK.md) · samples: [`vyasa-samples/notes/WORK.md`](../../vyasa-samples/notes/WORK.md)

---

## Agent handoff

Before adding viewer logic that references stream names, entity keys, or structure labels:

1. Check whether the packer can emit it in the manifest instead.
2. If publishers must declare it, document the workspace file (`localization.vy`, `vyasac.toml`).
3. Never duplicate vyasa-bg conventions as global defaults in TypeScript.
