# CR-006: Accordion Style Hover Labels

## Context
Previous designs focused on tooltips (CR-004/005), but a cleaner, more dynamic interaction is desired. Instead of a floating tooltip, the text label should expand out from the icon itself (accordion style) when hovered.

## Goal
Implement a social link component where the text label (e.g., "LinkedIn") is hidden by default and smoothly reveals itself (slides out) next to the icon on hover.

## Scope (in scope / out of scope)
**In scope:**
- Replace the previous "tooltip" concept with an expanding "accordion" button.
- Use Framer Motion for smooth width/opacity transitions.
- Update `Hero` to use this new interaction pattern for all 5 links (LinkedIn, GitHub, Instagram, Email, CV).
- Ensure the row of icons handles the width change gracefully (flexbox).

**Out of scope:**
- Tooltip implementation (this CR supersedes CR-004/CR-005 regarding tooltips).

## Acceptance criteria (checkboxes)
- [x] Icons are visible by default.
- [x] Hovering an icon expands the container to reveal the text label.
- [x] Animation is smooth (spring or ease-out).
- [x] Text is legible and vertically centered.
- [x] CV Link (from CR-003) follows this same pattern.
- [x] Focus state (tab navigation) also triggers the expansion (for a11y).

## Risks / Attention points
- Rapid hovering over multiple icons might cause "jittery" layout shifts if the container width isn't handled well. Consider if the parent container needs a fixed height or if flex-wrap is allowed.

## Tasks
- [x] **Create ExpandingButton Component** <!-- id: 600 -->
  - **Goal**: Reusable component for the icon+text interaction.
  - **Deliverable**: `ExpandingButton.tsx` (or similar) in `src/components/ui/`.
  - **Done when**: Component accepts `icon`, `label`, and `href`, and animates on hover.
  - **Likely Files**: `src/components/ui/ExpandingButton.tsx`
- [x] **Refactor Hero Social Links** <!-- id: 601 -->
  - **Goal**: Apply the new component.
  - **Deliverable**: `Hero.tsx` using `ExpandingButton` for all links.
  - **Done when**: Old `<a>` tags or Tooltips are replaced.
  - **Likely Files**: `src/components/sections/Hero.tsx`
- [x] **Fine-tune Animation** <!-- id: 602 -->
  - **Goal**: Ensure "premium" feel.
  - **Deliverable**: Adjusted transition props (duration, ease).
  - **Done when**: Animation feels snappy but smooth (no layout thrashing).
  - **Likely Files**: `src/components/ui/ExpandingButton.tsx`
- [x] **Run tests** <!-- id: 603 -->
  - **Goal**: Verify build.
  - **Deliverable**: `npm run lint` / build success.
  - **Done when**: No errors.
- [x] **Update docs** <!-- id: 604 -->
  - **Goal**: Record pattern change.
  - **Deliverable**: Updated checklist.
  - **Done when**: All tasks are marked as done.
