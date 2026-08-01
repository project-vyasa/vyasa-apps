# Atlas — a high-density activity for structured content and graph relationships

> Status: **draft for review** · 2026-08-01
> Provenance: reconciled against the Gemini thread *“High-Density Ancient Text
> Visualization”* (full transcript read from PDF). Where this doc declines a
> recommendation from that thread, it says so and why — see §5.3.
> Related: [`catalog-identity.md`](./catalog-identity.md) · [`explicit-workspace-design.md`](./explicit-workspace-design.md) ·
> graph model: `sa.wikisource.org/notes/entities-and-graph-enrichment.md`

**Design target** (from the thread): ~20,000 verses, ~600 chapters, organized into
books. Per-verse attributes, plus graph entities (speaker, event, deity, composer)
that connect to verses as facets. High-cardinality facets (~80 distinct deities;
similar for composers). Connection lines representing **nested narrative frames**,
**concurrent conversations**, and **temporal ordering of events**. Selection on the
canvas must hand off to a reading view.

---

## 1. Problem

Explore is a good *coverage* instrument, but it has a density ceiling, an encoding
ceiling, and no relationship fidelity:

| Limitation | Evidence |
|---|---|
| **Density ceiling** | 14 px cells, 10 per row, one SVG-ish card per container. A 20k-verse text across 600 chapters cannot be seen whole; YV needs scrolling hundreds of chapters even with the new gap filter. |
| **Encoding ceiling** | A leaf is one colored square. `cornerGradient` tops out at 4 values, and — worse — the geometry *changes shape* with the number of present facets, so the same facet occupies a different slice on different leaves (§8.2). |
| **Palette collision** | `facetColor(i) = FACET_PALETTE[i % 8]`. With ~80 deities, the 1st, 9th and 17th deity render **identically**. Currently misleading, not just limited (§8.1). |
| **Graph flattened to facets** | The pack carries a real graph — `Entity —PARTICIPATES_IN→ Event —ANCHOR→ urn`, typed `RISHI`/`DEVATA`/`CHANDAS` edges, `IN_FRAME` layers — but the viewer projects it to per-leaf facet keys. Nesting, concurrency, temporal order and co-occurrence are all unrepresentable. |
| **No macro reading** | Nothing answers “what is the shape of this text?” at a glance — the question dense visualization exists to answer. |

The ask: a new activity with **higher density** and **full-fidelity graph
relationships rendered when needed** — not always, *when needed*.

## 2. Design goals

1. **Whole text on one screen.** 20k leaves legible in a single viewport, no scroll.
2. **Micro/macro reading** (Tufte, *Envisioning Information*): one graphic that
   rewards a glance (shape, gaps, rhythm) *and* a lean-in (a verse, its entities,
   its edges). Detail emerges by zoom, not navigation.
3. **Graph fidelity on demand.** Positional and color encoding by default; edges
   materialize for a selection. Never a hairball.
4. **Stable encoding.** A given facet occupies the same slot on every leaf, so
   comparison across thousands of marks is preattentive.
5. **Data-ink discipline.** No grid chrome, no legend where direct labels work, no
   borders where whitespace works.
6. **Generic over publications.** Driven by manifest + vocabulary + graph tables.
   No `vyasa-bg` conventions hardcoded (`explicit-workspace-design.md` rule 3).
7. **Print-plausible.** The macro view should be something a graphics desk would
   publish: restrained palette, typographic hierarchy, direct annotation.

**Non-goals:** replacing Explore (it stays the QA/coverage tool); free-form graph
editing; cross-publication graphs (needs the `CatalogLink` resolver first).

## 3. Precedents

| Precedent | What we take |
|---|---|
| **Wattenberg — *Shape of Song* / arc diagrams** | The canonical proof that a 1-D sequential arrangement can host overlapping, nested arcs without losing positional context. This is the direct ancestor of §4.6. |
| **Voyant — *Micro-Matrix*, *Knots*** | Digital-humanities precedent for compressing whole books into dense pixel grids with a coupled panel reader. Validates the matrix + Book Mode pairing. |
| **Tufte — sparklines** | Word-sized intense graphics: a container gets a density strip, not a paragraph of statistics. |
| **Tufte — small multiples** | Books/chapters as repeated panels at identical scale, so comparison is preattentive. |
| **Tufte — layering & separation** | Muted structural field; one saturated hue for the active selection. Separation by whitespace, not rules (avoid “1 + 1 = 3” clutter). |
| **Minard** | Flow along a spine. A speaker sequence is a *narrative flow*, best read in document order — not as a node cloud. |
| **NYT graphics** | Direct labeling on the graphic; annotation callouts for the interesting datum; interaction reveals, never decorates. |
| **Genome browsers (IGV/UCSC)** | The structural answer to “long linear sequence + typed annotations”: wrapped coordinate spine, aligned annotation tracks, semantic zoom. |
| **Mosaic (UW IDL)** | Cross-filter discipline: precomputed masks, sub-10 ms facet updates, canvas repaint decoupled from query. We adopt the *pattern* without the DuckDB dependency (§5.3). |

