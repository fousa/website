# CR-010: Design Refresh (Fonts, Colors, Favicon)

## Context
The visual identity needs a refresh to match a specific premium aesthetic. This includes typography updates, a strict color system supporting light and dark modes, logo behavior refinements, and a missing favicon.

## Goal
Update the site's design tokens (fonts, colors) to match the provided specification, ensuring seamless switching between light and dark modes based on system preference.

## Scope (in scope / out of scope)
**In scope:**
- **Fonts**: Replace `Inter` with `Figtree` for body text. Keep `Outfit` for titles.
- **Colors**: Implement the provided hex values for Light and Dark modes in `globals.css` using CSS variables and `@media (prefers-color-scheme: dark)`.
- **Logo**: Ensure the large "fousa" logo (CR-007) retains its original color on hover (disable any color shift).
- **Favicon**: Add a favicon (e.g., from public assets or the logo).

**Out of scope:**
- Adding a manual theme toggle button (strictly system preference for now).

## Acceptance criteria (checkboxes)
- [x] Body font is `Figtree`.
- [x] Light mode uses: bg `#ffffff`, sec-bg `#fafafa`, text `#1a1a1a`.
- [x] Dark mode uses: bg `#0a0a0a`, sec-bg `#1a1a1a`, text `#f5f5f5`.
- [x] Accent color is `#f97316` (Orange) in both modes.
- [x] Site automatically switches theme based on OS settings.
- [x] Logo does not change color on hover.
- [x] Favicon appears in the browser tab.

## Risks / Attention points
- Ensure text contrast ratios remain accessible in both modes, especially "secondary text" on "secondary backgrounds".

## Tasks
- [x] **Update Fonts** <!-- id: 1000 -->
  - **Goal**: Apply `Figtree`.
  - **Deliverable**: `layout.tsx` imports `Figtree`, `globals.css` or config applies it to `font-body`.
  - **Done when**: Text renders in Figtree.
  - **Completed Files**: `src/app/layout.tsx`, `src/app/globals.css`
- [x] **Implement Color Palette (System Mode)** <!-- id: 1001 -->
  - **Goal**: Strict light/dark support.
  - **Deliverable**: `globals.css` with `:root` (Light) and `@media (prefers-color-scheme: dark)` (Dark) blocks defining `--background`, `--foreground`, etc.
  - **Done when**: Changing OS theme updates site colors instantly.
  - **Completed Files**: `src/app/globals.css`
- [x] **Disable Logo Hover Color** <!-- id: 1002 -->
  - **Goal**: Keep branding consistent.
  - **Deliverable**: Removal of hover color classes (e.g., `brightness-0 invert group-hover:brightness-100`) from `ParallaxLogo`.
  - **Done when**: Hovering the logo keeps it the original color.
  - **Completed Files**: `src/components/ui/ParallaxLogo.tsx`
- [x] **Add Favicon** <!-- id: 1003 -->
  - **Goal**: Browser polish.
  - **Deliverable**: `icon.tsx` in `src/app` generating favicon dynamically.
  - **Done when**: Tab icon is visible.
  - **Completed Files**: `src/app/icon.tsx`
- [x] **Run tests** <!-- id: 1004 -->
  - **Goal**: Verify build.
  - **Deliverable**: `npm run lint` / build success.
  - **Done when**: No errors.
- [x] **Update docs** <!-- id: 1005 -->
  - **Goal**: Maintain records.
  - **Deliverable**: Updated checklist.
  - **Done when**: All tasks are marked as done.
