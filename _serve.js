const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 4341;
const types = {'.html':'text/html','.css':'text/css','.js':'application/javascript','.json':'application/json','.xml':'application/xml','.txt':'text/plain','.ico':'image/x-icon','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.webp':'image/webp','.webmanifest':'application/manifest+json'};
http.createServer((req, res) => {
  let p = req.url.split('?')[0];
  if (p.endsWith('/')) p = p + 'index.html';
  const fp = path.join(__dirname, p);
  fs.readFile(fp, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, {'Content-Type': types[path.extname(fp)] || 'application/octet-stream'});
    res.end(data);
  });
}).listen(PORT, () => console.log('Serving at http://localhost:' + PORT));
