"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Footer() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer className="relative bg-background-tertiary border-t border-border snap-start">
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
        className="max-w-7xl mx-auto px-6 py-12 text-center"
      >
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-sm text-foreground-secondary">
            <span>© 2026 Jelle Vandebeeck</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              Edegem
            </span>
            <span className="hidden md:inline">•</span>
            <span>BE07.8091.5524</span>
          </div>
          <div className="text-xs text-foreground-muted">
            Made the modern way: human + AI 🚀
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
