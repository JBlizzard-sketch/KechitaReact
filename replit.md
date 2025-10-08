# Kechita Capital - Microfinance Platform

## Overview

Kechita Capital is a Kenyan fintech platform providing fast, collateral-free microloans to entrepreneurs across Kenya. The application is a marketing website showcasing loan products, success stories, team information, and impact metrics. It features a modern, mobile-first design with smooth animations and a culturally authentic Kenyan aesthetic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript using Vite as the build tool
- Client-side routing via Wouter (lightweight React Router alternative)
- Mobile-first responsive design targeting Kenyan mobile users as primary audience

**UI Component System:**
- Shadcn UI components (Radix UI primitives) with custom Tailwind configuration
- Design system based on "new-york" style from Shadcn
- Component aliases configured for clean imports (`@/components`, `@/lib`, `@/hooks`)

**Styling Strategy:**
- TailwindCSS with custom color palette (Teal primary, Lime accent)
- CSS variables for theming with light/dark mode support
- Custom design tokens for elevation, borders, and interactive states
- Kenyan-inspired color scheme with soft glow shadows

**Animation & Interactivity:**
- Framer Motion for page transitions, scroll animations, and micro-interactions
- Counter animations for metrics (animated number counting)
- Smooth hover effects and card interactions
- Parallax-style scrolling elements

**State Management:**
- React Hook Form with Zod validation for form handling
- TanStack Query (React Query) for server state management
- Local component state via React hooks

**SEO & Metadata:**
- React Helmet Async for dynamic meta tags
- Open Graph metadata for social sharing
- Optimized for search engines with proper title/description tags

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- HTTP server for API endpoints (currently minimal)
- Development mode with Vite middleware integration
- Production builds via esbuild

**Database Layer:**
- Drizzle ORM configured for PostgreSQL
- Schema-first approach with type generation
- Migration support via Drizzle Kit
- Neon Database serverless PostgreSQL integration

**Data Storage:**
- In-memory storage implementation (MemStorage) as placeholder
- Interface-based storage pattern (IStorage) for future database integration
- User management schema defined but not actively used in current implementation

**Session Management:**
- connect-pg-simple configured for PostgreSQL session storage
- Cookie-based authentication infrastructure ready (not implemented in current version)

### Content Management

**Static Content:**
- JSON-based content in `client/src/content/site.json`
- Includes: hero content, metrics, loan products, success stories, team members, blog posts, impact data
- Centralized content management for easy updates

**Asset Management:**
- Attached assets folder for static files
- Unsplash integration for placeholder images
- Logo assets stored in public directory

### Routing Structure

**10 Main Routes:**
1. Home (`/`) - Hero section with metrics and CTAs
2. About (`/about`) - Mission, history, certifications
3. Loan Products (`/loans`) - 8 loan product cards
4. Apply Now (`/apply`) - Application form
5. Success Stories (`/success-stories`) - Customer testimonials with modals
6. Impact Report (`/impact`) - Data visualizations and metrics
7. Resources (`/resources`) - Business tips and loan calculator
8. Blog (`/blog`) - Single article with expansion capability
9. Team (`/team`) - Staff profiles
10. Contact (`/contact`) - Contact form, branch locations, legal documents

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Accessible component primitives (dialogs, dropdowns, accordions, etc.)
- **Lucide React**: Icon library
- **Recharts**: Data visualization and charting library
- **Embla Carousel**: Carousel/slider functionality
- **CMDK**: Command palette component

### Database & ORM
- **Neon Database**: Serverless PostgreSQL provider (via @neondatabase/serverless)
- **Drizzle ORM**: Type-safe ORM with Zod integration
- **Drizzle Kit**: Schema management and migrations

### Form & Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### State & Data Fetching
- **TanStack Query**: Server state management and caching
- **React Router (Wouter)**: Client-side routing

### Animation & Motion
- **Framer Motion**: Animation library for React

### Development Tools
- **Vite**: Build tool and dev server
- **TypeScript**: Type safety
- **ESBuild**: Production bundling for server code
- **PostCSS & Autoprefixer**: CSS processing
- **Replit Plugins**: Development tools (cartographer, dev banner, runtime error overlay)

### Styling
- **TailwindCSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Class name utilities

### Session & Security
- **connect-pg-simple**: PostgreSQL session store for Express
- **Express session middleware**: (Infrastructure ready, not actively used)

### Fonts
- **Google Fonts**: Inter and Poppins font families

### Design Philosophy
The application follows Kenyan fintech design patterns with emphasis on:
- Trust and credibility through professional appearance
- Cultural authenticity with local color choices
- Silky smooth interactions via micro-animations
- Mobile-first experience for primary device usage