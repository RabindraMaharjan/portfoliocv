"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const skillCategories = [
  {
    title: "Testing Strategy",
    skills: ["Functional", "Regression", "Smoke", "SIT", "UAT", "E2E Testing"],
  },
  {
    title: "Automation & Tooling",
    skills: ["Cypress", "Selenium", "JMeter", "Postman", "REST API", "SQL"],
  },
  {
    title: "Processes",
    skills: ["Agile/Scrum", "SDLC", "STLC", "Jira", "TestRail", "Bug Lifecycle"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-32">
      <div className="mb-20">
        <h2 className="section-label">
          Core Capabilities
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: idx * 0.1 }}
            className="glass rounded-[2.5rem] p-10 hover:border-primary/20 transition-all dark:hover:bg-white/[0.01]"
          >
            <h3 className="mb-8 text-xl font-bold tracking-tight text-foreground">{category.title}</h3>
            <div className="grid gap-5">
              {category.skills.map((skill) => (
                <div key={skill} className="flex items-center gap-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  <CheckCircle2 size={16} className="text-foreground/40 shrink-0" />
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
