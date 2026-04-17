# Cyberpunk Personal Blog - Design Specification

## Overview
A futuristic cyberpunk-themed personal blog built with Next.js 14+, TypeScript, and Tailwind CSS. Features neon glow effects, glitch animations, and terminal-inspired UI components.

## Tech Stack
- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS v4
- React 19
- lucide-react (icons)
- gray-matter (frontmatter parsing)
- next-mdx-remote (MDX rendering)
- reading-time (estimated reading time)

## Design System

### Color Palette (CSS Variables)
```css
--neon-cyan: #00f0ff
--neon-pink: #ff00ff
--neon-purple: #9d00ff
--neon-green: #00ff9d
--neon-yellow: #f0ff00
--neon-red: #ff0040

--bg-primary: #0a0a0f
--bg-secondary: #12121a
--bg-card: #1a1a24
--bg-terminal: #0d0d12

--text-primary: #e0e0e0
--text-secondary: #888888
--text-muted: #555555
```

### Typography
- **Headings**: Orbitron (Google Font) - futuristic display font
- **Body**: Inter or system-ui
- **Monospace**: JetBrains Mono or Share Tech Mono - for code/terminal text

### Effects & Animations

#### Keyframe Animations
1. **blink** - cursor blinking for typewriter effect
2. **glitch** - text chromatic aberration glitch
3. **scanline** - CRT monitor scanline movement
4. **rgbShift** - RGB color channel separation
5. **typewriter** - character-by-character text reveal
6. **pulse-glow** - neon glow pulsing
7. **flicker** - occasional random flicker for realism

#### CSS Classes
- `.cyber-chamfer` - diagonal corner cut effect
- `.cyber-chamfer-sm` - smaller chamfer variant
- `.cyber-glitch` - glitch text with ::before/::after pseudo-elements
- `.cyber-glow-cyan` - cyan neon box-shadow
- `.cyber-glow-pink` - pink neon box-shadow
- `.cyber-border` - gradient border with glow

### Background Effects
- Circuit/grid pattern overlay (SVG)
- Scanline overlay on entire page
- Subtle noise texture

## Component List

### Layout Components
1. **Navbar** - Fixed top, neon bottom border, logo + nav links (Home, Blog, Trends, About), mobile hamburger
2. **Footer** - Circuit pattern bg, 4-column grid, neon accents, social links
3. **ScanlineOverlay** - Full-page CRT scanline effect (fixed, pointer-events-none)

### UI Components
4. **GlitchText** - Text with chromatic aberration glitch effect
   - Props: `text`, `size?`, `color?`, `trigger?`
5. **TypeWriter** - Typewriter animation with blinking cursor
   - Props: `text`, `speed?`, `delay?`, `onComplete?`
6. **NeonButton** - Button with 4 variants
   - Variants: `default` (cyan), `secondary` (pink), `ghost` (transparent), `glitch` (animated)
   - Props: `variant`, `children`, `onClick`, `href?`
7. **TerminalWindow** - Decorative terminal header bar with traffic lights
   - Props: `title?`, `children`, `variant?`

### Card Components
8. **BlogCard** - Terminal-style card for blog posts
   - Features: Traffic light dots, title, excerpt, date, reading time, tags
   - Props: `post: BlogPost`
9. **TrendCard** - Holographic-style card for tech trends
   - Features: Neon glow, category badge, trend indicator
   - Props: `trend: Trend`

### Section Components
10. **HeroSection** - Landing page hero
    - Features: GlitchText for h1, TypeWriter for subtitle, holographic HUD panel, CTA buttons
11. **CircuitBackground** - SVG circuit/grid pattern for backgrounds
12. **CyberInput** - Terminal-style input with ">" prefix

## Data Types

```typescript
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readingTime: string;
  tags: string[];
  coverImage?: string;
}

interface Trend {
  id: string;
  title: string;
  category: 'AI' | 'Cloud' | 'Security' | 'Web3' | 'DevOps';
  description: string;
  trendDirection: 'up' | 'down' | 'stable';
  percentage?: number;
}
```

## Page Structure

### 1. Home Page (`/`)
- HeroSection with glitch title "NEON NEXUS"
- TypeWriter subtitle cycling through tech topics
- Latest 3 blog posts (BlogCard grid)
- Top 4 tech trends (TrendCard grid)
- Stats section (Posts count, Categories, etc.)

### 2. Blog List Page (`/blog`)
- Page header with glitch text
- Grid of all blog posts
- Tag filter sidebar
- Pagination or load more

### 3. Blog Post Page (`/blog/[slug]`)
- Full MDX content rendering
- Header with title, date, reading time, tags
- Previous/next post navigation
- "Back to blog" link

### 4. Trends Page (`/trends`)
- Page header
- Grid of TrendCards
- Category filter tabs

### 5. About Page (`/about`)
- Terminal aesthetic design
- Profile section with avatar
- Skills list with progress bars
- Circuit background pattern
- Contact links

## File Structure
```
app/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ScanlineOverlay.tsx
│   ├── GlitchText.tsx
│   ├── TypeWriter.tsx
│   ├── NeonButton.tsx
│   ├── TerminalWindow.tsx
│   ├── BlogCard.tsx
│   ├── TrendCard.tsx
│   ├── HeroSection.tsx
│   ├── CircuitBackground.tsx
│   └── CyberInput.tsx
├── lib/
│   ├── posts.ts
│   └── trends.ts
├── blog/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── trends/
│   └── page.tsx
├── about/
│   └── page.tsx
├── layout.tsx
├── page.tsx
└── globals.css
content/
└── posts/
    ├── rust-async-await.mdx
    ├── kubernetes-patterns.mdx
    └── ai-agent-frameworks.mdx
public/
├── images/
└── fonts/
```

## Sample Content

### Blog Post 1: Rust Async/Await Deep Dive
Category: Rust, Systems Programming
Excerpt: Understanding the inner workings of Rust's async runtime...

### Blog Post 2: Kubernetes Design Patterns
Category: DevOps, Cloud Native
Excerpt: Essential patterns for building resilient microservices...

### Blog Post 3: AI Agent Frameworks Comparison
Category: AI, Machine Learning
Excerpt: Comparing LangChain, AutoGPT, and custom agent implementations...

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Accessibility
- All interactive elements keyboard accessible
- Sufficient color contrast (WCAG AA)
- Reduced motion support via `prefers-reduced-motion`
- Semantic HTML structure
