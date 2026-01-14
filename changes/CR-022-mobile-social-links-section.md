# CR-022: Mobile Social Links Section

## Context
Currently, social media buttons are part of the `About` section. On mobile devices, these buttons (rendered as `ExpandingButton`) can be difficult to interact with and might not provide the best user experience when clustered at the bottom of the bio.

## Goal
Extract the social media links into a dedicated 3rd section on mobile devices. In this section, links should be displayed as an expanded vertical list for better accessibility. Additionally, a scroll indicator should be added below this new section on mobile.

## Scope (in scope / out of scope)
**In scope:**
- **New Component**: Create `MobileSocialLinks.tsx` for the new section.
- **Mobile-Specific Visibility**: Ensure the new section only appears on mobile viewports.
- **About Section Update**: Hide the social links in the `About` section on mobile to avoid duplication.
- **Layout Update**: Insertion of the new section into the main page flow (`page.tsx`).
- **Scroll Indicator**: Add a bounce-animation scroll indicator below the social list on mobile.

**Out of scope:**
- Changing social link content or icons.
- Modifying the design of the social links on desktop.
- Adding new social platforms.

## Acceptance criteria (checkboxes)
- [x] On desktop, social links remain in the `About` section.
- [x] On mobile, social links are hidden in the `About` section.
- [x] A new section appears after `About` on mobile containing the social links.
- [x] Social links in the mobile section are shown as a vertical list and are "expanded" (label visible).
- [x] A scroll indicator is visible below the social links list on mobile.
- [x] Smooth scrolling/snapping works correctly with the new section added.

## Risks / Attention points
- **Snap Scrolling**: The website uses `snap-start snap-always`. Ensure the new section correctly participates in this layout without breaking the flow.
- **Viewport Detection**: Use Tailwind's responsive classes (`hidden`, `block`, `md:flex`, etc.) to minimize layout shifts and ensure hydration consistency.

## Tasks
- [x] **Research and Refactor Components** <!-- id: 2200 -->
  - **Goal**: Prepare social links for reuse in a new section.
  - **Deliverable**: Refactored logic to share social paths between components.
  - **Done when**: Social link data is easily accessible to both `About` and the new `MobileSocialLinks`.
  - **Likely Files**: `src/components/sections/About.tsx`, `src/types.ts`
- [x] **Create MobileSocialLinks Component** <!-- id: 2201 -->
  - **Goal**: Build a mobile-optimized section for socials.
  - **Deliverable**: `src/components/sections/MobileSocialLinks.tsx`.
  - **Done when**: The component renders an expanded vertical list of socials with a scroll indicator.
  - **Likely Files**: `src/components/sections/MobileSocialLinks.tsx`
- [x] **Integrate and Test Responsive Layout** <!-- id: 2202 -->
  - **Goal**: Wire up the new section in `page.tsx` and hide socials in `About`.
  - **Deliverable**: Updated `page.tsx` and `About.tsx`.
  - **Done when**: Socials switch sections correctly when resizing between mobile and desktop viewports.
  - **Likely Files**: `src/app/page.tsx`, `src/components/sections/About.tsx`
- [x] **Tests runnen** <!-- id: 2203 -->
  - **Goal**: Ensure the site builds and lints.
  - **Deliverable**: Successful `npm run lint` and `npm run build`.
  - **Done when**: No errors in build.
  - **Likely Files**: N/A
- [x] **Docs updaten** <!-- id: 2204 -->
  - **Goal**: Finalize documentation.
  - **Deliverable**: This CR document updated to completed status.
  - **Done when**: All tasks are checked off.
  - **Likely Files**: `changes/CR-022-mobile-social-links-section.md`
