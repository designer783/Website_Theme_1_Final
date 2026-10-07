const fs = require('fs');
const path = 'src/pages/TermsPage.tsx';
let content = fs.readFileSync(path, 'utf8');

// I'll replace everything from `        <div>\n          <div className="inline-flex` 
// to `              {\`Contact Address\`}\n            </h3>`

const startStr = '        <div>';
const endStr = '            <h3 className="text-md font-bold text-slate-900 mt-6 mb-2">\n              {`Contact Address`}\n            </h3>';

const startIndex = content.indexOf(startStr);
const endIndex = content.indexOf(endStr) + endStr.length;

if (startIndex !== -1 && endIndex !== -1) {
    const replacement = `        <div className="mb-12">
          <h1 className="text-[32px] sm:text-[40px] text-[#1e293b] font-medium tracking-tight mb-2">
            Terms &amp; Conditions
          </h1>
          <p className="text-slate-600 text-base">
            Website terms of use
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-3xl">
            {/* Phone Contact Block */}
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 bg-[#e2e2e2] flex items-center justify-center shrink-0">
                <div className="w-12 h-12 bg-gray-500 rounded flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
              </div>
              <div className="pt-2">
                <h3 className="font-bold text-[#1e293b] text-xl leading-snug mb-3">
                  Speak to a customer service<br />representative:
                </h3>
                <p className="text-slate-600 text-[15px] mb-1">
                  Call Toll Free - US: (866) 593-4553
                </p>
                <p className="text-slate-600 text-[15px]">
                  Open 7 days a week
                </p>
              </div>
            </div>

            {/* Address Contact Block */}
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 bg-[#e2e2e2] flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v18"></path>
                  <path d="M12 8h7l2-2-2-2h-7"></path>
                  <path d="M12 18H5l-2-2 2-2h7"></path>
                </svg>
              </div>
              <div className="pt-2">
                <h3 className="font-bold text-[#1e293b] text-xl leading-snug">
                  Contact Address
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-6">`;

    const newContent = content.substring(0, startIndex) + replacement + content.substring(endIndex);
    fs.writeFileSync(path, newContent, 'utf8');
    console.log("Successfully replaced via index.");
} else {
    console.log("Could not find start or end strings.");
}
