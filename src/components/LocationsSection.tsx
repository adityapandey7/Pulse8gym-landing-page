import React from 'react';
import { MapPin, Phone, Navigation, Clock, Calendar, Check, ExternalLink } from 'lucide-react';
import { BRANCHES } from '../data/gymData';
import { BranchId } from '../types';

interface LocationsSectionProps {
  onSelectBranch: (branchId: BranchId) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onSelectBranch }) => {
  return (
    <section id="branches" className="py-20 bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">Hyderabad Locations</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit',sans-serif] tracking-tight mt-2">
            Find Your Nearest Pulse8 Gym
          </h2>
          <p className="text-base text-zinc-300 mt-3">
            Choose from 3 prime Hyderabad locations. Every facility is fully equipped, climate controlled, and staffed with certified coaches.
          </p>

          {/* Timings Highlight Box */}
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs sm:text-sm text-zinc-300">
            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong className="text-white">Timings (all branches):</strong> Mon–Sat: 5:00 AM – 10:00 PM · Sunday: 7:00 AM – 12:00 PM
            </span>
          </div>
        </div>

        {/* 3 Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BRANCHES.map((branch) => {
            return (
              <div
                key={branch.id}
                className="rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 overflow-hidden flex flex-col justify-between shadow-xl group transition-all"
              >
                <div>
                  {/* Branch Photo Header */}
                  <div className="relative h-48 w-full overflow-hidden bg-zinc-800">
                    <img
                      src={
                        branch.id === 'srinagar'
                          ? 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80'
                          : branch.id === 'abids'
                          ? 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80'
                          : 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80'
                      }
                      alt={`Pulse8 Gym ${branch.name}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-zinc-950/80 backdrop-blur-sm border border-zinc-700 text-amber-400 text-xs font-bold">
                        📍 {branch.name}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-xs text-amber-400 font-semibold italic">
                        {branch.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Branch Details */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-black text-white font-['Outfit',sans-serif]">
                      📍 {branch.name}
                    </h3>

                    <div className="space-y-2 text-sm text-zinc-300">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                        <p className="leading-snug">{branch.address}</p>
                      </div>

                      <div className="flex items-center gap-2.5 pt-1">
                        <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                        <a
                          href={`tel:${branch.phone}`}
                          className="font-bold text-white hover:text-amber-400 transition"
                        >
                          📞 {branch.displayPhone}
                        </a>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-zinc-400">
                      <span className="px-2 py-1 rounded bg-zinc-950 border border-zinc-800">✓ AC Gym Floor</span>
                      <span className="px-2 py-1 rounded bg-zinc-950 border border-zinc-800">✓ Free Parking</span>
                      <span className="px-2 py-1 rounded bg-zinc-950 border border-zinc-800">✓ Showers</span>
                      <span className="px-2 py-1 rounded bg-zinc-950 border border-zinc-800">✓ Locker Rooms</span>
                    </div>
                  </div>
                </div>

                {/* Branch CTAs */}
                <div className="p-6 pt-0 space-y-2.5">
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      onClick={() => onSelectBranch(branch.id)}
                      className="w-full py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs tracking-wide transition text-center cursor-pointer shadow-md"
                    >
                      Claim Offer
                    </button>
                    
                    <a
                      href={branch.gmapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-xs transition flex items-center justify-center gap-1.5"
                    >
                      <Navigation className="w-3.5 h-3.5 text-amber-400" />
                      <span>Directions</span>
                    </a>
                  </div>

                  <a
                    href={`tel:${branch.phone}`}
                    className="block text-center text-xs text-zinc-400 hover:text-zinc-200 pt-1"
                  >
                    Quick call: <span className="text-amber-400 font-medium">{branch.displayPhone}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
