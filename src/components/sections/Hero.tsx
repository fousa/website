"use client";

import { motion, useReducedMotion } from "framer-motion";
import ParallaxLogo from "@/components/ui/ParallaxLogo";
import type { Profile } from "@/types";

interface HeroProps {
  profile: Profile;
}

export default function Hero({ profile }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="h-screen flex flex-col items-center justify-center snap-start snap-always relative">
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: prefersReducedMotion ? 0 : 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center w-full max-w-6xl px-4"
      >
        <ParallaxLogo size={300} name={profile.name} role={profile.role} />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 inset-x-0 flex justify-center"
        initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 1.2 }}
      >
        <div className="inline-flex flex-col items-center gap-2 text-foreground-muted">
          <span className="font-body text-sm uppercase tracking-wider">Scroll</span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
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
