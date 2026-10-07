import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  Search, 
  Filter, 
  ShieldCheck, 
  Wrench, 
  Layers, 
  FileText,
  Calendar,
  MapPin,
  Barcode,
  Info
} from 'lucide-react';
import { BuildSheetDetails } from '../types';
import { SITE } from '../config/site';

interface InteractiveBuildSheetModalProps {
  buildSheet: BuildSheetDetails;
  onClose: () => void;
  onOpenSticker?: (vin: string) => void;
}

export const InteractiveBuildSheetModal: React.FC<InteractiveBuildSheetModalProps> = ({
  buildSheet,
  onClose,
  onOpenSticker,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedCodes, setCopiedCodes] = useState(false);

  const categories = ['All', 'Powertrain', 'Exterior', 'Interior', 'Safety', 'Infotainment', 'Packages', 'Chassis'];

  const filteredRpoCodes = buildSheet.rpoCodes.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = 
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handlePrint = () => {
    window.print();
  };

  const handleCopyCodes = () => {
    const text = buildSheet.rpoCodes.map((r) => `${r.code} - ${r.description} (${r.type})`).join('\n');
    navigator.clipboard?.writeText(text);
    setCopiedCodes(true);
    setTimeout(() => setCopiedCodes(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-start justify-center p-2 sm:p-6 md:p-8 animate-in fade-in duration-200">
      <div className="w-full max-w-5xl my-4 sm:my-6 text-slate-900">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between bg-slate-900 text-white px-5 py-3 rounded-t-2xl border-t border-x border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Wrench className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-400 block">
                Official OEM Factory Broadcast
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white font-mono">
                {SITE.name} • VIN: {buildSheet.vin}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onOpenSticker && (
              <button
                onClick={() => onOpenSticker(buildSheet.vin)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-blue-300 border border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer hidden sm:flex"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>View Monroney Sticker</span>
              </button>
            )}
            <button
              onClick={handleCopyCodes}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copy all RPO equipment codes"
            >
              {copiedCodes ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedCodes ? 'Copied!' : 'Copy Codes'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer ml-1"
              aria-label="Close build sheet"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Authentic Digital Build Sheet Document */}
        <div className="bg-white border-2 border-slate-900 rounded-b-2xl p-5 sm:p-8 shadow-2xl space-y-6">
          
          {/* Header Watermark & Factory Details */}
          <div className="border-b-2 border-slate-900 pb-5">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-900 text-white font-mono text-[10px] font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  OEM Factory Production Record
                </div>
                <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950 font-heading uppercase">
                  {buildSheet.year} {buildSheet.make} {buildSheet.model}
                </h1>
                <p className="text-sm font-semibold text-slate-600">
                  Trim / Package: <span className="text-slate-900 font-bold">{buildSheet.trim}</span>
                </p>
              </div>

              <div className="text-left md:text-right font-mono bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span className="text-[11px] font-bold text-slate-500 block uppercase">
                  VIN (Vehicle Identification Number)
                </span>
                <span className="text-base sm:text-lg font-bold tracking-widest text-blue-700 block font-mono mt-0.5">
                  {buildSheet.vin}
                </span>
                <span className="text-[10px] text-slate-500 block mt-1">
                  Sequence #: <span className="font-bold text-slate-800">{buildSheet.sequenceNumber}</span> • Order #: <span className="font-bold text-slate-800">{buildSheet.orderNumber}</span>
                </span>
              </div>
            </div>

            {/* Grid of Factory Build Specifications */}
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs font-mono">
              <div>
                <span className="text-slate-500 text-[10px] block uppercase">Assembly Plant</span>
                <span className="font-bold text-slate-900 block truncate" title={buildSheet.assemblyPlant}>
                  {buildSheet.plantCode} - {buildSheet.assemblyPlant}
                </span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block uppercase">Build Date</span>
                <span className="font-bold text-slate-900 block">{buildSheet.buildDate}</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block uppercase">Paint Code & Name</span>
                <span className="font-bold text-slate-900 block truncate" title={`${buildSheet.paintCode} ${buildSheet.paintName}`}>
                  {buildSheet.paintCode} ({buildSheet.paintName})
                </span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block uppercase">Interior Trim</span>
                <span className="font-bold text-slate-900 block truncate" title={`${buildSheet.interiorCode} ${buildSheet.interiorName}`}>
                  {buildSheet.interiorCode} ({buildSheet.interiorName})
                </span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block uppercase">Engine Code</span>
                <span className="font-bold text-slate-900 block">{buildSheet.engineCode}</span>
              </div>
              <div>
                <span className="text-slate-500 text-[10px] block uppercase">Transmission</span>
                <span className="font-bold text-slate-900 block">{buildSheet.transmissionCode}</span>
              </div>
            </div>
          </div>

          {/* Search and Category Filter Toolbar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Live Filter Input */}
            <div className="relative min-w-[220px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search codes or options..."
                className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg border border-slate-300 focus:border-blue-600 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* RPO / Equipment Codes Table */}
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <div className="max-h-[420px] overflow-y-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead className="bg-slate-900 text-white font-mono sticky top-0 z-10">
                  <tr>
                    <th className="py-2.5 px-4 font-bold tracking-wider uppercase text-[11px] w-28">Code</th>
                    <th className="py-2.5 px-4 font-bold tracking-wider uppercase text-[11px] w-32">Category</th>
                    <th className="py-2.5 px-4 font-bold tracking-wider uppercase text-[11px]">Factory Description</th>
                    <th className="py-2.5 px-4 font-bold tracking-wider uppercase text-[11px] w-28 text-center">Status</th>
                    <th className="py-2.5 px-4 font-bold tracking-wider uppercase text-[11px] w-24 text-right">MSRP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans">
                  {filteredRpoCodes.length > 0 ? (
                    filteredRpoCodes.map((item, idx) => (
                      <tr 
                        key={idx} 
                        className={`hover:bg-blue-50/50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}`}
                      >
                        <td className="py-2.5 px-4 font-mono font-bold text-blue-700">{item.code}</td>
                        <td className="py-2.5 px-4 text-slate-500 font-medium">{item.category}</td>
                        <td className="py-2.5 px-4 font-semibold text-slate-900">{item.description}</td>
                        <td className="py-2.5 px-4 text-center">
                          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                            item.type === 'Optional' 
                              ? 'bg-amber-100 text-amber-800' 
                              : item.type === 'Package'
                              ? 'bg-purple-100 text-purple-800'
                              : 'bg-slate-100 text-slate-700'
                          }`}>
                            {item.type}
                          </span>
                        </td>
                        <td className="py-2.5 px-4 text-right font-mono font-bold text-slate-900">
                          {item.price ? `$${item.price.toLocaleString()}` : 'Included'}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-slate-500">
                        No equipment codes matching "{searchQuery}" in category "{selectedCategory}".
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-500 font-mono">
              <span>Showing {filteredRpoCodes.length} of {buildSheet.rpoCodes.length} factory equipment codes</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Verified OEM Production Archive
              </span>
            </div>
          </div>

          {/* Footer Official Seal & Notes */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center font-black text-slate-700 text-xs">
                OEM
              </div>
              <div>
                <p className="font-bold text-slate-800">Certified {SITE.name} Document</p>
                <p className="text-[11px]">Decoded directly from manufacturer assembly line broadcast databases.</p>
              </div>
            </div>

            <div className="text-center sm:text-right font-mono text-[11px]">
              <span>Issued: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              <span className="block text-slate-400">Record ID: DBS-{buildSheet.vin.slice(-6)}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
