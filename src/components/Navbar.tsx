import React from 'react';
import { Phone, Flame } from 'lucide-react';

interface NavbarProps {
  onOpenModal: (branchId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-zinc-950/90 border-b border-zinc-800/80 transition-all">
      {/* Top Urgency Ticker Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-orange-500 text-black px-4 py-1.5 text-xs sm:text-sm font-semibold text-center flex items-center justify-center gap-2">
        <span className="flex h-2 w-2 rounded-full bg-zinc-950 animate-ping" />
        <span>🔥 Limited-Time Annual Offer: Save Up to ₹9,000 across 3 Hyderabad Branches!</span>
        <button
          onClick={() => onOpenModal()}
          className="underline font-black hover:text-white transition-colors cursor-pointer hidden sm:inline-block ml-1"
        >
          Claim Now &rarr;
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-black font-black text-xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Flame className="w-6 h-6 fill-black stroke-black" />
          </div>
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-black tracking-tight text-white font-['Outfit',sans-serif]">PULSE<span className="text-amber-500">8</span></span>
              <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">GYM</span>
            </div>
            <p className="text-[10px] text-zinc-400 -mt-1 hidden sm:block">Since 2011 • 3 Hyderabad Hubs</p>
          </div>
        </a>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3.5">
          <a
            href="tel:9908002743"
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white px-2.5 sm:px-3 py-2 rounded-lg hover:bg-zinc-900 border border-zinc-800 transition"
            id="nav-call-btn"
          >
            <Phone className="w-4 h-4 text-amber-500 shrink-0" />
            <span className="hidden xs:inline sm:inline">9908002743</span>
            <span className="xs:hidden sm:hidden">Call</span>
          </a>
          <button
            onClick={() => onOpenModal()}
            className="relative px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-zinc-950 font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 active:scale-95 transition cursor-pointer whitespace-nowrap"
            id="nav-claim-btn"
          >
            Claim Offer
          </button>
        </div>
      </div>
    </header>
  );
};
