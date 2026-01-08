# CR-003: Add CV Link

## Context
Potential clients and employers often want to view a formal curriculum vitae (CV) or resume. Currently, there is no direct link to download or view a CV on the portfolio.

## Goal
Add a link to the profile section (Hero) that allows users to download or view a PDF version of the CV.

## Scope (in scope / out of scope)
**In scope:**
- Updating the `Profile` type to include an optional `resume` or `cv` field (URL string).
- Adding the PDF file to the `public` directory.
- Updating the `Hero` component to display a "Download CV" (or similar) button/link if the field exists.

**Out of scope:**
- Creating the PDF content itself (assumed provided).
- Building a web-based HTML version of the CV.

## Acceptance criteria (checkboxes)
- [x] `Profile` type has a new field for the CV URL.
- [x] `Hero` section renders a link to the CV if the data is present.
- [x] The link points to a valid PDF file in the `public` folder.
- [x] Clicking the link opens/downloads the PDF.

## Risks / Attention points
- Ensure the PDF file name is simple and web-friendly (e.g., `resume.pdf`).
- Verify if `next.config.ts` needs any changes to serve static files (usually `public/` works out of the box).

## Tasks
- [x] **Update Profile Data Model** <!-- id: 300 -->
  - **Goal**: Allow content to specify a CV file.
  - **Deliverable**: `Profile` interface in `src/types/index.ts` updated with `resume?: string`.
  - **Done when**: TypeScript compiler accepts the new field.
  - **Likely Files**: `src/types/index.ts`
- [x] **Place PDF in Public Directory** <!-- id: 301 -->
  - **Goal**: Make the file accessible via URL.
  - **Deliverable**: A placeholder or actual PDF file in `public/`.
  - **Done when**: `file-name.pdf` exists in `public/`.
  - **Likely Files**: `public/`
- [x] **Update Content/Loader** <!-- id: 302 -->
  - **Goal**: Populate the new field from the markdown/data source.
  - **Deliverable**: Logic to read the CV path.
  - **Done when**: The profile object passed to components includes the CV path.
  - **Likely Files**: `src/lib/content.ts` (or wherever content loading happens)
- [x] **Add CV Link to Hero UI** <!-- id: 303 -->
  - **Goal**: Display the button to the user.
  - **Deliverable**: A new button or link in `Hero.tsx`.
  - **Done when**: "Download CV" is visible and clickable.
  - **Likely Files**: `src/components/sections/Hero.tsx`
- [x] **Run tests** <!-- id: 304 -->
  - **Goal**: Verify integration.
  - **Deliverable**: `npm run lint` passes, build succeeds.
  - **Done when**: No type errors or lint warnings.
- [x] **Update docs** <!-- id: 305 -->
  - **Goal**: Document the new feature.
  - **Deliverable**: Updated checklist.
  - **Done when**: All tasks are marked as done.
