# CR-018: Timeline Visual Enhancements & Icons

## Context
The current timeline cards have a solid background and lack visual distinction between different types of entries beyond text labels. To make the design more modern and intuitive, we want to introduce glassmorphism effects and specific icons for projects and education.

## Goal
Enhance the visual appeal of the timeline by implementing glassmorphism for expanded cards and adding context-specific icons for non-personal projects and education items.

## Scope (in scope / out of scope)
**In scope:**
- **Glassmorphism**: Apply `backdrop-filter: blur(8px)` and semi-transparent background to expanded timeline cards.
- **Project Icons**: Add a briefcase icon to cards for projects that are not "personal".
- **Education Icons**: Add a graduation cap icon to cards for education-related experience items.
- **Modern Polish**: Ensure the transition between collapsed and expanded states remains smooth.

**Out of scope:**
- Redesigning the entire timeline structure.
- Changing the data model or adding new content fields.

## Acceptance criteria (checkboxes)
- [x] Expanded timeline cards have a subtle glassmorphism effect (blur and semi-transparency).
- [x] Non-personal projects display a briefcase (suitcase) icon.
- [x] Education items display a graduation cap icon.
- [x] Icons are positioned subtily and consistently within the card.
- [x] The design remains responsive and accessible.

## Risks / Attention points
- **Browser Compatibility**: `backdrop-filter` is widely supported but ensure it degrades gracefully on older browsers (though not a primary concern for this modern site).
- **Legibility**: Ensure text remains legible over the glassmorphism background.

## Tasks
- [x] **Research & Setup Icons** <!-- id: 1800 -->
  - **Goal**: Import the necessary icons from `lucide-react`.
  - **Deliverable**: `Briefcase` and `GraduationCap` icons available in `TimelineCard.tsx`.
  - **Done when**: Icons are imported successfully.
  - **Likely Files**: `src/components/ui/TimelineCard.tsx`
- [x] **Implement Icon Logic for Projects** <!-- id: 1801 -->
  - **Goal**: Add the briefcase icon to non-personal projects.
  - **Deliverable**: Conditional rendering logic that shows the icon for `isProject && type !== 'personal'`.
  - **Done when**: Professional projects show the briefcase icon.
  - **Likely Files**: `src/components/ui/TimelineCard.tsx`
- [x] **Implement Icon Logic for Education** <!-- id: 1802 -->
  - **Goal**: Add the graduation cap icon to education items.
  - **Deliverable**: Conditional rendering logic that shows the icon for `isExperience && type === 'education'`.
  - **Done when**: Education items show the graduation cap icon.
  - **Likely Files**: `src/components/ui/TimelineCard.tsx`
- [x] **Apply Glassmorphism to Expanded Cards** <!-- id: 1803 -->
  - **Goal**: Update the styling of the expanded card content.
  - **Deliverable**: CSS changes adding `backdrop-filter: blur(8px)` and adjusted background opacity.
  - **Done when**: Expanded cards have the glassmorphism look.
  - **Likely Files**: `src/components/ui/TimelineCard.tsx`
- [x] **Modernize Transitions & Polish** <!-- id: 1804 -->
  - **Goal**: Ensure the hover and expansion effects feel premium.
  - **Deliverable**: Refined CSS/Framer Motion transitions.
  - **Done when**: The interaction feels smooth and "modern".
  - **Likely Files**: `src/components/ui/TimelineCard.tsx`
- [x] **Tests runnen** <!-- id: 1805 -->
  - **Goal**: Ensure no lints or build errors.
  - **Deliverable**: Successful `npm run lint`.
  - **Done when**: Build is green.
  - **Likely Files**: N/A
- [x] **Docs updaten** <!-- id: 1806 -->
  - **Goal**: Keep documentation in sync.
  - **Deliverable**: CR marked as completed (once implemented).
  - **Done when**: Checklist is finalized.
  - **Likely Files**: `changes/CR-018-timeline-glassmorphism-and-icons.md`
