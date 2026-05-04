/**
 * Injects a neighborhood-x-service directory into the homepage and the 5
 * borough-level service pages.
 *
 * Homepage: matrix of 20 neighborhoods x 5 services = 100 internal links.
 * Service pages: matrix of 20 neighborhoods linking to that service's combo pages.
 */
const fs = require('fs');
const path = require('path');
const services = require('./_data/services.js');
const neighborhoods = require('./_data/neighborhoods.js');

const ROOT = __dirname;

// ---- CSS for the directory section --------------------------------------
const DIRECTORY_CSS = `
<style>
.nh-directory{
  background:linear-gradient(180deg, #06101D 0%, #0E1B2E 100%);
  padding:80px 0;color:#fff;
  border-top:6px solid transparent;
  border-image:repeating-linear-gradient(90deg, var(--accent) 0 18px, #08111E 18px 36px) 1;
}
.nh-directory .hub-section-head{text-align:center;margin-bottom:36px}
.nh-directory .hub-section-head h2{color:#fff;font-size:clamp(28px, 3.6vw, 40px);font-weight:800;letter-spacing:-.028em;margin:0 0 16px;max-width:none}
.nh-directory .hub-section-head p{color:rgba(255,255,255,.78);font-size:17px;max-width:62ch;margin:0 auto;line-height:1.6}
.nh-directory .section-eyebrow{background:rgba(255,180,0,.14);border:1px solid rgba(255,180,0,.40);color:#FFE188;padding:7px 14px;border-radius:999px;display:inline-block;font-family:var(--mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;font-weight:700;margin-bottom:18px}
.nh-grid{display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:14px;max-width:1200px;margin:0 auto}
.nh-card{
  background:linear-gradient(180deg, #14233A 0%, #0E1B2E 100%);
  border:1px solid rgba(255,180,0,.20);
  border-radius:12px;padding:18px 18px 14px;
  transition:border-color .15s, transform .15s, box-shadow .15s;
}
.nh-card:hover{border-color:var(--accent);transform:translateY(-2px);box-shadow:0 8px 24px -8px rgba(255,180,0,.25)}
.nh-card-head{display:flex;justify-content:space-between;align-items:baseline;margin:0 0 10px;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,.10)}
.nh-card-name{color:#FFB400;font-weight:800;font-size:17px;letter-spacing:-.012em;margin:0}
.nh-card-time{color:rgba(255,255,255,.55);font-size:11px;font-family:var(--mono);letter-spacing:.10em;text-transform:uppercase}
.nh-card-links{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.nh-card-links a{color:rgba(255,255,255,.78);font-size:13px;padding:5px 8px;border-radius:6px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);font-weight:500;transition:background .15s, color .15s, border-color .15s}
.nh-card-links a:hover{color:#FFB400;background:rgba(255,180,0,.10);border-color:rgba(255,180,0,.35)}
.nh-card-links a:nth-child(5){grid-column:1/-1}
@media (max-width:680px){
  .nh-grid{grid-template-columns:1fr}
  .nh-directory{padding:48px 0}
}
</style>`;

// ---- Build the homepage directory section -------------------------------
function buildHomepageDirectory() {
  const cards = neighborhoods.map(n => {
    const links = services.map(s => `<a href="/${s.slug}-${n.slug}/">${s.name} →</a>`).join('\n          ');
    return `<div class="nh-card">
        <div class="nh-card-head">
          <h3 class="nh-card-name">${n.name}</h3>
          <span class="nh-card-time">~${n.responseMin} min</span>
        </div>
        <div class="nh-card-links">
          ${links}
        </div>
      </div>`;
  }).join('\n      ');

  return `

<!-- ==================================================================
     NEIGHBORHOOD × SERVICE DIRECTORY
     ================================================================== -->
<section class="nh-directory" id="locations" aria-labelledby="locations-h2">
  <div class="container">
    <div class="hub-section-head">
      <span class="section-eyebrow">20 Neighborhoods · 5 Services · 100 Pages</span>
      <h2 id="locations-h2">Find Your Queens Neighborhood</h2>
      <p>Every Queens neighborhood we cover has a dedicated page for each of our five services — local response times, neighborhood-specific scenarios, and the corridors and call patterns that match where you actually drive.</p>
    </div>
    <div class="nh-grid">
      ${cards}
    </div>
  </div>
</section>
`;
}

