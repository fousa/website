import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { TimelineItem, Project, Profile, UnifiedTimelineItem } from "@/types";

const contentDirectory = path.join(process.cwd(), "content");

/**
 * Read all timeline items from /content/timeline
 * Sorted by startDate (newest first)
 */
export function getTimelineItems(): TimelineItem[] {
  const timelineDir = path.join(contentDirectory, "timeline");

  if (!fs.existsSync(timelineDir)) {
    return [];
  }

  const files = fs.readdirSync(timelineDir);
  const items = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(timelineDir, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        ...data,
        content,
      } as TimelineItem;
    });

  // Sort by startDate (newest first)
  return items.sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });
}

/**
 * Read all projects from /content/projects
 * Featured projects come first, then sorted by filename
 */
export function getProjects(): Project[] {
  const projectsDir = path.join(contentDirectory, "projects");

  if (!fs.existsSync(projectsDir)) {
    return [];
  }

  const files = fs.readdirSync(projectsDir);
  const projects = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(projectsDir, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        ...data,
        content,
      } as Project;
    });

  // Sort: featured first, then alphabetically
  return projects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.title.localeCompare(b.title);
  });
}

/**
 * Read profile information from /content/profile/about.md
 */
export function getProfile(): Profile | null {
  const profilePath = path.join(contentDirectory, "profile", "about.md");

  if (!fs.existsSync(profilePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(profilePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...data,
    content,
  } as Profile;
}

/**
 * Get unified timeline merging experience and projects
 * Returns object with work/projects, education, and birth items separated
 */
export function getUnifiedTimeline(): {
  work: UnifiedTimelineItem[];
  education: UnifiedTimelineItem[];
  birth: UnifiedTimelineItem | null;
} {
  const timelineItems = getTimelineItems();
  const projects = getProjects();

  const experienceItems: UnifiedTimelineItem[] = timelineItems.map((item) => ({
    ...item,
    itemType: "experience" as const,
  }));

  const projectItems: UnifiedTimelineItem[] = projects.map((item) => ({
    ...item,
    itemType: "project" as const,
  }));

  // Separate birth, education (including internship and holiday-work), and work items
  const birthItem = experienceItems.find((item) => item.type === "birth") || null;
  const educationItems = experienceItems.filter(
    (item) => item.type === "education" || item.type === "internship" || item.type === "holiday-work"
  );
  const workItems = experienceItems.filter(
    (item) => item.type !== "birth" && item.type !== "education" && item.type !== "internship" && item.type !== "holiday-work"
  );

  const workAndProjects = [...workItems, ...projectItems];

  // Sort by startDate (newest first), projects come before experiences when same month
  const sortedWork = workAndProjects.sort((a, b) => {
    const dateA = new Date(a.startDate).getTime();
    const dateB = new Date(b.startDate).getTime();

    // If dates are different, sort by date (newest first)
    if (dateB !== dateA) {
      return dateB - dateA;
    }

    // If same date, projects come before experiences
    if (a.itemType === "project" && b.itemType === "experience") return -1;
    if (a.itemType === "experience" && b.itemType === "project") return 1;

    return 0;
  });

  const sortedEducation = educationItems.sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  return {
    work: sortedWork,
    education: sortedEducation,
    birth: birthItem,
  };
}
