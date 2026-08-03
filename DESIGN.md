---
# ===== Tokens (normative) =====
# The frontmatter below is normative and machine-readable.
# Keep it in sync with src/styles/globals.css when tokens change.
name: Mrutyunjaya Senapati — Portfolio
description: A dark-first engineering portfolio with schematic precision — flat hairline surfaces that lift on interaction, an Indigo + Cyan accent pair on cool slate, a signature indigo→purple→cyan gradient family, and a monospace readout voice for metadata.
colors:
  # --- Brand accent pair ---
  # Use the indigo for actions, active states, and focus; cyan as a sparse tracer accent;
  # purple only inside the signature gradient stops.
  indigo-primary: "#6366f1"          # primary action
  indigo-primary-light: "#818cf8"    # primary hover / accent light text
  cyan-accent: "#06b6d4"             # tracer accent
  cyan-accent-light: "#22d3ee"       # accent light text
  purple-tracer: "#a855f7"           # gradient middle stop only
  # --- Dark neutrals (default theme) ---
  surface-bg: "#050507"              # app background (cool near-black)
  surface: "#0e0e12"                 # cards, panels
  surface-elevated: "#15151c"        # chips, inputs, hover fills
  hairline: "#1d1d28"                # borders (1px)
  hairline-glow: "#312e81"           # primary-tinted border glow
  text: "#f8fafc"                    # primary text (slate-50)
  text-secondary: "#94a3b8"          # secondary text (slate-400)
  text-muted: "#64748b"              # muted text, metadata (slate-500)
  # --- Terminal wells (fixed dark slate in both themes) ---
  terminal: "#020617"                # slate-950
  terminal-raised: "#0f172a"         # slate-900
  terminal-border: "#1e293b"         # slate-800
  terminal-text: "#e2e8f0"           # slate-200
  terminal-muted: "#94a3b8"          # slate-400
  # --- Light neutrals (html.light overrides) ---
  light-surface-bg: "#f8fafc"
  light-surface: "#ffffff"
  light-surface-elevated: "#f1f5f9"
  light-hairline: "#e2e8f0"
  light-hairline-glow: "#cbd5e1"
  light-text: "#0f172a"
  light-text-secondary: "#475569"
  light-text-muted: "#94a3b8"
  light-indigo-primary: "#4f46e5"
  light-indigo-primary-light: "#6366f1"
  light-cyan-accent: "#0284c7"
  light-cyan-accent-light: "#0369a1"
  # --- Signals ---
  signal-success: "#10b981"        # online dot, success
  signal-warning: "#f59e0b"        # amber caution
  signal-error: "#fb7185"          # validation errors (rose-400)
typography:
  display:
    fontFamily: "Space Grotesk, Inter, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 700
    letterSpacing: "-0.03em"   # h2-h4; hero h1 tightens to -0.04em
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
    backgroundColor: "{colors.indigo-primary}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "20px"
  panel:
    backgroundColor: "rgba(14,14,18,0.75)"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: "24px 32px"
  chip:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.text-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
  input:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
  section-badge:
    backgroundColor: "#6366f11a"
    textColor: "{colors.indigo-primary-light}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  nav-pill:
    backgroundColor: "#15151cb3"
    textColor: "{colors.text-secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "6px 14px"
---

# Mrutyunjaya Senapati — Portfolio: The System Blueprint

## Overview

The System Blueprint is a dark-first engineering portfolio that presents the developer's work the way an engineer would: as a measured, drafted, and verifiable system. The interface is treated as a schematic — every surface sits flat with a hairline border, depth only appears when the user interacts, and metadata is spoken in monospace readouts. The result is a site that reads less like a marketing page and more like proof of craftsmanship: precision and schematic clarity, with Indigo as the single action color and Cyan used sparingly as a tracer accent. The base neutrals are cool slates, so the palette never drifts into warm, organic territory. The one flourish — a signature indigo→purple→cyan gradient — is reserved for the hero wordmark, the scroll progress bar, and the tech constellation, so the site still reads as "AI-native" without gradient-on-everything noise.

## Brand

- **Name:** Mrutyunjaya Senapati — Mobile & Full-Stack Software Engineer
- **Audience:** Recruiters and hiring managers evaluating skill on a time budget.
- **Positioning:** Interactive evidence over claims. The site's hero invites exploration (an architecture visualizer, a live CLI terminal, project deep-dives) rather than asking the visitor to trust bullet points.
- **Personality:** Precise, confident, technical, understated. Confident enough to let the work sit flat; technical enough to speak in monospace.
- **Anti-reference:** Warm/organic hype pages. No ember, amber, copper, or warm-charcoal palettes; no brutalist or hand-crafted artisan styling. Glassmorphism-everywhere, emoji-dense decoration, and glittery AI-hype-page effects are still rejected. The only gradient is the sanctioned indigo→purple→cyan family on the wordmark, progress bar, and constellation — flat hairlines and solid indigo/cyan carry everything else.

## Typography

