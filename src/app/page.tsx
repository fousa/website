import { getProfile, getTimelineItems, getProjects } from "@/lib/markdown";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
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
    <main className="snap-y snap-mandatory overflow-y-auto h-screen overscroll-none">
      <Hero profile={profile} />
      <About profile={profile} />
      <Timeline items={timelineItems} />
      <ProjectGrid projects={projects} />
    </main>
  );
}
