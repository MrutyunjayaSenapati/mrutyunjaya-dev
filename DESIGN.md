---
# ===== Tokens (normative) =====
# The frontmatter below is normative and machine-readable.
# Keep it in sync with src/styles/globals.css when tokens change.
name: Mrutyunjaya Senapati — Portfolio
description: A dark-first engineering portfolio with schematic precision — flat hairline surfaces that lift on interaction, an Ember Copper + Tracer Amber accent pair on warm charcoal, and a monospace readout voice for metadata.
colors:
  # --- Brand accent pair ---
  # Use the copper for actions, active states, and focus; the amber as a sparse tracer accent.
  ember-copper: "#e8843c"          # primary action
  ember-copper-light: "#fb923c"    # primary hover / accent light text
  tracer-amber: "#f59e0b"          # tracer accent
  tracer-amber-light: "#fbbf24"    # tracer hover
  # --- Dark neutrals (default theme) ---
  surface-ink: "#0c0b09"           # app background (warm charcoal)
  surface-base: "#14120f"          # cards, panels
  surface-raised: "#1c1915"        # chips, inputs, hover fills
  hairline: "#2a2620"              # borders (1px)
  ink: "#f7f2e9"                   # primary text
  ink-secondary: "#b3a996"         # secondary text
  ink-muted: "#85796b"             # muted text, metadata
  # --- Terminal wells (fixed dark in both themes) ---
  terminal-base: "#14120f"
  terminal-raised: "#1e1a14"
  terminal-hairline: "#2b251c"
  terminal-ink: "#f0eadb"
  terminal-ink-muted: "#a79c8a"
  # --- Light neutrals (html.light overrides) ---
  light-surface-ink: "#f6f1e7"
  light-surface-base: "#ffffff"
  light-surface-raised: "#efe8da"
  light-hairline: "#e1d7c4"
  light-ink: "#241f18"
  light-ink-secondary: "#5c5244"
  light-ink-muted: "#756a5b"
  # --- Signals ---
  signal-success: "#10b981"        # online dot, success
  signal-warning: "#facc15"        # amber caution
  signal-error: "#f43f5e"          # validation errors
typography:
  display:
    fontFamily: "Space Grotesk, Inter, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 700
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 400
  label:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, monospace"
    fontWeight: 500
    letterSpacing: "0.05em"
  # Narrative text is Inter (body); headlines are Space Grotesk (display);
  # labels, stats, tags, and metadata are JetBrains Mono (label).
  # Hierarchy: hero h1 text-3xl→5xl / section h2 text-3xl→4xl / sub h3 text-base→lg / body text-sm→base.
rounded:
  sm: "8px"        # chips, small tags
  md: "12px"       # inputs, small buttons
  lg: "16px"       # cards, panels
  xl: "24px"       # feature/glass panels
  full: "9999px"   # pills, primary/secondary buttons
spacing:
  nano: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "80px"  # py-20 rhythm
components:
  button-primary:
    backgroundColor: "{colors.ember-copper}"
    textColor: "#1c1917"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  button-secondary:
    backgroundColor: "{colors.surface-base}"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  card:
    backgroundColor: "{colors.surface-base}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "20px"
  panel:
    backgroundColor: "{colors.surface-base}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: "24px 32px"
  chip:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
  input:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
  section-badge:
    backgroundColor: "#e8843c1a"
    textColor: "{colors.ember-copper-light}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  nav-pill:
    backgroundColor: "#1c1915b3"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "6px 14px"
---

# Mrutyunjaya Senapati — Portfolio: The System Blueprint

## Overview

The System Blueprint is a dark-first engineering portfolio that presents the developer's work the way an engineer would: as a measured, drafted, and verifiable system. The interface is treated as a schematic — every surface sits flat with a hairline border, depth only appears when the user interacts, and metadata is spoken in monospace readouts. The result is a site that reads less like a marketing page and more like proof of craftsmanship: precision and schematic clarity, with Ember Copper as the single action color and Tracer Amber used sparingly as an accent. The base neutrals are warm charcoals, so the palette never drifts into cool, generated-default territory.

## Brand

- **Name:** Mrutyunjaya Senapati — Mobile & Full-Stack Software Engineer
- **Audience:** Recruiters and hiring managers evaluating skill on a time budget.
- **Positioning:** Interactive evidence over claims. The site's hero invites exploration (an architecture visualizer, a live CLI terminal, project deep-dives) rather than asking the visitor to trust bullet points.
- **Personality:** Precise, confident, technical, understated. Confident enough to let the work sit flat; technical enough to speak in monospace.
- **Anti-reference:** AI-gradient hype pages. No indigo→cyan gradient text, no cool blue/violet accents, no glassmorphism-everywhere, no emoji-dense decoration. The palette is flat — ember on warm charcoal — and no gradients are used at all.

## Typography

- **Display — Space Grotesk:** All headlines (`h1`–`h4`). Bold, tight tracking (`-0.03em`). Use for section titles and the hero.
- **Body — Inter:** Narrative paragraphs, descriptions, card copy. Standard scale; body text is `text-sm`/`text-base`.
- **Label — JetBrains Mono:** Metadata, tags, labels, stats, timestamps, keyboard hints, and section eyebrow badges. Monospace is the site's "readout" voice — anything that reads like a spec or telemetry uses it, usually `text-xs` uppercase with `tracking-wider`.
- **Hierarchy:** Hero `h1` scales `text-3xl → md:text-5xl`; section `h2` `text-3xl → text-4xl`; subsection `h3` `text-base → text-lg`; body `text-sm → text-base`. Headlines use `font-display`, metadata uses `font-mono`, everything else `font-sans`.

