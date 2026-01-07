# CLAUDE.md

## Project Context
Renewal of personal portfolio website `fousa.be`.
**Goal**: Modern, premium, mobile-first portfolio with parallax timeline.
**Docs**:
- `project_docs/SPEC.md`: Problem, goals, and core features.
- `project_docs/USER_FLOWS.md`: Detailed user journeys (Desktop/Mobile).
- `project_docs/DATA_MODELS.md`: Structure of Markdown content (Timeline, Projects).
- `project_docs/ARCHITECTURE.md`: Tech stack and component overview.
- `project_docs/PROJECT_STRUCTURE.md`: Directory layout and file organization.
- `project_docs/TASKS.md`: Sequential implementation checklist.

## Commands
- **Dev Server**: `npm run dev` (Runs on localhost:3000)
- **Build**: `npm run build`
- **Start Prod**: `npm start`
- **Lint**: `npm run lint`

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Motion**: Framer Motion
- **Content**: Markdown (stored in `/content`)

## Code Style Guidelines
- **Components**: Functional components with strict TypeScript interfaces.
- **Styling**: Use utility classes (Tailwind) preferably. complex animations go in `framer-motion` props.
- **File Names**: `kebab-case` for utilities/assets, `PascalCase` for Components/Pages.
- **Imports**: Use `@/` alias for imports from `src`.
- **Error Handling**: Use Error Boundaries where appropriate.

## Workflow
1.  Read `project_docs/TASKS.md` to pick the next task.
2.  Implement the task.
3.  Verify functionality.
4.  Mark task as done in `TASKS.md`.
