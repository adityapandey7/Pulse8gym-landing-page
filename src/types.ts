export type BranchId = 'srinagar' | 'abids' | 'marredpally';

export interface Branch {
  id: BranchId;
  name: string;
  tagline: string;
  address: string;
  phone: string;
  displayPhone: string;
  gmapsUrl: string;
  originalPrice: number;
  offerPrice: number;
  saveAmount: number;
  offerDurationText: string;
  bonusText: string;
  isPopular?: boolean;
}

export interface Program {
  title: string;
  description: string;
  tag: string;
  image: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  branch: string;
  outcome: string;
  quote: string;
  duration: string;
  image: string;
  rating: number;
  videoDuration?: string;
}

export interface GoogleReview {
  id: string;
  author: string;
  role: string;
  avatarColor: string;
  avatarInitial: string;
  branch: string;
  branchId: BranchId;
  rating: number;
  relativeTime: string;
  headline: string;
  text: string;
  likesCount?: number;
  highlight?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface LeadSubmission {
  name: string;
  phone: string;
  branch: BranchId;
  goal?: string;
  submittedAt: string;
}