## Color

- **Surface system (dark, default):** warm charcoal background `#0c0b09` (`surface-ink`), cards/panels `#14120f` (`surface-base`), raised fills `#1c1915` (`surface-raised`), hairline borders `#2a2620` (`hairline`). Text steps: warm paper `#f7f2e9` (ink), sand `#b3a996` (ink-secondary), taupe `#85796b` (ink-muted).
- **Surface system (light, `html.light`):** warm ivory background `#f6f1e7`, cards `#ffffff`, raised `#efe8da`, hairlines `#e1d7c4`. Text: `#241f18` / `#5c5244` / `#756a5b`.
- **Ember Copper `#e8843c`:** the single primary action color — primary buttons, active nav, focus rings, link hovers, the scroll progress bar. Light mode deepens to `#a63d0c` for contrast. Use sparingly (roughly ≤10% of any screen).
- **Tracer Amber `#f59e0b`:** the tracer accent — diagram strokes, constellation edges, decorative glows, terminal highlights, sparse eyebrow text. Never as a full background.
- **Terminal wells:** mockups that render as "screenshots" of tools (the CLI, device frames, cloud console, architecture boxes) use a fixed warm-dark well in both themes — `#14120f` base, `#1e1a14` raised, `#f0eadb` text — so they read as dark terminal apps regardless of OS theme.
- **Signals:** `signal-success #10b981` for the "available" pulse dot and success states; `signal-warning #facc15` for caution; `signal-error #f43f5e` for validation errors.
- **No gradients:** the system uses flat color only. Solid ember replaces any former gradient text, and all decorative strokes are flat hairlines.
- **Contrast targets:** WCAG 2.2 AA in both themes — ink on surface-ink, ink-secondary on surface-base, ember text on dark surfaces all meet 4.5:1.

## Shape

- Radii are a strict five-rung ladder — never arbitrary corners:
  - `8px` chips and small tags (`rounded-lg`)
  - `12px` inputs and small buttons (`rounded-xl`)
  - `16px` cards and panels (`rounded-2xl`)
  - `24px` feature/glass panels (`rounded-3xl`)
  - `full` pills — primary/secondary buttons and badges (`rounded-full`)
- Buttons and badges are pills; cards are `16px`; large showcase panels are `24px`. Interactive elements carry a visible `focus-visible` ring (`ring-2 ring-primary/50`).

## Space

- 8px spacing grid: `4 / 8 / 12 / 16 / 24 / 40 / 80`.
- Layout shells are `max-w-6xl`, `px-4` (mobile) with generous `py-20` section rhythm. Two-column sections use `lg:grid-cols-12`; internal gaps run `gap-4 → gap-12`.
- Hairline 1px borders (`border-border`) are the default separation device — flat at rest, per the elevation philosophy.
- Cards use uniform internal padding (`p-5`), feature panels `p-6 sm:p-8`, chips `px-3 py-1`.

## Motion

- **Ease:** default `cubic-bezier(0.4, 0, 0.2, 1)` for color/border transitions; `0.3s` for hover state transitions.
- **Entrance:** hero elements fade up (`opacity 0→1`, `y 25→0`, `0.6s`), staggered by `0.2s`.
- **Tactile interaction (the component feel):** press-scale `active:scale-95` on primary buttons, `active:scale-98` on secondary; hover `translate-y` lift only on interactive cards (`glow-card`).
- **Depth rule (hybrid elevation):** surfaces are flat at rest. Cards lift only on hover via `glow-card` (translate -2px, soft warm copper shadow, border warms toward `primary/40`). Glass panels float with `backdrop-blur(20px)` and an ambient shadow at rest — this is the one sanctioned ambient depth.
- **Ambient:** `animate-pulse` on the status dot and `animate-spin-slow` on the theme icon.
- Respect `prefers-reduced-motion`; entrance/exit animations should not block content.

## Illustration

- **Decorative code is diagrammatic, not illustrative.** Decorative graphics are drawn in code (SVG/Canvas) as schematics: the cursor-reactive `TechConstellationCanvas` (nodes + edges in ember/amber tones), the interactive particle background, and the `DevTerminal` CLI readout.
- Icons are thin-stroke outline glyphs (lucide-react; brand icons inlined as SVGs). Technology logos render as per-brand `devicon` SVGs; monochrome marks get `filter: invert(1)` in dark mode.
- Images: project cards and panels use 16:9 previews; the share card is `public/og-image.png` (1200×630).

## Voice

- The site speaks as a spec sheet: precise, terse, and evidence-first. Copy states facts and capabilities without superlative filler.
- Monospace readouts ("Core Technologies:", section eyebrows, labels) carry the technical voice; narrative paragraphs (Inter) explain and connect.
- Status is shown, not claimed: the hero badge pulses "available," the terminal runs real `help` output, and the About section is front-loaded with verifiable roles (Strivesteam, Ciya Technology) and shipped products (PlantDoctor AI, FoodyGo, ChatApp).
- Calls to action are imperative and concrete ("View Projects", "Interactive CLI Terminal", "Resume PDF").
