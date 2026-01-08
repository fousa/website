# CR-011: Accessibility (A11y) Compliance

## Context
The website aims to be accessible to all users, adhering to European standards (EN 301 549 / WCAG 2.1 AA). Recent changes (Parallax effects, expanding buttons) introduce dynamic interactions that must be rigorously tested for accessibilty.

## Goal
Ensure the entire site meets WCAG 2.1 AA standards. This involves semantic structure, keyboard navigability, screen reader support, and respecting user motion preferences.

## Scope (in scope / out of scope)
**In scope:**
- **Semantics**: Valid HTML5 structure (main, nav, footer, proper heading hierarchy).
- **Keyboard Access**: Visible focus states (focus-visible rings) for all interactive elements. Tab order must be logical.
- **ARIA**: `aria-label` for icon-only buttons (Accordion buttons). `alt` text for images.
- **Motion**: `prefers-reduced-motion` media queries to disable or simplify parallax/scroll animations (CR-007, CR-008).
- **Contrast**: Ensuring text/background ratios meet 4.5:1 (checking CR-010 palette).

**Out of scope:**
- Providing a specific "Accessibility Statement" page (unless requested).
- WCAG AAA compliance (which is much stricter).

## Acceptance criteria (checkboxes)
- [x] Site can be navigated entirely by keyboard (Tab/Enter/Space).
- [x] Focus indicators are clearly visible.
- [x] Screen readers announce buttons and links with meaningful labels (e.g., "LinkedIn", not "Button").
- [x] Users with "Reduce Motion" enabled do not see large parallax moves.
- [x] Colors pass WCAG AA contrast check.
- [ ] Lighthouse Accessibility score is 100.

## Risks / Attention points
- **Framer Motion**: Use `useReducedMotion` hook to conditionally apply animations.

## Tasks
- [x] **Audit & Semantic Cleanup** <!-- id: 1100 -->
  - **Goal**: Solid foundation.
  - **Deliverable**: `layout.tsx` and pages using `<main>`, `<nav>`, `<footer>` correctly. No skipped heading levels.
  - **Done when**: HTML structure is valid semantics.
  - **Completed Files**: `src/app/page.tsx` (already had main), `src/components/sections/Footer.tsx` (already had footer), `src/components/ui/ParallaxLogo.tsx` (fixed heading hierarchy)
- [x] **Implement Keyboard Focus** <!-- id: 1101 -->
  - **Goal**: Navigation without mouse.
  - **Deliverable**: Global CSS or component styles adding `focus-visible:ring`.
  - **Done when**: Tabbing through the page highlights every link/button.
  - **Completed Files**: `src/app/globals.css` (added focus-visible styles)
- [x] **Enhance ARIA & Labels** <!-- id: 1102 -->
  - **Goal**: Screen reader support.
  - **Deliverable**: `aria-label` props on social buttons and CV link.
  - **Done when**: VoiceOver reads "Link to [Social]" clearly.
  - **Completed Files**: `src/components/ui/ExpandingButton.tsx` (already had aria-labels), `src/components/ui/TimelineCard.tsx` (added aria-labels and role)
- [x] **Implement Reduced Motion** <!-- id: 1103 -->
  - **Goal**: Respect vestibular motion settings.
  - **Deliverable**: Using `useReducedMotion` or CSS media queries to disable parallax in `ParallaxLogo` and `UnifiedTimeline`.
  - **Done when**: Animations are static/simple when Reduce Motion is on.
  - **Completed Files**: `src/components/ui/ParallaxLogo.tsx`, `src/components/ui/TimelineCard.tsx`, `src/components/sections/UnifiedTimeline.tsx`, `src/components/sections/Hero.tsx`, `src/components/sections/About.tsx`, `src/components/sections/Footer.tsx`
- [x] **Run tests** <!-- id: 1104 -->
  - **Goal**: Verify compliance.
  - **Deliverable**: `npm run lint` / Lighthouse check (manual).
  - **Done when**: High scores, no linter errors.
- [x] **Update docs** <!-- id: 1105 -->
  - **Goal**: Maintain records.
  - **Deliverable**: Updated checklist.
  - **Done when**: All tasks are marked as done.
