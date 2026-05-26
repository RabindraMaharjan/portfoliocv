"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Briefcase, Check, Play, ShieldCheck } from "lucide-react";

const experiences = [
  {
    period: "2023 — Present",
    title: "QA Engineer",
    company: "Wealthlane Financial Inc",
    url: "#",
    description:
      "Lead QA efforts for enterprise financial software products. Set up and maintain comprehensive test documentation, execute end-to-end testing across web and mobile platforms.",
    responsibilities: [
      "End-to-end testing of high-complexity features",
      "Created automated regression test suites using Cypress",
      "Collaborated with dev teams in Agile (Scrum)",
    ],
    skills: ["Cypress", "Selenium", "Agile", "Mobile Testing"],
    testStats: { total: 124, passed: 124, failed: 0 },
  },
  {
    period: "2021 — 2023",
    title: "QA Engineer",
    company: "Asterdio Inc",
    url: "#",
    description:
      "Developed and executed comprehensive software test strategies. Conducted performance testing and manual API testing.",
    responsibilities: [
      "Performance testing using JMeter and Postman",
      "Managed bug life cycle — troubleshot and isolated bugs",
      "Mentored junior team members",
    ],
    skills: ["JMeter", "Postman", "API Testing", "Performance"],
    testStats: { total: 86, passed: 84, failed: 2 },
  },
];

function TestSuiteVisual({ stats }: { stats: { total: number, passed: number, failed: number } }) {
  return (
    <div className="mt-4 rounded-lg bg-background/40 p-3 border border-border/30 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground">
          <Play size={10} className="text-primary" />
          <span>RUNNING TEST SUITE...</span>
        </div>
        <ShieldCheck size={12} className="text-primary/50" />
      </div>
      <div className="flex gap-1">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0.2, opacity: 0.3 }}
            animate={{
              scaleY: [0.2, 1, 0.2],
              opacity: [0.3, 1, 0.3],
              backgroundColor: i < (stats.passed / stats.total) * 20 ? "var(--color-primary)" : "var(--color-destructive)"
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
            className="h-3 w-1 rounded-full bg-primary"
          />
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between text-[10px] font-mono">
        <span className="text-emerald-500">PASSED: {stats.passed}</span>
        <span className="text-destructive">FAILED: {stats.failed}</span>
        <span className="text-muted-foreground">TOTAL: {stats.total}</span>
      </div>
    </div>
  );
}

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Experience
        </h2>
      </motion.div>

      <ol className="group/list space-y-12">
        {experiences.map((exp, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + index * 0.2 }}
          >
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition-all duration-300 lg:-inset-x-6 lg:block lg:group-hover:bg-primary/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_oklch(0.75_0.18_180_/_0.1)] lg:group-hover:backdrop-blur-sm" />

              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                {exp.period}
              </header>

              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-foreground">
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary group/link text-base transition-colors"
                    href={exp.url}
                  >
                    <span>{exp.title} · {exp.company}</span>
                    <ArrowUpRight className="inline-block h-4 w-4 ml-1 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal text-muted-foreground">
                  {exp.description}
                </p>

                <TestSuiteVisual stats={exp.testStats} />

                <ul className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <li key={skill} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
