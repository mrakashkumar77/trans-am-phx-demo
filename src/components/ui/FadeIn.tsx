"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  fullWidth?: boolean;
  id?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 16,
  fullWidth = false,
  id,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const getOffset = () => {
    if (shouldReduceMotion || direction === "none") return { x: 0, y: 0 };
    switch (direction) {
      case "up":
        return { x: 0, y: distance };
      case "down":
        return { x: 0, y: -distance };
      case "left":
        return { x: -distance, y: 0 };
      case "right":
        return { x: distance, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  if (shouldReduceMotion) {
    return (
      <div id={id} className={`${fullWidth ? "w-full" : ""} ${className ?? ""}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Subtle, gentle editorial ease-out
      }}
      className={`${fullWidth ? "w-full" : ""} ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
};

export const FadeInStagger: React.FC<{
  children: React.ReactNode;
  className?: string;
  faster?: boolean;
}> = ({ children, className, faster = false }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: faster ? 0.08 : 0.12,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
