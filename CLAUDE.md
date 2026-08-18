# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MEATUP is a marketing site for a kosher grill/burger restaurant in Bnei Brak, Israel. Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS 4. Bilingual Hebrew/English with RTL, Hebrew-first.

## Commands

- `npm run dev` — dev server on localhost:3000
- `npm run build` — production build (the only real type/lint gate; run it before declaring work done)
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config, `eslint-config-next`)

There is no test framework in this repo — no test runner, no test files. Verify changes with `npm run build` and by looking at the page.

### Environment variables

Both are optional and read at build time:

- `NEXT_PUBLIC_SITE_URL` — canonical origin; defaults to `https://meatup.co.il` in [src/lib/seo.ts](src/lib/seo.ts) and in `metadataBase`. Drives sitemap, robots, JSON-LD, and all canonical URLs.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — Search Console token.

## Architecture

### Client components everywhere + the metadata workaround

Every page and component is `'use client'` (they all consume `LanguageContext` and animate). A client page cannot `export const metadata`, so **each route has a passthrough `layout.tsx` whose only job is exporting `metadata`** — see [src/app/menu/layout.tsx](src/app/menu/layout.tsx). When adding a route, add both `page.tsx` and a `layout.tsx` that returns `children` and exports metadata, and register the path in [src/app/sitemap.ts](src/app/sitemap.ts).

Because language switching is client-side only, all metadata, JSON-LD, and the OG image are **Hebrew-only**. There is no `/en` route and no hreflang — English is a runtime toggle, not a URL.

### SEO layer

- [src/lib/seo.ts](src/lib/seo.ts) — `SITE_URL` + `restaurantJsonLd` (schema.org/Restaurant), injected as a `<script type="application/ld+json">` in the root layout `<head>`. It pulls phone/social/reservation URLs from `config`, but address and opening hours are duplicated literals — update both when restaurant details change.
- [src/app/sitemap.ts](src/app/sitemap.ts), [src/app/robots.ts](src/app/robots.ts) — generated from `SITE_URL`.
- [src/app/opengraph-image.tsx](src/app/opengraph-image.tsx) — branded 1200×630 share card rendered with `next/og`, reading `public/logofull.png` off disk and inlining it as a data URI. It runs on the Node runtime because of `fs`.

### Providers

`layout.tsx` → `LanguageProvider` → `LoadingProvider` → `PageLoaderWrapper` + `Header` + `<main>` + `Footer` + `AccessibilityWidget` + Vercel `<Analytics />`.

- **[LanguageContext](src/context/LanguageContext.tsx)** — `he`/`en` in `localStorage` under `meatup-lang`; sets `document.documentElement.lang`/`dir` in an effect. Before `mounted`, it force-renders Hebrew to avoid hydration mismatch, so the first paint is always Hebrew regardless of the stored preference. Access via `useLanguage()` → `{ language, dict, toggleLanguage, setLanguage }`.
- **[LoadingContext](src/context/LoadingContext.tsx)** — clears on `pathname` change.

### Internationalization

[src/dicts/he.ts](src/dicts/he.ts) exports both the `he` object and the `Dictionary` **interface** — it is the schema. [src/dicts/en.ts](src/dicts/en.ts) is annotated `: Dictionary`, so adding a key means: add it to the `he` object, add it to the `Dictionary` interface at the bottom of `he.ts`, then add the English value or the build fails.

Data files use `{ he: string; en: string }` objects instead of dictionary keys; pick the branch with `language === 'he' ? x.he : x.en`.

### Data layer (`src/data/`)

- [config.ts](src/data/config.ts) — single `as const` object: phone/WhatsApp, address, hours, kosher text, Tabit reservation + ordering URLs, Wolt, Instagram/Facebook, Google Maps embed/link, Waze. Never hardcode these in components.
- [menu.ts](src/data/menu.ts) — `menuData: MenuCategory[]` plus `allergenNotice`. Item conventions: `priceAlt` for a second price (e.g. beer sizes), `isSubheader: true` for a divider row rendered inside a category, optional `image` shown when the item is expanded. Category order in the array is the display order.
- [gallery.ts](src/data/gallery.ts) — `galleryImages`, where `menuItemId` must match a `MenuItem.id` in `menu.ts`; that link is what renders dish details under a gallery image. Nothing validates it, so renaming a menu item id silently breaks the gallery.

### The menu is rendered twice

[src/components/Menu.tsx](src/components/Menu.tsx) (homepage section, category grid → modal) and [src/app/menu/page.tsx](src/app/menu/page.tsx) (standalone page, tabbed category nav) both read the same `menuData` but have **independent markup and styling**. Dish/price edits touch only `menu.ts`; layout or styling changes usually need both files.

### Images

All dish photography is `/public/imgs/dishes/*.webp`, referenced through `next/image`. Raw camera originals and superseded processed files live in `_archive/`, which is gitignored specifically so Vercel doesn't deploy them — keep new heavy source material there, not in `public/`. The only remote host allowed by [next.config.ts](next.config.ts) is `images.unsplash.com` (used for a few page hero backgrounds).

### Styling

Tailwind 4 via `@import "tailwindcss"` in [src/app/globals.css](src/app/globals.css), with brand colors defined twice — as `:root` CSS variables and in an `@theme inline` block that exposes them as Tailwind utilities (`bg-charcoal`, `text-bronze`, …):

- charcoal `#1A1A1A`, off-white `#F2F1F0`, bronze `#BF9B7A`, wood `#5C3E2B`

Change a color in both blocks. Font is Heebo (`next/font/google`, Hebrew + Latin subsets) exposed as `--font-heebo`.

Be aware the codebase mixes three approaches: Tailwind utilities, large inline `style={{}}` objects, and hardcoded hex literals (`#1A1A1A`, `#BF9B7A`) inside components. Match whatever the file you're editing already does rather than converting it.

MagicBento's GSAP spotlight styles live in the long second half of `globals.css`, driven by `--glow-color` / `--border-color`.

### Animation

Framer Motion for section reveals and modals; GSAP only inside [MagicBento.tsx](src/components/MagicBento.tsx) (cursor spotlight + card tilt on the gallery grid).

## Known dead paths

Don't assume these work — they're wired but inert:

- [TransitionLink.tsx](src/components/TransitionLink.tsx) is imported nowhere. It is the only caller of `startLoading()`, so `isLoading` is never true and [PageLoader](src/components/PageLoader.tsx) never displays. Navigation is plain `next/link` / `router.push`.
- [AccessibilityWidget.tsx](src/components/AccessibilityWidget.tsx) toggles body classes `high-contrast`, `highlight-links`, and `pause-animations`, but none of them are defined in `globals.css` — only the font-size slider has any effect. Add the CSS before treating those toggles as functional.

## Conventions

- HTML root is `lang="he" dir="rtl"`; RTL is the default and LTR is the exception. Prefer logical properties / RTL-safe Tailwind (`ms-`, `me-`, `start-`, `end-`) over `ml-`/`mr-` in new code.
- User-facing strings go through `useLanguage().dict`, never inline literals.
- Contact details, hours, and external URLs come from `config`, never inline.
