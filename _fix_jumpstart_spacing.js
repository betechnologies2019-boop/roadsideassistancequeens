/**
 * Replaces hardcoded "Jumpstart" / "jumpstart" body text with "Jump Start" / "jump start".
 * Preserves URL slugs like /jumpstart/, /jumpstart-astoria/, and the slug 'jumpstart' in code.
 */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;

const files = [
  // Cell files (all body content)
  '_data/cells/jumpstart.js',
  '_data/cells/car-lockout.js',
  '_data/cells/tire-change.js',
  '_data/cells/fuel-delivery.js',
  '_data/cells/battery-replacement.js',
  // Variation pools (in case any reference jumpstart)
  '_data/variation_pools.js',
  // Homepage (any inline body content referencing jumpstart)
  'index.html',
  // The borough service-page generator (so it renders "Jump Start" too)
  '_build_service_pages.js',
  // The borough llms.txt
  'llms.txt',
  // The 5 borough service page HTMLs (already-rendered versions need fixing too)
  'jumpstart/index.html',
  'car-lockout/index.html',
  'tire-change/index.html',
  'fuel-delivery/index.html',
  'battery-replacement/index.html',
];

let totalReplaced = 0;
let filesChanged = 0;

for (const rel of files) {
  const fp = path.join(ROOT, rel);
  if (!fs.existsSync(fp)) {
    console.log(`  [skip] ${rel} — not found`);
    continue;
  }

  let content = fs.readFileSync(fp, 'utf8');
  const before = content;

  // Replace "Jumpstart" (capital J) — but NOT in URL slugs or attribute paths.
  // Negative lookahead for "-" or "/" handles "jumpstart-astoria" and "/jumpstart/"
  // Negative lookbehind for "/" handles "/jumpstart"
  // Negative lookbehind for ":" handles "slug: 'jumpstart'" in services.js (we already changed services.js manually)
  // Use the simpler approach: only replace when followed by space or end-of-word punctuation that isn't a hyphen or slash.
  content = content.replace(/(?<![\/'"`])(?<!\w)Jumpstart(?![-\/])(?=[\s,.!?:;)\]'"<])/g, 'Jump Start');
  content = content.replace(/(?<![\/'"`])(?<!\w)jumpstart(?![-\/])(?=[\s,.!?:;)\]'"<])/g, 'jump start');

  // Special cases: words like "jumpstarts" (plural) — keep "jump starts"
  content = content.replace(/(?<![\/'"`])(?<!\w)Jumpstarts(?![-\/])(?=[\s,.!?:;)\]'"<])/g, 'Jump Starts');
  content = content.replace(/(?<![\/'"`])(?<!\w)jumpstarts(?![-\/])(?=[\s,.!?:;)\]'"<])/g, 'jump starts');

  if (content !== before) {
    // Count actual replacements (rough — by byte diff)
    const beforeMatches = (before.match(/jumpstart(?![-\/])/gi) || []).length;
    const afterMatches = (content.match(/jumpstart(?![-\/])/gi) || []).length;
    const delta = beforeMatches - afterMatches;
    fs.writeFileSync(fp, content, 'utf8');
    console.log(`  ✓ ${rel} — ${delta} replacements`);
    totalReplaced += delta;
    filesChanged++;
  } else {
    console.log(`  · ${rel} — no changes`);
  }
}

console.log(`\nDone. ${filesChanged} file(s) changed, ~${totalReplaced} replacements.`);
