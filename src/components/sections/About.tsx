"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Linkedin, Github, Instagram, Mail, FileText } from "lucide-react";
import ExpandingButton from "@/components/ui/ExpandingButton";
import type { Profile } from "@/types";

interface AboutProps {
  profile: Profile;
}

export default function About({ profile }: AboutProps) {
  const prefersReducedMotion = useReducedMotion();

  const fadeInUp = {
    initial: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="h-screen flex items-center justify-center px-6 md:px-12 snap-start snap-always relative">
      <div className="max-w-5xl w-full">
        <div className="space-y-6 flex flex-col items-center">
          {/* Name */}
          <motion.h1
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground text-center"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.1 }}
          >
            {profile.name}
          </motion.h1>

          {/* Role */}
          <motion.p
            className="font-body text-2xl md:text-3xl lg:text-4xl text-foreground-secondary text-center"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.3 }}
          >
            {profile.role}
          </motion.p>

          {/* Bio */}
          <motion.div
            className="max-w-2xl"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.5 }}
          >
            <p className="font-body text-lg md:text-xl text-foreground-secondary leading-relaxed text-center whitespace-pre-line">
              {profile.content}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 pt-4 flex-wrap justify-center"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.7 }}
          >
            {profile.socials.linkedin && (
              <ExpandingButton
                icon={<Linkedin size={24} />}
                label="LinkedIn"
                href={profile.socials.linkedin}
                external
              />
            )}
            {profile.socials.github && (
              <ExpandingButton
                icon={<Github size={24} />}
                label="GitHub"
                href={profile.socials.github}
                external
              />
            )}
            {profile.socials.instagram && (
              <ExpandingButton
                icon={<Instagram size={24} />}
                label="Instagram"
                href={profile.socials.instagram}
                external
              />
            )}
            {profile.socials.email && (
              <ExpandingButton
                icon={<Mail size={24} />}
                label="Email"
                href={`mailto:${profile.socials.email}`}
              />
            )}
            {profile.resume && (
              <ExpandingButton
                icon={<FileText size={24} />}
                label="Download CV"
                href={profile.resume}
                external
              />
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.9 }}
      >
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
      </motion.div>
    </section>
  );
}
