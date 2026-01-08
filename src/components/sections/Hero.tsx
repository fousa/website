"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Instagram, Mail, Download } from "lucide-react";
import type { Profile } from "@/types";

interface HeroProps {
  profile: Profile;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const socialIcons = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  email: Mail,
};

export default function Hero({ profile }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-5xl w-full">
        <div className="space-y-6">
          {/* Name */}
          <motion.h1
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {profile.name}
          </motion.h1>

          {/* Role */}
          <motion.p
            className="font-body text-2xl md:text-3xl lg:text-4xl text-foreground-secondary"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {profile.role}
          </motion.p>

          {/* Bio */}
          <motion.div
            className="max-w-2xl"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="font-body text-lg md:text-xl text-foreground-secondary leading-relaxed">
              {profile.content}
            </p>
          </motion.div>

          {/* CV Download Button */}
          {profile.resume && (
            <motion.div
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-body font-medium rounded-lg hover:bg-accent/90 transition-colors duration-fast"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download CV
              </motion.a>
            </motion.div>
          )}

          {/* Social Links */}
          <motion.div
            className="flex gap-6 pt-4"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {profile.socials.linkedin && (
              <motion.a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-accent transition-colors duration-fast"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </motion.a>
            )}
            {profile.socials.github && (
              <motion.a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-accent transition-colors duration-fast"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <Github size={24} />
              </motion.a>
            )}
            {profile.socials.instagram && (
              <motion.a
                href={profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-accent transition-colors duration-fast"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </motion.a>
            )}
            {profile.socials.email && (
              <motion.a
                href={`mailto:${profile.socials.email}`}
                className="text-foreground-secondary hover:text-accent transition-colors duration-fast"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
              >
                <Mail size={24} />
              </motion.a>
            )}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="pt-12"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ duration: 0.6, delay: 1.0 }}
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
        </div>
      </div>
    </section>
  );
}
