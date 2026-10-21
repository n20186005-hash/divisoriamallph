const canonicalHost = 'divisoriamallph.com';
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if ((url.hostname === canonicalHost || url.hostname === `www.${canonicalHost}`) &&
        (url.protocol !== 'https:' || url.hostname !== canonicalHost)) {
      url.protocol = 'https:'; url.hostname = canonicalHost; url.port = '';
      return Response.redirect(url.toString(), 301);
    }
    const isErrorAlias = ['/404', '/404/', '/404.html'].includes(url.pathname);
    // Read the error document without Assets redirecting its HTML aliases.
    const assetRequest = isErrorAlias ? new Request(new URL('/404', url), request) : request;
    const response = await env.ASSETS.fetch(assetRequest);
    if (!isErrorAlias && response.status !== 404) return response;
    const headers = new Headers(response.headers);
    headers.set('X-Robots-Tag', 'noindex, follow');
    return new Response(request.method === 'HEAD' ? null : response.body, {status: 404, statusText: 'Not Found', headers});
  }
};
