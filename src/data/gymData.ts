import { Branch, Program, Testimonial, FAQItem, GoogleReview } from '../types';

export const BRANCHES: Branch[] = [
  {
    id: 'srinagar',
    name: 'Srinagar Colony',
    tagline: '11+ Years Serving Fitness Enthusiasts',
    address: '4th Floor, Above SBI Bank, Opposite Satya Sai Nigamam, Srinagar Colony, Hyderabad - 500073',
    phone: '9908002743',
    displayPhone: '9908002743',
    gmapsUrl: 'https://maps.google.com/?q=Pulse8+Gym+Srinagar+Colony+Opposite+Satya+Sai+Nigamam+Hyderabad',
    originalPrice: 25000,
    offerPrice: 15999,
    saveAmount: 9001,
    offerDurationText: '12 months + 2 months FREE + 1 month freeze option',
    bonusText: 'Save ₹9,001',
    isPopular: true
  },
  {
    id: 'abids',
    name: 'Abids',
    tagline: "18+ Years — Hyderabad's Oldest Pulse8 Branch",
    address: '5-4-742/1, Abids Station Road, Opp. G Pullareddy Sweets, Abids, Hyderabad - 500001',
    phone: '9912525027',
    displayPhone: '9912525027',
    gmapsUrl: 'https://maps.google.com/?q=Pulse8+Gym+Abids+Station+Road+Opp+G+Pullareddy+Sweets+Hyderabad',
    originalPrice: 20000,
    offerPrice: 16999,
    saveAmount: 3001,
    offerDurationText: '12 + 3 months FREE = 15 months total',
    bonusText: 'Save ₹3,001 + get 3 extra months',
    isPopular: false
  },
  {
    id: 'marredpally',
    name: 'Marredpally',
    tagline: 'Modern Facility with Premium Equipment',
    address: '2nd Floor, Shree Krishna Complex, Above Heritage Fresh, East Marredpally, Secunderabad - 500026',
    phone: '9989939961',
    displayPhone: '9989939961',
    gmapsUrl: 'https://maps.google.com/?q=Pulse8+Gym+East+Marredpally+Shree+Krishna+Complex+Secunderabad',
    originalPrice: 25000,
    offerPrice: 15999,
    saveAmount: 9001,
    offerDurationText: '12 months + 2 months FREE + 1 month freeze option',
    bonusText: 'Save ₹9,001',
    isPopular: true
  }
];

export const TRUST_STATS = [
  { icon: 'calendar', label: '14+ Years of Experience', highlight: '14+ Years' },
  { icon: 'star', label: '1,845+ Reviews Across 3 Branches', highlight: '1,845+' },
  { icon: 'map-pin', label: '3 Locations in Hyderabad', highlight: '3 Branches' }
];

export interface FitnessGoal {
  id: string;
  title: string;
  description: string;
  tag: string;
  icon: string;
  details: string;
}

export const FITNESS_GOALS: FitnessGoal[] = [
  {
    id: 'strength',
    title: 'Build Strength',
    description: 'Lift weights safely with guidance from certified coaches and progressive training structures.',
    tag: 'Strength & Power',
    icon: 'dumbbell',
    details: 'Master compound lifts, increase bone density, and develop functional power with dedicated coaching and Olympic-grade bars.'
  },
  {
    id: 'fat-loss',
    title: 'Lose Fat',
    description: 'High-calorie-burn cardio, circuit conditioning, and nutrition habits that work in real life.',
    tag: 'Metabolic Conditioning',
    icon: 'flame',
    details: 'Structured interval workouts paired with manageable calorie management to burn fat without exhausting your energy.'
  },
  {
    id: 'muscle',
    title: 'Build Muscle',
    description: 'Hypertrophy programs, state-of-the-art machines, free weights, and expert form corrections.',
    tag: 'Hypertrophy & Physique',
    icon: 'biceps',
    details: 'Targeted muscle group splits with progressive overload, biomechanically sound resistance machines, and recovery tips.'
  },
  {
    id: 'fitness',
    title: 'Improve Fitness',
    description: 'Cardiovascular stamina, mobility, flexibility, and daily functional health.',
    tag: 'Endurance & Mobility',
    icon: 'heart-pulse',
    details: 'Boost cardiovascular endurance, joint flexibility, and energy levels to feel refreshed throughout your workdays.'
  },
  {
    id: 'routine',
    title: 'Get Back Into a Routine',
    description: 'Welcoming, friendly community with zero intimidation to help you form lasting habits.',
    tag: 'Habit & Consistency',
    icon: 'check-circle-2',
    details: 'Gentle re-entry programs designed to overcome workout hesitation and establish a rewarding routine at your pace.'
  }
];

