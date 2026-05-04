/**
 * Combo page generator — service × neighborhood.
 *
 * Reads:
 *   _data/neighborhoods.js
 *   _data/services.js
 *   _data/variation_pools.js
 *   _data/cells/{service}.js  (cell content keyed by neighborhood slug)
 *
 * Writes one HTML page per (service, neighborhood) combo at /{service}-{neighborhood}/index.html.
 *
 * Variant selection: deterministic by hash(comboSlug) mod poolSize. Same combo always gets the
 * same variant — important for deduping and re-runs.
 *
 * Usage: node _build_combos.js {service-slug}      # one service, all 20 neighborhoods
 *        node _build_combos.js                     # all 5 services if all cell files exist
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = __dirname;

const neighborhoods = require('./_data/neighborhoods.js');
const services = require('./_data/services.js');
const pools = require('./_data/variation_pools.js');

// ---- Deterministic variant picker ----------------------------------------
function hashSlug(slug) {
  const h = crypto.createHash('sha256').update(slug).digest('hex');
  return parseInt(h.slice(0, 8), 16);
}
function pick(slug, arr, salt = '') {
  return arr[hashSlug(slug + salt) % arr.length];
}

// ---- Geographic adjacency (3 neighbors per neighborhood) ----------------
// Keeps "same service, nearby neighborhood" interlinks geographically relevant.
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

// ---- Sister-service map (ordered by relevance per anchor service) -------
// Used for cross-service interlinks: "from a jumpstart page, surface battery first."
const sisterServices = {
  'jumpstart': ['battery-replacement', 'car-lockout', 'tire-change', 'fuel-delivery'],
  'car-lockout': ['jumpstart', 'battery-replacement', 'tire-change', 'fuel-delivery'],
  'tire-change': ['fuel-delivery', 'jumpstart', 'battery-replacement', 'car-lockout'],
  'fuel-delivery': ['tire-change', 'jumpstart', 'battery-replacement', 'car-lockout'],
  'battery-replacement': ['jumpstart', 'car-lockout', 'tire-change', 'fuel-delivery'],
};

// ---- Service display-name lookup -----------------------------------------
const serviceNameBySlug = Object.fromEntries(services.map(s => [s.slug, s.name]));
const neighborhoodNameBySlug = Object.fromEntries(neighborhoods.map(n => [n.slug, n.name]));

// ---- Interlink helper ----------------------------------------------------
// Produces a <div class="interlinks"> with "Label:" prefix + comma-anchor list.
function interlinks(label, items) {
  const html = items.filter(Boolean).map(([href, text]) =>
    `<a href="${href}">${text}</a>`
  ).join(' ');
  return `      <div class="interlinks">${label}: ${html}</div>`;
}

// ---- Template substitution -----------------------------------------------
function fill(template, vars) {
  return template.replace(/\{(\w+)\}/g, (_, key) => vars[key] != null ? vars[key] : `{${key}}`);
}

// ---- Read shared blocks from index.html ---------------------------------
const homepage = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const STYLE_BLOCK = (homepage.match(/(<style>[\s\S]*?<\/style>)/) || [])[1] || '';
const FOOTER_BLOCK = (homepage.match(/(<footer[\s\S]*?<\/footer>)/) || [])[1] || '';
const TOPBAR_BLOCK = (homepage.match(/(<!-- TOPBAR -->[\s\S]*?<\/div>\s*<\/div>)/) || [])[1] || '';
const HEADER_BLOCK = (homepage.match(/(<!-- HEADER -->[\s\S]*?<\/header>)/) || [])[1] || '';
const MOBILE_BLOCK = ((homepage.match(/(<!-- MOBILE STICKY[^>]*-->[\s\S]*?<\/div>\s*\n\s*<script)/) || [])[1] || '').replace(/\s*<script$/, '');
const SCRIPT_BLOCK = (homepage.match(/(<script>\s*\ndocument\.getElementById[\s\S]*?<\/script>)/) || [])[1] || '';

// ---- Page styles (combo pages only) -------------------------------------
const PAGE_STYLES = `
<style>
.svc-page-hero{background:#06101D !important;padding:80px 0 88px !important;text-align:center !important;position:relative;overflow:hidden;border-bottom:6px solid transparent;border-image:repeating-linear-gradient(90deg, var(--accent) 0 18px, #08111E 18px 36px) 1;color:#fff}
.svc-page-hero::before{content:"";position:absolute;inset:0;pointer-events:none;z-index:0;background:linear-gradient(180deg, rgba(6,16,29,.78) 0%, rgba(6,16,29,.92) 100%),url("/img/hero-tow.webp") 30% 50%/cover no-repeat;filter:saturate(.85) contrast(1.05)}
.svc-page-hero::after{content:"";position:absolute;inset:0;pointer-events:none;z-index:0;background:radial-gradient(900px 540px at 50% 40%, rgba(255,180,0,.20) 0%, transparent 60%),radial-gradient(1400px 800px at 50% 50%, transparent 0%, rgba(6,16,29,.40) 70%, rgba(6,16,29,.85) 100%)}
.svc-page-hero .container{position:relative;z-index:1;max-width:1000px}
.breadcrumb{display:flex;justify-content:center;gap:8px;flex-wrap:wrap;font-family:var(--mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.55);margin:0 0 28px}
.breadcrumb a{color:var(--accent-bright);border-bottom:1px solid rgba(255,180,0,.40);padding-bottom:1px}
.breadcrumb span{color:rgba(255,255,255,.55)}
.svc-page-h1{color:#fff;font-size:clamp(36px, 5.6vw, 72px);font-weight:800;letter-spacing:-.038em;line-height:1.04;margin:0 auto .25em;max-width:18ch;text-shadow:0 2px 24px rgba(0,0,0,.55), 0 1px 0 rgba(0,0,0,.7)}
.svc-page-h1 .accent{color:var(--accent-bright);background:linear-gradient(180deg, #FFE188 0%, var(--accent-bright) 50%, var(--accent) 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;display:inline-block;padding:0 .04em}
.svc-page-sub{color:rgba(255,255,255,.85);font-size:clamp(16px, 1.6vw, 19px);font-weight:500;max-width:60ch;margin:24px auto 28px;line-height:1.55;text-shadow:0 1px 12px rgba(0,0,0,.55)}
.svc-page-sub strong{color:var(--accent-bright);font-weight:800}
.svc-content-section{padding:80px 0;background:linear-gradient(180deg, #FFFEFB 0%, #F2EDE0 100%);position:relative}
.svc-content-section.dark{background:linear-gradient(180deg, #0A1320 0%, #06101D 100%) !important;color:#fff !important}
.svc-content-section.dark h2{color:#fff !important;text-shadow:0 1px 0 rgba(0,0,0,.6)}
.svc-content-section.dark p{color:rgba(255,255,255,.85) !important}
.svc-content-section.dark strong{color:#fff !important}
.svc-content-section h2{font-size:clamp(28px, 3.6vw, 40px);font-weight:800;letter-spacing:-.028em;margin:0 0 24px;color:var(--ink);max-width:26ch}
.h2-badge{display:inline-block;font-family:var(--mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;font-weight:700;color:var(--accent-deep);background:linear-gradient(180deg, #FFF1D1 0%, #FFE4A8 100%);border:1.5px solid var(--accent);border-radius:999px;padding:7px 14px;margin:0 0 18px;box-shadow:0 2px 0 rgba(194,70,23,.10), 0 6px 14px -6px rgba(245,158,11,.35)}
.svc-content-section.dark .h2-badge{color:#FFE188;background:linear-gradient(180deg, rgba(255,180,0,.18) 0%, rgba(255,180,0,.08) 100%);border-color:rgba(255,180,0,.55);box-shadow:0 2px 0 rgba(0,0,0,.30), 0 6px 14px -6px rgba(255,180,0,.20)}
.svc-content-section .container{max-width:980px}
.svc-content-section p{font-size:17px;line-height:1.7;color:var(--ink-2);margin:0 0 1em;max-width:64ch}
.svc-list{display:grid;gap:14px;margin:24px 0}
.svc-list-item{background:#FFFFFF;border:1px solid rgba(20,17,12,.12);border-radius:10px;padding:20px 22px;box-shadow:0 1px 0 rgba(255,255,255,.95) inset, 0 8px 18px -6px rgba(14,27,46,.10)}
.dark .svc-list-item{background:linear-gradient(180deg, #14233A 0%, #0E1B2E 100%);border-color:rgba(255,180,0,.20)}
.svc-list-item h3{margin:0 0 8px;font-size:17px;font-weight:700;color:var(--ink);letter-spacing:-.012em}
.dark .svc-list-item h3{color:#fff}
.svc-list-item p{margin:0;font-size:15px;color:var(--ink-3);line-height:1.55}
.dark .svc-list-item p{color:rgba(255,255,255,.78)}
.svc-section-cta{margin-top:32px;text-align:left}
.svc-page-trust{display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin:0 auto 28px;max-width:780px;position:relative;z-index:1}
.svc-related{background:linear-gradient(180deg, #06101D 0%, #02080F 100%);padding:64px 0;text-align:center;color:#fff}
.svc-related h3{font-size:22px;color:#fff;margin:0 0 8px;font-weight:800}
.svc-related .related-sub{color:rgba(255,255,255,.65);font-size:14px;margin-bottom:24px;font-family:var(--mono);letter-spacing:.12em;text-transform:uppercase}
.svc-related-grid{display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:14px;max-width:920px;margin:0 auto}
.svc-related-grid a{background:rgba(255,255,255,.05);border:1px solid rgba(255,180,0,.25);border-radius:10px;padding:14px 16px;color:var(--accent-bright);font-weight:600;font-size:14px;transition:background .15s, border-color .15s, transform .15s}
.svc-related-grid a:hover{background:rgba(255,180,0,.12);border-color:var(--accent);transform:translateY(-2px)}
.svc-content-section .interlinks{margin-top:24px;padding-top:20px;border-top:1px solid rgba(20,17,12,.12);font-family:var(--mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-3)}
.svc-content-section.dark .interlinks{border-top-color:rgba(255,255,255,.12);color:rgba(255,255,255,.55)}
.svc-content-section .interlinks a{color:var(--accent-deep);border-bottom:1px solid rgba(194,70,23,.30);margin-right:14px;font-weight:600}
.svc-content-section.dark .interlinks a{color:var(--accent-bright);border-bottom-color:rgba(255,180,0,.40)}
@media (max-width:760px){.svc-content-section{padding:48px 0}.svc-page-hero{padding:48px 0 56px !important}.svc-page-h1{font-size:clamp(32px, 9vw, 48px) !important}}
</style>`;

// ---- Build a single page -------------------------------------------------
function buildPage(service, neighborhood, cell) {
  const comboSlug = `${service.slug}-${neighborhood.slug}`;
  const pageUrl = `https://roadsideassistancequeens.com/${comboSlug}/`;

  // Variant selection (deterministic by combo hash)
  const processVariant = pick(comboSlug, pools.processVariants[service.slug], 'process');
  const pricingVariant = pick(comboSlug, pools.pricingVariants[service.slug], 'pricing');

  // Pick 5 Local Proof items deterministically (one per index, rotated by combo hash)
  const lpStartIdx = hashSlug(comboSlug + 'lp') % pools.localProofItems.length;
  const lpKeys = ['staged-locally', 'direct-line', 'van-fit', 'sub-areas', 'honest-scope', 'no-highway'];
  const lpItems = lpKeys.map((key, i) => {
    const item = pools.localProofItems.find(x => x.key === key);
    const variantIdx = hashSlug(comboSlug + key) % item.variants.length;
    return { key, title: item.title, variant: item.variants[variantIdx] };
  });

  // Pick generic FAQs to fill remaining FAQ slots after cell-unique
  const genericFaqKeys = ['cost', 'response', 'sub-areas', 'highway', 'aaa'];
  const genericFaqsForPage = genericFaqKeys.map(key => {
    const faq = pools.genericFaqs.find(x => x.key === key);
    const ansIdx = hashSlug(comboSlug + key) % faq.answers.length;
    return { question: faq.question, answer: faq.answers[ansIdx] };
  });

  // Vars for template substitution
  const subAreasJoined = neighborhood.subAreas.join(', ');
  const corridorsShort = neighborhood.corridors.slice(0, 3).join(', ');
  const transitShort = neighborhood.transit.split(';')[0];
  const restrictedJoined = neighborhood.restrictedNearby.slice(0, 3).join(', ');
  const vars = {
    service: service.name,
    serviceLower: service.name.toLowerCase(),
    neighborhood: neighborhood.name,
    neighborhoodSlug: neighborhood.slug,
    responseMin: neighborhood.responseMin,
    subAreasJoined,
    firstSubArea: neighborhood.subAreas[0],
    secondSubArea: neighborhood.subAreas[1] || neighborhood.subAreas[0],
    corridorsShort,
    transitShort,
    restrictedJoined,
    firstRestricted: neighborhood.restrictedNearby[0] || 'BQE',
    vanFitNote: neighborhood.vanFitNote,
    whatItDoesNotInclude: service.whatItDoesNotInclude,
  };

  // 5 cell-unique FAQs + 5 generic FAQs (template-filled)
  const allFaqs = [
    ...cell.cellFaqs,
    ...genericFaqsForPage.map(f => [fill(f.question, vars), fill(f.answer, vars)]),
  ];

  // ---- Interlink anchors (per-section contextual links) -----------------
  const sisterSlugs = sisterServices[service.slug] || [];
  const adjSlugs = adjacency[neighborhood.slug] || [];
  const sisterLink = (slug) => [`/${slug}-${neighborhood.slug}/`, `${serviceNameBySlug[slug]} ${neighborhood.name}`];
  const adjLink = (nslug) => [`/${service.slug}-${nslug}/`, `${service.name} ${neighborhoodNameBySlug[nslug]}`];
  const parentLink = [`/${service.slug}/`, `All ${service.name} Service in Queens`];
  const homeLink = ['/', 'Roadside Assistance Queens Home'];
  const homeLocationsLink = ['/#locations', 'All 20 Queens Neighborhoods'];
  const homePricingLink = ['/#pricing', 'Queens-wide $125 Flat Pricing'];

  const ilWhatIs = interlinks('Related', [
    homeLink,
    parentLink,
    sisterLink(sisterSlugs[0]),
    sisterLink(sisterSlugs[1]),
  ]);
  const ilWhenToCall = interlinks('When the call shifts service', [
    sisterLink(sisterSlugs[0]),
    sisterLink(sisterSlugs[1]),
    parentLink,
  ]);
  const ilCoverage = interlinks(`Same service, nearby neighborhoods`, [
    adjSlugs[0] && adjLink(adjSlugs[0]),
    adjSlugs[1] && adjLink(adjSlugs[1]),
    adjSlugs[2] && adjLink(adjSlugs[2]),
    parentLink,
  ]);
  const ilWhyDemand = interlinks('More context', [
    homeLink,
    parentLink,
    sisterLink(sisterSlugs[0]),
  ]);
  const ilScenarios = interlinks(`Other ${neighborhood.name} services`, [
    sisterLink(sisterSlugs[0]),
    sisterLink(sisterSlugs[1]),
    sisterLink(sisterSlugs[2]),
    sisterLink(sisterSlugs[3]),
  ]);
  const ilProcess = interlinks('See also', [
    parentLink,
    [`#faq-section`, `${neighborhood.name} ${service.name} FAQ`],
    adjSlugs[0] && adjLink(adjSlugs[0]),
  ]);
  const ilLocalProof = interlinks('Trust signals across our footprint', [
    homeLink,
    parentLink,
    sisterLink(sisterSlugs[0]),
    adjSlugs[0] && adjLink(adjSlugs[0]),
  ]);
  const ilCost = interlinks(`Same flat $125 across ${neighborhood.name}`, [
    sisterLink(sisterSlugs[0]),
    sisterLink(sisterSlugs[1]),
    sisterLink(sisterSlugs[2]),
    sisterLink(sisterSlugs[3]),
    homePricingLink,
  ]);
  const ilFaq = interlinks('Keep exploring', [
    parentLink,
    adjSlugs[0] && adjLink(adjSlugs[0]),
    adjSlugs[1] && adjLink(adjSlugs[1]),
    adjSlugs[2] && adjLink(adjSlugs[2]),
    homeLocationsLink,
  ]);

  // ---- Schema (comprehensive @graph) ------------------------------------
  const openingHours = [
    {"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"00:00","closes":"23:59"}
  ];
  const sameAs = []; // populate when social profiles exist

  const schemaJson = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://roadsideassistancequeens.com/#organization",
        "name": "Roadside Assistance Queens",
        "alternateName": "Roadside Assistance Queens NY",
        "url": "https://roadsideassistancequeens.com/",
        "logo": {
          "@type":"ImageObject",
          "@id":"https://roadsideassistancequeens.com/#logo",
          "url":"https://roadsideassistancequeens.com/img/hero-tow.jpg",
          "contentUrl":"https://roadsideassistancequeens.com/img/hero-tow.jpg",
          "caption":"Roadside Assistance Queens"
        },
        "image":{"@id":"https://roadsideassistancequeens.com/#logo"},
        "telephone":"+17185501460",
        "email":"dispatch@roadsideassistancequeens.com",
        "areaServed":{"@type":"AdministrativeArea","name":"Queens, NY"},
        "contactPoint":{
          "@type":"ContactPoint",
          "telephone":"+17185501460",
          "contactType":"emergency",
          "areaServed":"US-NY",
          "availableLanguage":["en"]
        },
        "sameAs": sameAs
      },
      {
        "@type": "WebSite",
        "@id": "https://roadsideassistancequeens.com/#website",
        "url": "https://roadsideassistancequeens.com/",
        "name": "Roadside Assistance Queens",
        "description": "24/7 roadside assistance in Queens NY — $125 flat per service. Jump start, lockout, tire change, fuel delivery, battery replacement.",
        "publisher": {"@id":"https://roadsideassistancequeens.com/#organization"},
        "inLanguage": "en-US",
        "potentialAction": {
          "@type":"SearchAction",
          "target":{"@type":"EntryPoint","urlTemplate":"https://roadsideassistancequeens.com/?s={search_term_string}"},
          "query-input":"required name=search_term_string"
        }
      },
      {
        "@type": ["LocalBusiness","AutomotiveBusiness","EmergencyService"],
        "@id": "https://roadsideassistancequeens.com/#business",
        "name": "Roadside Assistance Queens",
        "description": `24/7 roadside assistance in ${neighborhood.name} Queens — $125 flat per service. Local crew, ~${neighborhood.responseMin} min response inside ${neighborhood.name}.`,
        "url": "https://roadsideassistancequeens.com/",
        "telephone":"+17185501460",
        "priceRange":"$125",
        "image":{"@id":"https://roadsideassistancequeens.com/#logo"},
        "logo":{"@id":"https://roadsideassistancequeens.com/#logo"},
        "address":{
          "@type":"PostalAddress",
          "addressLocality":"Queens",
          "addressRegion":"NY",
          "postalCode":"11101",
          "addressCountry":"US"
        },
        "geo":{
          "@type":"GeoCoordinates",
          "latitude": neighborhood.lat,
          "longitude": neighborhood.lng
        },
        "openingHoursSpecification": openingHours,
        "areaServed":[
          {"@type":"AdministrativeArea","name":"Queens, NY"},
          {"@type":"Place","name":`${neighborhood.name}, Queens, NY`,"geo":{"@type":"GeoCoordinates","latitude":neighborhood.lat,"longitude":neighborhood.lng}}
        ],
        "paymentAccepted":["Cash","Credit Card","Debit Card","Apple Pay","Google Pay","Zelle","CashApp"],
        "currenciesAccepted":"USD",
        "knowsAbout":["Roadside Assistance","Jump Start","Car Lockout","Tire Change","Fuel Delivery","Battery Replacement"],
        "hasOfferCatalog":{
          "@type":"OfferCatalog",
          "name":"Roadside Assistance Services",
          "itemListElement": services.map(s => ({
            "@type":"Offer",
            "itemOffered":{"@type":"Service","name":`${s.name} in ${neighborhood.name} Queens`,"url":`https://roadsideassistancequeens.com/${s.slug}-${neighborhood.slug}/`},
            "price":"125.00",
            "priceCurrency":"USD"
          }))
        }
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        "name": `${service.name} Service in ${neighborhood.name} Queens`,
        "description": `${service.name} service near me in ${neighborhood.name} Queens — $125 flat. Local dispatch, ~${neighborhood.responseMin} min average response.`,
        "serviceType": `${service.name} service`,
        "category":"Roadside Assistance",
        "provider": {"@id":"https://roadsideassistancequeens.com/#business"},
        "areaServed": {
          "@type": "Place",
          "name": `${neighborhood.name}, Queens, NY`,
          "geo": {"@type":"GeoCoordinates","latitude":neighborhood.lat,"longitude":neighborhood.lng}
        },
        "hoursAvailable": openingHours,
        "offers": {
          "@type": "Offer",
          "price": "125.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "areaServed": `${neighborhood.name}, Queens, NY`,
          "validFrom":"2026-01-01"
        },
      },
      {
        "@type": "Place",
        "@id": `${pageUrl}#place`,
        "name": `${neighborhood.name}, Queens, NY`,
        "geo": {"@type":"GeoCoordinates","latitude":neighborhood.lat,"longitude":neighborhood.lng},
        "containedInPlace":{"@type":"AdministrativeArea","name":"Queens, NY"}
      },
      {
        "@type": "HowTo",
        "@id": `${pageUrl}#howto`,
        "name": `How a ${service.name} Call in ${neighborhood.name} Queens Works`,
        "description": `From your call to driving away — the standard sequence on a ${neighborhood.name} ${service.name.toLowerCase()} call.`,
        "totalTime":"PT45M",
        "estimatedCost":{"@type":"MonetaryAmount","currency":"USD","value":"125"},
        "step": processVariant.map(([title, body], i) => ({
          "@type":"HowToStep",
          "position": i+1,
          "name": title.replace(/^\d+\.\s*/, ''),
          "text": body
        }))
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        "url": pageUrl,
        "name": `${service.name} Service Near Me in ${neighborhood.name} Queens | $125 Flat 24/7`,
        "description": `${service.name} service near me in ${neighborhood.name} Queens — $125 flat. ~${neighborhood.responseMin} min response, 24/7 dispatch.`,
        "isPartOf": { "@id": "https://roadsideassistancequeens.com/#website" },
        "about":{"@id":`${pageUrl}#service`},
        "primaryImageOfPage":{"@id":"https://roadsideassistancequeens.com/#logo"},
        "datePublished": "2026-05-03",
        "dateModified": "2026-05-03",
        "inLanguage": "en-US",
        "speakable":{
          "@type":"SpeakableSpecification",
          "cssSelector":[".svc-page-h1",".svc-page-sub","#hero-h1"]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumbs`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Roadside Assistance Queens", "item": "https://roadsideassistancequeens.com/" },
          { "@type": "ListItem", "position": 2, "name": service.name, "item": `https://roadsideassistancequeens.com/${service.slug}/` },
          { "@type": "ListItem", "position": 3, "name": `${service.name} ${neighborhood.name}`, "item": pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        "mainEntity": allFaqs.map(([q, a]) => ({
          "@type": "Question",
          "name": q,
          "acceptedAnswer": { "@type": "Answer", "text": a },
        })),
      },
    ],
  }, null, 2);

  const titleTag = `${service.name} Service Near Me in ${neighborhood.name} Queens | $125 Flat 24/7`;
  const metaDesc = `${service.name} service near me in ${neighborhood.name} Queens — $125 flat. ~${neighborhood.responseMin} min response, 24/7 dispatch, local Queens crew. Text us.`;

  // ---- Head -------------------------------------------------------------
  const head = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#F59E0B">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="shortcut icon" href="/favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="format-detection" content="telephone=yes">
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
<title>${titleTag}</title>
<meta name="description" content="${metaDesc}">
<meta name="geo.region" content="US-NY">
<meta name="geo.placename" content="${neighborhood.name}, Queens, New York">
<link rel="canonical" href="${pageUrl}">
<meta property="og:type" content="website">
<meta property="og:title" content="${titleTag}">
<meta property="og:description" content="${metaDesc}">
<meta property="og:url" content="${pageUrl}">
<meta property="og:site_name" content="Roadside Assistance Queens">
<meta property="og:image" content="https://roadsideassistancequeens.com/img/hero-tow.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${titleTag}">
<meta name="twitter:description" content="${metaDesc}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap">
<script type="application/ld+json">
${schemaJson}
</script>
`;

  // ---- Other services in this neighborhood (cross-link footer grid) ----
  const otherServicesGrid = services
    .filter(s => s.slug !== service.slug)
    .map(s => `<a href="/${s.slug}-${neighborhood.slug}/">${s.name} ${neighborhood.name} →</a>`)
    .join('\n      ');

  // ---- Pre-build the section bodies for keyword variation -------------
  const serviceLower = service.name.toLowerCase();
  const badges = {
    near: `${service.name} Near Me ${neighborhood.name}`,
    symptom: pools.localProofItems[0] && service.symptomKw[0] ? `${service.symptomKw[0].replace(/\b\w/g, c => c.toUpperCase())} ${neighborhood.name}` : `${service.name} ${neighborhood.name}`,
    mobile: `Mobile ${service.name} ${neighborhood.name}`,
    twentyfour: `24 Hour ${service.name} ${neighborhood.name}`,
    emergency: `Emergency ${service.name} ${neighborhood.name}`,
    car: service.slug === 'jumpstart' ? `Car Jump Start ${neighborhood.name}` : `${service.name} Service ${neighborhood.name}`,
    local: `Local ${neighborhood.name} ${service.name}`,
    cost: `${service.name} Cost ${neighborhood.name}`,
    faq: `${service.name} FAQ ${neighborhood.name}`,
  };

  // ---- Body -------------------------------------------------------------
  const body = `</head>
