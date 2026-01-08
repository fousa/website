export interface TimelineItem {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  type: "full-time" | "freelance" | "internship" | "education" | "birth";
  logo?: string;
  image?: string;
  location?: string;
  content: string;
}

export interface Project {
  title: string;
  slug: string;
  type: "client-work" | "personal" | "open-source";
  employer?: string;
  client?: string;
  description: string;
  techStack: string[];
  thumbnail: string;
  featured?: boolean;
  liveUrl?: string;
  repoUrl?: string;
  content: string;
  startDate: string;
  endDate?: string;
}

export interface Profile {
  name: string;
  role: string;
  socials: {
    linkedin?: string;
    github?: string;
    email?: string;
    instagram?: string;
  };
  content: string;
  resume?: string;
}

export type UnifiedTimelineItem =
  | (TimelineItem & { itemType: "experience" })
  | (Project & { itemType: "project" });
