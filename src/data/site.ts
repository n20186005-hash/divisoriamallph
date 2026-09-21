// Central site facts. SITE_NAME follows the "景点名称 + 城市 + 旅游指南" SEO format.
// Sub-pages should append ' | ' + SITE_NAME via withSiteName() so branding stays consistent.

export const SITE_NAME = 'Divisoria Mall Manila — Travel Guide';

export const site = {
  name: 'Divisoria Mall',
  city: 'Manila',
  streetAddress: '866 Tabora St',
  addressLocality: 'Manila',
  addressRegion: 'Metro Manila',
  addressCountry: 'PH',
  latitude: 14.6030095,
  longitude: 120.970585,
  opens: '07:00',
  closes: '18:15',
  ratingValue: '4.2',
  reviewCount: '6694',
  mapsUrl: 'https://maps.app.goo.gl/L8eri2PCFLhADxDk9',
  email: 'claritleonelmnicol@gmail.com',
  gaId: 'G-HXM22WWPKP',
} as const;

// Append the consistent site name to a sub-page title.
export function withSiteName(pageTitle: string): string {
  return `${pageTitle} | ${SITE_NAME}`;
}
