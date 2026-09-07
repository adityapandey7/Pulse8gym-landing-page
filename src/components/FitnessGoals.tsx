import React, { useState } from 'react';
import { Dumbbell, Flame, TrendingUp, HeartPulse, CheckCircle2, ArrowRight, ShieldCheck, Target } from 'lucide-react';
import { FITNESS_GOALS, FitnessGoal } from '../data/gymData';

interface FitnessGoalsProps {
  onSelectGoal?: (goalId: string) => void;
  onClaimOffer: () => void;
}

export const FitnessGoals: React.FC<FitnessGoalsProps> = ({ onSelectGoal, onClaimOffer }) => {
  const [activeGoalId, setActiveGoalId] = useState<string>('strength');

  const getIcon = (goalId: string) => {
    switch (goalId) {
      case 'strength':
        return <Dumbbell className="w-6 h-6 text-amber-400" />;
      case 'fat-loss':
        return <Flame className="w-6 h-6 text-amber-400" />;
      case 'muscle':
        return <TrendingUp className="w-6 h-6 text-amber-400" />;
      case 'fitness':
        return <HeartPulse className="w-6 h-6 text-amber-400" />;
      case 'routine':
      default:
        return <CheckCircle2 className="w-6 h-6 text-amber-400" />;
    }
  };

  const activeGoal = FITNESS_GOALS.find((g) => g.id === activeGoalId) || FITNESS_GOALS[0];

  return (
    <section id="goals" className="py-20 bg-zinc-950 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Target className="w-3.5 h-3.5 text-amber-400" />
            <span>Tailored For Your Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit',sans-serif] tracking-tight">
            Whatever Your Goal, Start Here
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 mt-4 leading-relaxed">
            Whether you are walking into a gym for the first time or getting back into training, we are here to support your fitness journey.
          </p>
        </div>

        {/* Interactive Goal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mb-10">
          {FITNESS_GOALS.map((goal) => {
            const isActive = activeGoalId === goal.id;
            return (
              <div
                key={goal.id}
                onClick={() => {
                  setActiveGoalId(goal.id);
                  if (onSelectGoal) onSelectGoal(goal.id);
                }}
                className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between text-left ${
                  isActive
                    ? 'bg-zinc-900 border-amber-500 shadow-xl shadow-amber-500/10 ring-1 ring-amber-500/40 -translate-y-1'
                    : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/80'
                }`}
                id={`goal-card-${goal.id}`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                    {getIcon(goal.id)}
                  </div>
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                    {goal.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white font-['Outfit',sans-serif] mb-2">
                    {goal.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {goal.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-semibold">
                  <span className={isActive ? 'text-amber-400' : 'text-zinc-500'}>
                    {isActive ? 'Active Target' : 'Select Goal'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'text-amber-400 translate-x-1' : 'text-zinc-500'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Goal Spotlight Box */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Personalized Coach Support at Every Branch</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-white font-['Outfit',sans-serif]">
              How We Help You: <span className="text-amber-400">{activeGoal.title}</span>
            </h4>
            <p className="text-sm text-zinc-300 max-w-xl leading-relaxed">
              {activeGoal.details}
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={onClaimOffer}
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-black text-sm tracking-wide transition shadow-lg shadow-amber-500/20 cursor-pointer flex items-center justify-center gap-2"
              id="goal-claim-offer-btn"
            >
              <span>CLAIM ANNUAL OFFER →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
