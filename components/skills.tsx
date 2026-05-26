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
      <div className="mb-16">
        <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
          Core Capabilities
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass rounded-3xl p-8 hover:border-primary/20 transition-all"
          >
            <h3 className="mb-6 font-bold tracking-tight">{category.title}</h3>
            <div className="grid gap-3">
              {category.skills.map((skill) => (
                <div key={skill} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 size={14} className="text-foreground shrink-0" />
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
