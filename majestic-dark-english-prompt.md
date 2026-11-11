# MAJESTIC RESIDENCE HOTEL
## Dark theme, English website: design system, specification and build prompt

> Elegant stays, restful moments.

| | |
|---|---|
| **Project** | Official website of Majestic Residence Hotel |
| **Location** | Bonoua, Côte d'Ivoire |
| **Positioning** | Luxury boutique hospitality, premium hotel residence |
| **Language** | English (site copy, SEO, accessibility labels). Structure must stay translation ready for a future French version |
| **Theme** | Dark by default. The light theme stays available through the same tokens |
| **Goal** | Build trust, show the stays and prices up front, convert to bookings (WhatsApp first, booking engine later) |
| **References** | Aman, Rosewood, Six Senses, Belmond: generous space, full bleed photography, discreet navigation, editorial typography |
| **Stack** | Plain HTML, CSS and vanilla JavaScript. No framework, no build step |

---

## 0. Brief for the developer

Rebuild the Majestic Residence Hotel website as a **dark, English language** experience. The mood is a tropical residence after sunset: warm night, candlelit stone, a lit pool, champagne gold details. It must feel calm and expensive, never gloomy and never flashy. Gold is punctuation, never a surface. Photography carries the emotion; the interface stays quiet.

Every screen answers three questions:

1. Where will I stay?
2. How much does it cost?
3. How do I book?

Real photography, transparent pricing and effortless booking come first.

---

## 1. Business information (English copy)

**Majestic Residence Hotel** · BONOUA · CÔTE D'IVOIRE

### Stays

| Stay | Hours | Price |
|---|---|---|
| Day Rest | 3 hours | 20,000 FCFA |
| Full Stay | Noon to noon | 30,000 FCFA |
| Night | 10 pm to noon | 25,000 FCFA |

> Hours to be confirmed with the hotel before launch. Original French names: Repos, Séjour, Nuit.

### Amenities

- Secure parking
- Wi-Fi
- Room service
- Swimming pool

### Contact

