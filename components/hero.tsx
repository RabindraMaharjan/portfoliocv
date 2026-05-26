"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";

const springTransition = { type: "spring", stiffness: 100, damping: 20 };

export function Hero() {
  return (
    <section className="relative flex min-h-[95vh] flex-col justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springTransition, delay: 0.1 }}
        className="max-w-4xl"
      >
        <span className="section-label mb-6 inline-block">
          Quality Assurance Engineer · 001
        </span>

        <h1 className="text-balance text-6xl font-bold tracking-tight text-foreground sm:text-8xl lg:text-9xl">
          <span className="text-gradient">Rabindra</span> <br />
          <span className="text-muted-foreground/40">Maharjan</span>
        </h1>

        <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-2xl font-medium tracking-tight">
          Building high-clarity software experiences through disciplined engineering
          and rigorous quality assurance. Currently ensuring precision at
          <span className="text-foreground"> Wealthlane Financial Inc.</span>
        </p>

        <div className="mt-14 flex flex-wrap gap-5">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={springTransition}
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-10 py-5 text-xs font-bold uppercase tracking-widest text-background transition-all hover:opacity-90 shadow-xl"
          >
            Explore work
            <ArrowUpRight size={18} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03, backgroundColor: "var(--muted)" }}
            whileTap={{ scale: 0.97 }}
            transition={springTransition}
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-10 py-5 text-xs font-bold uppercase tracking-widest text-foreground transition-all"
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
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-32 grid grid-cols-2 gap-12 border-t border-border/40 pt-10 sm:grid-cols-3 lg:grid-cols-4"
      >
        <div className="flex flex-col gap-2">
          <div className="text-3xl font-bold tabular-nums tracking-tighter">4+ Years</div>
          <div className="section-label">Experience</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-3xl font-bold tabular-nums tracking-tighter">50+</div>
          <div className="section-label">Products</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-3xl font-bold tabular-nums tracking-tighter">Enterprise</div>
          <div className="section-label">Focus</div>
        </div>
      </motion.div>
    </section>
  );
}
