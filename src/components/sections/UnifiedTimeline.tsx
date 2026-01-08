"use client";

import { motion, useReducedMotion } from "framer-motion";
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

  if (!workItems || workItems.length === 0) {
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

  const getYearLabel = (dateString: string, isFirst: boolean) => {
    if (isFirst) return "Present";
    return getYear(dateString).toString();
  };

  const renderTimelineItem = (
    item: UnifiedTimelineItem,
    index: number,
    items: UnifiedTimelineItem[],
    isMobile: boolean
  ) => {
    const isProject = item.itemType === "project";
    const itemYear = getYear(item.startDate);
    const showYearLabel =
      index === 0 || itemYear !== getYear(items[index - 1].startDate);
    const yearLabel = getYearLabel(item.startDate, index === 0);

    if (isMobile) {
      return (
        <div key={`mobile-${item.itemType}-${index}`} className="mb-6">
          {showYearLabel && (
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
              className="mb-4 inline-flex px-4 py-1.5 bg-background border border-accent rounded-full text-sm font-bold text-foreground shadow-lg pointer-events-none"
            >
              {yearLabel}
            </motion.div>
          )}
          <TimelineCard item={item} index={index} />
        </div>
      );
    }

    // Desktop
    return (
      <div key={`desktop-${item.itemType}-${index}`} className="relative mb-12">
        {showYearLabel && (
          <div
            className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
            style={{ top: "-2.5rem", zIndex: 20 }}
          >
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
      </div>
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

        {/* Timeline Layout */}
        <div className="relative">
          {/* Center Line - Desktop Only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 z-0" />

          {/* Mobile: Simple vertical list */}
          <div className="lg:hidden">
            {workItems.map((item, index) =>
              renderTimelineItem(item, index, workItems, true)
            )}

            {/* Education Section */}
            {educationItems.length > 0 && (
              <div className="mt-16 mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Education
                </h3>
                {educationItems.map((item, index) => (
                  <div key={`mobile-education-${index}`} className="mb-6">
                    <TimelineCard item={item} index={index} />
                  </div>
                ))}
              </div>
            )}

            {/* Birth Section */}
            {birthItem && (
              <div className="mt-24">
                {/* Year Label */}
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
                  className="mb-12 flex justify-center"
                >
                  <div className="px-4 py-1.5 bg-background border border-accent rounded-full text-sm font-bold text-foreground shadow-lg pointer-events-none">
                    1984
                  </div>
                </motion.div>
                <TimelineCard item={birthItem} index={0} />
              </div>
            )}
          </div>

          {/* Desktop: Projects left, Experience right */}
          <div className="hidden lg:block relative">
            {workItems.map((item, index) =>
              renderTimelineItem(item, index, workItems, false)
            )}

            {/* Education Section */}
            {educationItems.length > 0 && (
              <div className="mt-16 mb-12">
                <motion.h3
                  initial={
                    prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
                  className="text-center text-2xl font-bold text-foreground mb-8"
                >
                  Education
                </motion.h3>
                {educationItems.map((item, index) => (
                  <div key={`desktop-education-${index}`} className="mb-12">
                    <div className="flex justify-center">
                      <div className="w-full max-w-2xl">
                        <TimelineCard item={item} index={index} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Birth Section */}
            {birthItem && (
              <div className="mt-24 relative">
                {/* Year Label - Centered like other year labels */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
                  style={{ top: "-4rem", zIndex: 20 }}
                >
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
                <TimelineCard item={birthItem} index={0} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
