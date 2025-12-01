# Vowsvibe Assignment

A modern, scalable health and supplement e-commerce landing page built with Next.js, React, TypeScript, and Tailwind CSS. The project demonstrates best practices in component architecture, reusable code patterns, and responsive design.

**Live Demo:** https://vowsvibe-six.vercel.app/

---

## 🚀 Quick Start

### Clone the Repository

```bash
git clone https://github.com/yourusername/vowsvibe.git
cd vowsvibe
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
vowsvibe/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   └── page.tsx            # Home page
│
├── src/
│   ├── components/
│   │   ├── home/           # Page-specific sections
│   │   │   ├── Hero.tsx
│   │   │   ├── ProductSection.tsx
│   │   │   ├── FeatureSection.tsx
│   │   │   ├── BestSellersSection.tsx
│   │   │   ├── TestimonialSection.tsx
│   │   │   ├── CharitablesSection.tsx
│   │   │   ├── CompanyMessageSection.tsx
│   │   │   └── TrustSection.tsx
│   │   │
│   │   ├── ui/             # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   └── index.ts
│   │   │
│   │   └── layout/
│   │       ├── Navbar.tsx
│   │       └── Footer.tsx
│   │
│   ├── data/
│   │   └── home/
│   │       ├── bestsellers.ts
│   │       ├── features.ts
│   │       ├── products.ts
│   │       ├── testimonials.ts
│   │       └── trust-section.ts
│   │
│   ├── types/
│   │   └── index.ts
│   │
│   └── lib/
│       └── utils.ts
│
├── public/
│   ├── charity/
│   ├── features/
│   ├── items/
│   ├── testimonial/
│   ├── trust/
│   ├── hero.png
│   └── logo.png
│
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🎯 Homepage Breakdown

The homepage is composed of **8 independent, reusable sections**:

### 1. **Hero Section**

Eye-catching introduction with call-to-action and brand value proposition.

### 2. **Product Category Section**

Horizontal scrollable carousel showcasing product categories with responsive grid layout.

### 3. **Features Section**

Displays key features/benefits with icons in a responsive grid.

### 4. **Best Sellers Section**

Popular products with ratings, metadata, and "Shop Now" buttons.

### 5. **Testimonials Section**

Customer reviews and ratings displayed in responsive grid (1 col mobile → 3 cols desktop).

### 6. **Charitable Initiatives**

Displays charity partners and company's social responsibility.

### 7. **Company Message Section**

Brand story and company values with text and image layout.

### 8. **Trust Badges Section**

Certifications and guarantees displayed as trust signals in responsive grid.

---

## 🧩 Reusable Components

### ProductCard Component

```typescriptreact
<ProductCard
  icon="📉"
  title="Weight Loss"
  description="Shop trusted weight loss products..."
  buttonText="Buy Now"
  onButtonClick={() => handleClick()}
/>
```

Fully responsive with circular icon background, hover effects, and accessible button states.

### TestimonialCard Component

```typescriptreact
<TestimonialCard
  avatar="/path/to/avatar.jpg"
  name="John Doe"
  role="Customer"
  rating={5}
  content="Great product quality!"
/>
```

Star rating display, user avatar, and responsive sizing.

---

## 📊 Architecture Pattern

The project follows a **Composition over Variants** pattern:

- **Separation of Concerns**: Data, UI, and logic are cleanly separated
- **Data-Driven**: Static data in `src/data/` makes API migration seamless
- **Type Safety**: Full TypeScript interfaces for all data models
- **Scalable**: Easy to add new sections and components without refactoring

---

## 📦 Tech Stack

- **Next.js 15+** - React framework
- **React 19+** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **clsx/cn** - Classname utility

---

## ✨ Key Features

✅ **Component Reusability** - Standalone, configurable components
✅ **Type Safety** - Full TypeScript coverage
✅ **Responsive Design** - Mobile-first approach
✅ **Performance** - Optimized for all devices
✅ **Maintainability** - Clear structure and naming conventions
✅ **Scalability** - Easy to add sections and components
✅ **Accessibility** - Semantic HTML and proper ARIA attributes
✅ **Future-Ready** - Architecture supports seamless API migration

---

## 🔄 Scaling Path

### Phase 1: MVP (Current)

✅ 5-8 reusable components
✅ Static data
✅ Basic type safety
✅ Responsive design

### Phase 2: Growth (Next)

📋 Create data-fetching hooks
📋 Add loading and error states
📋 Create constants file

### Phase 3: Scale

📋 Migrate to API calls
📋 Add advanced animations
📋 Implement caching and analytics

---

## 🛠️ Development Workflow

### Adding a New Section

1. Create data file in `src/data/home/`
2. Define types in `src/types/index.ts`
3. Create component in `src/components/home/`
4. Use reusable cards from `src/components/ui/`
5. Import in `app/page.tsx`

### Adding a New Card Type

1. Create component in `src/components/ui/`
2. Use composition with base Card component
3. Export from `src/components/ui/index.ts`
4. Use in sections with simple props
