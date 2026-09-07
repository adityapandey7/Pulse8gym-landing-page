import React, { useState, useEffect } from 'react';
import { Star, Play, Pause, Volume2, VolumeX, Quote, CheckCircle, X, ArrowRight, Video, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/gymData';
import { Testimonial } from '../types';

interface SocialProofSectionProps {
  onClaimOffer?: (branchId?: string) => void;
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({ onClaimOffer }) => {
  const [activeVideo, setActiveVideo] = useState<Testimonial | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackProgress, setPlaybackProgress] = useState(25);

  // Simulate video playback progress when modal is open and playing
  useEffect(() => {
    if (!activeVideo || !isPlaying) return;
    const interval = setInterval(() => {
      setPlaybackProgress((prev) => {
        if (prev >= 98) return 15;
        return prev + 1;
      });
    }, 400);
    return () => clearInterval(interval);
  }, [activeVideo, isPlaying]);

  const handleOpenVideo = (t: Testimonial) => {
    setActiveVideo(t);
    setIsPlaying(true);
    setPlaybackProgress(20);
  };

  return (
    <section id="reviews" className="py-20 bg-zinc-950 border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Video className="w-3.5 h-3.5" />
            <span>MEMBER VIDEO REVIEWS • ALL 3 BRANCHES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit',sans-serif] tracking-tight">
            Watch Real Member Video Reviews
          </h2>
          <p className="text-base text-zinc-300 mt-3 leading-relaxed">
            Real video stories recorded directly on our gym floors at Srinagar Colony, Abids, and Marredpally. Hear firsthand how our certified coaches and community made real transformations possible.
          </p>
        </div>

        {/* Video Reviews Grid for All 3 Branches */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className="rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl group"
              id={`video-review-card-${t.id}`}
            >
              <div>
                {/* Video Preview Thumbnail Container */}
                <div
                  onClick={() => handleOpenVideo(t)}
                  className="relative h-60 w-full overflow-hidden bg-zinc-950 cursor-pointer group/vid"
                >
                  <img
                    src={t.image}
                    alt={`${t.name} Video Review`}
                    className="w-full h-full object-cover group-hover/vid:scale-105 transition-transform duration-500 brightness-75"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                  {/* Branch Tag Header */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-zinc-950/85 backdrop-blur-md text-[11px] font-bold text-amber-400 border border-zinc-700/80 shadow-md">
                      📍 {t.branch}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-amber-500 text-zinc-950 text-[10px] font-black uppercase tracking-wider">
                      Video Review
                    </span>
                  </div>

                  {/* Central Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center shadow-xl shadow-amber-500/40 group-hover/vid:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-black ml-1" />
                    </div>
                  </div>

                  {/* Video Duration / Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-zinc-950/90 backdrop-blur-md text-[11px] font-semibold text-white border border-zinc-700 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      {t.videoDuration || '1:45 min review'}
                    </span>
                    <span className="text-[11px] text-zinc-300 font-medium bg-black/60 px-2 py-0.5 rounded">
                      Click to Play ▶
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  {/* Rating & Outcome */}
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-zinc-400 font-semibold">{t.duration}</span>
                  </div>

                  {/* Outcome Highlight Pill */}
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <p className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                      <span>🎯</span>
                      <span>Outcome: {t.outcome}</span>
                    </p>
                  </div>

                  {/* Quote from Video */}
                  <p className="text-sm text-zinc-300 italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Author & Action Footer */}
              <div className="p-6 pt-0 border-t border-zinc-800/80 mt-4 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-zinc-400">{t.branch}</p>
                </div>
                <button
                  onClick={() => handleOpenVideo(t)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-amber-500 text-white hover:text-black font-bold text-xs transition cursor-pointer"
                  id={`watch-video-btn-${idx}`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Video</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Stat Callout */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-r from-amber-500/10 via-zinc-900 to-orange-500/10 border border-amber-500/30 p-8 text-center relative overflow-hidden shadow-2xl">
          <Quote className="w-12 h-12 text-amber-500/20 absolute -top-2 -left-2 rotate-180 pointer-events-none" />
          <p className="text-2xl sm:text-3xl font-black text-white font-['Outfit',sans-serif] tracking-tight">
            &ldquo;2,000+ member transformations and counting. Yours is next.&rdquo;
          </p>
          <p className="text-sm text-zinc-400 mt-2">
            Visit your nearest branch at Srinagar Colony, Abids, or Marredpally and claim your special annual membership package today.
          </p>
        </div>
      </div>

      {/* Video Review Player Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="p-4 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {activeVideo.name}&apos;s Video Story • {activeVideo.branch}
                  </h3>
                  <p className="text-xs text-amber-400 font-semibold">{activeVideo.outcome}</p>
                </div>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition cursor-pointer"
                id="close-video-modal-btn"
                aria-label="Close Video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Window */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
              <img
                src={activeVideo.image}
                alt={activeVideo.name}
                className="w-full h-full object-cover opacity-65"
              />

              {/* Video Overlay & Controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-between p-4 sm:p-6">
                {/* Live recording pill */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-xs font-semibold text-white border border-zinc-700">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    Member Video Interview
                  </span>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-black/70 text-white hover:text-amber-400 transition cursor-pointer"
                    title={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                {/* Central Play/Pause button */}
                <div className="flex flex-col items-center justify-center text-center my-auto">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center shadow-2xl shadow-amber-500/40 hover:scale-105 active:scale-95 transition cursor-pointer mb-3"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 fill-black" />
                    ) : (
                      <Play className="w-8 h-8 fill-black ml-1" />
                    )}
                  </button>
                  <p className="text-base sm:text-lg font-bold text-white max-w-md drop-shadow">
                    &ldquo;{activeVideo.quote}&rdquo;
                  </p>
                </div>

                {/* Player Bottom Bar with Scrub Line */}
                <div className="space-y-2">
                  <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-amber-500 h-full transition-all duration-300"
                      style={{ width: `${playbackProgress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-zinc-300">
                    <span>
                      {isPlaying ? 'Playing review' : 'Paused'} • Recorded at Pulse8 {activeVideo.branch}
                    </span>
                    <span>{activeVideo.videoDuration || '1:45 min'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="p-4 bg-zinc-950 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t border-zinc-800">
              <span className="text-zinc-400">
                Verified member of Pulse8 Gym ({activeVideo.duration})
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setActiveVideo(null);
                    if (onClaimOffer) {
                      onClaimOffer();
                    } else {
                      const el = document.getElementById('offers');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 cursor-pointer"
                  id="modal-claim-offer-btn"
                >
                  <span>Claim Annual Offer Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
