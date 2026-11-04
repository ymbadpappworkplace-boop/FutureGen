# YMBA FutureGen

Bilingual (සිංහල / English) website for the Colombo Young Men's Buddhist Association's FutureGen initiative.
Built with **Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v3**.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000  (redirects to /si)
npm run build && npm start
```

Requires Node 20+. The first build downloads Inter and Noto Sans Sinhala from Google Fonts (internet needed once).

## What's included

| Route | Purpose |
|---|---|
| `/si`, `/en` | Home: lamp-light hero, featured event + live countdown, bento overview, Academy shelf, DSMS showcase, latest articles, leadership, join CTA |
| `/events`, `/events/[slug]` | Pinkam / events list and detail pages (with Event structured data) |
| `/blog`, `/blog/[slug]` | Articles with category filter and search |
| `/academy` | Course library with level filter and search |
| `/software` | DSMS (Dahampasal Management System) product page |
| `/community`, `/about` | Ways to get involved, mission, values, leadership |
| `/donate` | Amount picker + bank details (or your payment page via env var) |
| `/contact`, `/join` | Forms posting to `/api/contact` |

Also: Sinhala/English routing with language switch, dark mode, **Ctrl/⌘ + K** quick search, mobile app-style tab bar,
sitemap + robots, SEO metadata, hreflang alternates, keyboard focus styles and reduced-motion support.

## Typography (San Francisco)

`globals.css` sets `-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text"`, so iPhone, iPad and Mac visitors see
real San Francisco. Apple's licence does not allow self-hosting SF on websites, so Windows / Android visitors get **Inter**,
the closest open-source match. SF has no Sinhala glyphs, so Sinhala text uses **Noto Sans Sinhala**.

## Edit the content (no code needed)

Almost everything is in `src/lib/content.ts`, each text has a `si` and an `en` version.

- **Events**: add an item to `events`. The **first** item is the one featured in the home hero.
- **Blog posts / Academy courses / leadership**: `posts`, `courses`, `leaders`.
- Items with `sample: true` (and the sample blog posts) are demo content, **replace them before launch**.
- **Contact details, social links, bank details, app link**: `src/lib/site.ts` (search for `TODO`).
- Have a native Sinhala speaker proof-read the Sinhala copy.

## Before you go live (checklist)

1. Replace placeholders in `src/lib/site.ts` (email, phone, bank, social, DSMS app URL).
2. Replace sample events/posts and the leadership names. For real photos, put images in `public/` and swap the generated
   artwork (`Cover`, `Leaders`) for `next/image`.
3. Wire up the form: `src/app/api/contact/route.ts` currently only logs submissions. Add Resend / SMTP / a Google Sheet / a Slack webhook where marked `TODO`.
4. Optional online payments: set `NEXT_PUBLIC_DONATE_URL` (see `.env.example`). Otherwise bank details are shown.
5. Set `NEXT_PUBLIC_SITE_URL` to your real domain (used by sitemap and social previews).
6. Verify the DSMS feature list on `/software` matches what the app really does.

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com) (zero config), or run `npm run build && npm start` on any Node host.

## Structure

```
src/
  app/[lang]/…        pages (si | en)
  app/api/contact     form endpoint
  components/         UI building blocks
  lib/content.ts      all copy and data (bilingual)
  lib/site.ts         site settings, navigation
  middleware.ts       redirects / → /si or /en (remembers the visitor's choice)
```

## Windows: "Application Control policy has blocked this file"

This project uses **no native binaries** (Tailwind v3 + Next's WebAssembly compiler fallback), so it runs even where
Smart App Control blocks unsigned `.node` files. If you still see the error, delete `node_modules` and `package-lock.json`,
then run `npm install` again.
