# CR-015: UI Refinements & Performance

## Context
Various UI elements need refinement for better visual hierarchy and alignment. Additionally, the timeline animation feels sluggish during scroll, and the education section is missing chronological markers and feels oversized.

## Goal
Improve the visual hierarchy of experience cards, ensure perfect centering for the main logo, optimize timeline scroll animations for better responsiveness, and balance the education section styling.

## Scope (in scope / out of scope)
**In scope:**
- **Card Hierarchy Swap**: Update `TimelineCard` to show Company/School name as the primary title and the Function/Degree as the subtitle for both experience and education items.
- **Project Title Refinement**: Extract the `- Description` suffix from project titles into a dedicated `subtitle` field in the data model.
- **Project Subtitle Styling**: Display the project subtitle on the same line as the title but with a different font/style.
- **Logo Centering**: Fix the slight left offset on the main logo.
- **Parallax Optimization**: Adjust `framer-motion` triggers to make cards appear sooner and faster during scroll.
- **Education Years**: Add year labels to the education section of the timeline.
- **Education Scaling**: Reduce the visual size of education blocks relative to work/project blocks.

**Out of scope:**
- Redrawing the logo SVG itself.
- Changing the fundamental layout of the timeline (keeping current staggered approach).

## Acceptance criteria (checkboxes)
- [x] Experience and Education cards show Company/School in bold as the main title.
- [x] Role/Degree is shown as a subtitle below the primary name.
- [x] Project titles are split; the `- Description` part is moved to a `subtitle` field.
- [x] Project subtitles are displayed next to the title with a distinct font/style (inline).
- [x] Main logo is perfectly centered horizontally.
- [x] Timeline cards appear more snappily when scrolling (reduced trigger margin/delay).
- [x] Education section has year labels (e.g., "2006", "2010").
- [x] Education blocks are visually smaller/tighter than experience blocks.

## Risks / Attention points
- **Sorting**: Swapping title/subtitle only applies to "experience" items. Projects should retain their title as the primary header.
- **Responsive Alignment**: Centering the horizontal logo must not break mobile centering.
- **Animation Performance**: Ensure that reducing delays doesn't cause stuttering on lower-end devices.

## Tasks
- [x] **Data Model & Content Migration** <!-- id: 1500 -->
  - **Goal**: Add `subtitle` field and migrate project titles.
  - **Deliverable**: Path-to-types/index.ts and content/projects/*.md updated.
  - **Done when**: Project titles no longer contain the `-` suffix, and it's moved to `subtitle`.
  - **Likely Files**: `src/types/index.ts`, `content/projects/*.md`
- [x] **Card Design Update** <!-- id: 1501 -->
  - **Goal**: Implement hierarchy swaps and inline project subtitles.
  - **Deliverable**: Refactored `TimelineCard.tsx`.
  - **Done when**: Hierarchy is swapped for exp/edu, and project subtitles are styled inline.
  - **Likely Files**: `src/components/ui/TimelineCard.tsx`
- [x] **Center Main Logo & Parallax Tuning** <!-- id: 1502 -->
  - **Goal**: Fix alignment and improve animation speed.
  - **Deliverable**: Updated `ParallaxLogo.tsx` and updated animation constants in `TimelineCard.tsx`.
  - **Done when**: Logo is centered and cards appear snapier.
  - **Likely Files**: `src/components/ui/ParallaxLogo.tsx`, `src/components/ui/TimelineCard.tsx`
- [x] **Refine Education Section** <!-- id: 1503 -->
  - **Goal**: Add year markers and scale down blocks.
  - **Deliverable**: Updated `UnifiedTimeline.tsx` with year labels and adjusted sizing in `TimelineCard.tsx` or `UnifiedTimeline.tsx`.
  - **Done when**: Education section is clearly dated and slightly more compact.
  - **Likely Files**: `src/components/sections/UnifiedTimeline.tsx`, `src/components/ui/TimelineCard.tsx`
- [x] **Run tests** <!-- id: 1504 -->
  - **Goal**: Ensure no regressions.
  - **Deliverable**: `npm run lint` and `npm run build` success.
  - **Done when**: Build is successful and layout is verified.
- [x] **Update docs** <!-- id: 1505 -->
  - **Goal**: Maintain documentation.
  - **Deliverable**: All tasks in this CR marked as completed.
  - **Done when**: Checklist is full.
