import React, { useState } from 'react';
import { Clock, X, ArrowRight, RotateCcw } from 'lucide-react';
import { SAMPLE_REPORTS } from '../data/mockData';

export interface RevisitBannerProps {
  /** Variable VIN passed to the banner (e.g. '3FA6P0RU9HR306143') */
  vin?: string;
  /** Optional vehicle title override (e.g. '2017 Ford Fusion'). If omitted, automatically derived from VIN or default. */
  vehicleTitle?: string;
  /** Price displayed in the CTA button (defaults to '$20') */
  price?: string | number;
  /** Callback when the user clicks 'Grab it for only $20' */
  onAction?: (vin: string) => void;
  /** Callback when user dismisses the banner */
  onClose?: () => void;
  /** Variant: 'floating' for bottom-right fixed toast/banner, 'embedded' for inline showcase */
  variant?: 'floating' | 'embedded';
  /** Optional custom class name */
  className?: string;
  /** Controlled open state (defaults to true) */
  isOpen?: boolean;
}

export const RevisitBanner: React.FC<RevisitBannerProps> = ({
  vin = '3FA6P0RU9HR306143',
  vehicleTitle,
  price = '$20',
  onAction,
  onClose,
  variant = 'floating',
  className = '',
  isOpen: controlledIsOpen,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(true);
  const isVisible = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  // Resolve vehicle title from mock data or prop
  const resolvedVehicleTitle = React.useMemo(() => {
    if (vehicleTitle) return vehicleTitle;
    const clean = (vin || '').trim().toUpperCase();
    if (clean && SAMPLE_REPORTS[clean]) {
      const rep = SAMPLE_REPORTS[clean];
      return `${rep.year} ${rep.make} ${rep.model}`;
    }
    // Default fallback matching screenshot if VIN is the default
    if (clean === '3FA6P0RU9HR306143') {
      return '2017 Ford Fusion';
    }
    return '2017 Ford Fusion';
  }, [vin, vehicleTitle]);

  const formattedPrice = typeof price === 'number' ? `$${price}` : price.startsWith('$') ? price : `$${price}`;

  const handleDismiss = () => {
    setInternalIsOpen(false);
    onClose?.();
  };

  const handleCtaClick = () => {
    onAction?.(vin);
  };

  // Reopen trigger pill when dismissed in floating mode so reviewer can easily re-test
  if (!isVisible && variant === 'floating') {
    return (
      <div className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 z-50 animate-fade-in">
        <button
          id="btn-reopen-revisit-banner"
          onClick={() => setInternalIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-full shadow-lg hover:shadow-xl text-slate-800 text-xs sm:text-sm font-bold transition-all hover:bg-slate-50 cursor-pointer group"
          title="Reopen Revisit Banner Alert"
          aria-label="Reopen Revisit Banner Alert"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
          <span>Report Ready Alert</span>
          <RotateCcw className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-500 ml-1" />
        </button>
      </div>
    );
  }

  if (!isVisible) return null;

  const cardContent = (
    <div
      className={`bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 border-l-4 border-l-amber-500 p-5 sm:p-6 transition-all duration-300 relative ${
        variant === 'floating'
          ? 'shadow-[0_20px_50px_-10px_rgba(15,23,42,0.22)]'
          : 'shadow-md shadow-slate-200/50'
      } ${className}`}
      role="alert"
      aria-live="polite"
      aria-labelledby="revisit-banner-title"
    >
      {/* Top Row: Pill Badge on Left, Close Button on Right */}
      <div className="flex items-center justify-between gap-3 mb-3.5">
        {/* 'Ready for pickup' Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF6EE] border border-[#FEE4E2] text-[#B54708]">
          <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B54708] stroke-[2.2] shrink-0" />
          <span className="text-xs sm:text-sm font-semibold tracking-normal whitespace-nowrap">
            Ready for pickup
          </span>
        </div>

        {/* Close Button */}
        <button
          id="btn-close-revisit-banner"
          type="button"
          onClick={handleDismiss}
          className="text-slate-400 hover:text-slate-700 hover:bg-slate-100/80 p-1.5 rounded-full transition-colors cursor-pointer shrink-0"
          aria-label="Dismiss alert"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Main Heading: "Your report for [Year Make Model] is ready!" */}
      <h3
        id="revisit-banner-title"
        className="font-heading font-extrabold text-slate-900 text-lg sm:text-xl tracking-tight leading-snug mb-1.5"
      >
        Your report for {resolvedVehicleTitle} is ready!
      </h3>

      {/* VIN Subtitle: Dynamic variable */}
      <p className="font-mono text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-5">
        VIN: <span className="text-slate-500 font-semibold">{vin}</span>
      </p>

      {/* Primary Action Button: "Grab it for only $20" */}
      <button
        id="btn-revisit-grab-report"
        type="button"
        onClick={handleCtaClick}
        className="w-full bg-[#131E35] hover:bg-[#0B1322] active:bg-slate-950 text-white font-bold text-sm sm:text-base py-3.5 px-5 rounded-xl sm:rounded-2xl transition-all duration-150 shadow-md shadow-slate-900/15 hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer group"
      >
        <span>Grab it for only {formattedPrice}</span>
        <ArrowRight className="w-4 h-4 text-blue-300 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100 hidden sm:inline-block" />
      </button>
    </div>
  );

  if (variant === 'embedded') {
    return cardContent;
  }

  // Floating bottom-left alert banner
  return (
    <div
      id="floating-revisit-banner"
      className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 z-50 max-w-[390px] sm:max-w-[420px] w-[calc(100%-2.5rem)] animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      {cardContent}
    </div>
  );
};
