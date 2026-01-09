# CR-014: Timeline Details & Duration Visualization

## Context
The current timeline displays exact start and end dates, which can feel cluttered. The user wants to simplify this to month/year precision (`YYYY-MM`):
- If start and end are different: "MM/YYYY - MM/YYYY"
- If no end date exists: "MM/YYYY - Present"
- If start and end are the same (month and year): "MM/YYYY" (single entry)
Additionally, the sorting logic needs an adjustment: when an experience and a project start in the same month/year, the **project should always be displayed higher (above) the experience**. Days should be removed from all experience data.
Finally, Employer/Client info needs to be visible, and duration should be visualized on selection.

## Goal
Simplify date display to year ranges, add Employer/Client fields to the data model and UI, and implement a visual "duration highlight" on the timeline track when an item is selected.

## Scope (in scope / out of scope)
**In scope:**
- **Data Model Update**: Adding `employer` and `client` fields to timeline/project types.
- **Date Formatting**: Updating components to display year ranges (Start - End or Start - Present).
- **Enriched Cards**: Displaying Employer and Client labels on the card.
- **Duration Visualization**: A visual indicator (e.g., a highlighted segment on the central timeline line) that shows the span of the selected project.
- **Selection State**: Adding state to `UnifiedTimeline` to track the active/selected item.

**Out of scope:**
- Gantt-chart style visualization (we are keeping the vertical timeline).
- Automatic calculation of tenure (e.g., "2 years 3 months") unless easily added as a label.

## Acceptance criteria (checkboxes)
- [x] Project cards show simplified month/year (e.g., "01/2021 - 03/2023", "01/2021 - Present", or just "01/2021").
- [x] Sorting logic ensures Projects appear above Experience items when starting in the same month/year.
- [x] Days are removed from all `startDate` and `endDate` fields in the content files.

## Risks / Attention points
- **Timeline Height**: Precise mapping of dates to vertical pixels might be complex; a simpler approach might be highlighting the vertical range between the top and bottom of the item's position on the timeline.
- **Data Consistency**: Existing markdown files need to be updated with new fields or handled gracefully if missing.

## Tasks
- [x] **Update Data Types & Markdown Content** <!-- id: 1400 -->
  - **Goal**: Add new metadata fields and migrate dates to `YYYY-MM`.
  - **Deliverable**: Path-to-types/index.ts and content files updated. Days removed from dates.
  - **Done when**: All experience and project dates follow `YYYY-MM` format; `employer` and `client` fields exist.
  - **Likely Files**: `src/types/index.ts`, `content/timeline/*.md`, `content/projects/*.md`
- [x] **Enhance Data Fetching & Sorting** <!-- id: 1401 -->
  - **Goal**: Implement project-first sorting for tied start months.
  - **Deliverable**: Updated `getUnifiedTimeline` in `markdown.ts`.
  - **Done when**: Experience items consistently follow projects when starting in the same month.
  - **Likely Files**: `src/lib/markdown.ts`
- [x] **Update TimelineCard Component** <!-- id: 1402 -->
  - **Goal**: Display month/year ranges and new metadata.
  - **Deliverable**: Refactored `TimelineCard.tsx` showing "MM/YYYY" logic and Employer/Client labels.
  - **Done when**: Visuals match the requested formatting rules.
  - **Likely Files**: `src/components/ui/TimelineCard.tsx`
- [ ] **Implement Selection State & Duration Highlight** <!-- id: 1403 -->
  - **Goal**: Add interactivity to the timeline.
  - **Deliverable**: `UnifiedTimeline.tsx` updated with `useState` for selection and a `motion.div` that highlights the timeline track.
  - **Done when**: Clicking a card visually marks its duration on the vertical line.
  - **Likely Files**: `src/components/sections/UnifiedTimeline.tsx`
- [ ] **Verify & Refine Interactions** <!-- id: 1404 -->
  - **Goal**: Ensure the behavior is intuitive and bug-free.
  - **Deliverable**: Mobile-responsive selection behavior and smooth animations.
  - **Done when**: Highlight works on both desktop and mobile layouts.
  - **Likely Files**: `src/components/sections/UnifiedTimeline.tsx`
- [x] **Run tests** <!-- id: 1405 -->
  - **Goal**: Ensure no regressions.
  - **Deliverable**: `npm run lint` and build success.
  - **Done when**: Build is green.
- [x] **Update docs** <!-- id: 1406 -->
  - **Goal**: Maintain documentation.
  - **Deliverable**: All tasks in this CR marked as completed.
  - **Done when**: Checklist is full.
