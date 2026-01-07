# ARCHITECTURE.md

## High-Level Overview
A modern **Static Site (SSG)** generated with Next.js. Content lives in the git repository as Markdown files. The HTML is built at deploy time. No runtime database connection is required, ensuring maximum speed and security.

## Tech Stack
*   **Runtime**: Node.js (v20+ recommended)
*   **Framework**: Next.js 14+ (App Router)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS
*   **Animations**: Framer Motion (crucial for the 'premium' experience)
*   **Content Processing**: `gray-matter` (frontmatter parsing) + `remark`/`rehype` (markdown rendering).

## Component Structure (Frontend)
*   **`Layout`**: Contains general structure, meta tags, fonts (Google Fonts: Inter/Outfit), and analytics.
*   **`Hero`**: Full-screen introduction.
*   **`ParallaxContainer`**: Wrapper component passing scroll position to children.
*   **`TimelineSection`**: Renders the list of TimelineItems.
    *   **`TimelineNode`**: Individual item, animates in based on viewport position.
*   **`ProjectGrid`**: Grid of ProjectCards.
    *   **`ProjectCard`**: Shows thumbnail, title, and tags. Hover effects.

## Infrastructure & Deployment
*   **Host**: Heroku.
*   **Buildpack**: `heroku/nodejs`.
*   **Procfile**: `web: npm start` (Next.js production server).
*   **Caching**: Next.js built-in caching for optimized images and static pages.

## Scalability & Performance
*   **Images**: Use `next/image` for automatic optimization and lazy loading.
*   **Bundle Size**: Watch for heavy libraries. Framer Motion is powerful but large; use `LazyMotion` features if needed.
*   **Mobile**: Media queries via Tailwind (`md:`, `lg:`) to disable complex animations on mobile.

