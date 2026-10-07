import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Fuel, 
  Star, 
  ShieldCheck, 
  QrCode, 
  FileCheck,
  Check
} from 'lucide-react';
import { WindowStickerData } from '../types';
import { SITE } from '../config/site';

interface InteractiveStickerModalProps {
  sticker: WindowStickerData;
  onClose: () => void;
}

export const InteractiveStickerModal: React.FC<InteractiveStickerModalProps> = ({
  sticker,
  onClose,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-start justify-center p-2 sm:p-6 md:p-8 animate-in fade-in duration-200">
      <div className="w-full max-w-5xl my-4 sm:my-6">
        {/* Actions Bar */}
        <div className="flex items-center justify-between bg-slate-900 text-white px-5 py-3 rounded-t-2xl border-t border-x border-slate-700">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-slate-200">
              Monroney Window Sticker Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close sticker"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Authentic Monroney Document Body */}
        <div className="bg-white border-2 border-slate-900 rounded-b-2xl p-4 sm:p-8 shadow-2xl text-slate-900 font-sans space-y-6">
          {/* Sticker Header */}
          <div className="border-b-2 border-slate-900 pb-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-2xl sm:text-4xl font-black tracking-widest text-slate-950 font-sans uppercase">
                  {sticker.make}
                </span>
                <p className="text-sm sm:text-base font-bold text-slate-700 mt-0.5">
                  {sticker.year} {sticker.model} {sticker.trim}
                </p>
              </div>

              <div className="text-left sm:text-right font-mono">
                <span className="text-xs font-bold text-slate-500 block uppercase">
                  Vehicle Identification Number (VIN)
                </span>
                <span className="text-base sm:text-xl font-bold tracking-wider text-slate-950 bg-slate-100 px-3 py-1 rounded border border-slate-300 inline-block mt-0.5">
                  {sticker.vin}
                </span>
              </div>
            </div>

            {/* Colors & Engine Spec Strip */}
            <div className="mt-4 pt-3 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
              <div>
                <span className="text-slate-500 block">Exterior:</span>
                <span className="font-bold text-slate-900">{sticker.exteriorColor}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Interior:</span>
                <span className="font-bold text-slate-900">{sticker.interiorColor}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Engine:</span>
                <span className="font-bold text-slate-900">{sticker.engine}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Transmission:</span>
                <span className="font-bold text-slate-900">{sticker.transmission}</span>
              </div>
            </div>
          </div>

          {/* 3-Column Monroney Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start text-xs">
            {/* Column 1: Standard Features (4 cols) */}
            <div className="md:col-span-4 border border-slate-300 rounded-xl p-4 bg-slate-50/50 space-y-4">
              <div className="border-b border-slate-300 pb-2">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs">
                  Standard Equipment
                </h4>
                <span className="text-[11px] text-slate-500">Included at No Extra Charge</span>
              </div>

              {sticker.standardFeatures.map((cat, idx) => (
                <div key={idx} className="space-y-1">
                  <h5 className="font-bold text-slate-800 uppercase text-[11px]">{cat.category}</h5>
                  <ul className="space-y-0.5 text-slate-600">
                    {cat.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-1.5">
                        <span className="text-slate-400">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Column 2: Optional Equipment & Packages (4 cols) */}
            <div className="md:col-span-4 border border-slate-300 rounded-xl p-4 bg-slate-50/50 space-y-4">
              <div className="border-b border-slate-300 pb-2 flex items-center justify-between">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs">
                  Optional Equipment
                </h4>
                <span className="text-[11px] font-mono font-bold text-blue-700">Itemized</span>
              </div>

              <div className="space-y-2">
                {sticker.optionalEquipment.map((opt, idx) => (
                  <div key={idx} className="flex justify-between items-start gap-2 border-b border-slate-200 pb-1.5">
                    <div>
                      <span className="font-bold text-slate-900 block">{opt.name}</span>
                      {opt.code && (
                        <span className="text-[10px] font-mono text-slate-500 block">Code: {opt.code}</span>
                      )}
                    </div>
                    <span className="font-mono font-bold text-slate-900 shrink-0">
                      ${opt.price.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex justify-between font-bold text-slate-900">
                <span>Total Options:</span>
                <span className="font-mono">${sticker.totalOptionsPrice.toLocaleString()}</span>
              </div>
            </div>

            {/* Column 3: EPA & Financial Breakdown (4 cols) */}
            <div className="md:col-span-4 space-y-4">
              {/* Financial Box */}
              <div className="border-2 border-slate-900 rounded-xl p-4 bg-slate-100 space-y-2.5">
                <h4 className="font-black text-slate-900 uppercase tracking-wider text-xs border-b border-slate-300 pb-1">
                  Manufacturer's Suggested Retail Price
                </h4>
                <div className="space-y-1 font-mono text-slate-700 text-xs">
                  <div className="flex justify-between">
                    <span>Base Price:</span>
                    <span>${sticker.basePrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Options:</span>
                    <span>${sticker.totalOptionsPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Destination & Handling:</span>
                    <span>${sticker.destinationCharge.toLocaleString()}</span>
                  </div>
                </div>

                <div className="pt-2 border-t-2 border-slate-900 flex justify-between items-baseline">
                  <span className="font-black text-slate-950 uppercase text-xs">
                    Total MSRP:
                  </span>
                  <span className="text-xl font-black text-slate-950 font-mono">
                    ${sticker.totalMSRP.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* EPA Fuel Economy Box */}
              <div className="border-2 border-emerald-800 rounded-xl p-3 bg-emerald-50/40 space-y-2">
                <div className="flex justify-between items-center border-b border-emerald-800 pb-1.5">
                  <span className="font-black text-emerald-950 uppercase flex items-center gap-1 text-xs">
                    <Fuel className="w-4 h-4 text-emerald-800" />
                    EPA Fuel Economy
                  </span>
                  <span className="font-mono font-bold text-emerald-900 text-sm">
                    {sticker.fuelEconomy.combinedMpg} MPG
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="p-2 bg-white rounded border border-emerald-700">
                    <span className="text-[10px] text-slate-500 block">City</span>
                    <span className="font-mono font-bold text-slate-900">{sticker.fuelEconomy.cityMpg} MPG</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-emerald-700">
                    <span className="text-[10px] text-slate-500 block">Highway</span>
                    <span className="font-mono font-bold text-slate-900">{sticker.fuelEconomy.highwayMpg} MPG</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 text-center">
                  Annual Fuel Cost: ~${sticker.fuelEconomy.annualFuelCost}
                </p>
              </div>

              {/* Government Safety Box */}
              <div className="border border-slate-300 rounded-xl p-3 bg-slate-50 space-y-1">
                <span className="font-bold text-slate-900 block text-xs">
                  Government 5-Star Safety Ratings
                </span>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600">Overall Vehicle:</span>
                  <span className="text-amber-500 tracking-widest font-bold">
                    {'★'.repeat(sticker.safetyRatings.overall || 5)}
                  </span>
                </div>
                <p className="text-[10px] text-slate-400">
                  Source: National Highway Traffic Safety Administration (NHTSA).
                </p>
              </div>
            </div>
          </div>

          {/* Barcode & Footer Authentication */}
          <div className="pt-4 border-t-2 border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            {/* Visual Barcode */}
            <div className="flex flex-col items-start gap-1">
              <div className="h-9 w-64 bg-slate-900 flex items-center justify-center text-[9px] font-mono text-white tracking-[6px] select-none">
                ||||| | |||||| || | |||| | ||||| |||||||
              </div>
              <span className="font-mono text-[10px] text-slate-600 tracking-wider">
                *{sticker.vin}*
              </span>
            </div>

            <div className="text-center sm:text-right">
              <span className="font-bold text-slate-900 block text-xs">
                Authentic Monroney Build Sheet Document
              </span>
              <span className="text-[11px] text-slate-500">
                Official {SITE.name} Registry • Assembled under 15 U.S.C. §§ 1231-1233
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
