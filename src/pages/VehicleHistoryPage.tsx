import React from 'react';
import { Hero } from '../components/Hero';
import { VehicleStorytelling } from '../components/VehicleStorytelling';
import { WindowStickerSection } from '../components/WindowStickerSection';
import { PricingSection } from '../components/PricingSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { PricingPackage } from '../types';
import { HISTORY_PACKAGES } from '../data/mockData';

interface VehicleHistoryPageProps {
  onSearchVin: (vin: string) => void;
  onOpenReport: (vin: string) => void;
  onOpenSticker: (vin: string) => void;
  onNavigateStickerPage: () => void;
  setSelectedPackage: (pkg: PricingPackage | null) => void;
}

export const VehicleHistoryPage: React.FC<VehicleHistoryPageProps> = ({
  onSearchVin,
  onOpenReport,
  onOpenSticker,
  onNavigateStickerPage,
  setSelectedPackage,
}) => {
  return (
    <>
      <Hero
        onSearchVin={onSearchVin}
        onOpenSample={onOpenReport}
        onViewStickers={onNavigateStickerPage}
      />
      <VehicleStorytelling
        onExploreReport={onOpenReport}
        onExploreSticker={onOpenSticker}
      />
      <WindowStickerSection
        onOpenSticker={onOpenSticker}
        onNavigateStickerPage={onNavigateStickerPage}
      />
      <PricingSection
        packages={HISTORY_PACKAGES}
        onSelectPackage={(pkg) => setSelectedPackage(pkg)}
      />
      <TestimonialsSection />
    </>
  );
};
