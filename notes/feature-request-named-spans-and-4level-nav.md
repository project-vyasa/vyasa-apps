# Feature request: named spans in the reader + 4-level nav review

**For:** `vyasa-apps` viewer agent
**Triggered by:** Taittirīya Saṃhitā (`sa.wikisource.org`) Explore screenshot 2026-09-12 — `featured` paints sparse non-contiguous cells in kāṇḍa 1–3, counts 42 / 45, not the two praśnas Śrī Rudram (4.5, 27 mantras) and Camakam (4.7, 39 mantras).
**Test package:** `sa.wikisource.org/sa_wikisource/dist/taittiriya-samhita/taittiriya-samhita.vyview` via local catalog (`localhost:9100` / samples Caddy).
**Do not** hard-code `sri_rudram`, `camakam`, kāṇḍa, or Taittirīya in viewer production code. Treat `featured` like any other graph annotate key.

Publisher notes: `sa.wikisource.org/notes/taittiriya.md` §4 and §8.

---

## 1. Explore paints the wrong leaves (bug)

### What the screenshot shows

Explore map mode **FEATURED**, values:

| Value | Count in UI | Canonical span | Real leaf count |
| :--- | ---: | :--- | ---: |
| `sri_rudram` | 42 | TTS **4.5** | **27** |
| `camakam` | 45 | TTS **4.7** | **39** |

Colored cells are **scattered** (e.g. Anuvāka 2.1.4, 2.2.4, 2.2.5) — not a contiguous praśna. Kāṇḍa 4 is off-screen; even if 4.5/4.7 are also painted, the false positives dominate the visible map.

### Packed data is correct

```vy
`annotate "4:5:0:0" { featured=sri_rudram }
`annotate "4:7:0:0" { featured=camakam }
```

(Trailing `:0:0` is a publisher pad: `UrnEncoder` right-aligns a short `"4:5"` to `0:4:5`. `toRelativeUrn` strips trailing `:0` → `"4:5"` / `"4:7"` at load.)

Graph: two `Featured` value nodes, two `FEATURED` edges, targets decode to `[4,5,0,0]` and `[4,7,0,0]`.

### Root cause in the viewer

`applyFacetToLeaves` (`apps/viewer/src/lib/explore/facet-index.ts`) keeps a leaf when **either**:

- `urnCoversLeaf(source, leaf)` — prefix / descendant, **correct** (`4:5` covers `4:5:1:1`)
- `urnsReferToSameBlock(source, leaf)` — **suffix** match

```ts
// urn-utils.ts
return a.endsWith(`:${b}`) || b.endsWith(`:${a}`);
```

That second clause was meant for `urn:vyasa:…:1:3` vs `1:3`. On a 4-level spine it matches **any** leaf whose last two segments equal the container:

| Annotate | False-positive leaf | Why |
| :--- | :--- | :--- |
| `4:5` | `2:1:4:5` | `2:1:4:5`.endsWith(`:4:5`) |
| `4:7` | `2:2:4:7` | same |

Verified on the packed tree: **15** extra `:4:5` leaves + **6** extra `:4:7` leaves → **42** and **45**. Exact screenshot counts.

The same suffix test is used as a fallback in `urn-renderer.ts` when `annotationsByUrn` is missing (`node.urn.endsWith(':' + ann.urn)`).

### Request

1. **Prefix-only coverage for container → leaf.** `urnCoversLeaf` (after `toRelativeUrn`) is the descendant rule. Do **not** use `endsWith(':' + container)` to attach a container annotation to a leaf.
2. Keep `urnsReferToSameBlock` only for **global-prefix vs relative** of the **same** path (`urn:vyasa:pkg:1:3` ≡ `1:3`), or drop it from `applyFacetToLeaves` entirely if `toRelativeUrn` already ran.
3. Tests (synthetic 4-level tree, no TTS names):
   - `urnCoversLeaf('4:5', '4:5:1:1') === true`
   - `urnCoversLeaf('4:5', '2:1:4:5') === false`
   - `buildFacetIndex` with annotate `{ urn: '4:5', label: 'Featured', attributes: { value: 'span_a' } }` paints **only** leaves under `4:5`, count = that subtree size — not `2:1:4:5`.
   - Existing `urnsReferToSameBlock('urn:vyasa:1:3', '1:3')` stays green if you keep that helper.

**Acceptance (TTS package, no TTS constants in viewer):** Explore FEATURED map colors two **contiguous** praśnas in kāṇḍa 4; counts **27** and **39**; kāṇḍa 2 cells for 2.1.4 / 2.2.4 are unmarked.

---

## 2. Named spans must appear in book / reader view (feature)

Explore coloring is a discovery aid. Readers open **Śrī Rudram** / **Camakam** to **read** them. Today:

- Reader sidebar is the anuvāka list only. Group heading is `Kāṇḍa 4 (Prasna 5)`, not the span title.
- `indexAnnotationsByUrn` keys the **exact** annotate URN. A container edge on `4:5` does not badge `4:5:1:1` in the gutter.
- Reading template shows `{{ kanda }}.{{ prasna }}.{{ anuvaka }}.{{ mantra }}` numbers, not the featured name.

