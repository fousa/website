"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import TimelineCard from "@/components/ui/TimelineCard";
import type { UnifiedTimelineItem } from "@/types";

interface UnifiedTimelineProps {
  workItems: UnifiedTimelineItem[];
  educationItems: UnifiedTimelineItem[];
  birthItem: UnifiedTimelineItem | null;
}

export default function UnifiedTimeline({
  workItems,
  educationItems,
  birthItem,
}: UnifiedTimelineProps) {
  const prefersReducedMotion = useReducedMotion();
  const [featuredOnly, setFeaturedOnly] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Detect when toggle becomes sticky
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Filter work items based on featured toggle
  const filteredWorkItems = useMemo(() => {
    if (!featuredOnly) return workItems;
    return workItems.filter((item) => {
      // Experience items always show
      if (item.itemType === "experience") return true;
      // Projects filter by featured flag (default to false if not set)
      return item.featured === true;
    });
  }, [workItems, featuredOnly]);

  if (!workItems || workItems.length === 0) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 snap-start snap-always">
        <p className="text-foreground-secondary">No timeline items found</p>
      </section>
    );
  }

  // Extract year from date string
  const getYear = (dateString: string) => {
    if (dateString === "Present") return new Date().getFullYear();
    return new Date(dateString).getFullYear();
  };

  const renderTimelineItem = (
    item: UnifiedTimelineItem,
    index: number,
    items: UnifiedTimelineItem[],
    isMobile: boolean
  ) => {
    const isProject = item.itemType === "project";
    const itemYear = getYear(item.startDate);
    // Show year label AFTER the last item of each year
    const isLastItemOfYear =
      index === items.length - 1 || itemYear !== getYear(items[index + 1].startDate);
    const yearLabel = itemYear.toString();

    // Use slug for projects, title for experiences as unique key
    const itemKey = isProject ? item.slug : `exp-${item.title}`;

    if (isMobile) {
      return (
        <motion.div
          key={`mobile-${itemKey}`}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
          className="mb-3"
        >
          <TimelineCard item={item} index={index} />
          {isLastItemOfYear && (
            <motion.div
              initial={
                prefersReducedMotion
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.6,
                delay: prefersReducedMotion ? 0 : 0.3,
              }}
              className="mt-3 flex justify-center"
            >
              <div className="px-4 py-1.5 bg-background border border-accent rounded-full text-sm font-bold text-foreground shadow-lg">
                {yearLabel}
              </div>
            </motion.div>
          )}
        </motion.div>
      );
    }

    // Desktop
    return (
      <motion.div
        key={`desktop-${itemKey}`}
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
        className="relative mb-6"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 10% 1fr",
            gap: 0,
            position: "relative",
          }}
        >
          {isProject ? (
            <div className="pr-8">
              <TimelineCard item={item} index={index} />
            </div>
          ) : (
            <div />
          )}

          <div className="relative">
            <motion.div
              initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.5,
                delay: prefersReducedMotion ? 0 : index * 0.1,
              }}
              className="absolute h-0.5 bg-border"
              style={{
                top: "2rem",
                left: isProject ? "0%" : "50%",
                right: isProject ? "50%" : "0%",
                transformOrigin: isProject ? "left" : "right",
              }}
            />
          </div>

          {!isProject ? (
            <div className="pl-8">
              <TimelineCard item={item} index={index} />
            </div>
          ) : (
            <div />
          )}
        </div>

        {isLastItemOfYear && (
          <div className="flex justify-center mt-4 relative z-20">
            <motion.div
              initial={
                prefersReducedMotion
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.6,
                delay: prefersReducedMotion ? 0 : 0.3,
              }}
              className="px-4 py-1.5 bg-background border border-accent rounded-full text-sm font-bold text-foreground shadow-lg"
            >
              {yearLabel}
            </motion.div>
          </div>
        )}
      </motion.div>
    );
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

        {/* Sentinel for sticky detection */}
        <div ref={sentinelRef} className="-mt-10" />

        {/* Sticky Featured Toggle */}
        <div className="sticky top-4 z-[60] flex justify-center mb-12">
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 0.3 }}
            key={featuredOnly ? "featured" : "all"}
            className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full border transition-all duration-300 ${
              isSticky
                ? "bg-background/80 backdrop-blur-md border-border shadow-lg"
                : "bg-foreground/5 border-transparent"
            }`}
          >
            <span className="text-sm font-medium text-foreground-secondary">
              {featuredOnly ? "Showing highlights only" : "Showing all projects"}
            </span>
            <button
              onClick={() => setFeaturedOnly(!featuredOnly)}
              className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
                featuredOnly
                  ? "bg-accent"
                  : "bg-border"
              }`}
              aria-label={featuredOnly ? "Show all projects" : "Show featured projects only"}
            >
              <span
                className={`absolute top-1 left-1 w-6 h-6 bg-background rounded-full shadow-md transition-transform duration-300 ease-out ${
                  featuredOnly ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </motion.div>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Center Line - Desktop Only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 z-0" />

          {/* Mobile: Simple vertical list */}
          <div className="lg:hidden">
            <AnimatePresence mode="popLayout">
              {filteredWorkItems.map((item, index) =>
                renderTimelineItem(item, index, filteredWorkItems, true)
              )}
            </AnimatePresence>

            {/* Education Section */}
            {educationItems.length > 0 && (
              <div className="mt-16 mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-10">
                  Education
                </h3>
                {educationItems.map((item, index) => {
                  const itemYear = getYear(item.startDate);
                  const isLastItemOfYear = index === educationItems.length - 1 || itemYear !== getYear(educationItems[index + 1].startDate);
                  return (
                    <div key={`mobile-education-${index}`} className="mb-2">
                      <div className="scale-95 origin-left">
                        <TimelineCard item={item} index={index} />
                      </div>
                      {isLastItemOfYear && (
                        <motion.div
                          initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
                          className="mt-2 flex justify-center"
                        >
                          <div className="px-3 py-1 bg-background border border-border rounded-full text-xs font-bold text-foreground-secondary">
                            {itemYear}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Birth Section */}
            {birthItem && (
              <div className="mt-24">
                <TimelineCard item={birthItem} index={0} />
                {/* Year Label - After the card */}
                <motion.div
                  initial={
                    prefersReducedMotion
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.6,
                    delay: prefersReducedMotion ? 0 : 0.3,
                  }}
                  className="mt-4 flex justify-center"
                >
                  <div className="px-4 py-1.5 bg-background border border-accent rounded-full text-sm font-bold text-foreground shadow-lg">
                    1984
                  </div>
                </motion.div>
              </div>
            )}
          </div>

          {/* Desktop: Projects left, Experience right */}
          <div className="hidden lg:block relative">
            <AnimatePresence mode="popLayout">
              {filteredWorkItems.map((item, index) =>
                renderTimelineItem(item, index, filteredWorkItems, false)
              )}
            </AnimatePresence>

            {/* Education Section - Split Layout */}
            {educationItems.length > 0 && (
              <div className="mt-16 mb-12 relative">
                <motion.h3
                  initial={
                    prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
                  className="text-center text-2xl font-bold text-foreground mb-20"
                >
                  Education
                </motion.h3>

                {/* Center Line for Education */}
                <div className="absolute left-1/2 top-16 bottom-0 w-0.5 bg-border -translate-x-1/2 z-0" />

                {educationItems.map((item, index) => {
                  const itemYear = getYear(item.startDate);
                  const isLastItemOfYear = index === educationItems.length - 1 || itemYear !== getYear(educationItems[index + 1].startDate);
                  // Education on the right, internship/holiday-work on the left
                  const isEducation = item.itemType === "experience" && item.type === "education";
                  const isLeft = !isEducation; // internship or holiday-work goes left

                  return (
                    <div key={`desktop-education-${index}`} className="relative mb-10">
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 10% 1fr",
                          gap: 0,
                          position: "relative",
                        }}
                      >
                        {isLeft ? (
                          <div className="pr-8">
                            <TimelineCard item={item} index={index} />
                          </div>
                        ) : (
                          <div />
                        )}

                        <div className="relative">
                          <motion.div
                            initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                              duration: prefersReducedMotion ? 0 : 0.5,
                              delay: prefersReducedMotion ? 0 : index * 0.1,
                            }}
                            className="absolute h-0.5 bg-border"
                            style={{
                              top: "2rem",
                              left: isLeft ? "0%" : "50%",
                              right: isLeft ? "50%" : "0%",
                              transformOrigin: isLeft ? "left" : "right",
                            }}
                          />
                        </div>

                        {!isLeft ? (
                          <div className="pl-8">
                            <TimelineCard item={item} index={index} />
                          </div>
                        ) : (
                          <div />
                        )}
                      </div>

                      {isLastItemOfYear && (
                        <div className="flex justify-center mt-6 relative z-20">
                          <motion.div
                            initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
                            className="px-3 py-1 bg-background border border-border rounded-full text-xs font-bold text-foreground-secondary"
                          >
                            {itemYear}
                          </motion.div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Birth Section */}
            {birthItem && (
              <div className="mt-24">
                <TimelineCard item={birthItem} index={0} />
                {/* Year Label - After the card */}
                <div className="flex justify-center mt-4 relative z-20">
                  <motion.div
                    initial={
                      prefersReducedMotion
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.6,
                      delay: prefersReducedMotion ? 0 : 0.3,
                    }}
                    className="px-4 py-1.5 bg-background border border-accent rounded-full text-sm font-bold text-foreground shadow-lg"
                  >
                    1984
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
