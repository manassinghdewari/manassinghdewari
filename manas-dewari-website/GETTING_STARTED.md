# Run and edit the website

Use Node.js 22.13 or newer and pnpm.

1. Extract this ZIP and open the manas-dewari-website folder.
2. Run `pnpm install`.
3. Run `pnpm dev` and open the local URL printed in the terminal (normally http://localhost:5173).
4. Run `pnpm build` to create a production build.

This project uses TypeScript, React, Tailwind CSS and Next.js. The default build exports a static website into out/ for Netlify. The original Cloudflare/Sites workflow remains available through pnpm dev:sites, pnpm build:sites and pnpm start:sites.

## Key files
- app/page.tsx: page sections and structured data.
- app/content.ts: services, selected work and canonical domain.
- app/globals.css: blue theme and responsive layouts.
- app/site-interactions.tsx: lazy Calendly embed and conversion events.
- public/: your photo, favicon, social image, robots.txt, sitemap and llms.txt.

Your supplied photo is included in responsive WebP sizes. Calendly points to https://calendly.com/manas-zryth. No visitor login is implemented in the page.

Dependencies, build output, source-control history and credentials are excluded. The downloadable copy omits the live Sites project identity; the empty hosting configuration is retained because vite.config.ts imports it. No API keys are required for the landing page.

When deploying on your own domain, update app/content.ts, public/robots.txt, public/sitemap.xml and public/llms.txt.

## Netlify deployment

Run pnpm build, then upload the out folder to Netlify Drop (https://app.netlify.com/drop). Upload the built folder, not the source folder.

For Git deployment, use the repository root containing netlify.toml. It sets the base directory to manas-dewari-website, build command to pnpm build, and publish directory to out. If connecting the inner project folder as the repository root, set those values manually with an empty base directory.

Run pnpm start to preview the production build at http://localhost:5173. No application API keys are required.

