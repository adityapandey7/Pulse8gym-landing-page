import React, { useState } from 'react';
import { Star, CheckCircle, ShieldCheck, ThumbsUp, MapPin, ArrowRight } from 'lucide-react';
import { GOOGLE_REVIEWS, BRANCHES } from '../data/gymData';
import { BranchId, GoogleReview } from '../types';

interface GoogleReviewSpotlightProps {
  selectedBranchId: BranchId;
  onSelectBranch: (branchId: BranchId) => void;
  onClaimOffer?: (branchId: BranchId) => void;
}

export const GoogleReviewSpotlight: React.FC<GoogleReviewSpotlightProps> = ({
  selectedBranchId,
  onSelectBranch,
  onClaimOffer
}) => {
  const currentReview: GoogleReview =
    GOOGLE_REVIEWS.find((r) => r.branchId === selectedBranchId) || GOOGLE_REVIEWS[0];

  const currentBranch = BRANCHES.find((b) => b.id === selectedBranchId) || BRANCHES[0];

  return (
    <div className="my-12 max-w-4xl mx-auto">
      <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Subtle Ambient Accent Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Top Google Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            {/* Google G Brand Icon */}
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white tracking-wide">Google Reviews</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-semibold">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  Verified Business Profile
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-black text-white">4.8</span>
                <span className="text-xs text-zinc-400">• Over 1,845+ reviews across Hyderabad</span>
              </div>
            </div>
          </div>

          {/* Branch Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-950 border border-zinc-800">
            {BRANCHES.map((b) => {
              const isSelected = b.id === selectedBranchId;
              return (
                <button
                  key={b.id}
                  onClick={() => onSelectBranch(b.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500 text-black shadow-md font-bold'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                  }`}
                  id={`filter-google-review-${b.id}`}
                >
                  {b.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Google Review Content */}
        <div className="pt-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            {/* Author Profile */}
            <div className="flex items-center gap-3">
              <div
                className={`w-11 h-11 rounded-full ${currentReview.avatarColor} text-white font-black text-sm flex items-center justify-center shadow-md`}
              >
                {currentReview.avatarInitial}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-white">{currentReview.author}</h4>
                  <span className="text-[11px] text-zinc-400">({currentReview.role})</span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="flex text-amber-400">
                    {[...Array(currentReview.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-400">• {currentReview.relativeTime}</span>
                </div>
              </div>
            </div>

            {/* Branch Visited Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-amber-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>{currentReview.branch}</span>
            </div>
          </div>

          {/* Highlight Callout */}
          {currentReview.highlight && (
            <div className="inline-block px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-300">
              ⭐️ Key Highlight: &ldquo;{currentReview.highlight}&rdquo;
            </div>
          )}

          {/* Review Headline & Body */}
          <div>
            <h5 className="text-base font-bold text-white font-['Outfit',sans-serif] mb-1.5">
              &ldquo;{currentReview.headline}&rdquo;
            </h5>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {currentReview.text}
            </p>
          </div>

          {/* Review Footer with Helpful Count & Quick Claim CTA */}
          <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-zinc-400">
              <ThumbsUp className="w-3.5 h-3.5 text-zinc-400" />
              <span>{currentReview.likesCount || 18} members found this review helpful</span>
            </div>

            {onClaimOffer && (
              <button
                onClick={() => onClaimOffer(currentBranch.id)}
                className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold cursor-pointer"
                id={`claim-offer-from-review-${currentBranch.id}`}
              >
                <span>Claim {currentBranch.name} Offer at ₹{currentBranch.offerPrice.toLocaleString('en-IN')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
