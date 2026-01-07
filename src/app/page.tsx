import { getProfile, getTimelineItems, getProjects } from "@/lib/markdown";
import Hero from "@/components/sections/Hero";
import Timeline from "@/components/sections/Timeline";
import ProjectGrid from "@/components/sections/ProjectGrid";

export default function Home() {
  const profile = getProfile();
  const timelineItems = getTimelineItems();
  const projects = getProjects();

  if (!profile) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-foreground-secondary">Profile not found</p>
      </main>
    );
  }

  return (
    <main>
      <Hero profile={profile} />
      <Timeline items={timelineItems} />
      <ProjectGrid projects={projects} />
    </main>
  );
}
