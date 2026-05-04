/**
 * Build a single proof combo page: /jumpstart-astoria/
 * Once Endri approves the depth/style, scale to 5 services x 20 neighborhoods.
 */
const fs = require('fs');
const path = require('path');
const ROOT = __dirname;

const homepage = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const STYLE_BLOCK = (homepage.match(/(<style>[\s\S]*?<\/style>)/) || [])[1] || '';
const FOOTER_BLOCK = (homepage.match(/(<footer[\s\S]*?<\/footer>)/) || [])[1] || '';
const TOPBAR_BLOCK = (homepage.match(/(<!-- TOPBAR -->[\s\S]*?<\/div>\s*<\/div>)/) || [])[1] || '';
const HEADER_BLOCK = (homepage.match(/(<!-- HEADER -->[\s\S]*?<\/header>)/) || [])[1] || '';
const MOBILE_BLOCK = ((homepage.match(/(<!-- MOBILE STICKY[^>]*-->[\s\S]*?<\/div>\s*\n\s*<script)/) || [])[1] || '').replace(/\s*<script$/, '');
const SCRIPT_BLOCK = (homepage.match(/(<script>\s*\ndocument\.getElementById[\s\S]*?<\/script>)/) || [])[1] || '';

// Per-combo unique data
const combo = {
  serviceSlug: 'jumpstart',
  serviceName: 'Jumpstart',
  neighborhoodSlug: 'astoria',
  neighborhoodName: 'Astoria',
  pageSlug: 'jumpstart-astoria',
  responseTime: '~20 min',
  localPhone: '(718) 550-1460',

  h1: 'Jumpstart Service Astoria Queens',
  titleTag: 'Jumpstart Service Near Me in Astoria Queens | $125 Flat 24/7',
  metaDesc: 'Jumpstart service near me in Astoria Queens — $125 flat. Trucks staged inside Astoria for ~20 min response. AGM-safe jump packs, 24/7 dispatch. Text us.',

  heroSubline: `<strong>$125 flat per service</strong>. Astoria is our highest-volume jumpstart neighborhood — dense street parking, weekday commuters who park Friday and don't touch the car until Monday, and a brutal cold-snap pattern off the East River. Trucks staged inside Astoria mean ~20 minute response — faster than the borough average, faster than any national membership routing.`,

  whatIs: {
    p1: `Jumpstart service in Astoria means a roadside tech arrives at your stuck vehicle, hooks a portable jump pack or full booster cables to your battery terminals, and gets the engine running. The work itself takes around 15 minutes on site for a typical 12V passenger car. Astoria's parking density (mostly street parking on narrow side streets, plus a handful of apartment garages near Halletts Point and the Ditmars Boulevard line) means our service vehicles are sized to fit — we dispatch a smaller service van to tight blocks instead of the full flatbed.`,
    p2: `Astoria sees more battery-related roadside calls per square mile than any other Queens neighborhood we cover, and the reason is structural: the N/W subway runs straight through Astoria with stops at Astoria Boulevard, 30th Avenue, Broadway, 36th Avenue, 39th Avenue. Tens of thousands of Astoria residents commute Manhattan via the subway five days a week and only touch their cars on weekends. A car that sits Monday through Friday is a car with a slowly-discharging battery, and the next time you go to start it — typically Friday night for a dinner on 30th Avenue or Saturday morning for a Costco run — the battery is dead.`,
  },

  whenToCall: [
    ['Car parked all week, dead Friday night', 'The subway-commuter pattern. You drove home Sunday, parked on a side street off 30th Ave, took the train all week, came back to the car for a Friday dinner — engine cranks slow or not at all. Standard jumpstart, ~15 min on site.'],
    ['Cold morning sub-15°F off Astoria Park', 'Astoria Park borders the East River and the wind off the Hell Gate Bridge drops effective temps significantly below the official Queens reading. A battery that was marginal yesterday is dead this morning. We get hit with batches of these calls on the first true cold-snap morning of every winter.'],
    ['Door-ajar light burned overnight on a side street', 'Most common cause of dead batteries in Astoria after subway-commute drain. Dome light or door-ajar signal, parked overnight, dead by 7 AM. Standard jumpstart fixes it.'],
    ['Halletts Point or Astoria Cove garage — interior light or accessory drain', 'Halletts Point and Astoria Cove luxury rentals have garage parking with limited ventilation and tight bays. Cars sit longer and electrical drains compound. We dispatch the small service van that fits the height limits.'],
    ['Astoria Boulevard service road — engine sputter, pulled over', 'Battery is failing under load while driving. Coasts to the shoulder. We jumpstart and tell you on the spot whether the alternator is charging the new charge — if not, you need a tow to a shop, not just a jumpstart.'],
    ['Older Greek or Italian family car that sits between weekend trips', 'Astoria has a heavy Greek and Italian heritage; many garages and side-yard spots have older sedans used only for weekend church or grocery runs. Battery age + low usage = dead battery every few months. Jumpstart works once or twice; eventually you need a battery replacement.'],
  ],

  coverage: {
    intro: `Jumpstart service across Astoria covers every sub-neighborhood and parking situation: Old Astoria (the historic core south of 30th Ave), Steinway (east of 31st Street with the Steinway piano factory area), Ditmars-Steinway (north of Ditmars Blvd toward Astoria Park), Halletts Point and Astoria Cove (the East River waterfront with newer high-rise buildings), and Astoria Heights (the eastern portion near the Grand Central Parkway feeder).`,
    why: `Why Astoria response time is faster than the borough average: our service vehicles are physically staged inside Astoria, not routed from a national dispatch center 40 miles away. When you call ${'(718) 550-1460'} from a side street off 30th Avenue, a truck already on Steinway Street responds. Average arrival inside Astoria is ~20 minutes (faster than the ~25 minute Queens-wide average). National roadside membership programs (AAA, Geico, motor club programs) take your call in a national center and route to whichever third-party tow company picks up — often not us, often 60+ minutes.`,
    landmarks: `Common Astoria call origins by area: residential side streets between 21st Street and Steinway (highest call volume, where street parking is densest); the 30th Avenue commercial strip (late-night dinner crowd discovers the dead battery); Astoria Park perimeter (residents parking near the park, cars sitting overnight); Halletts Point waterfront garages (auto-lock + fob issues mixed with battery drains); Astoria Boulevard service road (highway-adjacent breakdowns). We do not service the BQE, Grand Central Parkway, or RFK Bridge approach lanes — those are NYPD rotation only. Get off the highway first; we'll meet you on the service road.`,
  },

  whyHeavyDemand: `Three structural reasons Astoria has higher-than-average jumpstart demand: (1) Subway commuter pattern — N/W line means 5+ days of car-not-driven for most working residents, which is enough to discharge a marginal battery. (2) Cold-air pocket off the East River — Astoria Park's exposure to the river drops effective overnight temperatures below the official Queens reading, especially on the blocks within four to five streets of the park. Cold reduces battery efficiency 30-60%. (3) Older housing stock with limited driveways — most residents park on the street, which means door-ajar lights, dome-light drains, and overnight cold are unmediated by a closed garage.`,

  scenarios: [
    ['30th Avenue late-night dinner', 'Friday or Saturday night, dinner on 30th Ave, walked back to the car at 11:30, dead battery. Our truck is ~20 min away on average. Total time from your call to driving home: under 35 minutes.'],
    ['Astoria Park morning, after a weekend away', 'Returned from a weekend trip, parked the car at the park edge Sunday night, came back Monday morning for the commute — dead battery. Cold morning + the river-air effect is the typical culprit.'],
    ['Halletts Point luxury garage', 'Newer waterfront high-rises (Halletts Point, Astoria Cove). Auto-relock with the engine running, fob inside the car, doors locked. Different call (lockout, technically) but if the battery also dies during the wait, we handle both.'],
    ['Steinway Street weekday shopping', 'Long evening errands on Steinway, came back to the car, slow crank. Either lights left on or the battery is at end of life. We diagnose on the spot.'],
    ['Side street between 21st and 36th — apartment commuter', 'The classic Astoria jumpstart. Subway commuter, car parked Sunday through Friday, dead by Friday night. Our service vehicle is sized for narrow side streets and double-parked Astoria conditions.'],
    ['Ditmars Boulevard residential — older car between weekend trips', 'Older Greek or Italian family sedan used only for weekend trips to Astoria Greek Orthodox Cathedral or Costco. Battery age plus low utilization equals dead battery every few months. We jumpstart, recommend a battery replacement before next winter.'],
  ],

  process: [
    ['Call (718) 550-1460 — describe the symptoms.', 'Tell us your Astoria cross streets (e.g., "31st Ave near Steinway"), the year/make/model, and what is happening (no crank, slow crank, dim dash). We give you an arrival window — typically 15-25 minutes inside Astoria.'],
    ['Truck arrives, tech identifies the vehicle.', 'License plate, make/model match. Quick look at the dash for warning lights and any visible battery condition issues.'],
    ['Battery tested with a multimeter.', 'Voltage check. Below 11.5V means dead. Above 12.4V means the battery is fine and the issue is elsewhere — we diagnose before assuming the answer.'],
    ['Cables or jump pack connected — engine started.', 'Standard procedure. We use AGM-safe portable jump packs by default; full booster cables for older vehicles where the pack does not engage.'],
    ['Brief idle period to verify alternator charging.', '5-10 minutes of idle on site so we can confirm the alternator is holding the charge once cables are off. If it is not charging, you need a tow to a shop, not a jumpstart.'],
    ['Pay $125 flat — receipt for insurance reimbursement.', 'Cash, all major credit/debit cards, Apple Pay, Google Pay, Zelle, CashApp. Itemized receipt if your insurance covers out-of-network roadside.'],
  ],

  pricingItems: [
    'Local Astoria dispatch (no national routing, no membership tier)',
    'One jumpstart performed completely (we do not leave until the engine is running)',
    'Multimeter battery + alternator diagnosis included',
    'No surcharges for nights, weekends, or holidays',
    'Itemized invoice for insurance reimbursement',
    'Payment on completion — no money until your car is running',
  ],

  faqs: [
    ['How much does a jumpstart cost in Astoria?', '$125 flat. Same price across all Astoria sub-neighborhoods — Old Astoria, Steinway, Ditmars, Halletts Point, Astoria Heights. No surcharge for late night, weekends, or holidays.'],
    ['How fast can you get to my Astoria address?', 'Approximately 20 minutes inside Astoria, on average. Old Astoria and the 30th Ave corridor are typically faster (15-18 min). Halletts Point and Astoria Cove can be slightly longer (22-25 min) because of the waterfront access road.'],
    ['Is jumpstart service available on Astoria side streets?', 'Yes — the bulk of our Astoria calls are on side streets between 21st Street and Steinway. Our smaller service van is sized for narrow Astoria blocks and double-parked conditions.'],
    ['Do you service Halletts Point and Astoria Cove garages?', 'Yes. We dispatch the smaller service van that fits standard residential garage clearance (typically 6\'9" to 7\'0"). Confirm height limits with us when you call so we send the right vehicle.'],
    ['Why does my car battery keep dying in Astoria?', 'Most common reasons: (1) you commute by N/W subway and the car sits unused 5+ days a week, slowly discharging the battery; (2) you live within a few blocks of Astoria Park and the East River wind drops your overnight temperature below the rest of Queens; (3) you park on a side street and a dome light or door-ajar signal drained the battery overnight. After two jumpstarts in a month, replace the battery.'],
    ['Can you jumpstart on the BQE or Grand Central Parkway?', 'No. NYC highways, parkways, bridges, and tunnels are restricted to NYPD-authorized rotation contractors. Astoria-adjacent restricted roads include the BQE, Astoria Boulevard highway sections, the Grand Central Parkway, and the RFK Bridge approach. Get off to a service road or surface street first; we will meet you there.'],
    ['Will a jumpstart fix my battery permanently?', 'It depends. If the battery died from a one-time drain (lights left on, cold snap, weekend without driving), drive 20+ minutes after the jumpstart to fully recharge — you are fine. If the battery is end-of-life (3-5 years old, repeatedly dies), the jumpstart is temporary and you need a battery replacement.'],
    ['What payment methods do you accept on Astoria calls?', 'Cash, all major credit and debit cards, Apple Pay, Google Pay, Zelle, CashApp. Paid on completion — no money until your car is running.'],
    ['Is jumpstart available 24/7 in Astoria?', 'Yes. (718) 550-1460 is staffed 24 hours, 7 days a week, every holiday. Late-night calls in Astoria are very common (the 30th Ave dinner crowd discovers the dead battery at 11:30 PM regularly) — we expect them.'],
    ['Do you also do battery replacement in Astoria?', 'Yes. If the jumpstart works once and the battery dies again, you need a replacement, not another jumpstart. We carry common Group sizes and AGM variants on the truck. See our Astoria battery replacement page.'],
  ],
};

