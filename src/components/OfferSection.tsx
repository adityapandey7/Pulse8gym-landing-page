import React, { useState, useEffect } from 'react';
import { Sparkles, Check, Clock, ShieldCheck, Tag, ArrowRight, Flame, Percent } from 'lucide-react';
import { BRANCHES } from '../data/gymData';
import { BranchId } from '../types';
import { LeadForm } from './LeadForm';
import { GoogleReviewSpotlight } from './GoogleReviewSpotlight';

interface OfferSectionProps {
  onSelectBranch: (branchId: BranchId) => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onSelectBranch }) => {
  const [selectedBranchId, setSelectedBranchId] = useState<BranchId>('srinagar');
  
  // Urgency Countdown Timer (3 days ahead from now)
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 36,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="offers" className="relative py-16 sm:py-20 bg-zinc-950 border-t border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Flame className="w-3.5 h-3.5 fill-amber-400" />
            <span>ANNUAL SPECIAL OFFERS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit',sans-serif] tracking-tight">
            Choose Your Pulse8 Membership
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 mt-3">
            Get more from your annual membership with our current branch-specific special offers.
          </p>

          {/* Countdown & Urgency banner */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 p-3.5 rounded-2xl bg-zinc-900/90 border border-amber-500/40 shadow-lg">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400">
              <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Offer Ends Soon:</span>
            </div>
            <div className="flex items-center gap-2 font-mono font-black text-white text-sm sm:text-base">
              <span className="px-2 py-1 rounded bg-zinc-950 border border-zinc-800 text-amber-400">{String(timeLeft.days).padStart(2, '0')}d</span>
              <span>:</span>
              <span className="px-2 py-1 rounded bg-zinc-950 border border-zinc-800 text-amber-400">{String(timeLeft.hours).padStart(2, '0')}h</span>
              <span>:</span>
              <span className="px-2 py-1 rounded bg-zinc-950 border border-zinc-800 text-amber-400">{String(timeLeft.minutes).padStart(2, '0')}m</span>
              <span>:</span>
              <span className="px-2 py-1 rounded bg-zinc-950 border border-zinc-800 text-amber-400">{String(timeLeft.seconds).padStart(2, '0')}s</span>
            </div>
            <span className="text-xs text-zinc-400 border-l border-zinc-700 pl-3 hidden md:inline">
              Only 7 discount passes allocated per location
            </span>
          </div>
        </div>

        {/* 3 Offer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {BRANCHES.map((branch) => {
            const isSelected = selectedBranchId === branch.id;
            return (
              <div
                key={branch.id}
                onClick={() => setSelectedBranchId(branch.id)}
                className={`relative rounded-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden border ${
                  isSelected
                    ? 'bg-zinc-900 border-amber-500 shadow-2xl shadow-amber-500/10 ring-2 ring-amber-500/30 -translate-y-1'
                    : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/90'
                }`}
              >
                {/* Branch Badges */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300">
                      📍 {branch.name}
                    </span>
                    {branch.id === 'abids' && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-400 border border-amber-500/30">
                        Hyderabad&apos;s Oldest
                      </span>
                    )}
                    {branch.isPopular && branch.id !== 'abids' && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        Top Rated
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-black text-white font-['Outfit',sans-serif]">
                    {branch.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">{branch.tagline}</p>

                  {/* Pricing Display */}
                  <div className="mt-5 pt-4 border-t border-zinc-800">
                    <div className="flex items-baseline gap-2.5">
                      <span className="text-sm sm:text-base text-zinc-400 line-through">
                        ₹{branch.originalPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-3xl sm:text-4xl font-black text-amber-400 tracking-tight font-['Outfit',sans-serif]">
                        ₹{branch.offerPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs font-medium text-zinc-400">
                        {branch.id === 'abids' ? 'total' : '/year'}
                      </span>
                    </div>

                    {/* Savings Tag */}
                    <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                      <Percent className="w-3.5 h-3.5" />
                      <span>{branch.bonusText}</span>
                    </div>

                    {/* Offer Duration & Feature Highlights */}
                    <div className="mt-4 p-3.5 rounded-xl bg-zinc-950/90 border border-zinc-800 space-y-1">
                      {branch.id === 'abids' ? (
                        <>
                          <p className="text-xs font-bold text-amber-400">
                            ✨ 12 + 3 Months FREE
                          </p>
                          <p className="text-[11px] font-semibold text-emerald-400">
                            🎉 15 MONTHS TOTAL
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="text-xs font-bold text-amber-400">
                            ✨ 12 Months + 2 Months FREE
                          </p>
                          <p className="text-[11px] font-semibold text-emerald-400">
                            🛡️ + 1 Month Freeze Option
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* What's Included bullets */}
                  <div className="mt-5 space-y-2 text-xs text-zinc-300">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Full cardio & weight room access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Locker, shower & changing rooms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Certified trainer on floor</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Free member parking space</span>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0 mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedBranchId(branch.id);
                      onSelectBranch(branch.id);
                    }}
                    className={`w-full py-3.5 px-4 rounded-xl font-black text-sm tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500 hover:bg-amber-400 text-black shadow-lg shadow-amber-500/20'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                    }`}
                    id={`claim-offer-${branch.id}-btn`}
                  >
                    <span>CLAIM THIS OFFER →</span>
                  </button>
                  <p className="text-center text-[11px] text-zinc-400 mt-2">
                    Direct branch line: <a href={`tel:${branch.phone}`} className="text-amber-400 hover:underline">{branch.displayPhone}</a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Micro-copy under all cards */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-zinc-900/70 border border-zinc-800 p-5 sm:p-6 mb-8 text-center space-y-2">
          <p className="text-xs sm:text-sm text-zinc-200 font-medium leading-relaxed">
            ✅ <strong className="text-white">All plans include:</strong> equipment access, locker & shower, certified trainer supervision, free parking, group classes & AC environment.
          </p>
          <p className="text-xs text-amber-400 font-semibold">
            ⏳ Offer valid for a limited period — prices go back up after this promotion ends.
          </p>
        </div>

        {/* Google Business Profile Verified Review Spotlight - Placed right where users choose to claim their offer */}
        <GoogleReviewSpotlight
          selectedBranchId={selectedBranchId}
          onSelectBranch={(id) => {
            setSelectedBranchId(id);
          }}
          onClaimOffer={(id) => {
            setSelectedBranchId(id);
            onSelectBranch(id);
          }}
        />

        {/* Embedded Lead Form Section directly below Offer cards for maximum conversion */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">Direct Reservation</span>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-['Outfit',sans-serif]">
              Lock In Your Annual Offer Today
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Fill the 3 quick details below. Our branch manager will call to confirm your discounted pass immediately.
            </p>
          </div>

          <LeadForm
            defaultBranch={selectedBranchId}
            variant="card"
            idPrefix="offer-section-form"
          />
        </div>
      </div>
    </section>
  );
};
