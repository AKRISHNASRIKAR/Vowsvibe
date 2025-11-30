// data/trust-features.ts

export interface TrustFeature {
  id: string;
  title: string;
  icon: string;
}

export const trustFeatures: TrustFeature[] = [
  {
    id: "all-natural",
    title: "All Natural",
    icon: "/trust1.png",
  },
  {
    id: "cruelty-free",
    title: "Cruelty-Free",
    icon: "/trust2.png",
  },
  {
    id: "money-back",
    title: "Money-back Guarantee",
    icon: "/trust3.png",
  },
  {
    id: "giving-back",
    title: "Giving back",
    icon: "/trust4.png",
  },
  {
    id: "non-gmo",
    title: "Non-GMO",
    icon: "/trust5.png",
  },
];
