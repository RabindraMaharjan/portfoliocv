"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "Nov 2023 — Present",
    company: "Wealthlane Financial Inc",
    location: "Remote / Canada",
    role: "QA Engineer",
    description: "Orchestrating quality assurance for high-fidelity financial systems. Focused on end-to-end reliability, automated regression infrastructure, and cross-platform mobile verification.",
    stack: ["Cypress", "Selenium", "Mobile QA", "Agile"],
  },
  {
    period: "Jan 2021 — Oct 2023",
    company: "Asterdio Inc",
    location: "Kathmandu, Nepal",
    role: "QA Engineer",
    description: "Engineered comprehensive testing protocols for enterprise-scale applications. Specialized in API performance validation and manual lifecycle management for complex feature sets.",
    stack: ["JMeter", "Postman", "API Testing", "Scrum"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-32">
      <div className="mb-16">
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
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-foreground">{exp.company}</span>
              <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground/60">{exp.location}</span>
            </div>

            <div className="glass rounded-3xl p-8 transition-all hover:border-white/10">
              <h3 className="text-xl font-bold tracking-tight text-foreground">{exp.role}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {exp.stack.map((s) => (
                  <span key={s} className="rounded-full bg-muted/50 px-2.5 py-0.5 text-[10px] font-mono text-muted-foreground border border-white/5">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
