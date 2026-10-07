import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Tag, 
  Clock, 
  FileCheck,
  CheckCircle2
} from 'lucide-react';
import { PRICING_PACKAGES, HISTORY_PACKAGES } from '../data/mockData';
import { PricingPackage } from '../types';
import { SITE } from '../config/site';

interface PricingSectionProps {
  onSelectPackage?: (pkg: PricingPackage) => void;
  packages?: PricingPackage[];
  showTabs?: boolean;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectPackage,
  packages,
  showTabs = false,
}) => {
  const [selectedPkg, setSelectedPkg] = useState<PricingPackage | null>(null);
  const [activeTab, setActiveTab] = useState<'sticker' | 'history'>('sticker');
  const [checkoutEmail, setCheckoutEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Determine which packages to show
  const displayPackages = packages || (showTabs && activeTab === 'history' ? HISTORY_PACKAGES : PRICING_PACKAGES);

  const handleChoose = (pkg: PricingPackage) => {
    setSelectedPkg(pkg);
    setCheckoutEmail('');
    setIsSubmitting(false);
    if (onSelectPackage) {
      onSelectPackage(pkg);
    }
  };

  const isValidEmail = /^\S+@\S+\.\S+$/.test(checkoutEmail.trim());

  const handleProceedToCheckout = () => {
    if (!selectedPkg || !isValidEmail || isSubmitting) return;
    setIsSubmitting(true);
    const fields = [
      { name: 'email', value: checkoutEmail.trim() },
      { name: 'cart_plan', value: selectedPkg.code },
      { name: 'vin', value: 'CREDIT' },
      { name: 'phone', value: '' },
      { name: 'user_type', value: 'user' },
      { name: 'payment_gateway', value: 'default' },
    ];
    // base64 of the UTF-8 JSON, e.g. W3sibmFtZSI6ImVtYWlsIi...
    const bytes = new TextEncoder().encode(JSON.stringify(fields));
    const newData = btoa(String.fromCharCode(...bytes));
    const wpPage = window.location.pathname.replace(/^\/+|\/+$/g, '').replace(/\.html$/, '') || 'home';
    const params = new URLSearchParams({ 'new-data': newData, wpPage, type: selectedPkg.checkoutType });
    window.location.href = `${SITE.url}/members/checkout?${params.toString()}`;
  };

  return (
    <section id="pricing-section" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-white border border-slate-200 text-slate-950 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Tag className="w-3.5 h-3.5 text-blue-600" />
            <span>Clear &amp; Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
            Vehicle Documentation Packages
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Choose the package that best fits your needs. Purchase credits that never expire and pull documentation whenever you need it.
          </p>
        </div>

        {/* Optional Tabs */}
        {showTabs && (
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-slate-200/60 p-1.5 rounded-sm">
              <button
                onClick={() => setActiveTab('sticker')}
                className={`px-6 py-2.5 text-sm font-bold uppercase tracking-wider rounded-xs transition-all ${
                  activeTab === 'sticker'
                    ? 'bg-white text-slate-950 shadow-sm border border-slate-200'
                    : 'text-slate-500 hover:text-slate-950 hover:bg-slate-200'
                }`}
              >
                Window Stickers
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`px-6 py-2.5 text-sm font-bold uppercase tracking-wider rounded-xs transition-all ${
                  activeTab === 'history'
                    ? 'bg-white text-slate-950 shadow-sm border border-slate-200'
                    : 'text-slate-500 hover:text-slate-950 hover:bg-slate-200'
                }`}
              >
                Vehicle History
              </button>
            </div>
          </div>
        )}

        {/* Dynamic Pricing Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${displayPackages.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6 sm:gap-8 items-stretch max-w-[1440px] mx-auto`}>
          {displayPackages.map((pkg) => {
            const isPopular = Boolean(pkg.popular || pkg.isPopular);
            const perReportPrice = pkg.perReportPrice || Math.round((pkg.price / pkg.reportsCount) * 100) / 100;
            return (
              <div
                key={pkg.id}
                id={`pricing-card-${pkg.id}`}
                className={`relative rounded-sm p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 h-full ${
                  isPopular
                    ? 'bg-white border-2 border-slate-950 shadow-md z-10'
                    : 'bg-white border border-slate-200 shadow-2xs hover:border-slate-300'
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-xs bg-slate-950 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-blue-400" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-bold text-slate-950">{pkg.name}</h3>
                    {pkg.reportsCount > 1 && (
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs bg-blue-50 text-blue-700 font-mono">
                        ${perReportPrice}/{pkg.name.toLowerCase().includes('sticker') ? 'sticker' : 'report'}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 mb-6">{pkg.description}</p>

                  <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-slate-100">
                    <span className="text-4xl sm:text-5xl font-black text-slate-950 font-mono tracking-tight">
                      ${pkg.price}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{pkg.billingCycle || 'one-time payment'}</span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 mb-8 text-xs sm:text-sm text-slate-600">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-xs bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="font-medium text-slate-700">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  id={`btn-select-plan-${pkg.id}`}
                  onClick={() => handleChoose(pkg)}
                  className={`w-full py-3.5 px-4 rounded-xs font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isPopular
                      ? 'bg-slate-950 hover:bg-slate-800 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-950 border border-slate-200'
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Guarantees Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <Clock className="w-5 h-5 text-blue-600 mb-2" />
            <h4 className="text-sm font-bold text-slate-950">Credits Never Expire</h4>
            <p className="text-xs text-slate-500 mt-1 max-w-xs leading-relaxed">
              Purchase now and use your credits whenever you're ready to sell.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FileCheck className="w-5 h-5 text-blue-600 mb-2" />
            <h4 className="text-sm font-bold text-slate-950">Instant PDF &amp; Web Delivery</h4>
            <p className="text-xs text-slate-500 mt-1 max-w-xs leading-relaxed">
              Generate your window sticker or vehicle history report in seconds, ready to share with buyers.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <ShieldCheck className="w-5 h-5 text-blue-600 mb-2" />
            <h4 className="text-sm font-bold text-slate-950">NMVTIS &amp; DMV Certified</h4>
            <p className="text-xs text-slate-500 mt-1 max-w-xs leading-relaxed">
              Direct access to official federal databases, state DMVs, and factory databases.
            </p>
          </div>
        </div>
      </div>

      {/* Simple Checkout Modal */}
      {selectedPkg && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedPkg(null);
              setCheckoutEmail('');
            }
          }}
        >
          <div className="bg-white rounded-md max-w-lg w-full shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-150">
            {/* Header */}
            <div className="flex justify-between items-center p-5 sm:p-6 border-b border-slate-100">
              <h3 className="text-xl sm:text-2xl text-slate-800 font-medium">
                {selectedPkg.checkoutType === 'sticker' ? 'Get Your Sticker' : 'Get Your Report'}
              </h3>
              <button
                onClick={() => {
                  setSelectedPkg(null);
                  setCheckoutEmail('');
                }}
                className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="p-5 sm:p-6 space-y-5">
              <div>
                <label className="text-base text-slate-700 block mb-2">
                  Enter Email
                </label>
                <input
                  type="email"
                  value={checkoutEmail}
                  onChange={(e) => setCheckoutEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleProceedToCheckout()}
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-md text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-all"
                  autoFocus
                />
              </div>

              <div>
                <button
                  id="btn-proceed-checkout"
                  onClick={handleProceedToCheckout}
                  disabled={!isValidEmail || isSubmitting}
                  className="px-6 py-3.5 bg-[#0d6efd] hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-base font-medium rounded-md shadow-sm transition-all cursor-pointer"
                >{isSubmitting ? 'Processing...' : 'Proceed to Checkout'}</button>
              </div>

              <div className="pt-2">
                <p className="text-sm text-slate-800 font-medium leading-relaxed">
                  By selecting "Proceed to Checkout" you are confirming that you have read and agree to
                  {SITE.name}'s <a href="/terms" className="text-blue-600 hover:text-blue-800 underline">Terms of Use</a> and <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

