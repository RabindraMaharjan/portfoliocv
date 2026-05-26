"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="pb-16 pt-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {/* Divider */}
        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

        <div className="space-y-3">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Designed &amp; built by{" "}
            <a
              href="https://linkedin.com/in/rabindra-maharjan"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-primary transition-colors"
            >
              Rabindra Maharjan
            </a>
            {" "}with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-primary transition-colors"
            >
              Next.js
            </a>
            {" "}&amp;{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-primary transition-colors"
            >
              Tailwind CSS
            </a>.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