## 4. Proposal — the “Atlas” activity

One sentence: **a wrapped structural spine of every leaf in the publication,
rendered at 3–16 px per leaf with semantic zoom, fixed-slot glyph encoding,
annotation tracks, and selection-materialized graph arcs.**

Name: *Atlas*. Alternatives: *Tapestry*, *Loom* (on brand with weave, but cute),
*Census*. Worth settling early — it fixes the route segment.

### 4.1 Zoom strata

```
Stratum    px/leaf   20k-verse text            What is legible
────────   ───────   ───────────────────────   ──────────────────────────────
S1 Macro     3–4     whole text, one screen    shape, gaps, entity rhythm
S2 Meso      8–16    a book / few chapters     chapter bounds, glyph slots, tracks
S3 Micro     full    one chapter               text snippet, all edges, labels
```

The macro budget works out comfortably. At a 4 px pitch in a 1400 px content
column: 350 leaves per row, 20,000 / 350 ≈ **58 rows ≈ 232 px tall**, plus book-band
gutters. Even at a 6 px pitch it is ~86 rows ≈ 516 px — still one viewport. So S1
has headroom, and *small texts scale up rather than the reverse*: BG at 700 verses
auto-selects a larger pitch instead of rendering as a postage stamp.

Zoom is **semantic**, not geometric — each stratum is a distinct layout pass, not
a scaled bitmap. Wheel/pinch crosses thresholds; double-click a band zooms into it.

### 4.2 The leaf glyph — answering the hexagon question

The thread asked specifically: *hexagon with 4 corner triangles?* **Decline** — and
the thread's own reasoning is right, with two additional reasons from our codebase:

| | Square grid | Hexagon + 4 corners |
|---|---|---|
| Packing | 100%, seamless | Dead space or staggered honeycomb offset |
| Symmetry | 4 × 90° splits naturally | 6-fold symmetry; 4 regions require 2 large + 2 small → **size implies importance** |
| Hit-testing | position → ordinal is O(1) arithmetic | Needs a spatial index (extra memory, extra code) |
| Reading order | Rows align with chapter/book boundaries | Staggered rows blur the boundary the eye is looking for |

Document order is the sacred axis here, and a honeycomb offset fights it. Stay
rectangular.

For encoding several facets per leaf, the thread offered quadrants *or* stripes.
**We choose fixed-slot stripes**, because of the failure mode described in §8.2:
with conic/diagonal gradients the geometry depends on *how many* facets are
present, so the same facet lands in a different place on different leaves. Stripes
give every facet a permanent slot:

```
S2/S3 glyph (8–16 px)          Slot assignment (publication-configurable)
┌──────────────┐               ── slot 1: primary entity (speaker / composer)
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ slot 1        ── slot 2: secondary entity (deity)
│░░░░░░░░░░░░░░│ slot 2        ── slot 3: class/type (meter)
│▒▒▒▒▒▒▒▒▒▒▒▒▒▒│ slot 3        ── base:   stream coverage (full vs half height)
└──────────────┘
```

Properties that matter at scale: a missing facet **collapses to neutral** without
moving its neighbours; the glyph reads like a mini-barcode, so rows of them form
legible *texture* rather than noise; and slot order is stable across the corpus.

At S1 (3–4 px) stripes are below the legibility floor, so the glyph degrades to a
**single fill = the one active facet**, with coverage still encoded as half-height.
That degradation is explicit, not accidental: density buys you *one* channel, and
the honest move is to say which one.

### 4.3 Encoding channels

