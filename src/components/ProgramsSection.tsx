import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { PROGRAMS } from '../data/gymData';

interface ProgramsSectionProps {
  onSelectProgram: (programName: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram }) => {
  return (
    <section id="programs" className="py-20 bg-zinc-900/40 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">Training Programs</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit',sans-serif] tracking-tight mt-2">
            What We Offer
          </h2>
          <p className="text-base text-zinc-300 mt-3">
            Whether your goal is fat loss, athletic conditioning, muscle building, or general wellness, our structured programs are tailored to your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-lg"
            >
              {/* Program Cover Image */}
              <div className="relative h-48 w-full overflow-hidden bg-zinc-950">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent" />
                
                {/* Badge if available */}
                {program.badge && (
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-amber-500 text-black font-extrabold text-[10px] uppercase tracking-wider shadow">
                    {program.badge}
                  </span>
                )}

                <div className="absolute bottom-3 left-4">
                  <span className="px-2.5 py-1 rounded-md bg-zinc-950/80 backdrop-blur-sm border border-zinc-700 text-amber-400 text-xs font-bold">
                    {program.tag}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white font-['Outfit',sans-serif] group-hover:text-amber-400 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                    {program.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-xs text-zinc-400 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-amber-400" />
                    Included in membership
                  </span>
                  <button
                    onClick={() => onSelectProgram(program.title)}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
