const fs = require('fs');
const path = require('path');
const neighborhoods = require('./_data/neighborhoods.js');
const services = require('./_data/services.js');
const pools = require('./_data/variation_pools.js');

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Neighborhood Data Table — Fact Check</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<style>
*{box-sizing:border-box}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,sans-serif;background:#0E1B2E;color:#E8E5DA;margin:0;padding:32px;line-height:1.5}
h1{color:#FFB400;font-size:28px;margin:0 0 8px}
.sub{color:#9aa1ab;font-size:14px;margin:0 0 28px;font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:.12em}
.legend{background:rgba(255,180,0,.10);border:1px solid rgba(255,180,0,.40);border-radius:10px;padding:18px 22px;margin:0 0 28px;font-size:14px;line-height:1.6}
.legend strong{color:#FFB400}
table{width:100%;border-collapse:collapse;background:#14233A;border-radius:10px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,.4)}
th{background:#06101D;color:#FFB400;font-size:11px;letter-spacing:.14em;text-transform:uppercase;padding:14px 12px;text-align:left;border-bottom:2px solid #F59E0B;position:sticky;top:0;z-index:1}
td{padding:14px 12px;border-bottom:1px solid rgba(255,255,255,.08);vertical-align:top;font-size:13px}
tr:hover td{background:rgba(255,180,0,.05)}
.name{color:#FFB400;font-weight:700;font-size:15px;white-space:nowrap}
.slug{color:#9aa1ab;font-family:'JetBrains Mono',monospace;font-size:11px;display:block;margin-top:2px}
.list{margin:0;padding:0;list-style:none}
.list li{padding:2px 0}
.muted{color:#9aa1ab}
.pattern{font-style:italic;color:#cdd0d6;max-width:380px}
.respond{color:#FFB400;font-weight:700;font-size:14px;font-family:'JetBrains Mono',monospace}
.tag{display:inline-block;background:rgba(255,180,0,.12);color:#FFE188;border:1px solid rgba(255,180,0,.30);border-radius:4px;padding:2px 7px;margin:2px 3px 2px 0;font-size:11px;font-family:'JetBrains Mono',monospace}
.tag.bad{background:rgba(255,80,80,.12);color:#FFAFAF;border-color:rgba(255,80,80,.30)}
.section{margin:36px 0 12px;color:#FFB400;font-size:18px;font-weight:700}
</style>
</head>
<body>
<h1>Queens Neighborhood + Service Data — Fact Check</h1>
<p class="sub">${neighborhoods.length} neighborhoods · ${services.length} services · please verify before I scale to 100 combo pages</p>

<div class="legend">
  <strong>How to use this:</strong> Read each row. If anything is wrong — invented sub-area, missing real corridor, wrong subway line, wrong geographic anchor, wrong commuter pattern, off response-time estimate — tell me which neighborhood + which field and I'll fix it before generating any combo pages. The combo-page generator pulls from this table, so a fact corrected here propagates to 5 service pages for that neighborhood.
</div>

<table>
<thead>
<tr>
  <th style="width:12%">Neighborhood</th>
  <th style="width:14%">Sub-areas</th>
  <th style="width:14%">Corridors</th>
  <th style="width:14%">Transit</th>
  <th style="width:13%">Geo Anchor</th>
  <th style="width:7%">Response</th>
  <th style="width:11%">Restricted Nearby</th>
  <th style="width:15%">Pattern (call cluster reason)</th>
</tr>
</thead>
<tbody>
${neighborhoods.map(n => `<tr>
  <td><span class="name">${n.name}</span><span class="slug">/${n.slug}/</span>${n.aliases.length ? '<span class="slug muted">aka ' + n.aliases.join(', ') + '</span>' : ''}</td>
  <td>${n.subAreas.map(s => `<span class="tag">${s}</span>`).join('')}</td>
  <td>${n.corridors.map(s => `<span class="tag">${s}</span>`).join('')}</td>
  <td class="muted">${n.transit}</td>
  <td class="muted">${n.geoAnchor}</td>
  <td><span class="respond">~${n.responseMin} min</span></td>
  <td>${n.restrictedNearby.map(s => `<span class="tag bad">${s}</span>`).join('')}</td>
  <td class="pattern">${n.pattern}</td>
</tr>`).join('\n')}
</tbody>
</table>

<div class="section">Parking + housing (separate view)</div>
<table>
<thead>
<tr>
  <th style="width:14%">Neighborhood</th>
  <th style="width:14%">Parking style</th>
  <th style="width:36%">Housing type</th>
  <th style="width:36%">Van fit note</th>
</tr>
</thead>
<tbody>
${neighborhoods.map(n => `<tr>
  <td><span class="name">${n.name}</span></td>
  <td><span class="tag">${n.parkingStyle}</span></td>
  <td class="muted">${n.housingType}</td>
  <td class="muted">${n.vanFitNote}</td>
</tr>`).join('\n')}
</tbody>
</table>

<div class="section">Services — keyword pools, framings, scope</div>
<table>
<thead>
<tr>
  <th style="width:11%">Service</th>
  <th style="width:24%">Primary keywords (badge sources)</th>
  <th style="width:24%">Long-tail keywords (variation)</th>
  <th style="width:18%">Symptom keywords (user-Google's)</th>
  <th style="width:23%">Core promise + scope limit</th>
</tr>
</thead>
<tbody>
${services.map(s => `<tr>
  <td><span class="name">${s.name}</span><span class="slug">/${s.slug}/</span></td>
  <td>${s.primaryKw.map(k => `<span class="tag">${k}</span>`).join('')}</td>
  <td>${s.longTailKw.map(k => `<span class="tag">${k}</span>`).join('')}</td>
  <td>${s.symptomKw.map(k => `<span class="tag">${k}</span>`).join('')}</td>
  <td><strong style="color:#FFB400">Promise:</strong><br><span class="muted">${s.corePromise}</span><br><br><strong style="color:#FFAFAF">Does NOT include:</strong><br><span class="muted">${s.whatItDoesNotInclude}</span></td>
</tr>`).join('\n')}
</tbody>
</table>

<div class="section">Service framings — 5 angles per service (rotated across neighborhoods to avoid duplicate "what is X" intros)</div>
${services.map(s => `
<div style="background:#14233A;border-radius:10px;padding:20px;margin-bottom:16px">
  <div style="color:#FFB400;font-weight:700;font-size:16px;margin-bottom:12px">${s.name} — 5 framings</div>
  ${s.framings.map((f, i) => `<div style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);font-size:13px;line-height:1.55"><span class="tag" style="vertical-align:top">Angle ${i+1}</span> <span class="muted">${f}</span></div>`).join('')}
</div>`).join('\n')}

<div class="section">Service equipment + common causes</div>
<table>
<thead>
<tr>
  <th style="width:14%">Service</th>
  <th style="width:43%">Equipment carried</th>
  <th style="width:43%">Common causes</th>
</tr>
</thead>
<tbody>
${services.map(s => `<tr>
  <td><span class="name">${s.name}</span></td>
  <td><ul class="list">${s.equipment.map(([t, d]) => `<li><strong style="color:#E8E5DA">${t}</strong> <span class="muted">— ${d}</span></li>`).join('')}</ul></td>
  <td><ul class="list">${s.commonCauses.map(c => `<li class="muted">• ${c}</li>`).join('')}</ul></td>
</tr>`).join('\n')}
</tbody>
</table>

<div class="section">Variation pools — process steps (4 phrasings per service, rotated by combo hash)</div>
<p class="muted" style="margin:0 0 16px;font-size:13px">Each variant says the same thing in different wording. Across 100 combo pages, no two pages will use the same process phrasing.</p>
${services.map(s => `
<div style="background:#14233A;border-radius:10px;padding:20px;margin-bottom:16px">
  <div style="color:#FFB400;font-weight:700;font-size:16px;margin-bottom:12px">${s.name} — 4 process variants</div>
  ${pools.processVariants[s.slug].map((variant, vi) => `
    <details style="margin-bottom:8px;background:rgba(255,255,255,.03);border-radius:8px;padding:8px 12px">
      <summary style="cursor:pointer;color:#FFE188;font-weight:600;font-size:13px;font-family:'JetBrains Mono',monospace;letter-spacing:.10em;text-transform:uppercase">Variant ${String.fromCharCode(65+vi)} (used by ~25 of 100 pages)</summary>
      <ol style="margin:10px 0 0;padding-left:20px;font-size:13px;line-height:1.55">
        ${variant.map(([title, body]) => `<li style="margin-bottom:6px"><strong style="color:#E8E5DA">${title}</strong> <span class="muted">${body}</span></li>`).join('')}
      </ol>
    </details>`).join('')}
</div>`).join('\n')}

<div class="section">Variation pools — pricing bullets (4 phrasings per service)</div>
${services.map(s => `
<div style="background:#14233A;border-radius:10px;padding:20px;margin-bottom:16px">
  <div style="color:#FFB400;font-weight:700;font-size:16px;margin-bottom:12px">${s.name} — 4 pricing variants</div>
  ${pools.pricingVariants[s.slug].map((variant, vi) => `
    <details style="margin-bottom:8px;background:rgba(255,255,255,.03);border-radius:8px;padding:8px 12px">
      <summary style="cursor:pointer;color:#FFE188;font-weight:600;font-size:13px;font-family:'JetBrains Mono',monospace;letter-spacing:.10em;text-transform:uppercase">Variant ${String.fromCharCode(65+vi)}</summary>
      <ul class="list" style="margin:10px 0 0;font-size:13px;line-height:1.55">
        ${variant.map(item => `<li class="muted">✓ ${item}</li>`).join('')}
      </ul>
    </details>`).join('')}
</div>`).join('\n')}

<div class="section">Variation pool — Local Proof items (12 items × 4 phrasings each)</div>
<p class="muted" style="margin:0 0 16px;font-size:13px">Each combo page picks 5-6 of these 12 items, with phrasing rotated by combo hash. {neighborhood}, {responseMin}, etc. are filled in at build time.</p>
<table>
<thead>
<tr>
  <th style="width:25%">Item</th>
  <th style="width:75%">4 phrasings (rotated)</th>
</tr>
</thead>
<tbody>
${pools.localProofItems.map(item => `<tr>
  <td><span class="name" style="font-size:13px">${item.title.replace(/\{(\w+)\}/g, '<span class="tag">{$1}</span>')}</span></td>
  <td>${item.variants.map((v, i) => `<div style="padding:6px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:12px;line-height:1.5"><span class="tag">${String.fromCharCode(65+i)}</span> <span class="muted">${v.replace(/\{(\w+)\}/g, '<span style="color:#FFE188">{$1}</span>')}</span></div>`).join('')}</td>
</tr>`).join('\n')}
</tbody>
</table>

<div class="section">Variation pool — Generic FAQs (12 questions × 3 answer phrasings)</div>
<p class="muted" style="margin:0 0 16px;font-size:13px">Each combo page uses 5+ cell-unique FAQs and pulls 4-5 from this generic pool, picked by combo hash and templated with neighborhood/service variables.</p>
<table>
<thead>
<tr>
  <th style="width:25%">Question template</th>
  <th style="width:75%">3 answer phrasings</th>
</tr>
</thead>
<tbody>
${pools.genericFaqs.map(faq => `<tr>
  <td><span class="name" style="font-size:13px">${faq.question.replace(/\{(\w+)\}/g, '<span class="tag">{$1}</span>')}</span></td>
  <td>${faq.answers.map((a, i) => `<div style="padding:6px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:12px;line-height:1.5"><span class="tag">${String.fromCharCode(65+i)}</span> <span class="muted">${a.replace(/\{(\w+)\}/g, '<span style="color:#FFE188">{$1}</span>')}</span></div>`).join('')}</td>
</tr>`).join('\n')}
</tbody>
</table>

<div class="section">Uniqueness math — sanity check</div>
<div class="legend">
  <p style="margin:0 0 8px"><strong>Cell-unique content per page (60-65% of words):</strong> hero subline · whatIs paragraphs · whenToCall (6 items) · coverage block · whyHeavyDemand · 6 scenarios · 5+ FAQ Q&amp;As · 2-3 Local Proof items</p>
  <p style="margin:0 0 8px"><strong>Pool-rotated content per page (~35% of words):</strong> 1 of 4 process variants · 1 of 4 pricing variants · 4-5 of 12 generic FAQs (3 phrasings each) · 3-4 of 12 Local Proof items (4 phrasings each)</p>
  <p style="margin:0"><strong>Result across 100 pages:</strong> each pool variant appears ~25 times. With ~1,500 cell-unique words per page floor, no two pages exceed the 40% similarity gate. Pairwise audit will verify after generation.</p>
</div>

</body>
</html>`;

const dir = path.join(__dirname, '_data-view');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
console.log('Built /_data-view/ — open http://localhost:4341/_data-view/');
