"use client";

import { motion, useReducedMotion } from "framer-motion";
import TimelineCard from "@/components/ui/TimelineCard";
import type { UnifiedTimelineItem } from "@/types";

interface UnifiedTimelineProps {
  items: UnifiedTimelineItem[];
}

export default function UnifiedTimeline({ items }: UnifiedTimelineProps) {
  const prefersReducedMotion = useReducedMotion();

  if (!items || items.length === 0) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 snap-start snap-always">
        <p className="text-foreground-secondary">No timeline items found</p>
      </section>
    );
  }

  // Extract unique years from items for timeline markers
  const getYear = (dateString: string) => {
    if (dateString === "Present") return new Date().getFullYear();
    return new Date(dateString).getFullYear();
  };

  return (
    <section className="min-h-screen pt-20 pb-8 px-6 md:px-12 snap-start">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            The Story So Far
          </h2>
          <p className="font-body text-lg md:text-xl text-foreground-secondary max-w-2xl mx-auto">
            Apps, adventures, and everything in between
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Center Line - Desktop Only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 z-0" />

          {/* Mobile: Simple vertical list */}
          <div className="lg:hidden">
            {items.map((item, index) => {
              const itemYear = getYear(item.startDate);
              return (
                <div key={`mobile-${item.itemType}-${index}`} className="mb-6">
                  {/* Year Label - Show once per year on mobile */}
                  {(index === 0 || itemYear !== getYear(items[index - 1].startDate)) && (
                    <motion.div
                      initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.3 }}
                      className="mb-4 inline-flex px-4 py-1.5 bg-background border border-accent rounded-full text-sm font-bold text-foreground shadow-lg pointer-events-none"
                    >
                      {itemYear}
                    </motion.div>
                  )}
                  <TimelineCard item={item} index={index} />
                </div>
              );
            })}
          </div>

          {/* Desktop: Projects left, Experience right */}
          <div className="hidden lg:block relative">
            {items.map((item, index) => {
              const isProject = item.itemType === "project";
              const itemYear = getYear(item.startDate);

              return (
                <div
                  key={`desktop-${item.itemType}-${index}`}
                  className="relative mb-12"
                >
                  {/* Year Label - Show once per year - fixed position */}
                  {(index === 0 || itemYear !== getYear(items[index - 1].startDate)) && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
                      style={{
                        top: "-2.5rem",
                        zIndex: 20,
                      }}
                    >
                      <motion.div
                        initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.3 }}
                        className="px-4 py-1.5 bg-background border border-accent rounded-full text-sm font-bold text-foreground shadow-lg"
                      >
                        {itemYear}
                      </motion.div>
                    </div>
                  )}

                  {/* Grid Layout */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 10% 1fr",
                      gap: 0,
                      position: 'relative',
                    }}
                  >
                    {/* Left Column - Projects */}
                    {isProject ? (
                      <div className="pr-8">
                        <TimelineCard item={item} index={index} />
                      </div>
                    ) : (
                      <div />
                    )}

                    {/* Center Column - Connecting Line and Dot */}
                    <div className="relative">
                      {/* Connecting Line */}
                      <motion.div
                        initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : index * 0.1 }}
                        className="absolute h-0.5 bg-border"
                        style={{
                          top: "2rem",
                          left: isProject ? "0%" : "50%",
                          right: isProject ? "50%" : "0%",
                          transformOrigin: isProject ? "left" : "right",
                        }}
                      />

                      {/* Timeline Dot - Only for projects */}
                      {isProject && (
                        <motion.div
                          initial={prefersReducedMotion ? { scale: 1 } : { scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: prefersReducedMotion ? 0 : 0.4, delay: prefersReducedMotion ? 0 : index * 0.1 + 0.2 }}
                          className="absolute w-4 h-4 rounded-full border-4 bg-background-tertiary border-background"
                          style={{
                            top: "2rem",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 10,
                          }}
                        />
                      )}
                    </div>

                    {/* Right Column - Experience */}
                    {!isProject ? (
                      <div className="pl-8">
                        <TimelineCard item={item} index={index} />
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
