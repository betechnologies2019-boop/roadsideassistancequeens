/**
 * Replaces the homepage's bare header with a full nav menu.
 * (Home, Services dropdown, Service Areas dropdown, Pricing, FAQ, Call Dispatch)
 *
 * Then re-runs the combo and service-page generators so the new menu propagates
 * to all 105 generated pages (the generators extract the HEADER block from index.html).
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = __dirname;
const services = require('./_data/services.js');
const neighborhoods = require('./_data/neighborhoods.js');

// ---- New header HTML ----------------------------------------------------
const serviceLinks = services.map(s =>
  `        <a href="/${s.slug}/" class="nav-dd-item"><span class="nav-dd-name">${s.name}</span><span class="nav-dd-meta">$125 flat · 24/7</span></a>`
).join('\n');

const areaLinks = neighborhoods.map(n =>
  `        <a href="/jumpstart-${n.slug}/" class="nav-dd-area"><span class="nav-dd-name">${n.name}</span><span class="nav-dd-meta">~${n.responseMin} min</span></a>`
).join('\n');

const newHeader = `<!-- HEADER -->
<header class="site">
  <div class="container nav">
    <a href="/" class="brand" aria-label="Roadside Assistance Queens — home">
      <span>Roadside Assistance Queens</span>
    </a>

    <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-menu">
      <span></span><span></span><span></span>
    </button>

    <nav class="nav-menu" id="nav-menu" aria-label="Primary">
      <a href="/" class="nav-link">Home</a>

      <div class="nav-dd">
        <button class="nav-link nav-dd-toggle" type="button" aria-expanded="false" aria-haspopup="true">
          Services <span class="nav-arrow" aria-hidden="true">▾</span>
        </button>
        <div class="nav-dd-panel" role="menu">
${serviceLinks}
        </div>
      </div>

      <div class="nav-dd nav-dd-wide">
        <button class="nav-link nav-dd-toggle" type="button" aria-expanded="false" aria-haspopup="true">
          Service Areas <span class="nav-arrow" aria-hidden="true">▾</span>
        </button>
        <div class="nav-dd-panel nav-dd-panel-grid" role="menu">
${areaLinks}
        </div>
      </div>

      <a href="/#pricing" class="nav-link">Pricing</a>
      <a href="/#faq-grid-hub" class="nav-link">FAQ</a>
    </nav>

    <a href="tel:+17185501460" class="nav-cta" aria-label="Call dispatch now">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 2.06 4.18 2 2 0 0 1 4.05 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      <span class="nav-cta-text">Call Dispatch</span>
    </a>
  </div>
</header>`;

// ---- New CSS for the menu (appended to existing <style>) ----------------
const NEW_CSS = `

/* ============ NAV MENU ============ */
header.site .container.nav{
  display:flex;align-items:center;gap:18px;
  padding-top:14px;padding-bottom:14px;
}
.nav-menu{
  display:flex;align-items:center;gap:4px;
  margin-left:auto;margin-right:14px;
  flex:1;justify-content:center;
}
.nav-link{
  color:rgba(255,255,255,.85);
  font-size:14px;font-weight:600;
  padding:9px 14px;border-radius:8px;
  letter-spacing:-.005em;
  background:transparent;border:0;cursor:pointer;
  transition:color .15s, background .15s;
  display:inline-flex;align-items:center;gap:5px;font-family:inherit;
}
.nav-link:hover{color:#FFB400;background:rgba(255,180,0,.08)}
.nav-arrow{font-size:11px;line-height:1;opacity:.7;transition:transform .2s}
.nav-dd{position:relative}
.nav-dd-toggle[aria-expanded="true"] .nav-arrow{transform:rotate(180deg)}
.nav-dd-toggle[aria-expanded="true"]{color:#FFB400;background:rgba(255,180,0,.10)}
.nav-dd-panel{
  position:absolute;top:calc(100% + 8px);left:0;
  background:#0E1B2E;border:1px solid rgba(255,180,0,.30);
  border-radius:12px;padding:10px;
  min-width:280px;
  box-shadow:0 12px 32px -8px rgba(0,0,0,.55), 0 1px 0 rgba(255,255,255,.06) inset;
  opacity:0;pointer-events:none;
  transform:translateY(-6px);
  transition:opacity .18s, transform .18s;
  z-index:50;
}
.nav-dd-toggle[aria-expanded="true"] + .nav-dd-panel{opacity:1;pointer-events:auto;transform:translateY(0)}
.nav-dd-panel-grid{
  display:grid;grid-template-columns:repeat(3, minmax(150px, 1fr));
  gap:6px;min-width:560px;left:auto;right:0;
}
.nav-dd-item, .nav-dd-area{
  display:flex;flex-direction:column;align-items:flex-start;
  padding:10px 12px;border-radius:8px;
  color:rgba(255,255,255,.88);
  background:rgba(255,255,255,.03);
  border:1px solid rgba(255,255,255,.06);
  transition:background .12s, border-color .12s, transform .12s;
  text-decoration:none;
}
.nav-dd-item:hover, .nav-dd-area:hover{
  background:rgba(255,180,0,.10);
  border-color:rgba(255,180,0,.40);
  transform:translateX(2px);
}
.nav-dd-name{color:#fff;font-weight:700;font-size:14px;letter-spacing:-.012em}
.nav-dd-area:hover .nav-dd-name, .nav-dd-item:hover .nav-dd-name{color:#FFB400}
.nav-dd-meta{
  color:rgba(255,255,255,.50);font-size:11px;
  font-family:var(--mono);letter-spacing:.10em;text-transform:uppercase;
  margin-top:2px;font-weight:500;
}

/* Hamburger toggle */
.nav-toggle{
  display:none;
  width:40px;height:40px;
  background:transparent;border:1px solid rgba(255,255,255,.15);
  border-radius:8px;
  cursor:pointer;padding:0;
  flex-direction:column;justify-content:center;align-items:center;gap:4px;
  margin-left:auto;
}
.nav-toggle span{
  display:block;width:18px;height:2px;
  background:#fff;border-radius:1px;
  transition:transform .2s, opacity .2s;
}
.nav-toggle[aria-expanded="true"] span:nth-child(1){transform:translateY(6px) rotate(45deg)}
.nav-toggle[aria-expanded="true"] span:nth-child(2){opacity:0}
.nav-toggle[aria-expanded="true"] span:nth-child(3){transform:translateY(-6px) rotate(-45deg)}

@media (max-width:1100px){
  .nav-dd-panel-grid{grid-template-columns:repeat(2, minmax(140px, 1fr));min-width:420px}
}
@media (max-width:920px){
  .nav-toggle{display:flex}
  .nav-cta-text{display:none}
  .nav-cta{padding:9px 12px !important}
  header.site .container.nav{gap:10px}
  .nav-menu{
    position:fixed;top:0;right:0;bottom:0;
    width:min(360px, 86vw);
    background:#06101D;
    border-left:1px solid rgba(255,180,0,.25);
    flex-direction:column;align-items:stretch;justify-content:flex-start;
    padding:80px 22px 28px;gap:6px;
    transform:translateX(100%);
    transition:transform .25s ease;
    overflow-y:auto;
    z-index:200;
    box-shadow:-12px 0 32px rgba(0,0,0,.4);
  }
  .nav-menu.open{transform:translateX(0)}
  .nav-link{
    width:100%;padding:14px 12px;font-size:16px;
    border-radius:10px;
    border-bottom:1px solid rgba(255,255,255,.06);
    justify-content:space-between;
  }
  .nav-dd{width:100%}
  .nav-dd-toggle{width:100%;justify-content:space-between}
  .nav-dd-panel{
    position:static;
    background:transparent;border:0;padding:8px 0 12px 8px;
    min-width:0;width:100%;
    opacity:1;pointer-events:auto;transform:none;
    box-shadow:none;
    display:none;
  }
  .nav-dd-toggle[aria-expanded="true"] + .nav-dd-panel{display:block}
  .nav-dd-panel-grid{grid-template-columns:1fr 1fr;gap:6px;min-width:0}
  .nav-dd-item, .nav-dd-area{padding:10px 12px}
  body.nav-open{overflow:hidden}
  body.nav-open::after{
    content:"";position:fixed;inset:0;
    background:rgba(0,0,0,.55);z-index:150;
    backdrop-filter:blur(2px);
  }
}
@media (max-width:480px){
  .nav-dd-panel-grid{grid-template-columns:1fr}
}`;

// ---- New JS for the menu (appended to existing inline <script>) ---------
const NEW_JS = `

// ============ NAV MENU TOGGLE ============
(function(){
  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function(){
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('nav-open', open);
    });
  }
  // Dropdown toggles (work on both desktop and mobile)
  document.querySelectorAll('.nav-dd-toggle').forEach(function(btn){
    btn.addEventListener('click', function(e){
      e.stopPropagation();
      var nowOpen = btn.getAttribute('aria-expanded') !== 'true';
      // Close all other dropdowns
      document.querySelectorAll('.nav-dd-toggle').forEach(function(b){
        if (b !== btn) b.setAttribute('aria-expanded', 'false');
      });
      btn.setAttribute('aria-expanded', nowOpen ? 'true' : 'false');
    });
  });
  // Close dropdowns on click outside
  document.addEventListener('click', function(e){
    if (!e.target.closest('.nav-dd')) {
      document.querySelectorAll('.nav-dd-toggle').forEach(function(b){
        b.setAttribute('aria-expanded', 'false');
      });
    }
  });
  // Close mobile menu when a nav link inside it is clicked (not the dd-toggle)
  document.querySelectorAll('.nav-menu a').forEach(function(a){
    a.addEventListener('click', function(){
      if (window.innerWidth <= 920 && menu) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      }
    });
  });
})();`;

// ---- Inject into homepage -----------------------------------------------
let html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

// Replace the entire HEADER block
html = html.replace(/<!-- HEADER -->\s*<header class="site">[\s\S]*?<\/header>/, newHeader);

// Inject CSS at the end of the existing <style> block (before </style>)
if (!html.includes('/* ============ NAV MENU ============ */')) {
  html = html.replace('</style>', NEW_CSS + '\n</style>');
}

// Inject JS — find the existing script block that starts with `document.getElementById`
// and append the menu JS before its closing </script>
if (!html.includes('// ============ NAV MENU TOGGLE ============')) {
  // Append into the IntersectionObserver / carousel script block
  const scriptMatch = html.match(/(<script>\s*\ndocument\.getElementById[\s\S]*?)<\/script>/);
  if (scriptMatch) {
    html = html.replace(scriptMatch[0], scriptMatch[1] + NEW_JS + '\n</script>');
  } else {
    // Fallback: add a new script block before </body>
    html = html.replace('</body>', '<script>' + NEW_JS + '\n</script>\n</body>');
  }
}

fs.writeFileSync(path.join(ROOT, 'index.html'), html, 'utf8');
console.log('  ✓ Updated index.html with nav menu');

// ---- Re-run generators so all 105 other pages pick up the new header ----
console.log('\nRe-running combo + service page generators to propagate menu...');
execSync('node _build_service_pages.js', { cwd: ROOT, stdio: 'inherit' });
execSync('node _build_combos.js', { cwd: ROOT, stdio: 'inherit' });
execSync('node _inject_directory.js', { cwd: ROOT, stdio: 'inherit' });

console.log('\nRe-building deployment package...');
execSync('node _dist.js', { cwd: ROOT, stdio: 'inherit' });

console.log('\n✓ Menu propagated to all pages, ZIP rebuilt.');
