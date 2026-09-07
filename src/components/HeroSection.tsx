import React from 'react';
import { Star, MapPin, Dumbbell, Phone, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onClaimOffer: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onClaimOffer }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Subtle atmospheric glow effects */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Typography & CTAs */}
          <div className="w-full lg:col-span-7 space-y-6 text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>TRAINING SINCE 2011</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-['Outfit',sans-serif] leading-[1.1]">
              Make This Year Your Fittest Yet.
            </h1>

            {/* Sub-headline */}
            <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 font-['Outfit',sans-serif]">
              Annual Special Membership Offers Starting at ₹15,999
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Pulse8 Gym helps you build strength, improve fitness and stay consistent with experienced trainers, flexible timings and three convenient locations.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onClaimOffer}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-zinc-950 font-black text-base sm:text-lg tracking-wide shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer group"
                id="hero-claim-btn"
              >
                <span>CLAIM ANNUAL OFFER →</span>
              </button>

              <a
                href="tel:9908002743"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 font-bold text-base transition-colors flex items-center justify-center gap-2.5"
                id="hero-call-btn"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Talk to Our Team</span>
              </a>
            </div>

            {/* Branch Quick Indicator */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-zinc-400">
              <span className="text-zinc-400 font-medium">Locations in Hyderabad:</span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">📍 Srinagar Colony</span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">📍 Abids</span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">📍 Marredpally</span>
            </div>
          </div>

          {/* Right Column: Visual Gym Gallery (Stock Images Showcase - Hidden on Mobile & Tablet) */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-3.5">
              {/* Main Primary Image */}
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80"
                  alt="Pulse8 Gym Interior and Strength Training Facilities"
                  className="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-zinc-950/20" />
                
                {/* Floating Tag */}
                <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-amber-400 font-bold text-xs tracking-wide shadow-lg backdrop-blur-sm">
                  <Dumbbell className="w-3.5 h-3.5 text-amber-400" />
                  <span>State-of-the-Art Equipment</span>
                </div>

                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-xs text-zinc-300">
                  <span className="font-semibold bg-zinc-950/80 px-2.5 py-1 rounded-md border border-zinc-800">
                    Spacious & Fully Air-Conditioned
                  </span>
                  <span className="font-semibold text-amber-400 bg-zinc-950/80 px-2.5 py-1 rounded-md border border-zinc-800">
                    Since 2011
                  </span>
                </div>
              </div>

              {/* Secondary Dual Images Grid */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="relative h-40 sm:h-44 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 group">
                  <img
                    src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80"
                    alt="Strength & Conditioning Training at Pulse8"
                    className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <p className="text-xs font-bold text-white leading-tight">Strength & Cardio</p>
                    <p className="text-[10px] text-zinc-400">Free weights & machines</p>
                  </div>
                </div>

                <div className="relative h-40 sm:h-44 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 group">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80"
                    alt="Personal Trainer Guidance at Pulse8 Gym"
                    className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <p className="text-xs font-bold text-white leading-tight">Certified Coaches</p>
                    <p className="text-[10px] text-zinc-400">Personalized guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Strip (CRO 3 Pillars) */}
        <div className="mt-14 pt-8 border-t border-zinc-800/80">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0 border border-amber-500/20">
                <Dumbbell className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <p className="text-base font-black text-white leading-tight font-['Outfit',sans-serif]">14+ Years</p>
                <p className="text-xs text-zinc-400">of Experience (Since 2011)</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0 border border-amber-500/20">
                <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <p className="text-base font-black text-white leading-tight font-['Outfit',sans-serif]">1,845+ Reviews</p>
                <p className="text-xs text-zinc-400">Across 3 Hyderabad Branches</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0 border border-amber-500/20">
                <MapPin className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <p className="text-base font-black text-white leading-tight font-['Outfit',sans-serif]">3 Locations</p>
                <p className="text-xs text-zinc-400">Srinagar Colony • Abids • Marredpally</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
