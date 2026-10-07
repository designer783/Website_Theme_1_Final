import React, { useState, useEffect } from 'react';
import { Agentation } from "agentation";
import { PageRoute, VehicleReportData, WindowStickerData, PricingPackage, BuildSheetDetails } from './types';
import { SAMPLE_REPORTS, getVehicleBuildSheet } from './data/mockData';
import { ROUTES, pageFromPath } from './routes';
import { SITE } from './config/site';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { VehicleStorytelling } from './components/VehicleStorytelling';
import { WindowStickerSection } from './components/WindowStickerSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InteractiveReportModal } from './components/InteractiveReportModal';
import { InteractiveStickerModal } from './components/InteractiveStickerModal';
import { InteractiveBuildSheetModal } from './components/InteractiveBuildSheetModal';

// Pages
import { SampleReportsPage } from './pages/SampleReportsPage';
import { HomePage } from './pages/HomePage';
import { VehicleHistoryPage } from './pages/VehicleHistoryPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { StyleGuidePage } from './pages/StyleGuidePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => pageFromPath(window.location.pathname));
  const [activeReport, setActiveReport] = useState<VehicleReportData | null>(null);
  const [activeSticker, setActiveSticker] = useState<WindowStickerData | null>(null);
  const [activeBuildSheet, setActiveBuildSheet] = useState<BuildSheetDetails | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<PricingPackage | null>(null);
  const [searchedVin, setSearchedVin] = useState<string>('');

  // Keep the URL and <title> in sync so each page has its own address (/pricing/, /contact/, ...)
  useEffect(() => {
    // Login lives on the members site
    if (currentPage === 'login') {
      window.location.replace(SITE.loginUrl);
      return;
    }
    document.title = ROUTES[currentPage].title;
  }, [currentPage]);

  useEffect(() => {
    const onPopState = () => setCurrentPage(pageFromPath(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const goToPage = (page: PageRoute) => {
    if (window.location.pathname !== ROUTES[page].path) {
      window.history.pushState(null, '', ROUTES[page].path);
    }
    setCurrentPage(page);
  };

  const handleNavigate = (page: PageRoute) => {
    goToPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenReport = (vin: string) => {
    const report = SAMPLE_REPORTS[vin] || SAMPLE_REPORTS['2T1BURHE0FC320645'];
    setActiveReport(report);
  };

  const handleOpenSticker = (vin: string) => {
    const report = SAMPLE_REPORTS[vin] || SAMPLE_REPORTS['1HGFA15547L116880'];
    if (report && report.windowStickerData) {
      setActiveSticker(report.windowStickerData);
    }
  };

  const handleOpenBuildSheet = (vin: string) => {
    const report = SAMPLE_REPORTS[vin] || SAMPLE_REPORTS['2T1BURHE0FC320645'];
    const sheet = getVehicleBuildSheet(report);
    setActiveBuildSheet(sheet);
  };

  const handleSearchVin = (vin: string) => {
    setSearchedVin(vin);
    const cleanVin = vin.trim().toUpperCase();

    // Check direct key match
    if (SAMPLE_REPORTS[cleanVin]) {
      setActiveReport(SAMPLE_REPORTS[cleanVin]);
      return;
    }

    // Check prefix / partial matches
    const matchedKey = Object.keys(SAMPLE_REPORTS).find((k) => 
      k.includes(cleanVin) || cleanVin.startsWith(k.slice(0, 3))
    );

    if (matchedKey) {
      setActiveReport(SAMPLE_REPORTS[matchedKey]);
      return;
    }

    // Dynamic generation for custom 17-character VIN
    const generatedReport: VehicleReportData = {
      vin: cleanVin || 'WDDGF5EB3BR183192',
      year: 2021,
      make: 'Verified Domestic/Import',
      model: 'Certified Vehicle',
      trim: 'Premium Package',
      bodyStyle: 'Sedan / SUV / Truck',
      engine: 'Direct Injection Turbocharged Engine',
      transmission: 'Multi-Speed Electronic Automatic',
      drivetrain: 'All-Wheel Drive (AWD)',
      fuelType: 'Gasoline',
      assemblyCountry: 'United States',
      exteriorColor: 'Factory Original Finish',
      interiorColor: 'Premium Leather Trim',
      originalMsrp: 42500,
      currentMarketValue: {
        tradeIn: 24500,
        privateParty: 28200,
        dealerRetail: 31000,
        averageDaysOnMarket: 24,
      },
      ownersCount: 1,
      accidentsCount: 0,
      mileage: 41200,
      titleStatus: 'Clean',
      odometerStatus: 'Normal & Verified',
      imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      salesHistory: [
        {
          date: '04/12/2021',
          price: 42500,
          sellerType: 'Authorized OEM Franchise Dealership',
          mileage: 15,
          condition: 'Factory Delivery Clean',
        },
      ],
      ownershipTimeline: [
        {
          ownerNumber: 1,
          yearPurchased: 2021,
          yearEnded: 'Present',
          duration: '3+ Years',
          location: 'Delaware / Eastern Region',
          usageType: 'Personal',
          estimatedMilesPerYear: 10300,
        },
      ],
      serviceRecords: [
        {
          date: '10/18/2021',
          odometer: 8500,
          source: 'Certified Service Center',
          description: 'Factory scheduled maintenance, synthetic oil replacement, multipoint inspection.',
        },
        {
          date: '06/22/2023',
          odometer: 27400,
          source: 'Certified Service Center',
          description: 'Cabin air filtration, 4-wheel rotation, computer diagnostic scan passed.',
        },
      ],
      titleBrands: [
        { name: 'Salvage / Junk', passed: true, description: 'No salvage record on file across all 50 states.' },
        { name: 'Flood & Water Damage', passed: true, description: 'Clean flood audit. No hurricane or water damage claims.' },
        { name: 'Fire / Total Loss', passed: true, description: 'Clean loss claim history verified.' },
        { name: 'Odometer Rollback', passed: true, description: 'Chronological progression verified with no tampering.' },
      ],
      safetyRecalls: [],
      windowStickerData: {
        vin: cleanVin,
        year: 2021,
        make: 'Certified Make',
        model: 'Series Model',
        trim: 'Touring Edition',
        basePrice: 38900,
        totalOptionsPrice: 2450,
        destinationCharge: 1150,
        totalMSRP: 42500,
        exteriorColor: 'Factory Original Finish',
        interiorColor: 'Ebony Premium Interior',
        standardFeatures: [
          {
            category: 'Safety & Performance',
            items: [
              'Advanced Driver Assistance Suite with Automatic Emergency Braking',
              'Blind Spot Monitoring & Rear Cross-Traffic Alert',
              'Electronic Stability Control & Traction Management',
            ],
          },
          {
            category: 'Comfort & Technology',
            items: [
              'High-Resolution Touchscreen Infotainment with Apple CarPlay & Android Auto',
              'Dual-Zone Automatic Climate Control',
              'Keyless Entry & Push-Button Start',
            ],
          },
        ],
        optionalEquipment: [
          { name: 'Technology & Sound Package', code: 'TECH', price: 1850 },
          { name: 'All-Weather Floor Protection', code: 'AWP', price: 600 },
        ],
        fuelEconomy: {
          cityMpg: 26,
          highwayMpg: 34,
          combinedMpg: 29,
          annualFuelCost: 1750,
        },
        safetyRatings: {
          overall: 5,
          frontalCrash: 5,
          sideCrash: 5,
          rollover: 5,
        },
        warranty: [
          '3 Year / 36,000 Mile Comprehensive Bumper-to-Bumper',
          '5 Year / 60,000 Mile Powertrain Limited Warranty',
        ],
      },
    };

    setActiveReport(generatedReport);
  };

  const handleOpenLookup = () => {
    if (currentPage !== 'home') {
      goToPage('home');
      setTimeout(() => {
        const el = document.getElementById('vin-lookup-container');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById('vin-lookup-container');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col font-sans text-slate-900 antialiased">
      {/* Global Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenLookup={handleOpenLookup}
      />

      {/* Main Routed Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onSearchVin={handleSearchVin}
            onOpenSticker={handleOpenSticker}
            setSelectedPackage={setSelectedPackage}
          />
        )}

        {currentPage === 'vehicle-history' && (
          <VehicleHistoryPage
            onSearchVin={handleSearchVin}
            onOpenReport={handleOpenReport}
            onOpenSticker={handleOpenSticker}
            onNavigateStickerPage={() => {
              // The button currently exists as onViewStickers or onNavigateStickerPage
              // They should probably just scroll down or open sticker now, or navigate to 'home'
              handleNavigate('home');
            }}
            setSelectedPackage={setSelectedPackage}
          />
        )}

        {currentPage === 'sample' && (
          <SampleReportsPage
            onOpenReport={handleOpenReport}
            onOpenSticker={handleOpenSticker}
            onOpenBuildSheet={handleOpenBuildSheet}
          />
        )}

        {currentPage === 'pricing' && (
          <PricingPage
            onSelectPackage={(pkg) => setSelectedPackage(pkg)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}

        {currentPage === 'login' && (
          <LoginPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'terms' && (
          <TermsPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'privacy' && (
          <PrivacyPage />
        )}

        {currentPage === 'style-guide' && (
          <StyleGuidePage
            onNavigate={handleNavigate}
            onOpenSampleReport={handleOpenReport}
            onOpenSticker={handleOpenSticker}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Vehicle Report Modal */}
      {activeReport && (
        <InteractiveReportModal
          report={activeReport}
          onClose={() => setActiveReport(null)}
          onOpenSticker={handleOpenSticker}
          onOpenBuildSheet={handleOpenBuildSheet}
        />
      )}

      {/* Interactive Window Sticker Modal */}
      {activeSticker && (
        <InteractiveStickerModal
          sticker={activeSticker}
          onClose={() => setActiveSticker(null)}
        />
      )}

      {/* Interactive Build Sheet Modal */}
      {activeBuildSheet && (
        <InteractiveBuildSheetModal
          buildSheet={activeBuildSheet}
          onClose={() => setActiveBuildSheet(null)}
          onOpenSticker={handleOpenSticker}
        />
      )}

      
      {import.meta.env?.DEV === true || (typeof process !== 'undefined' && process.env.NODE_ENV === "development") ? <Agentation /> : null}
    </div>
  );
}
