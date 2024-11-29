"use client";

import { motion } from "framer-motion";

export function RevealText({ children, className, delay = 0 }) {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.33, 1, 0.68, 1],
          delay,
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function RevealWord({ children, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
