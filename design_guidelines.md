# Kechita Fintech Design Guidelines

## Design Approach
**Cultural Context**: Proudly Kenyan fintech platform with authentic local market aesthetics. Draw inspiration from modern African fintech leaders (Flutterwave, Chipper Cash) while maintaining unique Kechita identity. The design should feel premium yet approachable, celebrating Kenya's entrepreneurial spirit.

## Core Design Principles
- **Silky Smooth Experience**: Seamless micro-interactions and fluid animations
- **Mobile-First**: Optimized for Kenyan mobile users (primary device)
- **Trust & Credibility**: Professional fintech appearance with warmth
- **Cultural Pride**: Authentically Kenyan visual language

## Color Palette

### Primary Colors
- **Teal Primary**: `186 87% 28%` (darker: `186 88% 22%`)
- **Lime Accent**: `83 65% 35%` (darker: `83 62% 28%`)

### Neutrals
- **Background Light**: `210 20% 98%`
- **Background Cream**: `60 56% 91%`
- **Text Dark**: `0 0% 13%`
- **Border/Divider**: `214 32% 91%`

### Application
- Teal for primary CTAs, headers, and trust elements
- Lime for secondary actions, highlights, and success states
- Use soft glow shadows (`shadow-teal-500/20`) for depth
- Gradient backgrounds: `from-teal-600 to-teal-700` for premium sections

## Typography
**Font Family**: Inter (primary) or Poppins (alternative) from Google Fonts

### Hierarchy
- **Hero Headlines**: `text-4xl md:text-6xl font-bold tracking-tight`
- **Section Headers**: `text-3xl md:text-4xl font-bold`
- **Body Large**: `text-lg md:text-xl leading-relaxed`
- **Body Regular**: `text-base leading-relaxed`
- **Captions**: `text-sm text-gray-600`

## Layout System

### Spacing Primitives
Use Tailwind units: **4, 6, 8, 12, 16, 24** for consistent rhythm
- Section padding: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Element gaps: `gap-8 md:gap-12`
- Container max-width: `max-w-7xl mx-auto px-6`

### Grid Patterns
- Feature cards: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Success stories: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- Team members: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

## Component Library

### Navigation
- Fixed header with white/cream background, subtle shadow
- Kechita logo (top-left, 40-50px height)
- Desktop: horizontal menu with hover underline (teal)
- Mobile: hamburger menu with smooth slide-in drawer

### Cards
- Rounded corners: `rounded-2xl`
- Hover effect: `hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300`
- Glow on active: `ring-2 ring-teal-500/20`

### Buttons
- **Primary**: `bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full`
- **Secondary**: `bg-lime-600 hover:bg-lime-700 text-white px-8 py-3 rounded-full`
- **Outline**: `border-2 border-white text-white backdrop-blur-sm bg-white/10 px-8 py-3 rounded-full` (for hero images)

### Forms
- Input fields: `border-2 border-gray-200 focus:border-teal-500 rounded-xl px-4 py-3`
- Labels: `text-sm font-semibold text-gray-700 mb-2`
- Validation: Green checkmark for valid, red border for errors

## Images

### Hero Section (Home)
- **Large Hero Image**: Full-width background featuring vibrant Kenyan market scene (Unsplash: Kenyan entrepreneurs, street vendors, colorful fabrics)
- Overlay: `bg-gradient-to-r from-teal-900/90 to-teal-800/70`
- Hero content positioned left-aligned with breathing room
- Height: `min-h-[600px] lg:min-h-[700px]`

### Additional Images
- **12 Hero Variants**: Embedded `.webp` images at `/public/assets/images/hero1-12.webp` - rotate dynamically or use for different sections
- **Success Stories**: Portrait photos of Kenyan entrepreneurs (mama mboga, boda rider, salon owner) - 8 images
- **Blog/Resources**: Kenyan business scenes, mobile money, market stalls - 6-8 images
- **About/Team**: Professional headshots with warm backgrounds - 5 images
- **Lazy Loading**: All Unsplash images load lazily with blur-up effect

### Image Placement
- Home: Hero background + metrics section illustration
- About: Timeline photos, team vision image
- Loan Products: Product category illustrations (8 icons/images)
- Success Stories: User portraits in cards
- Impact Report: Data visualization backgrounds
- Blog: Article feature images
- Team: Staff headshots

## Animations

### Page Transitions (Framer Motion)
- Fade in from bottom: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}`
- Stagger children: `staggerChildren: 0.1`

### Scroll Animations
- Parallax timeline (About page)
- Counter animations (Impact Report): Count up on viewport entry
- Fade in on scroll for cards and sections

### Micro-interactions
- Button hover: Scale 1.02 + shadow increase
- Card hover: Lift effect with glow
- Logo integration: Subtle pulse on load
- Success message: Slide in from bottom with confetti (optional)

### Performance
- Use `transform` and `opacity` for GPU acceleration
- Minimal animation on mobile (reduce motion respected)
- Smooth 60fps transitions

## Page-Specific Layouts

### Home
- Hero: Full-width image background, tagline "Empowering Kenyan Dreams with Silky Loans", dual CTAs
- Metrics: Animated counters (69% women borrowers, loan amounts) with icons
- Quick features: 3-column grid showcasing speed, security, flexibility

### Apply Now
- Clean centered form on cream background
- Progress indicator (optional)
- Success alert: "Asante sana! Tunapiga simu kesho — your growth, our pride!" in teal banner

### Success Stories
- Grid of story cards with hover-to-expand modals
- Each card: Photo, name, quote preview, business type
- Modal: Full story, before/after metrics, larger photo

### Impact Report
- Dashboard layout with stat cards
- Recharts bar/line graphs (teal/lime color scheme)
- Animated counter widgets
- Map visualization placeholder for county coverage

### Contact & Legal
- Two-column: Contact form + Branch finder
- 80 branches: Searchable/filterable list or map pins
- Collapsible tabs for Privacy Policy + Terms (accordion)
- Google Maps embed with teal marker

## Accessibility
- WCAG AA contrast compliance (all text readable)
- Alt text for all images (descriptive, context-aware)
- Keyboard navigation for all interactive elements
- Focus states: `focus:ring-2 focus:ring-teal-500 focus:outline-none`
- Screen reader labels for icons

## Logo Integration
**Kechita Logo Usage** (from uploaded image):
- Navbar: 40-50px height, link to home
- Favicon: Convert to `.ico` in `/public`
- Footer: 60px height with tagline
- About page: Featured in mission section
- Open Graph: 1200x630px social card with logo

Ensure logo colors complement teal/lime palette—adjust opacity or use white version on dark backgrounds.

## SEO & Metadata
- Page titles: "Kechita | [Page Name] - Microloans for Kenyan Entrepreneurs"
- Meta descriptions: 150-160 characters highlighting value proposition
- Keywords: microloans Kenya, M-Pesa loans, business finance, Kechita microcredit
- Open Graph images for social sharing

**Final Note**: Every page should feel complete, polished, and production-ready. No placeholders or TODOs—this is a finished, beautiful product celebrating Kenya's entrepreneurial hustle. 🇰🇪✨