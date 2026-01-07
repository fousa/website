import type { TimelineItem as TimelineItemType } from "@/types";
import TimelineItem from "./TimelineItem";

interface TimelineProps {
  items: TimelineItemType[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <section className="min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="font-body text-lg md:text-xl text-foreground-secondary">
            My professional journey and milestones
          </p>
        </div>

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
