import React, { useState } from 'react';
import { 
  Camera, 
  FileText, 
  Car, 
  Users, 
  Award, 
  ShieldAlert, 
  ShieldCheck, 
  Gauge, 
  DollarSign, 
  Zap, 
  Check, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  ExternalLink,
  Search,
  Database,
  AlertTriangle,
  TrendingUp,
  Clock,
  Wrench,
  Cpu
} from 'lucide-react';

interface VehicleStorytellingProps {
  onExploreReport: (vin: string) => void;
  onExploreSticker: (vin: string) => void;
  onSearchVin?: (vin: string) => void;
}

interface StoryItem {
  id: string;
  label: string;
  shortTag: string;
  categoryTag: string;
  title: string;
  introText?: string;
  description: string;
  highlights: string[];
  imagePlaceholder: {
    src: string;
    alt: string;
    caption: string;
    badge: string;
    badgeColor?: string;
  };
  sampleVin: string;
}

export const VehicleStorytelling: React.FC<VehicleStorytellingProps> = ({
  onExploreReport,
  onExploreSticker,
  onSearchVin,
}) => {
  const [activeStoryId, setActiveStoryId] = useState<string>('auction');

  const storyDetails: Record<string, StoryItem> = {
    auction: {
      id: 'auction',
      label: 'Auction Records',
      shortTag: '10 Photos',
      categoryTag: 'Auction Documentation',
      title: 'Auction Records with Photos',
      description: 'If your vehicle has been through an auction at any point, this section documents that history. Knowing this upfront helps you understand how the vehicle was previously valued and what condition it was in at that time.',
      highlights: [
        'Auction condition grade and final bid amounts',
        'Key availability and engine start status at time of auction',
        'Title type and any noted damage at time of sale',
        'Auction location and seller classification (insurance, dealer, or private)',
        'Up to 10 vehicle photos from the auction, when available',
      ],
      imagePlaceholder: {
        src: '/Auction Records.webp',
        alt: 'Historical Auction Sales Photos and Listing Preview',
        caption: 'Auction Archive: Up to 10 Vehicle Photos & Condition Details',
        badge: 'Auction Records Verified',
        badgeColor: 'bg-purple-500',
      },
      sampleVin: '2T1BURHE0FC320645',
    },
    sales: {
      id: 'sales',
      label: 'Sales Listing',
      shortTag: 'Sale History',
      categoryTag: 'Listing History',
      title: 'Previous Sales Listings',
      description: 'See where and when the vehicle was previously listed for sale. Understanding how your vehicle has been priced and positioned in the past helps you make a more informed decision about your own asking price.',
      highlights: [
        'Dates and locations of previous sale listings',
        'Listed price at each point of sale',
        'Mileage documented at each listing',
        'Seller type: private, dealership, auction, or classified',
      ],
      imagePlaceholder: {
        src: '/Sales Listing.webp',
        alt: 'Sales Listing with Photos Preview',
        caption: 'Prior Dealer & Classifieds Listings with Price Records',
        badge: 'Sales Listing Archived',
        badgeColor: 'bg-blue-500',
      },
      sampleVin: '2T1BURHE0FC320645',
    },
    usage: {
      id: 'usage',
      label: 'Vehicle Usage',
      shortTag: 'Usage Type',
      categoryTag: 'Usage Documentation',
      title: 'Vehicle Usage Type',
      description: 'Knowing whether your vehicle was used as a personal car, rental, fleet vehicle, or in a commercial capacity is important context. This section documents the available usage classification so you have a clear picture of how the vehicle has been used.',
      highlights: [
        'Personal or family use',
        'Rental or fleet vehicle history',
        'Taxi, ride-share, or police use',
        'Government or commercial use',
      ],
      imagePlaceholder: {
        src: '/Vehicle Usage.webp',
        alt: 'Vehicle Usage Records Preview',
        caption: 'Usage Classification: Fleet, Personal, Taxi or Commercial',
        badge: 'Usage Verified',
        badgeColor: 'bg-indigo-500',
      },
      sampleVin: '2T1BURHE0FC320645',
    },
    ownership: {
      id: 'ownership',
      label: 'Ownership History',
      shortTag: 'Tenure & State',
      categoryTag: 'Ownership Records',
      title: 'Ownership Timeline',
      description: 'Understanding the ownership timeline of your vehicle helps you see the bigger picture — how long each owner held it, where it was registered, and how many hands it has passed through. This context matters when positioning your vehicle for sale.',
      highlights: [
        'Total number of previous owners',
        'Approximate purchase dates for each owner',
        'State or region where the vehicle was registered',
        'Duration of each ownership period',
      ],
      imagePlaceholder: {
        src: '/Ownership History.webp',
        alt: 'Ownership History Record Preview',
        caption: 'Chronological Ownership Timeline & Registration Tenures',
        badge: 'Ownership Audit Clean',
        badgeColor: 'bg-blue-500',
      },
      sampleVin: '2T1BURHE0FC320645',
    },
    title: {
      id: 'title',
      label: 'Title Status',
      shortTag: '60+ Checks',
      categoryTag: 'Title Verification',
      title: 'Title Brand Check',
      description: 'Before you sell, you should know exactly where your vehicle\'s title stands. Our report verifies it against 60+ title brand categories across all 50 states, so you understand its status before entering any negotiation.',
      highlights: [
        'Salvage, rebuilt, or total loss title brands',
        'Theft and recovery records',
        'Flood and water damage designations',
        'Structural damage, hail, fire damage, and more',
        'Duplicate title flags',
      ],
      imagePlaceholder: {
        src: '/Title Brand.webp',
        alt: 'Title Brand Verification Preview',
        caption: '60+ Branded Title Categories Audited across 50 State DMVs',
        badge: 'Clean Title Verified',
        badgeColor: 'bg-emerald-500',
      },
      sampleVin: '2T1BURHE0FC320645',
    },
    accidents: {
      id: 'accidents',
      label: 'Accident Records',
      shortTag: 'Date & Place',
      categoryTag: 'Collision Records',
      title: 'Accident Documentation',
      description: 'Understanding whether any incidents are on record helps you know exactly what information is out there about your vehicle. A clean record is a strong point in your favor. If there is history, it\'s better to know it yourself before the conversation starts.',
      highlights: [
        'Date and location of any reported incidents',
        'Severity assessment and structural damage notes',
        'Airbag deployment and police report records',
      ],
      imagePlaceholder: {
        src: '/Accident History.webp',
        alt: 'Accident History Records Preview',
        caption: 'Accident & Damage Records: Precise Date, City & Severity',
        badge: '0 Accidental Collisions',
        badgeColor: 'bg-emerald-500',
      },
      sampleVin: '2T1BURHE0FC320645',
    },
    stolen: {
      id: 'stolen',
      label: 'Theft Records',
      shortTag: 'Theft Check',
      categoryTag: 'Theft Verification',
      title: 'Theft Record Check',
      description: 'Confirming that your vehicle has no active theft records gives you certainty about the title\'s legitimacy. This check runs against national theft databases so you can be sure of the vehicle\'s standing before listing it.',
      highlights: [
        'Active theft records verified against law enforcement and insurance data',
        'Theft recovery status and title legitimacy confirmation',
        'Confirms the vehicle is clear for title transfer',
      ],
      imagePlaceholder: {
        src: '/Stolen Vehicle.webp',
        alt: 'Stolen Vehicle Database Cross-Check Preview',
        caption: 'National Theft Database & NCIC Live Verification',
        badge: 'Clean Theft Record',
        badgeColor: 'bg-emerald-500',
      },
      sampleVin: '2T1BURHE0FC320645',
    },
    odometer: {
      id: 'odometer',
      label: 'Odometer Verification',
      shortTag: 'Mileage Check',
      categoryTag: 'Mileage Verification',
      title: 'Odometer Verification',
      description: 'Knowing that your vehicle\'s mileage is consistent and verifiable is essential when pricing it. Our report tracks odometer readings across inspections, service visits, and DMV records to confirm the mileage progression adds up.',
      highlights: [
        'Sequential mileage tracking across multiple data points',
        'Rollback and discrepancy detection',
        'Cross-referenced DMV, inspection, and service records',
      ],
      imagePlaceholder: {
        src: '/Odometer Rollback.webp',
        alt: 'Odometer Rollback Verification Preview',
        caption: 'Odometer Verification: Sequential Mileage Progression Tracking',
        badge: 'Odometer Verified',
        badgeColor: 'bg-emerald-500',
      },
      sampleVin: '2T1BURHE0FC320645',
    },
    lien: {
      id: 'lien',
      label: 'Loan & Lien',
      shortTag: 'Lender Check',
      categoryTag: 'Financial Status',
      title: 'Loan & Lien Status',
      description: 'Before listing your vehicle, you should confirm whether any active loans or financial encumbrances are associated with it. This section documents the lien status so you can address any outstanding obligations before the sale.',
      highlights: [
        'Active loan and lien status from financial institutions',
        'Confirmation that the title is clear for transfer',
        'Helps you prepare for a smooth, straightforward title transfer',
      ],
      imagePlaceholder: {
        src: '/Loan and Lien.webp',
        alt: 'Loan and Lien Check Preview',
        caption: 'Lien & Financial Security Status Verification',
        badge: 'No Active Liens',
        badgeColor: 'bg-emerald-500',
      },
      sampleVin: '2T1BURHE0FC320645',
    },
  };

  const stories = [
    { id: 'auction', label: 'Auction Records', shortTag: '10 Photos', icon: <Camera className="w-4 h-4" /> },
    { id: 'sales', label: 'Sales Listing', shortTag: 'With Photos', icon: <FileText className="w-4 h-4" /> },
    { id: 'usage', label: 'Vehicle Usage', shortTag: 'Fleet/Personal', icon: <Car className="w-4 h-4" /> },
    { id: 'ownership', label: 'Ownership History', shortTag: 'Tenure & State', icon: <Users className="w-4 h-4" /> },
    { id: 'title', label: 'Title Status', shortTag: '60+ Checks', icon: <Award className="w-4 h-4" /> },
    { id: 'accidents', label: 'Accident Records', shortTag: 'Date & Place', icon: <ShieldAlert className="w-4 h-4" /> },
    { id: 'stolen', label: 'Theft Records', shortTag: 'Theft Check', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'odometer', label: 'Odometer Check', shortTag: 'Mileage Verified', icon: <Gauge className="w-4 h-4" /> },
    { id: 'lien', label: 'Loan & Lien', shortTag: 'Lender Check', icon: <DollarSign className="w-4 h-4" /> },
  ];

  const currentIndex = stories.findIndex((s) => s.id === activeStoryId);
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % stories.length;
    setActiveStoryId(stories[nextIndex].id);
  };
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + stories.length) % stories.length;
    setActiveStoryId(stories[prevIndex].id);
  };

  const currentStory = storyDetails[activeStoryId] || storyDetails.auction;

  return (
    <div className="space-y-0">
      {/* What's Included in a Vehicle History Report */}
      <section className="py-14 sm:py-20 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-200">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-xs text-xs font-bold uppercase tracking-wider text-slate-950 mb-3 shadow-2xs">
                <span className="w-2 h-2 bg-blue-600 rounded-none animate-pulse" />
                <span>Vehicle History Documentation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                What Can You Learn About Your Vehicle?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                A vehicle history report pulls together ownership records, title status, mileage verification, and more. This is the information you should review before deciding how to position and price your vehicle.
              </p>
            </div>

            {/* Stepper Navigation */}
            <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
              <span className="text-xs font-mono font-bold text-slate-500">
                <strong className="text-slate-950">{currentIndex + 1}</strong> of {stories.length}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous Category"
                  className="w-9 h-9 rounded-xs border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-800 transition-colors cursor-pointer shadow-2xs"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next Category"
                  className="w-9 h-9 rounded-xs border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-800 transition-colors cursor-pointer shadow-2xs"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Quick Category Carousel (< lg) */}
          <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-3 mb-5 scrollbar-none">
            {stories.map((story) => {
              const isActive = activeStoryId === story.id;
              return (
                <button
                  key={story.id}
                  onClick={() => setActiveStoryId(story.id)}
                  className={`px-3.5 py-2 rounded-xs text-xs font-bold uppercase tracking-wider shrink-0 transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-slate-950 text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className={isActive ? 'text-blue-400' : 'text-slate-400'}>{story.icon}</span>
                  <span>{story.label}</span>
                </button>
              );
            })}
          </div>

          {/* Main Interactive Master-Detail Console */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Column: Category Navigation Dock (lg:col-span-5) */}
            <div className="hidden lg:flex flex-col space-y-1.5 lg:col-span-5">
              {stories.map((story) => {
                const isActive = activeStoryId === story.id;
                const detail = storyDetails[story.id];
                return (
                  <button
                    key={story.id}
                    id={`story-nav-${story.id}`}
                    onClick={() => setActiveStoryId(story.id)}
                    className={`w-full px-4 py-3 rounded-xs border text-left transition-all cursor-pointer flex items-center justify-between group ${
                      isActive
                        ? 'bg-slate-950 border-slate-950 text-white shadow-xs'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50/90 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-xs flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-900'
                        }`}
                      >
                        {story.icon}
                      </div>
                      <div className="min-w-0">
                        <p className={`text-xs sm:text-sm font-bold truncate ${isActive ? 'text-white' : 'text-slate-950'}`}>
                          {story.label}
                        </p>
                        <p className={`text-[11px] truncate ${isActive ? 'text-slate-400' : 'text-slate-500'}`}>
                          {detail.categoryTag}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs ${
                          isActive
                            ? 'bg-white/10 text-blue-300 border border-white/20'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {story.shortTag}
                      </span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 transition-transform ${
                          isActive ? 'text-blue-400 translate-x-0.5' : 'text-slate-300 group-hover:text-slate-500'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Live Inspector Card (lg:col-span-7) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-sm border border-slate-200 shadow-xs overflow-hidden transition-all">
                {/* Header Bar */}
                <div className="p-5 sm:p-6 border-b border-slate-200">
                  <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-slate-100 px-2.5 py-1 rounded-xs">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-none animate-pulse" />
                      {currentStory.categoryTag}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-snug">
                    {currentStory.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {currentStory.description}
                  </p>
                </div>

                {/* Interactive Image Placeholder Stage */}
                <div className="relative w-full overflow-hidden bg-slate-100 group min-h-[280px] sm:min-h-[420px] flex items-center justify-center">
                  <img loading="lazy"
                    src={currentStory.imagePlaceholder.src}
                    alt={currentStory.imagePlaceholder.alt}
                    className="w-full h-auto max-h-[520px] object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Highlights List Strip */}
                <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200">
                  <div className="space-y-1.5">
                    {currentStory.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 rounded-xs bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 shadow-2xs font-medium"
                      >
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Vehicle Documentation Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xs text-xs font-bold uppercase tracking-wider text-slate-950 mb-3 shadow-2xs">
              <Database className="w-3.5 h-3.5 text-blue-600" />
              <span>More Than Just a History Check</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Build a Complete Understanding of Your Vehicle
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Our reports pull from state DMV records, federal databases, manufacturer data, and auction archives. The result is a consolidated view of your vehicle's background — so you're making decisions based on documented information, not guesswork.
            </p>
          </div>

          {/* 6 Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {/* 1. Vehicle Specifications */}
            <div className="p-6 rounded-sm bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white transition-colors group flex flex-col justify-start h-full shadow-2xs">
              <div className="w-10 h-10 rounded-xs bg-slate-950 text-white flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">
                Vehicle Specifications
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Body style, engine, fuel type, transmission, and factory-installed options. Understand the full technical profile of your vehicle so you can describe it accurately and completely.
              </p>
            </div>

            {/* 2. Title Verification */}
            <div className="p-6 rounded-sm bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white transition-colors group flex flex-col justify-start h-full shadow-2xs">
              <div className="w-10 h-10 rounded-xs bg-slate-950 text-white flex items-center justify-center mb-4 group-hover:bg-amber-600 transition-colors shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">
                Title Verification
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Verified against state DMV, federal, insurance, and auction databases. Knowing your vehicle's title status is essential before you begin pricing or negotiating.
              </p>
            </div>

            {/* 3. Accident & Damage Records */}
            <div className="p-6 rounded-sm bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white transition-colors group flex flex-col justify-start h-full shadow-2xs">
              <div className="w-10 h-10 rounded-xs bg-slate-950 text-white flex items-center justify-center mb-4 group-hover:bg-rose-600 transition-colors shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">
                Accident &amp; Damage Records
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Checked against damage and collision databases in the United States and Canada. Knowing what's on record helps you understand the vehicle's condition history and factor it into your pricing.
              </p>
            </div>

            {/* 4. Market Value Data */}
            <div className="p-6 rounded-sm bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white transition-colors group flex flex-col justify-start h-full shadow-2xs">
              <div className="w-10 h-10 rounded-xs bg-slate-950 text-white flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">
                Market Value Data
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                See how similar vehicles are priced across listing sites in North America. This helps you understand where your vehicle sits in the market and make a more informed pricing decision.
              </p>
            </div>

            {/* 5. Odometer Records */}
            <div className="p-6 rounded-sm bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white transition-colors group flex flex-col justify-start h-full shadow-2xs">
              <div className="w-10 h-10 rounded-xs bg-slate-950 text-white flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors shrink-0">
                <Gauge className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">
                Odometer Records
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                All available mileage records from state DMVs, inspections, and service databases. Confirming your vehicle's mileage is consistent and documented gives you confidence when discussing it.
              </p>
            </div>

            {/* 6. Ownership & Service Records */}
            <div className="p-6 rounded-sm bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white transition-colors group flex flex-col justify-start h-full shadow-2xs">
              <div className="w-10 h-10 rounded-xs bg-slate-950 text-white flex items-center justify-center mb-4 group-hover:bg-sky-600 transition-colors shrink-0">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-2">
                Ownership &amp; Service Records
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Number of previous owners, ownership duration, and available service records in chronological order. Understanding how the vehicle has been cared for over time adds depth to your knowledge of it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
