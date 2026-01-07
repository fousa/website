# DATA_MODELS.md

We use Markdown files with Frontmatter (YAML) as the database.

## 1. Timeline Item (`/content/timeline/*.md`)
Represents a period of employment or significant career moment.

Field | Type | Required | Description
--- | --- | --- | ---
`title` | string | Yes | Job title (e.g., "Senior Developer")
`company` | string | Yes | Name of employer or client
`startDate` | date | Yes | Start date (YYYY-MM-DD)
`endDate` | date/string | No | End date or "Present"
`type` | enum | Yes | `full-time`, `freelance`, `internship`, `education`
`logo` | string | No | Path to logo image
`location` | string | No | Location (e.g., "Antwerp")

**Content Body**: Short description of responsibilities and achievements.

## 2. Project (`/content/projects/*.md`)
Represents a concrete deliverable/product.

Field | Type | Required | Description
--- | --- | --- | ---
`title` | string | Yes | Project name
`slug` | string | Yes | URL-friendly name (often filename)
`type` | enum | Yes | `client-work`, `personal`, `open-source`
`employer` | string | No | Employer you worked for (for client work)
`client` | string | No | The end client
`description` | string | Yes | Short tagline for the card
`techStack` | array | Yes | List of technologies (e.g. `['React', 'Ruby']`)
`thumbnail` | string | Yes | Path to image
`featured` | boolean | No | Whether to highlight broadly
`liveUrl` | string | No | Link to live project
`repoUrl` | string | No | Link to GitHub

**Content Body**: Detailed case description.

## 3. Profile (`/content/profile/about.md`)
General info about the person.

Field | Type | Description
--- | --- | ---
`name` | string | Full name
`role` | string | Current primary role
`socials` | object | Links to LinkedIn, Github, Email
