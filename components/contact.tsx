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
      <div className="mb-20">
        <h2 className="section-label">
          Let&apos;s Connect
        </h2>
      </div>

      <div className="glass rounded-[3rem] p-10 sm:p-20 relative overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-foreground/5 blur-[100px] pointer-events-none" />

        <div className="relative max-w-3xl">
          <h3 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Have an opportunity <br /> in mind?
          </h3>
          <p className="mt-8 text-xl text-muted-foreground font-medium leading-relaxed tracking-tight">
            I am currently open to new roles where I can apply my 4+ years of
            QA expertise to build robust software systems.
          </p>

          <div className="mt-14 flex flex-col gap-10">
            <div className="flex items-center gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-muted/40 text-foreground border border-border/40">
                <Mail size={24} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="section-label">Email</span>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-3 text-xl sm:text-2xl font-bold text-foreground hover:text-muted-foreground transition-colors group tracking-tight"
                >
                  {EMAIL}
                  <div className="relative h-5 w-5">
                    {copied ? (
                      <Check size={20} className="text-emerald-500" />
                    ) : (
                      <Copy size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-5">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-10 py-5 text-xs font-bold uppercase tracking-widest text-background transition-all hover:opacity-90 shadow-xl"
              >
                Send message
                <ArrowUpRight size={20} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/rabindra-maharjan"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-10 py-5 text-xs font-bold uppercase tracking-widest text-foreground transition-all hover:bg-muted/40"
              >
                LinkedIn
                <ArrowUpRight size={20} className="text-muted-foreground" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
