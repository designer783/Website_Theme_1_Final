const fs = require('fs');

const path = 'src/pages/TermsPage.tsx';
const content = fs.readFileSync(path, 'utf8');

const targetStr = `        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-slate-50 border border-slate-200 text-slate-950 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            <span>Legal Agreements &amp; Policies</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Terms of Service &amp; Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: January 2026 • Digital Build Sheet Corporate Legal Department
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-6">
            <h3 className="text-md font-bold text-slate-900 mt-6 mb-2">
              {\`Terms & Conditions\`}
            </h3>
            <h3 className="text-md font-bold text-slate-900 mt-6 mb-2">
              {\`Website terms of use\`}
            </h3>
            <h3 className="text-md font-bold text-slate-900 mt-6 mb-2">
              {\`Speak to a customer service representative:\`}
            </h3>
            <h3 className="text-md font-bold text-slate-900 mt-6 mb-2">
              {\`Call Toll Free - US: (866) 593-4553\`}
            </h3>
            <h3 className="text-md font-bold text-slate-900 mt-6 mb-2">
              {\`Open 7 days a week\`}
            </h3>
            <h3 className="text-md font-bold text-slate-900 mt-6 mb-2">
              {\`Contact Address\`}
            </h3>`;

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

const newContent = content.replace(targetStr, replacement);
fs.writeFileSync(path, newContent, 'utf8');
console.log("Updated terms top section.");
