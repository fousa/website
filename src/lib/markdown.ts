import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { TimelineItem, Project, Profile } from "@/types";

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
