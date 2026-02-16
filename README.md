# XimaColor

XimaColor is a fast, multilingual gradient gallery for designers and frontend developers.
It helps you find production-ready color blocks in seconds and copy clean CSS straight into your UI.

## Why This Project Is Useful

- 325 curated gradients out of the box (cards, hero sections, backgrounds, accents).
- Built for speed: lightweight Astro frontend with Bun workflow.
- Search and tag filtering to find the right style quickly.
- One-click CSS copy flow for rapid prototyping and implementation.
- Localized UI in 7 languages: English, Russian, Spanish, Chinese, Tatar, Kazakh, Ukrainian.
- SEO-ready structure with Open Graph metadata and locale routes.

## Stack

- Astro
- TypeScript
- Bun
- CSS gradients library (`src/styles/gradients.css`)

## Project Structure

```text
/
├── public/
├── src/
│   ├── components/colors/   # gallery UI, tags, copy snippets
│   ├── config/              # site + SEO settings
│   ├── i18n/                # locale dictionaries
│   ├── layouts/
│   ├── pages/               # locale routes + redirect page
│   └── styles/              # global styles + gradient definitions
├── astro.config.mjs
└── package.json
```

## Commands

Run from project root:

| Command | Action |
| :-- | :-- |
| `bun install` | Install dependencies |
| `bun dev` | Start dev server at `localhost:4321` |
| `bun run build` | Build production output into `dist/` |
| `bun preview` | Preview production build locally |

## Localization

Supported locale routes:

- `/en/`
- `/ru/`
- `/es/`
- `/zh/`
- `/tt/`
- `/kk/`
- `/uk/`

Root `/` auto-detects user language (cookie + browser locale) and redirects to the best matching route.

## Notes for Customization

- Add or edit gradients in `src/styles/gradients.css`.
- Update gradient IDs/list in `src/components/colors/constants.ts`.
- Change copy and labels in `src/i18n/locales/*.ts`.
- Tune SEO defaults in `src/config/seo.ts`.