| Channel | Encodes | Available at |
|---|---|---|
| **Position** | URN order + hierarchy | all — the dominant channel |
| **Fill** | active facet value (§4.4 for high cardinality) | S1–S3 |
| **Stripe slots** | 2–3 additional facets, fixed positions | S2–S3 |
| **Mark height** | stream coverage gap (half height = missing) | all — survives where color doesn't |
| **Accent hue** | current selection / pinned entity — the *only* saturated hue | all |
| **Opacity** | filter non-match: **muted, never hidden** (keeps structural context) | all |
| **Track lanes** | `IN_FRAME` spans, notes, events (§4.6) | S2–S3, off by default |
| **Arcs** | typed graph edges for the current selection (§4.5–4.6) | S3 |

The "mute, don't hide" rule comes straight from the thread and is the right call:
hiding non-matches destroys the shape of the text, which is the whole point of the
macro view. Note this differs from Explore's new *container* filter — that one
hides deliberately, because Explore is a QA tool where scrolling is the enemy.

### 4.4 High-cardinality facets (~80 deities, ~80 composers)

No one can distinguish 80 colors, and our current palette cycles every 8 — so
today two unrelated deities can render identically. Atlas needs a different model:

1. **Dynamic focus + context.** Rank facet values by leaf count *within the current
   viewport/filter*. Top 5–7 get distinct palette hues; everything else collapses to
   a single neutral "Other" gray. The legend therefore never exceeds ~8 entries.
2. **Rebind on interaction.** Pinning a deity in the side panel rebinds the accent
   to *that* entity plus its co-occurring set, demoting the previous top-N. Colour
   is a spotlight, not a permanent identity.
3. **Hierarchical hue grouping** where the data supports it: hue = family, and
   saturation/lightness = member within family. Our `vocabulary` table already has
   a `category` column (`entities`, `meters`, …), which gives a coarse first cut;
   finer families (solar/lunar/…) would need a vocabulary extension — see §9.
4. **Search over scroll.** An 80-entry panel is a filter box, not a list. Direct
   entity lookup beats scanning.

This is also a defect report against today's Explore (§8.1).

### 4.5 Graph fidelity — escalating with intent

The graph is never the default picture. Fidelity escalates in four steps:

1. **Ambient (S1/S2)** — entities exist only as fill/stripe. Zero edges drawn.
2. **Pin an entity** — every `ANCHOR`-reachable leaf lights in accent; a **hub
   card** lists that entity's typed edges and its co-occurring entities ranked by
   shared anchors, as text. Full fidelity, textual form, no geometry required.
3. **Relationship mode (S3)** — typed edges render as arcs along the spine (§4.6).
4. **Entity ↔ entity structure** — a **seriated co-occurrence matrix** in the side
   panel: entities on both axes, cell darkness = shared anchor count, rows ordered
   by similarity. Dense, order-stable, and it answers “who appears with whom”
   without inventing a spatial layout.

**Declined: force-directed layout.** The thread offered Sigma.js/Graphology for a
“collapse the matrix into a network view” mode. We decline. Force layout destroys
document order (the one axis philology cares about), is unstable between loads, and
at 20k nodes is decoration rather than information. Step 4 above is the
order-preserving substitute. This is the strongest opinion in this document.

### 4.6 Nested frames, concurrent conversations, temporal order

Three distinct relationship shapes came out of the thread; they want three
distinct treatments, not one line style.

**Nested narrative frames → height-encoded arcs.** Story-within-a-story maps to
arc height: outer frames arc higher, inner dialogue nests directly beneath. The
eye reads nesting depth as elevation without any legend. Wattenberg's construction.

**Concurrent conversations → thread brackets.** Simultaneous threads are *not*
nesting and shouldn't share the arc channel. They belong in margin tracks:
indented, overlapping bars along the edge of each band, exactly like code-folding
gutters or multi-track audio timelines. Concurrency reads as vertical stacking;
duration reads as horizontal extent.

```
band ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
      ╰──────── frame A ────────╯                 ← track 1 (outer)
          ╰── dialogue A1 ──╯                     ← track 2 (nested)
                    ╰──── thread B ────╯          ← track 3 (concurrent)
```

**Temporal order of events → arc directionality.** Where narrative time diverges
from text order, gradient-fill the arc (bright at source → dark at target). A
future “narrative time” mode could *reorder* the spine by event time, but that
breaks the sacred axis, so it must be an explicit, labelled alternate ordering —
never the default.

**Density rules** (all from the thread, all adopted):

- Connections render at **0 % opacity until a trigger** — verse selection, entity
  pin, or frame click. Never all-at-once.