// ---- Build a per-service page directory section -------------------------
function buildServicePageDirectory(service) {
  const cards = neighborhoods.map(n => {
    return `<div class="nh-card">
        <div class="nh-card-head">
          <h3 class="nh-card-name"><a href="/${service.slug}-${n.slug}/" style="color:#FFB400;text-decoration:none">${n.name} →</a></h3>
          <span class="nh-card-time">~${n.responseMin} min</span>
        </div>
        <div style="font-size:13px;line-height:1.5;color:rgba(255,255,255,.72);padding-top:8px;border-top:1px solid rgba(255,255,255,.08)">${service.name} service in ${n.name} — local dispatch, ~${n.responseMin} min response inside the neighborhood.</div>
      </div>`;
  }).join('\n      ');

  return `

<!-- ==================================================================
     ${service.name.toUpperCase()} BY NEIGHBORHOOD
     ================================================================== -->
<section class="nh-directory" id="locations" aria-labelledby="locations-h2">
  <div class="container">
    <div class="hub-section-head">
      <span class="section-eyebrow">${service.name} · 20 Queens Neighborhoods</span>
      <h2 id="locations-h2">${service.name} Service by Queens Neighborhood</h2>
      <p>${service.name} service has dedicated pages for each Queens neighborhood we cover — neighborhood-specific scenarios, local response times, and call patterns that match where you actually drive.</p>
    </div>
    <div class="nh-grid">
      ${cards}
    </div>
  </div>
</section>
`;
}

// ---- Inject into homepage -----------------------------------------------
function injectHomepage() {
  const filePath = path.join(ROOT, 'index.html');
  let html = fs.readFileSync(filePath, 'utf8');

  // Remove any prior directory injection (idempotent re-run)
  html = html.replace(/\n<!-- ====+\n     NEIGHBORHOOD × SERVICE DIRECTORY\n     ====+ -->[\s\S]*?<\/section>\n/, '\n');

  // Inject CSS into the existing <style> block (only once)
  if (!html.includes('.nh-directory{')) {
    const styleEnd = html.indexOf('</style>');
    if (styleEnd === -1) throw new Error('No </style> found in homepage');
    html = html.slice(0, styleEnd) + DIRECTORY_CSS.replace('<style>', '').replace('</style>', '') + html.slice(styleEnd);
  }

  // Inject the directory section after the </section> that closes nearme
  const nearmeMatch = html.match(/(<section class="nearme-section"[\s\S]*?<\/section>)/);
  if (!nearmeMatch) throw new Error('Cannot find nearme-section in homepage');
  const nearmeEndIdx = html.indexOf(nearmeMatch[1]) + nearmeMatch[1].length;
  html = html.slice(0, nearmeEndIdx) + buildHomepageDirectory() + html.slice(nearmeEndIdx);

  fs.writeFileSync(filePath, html, 'utf8');
  console.log('  ✓ Injected directory into / (homepage)');
}

// ---- Inject into service pages ------------------------------------------
function injectServicePage(service) {
  const filePath = path.join(ROOT, service.slug, 'index.html');
  if (!fs.existsSync(filePath)) {
    console.log(`  [skip] /${service.slug}/ — no file`);
    return;
  }
  let html = fs.readFileSync(filePath, 'utf8');

  // Remove any prior directory injection
  html = html.replace(/\n<!-- ====+\n     [A-Z\s]+ BY NEIGHBORHOOD\n     ====+ -->[\s\S]*?<\/section>\n/, '\n');

  // Inject CSS once
  if (!html.includes('.nh-directory{')) {
    const styleEnd = html.indexOf('</style>');
    if (styleEnd === -1) throw new Error(`No </style> found in /${service.slug}/`);
    html = html.slice(0, styleEnd) + DIRECTORY_CSS.replace('<style>', '').replace('</style>', '') + html.slice(styleEnd);
  }

  // Inject before the </main> tag
  const mainCloseIdx = html.lastIndexOf('</main>');
  if (mainCloseIdx === -1) throw new Error(`No </main> found in /${service.slug}/`);
  html = html.slice(0, mainCloseIdx) + buildServicePageDirectory(service) + html.slice(mainCloseIdx);

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`  ✓ Injected directory into /${service.slug}/`);
}

// ---- Run -----------------------------------------------------------------
console.log('Injecting neighborhood directory...');
injectHomepage();
for (const s of services) injectServicePage(s);
console.log('Done.');
