# Comercial MAR'O — Website

Production website for Comercial MAR'O, a metalwork fabrication and installation company based in Bilbao. Built with Next.js 16 App Router, a clean content/component separation, an AI-powered live chat assistant, and automated transactional email.

## What it does

**Public website** — presents the company's product catalogue, completed projects, and contact form to prospective clients in Bilbao and the Basque Country.

**Product catalogue** — ~30 static pages across four product categories, each with technical specs, colour swatches, series comparison tables, and downloadable PDFs.

**AI chat assistant** — a floating chat widget backed by the Gemini 2.5 Flash Lite API. The model is grounded exclusively on extracted website content (FAQ, product pages, blog) and redirects off-topic queries to the contact form.

**Contact form** — Zod-validated on both client and server. On submission, two emails are sent via Resend in parallel: an internal notification to the business and a confirmation to the client, both using typed HTML templates.

**Blog** — static blog posts with dynamic routing, reading time, and a preview section on the homepage.

**SEO** — `buildMetadata()` utility generates consistent metadata for every route. A JSON-LD `LocalBusiness` schema is injected in the root layout. Dynamic XML sitemap and robots.txt.

**GDPR** — cookie consent banner with granular analytics/marketing toggles, persisted in `localStorage`.

**Snap-scroll homepage** — full-page CSS scroll-snap with a collapsible top bar, dynamic `--snap-padding` custom property, and scroll-position persistence across navigation.

## Architecture

```
src/
├── app/                  ← Next.js App Router routes (pages + API)
├── components/
│   ├── home/             ← Homepage sections (Hero, FAQ, CTAFinal, …)
│   ├── layout/           ← Persistent layout components (Navbar, Footer, ChatWidget, …)
│   ├── shared/           ← Reusable UI (SectionHeader, ColorSwatches, PvcSeriesPage, …)
│   └── ui/               ← shadcn/ui primitives
├── content/              ← Data and content files (nav, products, blog, legal)
│   └── products/         ← Typed product configs (pvc-series.tsx)
├── emails/               ← Transactional email template functions
├── hooks/                ← Custom React hooks (useNavScroll)
└── lib/                  ← Utility functions and server helpers
    ├── company.ts        ← Single source of truth for contact info
    ├── metadata.ts       ← SEO metadata builder
    └── extract-content.ts ← Server-only content extractor for the AI chat
```

**`src/lib/` vs `src/content/`** — `lib/` is for utility functions and server helpers. `src/content/` holds data and prose: navigation arrays, product configs, blog posts, legal documents. The split prevents `lib/` from becoming a dumping ground.

**`src/emails/`** — each transactional email is a pure TypeScript function that returns an HTML string. `base.ts` wraps any body in the shared header/footer chrome. The route handler imports and composes them rather than embedding 250-line HTML strings inline.

**`src/content/products/pvc-series.tsx`** — typed config for the three PVC window series (S70, S76, S82). Each series `page.tsx` exports its metadata and renders `<PvcSeriesPage config={pvcSeriesConfigs.SXX} />`. Adding a new series means adding one object to the config file.

**`src/lib/company.ts`** — phone number, email, address, hours, and geo coordinates in one place. Consumed by `layout.tsx` (JSON-LD schema), `Navbar.tsx` (top bar), `FooterColumns.tsx`, and the email templates. One edit propagates everywhere.

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.1 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4, shadcn/ui, Radix UI primitives |
| Animations | Framer Motion |
| Forms | react-hook-form, Zod |
| Icons | lucide-react |
| AI chat | Google Gemini 2.5 Flash Lite (`@google/genai`) |
| Email | Resend SDK, sharp (logo embedding) |
| SEO | Next.js Metadata API, JSON-LD, dynamic sitemap |
| Testing | Playwright |
| Code quality | ESLint, TypeScript strict |

## Key features

### AI chat assistant

`src/app/api/chat/route.ts` — streaming POST endpoint backed by Gemini 2.5 Flash Lite. The system instruction grounds the model on content extracted from the website's own source files (`extract-content.ts`) — product pages, FAQ, blog, about page — up to ~60 000 characters (~15 000 tokens). The model is instructed to respond only from that content and use the `OFF_TOPIC` fallback for anything else. Responses stream as plain text; the client appends a `▌` cursor while streaming. Chat history is persisted in `localStorage` (max 50 messages).

### Contact form and email

`src/app/api/contact/route.ts` validates the submission against a Zod schema (name, email, phone, project type, message). Two Resend emails are sent in parallel:

- **Notification** (`src/emails/contact-notification.ts`) — sent to the business with the client's details and message.
- **Confirmation** (`src/emails/contact-confirmation.ts`) — sent to the client with an acknowledgement and urgent contact info.

Both bodies are composed via `src/emails/base.ts`, which wraps them in a shared header (logo embedded as base64 data URI via sharp) and footer with the company's address, phone, and email.

### Snap-scroll homepage

The homepage uses `scroll-snap-type: y mandatory`. `EnablePageSnap.tsx` adds the `snap-page` class to `<html>` on mount and removes it on unmount. The `useNavScroll` hook manages:

- `scrolled` state for collapsing the 32px top bar into the 64px main bar
- `--snap-padding` CSS custom property (6rem → 4rem when the top bar collapses)
- Scroll-position persistence in `sessionStorage` for back-navigation restoration
- Hysteresis (5–10px dead zone) to prevent state bouncing during inertia scroll

