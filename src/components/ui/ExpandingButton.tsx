"use client";

import { motion } from "framer-motion";
import { useState, ReactNode } from "react";

interface ExpandingButtonProps {
  icon: ReactNode;
  label: string;
  href: string;
  external?: boolean;
}

export default function ExpandingButton({
  icon,
  label,
  href,
  external = false,
}: ExpandingButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="relative inline-flex items-center gap-2.5 px-1 py-1 rounded-md overflow-hidden text-foreground-secondary hover:text-accent focus:text-accent focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onFocus={() => setIsExpanded(true)}
      onBlur={() => setIsExpanded(false)}
      whileHover={{ x: 2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      aria-label={label}
    >
      <motion.span
        className="flex-shrink-0"
        animate={{ rotate: isExpanded ? 5 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        {icon}
      </motion.span>
      <motion.span
        initial={false}
        animate={{
          width: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
          marginRight: isExpanded ? 4 : 0,
        }}
        transition={{
          width: { duration: 0.25, ease: [0.32, 0.72, 0, 1] },
          opacity: { duration: 0.2, ease: "easeOut" },
        }}
        className="font-body text-sm font-medium whitespace-nowrap overflow-hidden"
      >
        {label}
      </motion.span>
    </motion.a>
  );
}
