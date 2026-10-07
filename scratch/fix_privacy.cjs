const fs = require('fs');
let c = fs.readFileSync('src/pages/PrivacyPage.tsx', 'utf8');

// Replace the container width
c = c.replace(/className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10"/g, 'className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10"');

// Header styles
c = c.replace(
  /<h1 className="text-\[32px\] sm:text-\[40px\] text-\[#1e293b\] font-medium tracking-tight mb-2">\s*Privacy Policy\s*<\/h1>/,
  '<h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">Privacy Policy</h1>'
);
c = c.replace(
  /<p className="text-slate-600 text-base">/,
  '<p className="text-lg text-slate-600">'
);

// Background styles
c = c.replace(
  /<div className="py-12 sm:py-20 bg-white min-h-screen">/,
  '<div className="py-12 sm:py-20 bg-slate-50 min-h-screen">'
);

// We put the prose in a white card to make it look nice like other pages
c = c.replace(
  '<div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-6">',
  '<div className="bg-white p-6 sm:p-10 rounded-sm border border-slate-200 shadow-sm">\n        <div className="prose prose-slate max-w-none text-slate-700 text-base leading-relaxed space-y-6">'
);

// add closing div for the card
c = c.replace(
  /<\/div>\s*<\/div>\s*<\/div>\s*\);\s*};\s*$/,
  '</div>\n        </div>\n      </div>\n    </div>\n  );\n};\n'
);

fs.writeFileSync('src/pages/PrivacyPage.tsx', c);
