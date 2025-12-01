# Vowsvibe - Health & Supplement E-commerce

**Live Demo:** https://vowsvibe-six.vercel.app/

---

## 🚀 Quick Start

### Clone Repository

```bash
git clone https://github.com/AKRISHNASRIKAR/vowsvibe.git
cd vowsvibe
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 File Structure

```
src/
├── hooks/                          # Data fetching logic
│   ├── useProducts.ts
│   ├── useTestimonials.ts
│   ├── useBestSellers.ts
│   └── index.ts
│
├── components/
│   ├── home/                       # Page sections
│   │   ├── ProductSection.tsx      # Product categories carousel
│   │   ├── BestSellersSection.tsx  # Featured products
│   │   ├── Testimonials.tsx        # Customer reviews
│   │   └── ...other sections
│   │
│   ├── ui/                         # Reusable UI
│   │   ├── ProductCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── Button.tsx
│   │   └── ...
│   │
│   └── layout/
│       ├── Navbar.tsx
│       └── Footer.tsx
│
├── data/
│   └── home/
│       ├── products.ts             # Product categories
│       ├── bestsellers.ts          # Featured products
│       └── testimonials.ts         # Customer reviews
│
├── types/
│   └── index.ts                    # TypeScript interfaces
│
└── lib/
    └── utils.ts                    # Utility functions
```

---

## 🏠 Homepage Sections

Each section is a **separate component** using a custom hook for data:

| Section            | Component                | Hook              | Data Source       |
| ------------------ | ------------------------ | ----------------- | ----------------- |
| Product Categories | `ProductSection.tsx`     | `useProducts`     | `products.ts`     |
| Best Sellers       | `BestSellersSection.tsx` | `useBestSellers`  | `bestsellers.ts`  |
| Testimonials       | `Testimonials.tsx`       | `useTestimonials` | `testimonials.ts` |

**Why separated?**

- Each section has one responsibility
- Easy to maintain and update
- Reusable across pages
- Simple to test

---

## Data Flow Architecture

### Current: Static Data

```
Data Files (products.ts)
    ↓
Custom Hooks (useProducts)
    ↓
Section Components (ProductSection.tsx)
    ↓
UI Components (ProductCard.tsx)
    ↓
Browser Render
```

### Why Hooks?

- **Centralized Logic**: All data fetching in one place
- **Easy Testing**: Mock hook instead of API
- **Flexible**: Switch from static to API with one line
- **Reusable**: Multiple components use same hook
- **Error Handling**: Loading + error states built-in

---

## 📦 Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Hooks** - State management (future: add Axios, then consider Redux)

---

## ✨ Key Takeaways

1. **Hooks separate data logic from UI** - Clean, testable code
2. **File structure supports growth** - Start simple, scale easily
3. **Multiple data sources ready** - Static → API → Services → Server
4. **Easy to understand** - Each file has one job
5. **Production-ready** - Can be scaled easily
