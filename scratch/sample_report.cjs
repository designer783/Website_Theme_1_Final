const fs = require('fs');
let c = fs.readFileSync('src/pages/SampleReportsPage.tsx', 'utf8');

c = c.replace(
  'Sample Vehicle History Reports',
  'Sample Vehicle History Reports & Window Stickers'
);

c = c.replace(
  'See exactly what is included in a {SITE.name} report.',
  'See exactly what is included in a {SITE.name} vehicle history report and build sheet.'
);

c = c.replace(
  'Select a Sample Vehicle Record to Inspect',
  'Select a Sample Vehicle Record or Window Sticker to Inspect'
);

fs.writeFileSync('src/pages/SampleReportsPage.tsx', c);