export interface HowItWorksStep {
  stepNumber: number;
  title: string;
  description: string;
  highlight: string;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    stepNumber: 1,
    title: 'Choose Your Nearest Branch',
    description: 'Select from Srinagar Colony, Abids, or Marredpally based on what is closest to your home or daily commute.',
    highlight: '3 Prime Hyderabad Hubs'
  },
  {
    stepNumber: 2,
    title: 'Claim Your Annual Offer',
    description: 'Lock in your branch-specific special pricing starting at ₹15,999 with bonus free months before promotional quotas fill up.',
    highlight: 'Save Up to ₹9,000'
  },
  {
    stepNumber: 3,
    title: 'Meet Your Trainer & Tour the Facility',
    description: 'Walk in, meet your certified fitness coach, explore our world-class machines, and discuss your personal milestones.',
    highlight: 'Personalized Orientation'
  },
  {
    stepNumber: 4,
    title: 'Start Training',
    description: 'Follow your tailored workout roadmap with continuous floor supervision, form corrections, and consistency support.',
    highlight: 'Lasting Results'
  }
];

export const WHY_PULSE8_POINTS = [
  {
    icon: 'dumbbell',
    title: 'World-Class Equipment',
    description: 'Premium cardio machines, strength training equipment & functional training zones — everything you need under one roof.'
  },
  {
    icon: 'user-check',
    title: 'Expert Personal Trainers',
    description: 'Certified trainers build customized workout plans and nutrition guidance around your goals, not a generic template.'
  },
  {
    icon: 'flame',
    title: 'Group Fitness Classes',
    description: 'Functional training, Les Mills, Aerobics & Yoga — stay motivated with energy from the group.'
  },
  {
    icon: 'heart-handshake',
    title: 'Built for Everyone',
    description: "Dedicated programs for men and women, from complete beginners to advanced athletes. Separate women's batches available."
  },
  {
    icon: 'sparkles',
    title: 'Premium Amenities',
    description: 'AC environment, locker rooms, shower facilities, changing rooms, and free parking at every branch.'
  },
  {
    icon: 'compass',
    title: '3 Convenient Locations',
    description: 'Srinagar Colony, Abids, and Marredpally — a Pulse8 branch is never far from you.'
  }
];

