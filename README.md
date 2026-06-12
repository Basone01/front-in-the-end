# Front in the End

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
