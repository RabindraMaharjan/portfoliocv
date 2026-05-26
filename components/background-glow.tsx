"use client";

import { motion } from "framer-motion";

export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
      {/* Liquid Glow One */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.4, 1],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-foreground/20 blur-[180px]"
      />

      {/* Liquid Glow Two */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1.2, 1, 1.2],
          opacity: [0.02, 0.06, 0.02],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-foreground/15 blur-[200px]"
      />

      {/* Center Subtle Fade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_90%)]" />
    </div>
  );
}
