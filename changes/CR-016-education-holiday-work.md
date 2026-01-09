# CR-016: Education & Holiday Work Layout

## Context
The current education section is a simple vertical list. To improve visual consistency and provide more detail, the user wants to apply a split layout similar to the main experience timeline. Specifically, studies should be on the right, and internships and holiday work should be on the left. Additionally, holiday work from the user's high school years needs to be added to the portfolio.

## Goal
Redesign the education section into a staggered timeline. Place studies (education) on the right and internships/holiday work on the left. Add holiday work content and ensure date formatting/year markers matches the experience section.

## Scope (in scope / out of scope)
**In scope:**
- **Data Model Update**: Adding `holiday-work` as a valid type in `src/types/index.ts`.
- **New Content**: Creating markdown files for holiday work in `content/timeline/`.
- **Layout Redesign**: Updating `UnifiedTimeline.tsx` to handle the split layout for the education section on desktop.
- **Sorting & Positioning**: Ensuring logic correctly places `education` items right and `internship`/`holiday-work` items left.
- **Date Consistency**: Applying the same year/month markers and formatting logic to education items as used in work/projects.

**Out of scope:**
- Major changes to the main work/project timeline layout.
- Adding social share images for these new items.

## Acceptance criteria (checkboxes)
- [x] Education section has a central vertical line (desktop).
- [x] Items of type `education` are rendered on the right.
- [x] Items of type `internship` and `holiday-work` are rendered on the left.
- [x] Chronological year markers are visible within the education section.
- [x] Date formatting (e.g., "MM/YYYY") matches the experience section.
- [x] High school holiday work items are correctly displayed.
- [x] Mobile view remains a simple, readable vertical list.

## Risks / Attention points
- **Vertical Spacing**: Ensure that the education section doesn't overlap or feel too crowded with the addition of more items.
- **Sorting logic**: The `getUnifiedTimeline` function needs to correctly categorize and sort these new items while maintaining the user's previously requested sorting rules (e.g., projects vs experience in the same month).

## Tasks
- [x] **Update Data Types & Add Holiday Work Content** <!-- id: 1600 -->
  - **Goal**: Enable the new "holiday-work" category and add data.
  - **Deliverable**: Updated `src/types/index.ts` and new `.md` files in `content/timeline/`.
  - **Done when**: `holiday-work` is a valid type and content files exist.
  - **Likely Files**: `src/types/index.ts`, `content/timeline/*.md`
- [x] **Refactor Data Fetching for Holiday Work** <!-- id: 1601 -->
  - **Goal**: Ensure holiday work is correctly grouped with education/internships.
  - **Deliverable**: Updated `getUnifiedTimeline` in `markdown.ts`.
  - **Done when**: Holiday work items are included in the education array (or a combined auxiliary array).
  - **Likely Files**: `src/lib/markdown.ts`
- [x] **Redesign Education Layout in UnifiedTimeline** <!-- id: 1602 -->
  - **Goal**: Implement the split layout for the bottom section.
  - **Deliverable**: Updated `UnifiedTimeline.tsx` with a dual-column layout for education items on desktop.
  - **Done when**: Studies are on the right, internships/holiday work on the left, with consistent year markers correctly placed.
  - **Likely Files**: `src/components/sections/UnifiedTimeline.tsx`
- [x] **Verify Date Formatting & Styling** <!-- id: 1603 -->
  - **Goal**: Ensure consistency with CR-014/CR-015.
  - **Deliverable**: Visual check of year markers and card styling in the education section.
  - **Done when**: Formatting matches the experience section perfectly.
  - **Likely Files**: `src/components/sections/UnifiedTimeline.tsx`, `src/components/ui/TimelineCard.tsx`
- [x] **Run tests** <!-- id: 1604 -->
  - **Goal**: Ensure no regressions.
  - **Deliverable**: `npm run lint` and build success.
  - **Done when**: Build is green.
- [x] **Update docs** <!-- id: 1605 -->
  - **Goal**: Maintain documentation.
  - **Deliverable**: All tasks in this CR marked as completed.
  - **Done when**: Checklist is full.
