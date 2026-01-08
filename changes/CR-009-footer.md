# CR-009: Footer

## Context
The website currently lacks a footer section. This means there is no standard place for copyright information, identity, or legal details (VAT number).

## Goal
Add a footer to the bottom of the website containing specific copyright and legal information.

## Scope (in scope / out of scope)
**In scope:**
- Creating a `Footer` component.
- Displaying "Copyright 2026".
- Displaying the name (Jelle Vandebeeck).
- Displaying the VAT number: `BE07.8091.5524`.
- Integrating the footer into the main layout (`layout.tsx` or `page.tsx`).
- **Parallax Reveal**: The footer should have a "reveal" effect (e.g., sticky z-index or Framer Motion) so it appears behind the content as you scroll to the bottom.

**Out of scope:**
- multi-column footprint with sitemap links.

## Acceptance criteria (checkboxes)
- [x] Footer appears at the bottom of the page.
- [x] Text includes "© 2026".
- [x] Text includes "Jelle Vandebeeck".
- [x] Text includes "BE07.8091.5524".
- [x] Design is minimal and consistent with the site's theme.

## Risks / Attention points
- Ensure proper spacing between the main content and the footer so it doesn't look cramped.

## Tasks
- [x] **Create Footer Component** <!-- id: 900 -->
  - **Goal**: Encapsulate the footer UI.
  - **Deliverable**: `Footer.tsx` in `src/components/sections/` (or `layout`).
  - **Done when**: Component renders with hardcoded text.
  - **Completed Files**: `src/components/sections/Footer.tsx`
- [x] **Implement Footer Content** <!-- id: 901 -->
  - **Goal**: Add specific legal details.
  - **Deliverable**: Text: "© 2026 Jelle Vandebeeck - BE07.8091.5524".
  - **Done when**: All requested details are visible.
  - **Completed Files**: `src/components/sections/Footer.tsx`
- [x] **Style Footer** <!-- id: 902 -->
  - **Goal**: Make it look good.
  - **Deliverable**: CSS classes (Tailwind) for padding, centering, and subtle color (muted text).
  - **Done when**: Footer matches design system (e.g., `text-foreground-secondary`).
  - **Completed Files**: `src/components/sections/Footer.tsx`
- [x] **Implement Parallax Reveal** <!-- id: 906 -->
  - **Goal**: "Wow" factor at the bottom.
  - **Deliverable**: Footer stays fixed/sticky or uses `useScroll` to reveal itself.
  - **Done when**: Scrolling to the bottom reveals the footer with a parallax feel.
  - **Completed Files**: `src/components/sections/Footer.tsx`
- [x] **Add to Layout** <!-- id: 903 -->
  - **Goal**: Show on every page.
  - **Deliverable**: `page.tsx` imports and renders `<Footer />`.
  - **Done when**: Footer is visible below children.
  - **Completed Files**: `src/app/page.tsx`
- [x] **Run tests** <!-- id: 904 -->
  - **Goal**: Verify build.
  - **Deliverable**: `npm run lint` / build success.
  - **Done when**: No errors.
- [x] **Update docs** <!-- id: 905 -->
  - **Goal**: Maintain records.
  - **Deliverable**: Updated checklist.
  - **Done when**: All tasks are marked as done.
