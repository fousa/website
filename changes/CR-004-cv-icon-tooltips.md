# CR-004: CV Icon and Tooltips

## Context
The CV link is currently planned as a text link/button (from CR-003). For visual consistency with the other social links (CR-002), it should also be an icon. Additionally, icons can be ambiguous, so tooltips are needed to improve UX.

## Goal
Render the CV link as an icon alongside existing social icons, and implement polished tooltips for all icons to indicate their function (e.g., "LinkedIn", "Download CV").

## Scope (in scope / out of scope)
**In scope:**
- Creating a reusable `Tooltip` component (using Tailwind/Framer Motion).
- Updating `Hero.tsx` to render the CV link as an icon (e.g., `FileText` from Lucide).
- Wrapping all social/contact icons in the `Tooltip` component.
- Ensuring the CV icon matches the style of other social icons.

**Out of scope:**
- Redesigned the entire contact section layout.

## Acceptance criteria (checkboxes)
- [x] CV link appears as an icon in the social links row.
- [x] Hovering over any icon (LinkedIn, GitHub, Email, CV) shows a tooltip.
- [x] Tooltip contains descriptive text (e.g., "Detailed Resume").
- [x] Tooltip has a smooth animation (fade/scale).
- [x] UI is responsive and accessible.

## Risks / Attention points
- Tooltips on mobile interactions can be tricky; ensure they don't block clicks or get stuck open.

## Tasks
- [x] **Create Tooltip Component** <!-- id: 400 -->
  - **Goal**: Reusable UI element for hover labels.
  - **Deliverable**: `Tooltip.tsx` in `src/components/ui/` (or `common`).
  - **Done when**: Component accepts `content` and `children` and renders correctly.
  - **Likely Files**: `src/components/ui/Tooltip.tsx`
- [x] **Import CV Icon** <!-- id: 401 -->
  - **Goal**: Get a suitable icon for the resume.
  - **Deliverable**: Import statement in `Hero.tsx` (e.g. `FileText` or `FileDown`).
  - **Done when**: Icon is available for use.
  - **Likely Files**: `src/components/sections/Hero.tsx`
- [x] **Integrate CV Icon in Hero** <!-- id: 402 -->
  - **Goal**: Display CV alongside social links.
  - **Deliverable**: `Hero.tsx` renders the CV icon.
  - **Done when**: Icon appears in the row.
  - **Likely Files**: `src/components/sections/Hero.tsx`
- [x] **Implement Tooltips** <!-- id: 403 -->
  - **Goal**: Add labels to all icons.
  - **Deliverable**: All icons wrapped in `<Tooltip content="...">`.
  - **Done when**: Hovering shows "GitHub", "Email", "Resume", etc.
  - **Likely Files**: `src/components/sections/Hero.tsx`
- [x] **Run tests** <!-- id: 404 -->
  - **Goal**: Verify build stability.
  - **Deliverable**: `npm run lint` and `npm run build` success.
  - **Done when**: No errors.
- [x] **Update docs** <!-- id: 405 -->
  - **Goal**: Maintain records.
  - **Deliverable**: Updated checklist.
  - **Done when**: All tasks are marked as done.
