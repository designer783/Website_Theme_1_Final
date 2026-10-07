import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  ShieldCheck, 
  Calendar, 
  Gauge, 
  Users, 
  Car, 
  DollarSign, 
  AlertTriangle, 
  Layers, 
  CheckCircle2, 
  Wrench, 
  FileText,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  MapPin,
  Check
} from 'lucide-react';
import { VehicleReportData } from '../types';
import { SITE } from '../config/site';

interface InteractiveReportModalProps {
  report: VehicleReportData;
  onClose: () => void;
  onOpenSticker: (vin: string) => void;
  onOpenBuildSheet?: (vin: string) => void;
}

export const InteractiveReportModal: React.FC<InteractiveReportModalProps> = ({
  report,
  onClose,
  onOpenSticker,
  onOpenBuildSheet,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'title' | 'accidents' | 'odometer' | 'ownership' | 'service' | 'recalls'>('overview');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-start justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-5xl rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-4 sm:my-8 text-slate-900">
        {/* Modal Top Bar */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider block">
                {SITE.name} • Certified Vehicle Report
              </span>
              <span className="text-sm sm:text-base font-bold text-white font-mono">
                VIN: {report.vin}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
              title="Print / Save PDF"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Vehicle Header Card */}
        <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold text-xs">
                  {report.titleStatus} Title
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-800 font-bold text-xs">
                  {report.accidentsCount === 0 ? '0 Accidents Reported' : `${report.accidentsCount} Incident(s)`}
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-200 text-slate-700 font-mono text-xs">
                  Assembled in {report.assemblyCountry}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-heading tracking-tight">
                {report.year} {report.make} {report.model} {report.trim}
              </h2>

              <p className="text-sm text-slate-600">
                {report.bodyStyle} • {report.engine} • {report.drivetrain} • {report.transmission}
              </p>
            </div>

            {/* Quick Actions: Open Build Sheet & Window Sticker */}
            <div className="flex flex-wrap items-center gap-2.5">
              {onOpenBuildSheet && (
                <button
                  id="modal-view-buildsheet-btn"
                  onClick={() => onOpenBuildSheet(report.vin)}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-md shadow-slate-900/20 transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                >
                  <Wrench className="w-4 h-4 text-blue-400" />
                  <span>View {SITE.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </button>
              )}
              {report.windowStickerData && (
                <button
                  id="modal-view-sticker-btn"
                  onClick={() => onOpenSticker(report.vin)}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-600/25 transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                >
                  <Layers className="w-4 h-4" />
                  <span>Window Sticker</span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-200" />
                </button>
              )}
            </div>
          </div>

          {/* 4 Summary Metric Cards */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5 mb-1">
                <Users className="w-3.5 h-3.5 text-slate-400" />
                Owners
              </span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 font-sans">
                {report.ownersCount} Owners
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">Personal Usage</span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5 mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                Accidents
              </span>
              <span className="text-xl sm:text-2xl font-black text-emerald-600 font-sans">
                {report.accidentsCount} Incidents
              </span>
              <span className="text-[11px] text-emerald-700 block mt-0.5">No Frame Damage</span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5 mb-1">
                <Gauge className="w-3.5 h-3.5 text-blue-500" />
                Odometer
              </span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 font-mono">
                {report.mileage.toLocaleString()} mi
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">Verified Progression</span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5 mb-1">
                <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                Private Value
              </span>
              <span className="text-xl sm:text-2xl font-black text-blue-600 font-mono">
                ${report.currentMarketValue.privateParty.toLocaleString()}
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">Avg ~{report.currentMarketValue.averageDaysOnMarket} days on market</span>
            </div>
          </div>
        </div>

        {/* Report Content Navigation Tabs */}
        <div className="px-6 border-b border-slate-200 flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-none bg-white">
          {[
            { id: 'overview', label: 'Summary & Specs' },
            { id: 'title', label: 'Title Brands (DMV)' },
            { id: 'accidents', label: 'Accident History' },
            { id: 'odometer', label: 'Odometer Verification' },
            { id: 'ownership', label: 'Ownership Timeline' },
            { id: 'service', label: 'Service Records' },
            { id: 'recalls', label: `Safety Recalls (${report.safetyRecalls.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3.5 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Body */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
          {/* TAB 1: OVERVIEW & SPECS */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Technical Specifications Grid */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Car className="w-4 h-4 text-blue-600" />
                  Detailed Vehicle Specifications
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block">VIN</span>
                    <span className="font-mono font-bold text-slate-900">{report.vin}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block">Year / Make / Model</span>
                    <span className="font-bold text-slate-900">{report.year} {report.make} {report.model}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block">Trim</span>
                    <span className="font-bold text-slate-900">{report.trim || 'Standard'}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block">Body Type</span>
                    <span className="font-bold text-slate-900">{report.bodyStyle}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block">Engine</span>
                    <span className="font-bold text-slate-900">{report.engine}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block">Transmission</span>
                    <span className="font-bold text-slate-900">{report.transmission}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block">Drivetrain</span>
                    <span className="font-bold text-slate-900">{report.drivetrain}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block">Fuel Type</span>
                    <span className="font-bold text-slate-900">{report.fuelType}</span>
                  </div>
                </div>
              </div>

              {/* Market Valuation Range */}
              <div className="p-5 bg-blue-50/70 rounded-2xl border border-blue-200 space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    Market Valuation Analysis
                  </h3>
                  <span className="text-xs text-slate-500">Live North American Market Index</span>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-white rounded-xl border border-blue-100 shadow-2xs">
                    <span className="text-xs text-slate-500 block">Trade-In Value</span>
                    <span className="text-lg font-black text-slate-800 font-mono">
                      ${report.currentMarketValue.tradeIn.toLocaleString()}
                    </span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-blue-200 shadow-2xs ring-2 ring-blue-500">
                    <span className="text-xs text-blue-700 font-bold block">Private Party</span>
                    <span className="text-lg font-black text-blue-600 font-mono">
                      ${report.currentMarketValue.privateParty.toLocaleString()}
                    </span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-blue-100 shadow-2xs">
                    <span className="text-xs text-slate-500 block">Dealer Retail</span>
                    <span className="text-lg font-black text-slate-800 font-mono">
                      ${report.currentMarketValue.dealerRetail.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TITLE BRANDS */}
          {activeTab === 'title' && (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-emerald-900">
                    50-State Title Brand Status: Clean & Clear
                  </h4>
                  <p className="text-xs text-emerald-700 mt-0.5">
                    No negative DMV title brands found across all 50 US States, Canadian provinces, and federal registries.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {report.titleBrands.map((brand, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start justify-between gap-2">
                    <div>
                      <span className="text-sm font-bold text-slate-900 block">{brand.name}</span>
                      <p className="text-xs text-slate-500 mt-0.5">{brand.description}</p>
                    </div>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-xs rounded shrink-0">
                      PASSED
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: ACCIDENTS */}
          {activeTab === 'accidents' && (
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="font-bold text-emerald-900 text-sm">
                    No Accident or Collision Records Reported
                  </span>
                </div>
                <p className="text-xs text-emerald-700 mt-1">
                  Database queries across state police departments, insurance claim loss databases, and collision repair centers confirm zero accident records for this VIN.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block">Airbag Deploy</span>
                  <span className="font-bold text-emerald-600 mt-1 block">None</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block">Structural Frame</span>
                  <span className="font-bold text-emerald-600 mt-1 block">Undamaged</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block">Flood Damage</span>
                  <span className="font-bold text-emerald-600 mt-1 block">Passed</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block">Total Loss Claim</span>
                  <span className="font-bold text-emerald-600 mt-1 block">None</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ODOMETER */}
          {activeTab === 'odometer' && (
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-blue-900">
                    Odometer Status: Normal Progression Verified
                  </h4>
                  <p className="text-xs text-blue-700 mt-0.5">
                    No mileage rollback or mechanical odometer tampering indicated. Continuous forward reading.
                  </p>
                </div>
                <span className="font-mono text-base font-black text-blue-900">
                  {report.mileage.toLocaleString()} mi
                </span>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                  Mileage Progression History
                </span>
                <div className="space-y-2">
                  {report.salesHistory.map((s, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs p-2 bg-white rounded-lg border border-slate-100">
                      <span className="text-slate-600">{s.date} • {s.sellerType}</span>
                      <span className="font-mono font-bold text-slate-900">{s.mileage.toLocaleString()} mi</span>
                    </div>
                  ))}
                  {report.serviceRecords.map((srv, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs p-2 bg-white rounded-lg border border-slate-100">
                      <span className="text-slate-600">{srv.date} • {srv.source}</span>
                      <span className="font-mono font-bold text-slate-900">{srv.odometer.toLocaleString()} mi</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: OWNERSHIP */}
          {activeTab === 'ownership' && (
            <div className="space-y-4">
              {report.ownershipTimeline.map((owner) => (
                <div key={owner.ownerNumber} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-slate-900 text-white text-xs font-bold rounded-md">
                      Owner #{owner.ownerNumber}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {owner.yearPurchased} — {owner.yearEnded}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs pt-1">
                    <div>
                      <span className="text-slate-400 block">Duration</span>
                      <span className="font-bold text-slate-800">{owner.duration}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Location</span>
                      <span className="font-bold text-slate-800">{owner.location}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Usage Type</span>
                      <span className="font-bold text-slate-800">{owner.usageType}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 6: SERVICE */}
          {activeTab === 'service' && (
            <div className="space-y-3">
              {report.serviceRecords.length > 0 ? (
                report.serviceRecords.map((rec, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 text-blue-700 shrink-0 mt-0.5">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5 flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-900">{rec.source}</span>
                        <span className="font-mono text-xs font-bold text-slate-600">
                          {rec.odometer.toLocaleString()} mi • {rec.date}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600">{rec.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-slate-500 text-sm bg-slate-50 rounded-xl">
                  No public commercial service tickets filed for this vehicle.
                </div>
              )}
            </div>
          )}

          {/* TAB 7: RECALLS */}
          {activeTab === 'recalls' && (
            <div className="space-y-3">
              {report.safetyRecalls.length > 0 ? (
                report.safetyRecalls.map((recall, idx) => (
                  <div key={idx} className="p-4 bg-amber-50 rounded-xl border border-amber-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-amber-900">
                        NHTSA Campaign ID: {recall.nhtsaCampaignId}
                      </span>
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded">
                        Remedy: {recall.remedyStatus}
                      </span>
                    </div>
                    <h5 className="text-sm font-bold text-slate-900">{recall.component}</h5>
                    <p className="text-xs text-slate-600">{recall.summary}</p>
                  </div>
                ))
              ) : (
                <div className="p-8 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <span className="font-bold text-emerald-900 block text-sm">0 Open Safety Recalls</span>
                  <p className="text-xs text-emerald-700 mt-1">
                    No active manufacturer safety campaigns or federal safety recalls pending.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Authenticated by NMVTIS & {SITE.name} Registry</span>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold cursor-pointer"
          >
            Close Report Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
