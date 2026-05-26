"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center px-6 py-20 lg:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl"
      >
        <span className="mb-4 inline-block font-mono text-sm tracking-widest text-muted-foreground uppercase">
          QA Engineer · Obsidian Liquid Glass
        </span>

        <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
          Rabindra <br />
          <span className="text-muted-foreground">Maharjan</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Building high-clarity software experiences through disciplined engineering
          and rigorous quality assurance. Currently ensuring precision at
          <span className="text-foreground font-medium"> Wealthlane Financial Inc.</span>
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Explore work
            <ArrowUpRight size={18} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-8 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-muted/50"
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
        <div>
          <div className="text-2xl font-bold tabular-nums">4+ Years</div>
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">QA Experience</div>
        </div>
        <div>
          <div className="text-2xl font-bold tabular-nums">50+</div>
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Products Tested</div>
        </div>
        <div>
          <div className="text-2xl font-bold tabular-nums">Enterprise</div>
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Software Focus</div>
        </div>
      </motion.div>
    </section>
  );
}
