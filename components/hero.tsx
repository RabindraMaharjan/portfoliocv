"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl"
      >
        <span className="mb-4 inline-block font-mono text-xs tracking-widest text-muted-foreground uppercase">
          QA Engineer
        </span>

        <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
          <span className="text-gradient">Rabindra</span> <br />
          <span className="text-muted-foreground/60">Maharjan</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Building high-clarity software experiences through disciplined engineering
          and rigorous quality assurance. Currently ensuring precision at
          <span className="text-foreground font-medium"> Wealthlane Financial Inc.</span>
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-bold text-background transition-all hover:bg-foreground/90"
          >
            Explore work
            <ArrowUpRight size={18} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "var(--muted)" }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-8 py-4 text-sm font-bold text-foreground transition-all"
          >
            Open resume
            <FileText size={18} className="text-muted-foreground" />
          </motion.a>
        </div>
      </motion.div>

      {/* Hero Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-24 grid grid-cols-2 gap-8 border-t border-border/50 pt-8 sm:grid-cols-3 lg:grid-cols-4"
      >
        <div className="flex flex-col gap-1">
          <div className="text-2xl font-bold tabular-nums tracking-tight">4+ Years</div>
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">QA Experience</div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-2xl font-bold tabular-nums tracking-tight">50+</div>
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Products Tested</div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-2xl font-bold tabular-nums tracking-tight">Enterprise</div>
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Software Focus</div>
        </div>
      </motion.div>
    </section>
  );
}
