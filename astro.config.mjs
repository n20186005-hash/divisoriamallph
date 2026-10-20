import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const configuredSite = process.env.SITE_URL?.trim();
const site = (configuredSite || 'https://divisoriamallph.com').replace(/\/+$/, '');

export default defineConfig({
  site,
  integrations: site ? [sitemap({ filter: (page) => !page.endsWith('/404/') })] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
