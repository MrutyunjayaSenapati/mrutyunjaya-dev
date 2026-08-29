# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and hiring managers evaluating Mrutyunjaya Senapati for mobile and full-stack engineering roles. Their job: quickly determine whether he is credible, senior enough, and worth interviewing, then reach out through the provided channels.

## Product Purpose

A personal portfolio for Mrutyunjaya Senapati that establishes engineering credibility and converts interest into a contact (email, LinkedIn, GitHub, or resume download). Success is a qualified hiring lead reaching out.

## Positioning

Interactive evidence over claims, stated with editorial restraint. The portfolio reads like an engineering logbook: a kinetic hero statement, large editorial project rows with code-drawn architecture schematics, an interactive CLI terminal, and modal deep-dives into each project's problem, solution, architecture, and engineering challenges. No screenshots exist, so schematics are drawn in code — honest diagrams, never fabricated imagery.

## Operating Context

Evaluated on desktop and mobile browsers, often skimmed in under a minute. Dark-only theme (committed decision — no toggle). Navigation is a single scrolling page: Hero, Selected work, The stack (+ interactive terminal), Experience, Now, Say hello (contact), Footer.

## Capabilities and Constraints

- Single-page app (Vite + React 19 + TypeScript + Tailwind CSS v4 + framer-motion). Content is data-driven from `src/data/portfolio.ts`.
- Sections: Hero (scroll-linked handoff into work), Projects (editorial rows, cursor-following schematic preview, accessible detail modal), Skills ledger + DevTerminal, Experience, Now, Contact (email-first: giant mailto link, copy-to-clipboard, social links; there is no form and no backend).
- Project imagery is code-drawn SVG schematics (`ProjectSchematic.tsx`), one per project. When real screenshots become available, replace or supplement the schematics.
- Open decision: `public/og-image.png` (1200x630) is still to be added for social share cards.

## Brand Commitments

- Name: Mrutyunjaya Senapati. Role titles: "Mobile & Full-Stack Software Engineer".
- Real, verifiable identity links: GitHub `MrutyunjayaSenapati`, LinkedIn `mrutyunjaya-senapati`, email `mrutyunjayasenapati007@gmail.com`, resume hosted on Google Drive.
- Real experience and project facts as recorded in `src/data/portfolio.ts` (Strivesteam, Ciya Technology, PlantDoctor AI, FoodyGo, ChatApp). Do not invent employers, projects, or testimonials.

## Evidence on Hand

- Project and experience content in `src/data/portfolio.ts` (3 projects, 2 roles, 1 education entry).
- Live demo link for ChatApp: `https://chatapp-3o8b.onrender.com/`.
- Absent: `public/og-image.png` (must not be fabricated by design work), screenshots, and testimonials.

## Product Principles

- Prove skill through interactive evidence and engineering depth, not self-claims.
- Lead with substance: architecture, data flow, and challenges for every project.
- Credibility is a constraint: real links, real companies, nothing fabricated.
- Design work must meet WCAG 2.2 AA in the dark theme.
- Keep content in data and design in components so facts and visuals stay independently maintainable.
- Restraint is the identity: one accent color, no decorative animation, whitespace over ornament.

## Accessibility & Inclusion

WCAG 2.2 AA is the target for all design and implementation work, in the dark theme. `prefers-reduced-motion` disables entrance transforms, the cursor preview, and ambient loops.