The layout `<Footer>` is hidden on snap pages via `html.snap-page footer { display: none }`. `CTAFinal.tsx` (the last snap section) renders `<FooterColumns>` directly as the homepage footer.

### SEO

Every page calls `buildMetadata({ title, description, keywords, path })` which returns a `Metadata` object with canonical URL, OpenGraph, and Twitter card. The root layout injects a `LocalBusiness` JSON-LD schema drawn from `src/lib/company.ts`. `src/app/sitemap.ts` generates a dynamic XML sitemap including all product pages and blog slugs.

### GDPR cookie consent

`CookieBanner.tsx` reads a stored consent decision from `localStorage`. On first visit it renders a bottom bar with three choices — necessary only, configure, or accept all. The configure modal has per-category toggles (analytics, marketing). Consent is persisted and the banner unmounts immediately after a decision.

## Project structure

```
comercial-maro/
├── public/
│   ├── images/               # Static images by product category
│   ├── docs/                 # Downloadable PDFs
│   └── logo.png
│
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── layout.tsx            # Root layout — Navbar, Footer, Chat, Cookies
│   │   ├── globals.css           # Design tokens, snap-scroll, animations
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── api/
│   │   │   ├── chat/route.ts     # Gemini streaming chat
│   │   │   └── contact/route.ts  # Resend dual email
│   │   ├── ventanas-pvc/         # 12 sub-pages
│   │   ├── cortinas-estores/     # 8 sub-pages
│   │   ├── mamparas-oficina/     # 6 sub-pages
│   │   ├── cerramientos-fenolicos/
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── proyectos/
│   │   ├── sobre-nosotros/
│   │   ├── contacto/
│   │   ├── privacidad/
│   │   └── aviso-legal/
│   │
│   ├── components/
│   │   ├── home/
│   │   │   ├── Hero.tsx          # Animated stat counters, IntersectionObserver
│   │   │   ├── FAQ.tsx           # Accordion
│   │   │   ├── CTAFinal.tsx      # Last snap section + embedded footer
│   │   │   ├── BlogPreview.tsx
│   │   │   ├── Galeria.tsx
│   │   │   ├── PorQueNosotros.tsx
│   │   │   ├── Sectores.tsx
│   │   │   └── Servicios.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Sticky + collapsible top bar
│   │   │   ├── Footer.tsx
│   │   │   ├── ChatWidget.tsx    # Streaming AI chat panel
│   │   │   ├── CookieBanner.tsx  # GDPR consent
│   │   │   ├── ScrollRestoration.tsx
│   │   │   ├── EnablePageSnap.tsx
│   │   │   └── SectionScroller.tsx
│   │   ├── shared/
│   │   │   ├── PvcSeriesPage.tsx  # Data-driven PVC series template
│   │   │   ├── SeriesComparison.tsx
│   │   │   ├── ColorSwatches.tsx
│   │   │   ├── FooterColumns.tsx
│   │   │   ├── FooterLegalLinks.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGallery.tsx
│   │   │   ├── PresupuestoButton.tsx
│   │   │   └── OpenChatButton.tsx
│   │   └── ui/                   # shadcn/ui primitives
│   │
│   ├── content/
│   │   ├── nav-data.ts           # All navigation arrays
│   │   ├── product-data.ts       # Colour swatches + series comparison data
│   │   ├── blog-posts.ts         # Static blog content
│   │   ├── legal-content.tsx     # Privacy policy + legal notice prose
│   │   └── products/
│   │       └── pvc-series.tsx    # Typed configs for S70 / S76 / S82
│   │
│   ├── emails/
│   │   ├── base.ts               # Shared email chrome (header + footer)
│   │   ├── contact-notification.ts
│   │   └── contact-confirmation.ts
│   │
│   ├── hooks/
│   │   └── useNavScroll.ts       # Scroll state, snap padding, position persistence
│   │
│   ├── lib/
│   │   ├── company.ts            # Phone, email, address, hours — single source
│   │   ├── metadata.ts           # SEO metadata builder
│   │   ├── extract-content.ts    # Server-only content extractor for AI chat
│   │   └── utils.ts              # cn() class merger
│   │
│   └── __tests__/
│       └── section-snap.spec.ts  # Playwright — snap-scroll geometry
│
└── package.json
```

## Running locally

### Prerequisites

- Node.js ≥ 18
- pnpm (or npm / yarn)

### 1. Install

```bash
git clone <repo-url>
cd comercial-maro
pnpm install
```

### 2. Environment variables

```bash
cp .env.example .env
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production URL, e.g. `https://comercialmaro.es` |
| `RESEND_API_KEY` | Resend API key — enables contact form emails |
| `RESEND_TO_EMAIL` | Recipient address for internal contact notifications |
| `GEMINI_API_KEY` | Google AI Studio key — enables the live chat assistant |

The dev server starts without any of these set; the contact form and chat will return errors but all pages render normally.

### 3. Start

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Description |
|---|---|
| `pnpm dev` | Development server (Turbopack) |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | ESLint |
| `pnpm test:e2e` | Playwright snap-scroll tests (requires running server) |

## Testing

`src/__tests__/section-snap.spec.ts` — Playwright test that navigates to each of the 8 homepage snap sections, scrolls them into view, and asserts that every section fills the viewport exactly below the navbar (±4px tolerance). Catches regressions in the snap-scroll layout without requiring manual visual inspection.

```bash
# Start the dev server first
pnpm dev

# In a second terminal
npx playwright test
```
