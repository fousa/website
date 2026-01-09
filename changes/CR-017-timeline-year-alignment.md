# CR-017: Timeline Year Alignment

## Context
The chronological year labels on the timeline are currently misaligned. Except for the "Present" label, most year markers are positioned too high, often appearing behind or overlapping the timeline items that start in that year. This makes the timeline harder to read and looks unpolished.

## Goal
Fix the vertical positioning and alignment of the year labels on the timeline to ensure they are clearly visible and correctly placed relative to the timeline items.

## Scope (in scope / out of scope)
**In scope:**
- **Marker Positioning**: Adjusting the `top` and `z-index` values for year markers in `UnifiedTimeline.tsx`.
- **Layout Consistency**: Ensuring the fix works for both Work/Projects (staggered) and Education (split) sections.
- **Mobile Alignment**: Verifying that mobile year labels are also correctly positioned.
- **Animation Sync**: Ensuring markers still animate in correctly while in view.

**Out of scope:**
- Changing the design of the pill/label itself.
- Modifying the sort logic of the data.

## Acceptance criteria (checkboxes)
- [x] Year labels (e.g., "2023", "2024") are positioned clearly below the last item of that year.
- [x] Items appear above their year label (e.g., KBC Group card above "2005" label).
- [x] No year labels are "behind" or partially covered by timeline cards.
- [x] Consistent white space exists between the items and the year label below.
- [x] Year markers are perfectly centered on the timeline line (desktop).

## Risks / Attention points
- **CSS Overlap**: Absolute positioning inside relative containers can be tricky with staggered layouts; check if the parent container needs more padding-top.
- **Birth Item**: Ensure the "1984" label at the bottom also aligns correctly.

## Tasks
- [x] **Research & Inspect Current Positioning** <!-- id: 1700 -->
  - **Goal**: Identify the exact CSS/structural cause of the displacement.
  - **Deliverable**: Analysis of why `-2.5rem` (or current value) is insufficient or incorrect.
  - **Done when**: Root cause of the "too high" position is understood.
  - **Likely Files**: `src/components/sections/UnifiedTimeline.tsx`
- [x] **Adjust Desktop Year Marker Alignment** <!-- id: 1701 -->
  - **Goal**: Correct the vertical offset on desktop.
  - **Deliverable**: Refactored `renderTimelineItem` and `birthSection` logic in `UnifiedTimeline.tsx`.
  - **Done when**: Markers sit visibly below the cards and don't overlap.
  - **Likely Files**: `src/components/sections/UnifiedTimeline.tsx`
- [x] **Fix Mobile Year Marker Alignment** <!-- id: 1702 -->
  - **Goal**: Ensure the mobile list view also has correct spacing.
  - **Deliverable**: Updated mobile rendering logic in `UnifiedTimeline.tsx`.
  - **Done when**: Mobile year pills have consistent top/bottom margins.
  - **Likely Files**: `src/components/sections/UnifiedTimeline.tsx`
- [x] **Verify Z-Index & Layering** <!-- id: 1703 -->
  - **Goal**: Ensure labels are never hidden.
  - **Deliverable**: CSS adjustment ensuring `zIndex` for markers is higher than cards but lower than headers/modals.
  - **Done when**: Labels are always on top of the timeline line and cards.
  - **Likely Files**: `src/components/sections/UnifiedTimeline.tsx`
- [x] **Run tests** <!-- id: 1704 -->
  - **Goal**: Ensure no regressions.
  - **Deliverable**: `npm run lint` success.
  - **Done when**: Build is green.
- [x] **Update docs** <!-- id: 1705 -->
  - **Goal**: Maintain documentation.
  - **Deliverable**: All tasks in this CR marked as completed.
  - **Done when**: Checklist is full.
