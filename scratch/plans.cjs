const fs = require('fs');
let c = fs.readFileSync('src/config/plans.json', 'utf8');
c = c.replace(/"nos":\s*"20"/g, '"nos": "-1"');
fs.writeFileSync('src/config/plans.json', c);
