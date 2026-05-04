/**
 * IndexNow submission — pings Bing/Yandex/Seznam to crawl all our URLs.
 * Reads sitemap.xml, POSTs URL list to https://api.indexnow.org/indexnow
 *
 * Run after each deploy that adds/changes URLs.
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = __dirname;
const HOST = 'www.roadsideassistancequeens.com';
const KEY = fs.readFileSync(path.join(ROOT, '_indexnow_key.txt'), 'utf8').trim();
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Read sitemap and extract URLs
const sitemapXml = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
const urlMatches = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)];
// Filter to page URLs only (skip image:loc URLs)
const urls = urlMatches.map(m => m[1]).filter(u => !u.includes('/img/'));

console.log(`IndexNow submission`);
console.log(`  Host: ${HOST}`);
console.log(`  Key: ${KEY}`);
console.log(`  Key location: ${KEY_LOCATION}`);
console.log(`  URLs to submit: ${urls.length}`);
console.log();

const body = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urls,
});

const req = https.request({
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
  },
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log(`HTTP ${res.statusCode}: ${res.statusMessage}`);
    if (data) console.log('Response: ' + data);
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log('\n✓ Submitted. Bing/Yandex/Seznam will crawl within hours.');
    } else {
      console.log('\n⚠ Non-success status. Check key file is reachable at: ' + KEY_LOCATION);
    }
  });
});

req.on('error', (e) => {
  console.error('Error:', e.message);
});

req.write(body);
req.end();
