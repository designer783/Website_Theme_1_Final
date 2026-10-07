import React from 'react';
import { Star, ShieldCheck, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';
import { SITE } from '../config/site';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-slate-50 border border-slate-200 text-slate-950 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>Verified Customer Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-tight">
              What Our Customers Say
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Sellers, collectors, dealership managers, and individual owners who used {SITE.name} to document their vehicles and present them with confidence.
            </p>
          </div>

          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-sm border border-slate-200 shrink-0">
            <div className="text-center sm:text-right">
              <div className="flex items-center gap-1.5 justify-center sm:justify-end">
                <span className="text-3xl font-black text-slate-950 font-mono">4.8</span>
                <div className="flex text-amber-400">
                  {'★★★★★'.split('').map((s, i) => (
                    <span key={i} className="text-base">{s}</span>
                  ))}
                </div>
              </div>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Based on 150+ reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50 rounded-sm p-6 border border-slate-200 flex flex-col justify-between h-full hover:bg-white hover:border-slate-300 transition-colors shadow-2xs"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 text-sm">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">{t.date || 'Verified Review'}</span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{t.quote || t.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 mt-6 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-950">{t.author}</h4>
                    {t.vehicleChecked && (
                      <span className="text-xs text-slate-500 block">
                        Checked: {t.vehicleChecked}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-xs">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
