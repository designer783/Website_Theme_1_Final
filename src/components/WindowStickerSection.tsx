import React from 'react';
import { 
  FileText, 
  Sparkles, 
  ExternalLink, 
  Check, 
  ShieldCheck, 
  Layers, 
  DollarSign, 
  Fuel, 
  Star, 
  TrendingUp, 
  Car,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { SAMPLE_REPORTS } from '../data/mockData';

interface WindowStickerSectionProps {
  onOpenSticker: (vin: string) => void;
  onNavigateStickerPage: () => void;
}

export const WindowStickerSection: React.FC<WindowStickerSectionProps> = ({
  onOpenSticker,
  onNavigateStickerPage,
}) => {
  // Feature the Chevrolet Equinox as the hero artifact
  const selectedVin = '5TFDW5F14FX419868';
  const vehicle = SAMPLE_REPORTS[selectedVin] || SAMPLE_REPORTS['5TFDW5F14FX419868'];
  const sticker = vehicle.windowStickerData!;

  return (
    <section className="py-16 sm:py-24 bg-slate-950 text-white overflow-hidden relative border-b border-slate-800">
      {/* Decorative Blueprint Grid Lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-slate-900 border border-slate-800 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 shadow-2xs w-fit">
              <Layers className="w-3.5 h-3.5" />
              <span>Original Factory Build Data</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-heading mb-6">
              Complete the Picture with a Window Sticker
            </h2>
            
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8">
              A vehicle history report tells you what happened over time. A window sticker tells you what the vehicle was from day one — its original factory configuration, options, MSRP, EPA ratings, and warranty terms. Together, they give you a complete understanding of the vehicle you're selling. For older and enthusiast vehicles, this original build information can be especially difficult to find on your own.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                type="button"
                onClick={onNavigateStickerPage}
                className="cursor-pointer px-6 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold uppercase tracking-wider shadow-lg shadow-blue-500/30 transition-all flex items-center gap-3 hover:-translate-y-0.5"
              >
                <FileText className="w-5 h-5" />
                <span>Get Your Window Sticker</span>
                <ExternalLink className="w-4 h-4 text-blue-200" />
              </button>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-2xl overflow-x-auto sm:overflow-visible">
              <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-3xl -z-10 group-hover:bg-blue-500/20 transition-all duration-500" />
              <img loading="lazy"
                src="/Classic%20Vehicle.webp"
                alt="Classic Vehicle Window Sticker"
                className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
