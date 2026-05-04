/**
 * Audit the internal link graph across all 106 pages.
 * Reports: outbound link count per page, inbound count per page, coverage (does each page get linked from others?).
 */
const fs = require('fs');
const path = require('path');
const services = require('./_data/services.js');
const neighborhoods = require('./_data/neighborhoods.js');

const ROOT = __dirname;

// Build expected page list
const pages = ['/'];
for (const s of services) pages.push(`/${s.slug}/`);
for (const s of services) for (const n of neighborhoods) pages.push(`/${s.slug}-${n.slug}/`);

const fileFor = (page) => page === '/' ? 'index.html' : page.slice(1, -1) + '/index.html';

// Outbound links per page
const outbound = {};
const inbound = {};
pages.forEach(p => { outbound[p] = new Set(); inbound[p] = new Set(); });

for (const page of pages) {
  const fp = path.join(ROOT, fileFor(page));
  if (!fs.existsSync(fp)) continue;
  const html = fs.readFileSync(fp, 'utf8');
  // Extract internal href targets
  const rx = /href="(\/[^"#?]*?)(?:[#?][^"]*)?"/g;
  let m;
  while ((m = rx.exec(html)) !== null) {
    let target = m[1];
    if (!target.endsWith('/')) target = target + '/';
    if (target === '/') target = '/';
    if (pages.includes(target)) {
      outbound[page].add(target);
      inbound[target].add(page);
    }
  }
}

// Stats
const outCounts = pages.map(p => outbound[p].size);
const inCounts = pages.map(p => inbound[p].size);

const min = (a) => Math.min(...a);
const max = (a) => Math.max(...a);
const avg = (a) => (a.reduce((s,x)=>s+x, 0) / a.length).toFixed(1);

console.log(`Total pages: ${pages.length}`);
console.log();
console.log(`Outbound links (per page → other pages on the site):`);
console.log(`  min: ${min(outCounts)} | max: ${max(outCounts)} | avg: ${avg(outCounts)}`);
console.log();
console.log(`Inbound links (per page ← linked from how many other pages):`);
console.log(`  min: ${min(inCounts)} | max: ${max(inCounts)} | avg: ${avg(inCounts)}`);
console.log();

// Pages with the fewest inbound links (orphans / weak)
const sortedByIn = pages.slice().sort((a,b) => inbound[a].size - inbound[b].size);
console.log(`Pages with the fewest inbound links (potentially under-linked):`);
sortedByIn.slice(0, 5).forEach(p => {
  console.log(`  ${p} — ${inbound[p].size} inbound`);
});
console.log();

// Pages with the most inbound links (link hubs)
console.log(`Pages with the most inbound links (link hubs):`);
sortedByIn.slice(-5).reverse().forEach(p => {
  console.log(`  ${p} — ${inbound[p].size} inbound`);
});
console.log();

// Are all pages reachable in 2 clicks from any starting page?
// BFS check from a sample starting page
function bfs(start) {
  const visited = new Set([start]);
  let frontier = new Set([start]);
  const distances = { [start]: 0 };
  let depth = 0;
  while (frontier.size && depth < 5) {
    depth++;
    const next = new Set();
    for (const p of frontier) {
      for (const t of outbound[p]) {
        if (!visited.has(t)) {
          visited.add(t);
          next.add(t);
          distances[t] = depth;
        }
      }
    }
    frontier = next;
  }
  return distances;
}

const samples = ['/', '/jumpstart/', '/jumpstart-astoria/', '/battery-replacement-fresh-meadows/'];
console.log(`Reachability check (BFS from sample pages):`);
for (const start of samples) {
  const dist = bfs(start);
  const counts = { 1: 0, 2: 0, 3: 0, 4: 0, '5+': 0, unreachable: 0 };
  for (const p of pages) {
    if (p === start) continue;
    const d = dist[p];
    if (d === undefined) counts.unreachable++;
    else if (d <= 4) counts[d]++;
    else counts['5+']++;
  }
  const reached = pages.length - 1 - counts.unreachable;
  console.log(`  From ${start}:`);
  console.log(`    1 click: ${counts[1]}, 2 clicks: ${counts[2]}, 3 clicks: ${counts[3]}, 4 clicks: ${counts[4]}, 5+: ${counts['5+']}, unreachable: ${counts.unreachable}`);
  console.log(`    Reached: ${reached} of ${pages.length - 1} other pages`);
}
