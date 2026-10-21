import assert from 'node:assert/strict';
import { unstable_dev } from 'wrangler';
import worker from '../src/worker.js';
const server = await unstable_dev('src/worker.js', {
 config: 'wrangler.jsonc', local: true,
 experimental: { disableExperimentalWarning: true },
});
try {
 for (const path of ['/404', '/404/', '/404.html', '/404?probe=a%2Fb&probe=2', '/404/?probe=a%2Fb&probe=2', '/404.html?probe=a%2Fb&probe=2', '/unknown-error-probe?probe=1']) {
  for (const method of ['GET', 'HEAD']) {
   const response = await server.fetch(path, {method, redirect:'manual'});
   assert.equal(response.status,404,`${method} ${path}`);
   assert.equal(response.headers.get('x-robots-tag'),'noindex, follow');
   assert.equal(response.headers.get('location'),null);
   const body=await response.text();
   if(method==='HEAD') assert.equal(body,'');
   else {
    assert.match(body,/404 · Hindi natagpuan/);
    assert.match(body,/name="robots" content="noindex, follow"/);
   }
  }
 }
 const home=await server.fetch('/');assert.equal(home.status,200);assert.equal(home.headers.get('x-robots-tag'),null);
 // Direct branch tests isolate unchanged redirect behavior from Assets.
 for(const host of ['divisoriamallph.com','www.divisoriamallph.com']) {
  for(const protocol of ['http:','https:']) {
   if(host==='divisoriamallph.com'&&protocol==='https:')continue;
   for(const method of ['GET','HEAD']) {
    const r=await worker.fetch(new Request(`${protocol}//${host}/404.html?probe=a%2Fb&probe=2`,{method}),{
     ASSETS:{fetch(){throw Error('Redirect must precede Assets')}},
    });
    assert.equal(r.status,301);
    assert.equal(r.headers.get('location'),'https://divisoriamallph.com/404.html?probe=a%2Fb&probe=2');
   }
  }
 }
 console.log('PASS: real local Worker + Assets error aliases GET/HEAD/query and unknown 404, homepage 200; separate direct host/protocol redirect branch tests preserve path/query. No browser or production assertion.');
} finally {await server.stop()}
