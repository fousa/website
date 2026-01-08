# CR-012: Timeline Enrichment & Data

## Context
The current timeline is populated with placeholder/limited data. To make the portfolio authoritative, we need to import professional history from LinkedIn and add personal milestones like the user's birth. Additionally, the user wants a distinct visual separation for education items.

## Goal
Enrich the chronological timeline with full LinkedIn data, add a "Birth" event with a custom image at the chronological start (bottom), and separate education into its own section at the bottom of the timeline.

## Scope (in scope / out of scope)
**In scope:**
- **LinkedIn Data**: Updating `content/timeline` with factual experience from `https://www.linkedin.com/in/fousa/`.
- **Birth Event**: Adding a special "Birth" event type to the timeline (Date: 1984-06-28).
- **Image Support**: Supporting a "baby picture" for the birth event (asset in `public/images`).
- **Data Filtering**: Separating items of type `education` from the main work/project flow to be displayed at the bottom.
- **Mobile/Parallax**: Ensuring the new special items (Birth, Education block) animate correctly in the existing staggered layout.
- **Accessibility**: ARIA labels for the birth image and clear semantic structure for the new groupings.

**Out of scope:**
- Automatic scraping of LinkedIn (Data should be provided by the user or fetched once via Claude).

## Acceptance criteria (checkboxes)
- [x] Timeline contains all relevant roles from LinkedIn.
- [x] Timeline starts (at the bottom) with a "Birth" event containing a date and an image.
- [x] The first year label at the top of the timeline shows "Present" instead of the current year.
- [x] Education items are grouped together at the bottom of the timeline (after/below work experience).
- [x] Layout remains responsive on mobile.
- [x] Parallax effects are applied to new items.
- [x] Images have descriptive alt text.

## Risks / Attention points
- **Data Availability**: If LinkedIn info is missing, Claude Code must prompt the user.
- **Sorting Logic**: Current logic is "Newest First". Adding a birth event at the "bottom" coincides with this, but grouping education might require modifying `markdown.ts` or the `UnifiedTimeline` component.

## Tasks
- [x] **Collect LinkedIn & Birth Data** <!-- id: 1200 -->
  - **Goal**: Gather factual timeline content.
  - **Deliverable**: Data points collected (Birth date: 1984-06-28).
  - **Done when**: Birth date and LinkedIn roles are identified.
  - **Likely Files**: N/A (Data collection phase)
- [x] **Update Content Files** <!-- id: 1201 -->
  - **Goal**: Persist the data in markdown.
  - **Deliverable**: New `.md` files in `content/timeline/` and updated project files if needed.
  - **Done when**: Files exist with correct frontmatter.
  - **Likely Files**: `content/timeline/*.md`
- [x] **Place Birth Image** <!-- id: 1202 -->
  - **Goal**: Visual asset for the birth event.
  - **Deliverable**: `baby.jpg` (or similar) in `public/images/`.
  - **Done when**: Image is accessible at `/images/baby.jpg`.
  - **Likely Files**: `public/images/`
- [x] **Refactor Data Fetching (Group Education)** <!-- id: 1203 -->
  - **Goal**: Separate education from the main flow.
  - **Deliverable**: `getUnifiedTimeline` logic updated to return work/projects and education as separate arrays or tagged for grouping.
  - **Done when**: Education items can be rendered distinctly at the bottom.
  - **Likely Files**: `src/lib/markdown.ts`
- [x] **Update UnifiedTimeline Component** <!-- id: 1204 -->
  - **Goal**: Render the new structure and labels.
  - **Deliverable**: Updated `UnifiedTimeline.tsx` that renders the "Birth" event specially (with image), groups Education items at the end, and shows "Present" as the first year marker.
  - **Done when**: Visual design matches the request (Birth at start, Education separated, "Present" label at top).
  - **Likely Files**: `src/components/sections/UnifiedTimeline.tsx`
- [x] **Verify Mobile & Parallax** <!-- id: 1205 -->
  - **Goal**: Maintain UX quality.
  - **Deliverable**: Animations and responsive styles applied to new special cards.
  - **Done when**: Parallax works on 3D/scroll as per CR-008.
  - **Likely Files**: `src/components/sections/UnifiedTimeline.tsx`
- [x] **Run tests** <!-- id: 1206 -->
  - **Goal**: Ensure no regressions.
  - **Deliverable**: `npm run lint` success.
  - **Done when**: Build is green.
- [x] **Update docs** <!-- id: 1207 -->
  - **Goal**: Maintain documentation.
  - **Deliverable**: Updated checklist.
  - **Done when**: All tasks are marked as done.