<body>

${TOPBAR_BLOCK}

${HEADER_BLOCK}

<main id="main">

<section class="svc-page-hero" aria-labelledby="hero-h1">
  <div class="container">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a>
      <span>›</span>
      <a href="/${service.slug}/">${service.name}</a>
      <span>›</span>
      <span>${neighborhood.name}</span>
    </nav>
    <h1 class="svc-page-h1" id="hero-h1">${service.name} Service <span class="accent">${neighborhood.name} Queens</span></h1>
    <p class="svc-page-sub">${cell.heroSubline}</p>
    <div class="svc-page-trust">
      <span class="cred-plate cred-plate-price"><strong>$125</strong> Flat Per Service</span>
      <span class="cred-plate"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Open 24/7/365</span>
      <span class="cred-plate"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>Staged in ${neighborhood.name}</span>
      <span class="cred-plate"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2L3 14h7v8l10-12h-7z"/></svg>~${neighborhood.responseMin} Min Avg in ${neighborhood.name}</span>
    </div>
    <div style="margin-top:28px"><a href="sms:+17185501460" class="btn btn-primary"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Text Us</a></div>
  </div>
</section>

<section class="svc-content-section">
  <div class="container">
    <span class="h2-badge">${badges.near}</span>
    <h2>${service.name} Near Me in ${neighborhood.name} Queens — What It Means</h2>
    <p>${cell.whatIs.p1}</p>
    <p>${cell.whatIs.p2}</p>
