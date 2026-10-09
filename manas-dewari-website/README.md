# Manas Dewari landing website
Next.js TypeScript application with a static export for Netlify. Run pnpm build to generate out/ and pnpm start to preview it. See GETTING_STARTED.md for deployment instructions. Tailwind CSS and server-rendered public content. See app/content.ts to edit service/work content; app/page.tsx for sections; app/globals.css for responsive styles.

Calendly uses the official inline embed loaded only after clicking Choose a time. The direct Calendly link remains available without JavaScript.

## Remaining owner inputs
- LinkedIn URL and professional email.
- User-supplied portrait added to About with responsive WebP images.
- Approved case study outcomes and client permission before publishing results.
- Preferred public domain. Update origin in app/content.ts, sitemap.xml and robots.txt when changed.

## Analytics
No analytics or invasive tracking installed. Delegated click events dispatch site:conversion with {name}; optional window.gtag receives the same event when a consent-managed GA4 integration is configured. Search Console verification and GA4 require the owner's property/measurement IDs. Do not add tracking without the appropriate consent flow.

## Future content
services and work arrays are separate from rendering. Add approved case studies there. Create app/insights/page.tsx and content entries when actual articles exist; no empty section is shown today.

## Verification boundaries
Production build and TypeScript checks are required. Browser, Lighthouse and live third-party/mobile Calendly tests must be completed in an environment with browser QA access. Static CSS alone is not proof of actual device behavior. Public visitor access is enabled. No application sign-in is required. Search Console submission can be configured by the owner.

