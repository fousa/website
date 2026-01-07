import type { Profile } from "@/types";

interface HeroProps {
  profile: Profile;
}

export default function Hero({ profile }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-5xl w-full">
        <div className="space-y-6">
          {/* Name */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground">
            {profile.name}
          </h1>

          {/* Role */}
          <p className="font-body text-2xl md:text-3xl lg:text-4xl text-foreground-secondary">
            {profile.role}
          </p>

          {/* Bio */}
          <div className="max-w-2xl">
            <p className="font-body text-lg md:text-xl text-foreground-secondary leading-relaxed">
              {profile.content}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-4">
            {profile.socials.linkedin && (
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-foreground-secondary hover:text-accent transition-colors duration-fast"
              >
                LinkedIn
              </a>
            )}
            {profile.socials.github && (
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-foreground-secondary hover:text-accent transition-colors duration-fast"
              >
                GitHub
              </a>
            )}
            {profile.socials.instagram && (
              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-foreground-secondary hover:text-accent transition-colors duration-fast"
              >
                Instagram
              </a>
            )}
            {profile.socials.email && (
              <a
                href={`mailto:${profile.socials.email}`}
                className="font-body text-foreground-secondary hover:text-accent transition-colors duration-fast"
              >
                Email
              </a>
            )}
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12">
            <div className="inline-flex flex-col items-center gap-2 text-foreground-muted">
              <span className="font-body text-sm uppercase tracking-wider">Scroll</span>
              <svg
                className="w-6 h-6 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
