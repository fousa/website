# PROJECT_STRUCTURE.md

```text
/
├── content/                # The "Database" (Markdown files)
│   ├── timeline/           # 01-start.md, 02-senior.md...
│   ├── projects/           # project-a.md, project-b.md...
│   └── profile/            # about.md
│
├── public/                 # Static assets
│   ├── images/             # Project screenshots, logos
│   └── resume.pdf          # Downloadable CV
│
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── page.tsx        # Main entry page (Single Page approach)
│   │   ├── layout.tsx      # Root layout
│   │   └── globals.css     # Tailwind imports
│   │
│   ├── components/         # React Components
│   │   ├── ui/             # Reusable basic components (Buttons, Cards)
│   │   ├── sections/       # Major page sections (Hero, Timeline, Contact)
│   │   └── animations/     # Wrappers for Framer Motion effects
│   │
│   ├── lib/                # Utility functions
│   │   ├── markdown.ts     # Logic to read and sort .md files
│   │   └── utils.ts        # Classname mergers, etc.
│   │
│   └── types/              # TypeScript definitions
│       └── index.d.ts      # Interfaces for Project, TimelineItem
│
├── .eslintrc.json
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── Procfile                # Heroku startup instruction
```
