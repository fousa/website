"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
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
  const isBirth = isExperience && item.type === "birth";

  // Format date to Mon YYYY (e.g., "Jan 2021")
  const formatDate = (date: string) => {
    if (date === "Present") return "Present";
    const d = new Date(date);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short" });
  };

  // Check if start and end are the same month/year
  const isSameMonth = (start: string, end?: string) => {
    if (!end || end === "Present") return false;
    return formatDate(start) === formatDate(end);
  };

  // Build date range string
  const getDateRange = () => {
    const startFormatted = formatDate(item.startDate);
    if (!item.endDate) {
      return `${startFormatted} - Present`;
    }
    if (isSameMonth(item.startDate, item.endDate)) {
      return startFormatted;
    }
    return `${startFormatted} - ${formatDate(item.endDate)}`;
  };

  const dateRange = getDateRange();

  // Get primary title and subtitle based on item type
  // Experiences: Company as title, Role as subtitle
  // Projects: Title with inline subtitle
  const primaryTitle = isExperience ? item.company : item.title;
  const secondaryText = isExperience ? item.title : "";
  const projectSubtitle = isProject ? item.subtitle : "";

  // Get employer label for projects
  const getEmployerLabel = () => {
    if (!isProject) return null;
    if (item.employer) return item.employer;
    if (item.type === "personal") return "fousa";
    return null;
  };
  const employerLabel = getEmployerLabel();

  // Special render for birth item - just the image
  if (isBirth && isExperience && item.image) {
    return (
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.8, delay: 0.2 }}
        className="flex justify-center"
        role="article"
        aria-label={`Born ${dateRange}`}
      >
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <Image
            src={item.image}
            alt={`Born ${dateRange}`}
            width={160}
            height={160}
            className="rounded-full object-cover border-4 border-accent shadow-2xl w-32 h-32 md:w-40 md:h-40"
          />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4, delay: index * 0.05 }}
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
        onClick={() => setIsExpanded(!isExpanded)}
        onFocus={() => setIsExpanded(true)}
        onBlur={(e) => {
          // Only collapse if focus moves outside the card
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setIsExpanded(false);
          }
        }}
        tabIndex={0}
        role="button"
        aria-expanded={isExpanded}
        aria-label={`${primaryTitle}${secondaryText ? `, ${secondaryText}` : ""}. Click to ${isExpanded ? "collapse" : "expand"} details.`}
      >
        <div className="p-6">
          {/* Header - Always Visible */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex-1">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-1">
                {primaryTitle}
                {projectSubtitle && (
                  <span className="font-body font-normal text-foreground-secondary">
                    {" — "}{projectSubtitle}
                  </span>
                )}
              </h3>
              {secondaryText && (
                <p className="font-body text-base md:text-lg text-foreground-secondary">
                  {secondaryText}
                </p>
              )}
            </div>

            {/* Type Badge - only for experiences */}
            {isExperience && (
              <div className="px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap bg-accent-muted text-accent">
                {item.type.replace("-", " ")}
              </div>
            )}
          </div>

          {/* Meta row - Date and Employer/Client badges */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-foreground-muted">
            <span>{dateRange}</span>
            {employerLabel && (
              <span className="px-2 py-0.5 bg-background-tertiary rounded-full text-xs">
                @ {employerLabel}
              </span>
            )}
            {isProject && item.client && (
              <span className="px-2 py-0.5 bg-accent-muted text-accent rounded-full text-xs">
                {item.client}
              </span>
            )}
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
                  <Calendar size={16} aria-hidden="true" />
                  <span>{dateRange}</span>
                </div>
                {isExperience && item.location && (
                  <div className="flex items-center gap-1.5">
                    <MapPin size={16} aria-hidden="true" />
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
                      <ExternalLink size={16} aria-hidden="true" />
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
                      <Github size={16} aria-hidden="true" />
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
