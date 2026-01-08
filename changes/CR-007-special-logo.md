# CR-007: Special Parallax Logo

## Context
The site currently lacks a strong visual branding element. The user wants to feature the "fousa" logo prominently with a "special" parallax effect to create a wow factor.

## Goal
Integrate the specific SVG logo (`https://www.fousa.be/images/fousa.svg`) and apply a premium parallax/3D animation to it (e.g., reacting to mouse movement).

## Scope (in scope / out of scope)
**In scope:**
- Downloading the SVG asset to `public/images/`.
- Creating a `ParallaxLogo` component using Framer Motion (`useMotionValue`, `useTransform`).
- Implementing a "mouse-follow" 3D tilt or parallax layer effect.
- Replacing the current simple text string "fousa" (if any) with this component.

**Out of scope:**
- Designing a new logo.

## Acceptance criteria (checkboxes)
- [x] `fousa.svg` is served from `public/images`.
- [x] The logo is visible in the Hero (or Header).
- [x] Moving the mouse causes the logo to move/tilt (parallax effect).
- [x] Animation is smooth and performant (will-change: transform).

## Risks / Attention points
- Performance: Mouse move listeners can be heavy. Use `requestAnimationFrame` or recognized libraries (Framer Motion handles this well).
- Mobile: Parallax typically doesn't work well on touch. Ensure a fallback or use gyroscope (if adventurous) or just static on mobile.

## Tasks
- [x] **Download Logo Asset** <!-- id: 700 -->
  - **Goal**: Contextualize the asset.
  - **Deliverable**: `fousa.svg` in `public/images/`.
  - **Done when**: File exists and opens correctly.
  - **Likely Files**: `public/images/fousa.svg`
- [x] **Create ParallaxLogo Component** <!-- id: 701 -->
  - **Goal**: Isolate the complex animation logic.
  - **Deliverable**: `ParallaxLogo.tsx` in `src/components/ui/` (or `sections`).
  - **Done when**: Component renders the SVG.
  - **Likely Files**: `src/components/ui/ParallaxLogo.tsx`
- [x] **Implement 3D/Parallax Logic** <!-- id: 702 -->
  - **Goal**: The "Special" factor.
  - **Deliverable**: Framer Motion logic (`x`, `y` based on mouse position) applied to the SVG.
  - **Done when**: Mouse movement creates a visible depth/tilt effect.
  - **Likely Files**: `src/components/ui/ParallaxLogo.tsx`
- [x] **Integrate into Hero** <!-- id: 703 -->
  - **Goal**: Display it prominently.
  - **Deliverable**: `Hero.tsx` imports and renders `ParallaxLogo`.
  - **Done when**: Logo is visible on the landing page.
  - **Likely Files**: `src/components/sections/Hero.tsx`
- [x] **Run tests** <!-- id: 704 -->
  - **Goal**: Verify build.
  - **Deliverable**: `npm run lint` / build.
  - **Done when**: Success.
- [x] **Update docs** <!-- id: 705 -->
  - **Goal**: Maintain records.
  - **Deliverable**: Updated checklist.
  - **Done when**: All tasks are marked as done.
