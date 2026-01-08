# CR-002: Contact Icons

## Context
Currently, the contact options (LinkedIn, GitHub, Instagram, Email) in the Hero section are displayed as plain text links. This is functional but lacks the visual appeal and interactivity expected of a premium portfolio.

## Goal
Replace the text-based contact links in `Hero.tsx` with icons that have a visually appealing hover effect.

## Scope (in scope / out of scope)
**In scope:**
- Installing an icon library (e.g., `lucide-react` or `react-icons`) if not present.
- Refactoring `Hero.tsx` to use icons instead of text.
- Implementing hover effects (e.g., scale up, color change) for the icons.
- Ensuring accessibility (aria-labels for icons).

**Out of scope:**
- Changing the layout or position of the social links container.
- Adding new social links not currently in the profile data.

## Acceptance criteria (checkboxes)
- [x] Contact links are represented by appropriate icons.
- [x] Icons have effective hover states (animation/color).
- [x] Links remain functional (open in new tab/mailto).
- [x] Accessibility is maintained (screen readers can identify links).

## Risks / Attention points
- Ensure the icon style is consistent with the rest of the design (if any other icons exist).

## Tasks
- [x] **Check & Install Icon Library** <!-- id: 200 -->
  - **Goal**: Ensure we have a set of SVG icons to use.
  - **Deliverable**: `lucide-react` (or similar) installed in `package.json`.
  - **Done when**: Library is present in dependencies.
  - **Likely Files**: `package.json`
- [x] **Create Icon Components / Map** <!-- id: 201 -->
  - **Goal**: Prepare icons for LinkedIn, GitHub, Instagram, and Email.
  - **Deliverable**: A mapping or component set that returns the correct icon for each social key.
  - **Done when**: We can render an icon based on the social key.
  - **Likely Files**: `src/components/sections/Hero.tsx` (or a new utility component)
- [x] **Refactor Hero Social Links** <!-- id: 202 -->
  - **Goal**: Replace text links with Icon components.
  - **Deliverable**: `Hero.tsx` rendering icons in the social links section.
  - **Done when**: Text "LinkedIn", etc. is gone, replaced by SVGs.
  - **Likely Files**: `src/components/sections/Hero.tsx`
- [x] **Implement Hover Effects** <!-- id: 203 -->
  - **Goal**: Add visual feedback on interaction.
  - **Deliverable**: CSS classes or Framer Motion props for scale/color on hover.
  - **Done when**: Hovering an icon triggers the effect.
  - **Likely Files**: `src/components/sections/Hero.tsx`
- [x] **Run tests** <!-- id: 204 -->
  - **Goal**: Verify no regressions.
  - **Deliverable**: `npm run lint` passes (and `npm run build` to check for typings).
  - **Done when**: Commands exit successfully.
- [x] **Update docs** <!-- id: 205 -->
  - **Goal**: Keep documentation current.
  - **Deliverable**: Updated checklist.
  - **Done when**: All tasks are marked as done.