- +225 07 47 82 01 71
- +225 07 11 10 83 90
- Facebook: Majestic Residence Hotel (https://web.facebook.com/Majesticbonoua)

> Two different numbers exist. Only one confirmed number becomes the main WhatsApp number.

### Content rule

Never invent room categories, sizes, capacities, reviews, ratings, awards or facilities. Only the information above may be published.

---

## 2. Dark design system

### 2.1 Colour tokens

Warm blacks, never pure `#000`. Text is ivory, never pure white for long reading.

| Token | Name | Value | Use |
|---|---|---|---|
| `--night` | Majestic Night | `#121110` | Page background |
| `--night-raised` | Majestic Black | `#171717` | Alternate sections, header on scroll |
| `--night-surface` | Charcoal Warm | `#1F1D1B` | Cards, table rows on hover, menu overlay |
| `--night-elevated` | Charcoal | `#292929` | Inputs, popovers, lightbox UI |
| `--ivory` | Ivory | `#F8F5EF` | Headings, key text |
| `--ivory-body` | Ivory 72% | `rgb(248 245 239 / .72)` | Paragraphs |
| `--ivory-muted` | Ivory 52% | `rgb(248 245 239 / .52)` | Captions, secondary info |
| `--beige` | Warm Beige | `#E9DFCE` | Inverted section background (booking) |
| `--gold` | Champagne Gold | `#C6A15B` | Primary buttons, labels, prices, icons, hairline accents |
| `--gold-hover` | Royal Gold | `#D9B66F` | Hover states |
| `--gold-tint` | Gold 12% | `rgb(198 161 91 / .12)` | Focus halos, selected states |
| `--hairline` | Ivory 12% | `rgb(248 245 239 / .12)` | Dividers, borders |
| `--ink` | Majestic Black | `#171717` | Text on gold buttons and on the beige section |

**Rules**

- `--night` is the canvas. `--night-raised` and `--night-surface` create depth instead of shadows (shadows are invisible on dark).
- Gold on `--night` reaches about 7.7:1 contrast, so gold may be used for small labels and prices in the dark theme.
- Paragraphs use `--ivory-body`, never full ivory, to avoid glare.
- One inverted moment: the booking section uses `--beige` with `--ink` text, so the call to action stands out from the night.
- Photos get a subtle warm grade: overlay `rgb(18 17 16 / .18)`, plus `filter: saturate(.95)` so they sit in the night without looking washed.

### 2.2 Light theme (kept)

Expose every colour as a CSS variable on `:root[data-theme="dark"]` (default) and `:root[data-theme="light"]`. Light values: `--night` becomes `#F8F5EF`, `--night-raised` `#E9DFCE`, text becomes `#171717` / `#292929`, small gold text uses `#8C6A2F`. A theme switch may live in the menu overlay; it stores the choice in `localStorage` and respects `prefers-color-scheme` on first visit only if no choice exists. Dark stays the brand default.

### 2.3 Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Headings, stay names, editorial lines | Cormorant Garamond | 500 | Uppercase for section titles, tracking .01em to .02em |
| Navigation, buttons, labels | Montserrat | 500 to 600 | Labels uppercase, 11px minimum, tracking .2em |
| Prices | Montserrat | 600 | Tabular figures |
| Body and practical info | DM Sans | 400 | Line height 1.6 |

On dark backgrounds, light text looks bolder: use `-webkit-font-smoothing: antialiased`, and keep Cormorant at 500 (never 300 under 24px).

**Scale**

| Level | Desktop | Mobile |
|---|---|---|
| Hero | 9.6cqw inside the hero stage (64 to 76px elsewhere) | 15.6vw |
| Section titles | 42 to 52px | 30 to 36px |
| Subtitles | 24 to 30px | 20 to 24px |
| Body | 15 to 17px | 15 to 16px |
| Labels | 11 to 13px | 11 to 13px |

### 2.4 Logo

- Use only the official logo: circular gold emblem with a central M, wordmark MAJESTIC / RESIDENCE HOTEL.
- Dark theme uses the **gold version** everywhere; the white version only on very bright photos.
- Emblem alone for favicon and section emblem. Horizontal version for header and footer.
- Never redraw, distort, recolour into gradients or change the emblem proportions.
- Clear space: the height of the central M on every side.

### 2.5 Components

**Primary button**: background `--gold`, text `--ink`, height 52px, padding 0 28px, radius 4px, Montserrat 600 13px uppercase, tracking .12em. Hover `--gold-hover` (300ms). Focus: 2px `--gold` ring, 3px offset.

**Secondary button**: transparent, 1px `--gold` border, `--ivory` text. Hover: background `--gold-tint`.

**Glass pill (over photos)**: background `rgb(18 17 16 / .55)`, `backdrop-filter: blur(12px)`, 1px `--hairline` border, radius 999px, height 48px, ivory text, gold icon.

**Cards**: background `--night-surface`, 1px `--hairline` border, radius 8px, no shadow. Hover: border becomes `rgb(198 161 91 / .4)`, image zooms 1.04.

**Stays table**: rows separated by `--hairline`. Name in Cormorant 22px `--ivory`, hours in DM Sans `--ivory-muted`, price in Montserrat 600 `--gold`, right aligned. Whole row clickable. Hover: row background `--night-surface`.

**Form fields**: height 52px, background `--night-elevated`, 1px `--hairline` border, radius 4px, ivory text, placeholder `--ivory-muted`. Focus: gold border plus `--gold-tint` halo. Errors shown in text under the field, never by colour alone. Native date picker styled with `color-scheme: dark`.

**Floating WhatsApp button (mobile)**: 56px circle, `--gold` background, `--ink` icon, bottom right, visible after the hero.

### 2.6 Icons

Lucide, 1.25px stroke, 20 to 24px, `--gold` or `--ivory`. Reference set: `car` (Secure parking), `wifi` (Wi-Fi), `concierge-bell` (Room service), `waves` (Swimming pool), `bed-double` (Stays), `map-pin`, `phone`, `menu`, `arrow-right`.

### 2.7 Spacing and grid

| Item | Desktop | Mobile |
|---|---|---|
| Max container | 1280px (1180px editorial sections) | 100% |
| Side margins | 64px | 20px |
| Section spacing | 100 to 120px | 60 to 72px |
| Grid gutter | 24 to 32px | 16px |

12 columns desktop, 2 tablet, 1 mobile.

### 2.8 Grain

Fixed SVG fractal noise over everything. On dark, `multiply` disappears, so use `mix-blend-mode: overlay` at 8 to 10% opacity. It should feel like film, not dust.

### 2.9 Motion tokens

```css
--ease-out: cubic-bezier(.22, 1, .36, 1);
--ease-in-out: cubic-bezier(.65, 0, .35, 1);
--ease-spring: cubic-bezier(.34, 1.4, .64, 1);
--dur-fast: 300ms;
--dur-hover: 900ms;
--dur-reveal: 1400ms;
--dur-hero: 2200ms;
```

### 2.10 Accessibility

- WCAG AA contrast everywhere (check gold on `--night-surface` too).
- Visible gold focus on every interactive element.
- Full keyboard navigation, including menu overlay and gallery lightbox.
- `lang="en"` on `<html>`.
- Split letter headings: `aria-label` holds the full word, letter spans are `aria-hidden`.
- English `alt` text on every image.
- Touch targets 44px minimum.
- `prefers-reduced-motion` respected everywhere.

---

## 3. Site specification

### 3.1 Pages

| URL | Content |
|---|---|
| `/` | Home |
| `/rooms` | Stays, room photos, prices |
| `/services` | Amenities |
| `/gallery` | Full gallery with lightbox |
| `/contact` | Contact details, map, directions |
| `/booking` | Booking flow |

Prepare `/fr/...` routes for a later French version (same templates, separate copy file).

### 3.2 Home page structure

**A. Header**
- Left: "MENU" with two line icon. Centre: gold logo. Right: outlined "BOOK" button.
- Menu opens a full screen `--night-surface` overlay: Home, Rooms, Services, Gallery, Contact in Cormorant uppercase, plus theme switch and language switch (EN / FR, FR disabled until ready).
- Transparent over the hero, then `--night-raised` with a hairline bottom border on scroll.
- Mobile: icons only, centred logo, quick booking access.

**B. Hero**: see build prompt section 4.1.

**C. Welcome statement**: see 4.2.

**D. Stays**: see 4.3.

**E. Amenities**
- Secure parking, Wi-Fi, Room service, Swimming pool, as Lucide icons.
- Airy layout with a night photo of the pool.

**F. Gallery**
- Categories: Rooms, Pool, Exteriors, Lounge areas, By night.
- Editorial asymmetric grid, full screen lightbox on click (keyboard, swipe, Escape).
- Authentic photos of the property only.

**G. Booking (inverted section)**
- Background `--beige`, text `--ink`, gold details.
- Title: "Your stay begins here."
- Text: "Choose your stay and reach our team to arrange your visit."
- Button (`--ink` background, `--ivory` text): "Book on WhatsApp".

**H. Location**
- Title: FIND US.
- Bonoua, Côte d'Ivoire.
- Google Maps embed (dark styled map) added once the exact address is confirmed.
- Secondary button: "Get directions".

**I. Footer**
- Background `#0D0C0B` (deeper than the page), gold horizontal logo.
- Majestic Residence Hotel, Bonoua, Côte d'Ivoire.
- Phone (confirmed main number only), Facebook link.
- Links: Home | Rooms | Services | Gallery | Contact.
- "© Majestic Residence Hotel" with the current year.

### 3.3 Booking flow

1. The guest browses the stays.
2. Selects a stay.
3. Picks an arrival date.
4. Adds name and preferences.
5. Is redirected to WhatsApp with a prefilled message.

Link: `https://wa.me/{{WHATSAPP_NUMBER}}?text=...`, number stored in one constant `WHATSAPP_NUMBER`.

Prefilled message (URL encoded). The team in Bonoua mainly works in French, so the message is **bilingual**:

```
Hello Majestic Residence Hotel / Bonjour,
I would like to make a booking / Je souhaite réserver.
Stay / Formule : [Selected stay]
Date : [Requested date]
Name / Nom : [Guest name]
Please confirm availability / Merci de confirmer la disponibilité.
```

Rules:
- Never show a booking as confirmed before the hotel validates it. The copy always says "booking request".
- Keep booking logic in its own module (`booking.js`) so a real booking engine and availability can be plugged in later.

### 3.4 Responsive

| Screen | Behaviour |
|---|---|
| Desktop (1024px and up) | Wide immersive layout, large photos, minimal header with menu overlay |
| Tablet (761 to 1023px) | Two column grid, adapted navigation |
| Mobile (760px and below) | Compact navigation, optimised images, single column cards, reachable booking buttons, floating WhatsApp button, no horizontal scroll |

### 3.5 Technical goals

- Lighthouse 90+ for performance and accessibility.
- WebP / AVIF with `srcset`, `loading="lazy"` except the hero (`fetchpriority="high"`).
- Google Fonts with `display=swap` and preconnect.
- `<meta name="color-scheme" content="dark light">` and `<meta name="theme-color" content="#121110">`.
- All copy in one file (`copy.en.json`), all media URLs in one `MEDIA` object, prices and hours in one config, so the site is easy to update and translate.

### 3.6 SEO (English)

- `<title>`: Majestic Residence Hotel | Hotel & Residence in Bonoua, Côte d'Ivoire
- Meta description: "Majestic Residence Hotel in Bonoua: a calm, elegant setting with a swimming pool, Wi-Fi, room service and secure parking. Day rest, full stay and night options. Book on WhatsApp."
- Target keywords: hotel in Bonoua, Bonoua hotel with pool, hotel residence Bonoua, book a hotel in Bonoua, accommodation Bonoua Côte d'Ivoire.
- `hreflang="en"` now, `hreflang="fr"` once the French version exists.
- schema.org `Hotel`: name, city, country, `priceRange`, amenities. Address and phone only once confirmed.
- Open Graph image: the hero photo.

---

## 4. Build prompt: home page editorial sections (dark, English)

Build three stacked sections of the Majestic Residence Hotel home page in plain HTML, CSS and vanilla JS, with no framework and no build step. The look is a high end travel magazine printed at night: warm black paper, large ivory Cormorant Garamond capitals, small champagne gold uppercase labels, warm documentary photography. The motion is slow and letter by letter: the hero title rises behind the foreground palm, the hero photo melts into the night as you scroll, and each section's type climbs in one letter at a time.

### Media (temporary URLs kept)

These URLs are temporary placeholders. Each slot will be replaced by an authentic photo of the property with the same ratio. Keep every URL in one `MEDIA` object at the top of the JS.

- **Hero photo** (2400×1357, ratio 2688:1520). Final target: the pool or the facade at dusk, sky in the top third.
  Temporary: https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/934f4b51-d05b-4498-9c4a-8262f044da66.jpg
- **Foreground cut out** (transparent WebP of the same subject, cropped to its bounding box). Final target: a palm tree from the hero photo foreground.
  Temporary: https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/5d850aba-1a5b-44eb-bd6c-cd9f87845be7.webp
  Position in the photo frame: left 26.19%, top 30.99%, width 46.5%. Re measure with the real photo; expose as CSS variables (`--cut-left`, `--cut-top`, `--cut-width`).
- **Round pills** (square):
  - Pill 1, final target: the pool by night.
    Temporary: https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/a6ea3433-41c4-46b8-aac3-faefa9ad7558.jpg
  - Pill 2, final target: the lit facade.
    Temporary: https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/9152c213-6763-4147-83f3-b985e6c65a00.jpg
- **Tall portrait** (2:3). Final target: a room with warm lamp light.
  Temporary: https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/e665edf0-2b16-4b17-ada1-0b928af1dbfa.jpg
- **Logo**: official Majestic logo, transparent PNG / SVG, gold version.

### 4.1 Hero (full viewport)

- **Stage:** a box with the photo ratio (2688:1520) covering the viewport (`width: max(100vw, 100svh * 1.7684)`), centred, `container-type: inline-size`. Three layers:
  1. the photo (object-fit cover)
  2. the title block
  3. the foreground cut out, overlapping the lower part of the central letters of MAJESTIC
- **Overlay:** `--night` from 35% at the top to 15% in the middle, so ivory type stays readable.
- **Title block:** 19.2% from the top of the stage, centred.
  - Eyebrow "BONOUA · CÔTE D'IVOIRE" (label style, 0.66cqw, `--gold`).
  - "MAJESTIC" in Cormorant Garamond 500, 9.6cqw, line height .8, tracking .02em, `--ivory`.
  - Tagline in Cormorant italic 1.4cqw, `--ivory-body`: "Elegant stays, restful moments."
- **Nav (over the photo, ivory):**
  - Left: two line menu icon + "MENU".
  - Centre: gold logo, 44px high.
  - Right: outlined "BOOK" button (1px `--gold`, 40px high, radius 4px).
  - On scroll: `--night-raised` background with hairline border.
- **Action pill:** bottom centre, glass pill "EXPLORE OUR STAYS" with a round `bed-double` icon and an arrow. Scrolls to section 4.3.
- **Load sequence:**
  - The photo settles from scale 1.06 to 1 over 2.2s, from brightness .7 to 1.
  - Eyebrow and nav fade down into place.
  - The letters of MAJESTIC rise .18em out of a 10px blur, 95ms apart, left to right.
  - The tagline fades in at about .9s.
  - The pill rises in last, at about 1.05s.
- **Scroll (the hero melts into the night):**
  - The stage drifts down at .32x the scroll.
  - A `--night` gradient at the bottom grows from 34% to 100% of the hero height and reaches full opacity by about 60% of a viewport scrolled.
  - Photo and cut out blur up to 6px and darken to brightness .6. The pill sits under the gradient and disappears with the photo.

### 4.2 Welcome statement (full viewport, centred)

- **Label:** `--gold` "WELCOME TO MAJESTIC".
- **Statement:** three lines of uppercase Cormorant at clamp(40px, 7.2vw, 132px), line height 1.06, `--ivory`:
  "YOUR ● QUIET / ESCAPE ● IN / BONOUA"
  - Each ● is a 0.86em round photo pill sitting inline, with a 1px `--gold` ring.
- **Subtext:** DM Sans 17px, max 520px, centred, `--ivory-body`: "A setting devoted to calm, relaxation and rest, with services designed to make every stay comfortable."
- **Emblem:** below, the official gold M emblem, 66px (symbol only).
- **Reveal (when 35% visible):**
  - Every letter rises from .55em below with a 4° tilt, 26ms apart in reading order.
  - The pills spring in from scale 0 (`--ease-spring`) while their photo zooms from 1.5 to 1.
  - The emblem turns in from -45° and scale .6, with a soft gold glow (`drop-shadow(0 0 18px rgb(198 161 91 / .35))`) that fades out.

### 4.3 Stays (full viewport)

- **Layout:** a 1180px column with a hairline on top and three columns (1.12fr / 1.12fr / .96fr).
- **Left column:**
  - `--gold` label "MAJESTIC RESIDENCE HOTEL".
  - "THREE / WAYS / TO / STAY" in Cormorant at clamp(34px, 4.25vw, 66px), one word per line, `--ivory`.
  - An 84px badge: a ring of 48 gold radial ticks turning once every 16s, a thin WhatsApp icon in the middle. It is a booking link.
  - Caption "BOOK ON WHATSAPP".
- **Middle column:**
  - DM Sans 15px paragraph, `--ivory-body`: "Choose your stay, pick your arrival date, and our team will confirm availability on WhatsApp."
  - Stays table (component 2.5):
    - Day Rest · 3 hours · 20,000 FCFA
    - Full Stay · Noon to noon · 30,000 FCFA
    - Night · 10 pm to noon · 25,000 FCFA
  - Each row opens WhatsApp with that stay prefilled.
  - Lucide icon row: Secure parking · Wi-Fi · Room service · Swimming pool.
  - Primary button "BOOK MY STAY".
- **Right column:** the 2:3 portrait, radius 6px, 1px `--hairline` border. The image drifts ±7% inside its frame with scroll.
- **Reveal:**
  - Title letters rise like the statement, 30ms apart.
  - Paragraph and table rise 22px in a stagger, rows fade in one by one.
  - The portrait wipes up with `clip-path: inset(100% 0 0 0)` to `inset(0)` (1.2s) while its image settles from scale 1.25.

### 4.4 Image motion (dark adapted)

- **Hero breathing:** continuous zoom 1 to 1.045, 22s, alternate.
- **Three depth speeds:** photo .32x, title .22x, cut out .12x.
- **Mouse parallax (desktop):** photo ±8px, cut out ±16px, title ±4px, lerp .06.
- **Palm in the breeze:** cut out rotates -0.6° to 0.6°, `transform-origin: 50% 100%`, 7s cycle, random start phase.
- **Moving light:** a radial gold layer (`#D9B66F` at 8%, `soft-light`) drifts across the hero over 18s, like lantern light.
- **Fireflies:** in the hero and the amenities section, 6 to 10 gold dots (2 to 4px, 2px blur, max 40% opacity) rising very slowly. They are the night signature of the dark version. Disabled in reduced motion.
- **Pills:** inner photo drifts ±6% and ±3° over 14s, slides ±10% with scroll, grows to 1.4em on hover.
- **Image reveals:** reusable `data-reveal` with three variants: `curtain` (a `--night-surface` panel lifts away, image settles from 1.25), `window` (opens from the centre with `inset(18% round 8px)`), `fade` (opacity, 12px blur, scale 1.06). 1400ms, `--ease-out`, at 25% visibility, once. 90ms stagger in grids.
- **Floating preview on the stays table (desktop):** hovering a row shows a 4:5 photo of that stay (240px wide) near the cursor, following with lerp .1 and tilting up to ±6° with horizontal speed. Enter with a clip wipe (500ms), crossfade between rows (300ms), close downward when leaving the table. Images in `MEDIA.stays.dayRest`, `MEDIA.stays.fullStay`, `MEDIA.stays.night`.
- **Gallery:** sticky section of 300vh where vertical scroll moves a horizontal strip, inner parallax ±12%, centre image at scale 1 and others at .92 with opacity .6, custom 84px ivory cursor disc reading "VIEW", lightbox opened with a shared element View Transition (FLIP fallback). Mobile: native `scroll-snap` carousel.
- **Page transitions:** `@view-transition { navigation: auto; }`, 400ms fade, shared `view-transition-name` from a stay card to the next page hero.
- **Performance:** one rAF loop, transform / opacity / clip-path / filter only, IntersectionObserver pauses off screen effects, mouse effects only on `(hover: hover) and (pointer: fine)`, no water or video effects on Save-Data. Target 60 fps, CLS 0.

### 4.5 Recorder mode (`?rec=1`)

- **Scroll:** the whole page is translated by a 6.5s Web Animation instead of real scrolling:
  - hold to 1.95s
  - glide to section 2 by 3.35s
  - hold to 4.25s
  - glide to section 3 by 5.55s
  - hold
- **Reveals:** created up front at 0, 2.65s and 4.85s.
- **Scroll effects:** a rAF loop reads the page's current translate and applies the same scroll linked effects. Ambient loops use `document.timeline.currentTime` so a frame by frame recorder stays deterministic.

### 4.6 Phone (760px and below)

- **Nav:** icons only, centred logo at 34px.
- **Hero title:** higher (top 17%) at 15.6vw to clear the foreground.
- **Statement:** 8.6vw.
- **Stays:** one column, title at 12vw, full width photo.
- **Floating WhatsApp button** after the hero.
- **Overflow:** no horizontal scroll.

### 4.7 Acceptance check (1440×960)

- **On load:** the residence glows out of the dark, and MAJESTIC rises letter by letter behind the palm.
- **First scroll:** the photo blurs and melts into the night, then the statement climbs in letter by letter with the two round photos popping into the gaps and the emblem turning in with a gold glow.
- **Second scroll:** the stays title climbs in, the price table fades up, the portrait wipes in and the WhatsApp badge ticks keep turning.
- **Hover the table:** a stay photo floats beside the cursor and changes smoothly between rows.
- **Language:** every visible string, `alt`, `aria-label`, meta tag and button is in English.
- **Theme:** dark by default, switching to light keeps every component readable.
- **Content:** no invented room categories, sizes, capacities, reviews or ratings. Only the provided prices, hours and amenities appear.

---

## 5. Photos to produce

A professional shoot, with a strong **dusk and night series** since the dark theme lives on it.

| Subject | Details | Use |
|---|---|---|
| Rooms | Each room type, bed, textile details, warm lamp light | Stays, portrait, gallery, floating previews |
| Pool | Dusk and night (lit), wide and detail | Hero, pills, amenities |
| Bathrooms | Fittings and finishes | Gallery |
| Exteriors | Lit facade, entrance, common areas, garden | Hero, gallery |
| Cut out | A foreground palm from the hero photo, transparent WebP | Hero depth |
| Optional video | 8 to 12s loop of the lit pool or palms, muted | Cinemagraph hero |

---

## 6. To confirm before launch

1. **Main WhatsApp number**: +225 07 47 82 01 71 or +225 07 11 10 83 90?
2. **Exact hours** of each stay.
3. **English names of the stays** (Day Rest / Full Stay / Night) and the tagline "Elegant stays, restful moments." to be validated by the client.
4. **Exact address** for the map and directions.
5. **Authentic photos** to replace the temporary images.
6. **Vector logo files** (SVG or AI).

---

## 7. Appendix: CSS tokens

```css
:root,
:root[data-theme="dark"] {
  color-scheme: dark;

  --night: #121110;
  --night-raised: #171717;
  --night-surface: #1F1D1B;
  --night-elevated: #292929;
  --footer: #0D0C0B;

  --ivory: #F8F5EF;
  --ivory-body: rgb(248 245 239 / .72);
  --ivory-muted: rgb(248 245 239 / .52);
  --beige: #E9DFCE;
  --ink: #171717;

  --gold: #C6A15B;
  --gold-hover: #D9B66F;
  --gold-tint: rgb(198 161 91 / .12);
  --gold-text: #C6A15B;
  --hairline: rgb(248 245 239 / .12);

  --grain-blend: overlay;
  --grain-opacity: .09;
}

:root[data-theme="light"] {
  color-scheme: light;

  --night: #F8F5EF;
  --night-raised: #E9DFCE;
  --night-surface: #FFFFFF;
  --night-elevated: #FFFFFF;
  --footer: #171717;

  --ivory: #171717;
  --ivory-body: rgb(41 41 41 / .78);
  --ivory-muted: rgb(41 41 41 / .56);
  --beige: #171717;
  --ink: #171717;

  --gold-text: #8C6A2F;
  --hairline: rgb(23 23 23 / .14);

  --grain-blend: multiply;
  --grain-opacity: .18;
}

:root {
  --font-display: "Cormorant Garamond", Georgia, serif;
  --font-ui: "Montserrat", system-ui, sans-serif;
  --font-body: "DM Sans", system-ui, sans-serif;

  --fs-hero: clamp(64px, 6vw, 76px);
  --fs-h2: clamp(42px, 3.6vw, 52px);
  --fs-h3: clamp(24px, 2.2vw, 30px);
  --fs-body: clamp(15px, 1.1vw, 17px);
  --fs-label: 11px;
  --tracking-label: .2em;

  --container: 1280px;
  --container-editorial: 1180px;
  --gutter: 64px;
  --section-gap: clamp(60px, 9vw, 120px);

  --radius-btn: 4px;
  --radius-card: 8px;
  --radius-pill: 999px;

  --ease-out: cubic-bezier(.22, 1, .36, 1);
  --ease-in-out: cubic-bezier(.65, 0, .35, 1);
  --ease-spring: cubic-bezier(.34, 1.4, .64, 1);
  --dur-fast: 300ms;
  --dur-hover: 900ms;
  --dur-reveal: 1400ms;
  --dur-hero: 2200ms;
}

@media (max-width: 760px) {
  :root { --gutter: 20px; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
}
```