${ilWhatIs}
  </div>
</section>

<section class="svc-content-section dark">
  <div class="container">
    <span class="h2-badge">${badges.symptom}</span>
    <h2>${service.symptomKw[0] ? service.symptomKw[0].replace(/\b\w/g, c => c.toUpperCase()) : service.name} in ${neighborhood.name}? When to Call for ${service.name}</h2>
    <p>Specific situations that lead to ${neighborhood.name} ${serviceLower} calls. If your symptoms match any of these, call dispatch — these are routine calls.</p>
    <div class="svc-list">
      ${cell.whenToCall.map(([t, d]) => `<div class="svc-list-item"><h3>${t}</h3><p>${d}</p></div>`).join('\n      ')}
    </div>
${ilWhenToCall}
    <div class="svc-section-cta"><a href="sms:+17185501460" class="btn btn-primary"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Text Us</a></div>
  </div>
</section>

<section class="svc-content-section">
  <div class="container">
    <span class="h2-badge">${badges.mobile}</span>
    <h2>Mobile ${service.name} Service Coverage in ${neighborhood.name} Queens</h2>
    <p>${cell.coverage.intro}</p>
    <p>${cell.coverage.why}</p>
    <p>${cell.coverage.landmarks}</p>
${ilCoverage}
  </div>
