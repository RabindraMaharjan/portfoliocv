"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";

const EMAIL = "ravinmaharjan1@gmail.com";

export function Contact() {
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
    <section id="contact" className="scroll-mt-32">
      <div className="mb-16">
        <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
          Let&apos;s Connect
        </h2>
      </div>

      <div className="glass rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        {/* Subtle accent blur */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-2xl">
          <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Have an opportunity in mind?
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I am currently open to new roles where I can apply my 4+ years of
            QA expertise to build robust software systems.
          </p>

          <div className="mt-8 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted/50 text-foreground border border-border/50">
                <Mail size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Email</span>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 text-lg font-medium text-foreground hover:text-primary transition-colors group"
                >
                  {EMAIL}
                  {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-bold text-background transition-all"
              >
                Send message
                <ArrowUpRight size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/rabindra-maharjan"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-8 py-4 text-sm font-bold text-foreground transition-all hover:bg-muted/50"
              >
                LinkedIn
                <ArrowUpRight size={18} className="text-muted-foreground" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
