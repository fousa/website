# CR-020: Featured Projects Toggle

## Context
With over 60 projects in the timeline, the overview can become overwhelming for first-time visitors. We want to Highlight high-impact projects while still allowing users to explore the full history.

## Goal
Implement a "Featured" toggle in the timeline that filters projects to show only highlights by default.

## Scope (in scope / out of scope)
**In scope:**
- **Data Model**: Use `featured: boolean` in project frontmatter.
- **Toggle UI**: A prominent, stylized switch below the timeline title.
- **Filtering Logic**: Dynamically filter `workItems` in `UnifiedTimeline` to only include projects where `featured` is true when the toggle is active.
- **Default Behavior**: The toggle is ON by default on page load.

**Out of scope:**
- Filtering experience or education items.
- Implementing multiple filter categories.
- Changing individual project card designs.

## Acceptance criteria (checkboxes)
- [x] The timeline defaults to showing only featured projects.
- [x] A "Featured Only" toggle is visible below the main title "The Story So Far".
- [x] Toggling the switch instantly updates the timeline to show/hide non-featured projects.
- [x] Experience (work) and Education items are unaffected by the toggle.
- [x] Projects without the `featured` flag default to `false`.

## Risks / Attention points
- **Holes in Timeline**: Ensure the vertical line and year labels remain consistent even when many projects are filtered out.
- **Animation Smoothness**: The filtering should feel fluid, potentially using Framer Motion's `AnimatePresence`.

## Tasks
- [x] **Mark Featured Projects** <!-- id: 2000 -->
  - **Goal**: Highlight 10-15 key projects as featured.
  - **Deliverable**: Updated markdown files in `content/projects/`.
  - **Done when**: Key projects have `featured: true` in their frontmatter.
  - **Likely Files**: `content/projects/*.md`
- [x] **Implement Toggle Component** <!-- id: 2001 -->
  - **Goal**: Create a premium toggle UI element.
  - **Deliverable**: New state and toggle JSX in `UnifiedTimeline.tsx`.
  - **Done when**: The toggle is styled and interactive.
  - **Likely Files**: `src/components/sections/UnifiedTimeline.tsx`
- [x] **Implement Filtering Logic** <!-- id: 2002 -->
  - **Goal**: Wire the toggle state to the project list.
  - **Deliverable**: Filtered project list rendering logic.
  - **Done when**: Only featured projects are shown when toggled ON.
  - **Likely Files**: `src/components/sections/UnifiedTimeline.tsx`
- [x] **Tests runnen** <!-- id: 2003 -->
  - **Goal**: Ensure the site builds and lints.
  - **Deliverable**: Successful `npm run lint`.
  - **Done when**: No errors in build.
  - **Likely Files**: N/A
- [x] **Docs updaten** <!-- id: 2004 -->
  - **Goal**: Finalize documentation.
  - **Deliverable**: This CR document updated to completed status.
  - **Done when**: All tasks are checked off.
  - **Likely Files**: `changes/CR-020-featured-projects-toggle.md`