</section>

<section class="svc-content-section dark">
  <div class="container">
    <span class="h2-badge">${badges.twentyfour}</span>
    <h2>24 Hour ${service.name} in ${neighborhood.name} — Why ${neighborhood.name} Needs Round-the-Clock Service</h2>
    <p>${cell.whyHeavyDemand}</p>
${ilWhyDemand}
  </div>
</section>

<section class="svc-content-section" id="scenarios">
  <div class="container">
    <span class="h2-badge">${badges.emergency}</span>
    <h2>Emergency ${service.name} Calls in ${neighborhood.name} Queens — Real Scenarios</h2>
    <p>Real-world ${serviceLower} calls that come into the (718) 550-1460 line from ${neighborhood.name} — neighborhood-specific situations we run weekly.</p>
    <div class="svc-list">
      ${cell.scenarios.map(([t, d]) => `<div class="svc-list-item"><h3>${t}</h3><p>${d}</p></div>`).join('\n      ')}
    </div>
${ilScenarios}
  </div>
</section>

<section class="svc-content-section dark">
  <div class="container">
    <span class="h2-badge">${badges.car}</span>
    <h2>How a ${service.name} Call in ${neighborhood.name} Queens Works</h2>
    <p>From your first call to driving away — the standard sequence on a ${neighborhood.name} ${serviceLower} call.</p>
    <div class="svc-list">
      ${processVariant.map(([t, d], i) => `<div class="svc-list-item"><h3>${i+1}. ${t}</h3><p>${d}</p></div>`).join('\n      ')}
    </div>
