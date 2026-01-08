"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Calendar, MapPin, ExternalLink, Github } from "lucide-react";
import type { UnifiedTimelineItem } from "@/types";

interface TimelineCardProps {
  item: UnifiedTimelineItem;
  index: number;
}

export default function TimelineCard({ item, index }: TimelineCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const isExperience = item.itemType === "experience";
  const isProject = item.itemType === "project";

  // Format date range
  const formatDate = (date: string) => {
    if (date === "Present") return "Present";
    const d = new Date(date);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  };

  const dateRange = `${formatDate(item.startDate)}${
    item.endDate ? ` - ${formatDate(item.endDate)}` : ""
  }`;

  // Get subtitle based on item type
  const subtitle = isExperience
    ? item.company
    : isProject && item.employer
    ? item.employer
    : isProject && item.client
    ? item.client
    : isProject
    ? item.type.replace("-", " ")
    : "";

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, delay: index * 0.1 }}
      className="group"
      style={{
        position: 'relative',
        zIndex: isExpanded ? 50 : 1,
      }}
    >
      <div
        className={`relative bg-background-secondary border cursor-pointer overflow-visible ${
          isExpanded
            ? 'border-accent rounded-t-lg'
            : 'border-border rounded-lg'
        }`}
        style={{
          borderBottomColor: isExpanded ? 'transparent' : undefined,
          willChange: 'border-color',
        }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onFocus={() => setIsExpanded(true)}
        onBlur={() => setIsExpanded(false)}
        tabIndex={0}
        role="article"
        aria-label={`${item.title} - ${subtitle}`}
      >
        <div className="p-6">
          {/* Header - Always Visible */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-1">
                {item.title}
              </h3>
              <p className="font-body text-base md:text-lg text-foreground-secondary">
                {subtitle}
              </p>
            </div>

            {/* Type Badge */}
            <div
              className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                isExperience
                  ? "bg-accent-muted text-accent"
                  : "bg-background-tertiary text-foreground-secondary"
              }`}
            >
              {isExperience ? item.type.replace("-", " ") : "project"}
            </div>
          </div>
        </div>

        {/* Expandable Content - Absolute positioned as sibling */}
        {isExpanded && (
          <div
            className="absolute left-[-1px] right-[-1px] top-full bg-background-secondary border-l border-r border-b border-accent rounded-b-lg shadow-xl z-50"
            style={{
              animation: prefersReducedMotion ? 'none' : 'fadeIn 0.15s ease-out',
            }}
          >
            <div className="px-6 pb-6 pt-4">
              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 mb-4 text-sm text-foreground-muted border-t border-b border-border py-3">
                <div className="flex items-center gap-1.5">
                  <Calendar size={16} />
                  <span>{dateRange}</span>
                </div>
                {isExperience && item.location && (
                  <div className="flex items-center gap-1.5">
                    <MapPin size={16} />
                    <span>{item.location}</span>
                  </div>
                )}
                {isProject && item.techStack && (
                  <div className="flex flex-wrap gap-2">
                    {item.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-background-tertiary rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.techStack.length > 3 && (
                      <span className="px-2 py-0.5 text-xs">
                        +{item.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Description for Projects */}
              {isProject && item.description && (
                <p className="text-foreground-secondary mb-4">
                  {item.description}
                </p>
              )}

              {/* Content */}
              <div className="prose prose-invert prose-sm max-w-none mb-4">
                <p className="text-foreground-secondary leading-relaxed whitespace-pre-line">
                  {item.content}
                </p>
              </div>

              {/* Tech Stack (Full) */}
              {isProject && item.techStack && item.techStack.length > 3 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-background-tertiary rounded text-xs text-foreground-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Links */}
              {isProject && (item.liveUrl || item.repoUrl) && (
                <div className="flex gap-3 pt-3 border-t border-border">
                  {item.liveUrl && (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`Visit live site for ${item.title}`}
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Site</span>
                    </a>
                  )}
                  {item.repoUrl && (
                    <a
                      href={item.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`View source code for ${item.title}`}
                    >
                      <Github size={16} />
                      <span className="text-sm">Source Code</span>
                    </a>
                  )}
                </div>
              )}
              </div>
            </div>
          )}
      </div>
    </motion.div>
  );
}
