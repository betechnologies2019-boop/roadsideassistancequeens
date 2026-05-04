/**
 * Pairwise similarity audit — measures content overlap between combo pages.
 * Uses 5-gram (5-word phrase) Jaccard similarity on text-only content.
 * Flags any pair > 50% overlap. Target: < 40% pairwise.
 */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const targetPrefix = process.argv[2] || ''; // e.g. "jumpstart-" to limit to one service

function extractText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .trim();
}

function shingles(text, n = 5) {
  const words = text.split(/\s+/).filter(w => w.length > 1);
  const set = new Set();
  for (let i = 0; i <= words.length - n; i++) {
    set.add(words.slice(i, i + n).join(' '));
  }
  return set;
}

function jaccard(a, b) {
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  const union = a.size + b.size - inter;
  return union === 0 ? 0 : inter / union;
}

const dirs = fs.readdirSync(ROOT).filter(d => {
  const fp = path.join(ROOT, d);
  return fs.statSync(fp).isDirectory()
    && d.startsWith(targetPrefix)
    && d.includes('-')
    && !d.startsWith('_')
    && fs.existsSync(path.join(fp, 'index.html'));
});

console.log(`Auditing ${dirs.length} combo pages (prefix: "${targetPrefix || '(all)'}")\n`);

const pages = dirs.map(d => {
  const html = fs.readFileSync(path.join(ROOT, d, 'index.html'), 'utf8');
  const text = extractText(html);
  return { slug: d, text, shingles: shingles(text) };
});

const FAIL_THRESHOLD = 0.50;
const WARN_THRESHOLD = 0.40;

const results = [];
for (let i = 0; i < pages.length; i++) {
  for (let j = i + 1; j < pages.length; j++) {
    const sim = jaccard(pages[i].shingles, pages[j].shingles);
    results.push({ a: pages[i].slug, b: pages[j].slug, sim });
  }
}

results.sort((x, y) => y.sim - x.sim);

const fails = results.filter(r => r.sim >= FAIL_THRESHOLD);
const warns = results.filter(r => r.sim >= WARN_THRESHOLD && r.sim < FAIL_THRESHOLD);

console.log(`Top 10 most similar pairs:`);
for (const r of results.slice(0, 10)) {
  const flag = r.sim >= FAIL_THRESHOLD ? '❌ FAIL' : r.sim >= WARN_THRESHOLD ? '⚠️  WARN' : '✓ OK   ';
  console.log(`  ${flag}  ${(r.sim * 100).toFixed(1)}%  ${r.a} ↔ ${r.b}`);
}

const max = results[0]?.sim || 0;
const avg = results.reduce((s, r) => s + r.sim, 0) / results.length;
const median = results[Math.floor(results.length / 2)]?.sim || 0;

console.log(`\n=== Stats ===`);
console.log(`Total pairs: ${results.length}`);
console.log(`Max similarity:    ${(max * 100).toFixed(1)}%`);
console.log(`Median similarity: ${(median * 100).toFixed(1)}%`);
console.log(`Avg similarity:    ${(avg * 100).toFixed(1)}%`);
console.log(`Pairs ≥ 50% (FAIL): ${fails.length}`);
console.log(`Pairs ≥ 40% (WARN): ${warns.length}`);

if (fails.length > 0) {
  console.log(`\n❌ ${fails.length} pair(s) exceed the 50% similarity gate. Regeneration required.`);
  process.exit(1);
} else if (warns.length > 0) {
  console.log(`\n⚠️  ${warns.length} pair(s) in the 40-50% range. Acceptable but borderline.`);
} else {
  console.log(`\n✓ All pairs below 40% similarity. Uniqueness gate cleared.`);
}
