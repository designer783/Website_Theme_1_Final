import React from 'react';
import { VinLookupBox } from './VinLookupBox';

interface HeroProps {
  onSearchVin: (vin: string) => void;
  onOpenSample: (vin: string) => void;
  onViewStickers: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSearchVin,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-20 lg:pt-16 lg:pb-24 border-b border-slate-200">
      {/* Subtle Atmospheric Gradient Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[500px] bg-gradient-to-b from-blue-50/60 via-slate-50/40 to-transparent blur-3xl opacity-70" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Hero: Text & Form on Left, Vehicle Image on Right */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Pill, Headline, Subtext & VIN Lookup Box */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Top Editorial Eyebrow - Reference Site Style */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xs text-xs font-bold uppercase tracking-wider text-slate-950 mb-6 shadow-2xs">
              <span className="w-2 h-2 bg-blue-600 rounded-none animate-pulse" />
              <span>Vehicle History Report</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-medium">Ownership, Title &amp; Mileage Records</span>
            </div>

            {/* Large Confident Headline - Reference Site Typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-heading leading-[1.08] mb-5">
              Know Your Vehicle's Full <span className="text-blue-600">Story</span> Before You Sell
            </h1>

            {/* Supporting Statement */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-lg mb-8">
              Before you decide what your vehicle is worth and how you want to present it, you should know as much as possible about it. A vehicle history report gathers ownership records, title status, mileage verification, and more — so you're working with the full picture, not assumptions.
            </p>

            {/* VIN & License Plate Lookup Experience Centerpiece */}
            <div className="w-full">
              <VinLookupBox vinRedirectPath="/members/vin-check/preview" />
            </div>
          </div>

          {/* Right Column: Clean Cinematic Automotive Photograph */}
          <div className="lg:col-span-6 relative w-full">
            <div className="relative overflow-hidden sm:min-h-[380px] lg:min-h-[560px] h-full flex items-center justify-center">
              <img
                src="/hero-image.webp"
                alt="Vehicle History Documentation Preview"
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-102 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
