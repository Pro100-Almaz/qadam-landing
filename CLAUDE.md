# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Architecture

**Stack:** Vue 3 (Composition API, `<script setup>`), Vue Router 4, Vue-i18n 11, Tailwind CSS 4, Vite 6.

**Structure:**
- `src/views/` — 9 page components, one per route (`/`, `/mission`, `/team`, `/parents`, `/academic`, `/extra`, `/price`, `/enrollment`, `/orda`)
- `src/components/` — ~50 components; naming pattern `<section><Type>.vue` (e.g. `priceHero.vue`, `priceInfo.vue`)
- `src/locales/ru.json` and `src/locales/kz.json` — all UI strings; locale is persisted to `localStorage` key `"lang"`, default is `"ru"`
- `src/main.js` — bootstraps app, registers router + i18n, defines all routes inline
- No store (Pinia/Vuex); state lives in local `ref()` inside components

**i18n pattern:** Use `useI18n()` + `t('key')` in all components. Translation keys are namespaced by section (e.g. `header.*`, `footer.*`, `question.*`, `modal.*`). Both `ru.json` and `kz.json` must be updated together.

**Routing:** Web history mode. Scroll-to-top on route change; hash anchor scrolls use smooth behavior. All routes defined in `src/main.js`.

**WhatsApp integration:** Lead capture opens `wa.me/…` URLs directly — no backend.

**Google Analytics:** Loaded in `index.html` (tag AW-18008229517).

**Note:** `shoolAdmissions.vue` has a typo in the filename — keep it as-is to avoid breaking imports.
