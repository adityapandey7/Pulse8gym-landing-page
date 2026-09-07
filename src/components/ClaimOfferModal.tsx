import React, { useEffect } from 'react';
import { X, Sparkles, Flame } from 'lucide-react';
import { BranchId } from '../types';
import { LeadForm } from './LeadForm';
import { BRANCHES } from '../data/gymData';

interface ClaimOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  branchId?: BranchId;
  initialType?: 'offer' | 'enquiry';
}

export const ClaimOfferModal: React.FC<ClaimOfferModalProps> = ({
  isOpen,
  onClose,
  branchId = 'srinagar',
  initialType = 'offer'
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const branch = BRANCHES.find((b) => b.id === branchId) || BRANCHES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-zinc-900 border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-black px-6 py-2.5 flex items-center justify-between font-bold text-xs">
          <span className="flex items-center gap-1.5 uppercase tracking-wider">
            <Flame className="w-4 h-4 fill-black" />
            {initialType === 'enquiry' ? 'Talk to Our Team' : 'Exclusive Annual Membership Deal'}
          </span>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-black/10 transition cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6">
          <LeadForm
            defaultBranch={branchId}
            variant="embedded"
            title={
              initialType === 'enquiry'
                ? `Connect with Pulse8 ${branch.name}`
                : `Claim Annual Discount at ${branch.name}`
            }
            subtitle={
              initialType === 'enquiry'
                ? 'Speak directly with our certified fitness coaches and branch counselors today.'
                : `Lock in ₹${branch.offerPrice.toLocaleString('en-IN')} rate. ${branch.bonusText}.`
            }
            idPrefix="modal-form"
            onSuccess={() => {
              // keep modal open so user sees confirmed voucher
            }}
          />
        </div>
      </div>
    </div>
  );
};
