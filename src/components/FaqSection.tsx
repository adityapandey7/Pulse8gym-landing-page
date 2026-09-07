import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, ArrowRight } from 'lucide-react';
import { FAQ_LIST } from '../data/gymData';

interface FaqSectionProps {
  onAskQuestion: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onAskQuestion }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-zinc-900/30 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">Got Questions?</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-['Outfit',sans-serif] tracking-tight mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-zinc-300 mt-2">
            Everything you need to know about Pulse8 memberships, facilities, and branch policies.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQ_LIST.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/80 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-900 transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-white text-base sm:text-lg font-['Outfit',sans-serif]">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-amber-500/20 text-amber-400' : 'text-zinc-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 mt-1">
                    <p className="pt-4">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact helper */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-white text-base">Have a question not listed here?</h4>
            <p className="text-xs text-zinc-400 mt-0.5">Our fitness counselors are available from 5 AM to 10 PM daily.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:9908002743"
              className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>9908002743</span>
            </a>
            <button
              onClick={onAskQuestion}
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold transition cursor-pointer"
            >
              Talk to Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
