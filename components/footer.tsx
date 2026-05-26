"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="pb-24 pt-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Divider */}
        <div className="mb-12 h-px bg-border/40" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
            Designed &amp; built by{" "}
            <a
              href="https://linkedin.com/in/rabindra-maharjan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              Rabindra Maharjan
            </a>
            {" "}with{" "}
            <span className="text-foreground">Next.js</span>
            {" "}&amp;{" "}
            <span className="text-foreground">Tailwind CSS</span>.
          </p>

          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/40">
            &copy; 2026 All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
