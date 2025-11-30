export interface BestSellerProduct {
  id: string;
  name: string;
  rating: number;
  image: string;
  category?: string;
  link?: string;
  tags?: string[]; // For filtering: "Results-Driven", "All-Natural", etc.
}

export const bestSellers: BestSellerProduct[] = [
  {
    id: "dent-pure",
    name: "Dent Pure",
    rating: 5,
    image: "/items/item1.png",
    category: "oral-health",
    link: "#",
    tags: ["All-Natural", "Non-GMO"],
  },
  {
    id: "true-fem",
    name: "True Fem",
    rating: 5,
    image: "/items/item2.png",
    category: "womens-health",
    link: "#",
    tags: ["Results-Driven", "All-Natural", "Non-GMO"],
  },
  {
    id: "vita-renew",
    name: "Vita Renew",
    rating: 5,
    image: "/items/item3.png",
    category: "anti-aging",
    link: "#",
    tags: ["Results-Driven", "All-Natural", "Cruelty-Free"],
  },
  {
    id: "prostazen",
    name: "ProstaZen",
    rating: 5,
    image: "/items/item4.png",
    category: "mens-health",
    link: "#",  
    tags: ["All-Natural", "Non-GMO", "Cruelty-Free"],
  },
  {
    id: "nerve-freedom",
    name: "Nerve Freedom",
    rating: 5,
    image: "/items/item5.png",
    category: "pain-relief",
    link: "#",
    tags: ["Results-Driven", "All-Natural", "Non-GMO", "Cruelty-Free"],
  },
];

export const bestSellerFilters = [
  "Results-Driven",
  "All-Natural",
  "Non-GMO",
  "Cruelty-Free",
];