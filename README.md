# fousa.be - Portfolio Website

A modern, animated portfolio website showcasing professional experience and projects.

## Tech Stack

- **Next.js 15.5.9** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Premium animations with accessibility support
- **gray-matter** - Markdown frontmatter parsing

## Getting Started

### Installation

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Production Build

Build the project for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Code Quality

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
/content          # Markdown content files
  /timeline       # Career timeline items
  /projects       # Project portfolio items
/src
  /app            # Next.js app router pages
  /components     # React components
  /lib            # Utility functions
  /types          # TypeScript type definitions
```

## Features

- Mobile-first responsive design
- Parallax timeline animations
- Project portfolio grid
- Reduced motion support for accessibility
- Server-side generation (SSG)
- Dark theme optimized

## Deployment

The project includes a `Procfile` for Heroku deployment:

```bash
heroku create fousa
git push heroku main
```
