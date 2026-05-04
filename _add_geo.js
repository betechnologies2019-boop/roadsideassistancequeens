const fs = require('fs');
let c = fs.readFileSync('_data/neighborhoods.js', 'utf8');

const coords = {
  'astoria': [40.7644, -73.9235],
  'long-island-city': [40.7505, -73.9405],
  'sunnyside': [40.7430, -73.9196],
  'woodside': [40.7459, -73.9028],
  'jackson-heights': [40.7556, -73.8830],
  'east-elmhurst': [40.7635, -73.8773],
  'corona': [40.7444, -73.8593],
  'flushing': [40.7674, -73.8331],
  'forest-hills': [40.7186, -73.8466],
  'rego-park': [40.7273, -73.8602],
  'briarwood': [40.7100, -73.8136],
  'jamaica': [40.7026, -73.7886],
  'howard-beach': [40.6571, -73.8417],
  'ozone-park': [40.6794, -73.8443],
  'richmond-hill': [40.6919, -73.8298],
  'maspeth': [40.7308, -73.9097],
  'ridgewood': [40.7008, -73.9078],
  'whitestone': [40.7867, -73.8163],
  'college-point': [40.7866, -73.8378],
  'fresh-meadows': [40.7321, -73.7777],
};

let count = 0;
for (const [slug, [lat, lng]] of Object.entries(coords)) {
  // Match `slug: 'astoria',` then any chars (lazy) up to `responseMin: NN,` then capture
  const re = new RegExp(`(slug: '${slug}',[\\s\\S]*?responseMin: \\d+,)`);
  if (re.test(c)) {
    c = c.replace(re, `$1\n    lat: ${lat},\n    lng: ${lng},`);
    count++;
  } else {
    console.log('  miss:', slug);
  }
}
fs.writeFileSync('_data/neighborhoods.js', c, 'utf8');

const n = require('./_data/neighborhoods.js');
console.log(`\nAdded geo to ${count}/20 neighborhoods.`);
console.log('Sample (Astoria):', n.find(x => x.slug === 'astoria').lat, n.find(x => x.slug === 'astoria').lng);
console.log('Sample (Fresh Meadows):', n.find(x => x.slug === 'fresh-meadows').lat, n.find(x => x.slug === 'fresh-meadows').lng);
