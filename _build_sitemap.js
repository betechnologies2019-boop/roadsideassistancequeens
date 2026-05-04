const fs = require('fs');
const path = require('path');
const services = require('./_data/services.js');
const neighborhoods = require('./_data/neighborhoods.js');

const today = '2026-05-04';
const base = 'https://www.roadsideassistancequeens.com';

const urls = [];

// Homepage
urls.push({ loc: `${base}/`, priority: '1.0', changefreq: 'weekly', images: [
  { loc: `${base}/img/hero-tow.webp`, title: 'Roadside Assistance Queens — 24/7 Service', caption: 'Roadside assistance in Queens NY — jumpstart, lockout, tire change, fuel delivery, battery replacement. $125 flat per service.' },
  { loc: `${base}/img/chain-detail.webp`, title: 'Roadside Assistance Queens Equipment', caption: 'Service equipment used for roadside assistance in Queens.' },
  { loc: `${base}/img/nyc-night.webp`, title: '24 Hour Queens Roadside Assistance', caption: 'Night roadside assistance in Queens NY — 24/7 dispatch, $125 flat per service.' },
]});

// 5 borough-level service pages
for (const s of services) {
  urls.push({ loc: `${base}/${s.slug}/`, priority: '0.9', changefreq: 'monthly' });
}

// 100 combo pages (5 services x 20 neighborhoods)
for (const s of services) {
  for (const n of neighborhoods) {
    urls.push({ loc: `${base}/${s.slug}-${n.slug}/`, priority: '0.8', changefreq: 'monthly' });
  }
}

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';
for (const u of urls) {
  xml += `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n`;
  if (u.images) {
    for (const img of u.images) {
      xml += `    <image:image>\n      <image:loc>${img.loc}</image:loc>\n      <image:title>${img.title}</image:title>\n      <image:caption>${img.caption}</image:caption>\n    </image:image>\n`;
    }
  }
  xml += `  </url>\n`;
}
xml += `</urlset>\n`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), xml, 'utf8');
console.log(`Sitemap written: ${urls.length} URLs.`);
