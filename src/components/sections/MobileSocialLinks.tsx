"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Linkedin, Github, Instagram, Mail, FileText } from "lucide-react";
import type { Profile } from "@/types";

interface MobileSocialLinksProps {
  profile: Profile;
}

interface SocialLinkProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  external?: boolean;
  index: number;
  prefersReducedMotion: boolean | null;
}

function SocialLink({
  icon,
  label,
  href,
  external = false,
  index,
  prefersReducedMotion,
}: SocialLinkProps) {
  const ariaLabel = external ? `${label} (opens in new tab)` : label;

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className="flex items-center gap-4 px-6 py-4 rounded-lg text-foreground-secondary hover:text-accent focus:text-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors"
      initial={
        prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
      }
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.4,
        delay: prefersReducedMotion ? 0 : 0.1 + index * 0.1,
      }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="flex-shrink-0" aria-hidden="true">
        {icon}
      </span>
      <span className="font-body text-lg font-medium">{label}</span>
    </motion.a>
  );
}

export default function MobileSocialLinks({ profile }: MobileSocialLinksProps) {
  const prefersReducedMotion = useReducedMotion();

  const socialLinks = [
    profile.socials.linkedin && {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      href: profile.socials.linkedin,
      external: true,
    },
    profile.socials.github && {
      icon: <Github size={24} />,
      label: "GitHub",
      href: profile.socials.github,
      external: true,
    },
    profile.socials.instagram && {
      icon: <Instagram size={24} />,
      label: "Instagram",
      href: profile.socials.instagram,
      external: true,
    },
    profile.socials.email && {
      icon: <Mail size={24} />,
      label: "Email",
      href: `mailto:${profile.socials.email}`,
      external: false,
    },
    profile.resume && {
      icon: <FileText size={24} />,
      label: "Download CV",
      href: profile.resume,
      external: true,
    },
  ].filter(Boolean) as {
    icon: React.ReactNode;
    label: string;
    href: string;
    external: boolean;
  }[];

  return (
    <section className="h-screen flex flex-col items-center justify-center px-6 snap-start snap-always relative md:hidden">
      <motion.div
        className="text-center mb-8"
        initial={
          prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
        }
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.6,
          delay: prefersReducedMotion ? 0 : 0.1,
        }}
      >
        <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
          Connect with me
        </h2>
        <p className="font-body text-foreground-secondary">
          Let&apos;s get in touch
        </p>
      </motion.div>

      <nav aria-label="Social links" className="flex flex-col gap-2">
        {socialLinks.map((link, index) => (
          <SocialLink
            key={link.label}
            icon={link.icon}
            label={link.label}
            href={link.href}
            external={link.external}
            index={index}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
      </nav>

      {/* Scroll Indicator - decorative hint */}
      <motion.div
        className="absolute bottom-12 inset-x-0 flex justify-center"
        initial={
          prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
        }
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.6,
          delay: prefersReducedMotion ? 0 : 0.6,
        }}
        aria-hidden="true"
      >
        <div className="inline-flex flex-col items-center gap-2 text-foreground-muted">
          <span className="font-body text-sm uppercase tracking-wider">
            Scroll
          </span>
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
      </motion.div>
    </section>
  );
}
