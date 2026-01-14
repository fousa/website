# CR-021: Timeline Mobile Expansion

## Context
Currently, when a timeline card expands, it uses absolute positioning to overlay the content below it. While this works well on desktop, on mobile devices it can feel disconnected as the expanded content covers subsequent cards without pushing them down, potentially leading to confusing scroll behavior.

## Goal
Modify the expansion behavior of timeline cards so that on mobile devices, the content below the expanded card shifts down (normal document flow), while maintaining the current absolute overlay behavior on desktop.

## Scope (in scope / out of scope)
**In scope:**
- **Prop Update**: Add `isMobile` prop to `TimelineCard`.
- **Layout Logic**: Update `TimelineCard` to use `relative` positioning on mobile when expanded.
- **Component Coordination**: Update `UnifiedTimeline` to pass the correct mobile state to `TimelineCard`.
- **Visual Polish**: Ensure borders and shadows look correct in both flow and overlay modes.

**Out of scope:**
- Changing the desktop expansion behavior.
- Altering the content or styling inside the expanded cards (covered in previous CRs).
- Changes to the project filtering or sorting logic.

## Acceptance criteria (checkboxes)
- [x] Timeline cards on mobile shift the layout down when expanded.
- [x] Timeline cards on desktop still expand as an overlay (no layout shift).
- [x] No visual regressions in border-radius or shadows when expanding.
- [x] Clicking to collapse a card on mobile correctly shifts the content back up.

## Risks / Attention points
- **Layout Jitter**: Ensure the transition between collapsed and expanded states is smooth.
- **Z-Index**: On desktop, z-index management remains crucial to ensure the overlay stays on top. On mobile, z-index is less critical since it's in the flow.

## Tasks
- [x] **Research expansion logic** <!-- id: 2100 -->
  - **Goal**: Identify all points where `TimelineCard` is used and how it handles expansion.
  - **Deliverable**: Analysis of `UnifiedTimeline.tsx` and `TimelineCard.tsx`.
  - **Done when**: All necessary changes are mapped.
  - **Likely Files**: `src/components/sections/UnifiedTimeline.tsx`, `src/components/ui/TimelineCard.tsx`
- [x] **Pass isMobile prop** <!-- id: 2101 -->
  - **Goal**: Ensure `TimelineCard` knows if it's being rendered in a mobile context.
  - **Deliverable**: Updated `TimelineCardProps` and `UnifiedTimeline.tsx` calls.
  - **Done when**: All `TimelineCard` instances receive the `isMobile` boolean.
  - **Likely Files**: `src/components/sections/UnifiedTimeline.tsx`, `src/components/ui/TimelineCard.tsx`
- [x] **Implement Mobile Flow Expansion** <!-- id: 2102 -->
  - **Goal**: Change the CSS positioning from absolute to relative on mobile.
  - **Deliverable**: Conditionally applied Tailwind/CSS classes in `TimelineCard.tsx`.
  - **Done when**: Expanding a card on mobile pushes content below it.
  - **Likely Files**: `src/components/ui/TimelineCard.tsx`
- [x] **Tests runnen** <!-- id: 2103 -->
  - **Goal**: Ensure the site builds and lints.
  - **Deliverable**: Successful `npm run lint`.
  - **Done when**: No errors in build.
  - **Likely Files**: N/A
- [x] **Docs updaten** <!-- id: 2104 -->
  - **Goal**: Finalize documentation.
  - **Deliverable**: This CR document updated to completed status.
  - **Done when**: All tasks are checked off.
  - **Likely Files**: `changes/CR-021-timeline-mobile-expansion.md`
