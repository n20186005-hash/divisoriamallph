# Divisoria Mall Guide

Isang independent, single-page Filipino guide para sa Divisoria Mall sa Maynila.

## Stack

- Astro 7 + TypeScript
- Tailwind CSS 4 (Vite plugin)
- Cloudflare Workers adapter
- pnpm (eksaktong bersyon sa `packageManager`)
- Walang database, login o CMS

## Local development

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm dev
```

## Production domain

Ang domain ay iisang beses lang kino-configure sa pamamagitan ng `SITE_URL`, na binabasa lamang sa `astro.config.mjs` at ipinapasa sa Astro `site`.

```bash
SITE_URL="$PRODUCTION_SITE_URL" pnpm build
```

Kapag walang `SITE_URL`, normal pa ring nagbu-build ang site. Hindi ilalabas ang absolute canonical / Open Graph URL, at hindi ia-activate ang sitemap integration. Walang placeholder domain fallback.

## Cloudflare Workers

```bash
pnpm build
pnpm wrangler deploy
```

Ang `wrangler.jsonc` ay naka-configure para sa output ng Astro Cloudflare adapter.

## QA bago i-deploy

```bash
pnpm qa
```

Ang `scripts/qa.sh` ang nagpapatakbo ng clean frozen install → `astro check` → build → forbidden-string scan → conditional sitemap checks.

Kung may production domain at naka-enable ang sitemap, tiyaking ang mga URL ay tumutugma sa totoong `SITE_URL` at walang gawa-gawang `lastmod`.
