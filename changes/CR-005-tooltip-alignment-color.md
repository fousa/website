# CR-005: Tooltip Alignment and Focus Color

## Context
The visual consistency needs improvement. Specifically, the tooltips (introduced in CR-004) are not perfectly aligned with the icons, and the current "focus" (accent) color needs to be updated to a specific shade of orange to match the desired branding.

## Goal
Fix the alignment of the tooltips so they sit centered above the icons, and update the global focus/accent color to `#E95E2F`.

## Scope (in scope / out of scope)
**In scope:**
- Updating CSS variables in `src/app/globals.css` (specifically `--accent` and `--accent-hover`).
- Adjusting the positioning logic/classes in the `Tooltip` component to ensure perfect centering.
- Verifying the color change propagates to all hover/focus states (links, buttons).

**Out of scope:**
- Changing other colors in the palette (backgrounds, foregrounds).

## Acceptance criteria (checkboxes)
- [x] Global accent color is `#E95E2F`.
- [x] Accent hover color is updated to a suitable complementary shade (e.g., slightly lighter or darker version of the new orange).
- [x] Tooltips are horizontally centered relative to their parent icon.
- [x] Tooltips have appropriate vertical spacing (not touching the icon).

## Risks / Attention points
- Changing a global variable affects the whole site. Check headings, links, and other elements that use `text-accent`.

## Tasks
- [x] **Update Global Color Variables** <!-- id: 500 -->
  - **Goal**: Apply smooth orange branding.
  - **Deliverable**: `src/app/globals.css` updated with `--accent: #E95E2F`.
  - **Done when**: The site uses the new orange color for accents.
  - **Likely Files**: `src/app/globals.css`
- [x] **Fix Tooltip Alignment** <!-- id: 501 -->
  - **Goal**: Center the tooltip.
  - **Deliverable**: Updated classes in `Tooltip.tsx` (e.g., `left-1/2 -translate-x-1/2`).
  - **Done when**: Tooltip arrow/body is perfectly centered on the trigger.
  - **Likely Files**: `src/components/ui/Tooltip.tsx`
- [x] **Verify Hover States** <!-- id: 502 -->
  - **Goal**: Ensure acceptable contrast/visibility.
  - **Deliverable**: Visual check (or specific CSS tweak) for the hover state.
  - **Done when**: Hovering doesn't look broken or low-contrast.
  - **Likely Files**: `src/app/globals.css`
- [x] **Run tests** <!-- id: 503 -->
  - **Goal**: Verify build.
  - **Deliverable**: `npm run lint` / build.
  - **Done when**: Success.
- [x] **Update docs** <!-- id: 504 -->
  - **Goal**: Record changes.
  - **Deliverable**: Updated checklist.
  - **Done when**: All tasks are marked as done.
