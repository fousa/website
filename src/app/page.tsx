import { getProfile, getUnifiedTimeline } from "@/lib/markdown";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import UnifiedTimeline from "@/components/sections/UnifiedTimeline";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const profile = getProfile();
  const timelineItems = getUnifiedTimeline();

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
      <UnifiedTimeline items={timelineItems} />
      <Footer />
    </main>
  );
}
