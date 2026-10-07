const fs = require('fs');

const termsPagePath = 'src/pages/TermsPage.tsx';
const termsPageContent = fs.readFileSync(termsPagePath, 'utf8');

const formattedTermsPath = 'formatted_terms.tsx';
const formattedTermsContent = fs.readFileSync(formattedTermsPath, 'utf8');

const startMarker = '<div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-6">';
const endMarker = '</div>\n      </div>\n    </div>\n  );\n};';

const startIndex = termsPageContent.indexOf(startMarker);
const endIndex = termsPageContent.indexOf(endMarker, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
    const newContent = termsPageContent.substring(0, startIndex + startMarker.length) + '\n' + formattedTermsContent + '\n        ' + termsPageContent.substring(endIndex);
    fs.writeFileSync(termsPagePath, newContent, 'utf8');
    console.log("Successfully updated TermsPage.tsx");
} else {
    console.error("Could not find markers in TermsPage.tsx");
}
