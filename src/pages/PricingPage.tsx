import faqsData from '../config/faqs.json';
import React from 'react';
import { PricingSection } from '../components/PricingSection';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { PricingPackage } from '../types';
import { SITE } from '../config/site';

interface PricingPageProps {
  onSelectPackage?: (pkg: PricingPackage) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onSelectPackage }) => {
  const faqs = faqsData.map(f => ({ q: f.q.replace(/\{SITE_NAME\}/g, SITE.name), a: f.a.replace(/\{SITE_NAME\}/g, SITE.name) }));

  return (
    <div className="bg-white min-h-screen">
      <PricingSection onSelectPackage={onSelectPackage} showTabs={true} />

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-slate-50 border border-slate-200 text-slate-950 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Everything you need to know about our vehicle reports and billing.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group p-5 bg-slate-50 rounded-sm border border-slate-200 shadow-2xs transition-all [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between font-bold text-slate-950 cursor-pointer text-sm sm:text-base">
                  <span>{faq.q}</span>
                  <ChevronDown className="w-4 h-4 text-slate-500 group-open:rotate-180 transition-transform shrink-0 ml-2" />
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
