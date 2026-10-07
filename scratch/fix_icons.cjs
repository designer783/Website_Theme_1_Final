const fs = require('fs');

let c = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

c = c.replace(
  /<div className="w-10 h-10.*?">\s*<Fuel className="w-5 h-5" \/>\s*<\/div>\s*<h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">\s*Original Specifications\s*<\/h3>/g,
  `<div className="w-10 h-10 rounded-xs bg-slate-950 text-white flex items-center justify-center mb-4 group-hover:bg-sky-600 transition-colors shrink-0">\n                  <FileText className="w-5 h-5" />\n                </div>\n                <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">\n                  Original Specifications\n                </h3>`
);

c = c.replace(
  /<div className="w-10 h-10.*?">\s*<Award className="w-5 h-5" \/>\s*<\/div>\s*<h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">\s*Safety &amp; Warranty Details\s*<\/h3>/g,
  `<div className="w-10 h-10 rounded-xs bg-slate-950 text-white flex items-center justify-center mb-4 group-hover:bg-amber-600 transition-colors shrink-0">\n                  <ShieldCheck className="w-5 h-5" />\n                </div>\n                <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">\n                  Safety &amp; Warranty Details\n                </h3>`
);

c = c.replace(
  /<div className="w-10 h-10.*?">\s*<ShieldAlert className="w-5 h-5" \/>\s*<\/div>\s*<h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">\s*Fuel &amp; Efficiency Ratings\s*<\/h3>/g,
  `<div className="w-10 h-10 rounded-xs bg-slate-950 text-white flex items-center justify-center mb-4 group-hover:bg-rose-600 transition-colors shrink-0">\n                  <Fuel className="w-5 h-5" />\n                </div>\n                <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">\n                  Fuel &amp; Efficiency Ratings\n                </h3>`
);

fs.writeFileSync('src/pages/HomePage.tsx', c);
