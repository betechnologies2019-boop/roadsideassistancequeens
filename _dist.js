/**
 * Build the production deployment folder + ZIP for Bluehost cPanel upload.
 *
 * Output: _dist/ folder with everything Bluehost needs, then a ZIP at _zips/roadsideassistancequeens.com.zip.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = __dirname;
const DIST = path.join(ROOT, '_dist');
const ZIPS = path.join(ROOT, '_zips');

// Files at root that should be deployed
const ROOT_FILES = [
  'index.html',
  'sitemap.xml',
  'robots.txt',
  'llms.txt',
  'llms-full.txt',
  'ai.txt',
  'humans.txt',
  'favicon.ico',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'apple-touch-icon.png',
  'apple-touch-icon-167x167.png',
  'apple-touch-icon-152x152.png',
  'site.webmanifest',
];

// Hidden directories to copy
const HIDDEN_DIRS = ['.well-known'];

// Folders that should be deployed (everything inside)
const ROOT_DIRS = [
  'img',
  // 5 borough service pages
  'jumpstart',
  'car-lockout',
  'tire-change',
  'fuel-delivery',
  'battery-replacement',
];

// Anything starting with these prefixes is excluded
const EXCLUDE_PREFIXES = ['_', 'node_modules', '.git'];

// Clean and recreate _dist
if (fs.existsSync(DIST)) {
  fs.rmSync(DIST, { recursive: true, force: true });
}
fs.mkdirSync(DIST, { recursive: true });
if (!fs.existsSync(ZIPS)) fs.mkdirSync(ZIPS, { recursive: true });

// Copy root files
for (const f of ROOT_FILES) {
  const src = path.join(ROOT, f);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(DIST, f));
  } else {
    console.log(`  [warn] missing root file: ${f}`);
  }
}

// Copy named root dirs
function copyDir(src, dst) {
  if (!fs.existsSync(dst)) fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (EXCLUDE_PREFIXES.some(p => entry.name.startsWith(p))) continue;
    const srcPath = path.join(src, entry.name);
    const dstPath = path.join(dst, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, dstPath);
    } else {
      fs.copyFileSync(srcPath, dstPath);
    }
  }
}

for (const d of ROOT_DIRS) {
  const src = path.join(ROOT, d);
  if (fs.existsSync(src)) {
    copyDir(src, path.join(DIST, d));
  }
}

// Copy hidden well-known dir
for (const d of HIDDEN_DIRS) {
  const src = path.join(ROOT, d);
  if (fs.existsSync(src)) {
    copyDir(src, path.join(DIST, d));
  }
}

// Copy all combo-page directories (service-neighborhood)
const services = require('./_data/services.js');
const neighborhoods = require('./_data/neighborhoods.js');

let comboCount = 0;
for (const s of services) {
  for (const n of neighborhoods) {
    const slug = `${s.slug}-${n.slug}`;
    const src = path.join(ROOT, slug);
    if (fs.existsSync(src)) {
      copyDir(src, path.join(DIST, slug));
      comboCount++;
    }
  }
}

// Tally
function countFiles(dir) {
  let count = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) count += countFiles(path.join(dir, entry.name));
    else count++;
  }
  return count;
}

function dirSize(dir) {
  let size = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) size += dirSize(p);
    else size += fs.statSync(p).size;
  }
  return size;
}

const totalFiles = countFiles(DIST);
const totalSize = dirSize(DIST);
console.log(`\n✓ _dist/ built`);
console.log(`  ${comboCount} combo-page folders`);
console.log(`  ${totalFiles} total files`);
console.log(`  ${(totalSize / 1024 / 1024).toFixed(1)} MB total`);
console.log();

// Create the ZIP using PowerShell Compress-Archive (Windows-native)
const zipPath = path.join(ZIPS, 'roadsideassistancequeens.com.zip');
if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);

console.log('Creating ZIP via PowerShell Compress-Archive...');
const psCmd = `Compress-Archive -Path "${DIST}\\*" -DestinationPath "${zipPath}" -Force`;
try {
  execSync(`powershell -NoProfile -Command "${psCmd}"`, { stdio: 'inherit' });
  const zipSize = fs.statSync(zipPath).size;
  console.log(`\n✓ ZIP created: ${zipPath}`);
  console.log(`  ${(zipSize / 1024 / 1024).toFixed(1)} MB`);
  console.log(`\nUpload this ZIP to Bluehost cPanel File Manager → public_html for roadsideassistancequeens.com → extract.`);
} catch (e) {
  console.error('ZIP creation failed:', e.message);
  process.exit(1);
}