const pageUrl = `https://roadsideassistancequeens.com/${combo.pageSlug}/`;

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
<meta name="msapplication-TileColor" content="#F59E0B">
<meta name="format-detection" content="telephone=yes">
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">

<title>${combo.titleTag}</title>
<meta name="description" content="${combo.metaDesc}">
<meta name="author" content="Roadside Assistance Queens">
<meta name="geo.region" content="US-NY">
<meta name="geo.placename" content="${combo.neighborhoodName}, Queens, New York">
<meta name="geo.position" content="40.7644;-73.9235">
<meta name="ICBM" content="40.7644, -73.9235">

<link rel="canonical" href="${pageUrl}">

<meta property="og:type" content="website">
<meta property="og:title" content="${combo.titleTag}">
<meta property="og:description" content="${combo.metaDesc}">
<meta property="og:url" content="${pageUrl}">
<meta property="og:site_name" content="Roadside Assistance Queens">
<meta property="og:locale" content="en_US">
<meta property="og:image" content="https://roadsideassistancequeens.com/img/hero-tow.jpg">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${combo.titleTag}">
<meta name="twitter:description" content="${combo.metaDesc}">
<meta name="twitter:image" content="https://roadsideassistancequeens.com/img/hero-tow.jpg">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap">

<script type="application/ld+json">
${JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      "name": `${combo.serviceName} Service in ${combo.neighborhoodName} Queens`,
      "alternateName": combo.h1,
      "description": combo.metaDesc,
      "serviceType": `${combo.serviceName} service`,
      "provider": {
        "@type": ["LocalBusiness", "AutomotiveBusiness"],
        "@id": "https://roadsideassistancequeens.com/#business",
        "name": "Roadside Assistance Queens",
        "url": "https://roadsideassistancequeens.com/",
        "telephone": "+17185501460"
      },
      "areaServed": {
        "@type": "Place",
        "name": `${combo.neighborhoodName}, Queens, NY`,
        "geo": {"@type":"GeoCoordinates","latitude":40.7644,"longitude":-73.9235}
      },
      "offers": {
        "@type": "Offer",
        "price": "125.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "areaServed": `${combo.neighborhoodName}, Queens, NY`,
        "businessFunction": "https://schema.org/Sell"
      }
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      "url": pageUrl,
      "name": combo.titleTag,
      "isPartOf": {"@id": "https://roadsideassistancequeens.com/#website"},
      "primaryImageOfPage": "https://roadsideassistancequeens.com/img/hero-tow.jpg",
      "datePublished": "2026-05-03",
      "dateModified": "2026-05-03",
      "inLanguage": "en-US",
      "description": combo.metaDesc
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumbs`,
      "itemListElement": [
        {"@type":"ListItem","position":1,"name":"Roadside Assistance Queens","item":"https://roadsideassistancequeens.com/"},
        {"@type":"ListItem","position":2,"name":combo.serviceName,"item":`https://roadsideassistancequeens.com/${combo.serviceSlug}/`},
        {"@type":"ListItem","position":3,"name":`${combo.serviceName} ${combo.neighborhoodName}`,"item":pageUrl}
      ]
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      "mainEntity": combo.faqs.map(([q,a]) => ({
        "@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}
      }))
    }
  ]
}, null, 2)}
</script>
`;

const pageStyles = `
<style>
.svc-page-hero{
  background:#06101D !important;
  padding:80px 0 88px !important;
  text-align:center !important;
  position:relative;overflow:hidden;
  border-bottom:6px solid transparent;
  border-image:repeating-linear-gradient(90deg, var(--accent) 0 18px, #08111E 18px 36px) 1;
  color:#fff;
}
.svc-page-hero::before{
  content:"";position:absolute;inset:0;pointer-events:none;z-index:0;
  background:
    linear-gradient(180deg, rgba(6,16,29,.78) 0%, rgba(6,16,29,.92) 100%),
    url("/img/hero-tow.webp") 30% 50%/cover no-repeat;
  filter:saturate(.85) contrast(1.05);
}
.svc-page-hero::after{
  content:"";position:absolute;inset:0;pointer-events:none;z-index:0;
  background:
    radial-gradient(900px 540px at 50% 40%, rgba(255,180,0,.20) 0%, transparent 60%),
    radial-gradient(1400px 800px at 50% 50%, transparent 0%, rgba(6,16,29,.40) 70%, rgba(6,16,29,.85) 100%);
}
.svc-page-hero .container{position:relative;z-index:1;max-width:1000px}
.breadcrumb{
  display:flex;justify-content:center;gap:8px;flex-wrap:wrap;
  font-family:var(--mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;
  color:rgba(255,255,255,.55);margin:0 0 28px;
}
.breadcrumb a{color:var(--accent-bright);border-bottom:1px solid rgba(255,180,0,.40);padding-bottom:1px}
.breadcrumb span{color:rgba(255,255,255,.55)}
.svc-page-h1{
  color:#fff;font-size:clamp(36px, 5.6vw, 72px);
  font-weight:800;letter-spacing:-.038em;line-height:1.04;
  margin:0 auto .25em;max-width:18ch;
  text-shadow:0 2px 24px rgba(0,0,0,.55), 0 1px 0 rgba(0,0,0,.7);
}
.svc-page-h1 .accent{color:var(--accent-bright);background:linear-gradient(180deg, #FFE188 0%, var(--accent-bright) 50%, var(--accent) 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;display:inline-block;padding:0 .04em}
.svc-page-sub{
  color:rgba(255,255,255,.85);
  font-size:clamp(16px, 1.6vw, 19px);font-weight:500;
  max-width:60ch;margin:24px auto 28px;
  line-height:1.55;text-shadow:0 1px 12px rgba(0,0,0,.55);
}
.svc-page-sub strong{color:var(--accent-bright);font-weight:800}
.svc-content-section{
  padding:80px 0;
  background:linear-gradient(180deg, #FFFEFB 0%, #F2EDE0 100%);
  position:relative;
}
.svc-content-section.dark{
  background:linear-gradient(180deg, #0A1320 0%, #06101D 100%) !important;
  color:#fff !important;
}
.svc-content-section.dark h2{color:#fff !important;text-shadow:0 1px 0 rgba(0,0,0,.6)}
.svc-content-section.dark p{color:rgba(255,255,255,.85) !important}
.svc-content-section.dark strong{color:#fff !important}
.svc-content-section h2{
  font-size:clamp(28px, 3.6vw, 40px);
  font-weight:800;letter-spacing:-.028em;
  margin:0 0 24px;color:var(--ink);
  max-width:26ch;
}
.h2-badge{
  display:inline-block;
  font-family:var(--mono);font-size:11px;
  letter-spacing:.18em;text-transform:uppercase;
  font-weight:700;
  color:var(--accent-deep);
  background:linear-gradient(180deg, #FFF1D1 0%, #FFE4A8 100%);
  border:1.5px solid var(--accent);
  border-radius:999px;
  padding:7px 14px;margin:0 0 18px;
  box-shadow:0 2px 0 rgba(194,70,23,.10), 0 6px 14px -6px rgba(245,158,11,.35);
}
.svc-content-section.dark .h2-badge{
  color:#FFE188;
  background:linear-gradient(180deg, rgba(255,180,0,.18) 0%, rgba(255,180,0,.08) 100%);
  border-color:rgba(255,180,0,.55);
  box-shadow:0 2px 0 rgba(0,0,0,.30), 0 6px 14px -6px rgba(255,180,0,.20);
}
.svc-content-section .container{max-width:980px}
.svc-content-section p{
  font-size:17px;line-height:1.7;color:var(--ink-2);
  margin:0 0 1em;max-width:64ch;
}
.svc-list{
  display:grid;gap:14px;margin:24px 0;
}
.svc-list-item{
  background:#FFFFFF;
  border:1px solid rgba(20,17,12,.12);
  border-radius:10px;padding:20px 22px;
  box-shadow:0 1px 0 rgba(255,255,255,.95) inset, 0 8px 18px -6px rgba(14,27,46,.10);
}
.dark .svc-list-item{
  background:linear-gradient(180deg, #14233A 0%, #0E1B2E 100%);
  border-color:rgba(255,180,0,.20);
}
.svc-list-item h3{
  margin:0 0 8px;font-size:17px;font-weight:700;
  color:var(--ink);letter-spacing:-.012em;
}
.dark .svc-list-item h3{color:#fff}
.svc-list-item p{margin:0;font-size:15px;color:var(--ink-3);line-height:1.55}
.dark .svc-list-item p{color:rgba(255,255,255,.78)}
.svc-section-cta{margin-top:32px;text-align:left}
.svc-page-trust{
  display:flex;justify-content:center;gap:8px;flex-wrap:wrap;
  margin:0 auto 28px;max-width:780px;
  position:relative;z-index:1;
}
.svc-related{
  background:linear-gradient(180deg, #06101D 0%, #02080F 100%);
  padding:64px 0;text-align:center;color:#fff;
}
.svc-related h3{font-size:22px;color:#fff;margin:0 0 8px;font-weight:800}
.svc-related .related-sub{color:rgba(255,255,255,.65);font-size:14px;margin-bottom:24px;font-family:var(--mono);letter-spacing:.12em;text-transform:uppercase}
.svc-related-grid{
  display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));
  gap:14px;max-width:920px;margin:0 auto;
}
.svc-related-grid a{
  background:rgba(255,255,255,.05);
  border:1px solid rgba(255,180,0,.25);
  border-radius:10px;padding:14px 16px;
  color:var(--accent-bright);
  font-weight:600;font-size:14px;
  transition:background .15s, border-color .15s, transform .15s;
}
.svc-related-grid a:hover{
  background:rgba(255,180,0,.12);
  border-color:var(--accent);
  transform:translateY(-2px);
}
.svc-content-section .interlinks{
  margin-top:24px;padding-top:20px;
  border-top:1px solid rgba(20,17,12,.12);
  font-family:var(--mono);font-size:11px;
  letter-spacing:.14em;text-transform:uppercase;
  color:var(--ink-3);
}
.svc-content-section.dark .interlinks{border-top-color:rgba(255,255,255,.12);color:rgba(255,255,255,.55)}
.svc-content-section .interlinks a{
  color:var(--accent-deep);
  border-bottom:1px solid rgba(194,70,23,.30);
  margin-right:14px;font-weight:600;
}
.svc-content-section.dark .interlinks a{color:var(--accent-bright);border-bottom-color:rgba(255,180,0,.40)}
@media (max-width:760px){
  .svc-content-section{padding:48px 0}
  .svc-page-hero{padding:48px 0 56px !important}
  .svc-page-h1{font-size:clamp(32px, 9vw, 48px) !important}
}
</style>`;

const otherServicesInThisNeighborhood = [
  ['car-lockout', 'Car Lockout'],
  ['tire-change', 'Tire Change'],
  ['fuel-delivery', 'Fuel Delivery'],
  ['battery-replacement', 'Battery Replacement'],
];

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
      <a href="/${combo.serviceSlug}/">${combo.serviceName}</a>
      <span>›</span>
      <span>${combo.neighborhoodName}</span>
    </nav>
    <h1 class="svc-page-h1" id="hero-h1">${combo.serviceName} Service <span class="accent">${combo.neighborhoodName} Queens</span></h1>
    <p class="svc-page-sub">${combo.heroSubline}</p>
    <div class="svc-page-trust">
      <span class="cred-plate cred-plate-price"><strong>$125</strong> Flat Per Service</span>
      <span class="cred-plate"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Open 24/7/365</span>
      <span class="cred-plate"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>Staged in ${combo.neighborhoodName}</span>
      <span class="cred-plate"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2L3 14h7v8l10-12h-7z"/></svg>${combo.responseTime} Avg in ${combo.neighborhoodName}</span>
    </div>
    <div style="margin-top:28px"><a href="sms:+17185501460" class="btn btn-primary"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Text Us</a></div>
  </div>
</section>

<section class="svc-content-section">
  <div class="container">
    <span class="h2-badge">Jumpstart Near Me ${combo.neighborhoodName}</span>
    <h2>Jumpstart Near Me in ${combo.neighborhoodName} Queens — What It Means</h2>
    <p>${combo.whatIs.p1}</p>
    <p>${combo.whatIs.p2}</p>
    <div class="interlinks">
      Related: <a href="/">Roadside Assistance Queens</a>
      <a href="/${combo.serviceSlug}/">All Jumpstart Service in Queens</a>
      <a href="#scenarios">${combo.neighborhoodName} Scenarios</a>
      <a href="#faq-section">FAQ</a>
    </div>
  </div>
</section>

<section class="svc-content-section dark">
  <div class="container">
    <span class="h2-badge">Dead Battery ${combo.neighborhoodName} Queens</span>
    <h2>Dead Battery in ${combo.neighborhoodName}? When to Call for a Jumpstart</h2>
    <p>Specific dead-battery situations that lead to ${combo.neighborhoodName} jumpstart calls. If your symptoms match any of these, call dispatch — these are routine calls.</p>
    <div class="svc-list">
      ${combo.whenToCall.map(([t, d]) => `<div class="svc-list-item"><h3>${t}</h3><p>${d}</p></div>`).join('\n      ')}
    </div>
    <div class="svc-section-cta"><a href="sms:+17185501460" class="btn btn-primary"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Text Us</a></div>
  </div>
</section>

<section class="svc-content-section">
  <div class="container">
    <span class="h2-badge">Mobile Jumpstart ${combo.neighborhoodName}</span>
    <h2>Mobile Jumpstart Service Coverage in ${combo.neighborhoodName} Queens</h2>
    <p>${combo.coverage.intro}</p>
    <p>${combo.coverage.why}</p>
    <p>${combo.coverage.landmarks}</p>
  </div>
</section>

<section class="svc-content-section dark">
  <div class="container">
    <span class="h2-badge">24 Hour Jumpstart ${combo.neighborhoodName}</span>
    <h2>24 Hour Jumpstart in ${combo.neighborhoodName} — Why ${combo.neighborhoodName} Needs Round-the-Clock Service</h2>
    <p>${combo.whyHeavyDemand}</p>
  </div>
</section>

<section class="svc-content-section" id="scenarios">
  <div class="container">
    <span class="h2-badge">Emergency Jumpstart ${combo.neighborhoodName}</span>
    <h2>Emergency Jumpstart Calls in ${combo.neighborhoodName} Queens — Real Scenarios</h2>
    <p>Real-world emergency jumpstart calls that come into the (718) 550-1460 line from ${combo.neighborhoodName} — neighborhood-specific situations we run weekly.</p>
    <div class="svc-list">
      ${combo.scenarios.map(([t, d]) => `<div class="svc-list-item"><h3>${t}</h3><p>${d}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="svc-content-section dark">
  <div class="container">
    <span class="h2-badge">Car Jumpstart ${combo.neighborhoodName}</span>
    <h2>How a Car Jumpstart Call in ${combo.neighborhoodName} Queens Works</h2>
    <p>From your first call to driving away — the standard sequence on a ${combo.neighborhoodName} car jumpstart call.</p>
    <div class="svc-list">
      ${combo.process.map((p, i) => `<div class="svc-list-item"><h3>${i+1}. ${p[0]}</h3><p>${p[1]}</p></div>`).join('\n      ')}
    </div>
    <div class="svc-section-cta"><a href="sms:+17185501460" class="btn btn-primary"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Text Us</a></div>
  </div>
</section>

<section class="svc-content-section">
  <div class="container">
    <span class="h2-badge">Local ${combo.neighborhoodName} Jumpstart</span>
    <h2>Local Proof — Why ${combo.neighborhoodName} Trusts Our Jumpstart Service</h2>
    <p>Visible signs we actually operate inside ${combo.neighborhoodName} (not a national call center routing your call to whichever third-party tow vendor picks up):</p>
    <div class="svc-list">
      <div class="svc-list-item"><h3>Service vehicles physically staged in ${combo.neighborhoodName}</h3><p>Trucks parked inside ${combo.neighborhoodName} between calls — that is what gets the response time to ~20 minutes inside the neighborhood. National routing typically runs 60+ minutes.</p></div>
      <div class="svc-list-item"><h3>Direct local phone, not a 1-800 routing center</h3><p>(718) 550-1460 is a 718 New York City line. Calls are answered by dispatch that knows ${combo.neighborhoodName} street names, parking quirks, and the typical jumpstart pattern in this neighborhood.</p></div>
      <div class="svc-list-item"><h3>Service-vehicle sizing for ${combo.neighborhoodName} blocks</h3><p>${combo.neighborhoodName} side streets between 21st St and Steinway are narrow with double-parked cars. We dispatch a service van sized for these conditions — not a full flatbed that cannot maneuver.</p></div>
      <div class="svc-list-item"><h3>Coverage across all ${combo.neighborhoodName} sub-areas</h3><p>Old Astoria, Steinway, Ditmars-Steinway, Halletts Point, Astoria Cove, Astoria Heights — same flat $125, same 24/7 line, same staged-local response window.</p></div>
      <div class="svc-list-item"><h3>Full payment options ${combo.neighborhoodName} customers expect</h3><p>Cash, all major credit/debit, Apple Pay, Google Pay, Zelle, CashApp. Itemized receipt for insurance reimbursement. Pay only when the engine is running.</p></div>
      <div class="svc-list-item"><h3>Honest about what we will not do</h3><p>If your battery cannot hold a charge after a successful jumpstart, we tell you on the spot — we do not sell you a jumpstart and walk away. We shift to battery replacement or a tow to your shop, whichever is right.</p></div>
    </div>
  </div>
</section>

<section class="svc-content-section dark" id="pricing">
  <div class="container">
    <span class="h2-badge">Jumpstart Cost ${combo.neighborhoodName} — $125 Flat</span>
    <h2>Jumpstart Cost in ${combo.neighborhoodName} — $125 Flat, No Surprises</h2>
    <p>One number, no hourly meter, no membership tier, no late-night surcharge. Jumpstart in ${combo.neighborhoodName} is a $125 flat call.</p>
    <div class="svc-list">
      ${combo.pricingItems.map(item => `<div class="svc-list-item"><p style="margin:0">✓ ${item}</p></div>`).join('\n      ')}
    </div>
    <div class="svc-section-cta"><a href="sms:+17185501460" class="btn btn-primary"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Text Us</a></div>
  </div>
</section>

<section class="svc-content-section" id="faq-section">
  <div class="container">
    <span class="h2-badge">Jumpstart FAQ ${combo.neighborhoodName}</span>
    <h2>${combo.neighborhoodName} Jumpstart Service FAQ</h2>
    <p>Common questions about jumpstart service in ${combo.neighborhoodName}. If yours is not here, text dispatch.</p>
    <div class="svc-list">
      ${combo.faqs.map(([q, a]) => `<div class="svc-list-item"><h3>${q}</h3><p>${a}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="svc-related">
  <div class="container">
    <h3>Other Roadside Services in ${combo.neighborhoodName}</h3>
    <div class="related-sub">${combo.neighborhoodName}-specific service pages</div>
    <div class="svc-related-grid">
      ${otherServicesInThisNeighborhood.map(([s, name]) => `<a href="/${s}-${combo.neighborhoodSlug}/">${name} ${combo.neighborhoodName} →</a>`).join('\n      ')}
    </div>
  </div>
</section>

</main>

${FOOTER_BLOCK}

${MOBILE_BLOCK}

${SCRIPT_BLOCK}

</body>
</html>`;

const html = head + STYLE_BLOCK + pageStyles + body;

const dir = path.join(ROOT, combo.pageSlug);
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');

const ldM = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
let valid = false;
try { JSON.parse(ldM[1]); valid = true; } catch(e) { console.log('schema BROKEN:', e.message); }
const wc = html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim().split(/\s+/).length;

console.log(`Built /${combo.pageSlug}/`);
console.log(`  Size: ${(html.length/1024).toFixed(1)}KB`);
console.log(`  Words: ${wc}`);
console.log(`  Schema: ${valid ? 'OK' : 'BROKEN'}`);
console.log(`  H1: ${combo.h1}`);
console.log(`  Title: ${combo.titleTag}`);
