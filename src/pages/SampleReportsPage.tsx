import React, { useState } from 'react';
import { SAMPLE_REPORTS } from '../data/mockData';
import { 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  Gauge, 
  TrendingUp,
  ArrowRight,
  Printer,
  Wrench,
  ChevronDown,
  Car
} from 'lucide-react';
import { SITE } from '../config/site';

interface SampleReportsPageProps {
  onOpenReport: (vin: string) => void;
  onOpenSticker: (vin: string) => void;
  onOpenBuildSheet?: (vin: string) => void;
}

export const SampleReportsPage: React.FC<SampleReportsPageProps> = ({
  onOpenReport,
  onOpenSticker,
  onOpenBuildSheet,
}) => {
  const [activeVin, setActiveVin] = useState('2T1BURHE0FC320645');
  const report = SAMPLE_REPORTS[activeVin];

  return (
    <div className="py-10 sm:py-16 bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-slate-50 border border-slate-200 text-slate-950 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            <span>Live Certified Database Examples</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Sample Vehicle History Reports & Window Stickers
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            See exactly what is included in a {SITE.name} vehicle history report and build sheet. Explore real data decoded from NMVTIS, 50-state DMVs, police accident logs, and factory build sheets.
          </p>
        </div>

        {/* Highlighted Vehicle Selection Station */}
        <div className="bg-slate-950 text-white rounded-sm p-4 sm:p-5 border border-slate-800 shadow-xl relative overflow-hidden space-y-3">
          {/* Subtle atmospheric ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Heading Text */}
          <h3 className="relative z-10 text-base sm:text-lg font-bold text-white tracking-tight">
            Select a Sample Vehicle Record or Window Sticker to Inspect
          </h3>

          {/* Dropdown Registry Picker */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <Car className="w-4 h-4 text-blue-400" />
              </div>
              <select
                id="sample-vehicle-dropdown"
                aria-label="Choose vehicle record"
                value={activeVin}
                onChange={(e) => setActiveVin(e.target.value)}
                className="w-full pl-10 pr-10 py-3 bg-slate-900 hover:bg-slate-850 focus:bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-xs text-white text-sm font-semibold shadow-inner focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer appearance-none transition-colors"
              >
                {Object.values(SAMPLE_REPORTS).map((sample) => (
                  <option key={sample.vin} value={sample.vin} className="py-2 text-slate-900 bg-white font-medium">
                    {sample.year} {sample.make} {sample.model} ({sample.trim}) — VIN: {sample.vin}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400">
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Active Sample Card */}
        <div className="bg-slate-50 rounded-sm p-6 sm:p-10 border border-slate-200 shadow-2xs space-y-8">
          {/* Header Summary */}
          <div className="flex flex-col space-y-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="px-2.5 py-0.5 bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold uppercase tracking-wider text-[10px] rounded-xs">
                  {report.titleStatus} Title
                </span>
                <span className="px-2.5 py-0.5 bg-blue-50 border border-blue-200 text-blue-700 font-bold uppercase tracking-wider text-[10px] rounded-xs">
                  {report.accidentsCount === 0 ? '0 Accidents' : `${report.accidentsCount} Incident`}
                </span>
                <span className="font-mono text-xs text-slate-500 font-semibold">VIN: {report.vin}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                {report.year} {report.make} {report.model} {report.trim}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {report.engine} • {report.transmission} • {report.drivetrain} • {report.bodyStyle}
              </p>
            </div>

            {/* Buttons row */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                id="btn-open-full-sample-modal"
                onClick={() => {
                  if (report.vin === '2T1BURHE0FC320645') {
                    window.open(`${SITE.url}/report/vin/2T1BURHE0FC320645`, '_blank', 'noopener,noreferrer');
                  } else if (report.vin === '1HGFA15547L116880') {
                    window.open(`${SITE.url}/report/vin/1HGFA15547L116880`, '_blank', 'noopener,noreferrer');
                  } else if (report.vin === 'WDDGF5EB3BR183192') {
                    window.open(`${SITE.url}/report/vin/WDDGF5EB3BR183192`, '_blank', 'noopener,noreferrer');
                  } else if (report.vin === '5TFDW5F14FX419868') {
                    window.open(`${SITE.url}/report/vin/5TFDW5F14FX419868`, '_blank', 'noopener,noreferrer');
                  } else {
                    onOpenReport(report.vin);
                  }
                }}
                className="w-full px-5 py-3.5 rounded-xs bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider shadow-xs inline-flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="whitespace-nowrap">View Sample Report</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </button>

              {onOpenBuildSheet && (
                <button
                  id="btn-open-buildsheet-sample-modal"
                  onClick={() => {
                    if (report.vin === '2T1BURHE0FC320645') {
                      window.open(`${SITE.url}/sticker/vin/2T1BURHE0FC320645-D545D545-6F6F-920B-CEEB-88FEC90D8B36`, '_blank', 'noopener,noreferrer');
                    } else if (report.vin === '1HGFA15547L116880') {
                      window.open(`${SITE.url}/sticker/vin/1HGFA15547L116880-70107010-CFCF-D86C-D3E3-5D29064203B9`, '_blank', 'noopener,noreferrer');
                    } else if (report.vin === 'WDDGF5EB3BR183192') {
                      window.open(`${SITE.url}/sticker/vin/WDDGF5EB3BR183192-6CBF6CBF-CCCC-7022-B733-E2EF76995F78`, '_blank', 'noopener,noreferrer');
                    } else if (report.vin === '5TFDW5F14FX419868') {
                      window.open(`${SITE.url}/sticker/vin/5TFDW5F14FX419868-BD26BD26-FFFF-4837-5594-FBFA9E6E4E3A`, '_blank', 'noopener,noreferrer');
                    } else {
                      onOpenBuildSheet(report.vin);
                    }
                  }}
                  className="w-full px-5 py-3.5 rounded-xs bg-white border border-slate-300 hover:bg-slate-100 text-slate-950 text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs whitespace-nowrap"
                >
                  <Wrench className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="whitespace-nowrap">View {SITE.name}</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-sm border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">Owners</span>
              <span className="text-xl font-extrabold text-slate-950">{report.ownersCount} Personal</span>
            </div>
            <div className="bg-white p-4 rounded-sm border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">Accidents</span>
              <span className="text-xl font-extrabold text-emerald-600">{report.accidentsCount} Reported</span>
            </div>
            <div className="bg-white p-4 rounded-sm border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">Odometer</span>
              <span className="text-xl font-extrabold text-slate-950 font-mono">{report.mileage.toLocaleString()} mi</span>
            </div>
            <div className="bg-white p-4 rounded-sm border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">Private Party Market</span>
              <span className="text-xl font-extrabold text-blue-600 font-mono">${report.currentMarketValue.privateParty.toLocaleString()}</span>
            </div>
          </div>

          {/* Timeline & Brands Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Timeline */}
            <div className="bg-white p-6 rounded-sm border border-slate-200 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-100 pb-2">
                Ownership Progression Timeline
              </h3>
              <div className="space-y-3 text-xs">
                {report.ownershipTimeline.map((o) => (
                  <div key={o.ownerNumber} className="p-3 bg-slate-50 rounded-xs border border-slate-200 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-slate-950 block">Owner #{o.ownerNumber} • {o.usageType}</span>
                      <span className="text-slate-500 text-[11px]">{o.location} • {o.duration}</span>
                    </div>
                    <span className="font-mono text-slate-950 font-bold">{o.yearPurchased} - {o.yearEnded}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Title Brands */}
            <div className="bg-white p-6 rounded-sm border border-slate-200 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-100 pb-2">
                50-State Title Brands Check
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                {report.titleBrands.map((b, i) => (
                  <div key={i} className="p-2.5 bg-slate-50 hover:bg-slate-100/80 transition-colors rounded-xs border border-slate-200 flex items-center justify-between gap-2 shadow-2xs">
                    <span className="text-slate-700 font-semibold truncate" title={b.name}>{b.name}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-xs shrink-0 whitespace-nowrap flex items-center gap-1 ${
                      b.passed 
                        ? 'text-emerald-700 bg-emerald-50 border border-emerald-200' 
                        : 'text-rose-700 bg-rose-50 border border-rose-200'
                    }`}>
                      {b.passed && <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600 shrink-0" />}
                      <span>{b.passed ? 'PASSED' : 'FLAGGED'}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
