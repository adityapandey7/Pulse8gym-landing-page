import React from 'react';
import { MapPin, Tag, UserCheck, Flame, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/gymData';

interface HowItWorksProps {
  onClaimOffer: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onClaimOffer }) => {
  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <MapPin className="w-6 h-6 text-amber-400" />;
      case 2:
        return <Tag className="w-6 h-6 text-amber-400" />;
      case 3:
        return <UserCheck className="w-6 h-6 text-amber-400" />;
      case 4:
      default:
        return <Flame className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-zinc-900/40 border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>HOW IT WORKS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit',sans-serif] tracking-tight">
            Getting Started Is Simple
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 mt-4 leading-relaxed">
            Joining Hyderabad&apos;s most supportive fitness community takes just a few straightforward steps.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative mb-14">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="relative p-6 sm:p-7 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 transition-all flex flex-col justify-between group"
            >
              {/* Step indicator pill */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getStepIcon(step.stepNumber)}
                  </div>
                  <span className="font-mono text-2xl font-black text-zinc-700 group-hover:text-amber-500/50 transition-colors">
                    0{step.stepNumber}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                    {step.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-['Outfit',sans-serif] mb-2.5">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-zinc-800/80 flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Step 0{step.stepNumber} of 04</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick CTA strip */}
        <div className="text-center pt-2">
          <button
            onClick={onClaimOffer}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-zinc-950 font-black text-base tracking-wide shadow-xl shadow-amber-500/20 cursor-pointer inline-flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 transition-all"
            id="how-it-works-claim-btn"
          >
            <span>CLAIM ANNUAL OFFER →</span>
          </button>
          <p className="text-xs text-zinc-400 mt-3">
            Questions before signing up? Call our fitness counselors at <a href="tel:9908002743" className="text-amber-400 hover:underline font-semibold">9908002743</a>
          </p>
        </div>
      </div>
    </section>
  );
};
