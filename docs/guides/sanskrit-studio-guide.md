---
title: Sanskrit Studio
description: Beginner guide to Lipi, Pāṭha, and Varṇa in the browser studio.
status: draft
live: https://project-vyasa.github.io/vyasa-apps/sanskrit/
local: http://localhost:5374/
---

# Sanskrit Studio

> **Status:** Internal notes in **vyasa-apps** (`docs/guides/`). Public user guide: [`apps/docs`](../../apps/docs/) → https://project-vyasa.github.io/vyasa-apps/docs/sanskrit-studio/  
> **Live app:** [project-vyasa.github.io/vyasa-apps/sanskrit/](https://project-vyasa.github.io/vyasa-apps/sanskrit/)  
> **Local:** `cd apps/sanskrit-studio && bun run dev` → http://localhost:5374/  
> **Viewer** (catalogs and reading) is a different app: https://project-vyasa.github.io/vyasa-apps/docs/viewer/

Sanskrit Studio is a small, **experimental** workbench (yellow **Experimental** badge in the header). Phonology and recitation can be wrong. It runs in the browser (no account, no upload). The engine is WebAssembly from `vyutils`. If the engine is missing, a banner says so — restart the dev server after `wasm-pack`.

It is **not** a reader of packed publications. Use the [Viewer](https://project-vyasa.github.io/vyasa-apps/viewer/) for that.

---

## The window

| Region | What it is |
|--------|------------|
| **Header** | Logo, *Sanskrit Studio*, yellow **Experimental** badge, activity title, **Guide**, **Labels**, theme and density |
| **Activity bar** (left) | Three tools: Lipi, Pāṭha, Varṇa |
| **Main pane** | The tool you picked |

**Labels** change how *Sanskrit words in the chrome* are written (menus, titles, pattern names). Canonical source is IAST; the picker converts into Devanagari, Telugu, Grantha, … English glosses stay English. This is separate from “output script” inside Lipi or Pāṭha.

On a narrow screen (about phone width), chrome tightens; the same three activities remain.

---

## Lipi — transliteration

**What:** Rewrite the same Sanskrit between **11 scripts**, keeping Vedic pitch marks.

**Do this:**

1. Open **Lipi**.
2. Choose **from** and **to** scripts.
3. Type or paste in the left box (or tap a Vedic mark from the palette into the cursor).
4. Read the right box. The **lossless** badge means a round-trip back to the source script matches.

Use this when you know a verse in Devanagari (or IAST) and want Grantha, Telugu, Tamil, … without losing accents.

---

## Pāṭha — recitation patterns

**What:** Start from **Pada-pāṭha** (words already split, usually with `|` or daṇḍas). The studio can emit **Krama**, **Jaṭā**, and **Ghana** (Ghana last; needs current Sanskrit WASM). The other eight traditional patterns are in the **Patterns** overlay, not in the menu.

**Do this:**

1. Open **Pāṭha**.
2. Put pada text in the full-width editor (a golden pada is there to try).
3. Pick **Krama**, **Jaṭā**, or **Ghana** from the dropdown. Open **Patterns** for the 3+8 catalogue.
4. Read the interlinear under the editor. Krama is one chant line; Jaṭā/Ghana stack isolated padas over the chant (no dotted middle row — it duplicated Jaṭā sandhi, and for Ghana it only showed the forward pair). Ghana windows of three padas are labelled `1-2-3`.
5. Space highlights the next segment; Shift-Space goes back (not while typing in the editor).
6. Set the **output script** for the generated text (independent of Labels).

**Mental model:**

- The editor is **padas**. If you paste continuous saṃhitā, the tool will not magically split it into words.
- **Pada** as an output pattern would just re-emit those words. **Saṃhitā** would join them with sandhi. Neither is a live menu item yet.
- **Krama** pairs each word with the next, then extra *iti* rows where tradition requires them.
- **Jaṭā** is the braid on those pairs: forward, reverse, forward.
- **Ghana** is the dense triple permutation; generation lives in `vyutils`.

---

## Varṇa — phonetics

Inspect **one string** against a tradition: **Pāṇini**, **Ṛgveda-Prātiśākhya**, or **Taittirīya**.

**Do this:**

1. Open **Varṇa**. The seed is the first word of ṚV 1.1.1 (same opening as Lipi).
2. Paste a short string, or pick an example (arkaḥ, kanyā).
3. Click a sound in the akṣara strip (mātrā, pitch, visarga on each block).
4. Switch tradition — the same text is re-described.
5. Read **Engine / Label only / Not in engine** for that tradition. Those citations are coverage of this WASM build, not a critical edition.

| Tradition | What you get |
|-----------|----------------|
| **Pāṇini** | Pratyāhāra membership (1.1.71), Śiva-sūtra highlight, Śikṣā inspector |
| **Ṛgveda-Prātiśākhya** | Inventory groups (Śaiśirīya, samānākṣara, nāmin as a label). Nati is not applied |
| **Taittirīya** | Karaṇa; worked svarita junctures; dvitva with TPr 14.1 / 14.4 / 14.8 |

Source of the coverage list: [`engine-coverage.ts`](../../packages/sanskrit/src/engine-coverage.ts) (same data as the activity). Public HTML: `apps/docs` → `/sanskrit-studio/`.

| Tradition | Citation | Status |
|-----------|----------|--------|
| Pāṇini | Śiva-sūtras 1–14; Aṣṭ. 1.1.71; Śikṣā inspect; akṣara split | Live |
| Pāṇini | Named sandhi sūtras (6.1.77 ff.) as a trace | Not in engine |
| RPr | 1.1–2 inventories; Śaiśirīya order; 1.65 nāmin | Label only |
| RPr | Nati (retroflexion) | Not in engine |
| TPr | Ch. 2 karaṇa/sthāna; 14.1 / 14.4 / 14.8 dvitva; Ch. 20 class from a named juncture | Live |
| TPr | Svarita from a recited string; Raṅga (Ch. 17) | Not in engine |

Use this when a grammar or prātiśākhya line talks about a *varṇa*. Sandhi *rewrites* belong with Pāṭha / a future Sandhi activity.

---

## What this app is not

- Not a dictionary, morphology analyser, or meter scanner.
- Not a full Vedic recitation trainer for Mālā, Śikhā, Rekha, Dhvaja, Daṇḍa, Ratha, Ghana.
- Not the place to open a packed Ṛgveda or Gītā — that is the Viewer.

If the page shows tofu (empty boxes) for a script, the webfont for that script is not loaded yet. Labels and content still convert; the glyph may be missing.
