---
# ===== Tokens (normative) =====
# The frontmatter below is normative and machine-readable.
# Keep it in sync with src/styles/globals.css when tokens change.
name: Mrutyunjaya Senapati — Portfolio
description: An engineering-logbook portfolio — near-black ink neutrals, one signal-green accent, Space Grotesk display over Inter body, JetBrains Mono telemetry voice, editorial project rows with code-drawn schematics, and motion used only as entrance and feedback.
colors:
  # --- Ink neutrals (dark-only theme) ---
  surface-bg: "#0b0b0a"            # app background (warm near-black ink)
  surface: "#121211"               # panels, modal
  surface-elevated: "#1a1a18"      # schematic nodes, inputs
  hairline: "#262624"              # 1px borders
  hairline-strong: "#3a3a36"       # terminal frame, preview border
  text: "#eceae4"                  # paper white
  text-secondary: "#a3a19a"        # supporting text
  text-muted: "#706f68"            # metadata, mono labels
  # --- Signal accent (the only accent) ---
  accent: "#4ade80"                # signal green — actions, live status, active nav, progress
  accent-ink: "#06220f"            # text on accent fills
  accent-dim: "rgba(74, 222, 128, 0.12)"
  # --- Signals ---
  signal-error: "#fb7185"
typography:
  display:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 600-700
    letterSpacing: "-0.04em (hero) / -0.03em (sections)"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 400
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontWeight: 400-500
    letterSpacing: "0.08em uppercase for controls; wide for metadata"
  # Hero h1: clamp(2.75rem → 6rem) at 0.98 line-height; section h2: clamp(2rem → 3.5rem);
  # project titles clamp(1.5rem → 2.125rem); body 0.875–1.125rem at 65–75ch measure.
rounded:
  sm: "6px"        # buttons, inputs, small controls
  md: "10px"       # schematic frames, preview card
  lg: "12px"       # modal
  full: "9999px"   # status dots only
motion:
  entrance-ease: "cubic-bezier(0.16, 1, 0.3, 1)"
  entrance: "hero line-mask stagger (0.9s), then fade-up supports; sections fade-up ≤0.7s once"
  scroll: "hero content lifts/fades into Selected work; thin accent progress bar"
  hover: "underline draw-in, arrow slide-in, schematic lift 4px, cursor-following preview (fine pointers only)"
  reduced: "prefers-reduced-motion disables entrance transforms, preview, and ambient loops"
---

# Mrutyunjaya Senapati — Portfolio: The Engineering Logbook

## Overview

The portfolio is typeset like a precise engineering logbook: ink-on-near-black pages, generous whitespace, monospace telemetry for anything that reads as data (time, location, status, stack, dates), and one signal-green accent that marks what is alive and actionable. There are no cards-as-structure, no gradients, no ambient animation, no decorative effects — hierarchy is carried by type scale, weight, hairlines, and space. The two signature moments are the hero's line-mask reveal with its scroll-linked handoff into the work, and the cursor-following schematic preview over the editorial project rows.

## Brand

- **Name:** Mrutyunjaya Senapati — Mobile & Full-Stack Software Engineer
- **Audience:** Recruiters and hiring managers evaluating skill on a time budget.
- **Positioning:** Interactive evidence over claims, stated tersely. The work section leads; the terminal proves liveliness; the modal carries the engineering depth.
- **Personality:** Precise, calm, confident. The site whispers structure and lets the projects speak.
- **Anti-reference:** AI-generated SaaS landing pages — floating icon clouds, particle canvases, gradient text, glass panels, pill-badge everything, filter tabs for three items. All rejected. Also rejected: multi-accent color coding (amber/purple/cyan era is gone).

## Typography

- **Display — Space Grotesk:** h1–h3 and section statements. Hero runs `clamp(2.75rem, 6rem)` at `0.98` line-height and `-0.04em` tracking; sections `clamp(2rem, 3.5rem)` at `-0.03em`. Sentence case, never uppercase, never gradient-filled. A single accent-colored period ends each section statement ("Selected work." / "The stack." / "Now." / "Say hello.") — the one ornamental mark the system allows.
- **Body — Inter:** narrative lines at `0.875–1.125rem`, measured at `48–60ch`, `text-wrap: pretty`.
- **Label — JetBrains Mono:** all metadata, controls, and telemetry — status lines, dates, stack runs, buttons, nav. Uppercase with `0.08em` tracking for controls; sentence case with wide tracking for readouts. Mono is used strictly for data and controls, never as a costume for body text.
- **Scale steps are obvious:** hero → section (≈2×) → title → body → mono-label. No intermediate sizes.

## Color

- **Ink scale (dark-only):** background `#0b0b0a`, panels `#121211`, raised `#1a1a18`, hairlines `#262624` / strong `#3a3a36`. Text steps `#eceae4` → `#a3a19a` → `#706f68`.
- **Signal green `#4ade80`:** the single accent. It marks: the availability pulse, live-project status, active nav underline, the scroll progress bar, primary buttons (with `#06220f` ink text), schematic flow arrows, and the accent period. Roughly ≤5% of any screen.
- **No other hues.** Errors use `#fb7185` only in the terminal and copy-failure state. Selection is solid accent with ink text.
- **Contrast:** body text ≥ 7:1, secondary ≥ 4.5:1, accent on ink ≥ 11:1 — WCAG 2.2 AA holds across the system.

## Shape

- Controls and inputs: `6px` radius. Schematic frames and the cursor preview: `10px`. Modal: `12px`. The only full-round elements are status dots. No pill buttons, no chip borders — tags render as mono text runs separated by `·`, not bordered chips.

## Space

- 8px grid. Sections carry `py-24 / sm:py-32` rhythm; more space always sits above a heading than below it. Project rows separate with 1px hairlines, not cards. The page alternates dense (stack ledger, experience rows) and spacious (hero, contact) passages.

## Motion

- **One authored moment:** the hero's staggered line-mask reveal (0.9s, expo-out), followed by its scroll-linked lift/fade handing attention to "Selected work."
- **Feedback only elsewhere:** underline draw-ins, arrow slide-ins, a 4px schematic lift on row hover, the spring-smoothed cursor preview (fine pointers, motion-safe only), press-scale on primary buttons.
- **Ambient:** the availability pulse and the scroll-cue sweep — both tiny, both killed under `prefers-reduced-motion`, which also disables entrance transforms and the preview.

## Illustration

- **Diagrams, not decoration.** Every project gets a code-drawn SVG schematic (`ProjectSchematic.tsx`): PlantDoctor a capture→inference→RAG→store pipeline; FoodyGo a four-portal hub around Express·PostgreSQL; ChatApp a socket exchange. Nodes are hairline boxes on elevated fill, labels are 9px mono, flow arrows are accent green. They appear inline beside featured rows, inside the cursor preview, and at the top of the project modal.
- Icons come from lucide-react, thin-stroke, 12–16px. No emoji, no unicode glyphs as icons, no devicon grids.

## Voice

- Terse, factual, first-person where it counts. The hero states the role, one sentence names the person and what he ships, and every further line is evidence (status, stack, architecture, challenges).
- Controls are imperative mono: "View work", "Copy", "Résumé". No exclamation marks, no "passionate", no "amazing".
- Status is shown: a pulsing green dot for availability, "Live Project" in accent, real dates and counts in mono.
