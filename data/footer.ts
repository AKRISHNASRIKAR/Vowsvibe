// data/footer.ts

export interface ProductColumn {
  products: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  ariaLabel: string;
}

export interface InfoSection {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  phone?: string;
}

export const infoSections: InfoSection[] = [
  {
    title: "Have a Question?",
    description: "Check out our FAQs where we answer the most commonly asked questions",
    buttonText: "Read FAQs",
    buttonLink: "/faqs",
  },
  {
    title: "Connect With Us",
    description: "Enjoy free shipping for all orders.",
    phone: "1-800-822-7777",
  },
  {
    title: "We're Social",
    description: "Like us, love us, follow us!",
  },
];

export const productColumns: string[][] = [
  ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "Uro Flow"],
  ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "Uro Flow"],
  ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "Uro Flow"],
  ["Vita Renew", "Testobites", "Audizen", "Nerve Flow", "Uro Flow"],
];

export const contactInfo = {
  address: "7823 Red Oak Trail, Austin, TX, 78704, United States",
  phone: "(512) 555-2396",
  email: "support@healthdesk.com",
};

export const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
     url: "#",
    ariaLabel: "Follow us on Facebook",
  },
  {
    name: "Twitter",
     url: "#",
    ariaLabel: "Follow us on Twitter",
  },
  {
    name: "Instagram",
     url: "#",
    ariaLabel: "Follow us on Instagram",
  },
  {
    name: "LinkedIn",
    url: "#",
    ariaLabel: "Follow us on LinkedIn",
  },
];

export const paymentMethods = [
  { name: "Mastercard", logo: "/payments/mastercard.png" },
  { name: "Visa", logo: "/payments/visa.png" },
  { name: "American Express", logo: "/payments/amex.png" },
  { name: "PayPal", logo: "/payments/paypal.png" },
];

export const footerLinks = [
  { name: "Terms And Conditions", url: "/terms" },
  { name: "Privacy Policy", url: "/privacy" },
  { name: "Contact Us", url: "/contact" },
];

export const disclaimer = {
  line1: "These statements have not been evaluated by the Food and Drug Administration.",
  line2: "These products are not intended to diagnose, treat, cure or prevent any disease. Individual results may vary.",
};