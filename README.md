# Ivo Mahendra — Portfolio v2

Bilingual creative developer portfolio built with Astro and deployed to GitHub Pages.

## Requirements
- Node.js 22+
- npm

## Local development
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

The GitHub repository catalog is synchronized at build time from the public GitHub API. Curated projects remain local and are never replaced by API results.

## Deployment
Push to `master` or `main`. Configure GitHub Pages to use **GitHub Actions** in repository Settings → Pages.

## Content to personalize
- `src/data/profile.ts`
- `src/data/projects.ts`
- `src/data/skills.ts`
- `public/images/` (add real project screenshots and portrait)

Do not publish unverified metrics, private data, credentials, or project claims.
