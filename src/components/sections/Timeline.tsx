"use client";

import { motion } from "framer-motion";
import type { TimelineItem as TimelineItemType } from "@/types";
import TimelineItem from "./TimelineItem";

interface TimelineProps {
  items: TimelineItemType[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <section className="min-h-screen py-20 px-6 md:px-12 snap-start snap-always">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="font-body text-lg md:text-xl text-foreground-secondary">
            My professional journey and milestones
          </p>
        </motion.div>

        {/* Timeline Items */}
        <div className="space-y-0">
          {items.map((item, index) => (
            <TimelineItem key={`${item.company}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
