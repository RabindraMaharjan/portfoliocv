"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "2023 — Present",
    title: "QA Engineer",
    company: "Wealthlane Financial Inc",
    description: "Leading QA efforts for enterprise financial software. Specializing in end-to-end testing across web and mobile platforms with high-complexity features.",
    skills: ["Cypress", "Selenium", "E2E Testing", "Mobile Testing"],
  },
  {
    period: "2021 — 2023",
    title: "QA Engineer",
    company: "Asterdio Inc",
    description: "Developed comprehensive test strategies, focusing on performance testing and manual API testing in an Agile environment.",
    skills: ["JMeter", "Postman", "API Testing", "Agile"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-32">
      <div className="mb-12">
        <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          Selected Experience
        </h2>
      </div>

      <div className="grid gap-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group glass relative overflow-hidden rounded-3xl p-8 transition-all hover:border-primary/20"
          >
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div>
                <span className="text-xs font-mono text-muted-foreground">
                  {exp.period}
                </span>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                  {exp.title}
                  <span className="text-muted-foreground font-medium"> · {exp.company}</span>
                </h3>
              </div>
              <ArrowUpRight className="hidden text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 sm:block" />
            </div>

            <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              {exp.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-muted/50 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground border border-border/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
