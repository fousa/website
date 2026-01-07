"use client";

import { motion } from "framer-motion";
import type { TimelineItem as TimelineItemType } from "@/types";
import { useMotionConfig } from "@/lib/use-motion-config";

interface TimelineItemProps {
  item: TimelineItemType;
}

export default function TimelineItem({ item }: TimelineItemProps) {
  const { shouldReduceMotion } = useMotionConfig();

  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  const duration = item.endDate
    ? `${formatDate(item.startDate)} - ${
        item.endDate === "Present" ? "Present" : formatDate(item.endDate)
      }`
    : formatDate(item.startDate);

  // Simplified animations for mobile/reduced motion
  const containerAnimation = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.3 },
      }
    : {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.6, ease: "easeOut" as const },
      };

  const dotAnimation = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.2 },
      }
    : {
        initial: { scale: 0 },
        whileInView: { scale: 1 },
        transition: { duration: 0.4, delay: 0.2 },
      };

  return (
    <motion.div
      className="relative pl-8 pb-12 border-l-2 border-border"
      {...containerAnimation}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Timeline Dot */}
      <motion.div
        className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-accent border-4 border-background"
        {...dotAnimation}
        viewport={{ once: true, margin: "-100px" }}
      />

      <div className="space-y-3">
        {/* Type Badge */}
        <div className="inline-block">
          <span className="font-body text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-accent-muted text-accent border border-accent/20">
            {item.type}
          </span>
        </div>

        {/* Title & Company */}
        <div>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            {item.title}
          </h3>
          <p className="font-body text-lg md:text-xl text-foreground-secondary mt-1">
            {item.company}
          </p>
        </div>

        {/* Duration & Location */}
        <div className="flex flex-wrap gap-4 font-body text-sm text-foreground-muted">
          <span>{duration}</span>
          {item.location && (
            <>
              <span>•</span>
              <span>{item.location}</span>
            </>
          )}
        </div>

        {/* Description */}
        {item.content && (
          <div className="max-w-2xl">
            <p className="font-body text-base text-foreground-secondary leading-relaxed">
              {item.content}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
