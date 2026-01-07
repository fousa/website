# TASKS.md

Break this project into sequential steps. Execute these one by one and verify functionality each time.

## Phase 1: Foundation & Setup
- [x] **1.1 Init Project**: Setup Next.js (App Router, TS, Tailwind). Remove default boilerplate code.
- [x] **1.2 Setup Content Engine**: Install `gray-matter`. Create `src/lib/markdown.ts` to read timeline and project items.
- [x] **1.3 Type Definitions**: Define `TimelineItem` and `Project` interfaces in `src/types`.
- [x] **1.4 Seed Data**: Create dummy markdown files in `/content` for testing.

## Phase 2: Core Components
- [x] **2.1 Global Layout**: Setup fonts (Google Fonts) and base CSS variables.
- [x] **2.2 Hero Section**: Build a static Hero component with name and subtitle.
- [x] **2.3 Timeline Component (Basic)**: Render the timeline data as a flat list (without animation first).
- [x] **2.4 Project Grid**: Render project cards in a simple responsive grid (CSS Grid).

## Phase 3: Animation & Polish (The "Wow" Factor)
- [x] **3.1 Install Framer Motion**: Install library.
- [x] **3.2 Animate Hero**: Fade-in text and elements on load.
- [x] **3.3 Parallax Timeline**: Implement scroll-triggered animations for timeline items (fade-in + slight y-axis movement).
- [x] **3.4 Project Interactions**: Add hover states to project cards.

## Phase 4: Mobile & Responsiveness
- [ ] **4.1 Mobile Check**: Verify layout on mobile breakpoints.
- [ ] **4.2 Disable Heavy Motion**: Ensure parallax effects are reduced on touch devices (via `prefers-reduced-motion` or screen size check).

## Phase 5: Deployment Prep
- [ ] **5.1 Procfile**: Create `Procfile` for Heroku (`web: npm start`).
- [ ] **5.2 Build Check**: Run `npm run build` locally to guarantee static generation works.
