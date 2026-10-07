const fs = require('fs');
let c = fs.readFileSync('src/pages/PricingPage.tsx', 'utf8');

c = c.replace(
  "import faqsData from \\'../config/faqs.json\\';\\n  const faqs = faqsData.map(f => ({ q: f.q.replace(/\\{SITE_NAME\\}/g, SITE.name), a: f.a.replace(/\\{SITE_NAME\\}/g, SITE.name) }));",
  "const faqs = faqsData.map(f => ({ q: f.q.replace(/\\{SITE_NAME\\}/g, SITE.name), a: f.a.replace(/\\{SITE_NAME\\}/g, SITE.name) }));"
);

// Add import at the top
if (!c.includes("import faqsData")) {
  c = "import faqsData from '../config/faqs.json';\n" + c;
}

fs.writeFileSync('src/pages/PricingPage.tsx', c);
