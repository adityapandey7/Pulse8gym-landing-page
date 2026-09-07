import React from 'react';
import { Dumbbell, UserCheck, Flame, HeartHandshake, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { WHY_PULSE8_POINTS } from '../data/gymData';

export const WhyPulse8: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'dumbbell':
        return <Dumbbell className="w-6 h-6 text-amber-400" />;
      case 'user-check':
        return <UserCheck className="w-6 h-6 text-amber-400" />;
      case 'flame':
        return <Flame className="w-6 h-6 text-amber-400" />;
      case 'heart-handshake':
        return <HeartHandshake className="w-6 h-6 text-amber-400" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'compass':
      default:
        return <MapPin className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="why-pulse8" className="py-20 bg-zinc-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">The Pulse8 Advantage</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit',sans-serif] tracking-tight mt-2">
            Why 2000+ Hyderabad Residents Choose Pulse8
          </h2>
          <p className="text-base text-zinc-300 mt-4 leading-relaxed">
            From complete beginners stepping into a gym for the first time to seasoned athletes, here is why fitness lovers in Hyderabad trust Pulse8 year after year.
          </p>
        </div>

        {/* 6 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_PULSE8_POINTS.map((point, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/40 hover:bg-zinc-900 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getIcon(point.icon)}
                </div>
                <h3 className="text-xl font-bold text-white font-['Outfit',sans-serif] group-hover:text-amber-400 transition-colors">
                  {point.title}
                </h3>
                <p className="text-sm text-zinc-400 mt-2.5 leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-zinc-800/80 flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified feature across all branches</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
