# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MEATUP is a restaurant website for a kosher grill/burger restaurant in Bnei Brak, Israel. Built with Next.js 16 (App Router), React 19, TypeScript 5, and Tailwind CSS 4. The site is fully bilingual (Hebrew/English) with RTL support.

## Commands

- `npm run dev` — Start development server (localhost:3000)
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Architecture

### Routing (Next.js App Router)

All pages under `src/app/`. The homepage (`page.tsx`) is a single-page layout composed of section components (Hero, About, Menu, Gallery, Contact). Dedicated pages exist for `/menu`, `/gallery`, `/contact`, `/accessibility`, `/privacy`.

### State Management

Two React Context providers wrap the entire app in `src/app/layout.tsx`:

- **LanguageContext** (`src/context/LanguageContext.tsx`) — Manages `he`/`en` language toggle with localStorage persistence. Dynamically sets `document.dir` to `rtl`/`ltr`. Uses a `mounted` flag to prevent hydration mismatch. Access via `useLanguage()` hook.
- **LoadingContext** (`src/context/LoadingContext.tsx`) — Manages page transition loading states.

### Internationalization

Translation dictionaries live in `src/dicts/he.ts` and `src/dicts/en.ts`. The `Dictionary` type is exported from `he.ts`. All user-facing text should go through these dictionaries via `useLanguage().dict`. Data files (`menu.ts`, `config.ts`, `gallery.ts`) use `{ he: string; en: string }` objects for bilingual fields.

### Data Layer

Centralized in `src/data/`:
- `config.ts` — Restaurant info, contact details, external URLs (Tabit reservation, maps, social)
- `menu.ts` — Menu categories and items with prices
- `gallery.ts` — Gallery image definitions

### Component Provider Chain

`layout.tsx` renders: `LanguageProvider` → `LoadingProvider` → `PageLoaderWrapper` + `Header` + `<main>{children}</main>` + `Footer` + `AccessibilityWidget`

### Styling

- Tailwind CSS 4 with custom CSS variables in `src/app/globals.css`
- Color palette: charcoal (`#0a1628`), bronze (`#BF9B7A`), off-white (`#F2F1F0`), wood (`#5C3E2B`)
- Font: Heebo (Google Fonts) — supports Hebrew and Latin
- Path alias: `@/*` maps to `./src/*`

### Animations

Framer Motion for component animations, GSAP for advanced effects. MagicBento spotlight system in the gallery. Page transitions use the LoadingContext.

### External Integrations

- **Tabit** — Reservation and delivery/pickup ordering
- **Unsplash** — Remote images (configured in `next.config.ts`)
- **Google Maps / Waze** — Navigation links and embedded map

## Key Conventions

- All components are client-side (`'use client'`) due to animation and language context dependencies
- HTML root is `lang="he" dir="rtl"` by default; LanguageContext dynamically toggles direction
- When adding translatable text, update both `src/dicts/he.ts` and `src/dicts/en.ts`
- Bilingual data fields always use `{ he: string; en: string }` shape
- Images in `/public/imgs/meatupimgs/` are WebP format