- **Hover isolation** — hovering a verse shows only its arcs and dims unlinked marks.
- **Edge bundling** — parallel arcs between the same chapters merge into one cable
  that frays only near its targets.

### 4.7 Visual language

- **Field:** paper-warm `--bg-body`, marks in an ink-gray ramp. Separation by
  whitespace: no card borders, no grid rules.
- **Accent:** one hue (`--action-primary` family). Facet palettes reuse
  `FACET_PALETTE` desaturated ~30 % at S1 — small marks need less saturation to
  read as coloured.
- **Type:** band labels in the chrome stream (the Devanagari-aware stack already in
  `FacetSidebar`); URNs in tabular mono. Labels sit *on* the graphic. A legend
  appears only in relationship mode, as a single line.
- **Annotation:** S1 supports NYT-style thin-leader callouts derived from the data
  itself — e.g. “chapter 1.50 missing IAST” — not hand-authored config.

### 4.8 Interaction, and the hand-off to Book Mode

| Gesture | Effect |
|---|---|
| Hover leaf | Tooltip: URN · title · entities |
| Click leaf | Select; detail panel shows snippet + its edges |
| Drag | Marquee → multi-select (reuses Explore's marquee + vyasa-URI copy) |
| Double-click band | Zoom to S3 for that container |
| Click entity | Pin → accent highlight + hub card |
| `Esc` | Unpin / zoom out one stratum |
| **Read selection** | Book Mode over the *selected set* |

Book Mode is the piece the thread is right to emphasise and that we do not have
today. Our reader renders **one URN's weave** via `renderUrn`; reading an arbitrary
selection of hundreds of verses is a new capability requiring (a) a batch weave or
a per-leaf render loop and (b) a **virtualized list** so only visible verses are in
the DOM. Whether `renderUrn` can be driven per-leaf efficiently, or wants a batch
entry point in `vyasav`, is an open question (§9).

## 5. Architecture

### 5.1 Data and indexing

Two lazy additions on first Atlas visit, cached on `PackageData`:

**1. Full graph pull.** The current annotations query filters to
`Action|Note|Event|Attribute`. Atlas needs everything:

```sql
SELECT n.id, dl.value AS label, n.attributes
  FROM graph_nodes n JOIN graph_dict dl ON n.label_id = dl.id;

SELECT e.source_id, e.target_id, dt.value AS type
  FROM graph_edges e JOIN graph_dict dt ON e.type_id = dt.id;
```

Edge targets partition into URN anchors (resolvable via `graphRuntime.get_urn`)
versus node→node edges; from those we build entity→leaf and leaf→entity adjacency
once. Both `idx_graph_edges_source` and `idx_graph_edges_target` already exist.

**2. Bitmask facet index.** Adopted directly from the thread, and the single
highest-leverage change here. Today `leafFacetKeys` is a
`Map<string, Set<string>>` — one Set allocation per leaf. Instead, assign each leaf
an ordinal (document order from `collectLeafUrns`) and store each facet value as a
`Uint32Array` bitset:

```
20,000 leaves → ⌈20000/32⌉ = 625 words = 2.5 KB per facet value
filter = bitwise AND/OR across selected values → well under 1 ms
popcount → live facet counts without touching leaf records
```

This also retires the per-leaf `Set` scans in `leafMatchesFacetSelection` and
`containerHasSelectedCoverageGaps`, so **Explore gets faster too**. It is worth
doing as an isolated refactor before Atlas exists.

### 5.2 Rendering

| Option | Verdict |
|---|---|
| **SVG for marks** | Rejected. 20k leaves × ~4 sub-shapes ≈ 80k DOM nodes; browsers degrade past ~5k active SVG nodes, and Svelte keyed each-blocks add overhead on top. |
| **Canvas 2D + SVG/HTML overlay** ✅ | Marks, bands and tracks painted to canvas on state change (not per animation frame); arcs, labels, callouts and tooltips in an overlay layer — crisp text, CSS theming, real a11y hooks. |
| **WebGL (Pixi / deck.gl)** | Deferred, with an explicit trigger (§5.3). |

Hit-testing needs **no spatial index**: the layout is a regular grid, so
pointer → ordinal is arithmetic (`row = ⌊y/pitch⌋`, `col = ⌊x/pitch⌋`, plus a
per-band offset table). O(1), zero memory. A QuadTree would only be needed if we
adopted an irregular layout — another reason to stay rectangular (§4.2).

Svelte 5 integration keeps the app's existing discipline: a `$derived` layout
object (pure function of `packageData`, stratum, facet selection) and an `$effect`
that repaints the canvas when it changes. The canvas is a sink, not a state owner.

### 5.3 Tech-stack reconciliation with the Gemini thread

| Thread recommendation | Our call | Reasoning |
|---|---|---|
| **Bitmasking for facets** | **Adopt** | Perfect fit; see §5.1. Benefits Explore immediately. |
| **Mute rather than hide during filter** | **Adopt** | Preserves structural context in the macro view. |
| **Arc diagrams, nesting by arc height** | **Adopt** | §4.6. |
| **Thread brackets in margin tracks** | **Adopt** | The right home for concurrency; §4.6. |
| **0 %-opacity-until-trigger, hover isolation, edge bundling** | **Adopt** | §4.6 density rules. |
| **Dynamic focus + “Other” bucket for high cardinality** | **Adopt** | §4.4; fixes a live defect. |
| **Stripes over quadrants over hexagons** | **Adopt** (stripes) | §4.2, with the stability argument added. |
| **Virtualized reading view** | **Adopt (adapted)** | Svelte windowing rather than React Virtualized / TanStack. |
| **Web Workers for graph traversal** | **Adopt where measured** | Co-occurrence over the full edge set goes to a worker. Most traversals are 1–2 hops over precomputed adjacency and stay on the main thread. |
| **DuckDB-Wasm / Apache Arrow** | **Decline** | We already ship SQLite compiled to WASM (`sqlite-service` + wa-sqlite MemoryVFS) and the `.vyview` *is* a SQLite database. A second embedded analytics engine is a second WASM payload to serve 20k rows — which TypedArray bitsets handle in microseconds. We take the columnar/bitmask *idea*, not the dependency. |
| **Pixi.js / Konva / deck.gl / instanced WebGL** | **Decline for v1** | ~300–500 KB plus a scene graph we don't need. We repaint on state change, not at 60 fps; 20k `fillRect` calls land in single-digit milliseconds, and arcs are drawn only for a selection (tens to hundreds), never 20k at once. |
| **QuadTree / R-Tree** | **Decline** | Regular grid → arithmetic hit-testing. |
| **Graphology** | **Decline (probably)** | Our traversals are shallow over arrays we already build. Revisit if we add real graph algorithms (centrality, community detection). |
| **Sigma.js force-directed mode** | **Decline** | §4.5 — order-destroying. Co-occurrence matrix instead. |

**WebGL escalation trigger** — adopt Pixi or deck.gl when any of these becomes
true, and not before: mark count exceeds ~100k; continuous 60 fps pan/zoom with
live arcs becomes a requirement; or profiling shows S1 repaint over 16 ms on target
hardware. Recording the trigger is what keeps “not yet” from silently becoming
“never” or “too late”.

### 5.4 Integration

- Route `/{registry}/{catalog}/{publication}/atlas`, beside `/explore`.
- Activity-bar item between Explore and the bottom group — a genuine *content*
  activity, unlike the link icon we just removed.
- Reuses `shellState` sidebars: left = facet/entity panel (extends `FacetSidebar`),
  right = detail / hub card / co-occurrence matrix.
- Facet index, coverage-gap logic, marquee, vyasa-URI copy: all shared. Atlas is a
  new **presentation**, not a new data model.

## 6. Tradeoffs ledger

| Decision | We chose | We gave up | Why |
|---|---|---|---|
| New activity vs extending Explore | New activity | One fewer surface | Explore's per-container cards are load-bearing for QA; a density-first canvas has different layout, rendering and interaction physics. Merging them yields a modal mess. Shared logic stays in `$lib/explore/`. |
| Wrapped spine vs treemap/icicle | Wrapped spine | Space efficiency on deep trees | Texts are read in order. Treemaps encode size (uninteresting — leaf counts are near-uniform) and destroy sequence. |
| Rectangular vs hexagonal cells | Rectangular | Honeycomb aesthetics | Perfect packing, natural quadrants, O(1) hit-testing, row/chapter alignment. |
| Fixed stripes vs corner gradients | Fixed slots | Compactness at tiny sizes | Stable slot per facet; missing values collapse without shifting neighbours. Costs the S1 multi-facet glyph — degraded to single fill by design. |
| Arcs on spine vs node-link | Arcs | Free-form topology | Document order preserved; the co-occurrence matrix covers entity↔entity structure. |
| Canvas 2D vs WebGL | Canvas 2D | Headroom above ~100k marks | Adequate at 20k with a documented escalation trigger; avoids 500 KB and a shader toolchain. |
| TypedArray bitsets vs DuckDB-Wasm | Bitsets | In-browser SQL over facets | Second WASM engine for 20k rows isn't justified; SQLite already ships. |
| Edges on demand vs always-on | On demand | “See everything at once” | At corpus scale all-at-once is noise. Fidelity ≠ simultaneity. |
| Mute vs hide on filter | Mute (Atlas) | Maximum focus | Structural context is the macro view's product. Explore keeps hide, because it is a QA tool. |
| Adaptive pitch vs fixed | Adaptive | Cross-publication comparability | BG at RV density is a postage stamp. Scales stay identical *within* a publication, where small-multiple discipline matters. |
| Lazy graph load vs eager | Lazy | Instant first relationship paint | Reader/Explore load unchanged; one-time cost per publication. |

## 7. Phasing

| Phase | Scope | Exit test |
|---|---|---|
| **M0 — index** | Bitmask facet index; leaf ordinals; ship into Explore first | Explore filter/gap paths measurably faster, tests green |
| **M1 — spine** | Route + activity item; S1/S2 canvas spine; single-fill encoding; hover/click/Reader hop | 20k-verse text whole on one screen; YV gaps visible without scrolling |
| **M2 — glyph & cardinality** | Stripe slots at S2/S3; dynamic focus + “Other”; coverage half-height; entity search panel | 80-deity facet legible; no two entities share a colour in the active legend |
| **M3 — tracks & frames** | `IN_FRAME` lanes; thread brackets; nested arcs at S3; hover isolation; bundling | BG nested speaker frames readable; concurrent threads distinguishable |
| **M4 — graph fidelity** | Full graph pull; entity pin + hub card; co-occurrence matrix | “All riks of Agni” in one gesture; “who appears with Agni” answerable |
| **M5 — Book Mode & polish** | Virtualized read-the-selection; marquee/URI parity; keyboard cursor; S1 poster export | Select 200 verses → read them smoothly; a designer would sign the S1 view |

## 8. Findings that apply to today's code

Two defects surfaced while reconciling this design; both are worth fixing
independently of whether Atlas gets built.

### 8.1 Facet palette collides above 8 values

```13:15:apps/platform/src/lib/explore/facet-colors.ts
export function facetColor(index: number): string {
	return FACET_PALETTE[index % FACET_PALETTE.length];
}
```

With ~80 deities this assigns the same colour to values 0, 8, 16, … The swatches
in `FacetSidebar` and the map fills in `LeafMatrix` then assert a visual equivalence
that does not exist. Minimum fix: cap distinct colours at the top-N by count and
render the remainder in a neutral “Other” tone (§4.4).

### 8.2 Corner-gradient geometry is positionally unstable

`cornerGradient` renders 2 values as a diagonal split, 3 as 120° conic wedges, and 4
as 90° quadrants. The consequence: for a leaf with two matches, facet *X* occupies
the upper-left half; for a leaf with three, the same facet occupies a 120° wedge in
a different place. The eye cannot compare across leaves. It is tolerable for
Explore's *selection highlight* (you already know what you selected) but unusable as
an ambient multi-facet encoding — hence fixed slots for Atlas (§4.2). Explore could
also move to fixed quadrants with empty slots left neutral.

## 9. Open questions

1. **Name** — Atlas vs Loom vs other; fixes the route segment.
2. **Slot assignment** — which facets occupy stripe slots 1–3, and is that
   manifest-declared per publication or user-chosen in the panel?
3. **Entity families for hue grouping** — does `vocabulary` grow a family/parent
   column, or do we derive families from graph edges (`COMPOUND_OF` and friends)?
4. **Batch weave for Book Mode** — can `renderUrn` be driven per-leaf efficiently
   for a few hundred verses, or does `vyasav` want a batch entry point?
5. **Upstream query builders** — should `vyasav` ship `build_graph_nodes_query()` /
   `build_graph_edges_query()` so raw SQL leaves the platform?
6. **Narrative-time ordering** — is a spine reordered by event time ever worth
   offering as an explicit alternate mode, or does it break too much?
7. **Export** — static SVG/PNG of the S1 poster in M5, or a separate feature?
