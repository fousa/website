# CR-019: Timeline Spacing & Performance Refinements

## Context
The current timeline card, when expanded, has inconsistent spacing in the details section. The meta information (location/tags) feels disconnected due to excessive vertical spacing, while the description and content sections feel cramped compared to the card's horizontal padding. Additionally, the scroll entrance animation can feel sluggish when many cards are present.

## Goal
Refine the layout spacing of the expanded timeline cards to create a more balanced and professional visual rhythm, and optimize the entrance animation speed for a more responsive scrolling experience.

## Scope (in scope / out of scope)
**In scope:**
- **Meta Section Spacing**: Adjust vertical padding and margins for the location/tech info section.
- **Content Spacing**: Increase vertical margins for description and content areas to match the 1.5rem (`p-6`) side padding.
- **Animation Optimization**: Reduce the delay in the `whileInView` animation for timeline cards.

**Out of scope:**
- Changing the card's collapsed state design.
- Adding new fields to the data model.
- Changing the overall timeline layout (e.g., from vertical to horizontal).

## Acceptance criteria (checkboxes)
- [x] Vertical spacing above and below the meta info section (location/tags) is aligned with the horizontal padding (1.5rem / `p-6`).
- [x] Vertical spacing between the description/content and other sections is aligned with the horizontal padding.
- [x] Timeline cards animate into view faster during scroll, especially when many items are present.
- [x] Transition between collapsed and expanded states remains smooth.

## Risks / Attention points
- **Framer Motion Delays**: Ensure that reducing delays doesn't make the animation look jittery or too "abrupt".
- **Responsive Design**: Verify that new spacing works well on mobile.

## Tasks
- [x] **Adjust Spacing for Meta Section** <!-- id: 1900 -->
  - **Goal**: Harmonize the vertical spacing of the meta section in expanded cards.
  - **Deliverable**: Updated `TimelineCard.tsx` with refined `py` and `mb` classes for the meta div.
  - **Done when**: The spacing feels consistent with the 1.5rem side padding.
  - **Likely Files**: `src/components/ui/TimelineCard.tsx`
- [x] **Adjust Spacing for Description & Content** <!-- id: 1901 -->
  - **Goal**: Increase the breathing room for the main text in expanded cards.
  - **Deliverable**: Updated `TimelineCard.tsx` with increased margins (e.g., `mb-6`) for description and prose.
  - **Done when**: Vertical spacing for text elements matches the horizontal rhythm.
  - **Likely Files**: `src/components/ui/TimelineCard.tsx`
- [x] **Optimize Scroll Animation Speed** <!-- id: 1902 -->
  - **Goal**: Improve perceived performance when scrolling through the timeline.
  - **Deliverable**: Reduced `delay` multiplier for the `whileInView` transition.
  - **Done when**: The timeline feels "faster" to reveal itself during scroll.
  - **Likely Files**: `src/components/ui/TimelineCard.tsx`
- [x] **Tests runnen** <!-- id: 1903 -->
  - **Goal**: Ensure the site builds and lints correctly.
  - **Deliverable**: Successful `npm run build` or `npm run lint`.
  - **Done when**: No errors in build output.
  - **Likely Files**: N/A
- [x] **Docs updaten** <!-- id: 1904 -->
  - **Goal**: Finalize documentation and this CR.
  - **Deliverable**: CR-019 marked as completed.
  - **Done when**: All tasks are checked off.
  - **Likely Files**: `changes/CR-019-timeline-spacing-and-perf.md`

