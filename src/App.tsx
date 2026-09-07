import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OfferSection } from './components/OfferSection';
import { FitnessGoals } from './components/FitnessGoals';
import { HowItWorks } from './components/HowItWorks';
import { WhyPulse8 } from './components/WhyPulse8';
import { LocationsSection } from './components/LocationsSection';
import { ProgramsSection } from './components/ProgramsSection';
import { SocialProofSection } from './components/SocialProofSection';
import { FaqSection } from './components/FaqSection';
import { FooterCta } from './components/FooterCta';
import { Footer } from './components/Footer';
import { ClaimOfferModal } from './components/ClaimOfferModal';
import { MobileBottomBar } from './components/MobileBottomBar';
import { BranchId } from './types';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalBranchId, setModalBranchId] = useState<BranchId>('srinagar');
  const [modalType, setModalType] = useState<'offer' | 'enquiry'>('offer');

  const handleOpenOfferModal = (branchId: BranchId = 'srinagar') => {
    setModalBranchId(branchId);
    setModalType('offer');
    setModalOpen(true);
  };

  const handleOpenEnquiryModal = (branchId: BranchId = 'srinagar') => {
    setModalBranchId(branchId);
    setModalType('enquiry');
    setModalOpen(true);
  };

  const handleScrollToOffers = () => {
    const el = document.getElementById('offers');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenOfferModal();
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-amber-500 selection:text-black pb-16 md:pb-0">
      {/* Navigation Bar */}
      <Navbar onOpenModal={() => handleOpenOfferModal('srinagar')} />

      {/* Main Landing Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onClaimOffer={handleScrollToOffers} />

        {/* 2. Offer Section (Core conversion block right after hero) */}
        <OfferSection onSelectBranch={handleOpenOfferModal} />

        {/* 3. Fitness Goals Section (Whatever Your Goal, Start Here) */}
        <FitnessGoals onClaimOffer={handleScrollToOffers} />

        {/* 4. How It Works Section (Getting Started Is Simple - 4 steps) */}
        <HowItWorks onClaimOffer={handleScrollToOffers} />

        {/* 5. Why Pulse8 Section */}
        <WhyPulse8 />

        {/* 6. Locations Section */}
        <LocationsSection onSelectBranch={handleOpenOfferModal} />

        {/* 7. What We Offer (Programs) */}
        <ProgramsSection onSelectProgram={(_prog) => handleOpenOfferModal('srinagar')} />

        {/* 8. Social Proof Section (Video Reviews for All 3 Branches) */}
        <SocialProofSection onClaimOffer={handleOpenOfferModal} />

        {/* 9. FAQ Section */}
        <FaqSection onAskQuestion={() => handleOpenEnquiryModal('srinagar')} />

        {/* 10. Footer CTA (Final push with repeated Lead Form) */}
        <FooterCta onClaimOffer={handleScrollToOffers} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modal for Claiming Offers or Branch Enquiry */}
      <ClaimOfferModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        branchId={modalBranchId}
        initialType={modalType}
      />

      {/* Sticky Mobile Conversion Bar */}
      <MobileBottomBar onClaimOffer={handleScrollToOffers} />
    </div>
  );
}
