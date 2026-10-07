const fs = require('fs');
let c = fs.readFileSync('src/pages/TermsPage.tsx', 'utf8');

// Replace the container width
c = c.replace(/className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10"/g, 'className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10"');
c = c.replace(/<div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-6">/g, '<div className="prose prose-slate max-w-none text-slate-700 text-base leading-relaxed space-y-6">');

// Remove the entire phone/address block
// It starts with `<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-3xl">`
// and ends right before `<div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-6">`

const contactBlockStart = '<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-3xl">';
const contactBlockEnd = '</div>\n        </div>\n\n        <div className="prose prose-slate max-w-none';

const startIndex = c.indexOf(contactBlockStart);
const proseIndex = c.indexOf('<div className="prose prose-slate max-w-none');

if (startIndex !== -1 && proseIndex !== -1) {
  // we want to keep the closing div of the header block that is right before prose
  c = c.substring(0, startIndex) + '</div>\n\n        ' + c.substring(proseIndex);
}

// Ensure the page redesign looks more aligned with other pages
// The header "Terms & Conditions"
c = c.replace(
  /<h1 className="text-\[32px\] sm:text-\[40px\] text-\[#1e293b\] font-medium tracking-tight mb-2">\s*Terms &amp; Conditions\s*<\/h1>/,
  '<h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">Terms &amp; Conditions</h1>'
);
c = c.replace(
  /<p className="text-slate-600 text-base">\s*Website terms of use\s*<\/p>/,
  '<p className="text-lg text-slate-600">Website terms of use</p>'
);

c = c.replace(
  /<div className="py-12 sm:py-20 bg-white min-h-screen">/,
  '<div className="py-12 sm:py-20 bg-slate-50 min-h-screen">'
);

// We can put the prose in a white card to make it look nice like other pages
c = c.replace(
  '<div className="prose prose-slate max-w-none text-slate-700 text-base leading-relaxed space-y-6">',
  '<div className="bg-white p-6 sm:p-10 rounded-sm border border-slate-200 shadow-sm">\n          <div className="prose prose-slate max-w-none text-slate-700 text-base leading-relaxed space-y-6">'
);

// add closing div for the card
c = c.replace(
  /<\/div>\s*<\/div>\s*<\/div>\s*\);\s*};\s*$/,
  '</div>\n        </div>\n      </div>\n    </div>\n  );\n};\n'
);

fs.writeFileSync('src/pages/TermsPage.tsx', c);
