"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

interface ParallaxLogoProps {
  size?: number;
  name?: string;
  role?: string;
}

export default function ParallaxLogo({ size = 200, name, role }: ParallaxLogoProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth animation
  const springConfig = { damping: 20, stiffness: 150 };
  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  // 3D rotation effect - only when hovering (no vertical movement)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovering) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) - 0.5;
    const y = ((e.clientY - rect.top) / rect.height) - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setIsExpanded(false);
    // Reset position smoothly
    mouseX.set(0);
    mouseY.set(0);
  };

  if (!isMounted) {
    return (
      <div style={{ width: size, height: size }}>
        <Image
          src="/images/fousa.svg"
          alt="Fousa Logo"
          width={size}
          height={size}
          priority
          className="logo-dark-mode"
        />
      </div>
    );
  }

  return (
    <motion.div
      style={{
        x,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={() => setIsExpanded(true)}
      onBlur={() => setIsExpanded(false)}
    >
      <div className="flex items-center gap-4 md:gap-12 w-full justify-center md:justify-start">
        {/* Logo */}
        <div className="relative flex-shrink-0 w-32 h-32 md:w-64 md:h-64 lg:w-80 lg:h-80">
          <Image
            src="/images/fousa.svg"
            alt="Fousa Logo"
            width={size}
            height={size}
            priority
            className="drop-shadow-2xl w-full h-full logo-dark-mode"
          />
        </div>

        {/* Expanding Name & Role - Only on Desktop */}
        {name && role && (
          <motion.div
            initial={false}
            animate={{
              width: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{
              width: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            }}
            className="hidden md:flex flex-col items-center whitespace-nowrap"
            style={{ overflow: isExpanded ? "visible" : "hidden" }}
          >
            <motion.h2
              animate={{
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{
                duration: 0.4,
                delay: 0.15,
                ease: "easeOut"
              }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground"
            >
              {name}
            </motion.h2>
            <motion.p
              animate={{
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{
                duration: 0.4,
                delay: 0.2,
                ease: "easeOut"
              }}
              className="font-body text-xl md:text-2xl lg:text-3xl text-foreground-secondary mt-2"
            >
              {role}
            </motion.p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
