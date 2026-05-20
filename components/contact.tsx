"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";

const EMAIL = "ravinmaharjan1@gmail.com";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Contact
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {/* Gradient card */}
        <div className="relative rounded-2xl border border-border/40 bg-gradient-to-br from-card/80 to-card/30 p-8 sm:p-10 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/[0.04] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/[0.03] rounded-full blur-[60px] translate-y-1/3 -translate-x-1/4" />

          <div className="relative">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h3>

            <p className="mb-6 text-muted-foreground leading-relaxed max-w-md">
              I&apos;m currently looking for new opportunities. Whether you have a question,
              want to discuss potential collaboration, or just want to say hi, my inbox is
              always open.
            </p>

            {/* Email with copy */}
            <div className="mb-8 flex items-center gap-3">
              <code className="text-sm font-mono text-primary/80 bg-primary/[0.06] px-3 py-1.5 rounded-lg border border-primary/10">
                {EMAIL}
              </code>
              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-primary/[0.06] text-primary/60 hover:text-primary hover:bg-primary/[0.12] border border-primary/10 transition-all"
                aria-label="Copy email address"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
              </button>
              {copied && (
                <motion.span
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-xs text-primary"
                >
                  Copied!
                </motion.span>
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              <motion.a
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-shadow hover:shadow-[0_0_30px_oklch(0.75_0.18_180_/_0.3)]"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="h-4 w-4" />
                Say Hello
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/rabindra-maharjan"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-secondary hover:border-primary/30"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Connect on LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