${ilProcess}
    <div class="svc-section-cta"><a href="sms:+17185501460" class="btn btn-primary"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Text Us</a></div>
  </div>
</section>

<section class="svc-content-section">
  <div class="container">
    <span class="h2-badge">${badges.local}</span>
    <h2>Local Proof — Why ${neighborhood.name} Trusts Our ${service.name} Service</h2>
    <p>Visible signs we actually operate inside ${neighborhood.name} (not a national call center routing your call to whichever third-party tow vendor picks up):</p>
    <div class="svc-list">
      ${lpItems.map(item => `<div class="svc-list-item"><h3>${fill(item.title, vars)}</h3><p>${fill(item.variant, vars)}</p></div>`).join('\n      ')}
    </div>
${ilLocalProof}
  </div>
</section>

<section class="svc-content-section dark" id="pricing">
  <div class="container">
    <span class="h2-badge">${badges.cost}</span>
    <h2>${service.name} Cost in ${neighborhood.name} — $125 Flat, No Surprises</h2>
    <p>One number, no hourly meter, no membership tier, no late-night surcharge. ${service.name} in ${neighborhood.name} is a $125 flat call.</p>
    <div class="svc-list">
      ${pricingVariant.map(item => `<div class="svc-list-item"><p style="margin:0">✓ ${item}</p></div>`).join('\n      ')}
    </div>
