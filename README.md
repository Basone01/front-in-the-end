# Front in the End

> **⚠️ AI-authored content.** The lessons, interactive demos, and most of the
> code in this repository were drafted by an AI assistant (Claude) and reviewed
> by the repository owner. Treat the technical claims as a well-informed
> starting point, not peer-reviewed authority — verify anything load-bearing
> against primary sources before relying on it.

Lessons in thinking like a frontend engineer — prose + interactive demos for
mid-level devs. Fully static: Astro + MDX, vanilla-JS demo islands, Pagefind
search, localStorage reading progress. No backend.

## Develop

```sh
npm install
npm run dev      # localhost:4321 (search is unavailable in dev — built at build time)
npm run build    # astro build + pagefind index → dist/
npm run preview  # serve dist/
```

## Content model

- Lessons: `src/content/lessons/<track>/<slug>.mdx` — frontmatter `title`,
  `description`, `track`, `order`, `duration`, optional `draft`.
- Tracks: `src/data/tracks.ts` (`live` tracks get pages; `soon` tracks show as
  coming on the homepage).
- Demos: `src/components/demos/*.astro`, wrapped in the shared
  `src/components/Demo.astro` frame (reset dispatches a `demo-reset` event on
  the figure). Shared fake-latency helpers live in `src/lib/fake-network.ts`.

## Deploy (Cloudflare Pages)

Connect the repo, framework preset **Astro**, build command `npm run build`,
output directory `dist`. Update `site` in `astro.config.mjs` when the real
domain exists.

## Analytics (Cloudflare Web Analytics)

Privacy-first, cookie-free, no consent banner — keeps the site's "no tracking"
copy honest. The beacon lives in `src/components/Analytics.astro` and renders
only when a token is present, so dev and untokened builds ship no analytics.

To turn it on once deployed:

1. Cloudflare dashboard → **Web Analytics** → add your site. It shows a snippet
   containing a `token`.
2. Copy that token into your Cloudflare **Pages** project →
   Settings → **Environment variables** → `PUBLIC_CF_BEACON_TOKEN`.
3. Redeploy. The beacon now loads and the Web Analytics dashboard fills with
   pageviews, top pages, referrers, countries, and core web vitals.

Pick **one** injection method: this in-repo beacon (the env var above) **or**
Cloudflare's automatic Pages injection — enabling both double-counts views.
