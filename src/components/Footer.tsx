import React from 'react';
import { Flame, Clock, ShieldCheck } from 'lucide-react';
import { BRANCHES } from '../data/gymData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-800/80 text-zinc-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-900">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-black font-black text-lg">
                <Flame className="w-5 h-5 fill-black stroke-black" />
              </div>
              <span className="text-xl font-black text-white font-['Outfit',sans-serif]">PULSE<span className="text-amber-500">8</span> GYM</span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Hyderabad&apos;s most trusted fitness destination since 2011. Helping 2000+ members build strength, health, and confidence with world-class facilities and expert guidance.
            </p>
            <div className="flex items-center gap-2 text-zinc-500 text-[11px]">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Certified trainers • Official hygienic AC environments</span>
            </div>
          </div>

          {/* Locations */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider font-['Outfit',sans-serif]">
              Branches
            </h4>
            <ul className="space-y-2 text-xs">
              {BRANCHES.map((b) => (
                <li key={b.id} className="space-y-0.5">
                  <a href="#branches" className="text-zinc-300 hover:text-amber-400 font-semibold block">
                    📍 {b.name}
                  </a>
                  <a href={`tel:${b.phone}`} className="text-zinc-500 hover:text-zinc-300 block">
                    📞 {b.displayPhone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Timings */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider font-['Outfit',sans-serif]">
              Working Hours
            </h4>
            <div className="space-y-1.5 text-xs text-zinc-400">
              <p className="flex items-center gap-1.5 text-zinc-300 font-medium">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                Mon – Sat: 5:00 AM – 10:00 PM
              </p>
              <p className="flex items-center gap-1.5 text-zinc-300 font-medium">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                Sunday: 7:00 AM – 12:00 PM
              </p>
              <p className="text-[11px] text-zinc-500 pt-1">
                Uniform timings applicable across Srinagar Colony, Abids & Marredpally.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} Pulse8 Gym Hyderabad. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Special Promotional Offer</span>
            <span>•</span>
            <span>Terms & Conditions Apply</span>
            <span>•</span>
            <span>No Hidden Joining Fees</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