${ilCost}
    <div class="svc-section-cta"><a href="sms:+17185501460" class="btn btn-primary"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Text Us</a></div>
  </div>
</section>

<section class="svc-content-section" id="faq-section">
  <div class="container">
    <span class="h2-badge">${badges.faq}</span>
    <h2>${neighborhood.name} ${service.name} Service FAQ</h2>
    <p>Common questions about ${serviceLower} service in ${neighborhood.name}. If yours is not here, text dispatch.</p>
    <div class="svc-list">
      ${allFaqs.map(([q, a]) => `<div class="svc-list-item"><h3>${q}</h3><p>${a}</p></div>`).join('\n      ')}
    </div>
${ilFaq}
  </div>
</section>

<section class="svc-related">
  <div class="container">
    <h3>Other Roadside Services in ${neighborhood.name}</h3>
    <div class="related-sub">${neighborhood.name}-specific service pages</div>
    <div class="svc-related-grid">
      ${otherServicesGrid}
    </div>
  </div>
</section>

<section class="svc-related" style="background:linear-gradient(180deg, #02080F 0%, #06101D 100%)">
  <div class="container">
    <h3>${service.name} Service Across All 20 Queens Neighborhoods</h3>
    <div class="related-sub">Same service, every Queens neighborhood we cover</div>
    <div class="svc-related-grid">
      ${neighborhoods.filter(n => n.slug !== neighborhood.slug).map(n => `<a href="/${service.slug}-${n.slug}/">${service.name} ${n.name} →</a>`).join('\n      ')}
    </div>
  </div>
