/**
 * Post-process every generated HTML page to:
 *   A) Localize the Service Areas nav dropdown so each page links to its own service's combos
 *      (e.g. on /tire-change-astoria/, "Service Areas → Flushing" goes to /tire-change-flushing/, not /jumpstart-flushing/)
 *   B) Inject inline prose links — first occurrence of "battery replacement", "lockout",
 *      "tire change", "fuel delivery", "jump start" inside <p> tags becomes a link to that
 *      service's neighborhood-specific combo page.
 *      Plus first occurrence of an adjacent-neighborhood name becomes a link to that
 *      neighborhood's same-service combo.
 */
const fs = require('fs');
const path = require('path');
const services = require('./_data/services.js');
const neighborhoods = require('./_data/neighborhoods.js');

const ROOT = __dirname;

// ---- Geographic adjacency (must match _build_combos.js) ----
const adjacency = {
  'astoria': ['long-island-city', 'sunnyside', 'east-elmhurst'],
  'long-island-city': ['astoria', 'sunnyside', 'maspeth'],
  'sunnyside': ['astoria', 'long-island-city', 'woodside'],
  'woodside': ['sunnyside', 'jackson-heights', 'maspeth'],
  'jackson-heights': ['woodside', 'east-elmhurst', 'corona'],
  'east-elmhurst': ['astoria', 'jackson-heights', 'corona'],
  'corona': ['jackson-heights', 'east-elmhurst', 'flushing'],
  'flushing': ['corona', 'whitestone', 'college-point'],
  'forest-hills': ['rego-park', 'briarwood', 'flushing'],
  'rego-park': ['forest-hills', 'maspeth', 'briarwood'],
  'briarwood': ['forest-hills', 'jamaica', 'rego-park'],
  'jamaica': ['briarwood', 'richmond-hill', 'fresh-meadows'],
  'howard-beach': ['ozone-park', 'jamaica', 'richmond-hill'],
  'ozone-park': ['howard-beach', 'richmond-hill', 'jamaica'],
  'richmond-hill': ['ozone-park', 'jamaica', 'howard-beach'],
  'maspeth': ['woodside', 'ridgewood', 'long-island-city'],
  'ridgewood': ['maspeth', 'woodside', 'long-island-city'],
  'whitestone': ['flushing', 'college-point', 'fresh-meadows'],
  'college-point': ['flushing', 'whitestone', 'fresh-meadows'],
  'fresh-meadows': ['briarwood', 'jamaica', 'flushing'],
};

const neighborhoodNameBySlug = Object.fromEntries(neighborhoods.map(n => [n.slug, n.name]));

// Phrases that should link to each service. First-occurrence-only.
const servicePhrases = {
  'jumpstart': ['jump start service', 'jump start call', 'jump start'],
  'car-lockout': ['lockout call', 'car lockout', 'locked out'],
  'tire-change': ['tire change', 'flat tire', 'sidewall blowout'],
  'fuel-delivery': ['fuel delivery', 'ran out of gas', 'out of gas'],
  'battery-replacement': ['battery replacement', 'replace the battery'],
};

