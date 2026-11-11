# K-SOLUTIONS public website

The public K-SOLUTIONS website uses **Next.js App Router**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Requirements

- Node.js 20.9 or newer (Node.js 22 LTS recommended)
- npm

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run build
npm run start
```

The production server listens on port 3000 by default. Set `PORT` when deploying to a platform that assigns a port.

## Application structure

- `src/app/` — App Router routes, root layout, metadata, global styles and route-level error states.
- `src/features/website/KSolutionsWebsite.tsx` — Interactive public website experience.
- `src/components/` — Header, consultation modal and car-loader components.
- `src/i18n/` — English and Japanese translations.
- `src/data/` — Existing presentation data and workflow definitions.
- `src/types.ts` — Shared TypeScript types.

The home route is a Server Component and the interactive website is isolated behind a Client Component boundary. This preserves the existing language switcher, pricing calculator, FAQ accordion, mobile navigation and modal interactions without adding a global state library.

## SEO and deployment notes

- Title, description, keywords, Open Graph, Twitter card, viewport and robots metadata are configured in `src/app/layout.tsx`.
- The production domain has not been confirmed in this repository. Set `metadataBase`, canonical URLs and a sitemap after the domain is finalized.
- The consultation form currently displays its existing client-side confirmation state; it is not connected to a submission API.
- Existing illustrative vehicle and brand images remain externally hosted.
