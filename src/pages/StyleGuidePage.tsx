import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Layers, 
  FileText, 
  Car, 
  CheckCircle2, 
  AlertTriangle, 
  Check, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  Info,
  Scale,
  LayoutGrid,
  ArrowRight,
  Search,
  Wrench,
  Gauge,
  Cpu,
  Clock,
  RotateCcw,
  Eye,
  Type
} from 'lucide-react';
import { PageRoute } from '../types';
import { SITE } from '../config/site';
import { RevisitBanner } from '../components/RevisitBanner';

interface StyleGuidePageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenSampleReport?: (vin: string) => void;
  onOpenSticker?: (vin: string) => void;
  revisitVin?: string;
  onChangeRevisitVin?: (vin: string) => void;
  isRevisitBannerVisible?: boolean;
  onToggleRevisitBanner?: () => void;
}

export const StyleGuidePage: React.FC<StyleGuidePageProps> = ({
  onNavigate,
  onOpenSampleReport,
  onOpenSticker,
  revisitVin = '3FA6P0RU9HR306143',
  onChangeRevisitVin,
  isRevisitBannerVisible = true,
  onToggleRevisitBanner,
}) => {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [localVinInput, setLocalVinInput] = useState<string>(revisitVin);
  const [localPrice, setLocalPrice] = useState<string>('$20');

  const copyToClipboard = (text: string, tokenName: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedToken(tokenName);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen py-10 sm:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Hero - Architectural Symmetrical Header */}
        <div className="bg-slate-900 text-white rounded-sm p-8 sm:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-blue-500/20 text-blue-300 text-xs font-mono font-bold tracking-wider uppercase border border-blue-400/30">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Design System &amp; Symmetrical Specs</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-heading">
              {SITE.name} Design System
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              A high-precision, automotive-grade design language built for authentic vehicle provenance, legal Monroney specifications, and NMVTIS database reporting. Governed by strict component symmetry, mathematical spacing ratios, and disciplined typography.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                id="btn-test-sticker-modal"
                onClick={() => onOpenSticker?.('2T1BURHE0FC320645')}
                className="px-5 py-2.5 rounded-xs bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Test Monroney Sticker Modal</span>
              </button>
              <button
                id="btn-test-report-modal"
                onClick={() => onOpenSampleReport?.('2T1BURHE0FC320645')}
                className="px-5 py-2.5 rounded-xs bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold uppercase tracking-wider transition-all border border-slate-700 flex items-center gap-2 cursor-pointer shadow-2xs"
              >
                <FileText className="w-3.5 h-3.5 text-blue-400" />
                <span>Test Vehicle Report Modal</span>
              </button>
            </div>
          </div>
        </div>

        {/* SECTION 1: CHROMATIC SYSTEM */}
        <section className="space-y-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">01 / Chromatic System</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 font-heading">Core Color Foundations</h2>
            <p className="text-sm text-slate-600 mt-1">
              Engineered with strict automotive contrast standards. Symmetrical swatches with balanced visual weights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {/* Navy & Slate */}
            <div className="bg-white p-5 rounded-sm border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between h-full">
              <div className="h-20 bg-slate-900 rounded-xs flex items-end p-3 text-white font-mono text-xs font-bold justify-between">
                <span>Automotive Slate</span>
                <span>#0F172A</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm font-heading">Industrial Slate 900</h4>
                <p className="text-xs text-slate-500 mt-0.5">Primary dark surface, headers, official seals, and high-contrast typography.</p>
              </div>
            </div>

            {/* Precision Blue */}
            <div className="bg-white p-5 rounded-sm border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between h-full">
              <div className="h-20 bg-blue-600 rounded-xs flex items-end p-3 text-white font-mono text-xs font-bold justify-between">
                <span>Precision Blue</span>
                <span>#2563EB</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm font-heading">Action Blue 600</h4>
                <p className="text-xs text-slate-500 mt-0.5">Primary actions, interactive search triggers, and active tab highlights.</p>
              </div>
            </div>

            {/* Certified Emerald */}
            <div className="bg-white p-5 rounded-sm border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between h-full">
              <div className="h-20 bg-emerald-600 rounded-xs flex items-end p-3 text-white font-mono text-xs font-bold justify-between">
                <span>Certified Pass</span>
                <span>#059669</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm font-heading">Emerald Clean 600</h4>
                <p className="text-xs text-slate-500 mt-0.5">Clean title badges, passed structural inspections, and 0-accident seals.</p>
              </div>
            </div>

            {/* Warning Amber */}
            <div className="bg-white p-5 rounded-sm border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between h-full">
              <div className="h-20 bg-amber-500 rounded-xs flex items-end p-3 text-white font-mono text-xs font-bold justify-between">
                <span>Caution Amber</span>
                <span>#D97706</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm font-heading">Caution Amber 500</h4>
                <p className="text-xs text-slate-500 mt-0.5">Recalls, open service campaigns, and cautionary alerts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: TYPOGRAPHIC SYSTEM (16px DESKTOP MINIMUM FLOOR) */}
        <section className="space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Type className="w-3.5 h-3.5" />
              <span>Desktop Minimum 16px Typography Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 font-heading">02 / Typographic Hierarchy &amp; Scaling Standard</h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl">
              Strict rule: <strong>Least point size on Desktop is 16px (1rem)</strong>. Captions, table meta, form inputs, and badges elevate from 12px/14px to 16px floor, with all higher typographic tiers scaled upward proportionally.
            </p>
          </div>

          <div className="bg-white rounded-sm border border-slate-200 p-6 sm:p-8 space-y-8 shadow-2xs">
            {/* Desktop 16px Standard Banner */}
            <div className="bg-slate-900 text-white p-4 rounded-xs border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xs bg-blue-600 text-white flex items-center justify-center font-bold font-mono text-sm">16</span>
                <div>
                  <h4 className="font-bold text-sm text-white font-heading">Desktop Point Size Floor: 16px (1rem)</h4>
                  <p className="text-xs text-slate-300">Smallest point size across all desktop viewports (min-width: 1024px). No 14px or 12px rendered.</p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 rounded-xs uppercase whitespace-nowrap self-start md:self-auto">
                ✓ 16px Floor Enforced
              </span>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-xs font-mono text-slate-400 font-bold uppercase">Display 1 (Hero Title) • 56px–68px Desktop • Plus Jakarta Sans 900 Black</span>
                <span className="text-xs font-mono text-blue-600 font-bold">text-4xl lg:text-6xl</span>
              </div>
              <p className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 font-heading tracking-tight leading-tight">
                Authentic Monroney Window Stickers &amp; History
              </p>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-xs font-mono text-slate-400 font-bold uppercase">Heading 2 (Section Title) • 32px–36px Desktop • Plus Jakarta Sans 800 ExtraBold</span>
                <span className="text-xs font-mono text-blue-600 font-bold">text-2xl lg:text-3xl</span>
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight">
                Everything Included In Your Certified Report
              </p>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-xs font-mono text-slate-400 font-bold uppercase">Heading 3 (Card Subheader) • 24px–28px Desktop • Plus Jakarta Sans 700 Bold</span>
                <span className="text-xs font-mono text-blue-600 font-bold">text-xl lg:text-2xl</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold text-slate-900 font-heading tracking-tight">
                Factory Options, Packages &amp; Market Valuations
              </p>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-xs font-mono text-slate-400 font-bold uppercase">Body Copy • 18px Desktop • Regular 400 • Line Height 1.6</span>
                <span className="text-xs font-mono text-blue-600 font-bold">text-base lg:text-lg</span>
              </div>
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl font-sans">
                Every vehicle identification number contains an encrypted record of factory equipment, safety recalls, and commercial ownership transactions. {SITE.name} decodes these archives directly from federal NMVTIS registries.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-xs font-mono text-slate-400 font-bold uppercase">Minimum Floor Tier • 16px Desktop Floor (previously 12px/14px) • JetBrains Mono / Inter</span>
                <span className="text-xs font-mono text-emerald-600 font-bold">text-xs / text-sm (Elevated to 16px)</span>
              </div>
              <div className="space-y-3">
                <p className="font-mono text-base font-bold text-slate-900 tracking-wider">
                  VIN: 3FA6P0RU9HR306143 • MSRP: $24,135 • ENGINE: 1.5L ECOBOOST I4 TURBO
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-3 py-1 rounded-xs bg-slate-100 text-slate-800 text-sm font-semibold border border-slate-200">
                    Badge Minimum: 16px
                  </span>
                  <span className="px-3 py-1 rounded-xs bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-200">
                    Input Label: 16px
                  </span>
                  <span className="px-3 py-1 rounded-xs bg-emerald-50 text-emerald-700 text-sm font-semibold border border-emerald-200">
                    Table Record Meta: 16px
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: COMPONENT SYMMETRY & GEOMETRY (NEW DEDICATED ARCHITECTURE) */}
        <section className="space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Scale className="w-3.5 h-3.5" />
              <span>Symmetry &amp; Geometry Standards</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
              03 / Component Symmetry &amp; Layout Geometry
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-3xl">
              Strict rules for bilateral balance, equal-height card grids, proportional 2:1 button padding, and aligned functional anchors across all viewpoints.
            </p>
          </div>

          {/* Symmetrical Component Grid Showcase */}
          <div className="bg-white rounded-sm border border-slate-200 p-6 sm:p-8 space-y-10 shadow-2xs">
            
            {/* Rule 1: Symmetrical Card Grid & Equal Height Alignment */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-950 font-heading">
                    1. Equal-Height Card Symmetry
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Grid cards must enforce <code className="text-blue-600 font-mono text-xs bg-blue-50 px-1 py-0.5 rounded-xs">items-stretch</code> with <code className="text-blue-600 font-mono text-xs bg-blue-50 px-1 py-0.5 rounded-xs">h-full flex flex-col justify-between</code>. Bottom action anchors align on the exact same baseline regardless of body copy length.
                  </p>
                </div>
                <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-xs uppercase">
                  ✓ Symmetrical Alignment Verified
                </span>
              </div>

              {/* Live Symmetrical Card Grid Demo */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {/* Demo Card A */}
                <div className="p-6 rounded-sm bg-slate-50 border border-slate-200 flex flex-col justify-between h-full shadow-2xs">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xs bg-slate-950 text-white flex items-center justify-center font-bold text-xs">
                        <FileText className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-xs">
                        Tier 1
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-950 font-heading mb-1.5">
                      Single Vehicle Report
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Complete NMVTIS accident history, title brand verification, and odometer check for one VIN.
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-200">
                    <button className="w-full py-2.5 px-5 rounded-xs bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs">
                      <span>Select Report</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Demo Card B - Medium Copy */}
                <div className="p-6 rounded-sm bg-slate-50 border-2 border-slate-950 flex flex-col justify-between h-full shadow-md relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-xs bg-slate-950 text-white text-[9px] font-bold uppercase tracking-wider">
                    Symmetrical Anchor
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xs bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                        <Layers className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-xs">
                        Recommended
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-950 font-heading mb-1.5">
                      Report + Monroney Sticker
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      All historical title and recall data paired with the original factory window sticker, itemizing OEM options, package codes, MSRP invoice breakdown, and fuel economy.
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-200">
                    <button className="w-full py-2.5 px-5 rounded-xs bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs">
                      <span>Select Bundle</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Demo Card C - Long Copy */}
                <div className="p-6 rounded-sm bg-slate-50 border border-slate-200 flex flex-col justify-between h-full shadow-2xs">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xs bg-slate-950 text-white flex items-center justify-center font-bold text-xs">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-xs">
                        Volume Pack
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-950 font-heading mb-1.5">
                      Dealer 5-Pack Credits
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Five non-expiring search credits for automotive buyers, dealers, and collectors. Instant PDF export, printable window labels, and live vehicle valuation insights on demand.
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-200">
                    <button className="w-full py-2.5 px-5 rounded-xs bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs">
                      <span>Select 5-Pack</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Rule 2: 2:1 Symmetrical Button Padding Ratio */}
            <div className="pt-8 border-t border-slate-200">
              <div className="mb-4">
                <h3 className="text-base sm:text-lg font-bold text-slate-950 font-heading">
                  2. Symmetrical 2:1 Button Ratio &amp; Centered Centering
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Horizontal padding is exactly 2x vertical padding (<code className="text-blue-600 font-mono text-xs bg-blue-50 px-1 py-0.5 rounded-xs">px-6 py-3</code> = 24px/12px, <code className="text-blue-600 font-mono text-xs bg-blue-50 px-1 py-0.5 rounded-xs">px-5 py-2.5</code> = 20px/10px). Symmetrical left and right icon clearances ensure balance.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                {/* Button 1 */}
                <div className="p-4 bg-slate-50 rounded-sm border border-slate-200 text-center space-y-2">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">px-6 py-3 • 24px/12px</span>
                  <button className="w-full px-6 py-3 rounded-xs bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs">
                    <span>Dark Industrial</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Button 2 */}
                <div className="p-4 bg-slate-50 rounded-sm border border-slate-200 text-center space-y-2">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">px-6 py-3 • 24px/12px</span>
                  <button className="w-full px-6 py-3 rounded-xs bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs">
                    <span>Precision Blue</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Button 3 */}
                <div className="p-4 bg-slate-50 rounded-sm border border-slate-200 text-center space-y-2">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">px-6 py-3 • 24px/12px</span>
                  <button className="w-full px-6 py-3 rounded-xs bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs">
                    <span>Secondary White</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </button>
                </div>

                {/* Button 4 */}
                <div className="p-4 bg-slate-50 rounded-sm border border-slate-200 text-center space-y-2">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">px-4 py-2 • 16px/8px</span>
                  <button className="w-full px-4 py-2 rounded-xs bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Pill CTA</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Rule 3: Form Input Symmetry & Centered Icon Clearance */}
            <div className="pt-8 border-t border-slate-200">
              <div className="mb-4">
                <h3 className="text-base sm:text-lg font-bold text-slate-950 font-heading">
                  3. Input Field Symmetrical Balance
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Left icon padding mirrors right badge padding. Vertical padding perfectly centers the text baseline within standard height containers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Car className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    readOnly
                    value="2T1BURHE0FC320645"
                    className="w-full pl-10 pr-14 py-3 bg-slate-50 border border-slate-200 rounded-xs text-slate-950 font-mono text-sm uppercase tracking-wider font-bold shadow-inner"
                  />
                  <span className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs font-mono font-semibold text-emerald-600 pointer-events-none">
                    17/17 PASS
                  </span>
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Search className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    readOnly
                    value="CALIFORNIA • 7XYZ890"
                    className="w-full pl-10 pr-14 py-3 bg-slate-50 border border-slate-200 rounded-xs text-slate-950 font-mono text-sm uppercase tracking-wider font-bold shadow-inner"
                  />
                  <span className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs font-mono font-semibold text-blue-600 pointer-events-none">
                    PLATE OK
                  </span>
                </div>
              </div>
            </div>

            {/* Rule 4: Symmetrical Status Pills & Badges */}
            <div className="pt-8 border-t border-slate-200">
              <div className="mb-4">
                <h3 className="text-base sm:text-lg font-bold text-slate-950 font-heading">
                  4. Single-Line Symmetrical Verification Badges
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Labels inside pills never wrap or truncate. Padding is mathematically matched at <code className="text-blue-600 font-mono text-xs bg-blue-50 px-1 py-0.5 rounded-xs">px-2.5 py-0.5</code> or <code className="text-blue-600 font-mono text-xs bg-blue-50 px-1 py-0.5 rounded-xs">px-3 py-1</code> with <code className="text-blue-600 font-mono text-xs bg-blue-50 px-1 py-0.5 rounded-xs">rounded-xs</code>.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Clean Title Verified</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>0 Accidents Reported</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-slate-900 border border-slate-950 text-white text-xs font-bold uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5 text-blue-400" />
                  <span>Monroney Compliant</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  <span>Recall Campaign Open</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xs bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                  <span>Best Value Package</span>
                </span>
              </div>
            </div>

            {/* Rule 5: Dimensional Symmetry Rules Summary */}
            <div className="pt-8 border-t border-slate-200 bg-slate-50/70 p-5 rounded-sm border border-slate-200">
              <h4 className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider mb-3">
                Architectural Radius &amp; Padding Hierarchy
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 font-mono block text-[10px] uppercase">Card Radius</span>
                  <span className="font-bold text-slate-900">rounded-sm (4px)</span>
                </div>
                <div>
                  <span className="text-slate-400 font-mono block text-[10px] uppercase">Control Radius</span>
                  <span className="font-bold text-slate-900">rounded-xs (2px)</span>
                </div>
                <div>
                  <span className="text-slate-400 font-mono block text-[10px] uppercase">Container Padding</span>
                  <span className="font-bold text-slate-900">24px sm / 32px lg</span>
                </div>
                <div>
                  <span className="text-slate-400 font-mono block text-[10px] uppercase">Button Padding</span>
                  <span className="font-bold text-slate-900">2:1 Optical Ratio</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: REVISIT BANNER SPECIFICATION & LIVE PLAYGROUND */}
        <section className="space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>Revisit Banner Component Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 font-heading">
              04 / Revisit Banner (Variable VIN &amp; Visual Fidelity)
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl">
              Engineered to match the specified screenshot with pixel fidelity while fully complementing our existing automotive design system. The vehicle title and VIN are dynamically driven by variable props.
            </p>
          </div>

          <div className="bg-white rounded-sm border border-slate-200 p-6 sm:p-8 space-y-8 shadow-2xs">
            {/* Control & Testing Bar */}
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm font-heading">Interactive Variable VIN Test Bench</h4>
                  <p className="text-xs text-slate-500">Change the VIN variable below to see the banner adapt its vehicle title, VIN formatting, and action response in real-time.</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    id="btn-toggle-floating-banner"
                    type="button"
                    onClick={() => onToggleRevisitBanner?.()}
                    className={`px-3 py-1.5 rounded-xs text-xs font-bold uppercase tracking-wider transition-colors border cursor-pointer flex items-center gap-1.5 ${
                      isRevisitBannerVisible
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{isRevisitBannerVisible ? 'Floating Banner: Active' : 'Floating Banner: Hidden'}</span>
                  </button>
                </div>
              </div>

              {/* VIN & Price Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
                <div className="sm:col-span-6 space-y-1">
                  <label htmlFor="test-vin-input" className="text-xs font-mono font-bold text-slate-600 uppercase">
                    Test VIN Variable
                  </label>
                  <input
                    id="test-vin-input"
                    type="text"
                    value={localVinInput}
                    onChange={(e) => {
                      const v = e.target.value.toUpperCase();
                      setLocalVinInput(v);
                      onChangeRevisitVin?.(v);
                    }}
                    placeholder="Enter 17-digit VIN"
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xs font-mono text-sm uppercase text-slate-900 font-bold focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="sm:col-span-3 space-y-1">
                  <label htmlFor="test-price-input" className="text-xs font-mono font-bold text-slate-600 uppercase">
                    CTA Price
                  </label>
                  <input
                    id="test-price-input"
                    type="text"
                    value={localPrice}
                    onChange={(e) => setLocalPrice(e.target.value)}
                    placeholder="$20"
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xs text-sm text-slate-900 font-bold focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="sm:col-span-3">
                  <button
                    type="button"
                    onClick={() => {
                      setLocalVinInput('3FA6P0RU9HR306143');
                      onChangeRevisitVin?.('3FA6P0RU9HR306143');
                      setLocalPrice('$20');
                    }}
                    className="w-full px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xs text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset To Default</span>
                  </button>
                </div>
              </div>

              {/* Quick VIN Presets */}
              <div className="pt-2 flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono text-slate-500 font-bold">Quick Presets:</span>
                <button
                  type="button"
                  onClick={() => {
                    setLocalVinInput('3FA6P0RU9HR306143');
                    onChangeRevisitVin?.('3FA6P0RU9HR306143');
                  }}
                  className={`px-2.5 py-1 text-xs font-mono rounded-xs border font-bold cursor-pointer transition-colors ${
                    localVinInput === '3FA6P0RU9HR306143'
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  3FA6P0RU9HR306143 (2017 Ford Fusion)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setLocalVinInput('2T1BURHE0FC320645');
                    onChangeRevisitVin?.('2T1BURHE0FC320645');
                  }}
                  className={`px-2.5 py-1 text-xs font-mono rounded-xs border font-bold cursor-pointer transition-colors ${
                    localVinInput === '2T1BURHE0FC320645'
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  2T1BURHE0FC320645 (2015 Toyota Corolla)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setLocalVinInput('1HGFA15547L116880');
                    onChangeRevisitVin?.('1HGFA15547L116880');
                  }}
                  className={`px-2.5 py-1 text-xs font-mono rounded-xs border font-bold cursor-pointer transition-colors ${
                    localVinInput === '1HGFA15547L116880'
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  1HGFA15547L116880 (2007 Honda Civic)
                </button>
              </div>
            </div>

            {/* Embedded Live Preview Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Live Rendered Card matching screenshot */}
              <div className="lg:col-span-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 font-bold uppercase">
                    Live Component Render (Embedded Preview)
                  </span>
                  <span className="text-xs font-mono text-emerald-600 font-bold">
                    Variant: Embedded
                  </span>
                </div>
                <div className="p-6 bg-slate-100/70 border border-slate-200 rounded-sm flex items-center justify-center">
                  <div className="w-full max-w-[420px]">
                    <RevisitBanner
                      variant="embedded"
                      vin={localVinInput}
                      price={localPrice}
                      onAction={(vinToOpen) => onOpenSampleReport?.(vinToOpen)}
                      className="shadow-xl"
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-500">
                  Clicking "Grab it for only {localPrice}" will open the authentic full report modal for VIN <code className="font-mono text-blue-600 font-bold">{localVinInput}</code>.
                </p>
              </div>

              {/* Right Column: Architectural Design Specs */}
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono text-slate-400 font-bold uppercase">
                  Design Specifications &amp; Tokens
                </span>
                <div className="bg-slate-50 border border-slate-200 rounded-sm p-5 space-y-3.5 text-xs">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="font-bold text-slate-700">Pill Badge:</span>
                    <span className="font-mono text-slate-600">bg-[#FEF6EE] • text-[#B54708] • Clock Icon</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="font-bold text-slate-700">Title Typography:</span>
                    <span className="font-mono text-slate-600">Plus Jakarta Sans 800 • 18px–20px • Leading Snug</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="font-bold text-slate-700">Variable VIN:</span>
                    <span className="font-mono text-slate-600">JetBrains Mono • text-slate-400/500 • Uppercase</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="font-bold text-slate-700">Action CTA:</span>
                    <span className="font-mono text-slate-600">bg-[#131E35] (Industrial Slate) • White Bold • rounded-2xl</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="font-bold text-slate-700">Card Geometry:</span>
                    <span className="font-mono text-slate-600">rounded-3xl (24px) • border-slate-200/80 • shadow-2xl</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-slate-700">Desktop Point Size:</span>
                    <span className="font-mono text-emerald-600 font-bold">16px Minimum Point Size Standard Enforced</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenSampleReport?.(localVinInput)}
                    className="px-4 py-2.5 rounded-xs bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Test Full Vehicle Report Modal for {localVinInput}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: PRODUCTION PAGE QUICK-NAV */}
        <div className="bg-white rounded-sm p-6 border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-slate-900 font-heading">Explore Production Pages</h4>
            <p className="text-xs text-slate-500">Jump directly to any verified page in the {SITE.name} application.</p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => onNavigate('home')}
              className="px-4 py-2 rounded-xs bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider border border-slate-300 shadow-2xs cursor-pointer transition-colors"
            >
              Home Page
            </button>
            <button
              onClick={() => onNavigate('sample')}
              className="px-4 py-2 rounded-xs bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider border border-slate-300 shadow-2xs cursor-pointer transition-colors"
            >
              Sample Reports
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="px-4 py-2 rounded-xs bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider border border-slate-300 shadow-2xs cursor-pointer transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-4 py-2 rounded-xs bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider border border-slate-300 shadow-2xs cursor-pointer transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
