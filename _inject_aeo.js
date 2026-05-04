/**
 * Adds AEO (Answer Engine Optimization) signals to every page:
 *   - Meta tags hinting at AI training/answer permissions
 *   - <meta name="audience">, <meta name="topic">, <meta name="coverage">
 *   - Reference to /llms.txt and /llms-full.txt in <head>
 *
 * Already in place: HowTo schema, Speakable schema, FAQPage schema, structured Q&A in body.
 */
const fs = require('fs');
const path = require('path');
const services = require('./_data/services.js');
const neighborhoods = require('./_data/neighborhoods.js');

const ROOT = __dirname;

const aeoMeta = `
<!-- AEO / Answer Engine Optimization -->
<meta name="audience" content="Drivers in Queens NY">
<meta name="topic" content="Roadside Assistance">
<meta name="coverage" content="Queens NY (all 20 neighborhoods) + border Brooklyn">
<meta name="distribution" content="local">
<meta name="rating" content="general">
<meta name="revisit-after" content="7 days">
<link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-friendly business summary">
<link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM-friendly Q&amp;A reference">
<meta name="ai-content-declaration" content="human-authored">`;

function processPage(filePath) {
  if (!fs.existsSync(filePath)) return false;
  let html = fs.readFileSync(filePath, 'utf8');
  if (html.includes('<!-- AEO / Answer Engine Optimization -->')) return false;
  // Insert before </head>
  html = html.replace('</head>', aeoMeta + '\n</head>');
  fs.writeFileSync(filePath, html, 'utf8');
  return true;
}

let count = 0;
if (processPage(path.join(ROOT, 'index.html'))) count++;
for (const s of services) {
  if (processPage(path.join(ROOT, s.slug, 'index.html'))) count++;
  for (const n of neighborhoods) {
    if (processPage(path.join(ROOT, `${s.slug}-${n.slug}`, 'index.html'))) count++;
  }
}
console.log(`AEO meta tags added to ${count} pages.`);
