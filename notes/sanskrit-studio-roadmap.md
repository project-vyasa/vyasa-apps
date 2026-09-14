# Sanskrit Studio — next activities and researcher needs

Companion to the Studio notes: [`docs/guides/sanskrit-studio-guide.md`](../docs/guides/sanskrit-studio-guide.md) (internal, not published HTML).  
Engine: `vyutils` crates `vyasa-lipi`, `vyasa-patha`, `vyasa-phonetics` via WASM.

## Landscape (what people already use)

| Need | Typical tools | Studio today |
|------|----------------|--------------|
| Script conversion | [Aksharamukha](https://www.aksharamukha.com/), [Aksharamukha script-matrix](https://www.aksharamukha.com/script-matrix), Lipyantara, `sanscript` / `indic-transliteration` | **Lipi** — 11 scripts, Vedic pitch, lossless round-trip |
| Recitation patterns | Printed *patha* manuals; few browsers do Krama/Jaṭā correctly | **Pāṭha** — Krama + Jaṭā; 9 other patterns listed, disabled |
| Phonetics / Śiva-sūtra | ashtadhyayi.com, paper *prātiśākhya* | **Varṇa** — Pāṇini, ṚV-Prātiśākhya, Taittirīya |
| Sandhi join / split | UoH [SCL](http://sanskrit.uohyd.ac.in/scl/), [Skrutable](https://skrutable.info/about), Dharmamitra splitters | Join is inside Krama/Jaṭā; no dedicated UI; **split is not in the engine** (non-unique) |
| Meter / scansion | Skrutable, Heritage Platform extras | Not in crates |
| Morphology / compounds | SCL पद-विश्लेषिका, Sanskrit Heritage, DCS | Out of scope for current WASM |
| Packed texts | Our **Viewer**, GRETIL, SARIT, Cologne | Different app |

Aksharamukha’s **script-matrix** is the layout to steal: one string, many columns, large type, almost no color, comparison as the point (not a pair of textareas).

---

## Propose two AppBar activities

Keep Lipi / Pāṭha / Varṇa. Add two that beginners can use immediately and that researchers will not outgrow.

### 1. Akṣara — script matrix (do next)

**Job:** Same pada or mantra, every supported script, in one grid.

**Why:** Lipi is convert-A-to-B. Researchers and students constantly ask “how does this look in Grantha *and* Telugu *and* IAST?” The matrix answers without hunting dropdowns. Matches Aksharamukha’s comparison page, but with our Vedic-safe lipi and Labels.

**Engine:** `transliterate` + `supportedScripts` already. No new crate.

**UI:** Single source field (script picker or auto from Lipi), one large cell per script, wrap to a readable grid. Compact: stack cells, still large type. Optional: hide scripts. No rainbow chrome.

### 2. Sandhi — join (and later, explain)

**Job:** Two or more padas in, saṃhitā out, with a readable account of what fused.

**Why:** Beginners meet *agnim īḻe* vs *agnimīḻe* on day one. Pāṭha already coalesces inside Krama/Jaṭā; the join is invisible. A dedicated activity teaches the *result* of recitation, and unblocks the listed **Saṃhitā** pattern.

**Engine:** Forward sandhi is in `vyasa-patha`. Reverse (saṃhitā → pada) is **not** unique and should stay a later, clearly labeled heuristic or an import from an external splitter — not pretended as deterministic WASM.

**UI:** Left: pada list. Right: joined text + optional rule/trace if the engine can expose it. Output script like Pāṭha. Compact: stacked panes.

**Not the second activity:** **Chandas** (meter). Highest researcher demand after sandhi-split, but there is no crate yet. Partner with Skrutable-class tools until `vyutils` owns scansion.

---

## What researchers will still ask for

Ordered by how often Vedic / śāstra work hits the wall, not by how fun it is to build.

**In-engine or close (vyutils / Studio)**

1. Remaining **vikṛti** patterns (Mālā … Ghana) behind the same table/trainer.
2. **Saṃhitā emit** from pada (same as Sandhi activity).
3. **Pitch-safe export** (copy as IAST / Devanagari / TEI-ish; keep anudātta/svarita).
4. **Akṣara / font coverage** CLI + in-app tofu warning (already planned).
5. **Syllable / mātrā timeline** from existing `analyze_syllables` (Varṇa or a thin inspector, not a fourth pillar).
6. **Batch Lipi** (file in, zip of scripts out) for publishers.

**Viewer handoff (this repo, later)**

7. Open a **packed verse** in Studio (pada stream → Pāṭha; script → Lipi/matrix).
8. **Interlinear**: pada | saṃhitā | translation columns in the reader, not a new Studio toy.
9. Stable **citation / URN** from a pada row back into ṚV / Taittirīya packs.

**Do not reimplement (link or embed later)**

10. **Sandhi-viccheda** and **samāsa** split — SCL / Dharmamitra / Skrutable.
11. **Morphology** (Heritage, SCL).
12. **Chandas** identification and recitation melody.
13. **Dictionary / DCS** lookup.

**Product hygiene**

14. Persist last activity, last scripts, last pada (localStorage; already partly true for Labels).
15. Printable Krama/Jaṭā table (A4, large type) for a teacher.
16. Audio is a research project (pitch + duration); do not fake a TTS for Vedic.

---

## Viewer user guide

Same shape as the Studio notes: window → tasks, not architecture. Later at `docs/guides/viewer-guide.md` (internal, not published HTML). Do not mix that into Sanskrit Studio notes.
