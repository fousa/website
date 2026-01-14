"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useId, useCallback, useMemo, memo } from "react";
import Image from "next/image";
import { MapPin, ExternalLink, Github, Briefcase, GraduationCap, Cat } from "lucide-react";
import type { UnifiedTimelineItem } from "@/types";

interface TimelineCardProps {
  item: UnifiedTimelineItem;
  index: number;
  isMobile?: boolean;
}

// Global touch detection (runs once)
let isTouchDeviceGlobal: boolean | null = null;
const getIsTouchDevice = () => {
  if (isTouchDeviceGlobal === null && typeof window !== 'undefined') {
    isTouchDeviceGlobal = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }
  return isTouchDeviceGlobal ?? false;
};

function TimelineCard({ item, index, isMobile = false }: TimelineCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const cardId = useId();
  const expandedContentId = `${cardId}-expanded`;

  // Detect touch device once on mount
  useEffect(() => {
    setIsTouchDevice(getIsTouchDevice());
  }, []);

  // Memoized computed values
  const { isExperience, isProject, isBirth, isEducation, isProfessionalProject } = useMemo(() => ({
    isExperience: item.itemType === "experience",
    isProject: item.itemType === "project",
    isBirth: item.itemType === "experience" && item.type === "birth",
    isEducation: item.itemType === "experience" && item.type === "education",
    isProfessionalProject: item.itemType === "project" && item.type !== "personal",
  }), [item.itemType, item.type]);

  // Memoized date formatting
  const dateRange = useMemo(() => {
    const formatDate = (date: string) => {
      if (date === "Present") return "Present";
      const d = new Date(date);
      return d.toLocaleDateString("en-US", { year: "numeric", month: "short" });
    };

    const startFormatted = formatDate(item.startDate);
    if (!item.endDate) {
      return `${startFormatted} - Present`;
    }
    const endFormatted = formatDate(item.endDate);
    if (startFormatted === endFormatted) {
      return startFormatted;
    }
    return `${startFormatted} - ${endFormatted}`;
  }, [item.startDate, item.endDate]);

  // Memoized title and subtitle
  const { primaryTitle, secondaryText, projectSubtitle } = useMemo(() => {
    if (isExperience && item.itemType === "experience") {
      return {
        primaryTitle: item.company,
        secondaryText: item.title,
        projectSubtitle: "",
      };
    }
    if (isProject && item.itemType === "project") {
      return {
        primaryTitle: item.title,
        secondaryText: "",
        projectSubtitle: item.subtitle || "",
      };
    }
    return { primaryTitle: "", secondaryText: "", projectSubtitle: "" };
  }, [isExperience, isProject, item]);

  // Memoized employer label
  const employerLabel = useMemo(() => {
    if (!isProject || item.itemType !== "project") return null;
    if (item.employer) return item.employer;
    if (item.type === "personal") return "fousa";
    return null;
  }, [isProject, item]);

  // Memoized event handlers
  const handleMouseEnter = useCallback(() => {
    if (!isTouchDevice) setIsExpanded(true);
  }, [isTouchDevice]);

  const handleMouseLeave = useCallback(() => {
    if (!isTouchDevice) setIsExpanded(false);
  }, [isTouchDevice]);

  const handleClick = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  const handleFocus = useCallback(() => {
    if (!isTouchDevice) setIsExpanded(true);
  }, [isTouchDevice]);

  const handleBlur = useCallback((e: React.FocusEvent) => {
    if (!isTouchDevice && !e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsExpanded(false);
    }
  }, [isTouchDevice]);

  const handleLinkClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  // Special render for birth item - just the image
  if (isBirth && item.itemType === "experience" && item.image) {
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
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4, delay: index * 0.02 }}
      className="group"
      style={{
        position: 'relative',
        zIndex: isExpanded && !isMobile ? 50 : 1,
      }}
    >
      <div
        className={`relative border cursor-pointer overflow-visible transition-all duration-200 ease-out ${
          isExpanded
            ? 'border-accent bg-background-secondary'
            : 'border-border rounded-lg bg-background-secondary hover:border-accent/50 hover:shadow-md'
        }`}
        style={{
          borderBottomColor: isExpanded ? 'transparent' : undefined,
          backgroundColor: isExpanded ? 'var(--background)' : undefined,
          borderRadius: isExpanded ? '0.5rem 0.5rem 0 0' : undefined,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex={0}
        role="button"
        aria-expanded={isExpanded}
        aria-controls={expandedContentId}
        aria-label={`${primaryTitle}${secondaryText ? `, ${secondaryText}` : ""}. ${isTouchDevice ? 'Tap' : 'Click'} to ${isExpanded ? "collapse" : "expand"} details.`}
      >
        <div className="p-6" style={{
          backgroundColor: isExpanded ? 'var(--background)' : undefined,
          borderRadius: isExpanded ? '0.5rem 0.5rem 0 0' : undefined,
        }}>
          {/* Header - Always Visible */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex-1">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-1">
                {primaryTitle}
                {projectSubtitle && (
                  <span className="font-body font-normal text-foreground-secondary text-base md:text-lg">
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
              <div className="px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap bg-accent-muted text-accent flex items-center gap-1">
                {isEducation && <GraduationCap size={12} aria-hidden="true" />}
                {item.type.replace("-", " ")}
              </div>
            )}
          </div>

          {/* Meta row - Date and Employer/Client badges */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-foreground-muted">
            <span>{dateRange}</span>
            {employerLabel && (
              <span className="px-2 py-0.5 bg-background-tertiary rounded-full text-xs flex items-center gap-1">
                {employerLabel === "fousa" && <Cat size={10} aria-hidden="true" />}
                {isProfessionalProject && employerLabel !== "fousa" && <Briefcase size={10} aria-hidden="true" />}
                {employerLabel}
              </span>
            )}
            {isProject && item.itemType === "project" && item.client && (
              <span className="px-2 py-0.5 bg-accent-muted text-accent rounded-full text-xs flex items-center gap-1">
                {isProfessionalProject && !employerLabel && <Briefcase size={10} aria-hidden="true" />}
                {item.client}
              </span>
            )}
          </div>
        </div>

        {/* Expandable Content - Absolute on desktop, animated relative on mobile */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              id={expandedContentId}
              role="region"
              aria-label={`Details for ${primaryTitle}`}
              className={`border-l border-r border-b border-accent rounded-b-lg overflow-hidden ${
                isMobile
                  ? 'relative mx-[-1px] mt-0'
                  : 'absolute left-[-1px] right-[-1px] top-full z-50'
              }`}
              initial={prefersReducedMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              style={{
                backgroundColor: 'var(--background)',
                boxShadow: isMobile
                  ? '0 4px 12px -2px rgba(0, 0, 0, 0.08)'
                  : '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className="px-6 pb-6 pt-0">
                {/* Meta Info - only show if there's location or techStack */}
                {((item.itemType === "experience" && item.location) || (item.itemType === "project" && item.techStack)) && (
                  <div className="flex flex-wrap gap-2 mb-0 text-sm text-foreground-muted border-t border-b border-border py-3">
                    {item.itemType === "experience" && item.location && (
                      <div className="flex items-center gap-1">
                        <MapPin size={12} aria-hidden="true" />
                        <span>{item.location}</span>
                      </div>
                    )}
                    {item.itemType === "project" && item.techStack && (
                      <div className="flex flex-wrap gap-1">
                        {item.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-1.5 py-0.5 bg-background-tertiary rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {item.techStack.length > 3 && (
                          <span className="px-1.5 py-0.5 text-xs">
                            +{item.techStack.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Description for Projects */}
                {item.itemType === "project" && item.description && (
                  <p className="text-foreground-secondary mb-3">
                    {item.description}
                  </p>
                )}

                {/* Content */}
                <div className="prose prose-invert prose-sm max-w-none">
                  <p className="text-foreground-secondary leading-relaxed whitespace-pre-line">
                    {item.content}
                  </p>
                </div>

                {/* Tech Stack (Full) */}
                {item.itemType === "project" && item.techStack && item.techStack.length > 3 && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 bg-background-tertiary rounded text-xs text-foreground-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                {item.itemType === "project" && (item.liveUrl || item.repoUrl) && (
                  <div className="flex gap-2 mt-6 pt-4 border-t border-border">
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
                        onClick={handleLinkClick}
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
                        onClick={handleLinkClick}
                        aria-label={`View source code for ${item.title}`}
                      >
                        <Github size={16} aria-hidden="true" />
                        <span className="text-sm">Source Code</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default memo(TimelineCard);
