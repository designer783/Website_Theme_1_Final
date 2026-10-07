import React, { useState } from 'react';
import { VinLookupBox } from '../components/VinLookupBox';
import { SAMPLE_REPORTS } from '../data/mockData';
import { PricingSection } from '../components/PricingSection';
import { 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Share2, 
  Search, 
  FileText, 
  Sliders, 
  DollarSign, 
  Fuel, 
  ShieldAlert, 
  Award, 
  ExternalLink, 
  TrendingUp, 
  Zap, 
  Sparkles,
  ChevronRight,
  ArrowRight,
  BarChart3,
  BadgePercent,
  Check,
  ClipboardList,
  Fingerprint
} from 'lucide-react';

import { PricingPackage } from '../types';
import { SITE } from '../config/site';

interface HomePageProps {
  onSearchVin: (vin: string) => void;
  onOpenSticker: (vin: string) => void;
  setSelectedPackage: (pkg: PricingPackage | null) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSearchVin,
  onOpenSticker,
  setSelectedPackage,
}) => {
  const [selectedSampleVin, setSelectedSampleVin] = useState('WAUFFAFC5HN007408');

  // Exact sample vehicles as requested
  const sampleVehicles = [
    {
      vin: 'WAUFFAFC5HN007408',
      year: 2017,
      make: 'Audi',
      model: 'S6',
      exterior: 'Brilliant Black',
      interior: 'Black w/Valcona Leather Seating Surfaces',
      image: '/Thumbnail-1.webp',
      msrp: '$70,900',
      link: `${SITE.url}/sticker/vin/WAUFFAFC5HN007408-E323E323-C5C5-4A45-31B5-C95F9EB7CBEC`,
    },
    {
      vin: '1FTFW1RG6LFA12962',
      year: 2020,
      make: 'Ford',
      model: 'F-150',
      exterior: 'Agate Black Metallic',
      interior: 'Blue Accent w/Recaro Unique Leather Insert',
      image: '/Thumbnail-2.webp',
      msrp: '$56,440',
      link: `${SITE.url}/sticker/vin/1FTFW1RG6LFA12962-A839A839-4848-4C2A-64E7-90517C0A1DC1`,
    },
    {
      vin: 'W1N4N4HB1NJ342468',
      year: 2022,
      make: 'Mercedes-Benz',
      model: 'GLA 250',
      exterior: 'Digital White Metallic',
      interior: 'Titanium Gray/Black w/Leather Upholstery',
      image: '/Thumbnail-3.webp',
      msrp: '$38,400',
      link: `${SITE.url}/sticker/vin/W1N4N4HB1NJ342468-8F748F74-6D6D-2406-1E54-BD17CA2AD529`,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero & VIN Search Console */}
      <section className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[450px] bg-gradient-to-b from-blue-50/60 via-slate-50/40 to-transparent blur-3xl opacity-80" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* 2-Column Hero Layout: Text & Search Form on Left, Window Sticker Image Placeholder on Right */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Eyebrow, Title, Subtext, VIN Lookup Box */}
            <div className="lg:col-span-6 flex flex-col items-start text-left space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-slate-50 border border-slate-200 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-2xs">
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                <span>Original Factory Build Documentation</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-heading leading-[1.08]">
                Before You <span className="text-blue-600">Sell It</span>, Know What Makes It Yours
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                There could be valuable information about your vehicle that you don't know yet. Enter your VIN to uncover the original window sticker and build sheet information, including factory options, packages, and original MSRP. Know exactly what you're selling before you price it.
              </p>

              {/* VIN Lookup Card */}
              <div className="w-full pt-2">
                <VinLookupBox />
              </div>
            </div>

            {/* Right Column: Clean Photographic Vehicle Presentation */}
            <div className="lg:col-span-6 relative w-full">
              <div className="relative overflow-hidden sm:min-h-[380px] lg:min-h-[520px] h-full flex items-center justify-center">
                {/* Background Vehicle Image */}
                <img loading="lazy"
                  src="/window-sticker-hero.webp"
                  alt="Original Window Sticker and Build Sheet Preview"
                  className="w-full h-auto object-contain drop-shadow-2xl hover:scale-102 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Guarantee Badges Strip */}
          <div className="mt-12 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xs bg-slate-50 border border-slate-200 flex items-center justify-center gap-2.5 text-slate-950 text-xs sm:text-sm font-bold shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Factory-Verified Data</span>
            </div>
            <div className="p-3.5 rounded-xs bg-slate-50 border border-slate-200 flex items-center justify-center gap-2.5 text-slate-950 text-xs sm:text-sm font-bold shadow-2xs">
              <Clock className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Instant Delivery</span>
            </div>
            <div className="p-3.5 rounded-xs bg-slate-50 border border-slate-200 flex items-center justify-center gap-2.5 text-slate-950 text-xs sm:text-sm font-bold shadow-2xs">
              <Share2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>PDF &amp; Web Format</span>
            </div>
            <div className="p-3.5 rounded-xs bg-slate-50 border border-slate-200 flex items-center justify-center gap-2.5 text-slate-950 text-xs sm:text-sm font-bold shadow-2xs">
              <Search className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Any Make or Model</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Details Section (6 Grid Cards) */}
      <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-white border border-slate-200 text-slate-950 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              <span>What You'll Find on Every Window Sticker</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Discover Your Vehicle's Original Factory Build
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Every vehicle leaves the factory with a unique combination of equipment. A window sticker reveals exactly what your vehicle was built with, helping you understand its true original configuration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {/* 1. Standard Factory Features */}
            <div className="p-6 rounded-sm bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white transition-colors group flex flex-col justify-start h-full shadow-2xs">
              <div className="w-10 h-10 rounded-xs bg-slate-950 text-white flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">
                Original Equipment &amp; Specifications
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Confirm your engine type, transmission, drivetrain, and standard equipment. Documenting these details helps you build a highly accurate description for your listing.
              </p>
            </div>

            {/* 2. Optional Factory Equipment */}
            <div className="p-6 rounded-sm bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white transition-colors group flex flex-col justify-start h-full shadow-2xs">
              <div className="w-10 h-10 rounded-xs bg-slate-950 text-white flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors shrink-0">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">
                Factory Options &amp; Packages
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Did your vehicle come with a premium technology package, sport suspension, or upgraded interior? Uncovering these factory options helps you identify valuable features that make your vehicle stand out.
              </p>
            </div>

            {/* 3. MSRP & Invoice Price */}
            <div className="p-6 rounded-sm bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white transition-colors group flex flex-col justify-start h-full shadow-2xs">
              <div className="w-10 h-10 rounded-xs bg-slate-950 text-white flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors shrink-0">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">
                Original MSRP
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                See what the vehicle cost when it was brand new, including itemized pricing for optional equipment. This provides valuable context when deciding how to position your current asking price.
              </p>
            </div>

            {/* 6. Warranty Information */}
            <div className="p-6 rounded-sm bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white transition-colors group flex flex-col justify-start h-full shadow-2xs">
              <div className="w-10 h-10 rounded-xs bg-slate-950 text-white flex items-center justify-center mb-4 group-hover:bg-amber-600 transition-colors shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">
                  Safety &amp; Warranty Details
                </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Check original safety ratings and manufacturer warranty terms. If your vehicle still falls within transferable coverage periods, this is crucial information to know before you sell.
              </p>
            </div>
          {/* 4. Fuel Economy and Emissions */}
            <div className="p-6 rounded-sm bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white transition-colors group flex flex-col justify-start h-full shadow-2xs">
              <div className="w-10 h-10 rounded-xs bg-slate-950 text-white flex items-center justify-center mb-4 group-hover:bg-sky-600 transition-colors shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">
                  Original Specifications
                </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Review the official factory specifications, including exterior paint codes, interior trim details, and specific technical measurements as they were originally recorded.
              </p>
            </div>

            {/* 5. Safety & Ratings */}
            <div className="p-6 rounded-sm bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white transition-colors group flex flex-col justify-start h-full shadow-2xs">
              <div className="w-10 h-10 rounded-xs bg-slate-950 text-white flex items-center justify-center mb-4 group-hover:bg-rose-600 transition-colors shrink-0">
                  <Fuel className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">
                  Fuel &amp; Efficiency Ratings
                </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Access the original EPA ratings for city, highway, and combined MPG. This information is often requested and having the official numbers documented adds credibility to your listing.
              </p>
            </div>

            </div>
        </div>
      </section>

      {/* Sample Window Stickers Showcase */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-slate-50 border border-slate-200 text-slate-950 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              <span>Sample Build Documentation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              See the Information You Could Uncover
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Click any vehicle below to view a sample window sticker. See exactly what kind of original factory information you can discover about your own vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleVehicles.map((car) => (
              <div
                key={car.vin}
                className="bg-slate-900 text-white rounded-sm border border-slate-800 overflow-hidden shadow-lg flex flex-col justify-between hover:border-slate-700 transition-all group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-white">
                  <img loading="lazy"
                    src={car.image}
                    alt={`${car.year} ${car.make} ${car.model}`}
                    className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 space-y-3 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {car.year} {car.make} {car.model}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 mt-0.5">
                        VIN: {car.vin}
                      </p>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-blue-400 bg-slate-800/80 px-2.5 py-1 rounded-xs border border-slate-700 shrink-0">
                      MSRP {car.msrp}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-300 border-t border-slate-800/80 pt-3">
                    <p className="flex justify-between">
                      <span className="text-slate-400">Exterior:</span>
                      <span className="font-medium text-slate-200 text-right">{car.exterior}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-slate-400">Interior:</span>
                      <span className="font-medium text-slate-200 text-right">{car.interior}</span>
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-950 border-t border-slate-800">
                  <a
                    href={car.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xs bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 border border-slate-700 cursor-pointer"
                  >
                    <span>View Window Sticker</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classic & Older Vehicles Section */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-slate-900 to-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Classic &amp; Older Vehicle Documentation</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white text-center">
              Don't Leave Value on the Table
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed text-center">
              For older, enthusiast, and highly-optioned vehicles, original build information can be incredibly difficult to find. Many sellers list their vehicles without knowing exactly what factory equipment is installed, potentially leaving money on the table. A window sticker helps you confirm your vehicle's original configuration so you can price and present it accurately.
            </p>

            <div className="pt-4 border-t border-slate-800/80 max-w-2xl mx-auto text-center space-y-3">
              <p className="text-base sm:text-xl font-medium text-blue-200 leading-relaxed italic">
                &ldquo;You can't effectively price a vehicle if you don't know exactly what it was built with. Documentation is the key to understanding its true value.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seller Benefits Section (6 Benefit Cards) */}
      <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>For Vehicle Sellers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Why Invest in Your Vehicle's Documentation?
            </h2>
            <p className="mt-3 text-base sm:text-lg font-bold text-blue-700">
              The more you know about your vehicle, the better prepared you are to present its value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Show the Full Build */}
            <div className="p-6 rounded-sm bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xs bg-slate-100 border border-slate-200 text-slate-950 flex items-center justify-center mb-4 font-bold">
                <Search className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">
                Discover What You Own
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                You might be surprised by what your vehicle was originally equipped with. Uncover factory options, special packages, and specific trim details you may not have been aware of.
              </p>
            </div>

            {/* 2. Support Your Asking Price */}
            <div className="p-6 rounded-sm bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xs bg-slate-100 border border-slate-200 text-slate-950 flex items-center justify-center mb-4 font-bold">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">
                Price with Confidence
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When you understand exactly what your vehicle cost new and what options it includes, you have better information when deciding how to position your asking price in the current market.
              </p>
            </div>

            {/* 3. Stand Out from Other Listings */}
            <div className="p-6 rounded-sm bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xs bg-slate-100 border border-slate-200 text-slate-950 flex items-center justify-center mb-4 font-bold">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">
                Create a Better Listing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Move beyond a generic description. Use the exact factory terminology, package names, and specifications to write a detailed, compelling listing that attracts serious interest.
              </p>
            </div>

            {/* 4. Answer Buyer Questions Upfront */}
            <div className="p-6 rounded-sm bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xs bg-slate-100 border border-slate-200 text-slate-950 flex items-center justify-center mb-4 font-bold">
                <ClipboardList className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">
                Document the Details
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Have the original specifications in hand. Instead of guessing about engine codes or paint colors, you'll have the documented facts about your vehicle's factory configuration.
              </p>
            </div>

            {/* 5. Present Your Vehicle Professionally */}
            <div className="p-6 rounded-sm bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xs bg-slate-100 border border-slate-200 text-slate-950 flex items-center justify-center mb-4 font-bold">
                <Layers className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">
                Present a Complete Story
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A window sticker provides the foundation of your vehicle's history. By showing what it was from day one, you create a more professional and thorough presentation of your investment.
              </p>
            </div>

            {/* 6. Build Buyer Confidence */}
            <div className="p-6 rounded-sm bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xs bg-slate-100 border border-slate-200 text-slate-950 flex items-center justify-center mb-4 font-bold">
                <Fingerprint className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">
                Understand What Makes It Yours
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every factory build is a little different. Discover the specific combination of features that makes your particular vehicle unique before you pass it on to the next owner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PricingSection onSelectPackage={setSelectedPackage} />

      {/* CTA Footer Banner */}
      <section className="py-14 sm:py-20 bg-slate-950 text-white text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            What Was Your Vehicle Built With?
          </h2>
          <p className="text-base sm:text-xl text-slate-300">
            Enter your VIN to uncover its original factory window sticker.
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-8 py-4 rounded-xs bg-white text-slate-950 hover:bg-slate-100 font-bold uppercase tracking-wider text-xs shadow-xl transition-all hover:scale-102 cursor-pointer inline-flex items-center gap-2"
            >
              <span>Look Up Your Window Sticker</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
