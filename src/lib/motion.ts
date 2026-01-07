/**
 * Motion utilities for handling reduced motion preferences and mobile optimization
 */

/**
 * Get simplified animation variants for reduced motion or mobile devices
 * These provide a degraded but still pleasant experience on touch devices
 */
export const getAnimationVariant = (isMobile: boolean, shouldReduceMotion: boolean) => {
  // If user prefers reduced motion or is on mobile, use simpler animations
  if (shouldReduceMotion || isMobile) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.3 },
    };
  }

  // Full animation for desktop with motion support
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };
};

/**
 * Get viewport config that's optimized for performance
 * On mobile, we use a larger margin to trigger animations earlier
 * and ensure they only happen once
 */
export const getViewportConfig = (isMobile: boolean) => {
  return {
    once: true,
    margin: isMobile ? "-50px" : "-100px",
    amount: isMobile ? 0.1 : 0.3, // Trigger earlier on mobile
  };
};

/**
 * Determine if hover animations should be disabled
 * Hover effects don't work well on touch devices
 */
export const shouldDisableHover = (isMobile: boolean) => {
  return isMobile;
};
