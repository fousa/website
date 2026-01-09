# CR-013: Favicon

## Context
The website currently does not have a favicon, which makes it look incomplete in browser tabs and on bookmarks. A personal website needs a recognizable icon to enhance branding and professionalism.

## Goal
Add a complete set of favicon assets (standard favicon, Apple touch icon, and web manifest) to the website and ensure they are correctly linked in the application.

## Scope (in scope / out of scope)
**In scope:**
- **Icon Generation**: Creating/adding `favicon.ico`, `apple-touch-icon.png`, and other standard sizes.
- **Web Manifest**: Creating a `site.webmanifest` file.
- **Metadata Configuration**: Updating the root layout to include the necessary icon links.
- **Responsive Visibility**: Ensuring the icon works on mobile (bookmarking) and desktop.

**Out of scope:**
- Major logo design (use existing logo or a simplified version of it).
- Social share images (OpenGraph/Twitter images) - unless specifically requested later.

## Acceptance criteria (checkboxes)
- [x] Favicon is visible in the browser tab.
- [x] Apple touch icon is present for iOS home screen bookmarks.
- [x] `site.webmanifest` is correctly served and references the icons.
- [x] No console errors related to missing assets.
- [x] Icons are of high quality and not pixelated.

## Risks / Attention points
- **Caching**: Browsers often cache favicons heavily, making verification sometimes tricky without a hard refresh or incognito mode.
- **Pathing**: Ensure paths in `site.webmanifest` and layout metadata are correct (relative vs absolute).

## Tasks
- [x] **Generate/Prepare Favicon Assets** <!-- id: 1300 -->
  - **Goal**: Create high-quality icon files in the necessary formats.
  - **Deliverable**: `favicon.ico`, `icon.png` (32x32), `apple-icon.png` (180x180) in the `public/` or `app/` directory.
  - **Done when**: Files are present in the filesystem.
  - **Likely Files**: `public/` or `src/app/`
- [x] **Configure Web Manifest** <!-- id: 1301 -->
  - **Goal**: Create a web manifest for better mobile integration.
  - **Deliverable**: `public/site.webmanifest` referencing the icons.
  - **Done when**: The file exists and is valid JSON.
  - **Likely Files**: `public/site.webmanifest`
- [x] **Update Metadata / Layout** <!-- id: 1302 -->
  - **Goal**: Link the assets in the HTML head.
  - **Deliverable**: Updated `layout.tsx` using Next.js Metadata API.
  - **Done when**: View source shows the correctly linked icons.
  - **Likely Files**: `src/app/layout.tsx`
- [x] **Verify Visibility & Quality** <!-- id: 1303 -->
  - **Goal**: Ensure the icons look good across platforms.
  - **Deliverable**: Manual check in browser and mobile simulator.
  - **Done when**: Favicon shows up clearly on all tested platforms.
  - **Likely Files**: N/A
- [x] **Run tests** <!-- id: 1304 -->
  - **Goal**: Ensure no regressions.
  - **Deliverable**: `npm run build` or `npm run lint` success.
  - **Done when**: Build is green.
- [x] **Update docs** <!-- id: 1305 -->
  - **Goal**: Maintain documentation.
  - **Deliverable**: Updated checklist in this CR.
  - **Done when**: All tasks are marked as done.
