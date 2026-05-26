"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const experiences = [
  {
    period: "July 2023 — Present",
    company: "Wealthlane Financial Inc",
    location: "Remote / Nepal",
    role: "QA Engineer",
    description: "Orchestrating quality assurance for high-fidelity financial systems. Leading E2E testing across web and mobile platforms with a focus on precision and automation.",
    details: [
      "Set up, maintain, and executed comprehensive test documentation and standards aligned with company policies and processes.",
      "Plan and perform end-to-end testing of high-complexity features across web and mobile platforms (Android & iOS).",
      "Managed the full bug life cycle — reporting, tracking, verifying fixes, and documenting defects using standardized bug-tracking tools.",
      "Collaborated closely with development teams and Product owners in an Agile (Scrum) environment.",
      "Communicated testing progress, blockers, improvements, and outcomes to supervisors, team, and clients throughout the SDLC.",
      "Assisted with post-release/post-implementation testing and contributed to production deployment and release processes.",
      "Continuously researched and evaluated new testing tools and practices to maximize development and QA efficiency.",
      "Created automated regression test suites using Cypress and Selenium (basic).",
      "Proactively shares new ideas and adapts quickly to changing project requirements."
    ],
    stack: ["Cypress", "Selenium", "Mobile QA", "Agile", "Scrum"],
  },
  {
    period: "July 2021 — July 2023",
    company: "Asterdio Inc",
    location: "Kathmandu, Nepal",
    role: "QA Engineer",
    description: "Engineered comprehensive testing protocols for enterprise-scale applications. Specialized in performance validation and cross-functional quality leadership.",
    details: [
      "Developed and executed software test cases and test plans for various applications; maintained continuous test coverage.",
      "Performed both structured and exploratory testing techniques to uncover defects across multiple projects.",
      "Conducted performance testing using JMeter and manual API testing using Postman.",
      "Managed bug life cycle — troubleshot, isolated, and verified bug fixes with thorough defect documentation.",
      "Mentored junior team members and collaborated with cross-functional teams to ensure high-quality software releases.",
      "Participated in post-release and post-implementation testing; communicated results and improvements to the team.",
      "Followed Agile development methodologies (Scrum/Kanban) to align with sprint cycles and product delivery goals."
    ],
    stack: ["JMeter", "Postman", "API Testing", "Scrum", "Kanban"],
  },
];

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="scroll-mt-32">
      <div className="mb-16 text-left">
        <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
          Professional Trajectory
        </h2>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative grid gap-8 md:grid-cols-[200px_1fr]"
          >
            {/* Left side: Company & Time */}
            <div className="flex flex-col gap-1 text-left">
              <span className="text-sm font-bold tracking-tight text-foreground">{exp.company}</span>
              <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60">{exp.location}</span>
            </div>

            {/* Right side: Card */}
            <div className="glass rounded-[2rem] p-8 transition-all hover:border-primary/20 dark:hover:border-white/10 dark:hover:bg-white/[0.02] hover:bg-black/[0.02] text-left">
              <h3 className="text-xl font-bold tracking-tight text-foreground">{exp.role}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>

              <AnimatePresence>
                {expandedIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-6 space-y-3 border-t border-border/50 pt-6">
                      {exp.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((s) => (
                    <span key={s} className="rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-mono text-muted-foreground border border-white/5">
                      {s}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary hover:text-foreground transition-colors"
                >
                  {expandedIndex === i ? (
                    <>Show Less <ChevronUp size={14} /></>
                  ) : (
                    <>View Details <ChevronDown size={14} /></>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
