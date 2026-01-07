import { getProfile } from "@/lib/markdown";
import Hero from "@/components/sections/Hero";

export default function Home() {
  const profile = getProfile();

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
    </main>
  );
}
