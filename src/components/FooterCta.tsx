import React from 'react';
import { Phone, ArrowRight, Flame, ShieldAlert, Sparkles, MapPin } from 'lucide-react';
import { BRANCHES } from '../data/gymData';
import { LeadForm } from './LeadForm';

interface FooterCtaProps {
  onClaimOffer: () => void;
}

export const FooterCta: React.FC<FooterCtaProps> = ({ onClaimOffer }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black border-t border-zinc-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Urgency & Final Call to Action */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
              <Flame className="w-3.5 h-3.5 fill-amber-400" />
              <span>Final Call for Annual Rates</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit',sans-serif] tracking-tight leading-tight">
              Don&apos;t Miss This Year&apos;s Best Membership Offer
            </h2>

            <p className="text-base sm:text-lg text-zinc-300">
              Only a limited number of annual memberships available at this price. Lock in your special rate at Srinagar Colony, Abids, or Marredpally before standard pricing resumes.
            </p>

            {/* Direct Branch Call buttons */}
            <div className="pt-2 space-y-3">
              <p className="text-xs uppercase font-bold tracking-wider text-zinc-400">
                📞 Or call your nearest branch directly:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {BRANCHES.map((b) => (
                  <a
                    key={b.id}
                    href={`tel:${b.phone}`}
                    className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 hover:bg-zinc-850 transition text-center group"
                  >
                    <div className="text-xs font-bold text-zinc-200 group-hover:text-amber-400 truncate">
                      {b.name}
                    </div>
                    <div className="text-xs text-amber-400 font-mono font-semibold mt-0.5">
                      {b.displayPhone}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onClaimOffer}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-zinc-950 font-black text-base tracking-wide shadow-xl shadow-amber-500/25 transition cursor-pointer flex items-center justify-center gap-2 mx-auto lg:mx-0"
              >
                <span>Claim My Offer Now →</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Repeated Lead Form near the bottom as requested */}
          <div className="lg:col-span-6">
            <LeadForm
              variant="card"
              title="Lock In Your Annual Discount"
              subtitle="Quick 30-second form. We will call you within 30 minutes with your membership pass."
              idPrefix="bottom-form"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
