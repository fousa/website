# CR-008: Unified Timeline

## Context
Currently, "Experience" and "Projects" are separate sections. This fragments the narrative of the user's professional journey. The user wants a single, chronological story. Additionally, the user wants a more interactive and "special" experience (parallax, expanding details).

## Goal
Merge separate project and experience lists into a single "Unified Timeline". This timeline should use a staggered layout (items alternating left/right), expand on hover/click to show details (accordion style), and feature a parallax scroll effect.

## Scope (in scope / out of scope)
**In scope:**
- Updating `Project` type to include `startDate` (and optional `endDate`) for sorting.
- Creating a `UnifiedTimeline` component that accepts both `HistoryItem` and `Project` types.
- Implementing a staggered layout (Zig-zag) manually or via grid.
- Implementing "Accordion" style expansion for details (replacing tooltips/modals).
- **Parallax Effect**: Items should animate (fade/slide/scale) as they scroll into view.
- Removing the standalone `Projects` section.

**Out of scope:**
- Detailed view pages for projects (everything happens inline/expanded).

## Acceptance criteria (checkboxes)
- [x] Projects and Experience items are interleaved chronologically.
- [x] Layout is staggered (left/right alternating).
- [x] Items show minimal info key (Title, Subtitle/Company) by default.
- [x] Hovering/Clicking an item expands it to show full details/description.
- [x] Scrolling triggers a smooth parallax entry animation for each item.
- [x] Mobile view collapses to a single column (responsive).

## Risks / Attention points
- Sorting: Ensure consistent date formats between Projects and Experience.
- Mobile experience: Parallax and Staggered layouts often break on small screens; ensure a graceful degradation to a simple vertical list.

## Tasks
- [x] **Update Project Data Model** <!-- id: 800 -->
  - **Goal**: Enable chronological sorting.
  - **Deliverable**: `Project` interface updated with `startDate: string` and `endDate?: string`.
  - **Done when**: `typecheck` passes and mock data includes dates.
  - **Completed Files**: `src/types/index.ts`, `content/projects/*.md`
- [x] **Create Unified Data Helper** <!-- id: 801 -->
  - **Goal**: Merge and sort the two data sources.
  - **Deliverable**: Function `getUnifiedTimeline()` returning a sorted list of union type.
  - **Done when**: We have a single array of mixed items sorted by date.
  - **Completed Files**: `src/lib/markdown.ts`
- [x] **Create TimelineCard Component** <!-- id: 802 -->
  - **Goal**: The individual item UI.
  - **Deliverable**: `TimelineCard.tsx` with expanding animation (Framer Motion).
  - **Done when**: Card expands on interaction to show `description`/`content`.
  - **Completed Files**: `src/components/ui/TimelineCard.tsx`
- [x] **Implement Unified Timeline Layout** <!-- id: 803 -->
  - **Goal**: The staggered parallax container.
  - **Deliverable**: `UnifiedTimeline.tsx` replacing old `Timeline` and `ProjectGrid`.
  - **Done when**: Items appear in zig-zag and animate on scroll (useScroll/useTransform).
  - **Completed Files**: `src/components/sections/UnifiedTimeline.tsx`
- [x] **Replace Page Sections** <!-- id: 804 -->
  - **Goal**: Update the main page.
  - **Deliverable**: `page.tsx` uses `UnifiedTimeline` and removes `Projects`.
  - **Done when**: The new component is visible and the old sections are gone.
  - **Completed Files**: `src/app/page.tsx`
- [x] **Run tests** <!-- id: 805 -->
  - **Goal**: Verify integration.
  - **Deliverable**: `npm run lint` / build success.
  - **Done when**: No errors.
- [x] **Update docs** <!-- id: 806 -->
  - **Goal**: Maintain records.
  - **Deliverable**: Updated checklist.
  - **Done when**: All tasks are marked as done.
