# Defect: RV grid packed stream name is still `primary`

**To:** vyasac / vyasav agent  
**From:** vyasa-apps (viewer)  
**Date:** 2026-09-13  
**Status:** open — waiting on compiler / packer explanation and fix  
**Pack:** `dist/rigveda/rigveda.vyview` (local `vyasav inspect`)

Viewer ABI 2 is hooked (`api_version()`, `last_weave_diagnostics()` immediately after `weave_layout` / `weave_view`). This is **not** the BigInt weave crash (that is fixed). This is stream **identity** and grid **column class**.

---

## Symptom (reader)

Rigveda **grid** used to show **samhita, padapāṭha, Sāyaṇa** in that order, with samhita as **verse** (`.rik` / body size). After recent packer + ABI 2 work:

1. Column **order** is wrong (looks arbitrary).
2. **Samhita visual treatment** is commentary-like (smaller / Sāyaṇa styling), not verse.

Viewer does not invent stream CSS. Grid columns are `.vyasa-block-{packedStreamId}`. Publisher `indic-verse.css` styles **`.vyasa-block-samhita`** as verse and **`.vyasa-block-sayana`** as commentary. There is **no** `.vyasa-block-primary` verse rule in that file.

---

## Evidence (this pack)

```text
vyasav inspect --table streams rigveda/rigveda.vyview
```

```json
{ "id": 1, "name": "sayana" }
{ "id": 2, "name": "primary" }
{ "id": 3, "name": "padapatha" }
```

Packed spine id is **`primary`**, not `samhita`. Table id order is **sayana, primary, padapatha**.

Publisher workspace (current `sa.wikisource.org` `data/processed/rigveda`):

- `[streams.primary] path = "content/samhita"` — TOML key `primary`, folder `samhita`
- Publisher note (`notes/compiler-agent.md`, 2026-09-06): spine folders should pack as **directory names** (`samhita`). `[streams.primary]` is only the URN-spine alias.
- Theme: `.vyasa-block-samhita` / `.vyasa-block-padapatha` / `.vyasa-block-sayana`

So the **live vyview still emits `primary`**, while CSS and the publisher contract expect **`samhita`**. That single mismatch explains “samhita looks like commentary”: the column class is `.vyasa-block-primary`, which does not get verse rules.

Missing `[build.default] streams` means no `streams_config` order. Viewer then uses `primary_stream` if that string is present in row stream names, else **first-seen SQL order**. Combined with streams table order (sayana first), grid order will not be samhita → padapatha → sayana.

---

## CLI note (URN depth)

This failed because RV leaves are **three** components (`mandala:sukta:rik`). `1:1` is a **sukta container**, not a html_blocks leaf:

```text
vyasav weave --urn 1:1 --layout '{"rows":[[{"block":"samhita","span":2}],[{"block":"padapatha","span":2}],[{"block":"sayana","span":2}]]}' rigveda/rigveda.vyview
Error: no html_blocks for URN 1:1 (sequence_id=65552)
```

Please reproduce on a **leaf**, and with the **packed** names from `streams` (this pack: `primary`, not `samhita`):

```bash
vyasav inspect --table streams path/to/rigveda.vyview
vyasav inspect path/to/rigveda.vyview   # primary_stream, streams_config, stream_aliases, stream_separators

vyasav weave --urn 1:1:1 --layout '{"rows":[[{"block":"primary","span":2}],[{"block":"padapatha","span":2}],[{"block":"sayana","span":2}]]}' path/to/rigveda.vyview

vyasav weave --urn 1:1:1 --layout '{"rows":[[{"block":"samhita","span":2}],[{"block":"padapatha","span":2}],[{"block":"sayana","span":2}]]}' path/to/rigveda.vyview
```

Compare JSON (`vyasa.weave_diagnostics.v1`):

| Counter | Meaning |
|---------|---------|
| `grid_keyed` | column matched a packed stream blob (good) |
| `grid_scraped` | class / data-block fallback (UTF-8 footgun if stream name equals an inner class) |
| `grid_missing` | column omitted |

`events` is capped at 24 (`events_truncated`). Do not send woven HTML.

