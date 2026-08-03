# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and hiring managers evaluating Mrutyunjaya Senapati for mobile and full-stack engineering roles. Their job: quickly determine whether he is credible, senior enough, and worth interviewing, then reach out through the provided channels.

## Product Purpose

A personal portfolio for Mrutyunjaya Senapati that establishes engineering credibility and converts interest into a contact (email, LinkedIn, GitHub, or resume download). Success is a qualified hiring lead reaching out.

## Positioning

Interactive evidence over claims. Instead of a bulleted resume page, the portfolio lets a visitor prove the skills to themselves: an interactive terminal, an architecture-flow visualizer, and modal deep-dives into each project's problem, solution, architecture, and engineering challenges.

## Operating Context

Evaluated on desktop and mobile browsers, often skimmed in under a minute. Dark theme is the default, with a light theme toggle. Navigation is a single scrolling page: Hero, Projects, Skills (+ interactive terminal), Experience, About, Contact, Footer.

## Capabilities and Constraints

- Single-page app (Vite + React 19 + TypeScript + Tailwind CSS v4 + framer-motion). Content is data-driven from `src/data/portfolio.ts`.
- Sections: Hero, Projects (filterable, with detail modal), Skills + DevTerminal, Experience, Cloud/Architecture visualizer, About, Contact.
- Contact form opens a pre-filled `mailto:` to mrutyunjayasenapati007@gmail.com; there is no backend.
- Theme toggle persists via `localStorage["theme"]`; FOUC guard in `index.html`.
- Open decision: `public/og-image.png` (1200x630) is still to be added for social share cards.
- Known cleanup: `src/hooks/useTheme.ts` is unused dead code using a different storage key (`"portfolio-theme"`).

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
- Design work must meet WCAG 2.2 AA in both light and dark themes.
- Keep content in data and design in components so facts and visuals stay independently maintainable.

## Accessibility & Inclusion

WCAG 2.2 AA is the target for all design and implementation work, across both light and dark themes.
