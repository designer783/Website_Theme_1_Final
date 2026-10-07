import React, { useState } from 'react';
import { 
  Search, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Car, 
  MapPin, 
  Loader2,
  AlertCircle,
  Mail,
  Phone
} from 'lucide-react';
import { SITE } from '../config/site';
import { ALL_COUNTRY_CODES } from '../data/countries';
import { useEffect } from 'react';

const PLATE_LOOKUP_URL = `${SITE.appUrl}/landing/no_get_license`;

interface VinLookupBoxProps {
  className?: string;
  initialMode?: 'vin' | 'plate';
  // Path on SITE.domain the VIN form redirects to, e.g. /members/vin-check/ws-preview?vin=...
  vinRedirectPath?: string;
}

const US_STATES = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' }
];



export const VinLookupBox: React.FC<VinLookupBoxProps> = ({
  className = '',
  initialMode = 'vin',
  vinRedirectPath = '/members/vin-check/ws-preview',
}) => {
  const [mode, setMode] = useState<'vin' | 'plate'>(initialMode);
  const [vinInput, setVinInput] = useState('');
  const [plateInput, setPlateInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [phoneCountryCode, setPhoneCountryCode] = useState('+92');
  const [phoneInput, setPhoneInput] = useState('');
  const [selectedState, setSelectedState] = useState('CA');
  const [showVinHelp, setShowVinHelp] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzingStep, setAnalyzingStep] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleVinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 17);
    setVinInput(val);
    setErrorMessage('');
  };

  const handlePlateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8);
    setPlateInput(val);
    setErrorMessage('');
  };

  // Email and phone (with country code, e.g. +15551234567) entered by the visitor
  const getContact = () => {
    const digits = phoneInput.replace(/\D/g, '');
    return {
      email: emailInput.trim(),
      mobile: digits ? `${phoneCountryCode}${digits}` : '',
    };
  };

  const redirectTo = (previewPath: string, vin: string) => {
    const params = new URLSearchParams({ vin, ...getContact() });
    window.location.href = `${SITE.url}${previewPath}?${params.toString()}`;
  };

  const lookupPlate = async (plate: string) => {
    setIsAnalyzing(true);
    setErrorMessage('');
    setAnalyzingStep('Looking up license plate registration...');

    const { email, mobile } = getContact();
    try {
      const res = await fetch(PLATE_LOOKUP_URL, {
        method: 'POST',
        body: new URLSearchParams({ email, mobile, plate, state: selectedState }),
      });
      const data = await res.json();
      if (data?.status === 'success' && data.encrypted_vin) {
        setAnalyzingStep('Vehicle found. Loading preview...');
        redirectTo('/members/vin-check/license-preview', data.encrypted_vin);
        return;
      }
      setErrorMessage('License plate not found. Please check the plate number and state and try again.');
    } catch {
      setErrorMessage('There was an error looking up this license plate. Please try again.');
    }
    setIsAnalyzing(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Email is required for both forms; phone is optional
    if (!/^\S+@\S+\.\S+$/.test(emailInput.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (mode === 'vin') {
      const clean = vinInput.trim();
      if (!clean) {
        setErrorMessage('Please enter a vehicle identification number.');
        return;
      }
      if (clean.length < 11) {
        setErrorMessage('A standard VIN is between 11 and 17 characters.');
        return;
      }
      setIsAnalyzing(true);
      setAnalyzingStep('Loading vehicle preview...');
      redirectTo(vinRedirectPath, clean);
    } else {
      const clean = plateInput.trim();
      if (!clean) {
        setErrorMessage('Please enter your license plate number.');
        return;
      }
      lookupPlate(clean);
    }
  };

  return (
    <div className={`w-full bg-white rounded-sm border border-slate-200 shadow-xs overflow-hidden ${className}`}>
      {/* Mode Switcher Tabs - Reference Site Style */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50">
        <div className="flex items-center">
          <button
            type="button"
            id="tab-lookup-vin"
            onClick={() => {
              setMode('vin');
              setErrorMessage('');
            }}
            className={`cursor-pointer px-4 sm:px-5 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${
              mode === 'vin'
                ? 'bg-white text-slate-950 border-b-2 border-blue-600 -mb-px shadow-2xs'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            By VIN
          </button>
          <button
            type="button"
            id="tab-lookup-plate"
            onClick={() => {
              setMode('plate');
              setErrorMessage('');
            }}
            className={`cursor-pointer px-4 sm:px-5 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${
              mode === 'plate'
                ? 'bg-white text-slate-950 border-b-2 border-blue-600 -mb-px shadow-2xs'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            By US License Plate
          </button>
        </div>

        {/* VIN Helper Link */}
        <button
          type="button"
          id="btn-vin-help"
          onClick={() => setShowVinHelp(!showVinHelp)}
          className="hidden sm:flex cursor-pointer text-xs font-medium text-slate-600 hover:text-slate-950 items-center gap-1.5 transition-colors pr-4"
        >
          <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
          <span>Where is the VIN?</span>
        </button>
      </div>

      {/* Lookup Form */}
      <div className="p-5 sm:p-6 space-y-4">
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Contact Info Fields: Email & Phone with Country Code */}
          <div className="grid grid-cols-1 gap-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Mail className="w-4 h-4 text-slate-400" />
              </div>
              <input
                id="lookup-email-field"
                type="email"
                value={emailInput}
                onChange={(e) => {
                  setEmailInput(e.target.value);
                  setErrorMessage('');
                }}
                placeholder="Enter Your Email Address *"
                className="w-full pl-10 pr-3.5 py-3 bg-slate-50 border border-slate-200 rounded-sm text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-blue-600 transition-colors"
              />
            </div>

            <div className="relative flex items-stretch w-full">
              {/* Country code selector */}
              <div className="relative shrink-0 flex items-stretch">
                <select
                  id="phone-country-code"
                  value={phoneCountryCode}
                  onChange={(e) => setPhoneCountryCode(e.target.value)}
                  className="pl-3 pr-6 py-3 bg-slate-100 border border-r-0 border-slate-200 rounded-l-sm text-slate-900 text-xs sm:text-sm font-bold focus:outline-none cursor-pointer appearance-none shrink-0"
                >
                  {ALL_COUNTRY_CODES.map((item) => (
                    <option key={item.code} value={item.code}>
                      {item.code}
                    </option>
                  ))}
                </select>
                <span className="absolute inset-y-0 right-1.5 flex items-center pointer-events-none text-slate-500 text-[10px]">
                  ▼
                </span>
              </div>

              <div className="relative flex-1 min-w-0">
                <input
                  id="lookup-phone-field"
                  type="tel"
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value)}
                  placeholder="Enter Your Phone Number"
                  className="w-full min-w-0 px-3.5 py-3 bg-slate-50 border border-slate-200 rounded-r-sm text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Primary Identifier Field (VIN or Plate) */}
          {mode === 'vin' ? (
            <div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Car className="w-4 h-4 text-slate-400" />
                </div>
                <input
                  id="vin-input-field"
                  type="text"
                  value={vinInput}
                  onChange={handleVinChange}
                  placeholder="ENTER VIN NUMBER"
                  className="w-full pl-10 pr-4 py-3 sm:py-3.5 bg-slate-50 border border-slate-200 rounded-sm text-slate-950 font-mono text-sm tracking-wider placeholder:font-sans placeholder:tracking-normal placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-blue-600 transition-colors uppercase"
                  maxLength={17}
                  disabled={isAnalyzing}
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Search className="w-4 h-4 text-slate-400" />
                </div>
                <input
                  id="plate-input-field"
                  type="text"
                  value={plateInput}
                  onChange={handlePlateChange}
                  placeholder="ENTER PLATE NUMBER"
                  className="w-full pl-10 pr-4 py-3 sm:py-3.5 bg-slate-50 border border-slate-200 rounded-sm text-slate-950 font-mono uppercase text-sm tracking-wider placeholder:font-sans placeholder:tracking-normal placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-blue-600 transition-colors"
                  maxLength={8}
                  disabled={isAnalyzing}
                />
              </div>

              <div className="relative sm:w-48 md:w-52 shrink-0">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <select
                  id="state-select-field"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full pl-8 pr-7 py-3 sm:py-3.5 bg-slate-50 border border-slate-200 rounded-sm text-slate-900 font-semibold text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-blue-600 transition-colors appearance-none cursor-pointer truncate"
                  disabled={isAnalyzing}
                >
                  {US_STATES.map((st) => (
                    <option key={st.code} value={st.code} className="bg-white text-slate-900 font-normal">
                      {st.name}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-2.5 flex items-center pointer-events-none text-slate-400 text-[10px]">
                  ▼
                </div>
              </div>
            </div>
          )}

          <button
            id="btn-submit-vin"
            type="submit"
            disabled={isAnalyzing}
            className="cursor-pointer w-full py-3.5 bg-slate-950 hover:bg-slate-900 text-white rounded-sm font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs disabled:opacity-60 mt-1"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Verifying Vehicle Identifier...</span>
              </>
            ) : (
              <>
                <span>Check Vehicle Records</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          {/* Error message if any */}
          {errorMessage && (
            <div className="p-3 bg-red-50 border-l-4 border-red-600 text-xs text-red-800 flex items-start gap-2 rounded-xs">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Real-time Loading Verification Sequence */}
          {isAnalyzing && (
            <div className="p-3 bg-blue-50 border-l-4 border-blue-600 text-xs text-blue-900 flex items-start gap-2 rounded-xs animate-pulse">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 animate-spin" />
              <div>
                <span className="font-bold block">Vehicle Intelligence Engine Active</span>
                <span className="text-blue-700 text-[11px]">{analyzingStep}</span>
              </div>
            </div>
          )}
        </form>

        {/* Mobile VIN Helper Link */}
        <div className="sm:hidden pt-1 border-t border-slate-100 text-xs text-slate-500">
          <button
            type="button"
            onClick={() => setShowVinHelp(!showVinHelp)}
            className="cursor-pointer text-xs font-medium text-slate-600 hover:text-slate-950 flex items-center gap-1"
          >
            <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
            <span>Where is the VIN?</span>
          </button>
        </div>
      </div>

      {/* Where can I find the VIN Helper Card */}
      {showVinHelp && (
        <div className="p-4 bg-slate-950 text-white border-t border-slate-800 text-xs space-y-3 animate-in fade-in duration-150">
          <div className="flex items-center justify-between">
            <span className="font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Car className="w-4 h-4 text-blue-400" />
              Where to Locate Your 17-Digit VIN
            </span>
            <button
              onClick={() => setShowVinHelp(false)}
              className="cursor-pointer text-slate-400 hover:text-white text-xs px-2 py-0.5 rounded-xs border border-slate-800"
            >
              Close
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
            <div className="bg-slate-900 p-3 rounded-xs border border-slate-800">
              <span className="font-bold text-white block mb-1">1. Driver's Windshield</span>
              Look through the lower corner of the front windshield on the driver's side.
            </div>
            <div className="bg-slate-900 p-3 rounded-xs border border-slate-800">
              <span className="font-bold text-white block mb-1">2. Door Jamb Pillar</span>
              Open the driver's side door and locate the official manufacturer certification sticker.
            </div>
            <div className="bg-slate-900 p-3 rounded-xs border border-slate-800">
              <span className="font-bold text-white block mb-1">3. Title & Registration</span>
              Listed on your official vehicle title, registration slip, or insurance card.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