### Request (schema-neutral)

Any graph annotate that the explorer already treats as a categorical facet (here `attr:featured`) is a **named span**. Surface it in the **reader**, not only Explore:

1. **List named spans** in reader navigation (above or beside the structure sidebar): label from vocabulary `entities` / `facets` if packed, else the value id.
2. **Activate a span** → jump to its first covered leaf and keep the reading viewport on that span (all descendant leaves, not a single anuvāka). Deep link should round-trip (URL / last URN).
3. **Gutter / chrome:** container annotations apply to descendant leaves via `urnCoversLeaf`, same rule as Explore after the suffix fix. Optional badge with the span label while that leaf is in view.
4. **No publication-specific UI copy** (`sri_rudram` etc.). If a work has no such annotate edges, the list is empty / hidden.
5. RV 3-level and BG must not regress (no extra empty “Featured” chrome on works without the facet).

**Acceptance:** From TTS reader, choose the Rudram span → land on 4.5.1.1 (*namas te rudra manyave*) and can read through 4.5 without hunting kāṇḍa 4 in the anuvāka list. Same for Camakam → 4.7.1. Explore remains the map; reader is the reading path.

Publisher can add `vocabulary` labels later (`sri_rudram` → श्रीरुद्रम्). Viewer should already work with raw ids.

---

## 3. Code review: sidebar grouping at leaf-block depth 4

**Uncommitted in `vyasa-apps`** (publisher agent, 2026-09-12). Please review, do not rewrite blindly. RV 3-level test must stay green.

### Bug

Reader sidebar for TTS (hierarchy `kanda, prasna, anuvaka, mantra`; sidebar rows = **anuvākas**, path length 3).

Old code:

```ts
const parentPart = pathParts.length > 1 ? pathParts[pathParts.length - 2] : '';
const parentSemanticTitle = parentPart ? titles[parentPart] : undefined;
```

`titles` is keyed by **full relative URN** (`"2"`, `"2:1"`, `"2:1:1"`), not by a single segment. For anuvāka `1:2:1`, `parentPart === "2"` → `titles["2"]` = **Kāṇḍa 2**. Symptom: under a **Kāṇḍa 2** heading, items titled **Anuvāka 1.2.y**.

3-level RV still worked: parent of sukta `1:1` is `"1"` = mandala.

### Patch to review

`apps/viewer/src/lib/viewer/sidebar-items.ts` — look up **full** parent / grandparent ids:

```ts
const parentId = pathParts.length > 1 ? pathParts.slice(0, -1).join(':') : '';
const grandparentId = pathParts.length > 2 ? pathParts.slice(0, -2).join(':') : '';
const grandparentTitle = grandparentId ? titles[grandparentId] : undefined;
const parentSemanticTitle = parentId ? titles[parentId] : undefined;
const groupTitle = grandparentTitle
  ? `${grandparentTitle} (${groupLabel} ${parentPart})`
  : parentSemanticTitle
    ? `${parentSemanticTitle} (${groupLabel} ${parentPart})`
    : /* numeric fallback */;
```

Test added in `sidebar-items.test.ts`: 4-level tree, `1:2:*` groups as `Kāṇḍa 1 (Prasna 2)`, `2:1:1` as `Kāṇḍa 2 (Prasna 1)`. Existing mandala/sukta expectation unchanged.

### Review questions

1. **Depth policy.** Group heading is always the **grandparent of the sidebar row** (two levels up from the navigable container). Depth 3 rows (TTS) → kāṇḍa. Depth 4 rows (a future 5-level URN) would group by the **second** component, not the root. Is that the rule we want, or should group-by be `pathParts[0]` / `urnComponents[0]` once path length ≥ 3?
2. **Collision class.** Any numeric segment that also exists as a top-level `titles["N"]` will hit this. Confirm no remaining `titles[lastSegment]` lookups in nav / explore.
3. **Placeholder `:0`.** Rows with no leaves are skipped (`catalogLeafIndices`). Empty `2:0` “Node 2:0” tiles in Explore are a separate catalog-tree issue; out of scope unless you touch tree walk.
4. **Related (optional in this pass):** `viewportLeafFetchLimit` in `urn-renderer.ts` over-fetches so a 1-leaf container is not an empty page (`:0` header eats `LIMIT 1`). A 1-mantra anuvāka can now show a few **following** leaves. Tighten without bringing back blank 1.1.1.

---

## Suggested order

1. Fix suffix matching (Explore counts + map) — small, tests first.
2. Review / land the 4-level sidebar patch (already in tree).
3. Named spans in reader navigation (this FR’s product work).

## Out of scope for this viewer pass

- Publisher PUA / `[N]` stripping (done in `sa.wikisource.org`).
- Compiling `UrnEncoder` left-align for short annotate URNs (publisher pads `:0:0` today; optional compiler follow-up).
- Vocabulary / Devanagari labels for `sri_rudram` (publisher can add `vocabulary/entities.vy` after reader chrome exists).
