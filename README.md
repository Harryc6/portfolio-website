# Harry Carr Portfolio

Modern, cyberpunk-styled portfolio built with Next.js App Router, TypeScript, and Tailwind CSS v4. Content is data-driven from `src/content/profile.ts` and deployed to Vercel.

## Getting Started

```bash
npm run dev
```

Open `http://localhost:3000` to view the site.

## Commands

- `npm run dev`: Start the dev server.
- `npm run build`: Production build (Vercel must pass).
- `npm run start`: Run the production build locally.
- `npm run lint`: ESLint checks.
- `npm run prettier`: Format the codebase.

## Project Structure

- `src/app/`: App Router entry points and global styles.
- `src/components/`: Shared UI components (e.g., navbar, project cards).
- `src/sections/`: Home page sections (Hero, Projects, About, Contact).
- `src/content/profile.ts`: Single source of truth for bio, projects, socials, and metadata.
- `public/`: Static assets (icons, OG image).

## Content & Theming

- Update text, projects, socials, and metadata in `src/content/profile.ts`.
- Theme tokens live in `src/app/globals.css` under `@theme`.
- Fonts are loaded in `src/app/layout.tsx` via `next/font/google` (Anta + Turret Road).

## SEO

Metadata is defined in `src/app/layout.tsx` and sourced from `profile.meta`. The `profile.meta.siteUrl` and `profile.meta.ogImageUrl` point to valid, public URLs.

## Deployment

Deploy to Vercel with the standard Next.js flow. `npm run build` must succeed.