- **Display — Space Grotesk:** All headlines (`h1`–`h4`). Bold with a tight, size-aware tracking scale — the hero `h1` tightens to `-0.04em`, section-level `h2`–`h4` run `-0.03em`. Self-hosted via fontsource (weights 400–700) — no CDN, no FOUT. Headings wrap balanced (`text-wrap: balance`).
- **Body — Inter:** Narrative paragraphs, descriptions, card copy. Standard scale; body text is `text-sm`/`text-base`, wrapped `pretty`, rendered with `text-rendering: optimizeLegibility`.
- **Label — JetBrains Mono:** Metadata, tags, labels, stats, timestamps, keyboard hints, and section eyebrow badges. Monospace is the site's "readout" voice — anything that reads like a spec or telemetry uses it, usually `text-xs` uppercase with `tracking-wider`. Self-hosted weights 400–700 so `font-semibold`/`font-bold` metadata renders with real cuts, never faux-bold.
- **Hierarchy:** Hero `h1` scales `text-4xl → lg:text-7xl` at `leading-[1.04]`; section `h2` `text-3xl → lg:text-5xl` at `leading-[1.1]`; subsection `h3` `text-base → text-lg`; body `text-sm → text-base`. Headlines use `font-display`, metadata uses `font-mono`, everything else `font-sans`.

## Color

- **Surface system (dark, default):** cool near-black background `#050507` (`bg`), cards/panels `#0e0e12` (`surface`), raised fills `#15151c` (`surface-elevated`), hairline borders `#1d1d28` (`border`), primary-tinted glow border `#312e81` (`border-glow`). Text steps: near-white `#f8fafc` (`text`), slate `#94a3b8` (`text-secondary`), muted slate `#64748b` (`text-muted`).
- **Surface system (light, `html.light`):** background `#f8fafc`, cards `#ffffff`, raised `#f1f5f9`, hairlines `#e2e8f0`. Text: `#0f172a` / `#475569` / `#94a3b8`.
- **Indigo `#6366f1`:** the single primary action color — primary buttons, active nav, focus rings, link hovers, the scroll progress bar. Light mode deepens to `#4f46e5` for contrast. Use sparingly (roughly ≤10% of any screen).
- **Cyan `#06b6d4`:** the tracer accent — terminal readouts, diagram strokes, constellation edges, sparse decorative glows, and accent-light text (`#22d3ee`). Never as a full background.
- **Purple `#a855f7`:** appears only as the middle stop of the signature gradient family (hero wordmark `from-indigo-400 via-purple-400 to-cyan-400`, scroll progress `from-indigo-500 via-purple-500 to-cyan-400`). Never as a solid fill.
- **Terminal wells:** mockups that render as "screenshots" of tools (the CLI, device frames, cloud console, architecture boxes) use a fixed dark slate well in both themes — `#020617` base, `#0f172a` raised, `#e2e8f0` text — so they read as dark terminal apps regardless of OS theme.
- **Signals:** `success #10b981` for the "available" pulse dot and success states; `warning #f59e0b` for caution; `error #fb7185` for validation errors.
- **No warm hues:** the system uses cool slate neutrals only. Indigo carries actions, cyan traces, purple is confined to gradient stops.
- **Contrast targets:** WCAG 2.2 AA in both themes — text on surface-bg, text-secondary on surface, indigo text on dark surfaces all meet 4.5:1.

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
- **Depth rule (hybrid elevation):** surfaces are flat at rest. Cards lift only on hover via `glow-card` (translate -2px, soft indigo shadow, border warms toward `primary/40`). Glass panels float with `backdrop-blur(20px)` and an ambient shadow at rest — this is the one sanctioned ambient depth.
- **Ambient:** `animate-pulse` on the status dot and `animate-spin-slow` on the theme icon.
- Respect `prefers-reduced-motion`; entrance/exit animations should not block content.

## Illustration

- **Decorative code is diagrammatic, not illustrative.** Decorative graphics are drawn in code (SVG/Canvas) as schematics: the cursor-reactive `TechConstellationCanvas` (nodes + edges in cyan/indigo tones with the signature gradient edges), the interactive particle background, and the `DevTerminal` CLI readout.
- Icons are thin-stroke outline glyphs (lucide-react; brand icons inlined as SVGs). Technology logos render as per-brand `devicon` SVGs; monochrome marks get `filter: invert(1)` in dark mode.
- Images: project cards and panels use 16:9 previews; the share card is `public/og-image.png` (1200×630).

## Voice

- The site speaks as a spec sheet: precise, terse, and evidence-first. Copy states facts and capabilities without superlative filler.
- Monospace readouts ("Core Technologies:", section eyebrows, labels) carry the technical voice; narrative paragraphs (Inter) explain and connect.
- Status is shown, not claimed: the hero badge pulses "available," the terminal runs real `help` output, and the About section is front-loaded with verifiable roles (Strivesteam, Ciya Technology) and shipped products (PlantDoctor AI, FoodyGo, ChatApp).
- Calls to action are imperative and concrete ("View Projects", "Interactive CLI Terminal", "Resume PDF").
