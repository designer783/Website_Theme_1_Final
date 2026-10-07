import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  CreditCard, 
  CheckCircle2, 
  Check, 
  Sparkles, 
  FileText, 
  Layers,
  ArrowRight,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { PricingPackage, VehicleReportData } from '../types';
import { SAMPLE_REPORTS } from '../data/mockData';

interface CheckoutModalProps {
  pkg: PricingPackage;
  onClose: () => void;
  onSuccess: (vin: string) => void;
  initialVin?: string;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  pkg,
  onClose,
  onSuccess,
  initialVin = '',
}) => {
  const [vin, setVin] = useState(initialVin || '2T1BURHE0FC320645');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [expDate, setExpDate] = useState('12/28');
  const [cvc, setCvc] = useState('888');
  const [postalCode, setPostalCode] = useState('19807');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter a valid email address for delivery.');
      return;
    }
    if (vin.length < 11) {
      setError('Please enter a valid Vehicle Identification Number (VIN).');
      return;
    }

    setIsProcessing(true);
    setError('');

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 md:p-8 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-xl rounded-sm shadow-2xl border border-slate-200 overflow-hidden text-slate-950 my-4">
        {/* Modal Header */}
        <div className="bg-slate-950 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xs bg-slate-800 border border-slate-700 flex items-center justify-center text-white">
              <Lock className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-blue-400 font-bold uppercase tracking-wider block">
                256-Bit SSL Encrypted Checkout
              </span>
              <h3 className="text-base font-bold text-white">
                {pkg.name}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xs text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Order Summary Box */}
              <div className="p-4 bg-slate-50 rounded-sm border border-slate-200 flex items-center justify-between shadow-2xs">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-950 text-sm">{pkg.name}</span>
                    {pkg.badge && (
                      <span className="px-2 py-0.5 rounded-xs text-[10px] font-bold uppercase tracking-wider bg-slate-200 text-slate-900 border border-slate-300">
                        {pkg.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-600 block mt-0.5">
                    Includes instant online access, printable PDF, and lifetime account storage.
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-slate-950 font-mono">
                    ${pkg.price.toFixed(2)}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 block">One-time fee</span>
                </div>
              </div>

              {error && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xs text-rose-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* VIN Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Vehicle Identification Number (VIN)
                </label>
                <input
                  type="text"
                  value={vin}
                  onChange={(e) => setVin(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 17))}
                  placeholder="Enter 17-digit VIN"
                  maxLength={17}
                  className="w-full px-4 py-2.5 rounded-xs border border-slate-300 font-mono text-sm uppercase tracking-wider font-bold text-slate-950 focus:outline-none focus:bg-white focus:ring-1 focus:ring-slate-950"
                />
                <span className="text-[11px] text-slate-500 block">
                  e.g., 2T1BURHE0FC320645 (Corolla), WAUFFAFC5HN007408 (Audi S6)
                </span>
              </div>

              {/* Email Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Delivery Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 rounded-xs border border-slate-300 text-sm text-slate-950 focus:outline-none focus:bg-white focus:ring-1 focus:ring-slate-950"
                />
                <span className="text-[11px] text-slate-500 block">
                  Your certified report link and password-free login will be sent here.
                </span>
              </div>

              {/* Simulated Card Payment */}
              <div className="space-y-3 pt-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
                  <span>Payment Details</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Test Mode Enabled</span>
                </label>

                <div className="p-4 rounded-sm border border-slate-300 bg-slate-50 space-y-3">
                  <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                    <CreditCard className="w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="Card Number"
                      className="w-full bg-transparent font-mono text-xs text-slate-950 outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">Expires</span>
                      <input
                        type="text"
                        value={expDate}
                        onChange={(e) => setExpDate(e.target.value)}
                        className="w-full bg-transparent font-mono text-xs text-slate-950 outline-none"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">CVC</span>
                      <input
                        type="text"
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value)}
                        className="w-full bg-transparent font-mono text-xs text-slate-950 outline-none"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">ZIP</span>
                      <input
                        type="text"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        className="w-full bg-transparent font-mono text-xs text-slate-950 outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3.5 rounded-xs bg-slate-950 hover:bg-slate-800 disabled:bg-slate-400 text-white font-bold uppercase tracking-wider text-xs shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Verifying VIN & Authorizing...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Authorize &amp; Generate Report (${pkg.price.toFixed(2)})</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] font-bold uppercase tracking-wider text-slate-500 text-center">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  NMVTIS Certified
                </span>
                <span>•</span>
                <span>No Recurring Charges</span>
                <span>•</span>
                <span>Lifetime Access</span>
              </div>
            </form>
          ) : (
            /* Success State */
            <div className="text-center py-6 space-y-6">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-950">
                  Report Successfully Generated!
                </h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Your vehicle record for VIN <span className="font-mono font-bold text-slate-950">{vin}</span> has been decoded and saved to your account.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-sm border border-slate-200 text-left text-xs space-y-1.5 font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-500">Order ID:</span>
                  <span className="font-bold text-slate-950">DBS-{(Math.random() * 1000000 | 0).toString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Package:</span>
                  <span className="font-bold text-slate-950">{pkg.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Status:</span>
                  <span className="font-bold text-emerald-600">Paid & Delivered</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => {
                    onClose();
                    onSuccess(vin);
                  }}
                  className="w-full py-3.5 rounded-xs bg-slate-950 hover:bg-slate-800 text-white font-bold uppercase tracking-wider text-xs shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Certified Report Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onClose}
                  className="w-full py-2.5 rounded-xs bg-slate-100 hover:bg-slate-200 text-slate-950 font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer"
                >
                  Return to Dashboard
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
