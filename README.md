# Majestic Residence Hotel

> *Elegant stays, restful moments.*  
> Official website for **Majestic Residence Hotel** located in Bonoua, Côte d'Ivoire.

A luxury boutique hospitality web experience built with **pure HTML5, CSS3, and vanilla JavaScript** (zero dependencies, no framework, no build step required).

---

## ✨ Features & Design Highlights

- **Dark Theme by Default (Aman / Rosewood inspired)**: Warm nocturnal palette (`#121110`, `#171717`, `#1F1D1B`) with champagne gold accents (`#C6A15B`) and soft ivory typography (`#F8F5EF`).
- **Full Light Theme Support**: Built using CSS custom properties (`:root[data-theme="light"]`) with an instant theme toggle in the menu overlay and `localStorage` persistence.
- **Organic Motion Engine**:
  - Single coordinated `requestAnimationFrame` lerp loop.
  - Multi-speed parallax (Hero background, title, and foreground).
  - Ken Burns slow breathing animation.
  - Interactive mouse parallax on desktop.
  - 3-variant image reveals (`curtain`, `window`, `fade`) via `IntersectionObserver`.
  - Floating image previews following cursor on the Stays table with velocity-based tilt.
  - 300vh sticky horizontal scroll gallery with focus scaling and custom ivory circular cursor ("VIEW").
  - Subtle ascending golden fireflies.
  - Native `prefers-reduced-motion` compliance.
- **Bilingual Booking Flow**:
  - Direct booking request generator formatting prefilled bilingual messages for WhatsApp (`+225 07 47 82 01 71`).
  - No payment required upfront; availability confirmed directly by the hotel reception.
- **Cross-document Page Transitions**: Native CSS View Transitions API (`@view-transition { navigation: auto; }`).
- **Responsive Architecture**: Fully optimized from 390px mobile screens to large desktop viewports.

---

## 🏛️ Site Architecture

| Route | Content |
|---|---|
| `/` | **Home** (Hero, Welcome Statement, Stays, Amenities, Gallery preview, Booking CTA, Location) |
| `/rooms/` | **Stays & Rooms** (Day Rest, Full Stay, Night details, pricing, full breakdown) |
| `/services/` | **Amenities** (Guarded parking, Wi-Fi, Room service, Swimming pool) |
| `/gallery/` | **Full Gallery** (Filterable authentic photography with full-screen lightbox) |
| `/contact/` | **Contact & Location** (Direct lines, WhatsApp, Facebook, location details) |
| `/booking/` | **Booking Request Form** (Stay selection, arrival date, WhatsApp integration) |

---

## 🎨 Color Palette & Design Tokens

```css
:root, :root[data-theme="dark"] {
  --night: #121110;          /* Canvas background */
  --night-raised: #171717;   /* Elevated sections & scrolled header */
  --night-surface: #1F1D1B;  /* Cards, menu overlay, hovered rows */
  --night-elevated: #292929; /* Input fields, dialogs */
  --footer: #0D0C0B;         /* Footer base */
  
  --ivory: #F8F5EF;          /* Primary headings */
  --ivory-body: rgb(248 245 239 / .72); /* Paragraphs */
  --ivory-muted: rgb(248 245 239 / .52);/* Subtext & captions */
  --beige: #E9DFCE;          /* Inverted booking CTA section */
  --ink: #171717;            /* Contrast text on gold / beige */
  
  --gold: #C6A15B;           /* Primary accents, buttons, icons, borders */
  --gold-hover: #D9B66F;     /* Hover states */
  --gold-tint: rgb(198 161 91 / .12); /* Focus halos */
  --hairline: rgb(248 245 239 / .12); /* Subtle borders */
}
```

---

## 🚀 Getting Started

Since this project has no build tool or external library, you can run it with any static web server:

### With Python
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### With Node.js (npx)
```bash
npx serve .
```

---

## 📱 Contact & Reservation

- **Location**: Bonoua, Côte d'Ivoire
- **WhatsApp**: [+225 07 47 82 01 71](https://wa.me/2250747820171)
- **Direct Line**: +225 07 11 10 83 90
- **Facebook**: [Majestic Residence Hotel](https://web.facebook.com/Majesticbonoua)

---

© 2026 Majestic Residence Hotel. All rights reserved.
