#!/usr/bin/env bash
set -euo pipefail

rm -rf node_modules dist
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build

if grep -RniE 'example\.com|localhost|chrome-extension://' dist; then
  echo 'QA failed: forbidden placeholder/extension URL found in dist.' >&2
  exit 1
fi

if find dist -type f \( -name 'sitemap*.xml' -o -name 'sitemap*.xml.gz' \) | grep -q .; then
  if grep -Rni '<lastmod>' dist/sitemap* 2>/dev/null; then
    echo 'QA failed: sitemap contains lastmod; this project does not fabricate modification dates.' >&2
    exit 1
  fi
  if [[ -z "${SITE_URL:-}" ]]; then
    echo 'QA failed: sitemap exists although SITE_URL is empty.' >&2
    exit 1
  fi
  if ! grep -RqsF "${SITE_URL%/}" dist/sitemap*; then
    echo 'QA failed: sitemap URLs do not match SITE_URL.' >&2
    exit 1
  fi
fi

echo 'QA passed.'
