# Old Riga SPA — Official Website

A complete, modern, luxury spa website built with Next.js 14, Tailwind CSS, TypeScript, and Framer Motion. Designed for **Old Riga SPA**, a premium day spa located in the historic Old Town of Riga, Latvia.

---

## ✨ Features

- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** with a custom luxury color palette (warm beige, gold accents, dark charcoal)
- **Framer Motion** fade-in-on-scroll animations throughout
- **Google Fonts** — Playfair Display (serif) + Inter (sans-serif)
- Fully **responsive** and **mobile-first**
- **Sticky Navbar** — transparent on hero, solid background on scroll
- **Smooth-scroll** anchor navigation
- **Lightbox** gallery with hover effects
- **Booking form** with client-side validation and success state
- Custom gold **scrollbar**

---

## 📁 Project Structure

```
old-riga-spa/
├── app/
│   ├── globals.css        # Global styles + Google Fonts import
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Single-page entry, assembles all sections
├── components/
│   ├── Navbar.tsx         # Sticky transparent→solid navbar
│   ├── Hero.tsx           # Full-screen hero with CTA
│   ├── About.tsx          # Brand story + values
│   ├── Services.tsx       # 6-treatment grid with hover cards
│   ├── Gallery.tsx        # Responsive image grid + lightbox
│   ├── Pricing.tsx        # 3-tier pricing table
│   ├── Booking.tsx        # Booking/contact form
│   └── Footer.tsx         # Footer with social links
├── tailwind.config.ts     # Custom theme (colors, fonts)
├── next.config.ts         # Next.js config (Unsplash image domain)
├── postcss.config.js
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ojayWillow/old-riga-spa.git
cd old-riga-spa

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `cream` | `#f5f0eb` | Page background |
| `gold` | `#c9a96e` | Accent, CTAs, borders |
| `gold-dark` | `#a8843a` | Hover state for gold |
| `charcoal` | `#2c2c2c` | Primary text |
| `charcoal-light` | `#4a4a4a` | Body / secondary text |
| `warm-white` | `#faf7f4` | Card/section backgrounds |

**Fonts:** Playfair Display (headings) + Inter (body)

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `next` 14 | React framework (App Router) |
| `framer-motion` | Scroll-triggered animations |
| `react-icons` | Instagram & Facebook icons |
| `tailwindcss` | Utility-first styling |

---

## 📄 License

MIT — feel free to adapt for your project.
