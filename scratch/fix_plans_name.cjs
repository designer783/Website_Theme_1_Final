const fs = require('fs');
let c = fs.readFileSync('src/config/plans.json', 'utf8');
c = c.replace(/"name":\s*"Most Popular"/g, '"name": "Unlimited Stickers / Month"');
fs.writeFileSync('src/config/plans.json', c);