export const PROGRAMS: Program[] = [
  {
    title: 'Personal Training',
    tag: '1-on-1 Coaching',
    description: '1-on-1 sessions, customized workout & diet plans tailored to your unique metabolic profile.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
    badge: 'Most Popular'
  },
  {
    title: 'General Training',
    tag: 'Full Access',
    description: 'Full equipment access with proactive trainer supervision and daily form corrections.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Functional Training',
    tag: 'Athletic Agility',
    description: 'High-intensity workouts, battle ropes, kettlebells & sled tracks for real-world athletic strength.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Group Classes',
    tag: 'High Energy',
    description: 'Aerobics, Power Yoga, and Les Mills programs led by upbeat instructors with motivating playlists.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Weight Management',
    tag: 'Results-Driven',
    description: 'Structured fat loss & lean muscle gain plans combining cardio circuits with macro guidance.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
    badge: 'Fast Results'
  },
  {
    title: 'Strength & Cardio',
    tag: 'Endurance & Power',
    description: 'Comprehensive heavy lifting platforms, Olympic racks, treadmills, and ellipticals for every fitness goal.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'ravi-k',
    name: 'Ravi Kumar',
    branch: 'Srinagar Colony Branch',
    outcome: 'Lost 12kg in 6 months',
    quote: 'The personal trainers built an adaptable routine that fit my hectic IT shift hours. In 6 months, not only did I shed 12kg, but my back pain completely vanished.',
    duration: 'Member for 1.5 Years',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    videoDuration: '1:45 min review'
  },
  {
    id: 'priya-s',
    name: 'Priya Sharma',
    branch: 'Abids Branch',
    outcome: 'Gained lean strength & high stamina',
    quote: "The dedicated women's sessions and clean shower amenities made Pulse8 my second home. The trainers respect your pace while keeping you accountable every single day.",
    duration: 'Member for 2 Years',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    videoDuration: '2:10 min review'
  },
  {
    id: 'vikram-r',
    name: 'Vikram Reddy',
    branch: 'Marredpally Branch',
    outcome: 'Dropped body fat from 24% to 14%',
    quote: 'World-class equipment and real nutrition coaching that actually worked. Unlike other gyms where trainers disappear after day one, Pulse8 trainers track your lifts every week.',
    duration: 'Member for 1 Year',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    videoDuration: '1:30 min review'
  }
];

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'g-rev-1',
    author: 'Aditi Varma',
    role: 'Local Guide · 48 reviews · 12 photos',
    avatarColor: 'bg-emerald-600',
    avatarInitial: 'A',
    branch: 'Srinagar Colony Branch',
    branchId: 'srinagar',
    rating: 5,
    relativeTime: '3 weeks ago',
    headline: 'Best annual gym membership decision in Srinagar Colony!',
    text: 'Joined Pulse8 Srinagar Colony on their annual membership offer. The gym is huge, spotlessly clean, and properly air-conditioned. What sets them apart is that floor trainers actually correct your form proactively without constantly pushing personal training packages. The locker and shower amenities are top-tier.',
    likesCount: 19,
    highlight: 'Spotlessly clean & attentive coaches'
  },
  {
    id: 'g-rev-2',
    author: 'Mohammed Zubair',
    role: 'Local Guide · 31 reviews',
    avatarColor: 'bg-blue-600',
    avatarInitial: 'M',
    branch: 'Abids Branch',
    branchId: 'abids',
    rating: 5,
    relativeTime: '1 month ago',
    headline: '18+ years of legacy for a reason – solid equipment & great crowd',
    text: 'Training at Pulse8 Abids for over 2 years now. Grabbed their 12 + 3 months bonus annual package. Heavy dumbbells up to 50kg, multiple power cages, and no crowding even during peak evening hours. Easily the premier fitness space in central Hyderabad.',
    likesCount: 24,
    highlight: '12 + 3 Months Bonus Deal & 50kg DBs'
  },
  {
    id: 'g-rev-3',
    author: 'Shweta Rao',
    role: 'Local Guide · 26 reviews · 8 photos',
    avatarColor: 'bg-purple-600',
    avatarInitial: 'S',
    branch: 'Marredpally Branch',
    branchId: 'marredpally',
    rating: 5,
    relativeTime: '2 weeks ago',
    headline: 'Safe, supportive environment with certified trainers',
    text: 'As a beginner woman starting strength training, I was intimidated by typical gyms until I joined Pulse8 Marredpally. The trainers are respectful, patient, and knowledgeable. The 1-month freeze option included in the annual deal gave me total peace of mind for my work travels.',
    likesCount: 16,
    highlight: 'Safe atmosphere & 1-month freeze benefit'
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: 'What are the gym timings?',
    answer: '5:00 AM – 10:00 PM Monday to Saturday, and 7:00 AM – 12:00 PM on Sundays, across all three locations (Srinagar Colony, Abids, and Marredpally).'
  },
  {
    question: 'Do you offer personal training?',
    answer: 'Yes! Our certified personal trainers provide customized workout plans, posture corrections, and science-backed nutrition guidance tailored specifically to your body type and fitness goals.'
  },
  {
    question: 'Does Pulse8 Gym offer a free trial?',
    answer: 'Pulse8 Gym does not currently offer free trials. You can contact your preferred branch to learn more about the available membership options.'
  },
  {
    question: 'Is parking available at the branches?',
    answer: 'Yes, dedicated free parking is available at all three Pulse8 locations (Srinagar Colony, Abids, and Marredpally) for all active members.'
  },
  {
    question: 'Are there separate batches for women?',
    answer: "Yes, we have dedicated programs and exclusive training sessions for women guided by experienced, certified fitness coaches in a welcoming, encouraging environment."
  },
  {
    question: 'What equipment do you have?',
    answer: 'We feature world-class imported cardio equipment, Olympic lifting platforms, free weights, functional training zones, battle ropes, and kettlebells.'
  },
  {
    question: 'How does the membership freeze option work?',
    answer: 'For Srinagar Colony and Marredpally annual memberships, you get a complimentary 1-month freeze option. If you travel or need a break, you can pause your membership so you never lose days.'
  },
  {
    question: 'How long is the annual offer valid?',
    answer: 'This special annual promotion is valid for a limited promotional window. Once available discounted membership quotas are claimed at each branch, standard rates apply.'
  }
];
