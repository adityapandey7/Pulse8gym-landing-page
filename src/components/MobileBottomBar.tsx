import React from 'react';
import { Phone, ArrowRight, Flame } from 'lucide-react';

interface MobileBottomBarProps {
  onClaimOffer: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onClaimOffer }) => {
  return (
    <aside aria-label="Mobile actions" className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 p-3 flex items-center gap-2.5 shadow-2xl">
      <a
        href="tel:9908002743"
        className="flex-1 py-3 px-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-bold text-xs flex items-center justify-center gap-2 active:bg-zinc-800"
      >
        <Phone className="w-4 h-4 text-amber-400 shrink-0" />
        <span>Call Gym</span>
      </a>

      <button
        onClick={onClaimOffer}
        className="flex-[2] py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-zinc-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/20 active:scale-95 transition"
      >
        <Flame className="w-4 h-4 fill-black shrink-0" />
        <span>Claim Offer (Save ₹9k)</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
};
