"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Hook to detect mobile devices and reduced motion preferences
 * Returns configuration for optimal motion settings
 */
export function useMotionConfig() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if device is mobile based on screen width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reduce motion if user prefers it OR if on mobile for better performance
  const shouldReduceMotion = prefersReducedMotion || isMobile;

  return {
    isMobile,
    prefersReducedMotion,
    shouldReduceMotion,
  };
}
