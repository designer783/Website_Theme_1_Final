const fs = require('fs');

const termsPagePath = 'src/pages/TermsPage.tsx';
let termsPageContent = fs.readFileSync(termsPagePath, 'utf8');

const formattedTermsPath = 'formatted_terms.tsx';
const formattedTermsContent = fs.readFileSync(formattedTermsPath, 'utf8');

const lines = termsPageContent.split('\n');
const prefix = lines.slice(0, 21).join('\n');

const suffix = `        </div>
      </div>
    </div>
  );
};
`;

const newContent = prefix + '\n' + formattedTermsContent + '\n' + suffix;

fs.writeFileSync(termsPagePath, newContent, 'utf8');
console.log("Successfully updated TermsPage.tsx");