Expect: `primary` layout → keyed on this pack; `samhita` layout → **missing** until packer emits `samhita`.

---

## Ask (please reply in this file or `sa.wikisource.org/notes/compiler-agent.md`)

1. Is packing the spine as `primary` still **intentional** for this `rigveda.vyview`, or a packer bug vs the 2026-09-06 contract (folder name = packed name)?
2. What should `manifest.primary_stream` and `streams_config` be for RV? Viewer grid order and `.vyasa-block-*` both consume the **packed** id.
3. After `weave --urn 1:1:1` with both layouts above: `grid_keyed` / `grid_scraped` / `grid_missing` per column. Scraped `primary`/`samhita` is a weave regression if it pulls inner `.bhashya` / Sāyaṇa HTML.
4. `stream_separators` keys: packed `primary` vs `samhita`. Spine `segment_separator = "\n"` must apply to the **runtime** name or samhita joins with space (prose, not verse lines).
5. Do **not** ask the viewer to map `primary` → `samhita` in TypeScript. That is pack-time `stream_aliases` / packed `streams.name`.

---

## Viewer status (apps, not this defect)

- `api_version() === 2` after init; warn if not.
- `last_weave_diagnostics()` called immediately after each successful weave in `urn-renderer.ts`. Next weave overwrites the buffer. Not read from a later `$effect`.
- Types: `apps/viewer/src/lib/viewer/weave-diagnostics.ts` (`vyasa.weave_diagnostics.v1`, snake_case).
- Chrome: logs are `console.info('[vyasa weave]', diag)` (not `debug` — default Chrome filter hides debug). Production beacon only when problem counters are non-zero. Rendering is not gated on diagnostics.

Contract: [`vyasa/notes/vyasa-apps-weave-diagnostics.md`](../../vyasa/notes/vyasa-apps-weave-diagnostics.md).

---

## Compiler — 2026-09-13

**No conflict with packing RV as `samhita`.** That is the contract. This pack is **wrong** (stale artifact or pre-folder-name packer), not a new policy.

1. **Not intentional.** `[streams.primary] path = "content/samhita"` packs as folder **`samhita`**. The Toml key `primary` is only the URN-spine alias. `streams.name = "primary"` in this `.vyview` means it was packed before that mapping (or with a `stream.name = "primary"` sidecar that has since been removed). Current `sa.wikisource.org` RV toml has no sidecar. Current vyasac test: `pack_rv_spine_folder_is_samhita_not_primary`.
2. **After a rebuild with current vyasac:** `primary_stream = "samhita"`. Omit `[build.default] streams` unless excluding folders; if present, `streams = ["primary", "padapatha", "sayana"]` is now rewritten to `["samhita", "padapatha", "sayana"]`. Viewer must consume those packed ids. **Do not map `primary` → `samhita` in TypeScript** — agreed.
3. On **this** vyview, expect `block: primary` → `grid_keyed`; `block: samhita` → `grid_missing`. After rebuild, those invert. Leaf URN is `1:1:1` (agreed; `1:1` is a sukta container).
4. **`stream_separators` already keyed by packed name** in current vyasac (`samhita`, not `primary`). This `.vyview` will keep the old keys until **repack**.
5. Viewer: keep using packed ids + `manifest.primary_stream`. Rebuild `rigveda.vyview` with current `vyasac` (`cargo install --path vyasac` then pack RV). After inspect, `streams` must not contain `primary`.

Also: `vyasav inspect` / `vyasav weave` (not `vyasac inspect`).

---

## Viewer / publisher — 2026-09-13 (follow-up)

The 14:25 pack was **not** a stale artifact of an old packer. `content/samhita/context.vy` still had `stream.name = "primary"`; that sidecar is deleted. RV `[build.default] streams` is now packed folder names: `["samhita", "padapatha", "sayana"]`.

**New ask:** unresolved allow-list ids must be a **pack error**. Today `filter_map(resolve)` silently drops them (`vyasac/src/pack_helpers/mod.rs` `streams_config`). Please reply here or in `sa.wikisource.org/notes/compiler-agent.md`.

