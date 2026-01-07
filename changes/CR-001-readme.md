# CR-001: Add Readme with Instructions

## Context
There is currently no documentation on how to start and verify (test) the project. This makes it difficult for new developers and AI assistants to quickly get started.

## Goal
Add a `README.md` to the root of the project with clear instructions for installation, development, production build, and linting.

## Scope (in scope / out of scope)
**In scope:**
- Create `README.md`.
- Instructions for installing dependencies (`npm install`).
- Instructions for starting the dev server (`npm run dev`).
- Instructions for production build (`npm run build`).
- Instructions for linting (`npm run lint`).

**Out of scope:**
- Adding new test frameworks (such as Jest or Cypress).
- Extensive documentation of the architecture (this already exists elsewhere).

## Acceptance criteria (checkboxes)
- [x] `README.md` is created in the root.
- [x] Contains instruction for installing dependencies (`npm install`).
- [x] Contains instruction for starting dev server (`npm run dev`).
- [x] Contains instruction for production build (`npm run build`).
- [x] Contains instruction for linting (`npm run lint`).

## Technical notes (optional)
- We are temporarily using `npm run lint` as the validation step, as no separate test command is defined in `package.json`.

## Risks / Attention points
- There is no `test` script in `package.json`. If tests are needed, this must be handled in a separate CR.

## Tasks
- [x] **Initialize README with Project Title** <!-- id: 100 -->
  - **Goal**: Create the base file structure.
  - **Deliverable**: `README.md` file in root.
  - **Done when**: File exists and contains the project title.
  - **Likely Files**: `README.md`
- [x] **Add Installation Instructions** <!-- id: 101 -->
  - **Goal**: Document how to install dependencies.
  - **Deliverable**: `npm install` instruction in README.
  - **Done when**: `npm install` command is present in README.
  - **Likely Files**: `README.md`
- [x] **Add Usage Scripts (Dev/Build/Lint)** <!-- id: 102 -->
  - **Goal**: Document daily workflow scripts.
  - **Deliverable**: Instructions for dev, build, and lint commands.
  - **Done when**: All three commands are documented in README.
  - **Likely Files**: `README.md`
- [x] **Run tests** <!-- id: 103 -->
  - **Goal**: Verify project stability.
  - **Deliverable**: Successful lint execution.
  - **Done when**: `npm run lint` passes.
- [x] **Update docs** <!-- id: 104 -->
  - **Goal**: Ensure documentation reflects changes.
  - **Deliverable**: Updated checklist.
  - **Done when**: All tasks are marked as done.