</section>

</main>

${FOOTER_BLOCK}

${MOBILE_BLOCK}

${SCRIPT_BLOCK}

</body>
</html>`;

  return head + STYLE_BLOCK + PAGE_STYLES + body;
}

// ---- Run -----------------------------------------------------------------
const targetService = process.argv[2];
const servicesToBuild = targetService
  ? services.filter(s => s.slug === targetService)
  : services;

if (servicesToBuild.length === 0) {
  console.error(`No service matches "${targetService}". Available: ${services.map(s => s.slug).join(', ')}`);
  process.exit(1);
}

let totalBuilt = 0;
let totalSkipped = 0;

for (const service of servicesToBuild) {
  const cellsPath = path.join(ROOT, '_data', 'cells', `${service.slug}.js`);
  if (!fs.existsSync(cellsPath)) {
    console.log(`  [skip] ${service.slug} — no cells file at ${cellsPath}`);
    totalSkipped++;
    continue;
  }
  const cells = require(cellsPath);
  console.log(`\n=== ${service.name} (${service.slug}) ===`);

  for (const neighborhood of neighborhoods) {
    const cell = cells[neighborhood.slug];
    if (!cell) {
      console.log(`  [skip] ${service.slug}-${neighborhood.slug} — no cell content`);
      totalSkipped++;
      continue;
    }
    const html = buildPage(service, neighborhood, cell);
    const outDir = path.join(ROOT, `${service.slug}-${neighborhood.slug}`);
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');

    // Validate
    const ldM = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    let valid = false;
    try { JSON.parse(ldM[1]); valid = true; } catch (e) {}
    const wc = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(/\s+/).length;
    console.log(`  ✓ /${service.slug}-${neighborhood.slug}/  ${(html.length/1024).toFixed(1)}KB  ${wc} words  schema:${valid ? 'OK' : 'BROKEN'}`);
    totalBuilt++;
  }
}

console.log(`\n=== Done. Built ${totalBuilt} pages, skipped ${totalSkipped}. ===`);
