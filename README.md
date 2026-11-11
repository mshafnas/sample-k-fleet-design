# K-SOLUTIONS public website

The public K-SOLUTIONS website is built with **Next.js App Router**, **React**, **TypeScript**, and **Tailwind CSS v4**.

## Requirements

- Node.js 20.9 or newer
- npm, Yarn, or pnpm

## Development

```bash
yarn install
yarn dev
```

Open http://localhost:3000.

## Production

```bash
yarn install --frozen-lockfile
yarn build
yarn start
```

The production server listens on port 3000 by default. Set the PORT environment variable when deploying to a platform that assigns a port.

## Application structure

- `src/app/` — App Router routes, root layout, metadata, global styles, and route-level error states.
- `src/App.tsx` — Existing public website experience and its interactive client-side state.
- `src/components/` — Shared navigation, consultation modal, and loading animation.
- `src/i18n/` — English and Japanese translations.
- `src/data/` — Existing presentation data and workflow definitions.

The homepage keeps the existing English/Japanese toggle and page interactions. The page is currently a client component because the original one-page experience relies on React state and browser interactions. The root layout, metadata, route handling, and document shell are managed by Next.js.

## SEO deployment note

The application metadata is configured without a canonical metadataBase because a production domain has not been confirmed in this repository. Set metadataBase in `src/app/layout.tsx` once the public domain is finalized. Add a sitemap using that verified domain before production launch.