// ---- Inline link injector --------------------------------------------------
// Finds the first occurrence of `phrase` inside a <p>...</p> block where the
// region from <p> to the phrase contains no <a> or other heading/script tag.
// Wraps the match in <a href="target" class="prose-link">.
function injectInlineLink(html, phrase, target) {
  const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Match <p ...>(stuff that doesn't contain </p> or <a ...>)phrase
  // Using tempered greedy token (?:(?!X)[\s\S])*?
  const re = new RegExp(
    `(<p\\b[^>]*>(?:(?!<\\/p>|<a\\s|<h[1-6]\\b)[\\s\\S])*?)(\\b${escaped}\\b)`,
    'i'
  );
  if (!re.test(html)) return { html, injected: false };
  const newHtml = html.replace(re, `$1<a href="${target}" class="prose-link">$2</a>`);
  return { html: newHtml, injected: true };
}

// ---- Area-dropdown localizer ----------------------------------------------
function localizeAreaDropdown(html, serviceSlug) {
  if (serviceSlug === 'jumpstart') return html; // No change needed
  // Replace area dropdown links from /jumpstart-{n}/ to /{serviceSlug}-{n}/
  return html.replace(
    /href="\/jumpstart-([a-z-]+)\/"(\s+class="nav-dd-area")/g,
    `href="/${serviceSlug}-$1/"$2`
  );
}

// ---- Process a single page -------------------------------------------------
function processPage(filePath, currentService, currentNeighborhood) {
  if (!fs.existsSync(filePath)) return null;
  let html = fs.readFileSync(filePath, 'utf8');
  const before = html;

  // Step A: localize area dropdown
  html = localizeAreaDropdown(html, currentService);

  // Step B: inject service triggers (skip the current service)
  let serviceLinkCount = 0;
  for (const [svcSlug, phrases] of Object.entries(servicePhrases)) {
    if (svcSlug === currentService) continue;
    // Only one inject per service per page — try phrases in order
    const target = currentNeighborhood
      ? `/${svcSlug}-${currentNeighborhood}/`
      : `/${svcSlug}/`;
    for (const phrase of phrases) {
      const result = injectInlineLink(html, phrase, target);
      if (result.injected) {
        html = result.html;
        serviceLinkCount++;
        break;
      }
    }
  }

  // Step B: inject adjacent neighborhood triggers (combo pages only)
  let neighborhoodLinkCount = 0;
  if (currentNeighborhood && adjacency[currentNeighborhood]) {
    for (const adjSlug of adjacency[currentNeighborhood]) {
      const nname = neighborhoodNameBySlug[adjSlug];
      const target = `/${currentService}-${adjSlug}/`;
      const result = injectInlineLink(html, nname, target);
      if (result.injected) {
        html = result.html;
        neighborhoodLinkCount++;
      }
    }
  }

  if (html !== before) {
    fs.writeFileSync(filePath, html, 'utf8');
  }
  return { serviceLinkCount, neighborhoodLinkCount, changed: html !== before };
}

// ---- Inject CSS for .prose-link into homepage <style> block ---------------
function ensureProseLinkCss() {
  const indexPath = path.join(ROOT, 'index.html');
  let html = fs.readFileSync(indexPath, 'utf8');
  if (html.includes('.prose-link{')) return false;
  const proseCss = `
.prose-link{
  color:var(--accent-deep);
  font-weight:600;
  border-bottom:1.5px solid var(--accent);
  padding-bottom:1px;
  transition:color .12s, border-color .12s, background .12s;
}
.prose-link:hover{
  color:var(--accent);
  background:rgba(255,180,0,.10);
  border-bottom-color:var(--accent-deep);
}
.svc-content-section.dark .prose-link, .nh-directory .prose-link, .svc-related .prose-link{
  color:var(--accent-bright);
  border-bottom-color:rgba(255,180,0,.50);
}
.svc-content-section.dark .prose-link:hover, .nh-directory .prose-link:hover, .svc-related .prose-link:hover{
  color:#fff;
  background:rgba(255,180,0,.18);
  border-bottom-color:var(--accent-bright);
}
`;
  html = html.replace('</style>', proseCss + '\n</style>');
  fs.writeFileSync(indexPath, html, 'utf8');
  return true;
}

// ---- Run -------------------------------------------------------------------
console.log('Post-processing all pages for smart links + inline prose links...\n');

const cssAdded = ensureProseLinkCss();
if (cssAdded) console.log('  ✓ Added .prose-link CSS to homepage <style>\n');

let totalSvcLinks = 0;
let totalNbhLinks = 0;
let pagesChanged = 0;

// Homepage (no specific service or neighborhood — defaults to jumpstart)
let r = processPage(path.join(ROOT, 'index.html'), 'jumpstart', null);
if (r && r.changed) pagesChanged++;
if (r) { totalSvcLinks += r.serviceLinkCount; totalNbhLinks += r.neighborhoodLinkCount; }

// 5 borough service pages
for (const s of services) {
  const fp = path.join(ROOT, s.slug, 'index.html');
  r = processPage(fp, s.slug, null);
  if (r && r.changed) pagesChanged++;
  if (r) { totalSvcLinks += r.serviceLinkCount; totalNbhLinks += r.neighborhoodLinkCount; }
}

// 100 combo pages
for (const s of services) {
  for (const n of neighborhoods) {
    const fp = path.join(ROOT, `${s.slug}-${n.slug}`, 'index.html');
    r = processPage(fp, s.slug, n.slug);
    if (r && r.changed) pagesChanged++;
    if (r) { totalSvcLinks += r.serviceLinkCount; totalNbhLinks += r.neighborhoodLinkCount; }
  }
}

console.log(`Pages changed: ${pagesChanged}`);
console.log(`Total service prose links injected: ${totalSvcLinks}`);
console.log(`Total nearby-neighborhood prose links injected: ${totalNbhLinks}`);
console.log(`Combined: ${totalSvcLinks + totalNbhLinks} new in-prose links across the site.`);
