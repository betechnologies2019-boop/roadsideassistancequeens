# Roadside Assistance Queens

24/7 roadside assistance website for Queens, NY. $125 flat per service.

**Live site:** https://roadsideassistancequeens.com/
**Phone:** (718) 550-1460

## Site structure

- 1 homepage (`/`)
- 5 borough-level service pages (`/jumpstart/`, `/car-lockout/`, `/tire-change/`, `/fuel-delivery/`, `/battery-replacement/`)
- 100 combo pages (5 services × 20 Queens neighborhoods)
- Comprehensive schema.org markup (Organization, LocalBusiness, AutomotiveBusiness, EmergencyService, Service, HowTo, FAQPage, Speakable, GeoCoordinates per neighborhood)
- AEO files: `llms.txt`, `llms-full.txt`, `ai.txt`, `humans.txt`, `.well-known/security.txt`

## Local dev

```bash
node _serve.js
# serves at http://localhost:4341
```

## Build pipeline

Page generation runs from data tables in `_data/`:

```bash
node _build_service_pages.js   # generates 5 borough service pages
node _build_combos.js          # generates 100 combo pages
node _inject_directory.js      # adds neighborhood directory to homepage + service pages
node _post_process_links.js    # injects inline prose links + smart contextual nav
node _inject_aeo.js            # adds AEO meta tags
node _build_sitemap.js         # regenerates sitemap.xml
node _audit_links.js           # internal link graph audit
node _audit_uniqueness.js      # pairwise content similarity audit
node _dist.js                  # builds _dist/ + _zips/ for deployment
```

## Hosting

Static site deployed via Vercel. Custom domain: roadsideassistancequeens.com

## License

All rights reserved.
