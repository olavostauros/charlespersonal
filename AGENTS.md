# AGENTS.md

Guidance for AI coding agents working in this repository.

## What this is

A single-page static landing site for **Charles Personal**, a personal trainer in Vila Velha, ES (Brazil). Audience: Brazilian Portuguese speakers aged 40–70, ~70% on mobile. Goal: capture leads and send them to WhatsApp and the MFit app.

- **Stack:** Astro 5 (static output), TypeScript (strict), plain CSS with custom properties. No UI framework, no Tailwind.
- **Live URL:** https://olavostauros.github.io/charlespersonal.fit/ (GitHub Pages project site)
- **Repo:** https://github.com/olavostauros/charlespersonal.fit

## Commands

| Command | What it does |
| --- | --- |
| `npm ci` | Install exact dependencies |
| `npm run dev` | Dev server at `http://localhost:4321/charlespersonal.fit/` |
| `npm run build` | `astro check` + `astro build` → `dist/` (must pass before committing) |
| `npm run preview` | Serve the built `dist/` |
| `npm run validate` | `astro check` + `tsc --noEmit` |

There is no test suite; `npm run build` is the gate.

## Layout

```text
src/
  pages/index.astro          # the only page; composes the sections below
  layouts/Layout.astro       # <head>: SEO, Open Graph, JSON-LD, fonts, favicon
  components/                # Header, Hero, About, Services, Testimonials,
                             # FormSection, CTASection, SocialSection, Footer
  scripts/main.ts            # form validation + WhatsApp redirect (WHATSAPP_NUMBER, MFIT_SIGNUP_URL)
  scripts/types/             # form/validation type definitions
  styles/design-system.css   # global tokens and styles
public/                      # copied verbatim: images/, favicon.svg, robots.txt, sitemap.xml
.github/workflows/deploy.yml # GitHub Pages deploy
.github/prompts/             # original development brief
PROCESS.md                   # business/UX process documentation
```

Notes:
- Most source files have a companion `*.md` doc (e.g. `Hero.astro.md`). Update it when you materially change the component.
- `About_New.astro` and `About_old.astro` are unused alternates; `About.astro` is the live one.
- `src/pages/index.astro.md` is picked up by Astro as a page (`/index.astro/`). Harmless, but don't add more `.md` files under `src/pages/` unless they are meant to be pages.

## Deployment: GitHub Pages

- Every push to `main` runs `.github/workflows/deploy.yml` (`withastro/action` builds, `actions/deploy-pages` publishes). It can also be triggered manually from the Actions tab.
- Repo setting required once: **Settings → Pages → Source: GitHub Actions**.
- The site is served from a sub-path, so `astro.config.mjs` sets `site: 'https://olavostauros.github.io'` and `base: '/charlespersonal.fit/'`.

### The base path rule (most common way to break the site)

Never write root-absolute URLs like `src="/images/x.jpg"` or `href="/"`. They work in dev only by accident and 404 on Pages. Always prefix with the base:

```astro
<img src={`${import.meta.env.BASE_URL}images/x.jpg`} />
<a href={import.meta.env.BASE_URL}>Início</a>
```

For absolute URLs (canonical, Open Graph), build them with `new URL(path, new URL(import.meta.env.BASE_URL, Astro.site))`, as `Layout.astro` does.

`public/robots.txt` and `public/sitemap.xml` are static and hard-code the live URL; update them if the domain changes.

### Moving to a custom domain later

If `charlespersonal.fit` is pointed at GitHub Pages: set `site: 'https://charlespersonal.fit'`, remove `base` (or set it to `'/'`), add `public/CNAME` containing `charlespersonal.fit`, and update `robots.txt`, `sitemap.xml` and the JSON-LD `url` in `Layout.astro`. Code using `BASE_URL` keeps working unchanged.

## Conventions

- **User-facing copy:** Brazilian Portuguese.
- **Code, identifiers, comments:** English. camelCase for variables/functions, SCREAMING_SNAKE_CASE for constants, PascalCase for components.
- **CSS:** kebab-case BEM (`hero__title`, `cta-button--primary`), mobile-first media queries, design tokens from `design-system.css`.
- **Accessibility for an older audience:** large type, touch targets ≥ 48px, sufficient contrast, semantic HTML, meaningful `alt` text.
- Keep client JS minimal; prefer static markup.
- Don't change `WHATSAPP_NUMBER`, `MFIT_SIGNUP_URL`, or contact details without the owner's say-so.
