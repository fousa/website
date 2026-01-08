"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, ReactNode } from "react";

interface TooltipProps {
  content: string;
  children: ReactNode;
}

export default function Tooltip({ content, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-flex items-center justify-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 bottom-full mb-3 pointer-events-none z-50"
            style={{ transform: 'translateX(-50%)' }}
          >
            <div className="px-3 py-1.5 bg-foreground text-background text-sm font-body rounded-md whitespace-nowrap shadow-lg">
              {content}
            </div>
            <div className="absolute left-1/2 top-full w-0 h-0 -mt-px" style={{ transform: 'translateX(-50%)', borderLeft: '4px solid transparent', borderRight: '4px solid transparent', borderTop: '4px solid var(--foreground)' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
