const fs = require('fs');
let c = fs.readFileSync('src/data/mockData.ts', 'utf8');
c = c.replace('but ${SITE.name} showed me the exact salvage history', 'but this site showed me the exact salvage history');
fs.writeFileSync('src/data/mockData.ts', c);
