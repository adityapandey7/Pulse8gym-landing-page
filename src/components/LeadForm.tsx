import React, { useState, useEffect } from 'react';
import { User, Phone, MapPin, ArrowRight, CheckCircle2, ShieldCheck, Clock, MessageSquare } from 'lucide-react';
import { BRANCHES } from '../data/gymData';
import { BranchId } from '../types';

interface LeadFormProps {
  defaultBranch?: BranchId;
  variant?: 'embedded' | 'card';
  title?: string;
  subtitle?: string;
  onSuccess?: () => void;
  idPrefix?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  defaultBranch = 'srinagar',
  variant = 'card',
  title = 'Lock In Your Annual Offer Today',
  subtitle = 'Select your branch & claim up to ₹9,000 off before slots fill up.',
  onSuccess,
  idPrefix = 'form'
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [branch, setBranch] = useState<BranchId>(defaultBranch);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [voucherCode, setVoucherCode] = useState('');
  const [phoneError, setPhoneError] = useState('');

  useEffect(() => {
    if (defaultBranch) {
      setBranch(defaultBranch);
    }
  }, [defaultBranch]);

  const selectedBranchData = BRANCHES.find((b) => b.id === branch) || BRANCHES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate phone
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length < 10) {
      setPhoneError('Please enter a valid 10-digit mobile number');
      return;
    }
    setPhoneError('');
    setLoading(true);

    setTimeout(() => {
      const code = `PULSE8-${branch.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setVoucherCode(code);
      setLoading(false);
      setSubmitted(true);

      // Save submission record locally
      try {
        const existing = JSON.parse(localStorage.getItem('pulse8_leads') || '[]');
        existing.push({
          name,
          phone: cleaned,
          branch,
          code,
          timestamp: new Date().toISOString()
        });
        localStorage.setItem('pulse8_leads', JSON.stringify(existing));
      } catch {
        // silent fallback
      }

      if (onSuccess) onSuccess();
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setPhoneError('');
  };

  if (submitted) {
    return (
      <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-emerald-500/40 text-center space-y-4 shadow-xl">
        <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            Discount Voucher Reserved
          </span>
          <h3 className="text-2xl font-black text-white font-['Outfit',sans-serif]">
            You&apos;re All Set, {name || 'Fitness Enthusiast'}!
          </h3>
          <p className="text-sm text-zinc-300 mt-1">
            Your membership discount for <span className="text-amber-400 font-semibold">{selectedBranchData.name}</span> has been locked.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-left space-y-2">
          <div className="flex justify-between items-center text-xs text-zinc-400">
            <span>Pass / Voucher Code:</span>
            <span className="font-mono font-bold text-amber-400 text-sm tracking-wider">{voucherCode}</span>
          </div>
          <div className="flex justify-between items-center text-xs text-zinc-400">
            <span>Locked Rate:</span>
            <span className="font-bold text-white text-sm">₹{selectedBranchData.offerPrice.toLocaleString('en-IN')}/year</span>
          </div>
          <div className="flex justify-between items-center text-xs text-zinc-400">
            <span>Branch Phone:</span>
            <a href={`tel:${selectedBranchData.phone}`} className="text-amber-400 font-medium hover:underline">
              {selectedBranchData.phone}
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-zinc-400">
          <Clock className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Our team will call you within <strong>30 minutes</strong> to confirm your slot.</span>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
          <a
            href={`https://wa.me/91${selectedBranchData.phone}?text=Hi%20Pulse8%20Gym,%20I%20claimed%20the%20Annual%20Offer%20voucher%20${voucherCode}%20for%20${encodeURIComponent(selectedBranchData.name)}.%20Please%20confirm%20my%20slot.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
          <a
            href={`tel:${selectedBranchData.phone}`}
            className="flex-1 py-3 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-sm flex items-center justify-center gap-2 transition"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call Branch Direct</span>
          </a>
        </div>

        <button
          onClick={handleReset}
          className="text-xs text-zinc-500 hover:text-zinc-300 underline cursor-pointer mt-2"
        >
          Submit for another branch or family member
        </button>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl border ${
        variant === 'card'
          ? 'bg-zinc-900/90 border-zinc-800 shadow-2xl p-6 sm:p-8 backdrop-blur-md'
          : 'bg-zinc-950/70 border-zinc-800/80 p-5 sm:p-6'
      }`}
    >
      <div className="mb-5">
        <h3 className="text-xl sm:text-2xl font-black text-white font-['Outfit',sans-serif]">
          {title}
        </h3>
        {subtitle && <p className="text-xs sm:text-sm text-zinc-400 mt-1">{subtitle}</p>}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor={`${idPrefix}-name`} className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
            Your Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              id={`${idPrefix}-name`}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Rahul Verma"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-white placeholder-zinc-500 text-sm outline-none transition"
            />
          </div>
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor={`${idPrefix}-phone`} className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
            Phone Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
              <Phone className="w-4 h-4" />
            </div>
            <input
              type="tel"
              id={`${idPrefix}-phone`}
              required
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (phoneError) setPhoneError('');
              }}
              placeholder="10-digit mobile (e.g. 9908002743)"
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-950 border ${
                phoneError ? 'border-rose-500' : 'border-zinc-700'
              } focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-white placeholder-zinc-500 text-sm outline-none transition`}
            />
          </div>
          {phoneError && <p className="text-xs text-rose-400 mt-1">{phoneError}</p>}
        </div>

        {/* Preferred Branch Dropdown */}
        <div>
          <label htmlFor={`${idPrefix}-branch`} className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
            Preferred Branch
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
              <MapPin className="w-4 h-4" />
            </div>
            <select
              id={`${idPrefix}-branch`}
              value={branch}
              onChange={(e) => setBranch(e.target.value as BranchId)}
              className="w-full pl-10 pr-8 py-3 rounded-xl bg-zinc-950 border border-zinc-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-white text-sm outline-none transition appearance-none cursor-pointer"
            >
              <option value="srinagar">Srinagar Colony (₹15,999/yr — Save ₹9,001)</option>
              <option value="abids">Abids (₹16,999 — 15 Months Total)</option>
              <option value="marredpally">Marredpally (₹15,999/yr — Save ₹9,001)</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-zinc-400 text-xs">
              ▼
            </div>
          </div>
        </div>

        {/* Submit CTA Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-zinc-950 font-black text-base tracking-wide shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
          id={`${idPrefix}-submit-btn`}
        >
          {loading ? (
            <span className="inline-block animate-spin h-5 w-5 border-2 border-black border-t-transparent rounded-full" />
          ) : (
            <>
              <span>Claim My Discount →</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        {/* Trust Microcopy under form */}
        <div className="pt-2 flex items-start gap-2 text-xs text-zinc-400 leading-normal">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <span>
            <strong className="text-zinc-300">No spam.</strong> Our team will call you within 30 minutes to confirm your slot.
          </span>
        </div>
      </form>
    </div>
  );
};
