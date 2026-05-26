"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Bug,
  Workflow,
  Wrench,
  Code2,
  Monitor,
} from "lucide-react";

const skillCategories = [
  {
    title: "Testing Types",
    icon: Bug,
    color: "from-emerald-400/20 to-teal-400/5",
    skills: [
      { name: "Functional Testing", level: 95 },
      { name: "Regression Testing", level: 95 },
      { name: "Smoke Testing", level: 92 },
      { name: "System Integration Testing", level: 95 },
      { name: "UAT", level: 92 },
      { name: "End-to-End Testing", level: 93 },
    ],
  },
  {
    title: "Automation & Tools",
    icon: Wrench,
    color: "from-cyan-400/20 to-blue-400/5",
    skills: [
      { name: "Cypress", level: 90 },
      { name: "Selenium (Basic)", level: 75 },
      { name: "JMeter", level: 85 },
      { name: "Postman", level: 88 },
      { name: "REST API Testing", level: 85 },
    ],
  },
  {
    title: "Bug Tracking & Management",
    icon: Workflow,
    color: "from-violet-400/20 to-purple-400/5",
    skills: [
      { name: "Jira", level: 95 },
      { name: "Trello", level: 80 },
      { name: "ClickUp", level: 75 },
      { name: "TestRail", level: 82 },
      { name: "Zephyr Scale", level: 78 },
      { name: "Bug Documentation", level: 92 },
    ],
  },
  {
    title: "Development & Methodologies",
    icon: Code2,
    color: "from-amber-400/20 to-orange-400/5",
    skills: [
      { name: "Agile", level: 90 },
      { name: "Scrum", level: 88 },
      { name: "Kanban", level: 82 },
      { name: "SDLC", level: 90 },
      { name: "STLC", level: 92 },
      { name: "HTML/CSS", level: 60 },
      { name: "JavaScript (Basic)", level: 55 },
    ],
  },
  {
    title: "Platforms & Databases",
    icon: Monitor,
    color: "from-rose-400/20 to-pink-400/5",
    skills: [
      { name: "Web Testing", level: 93 },
      { name: "Mobile Testing (Android & iOS)", level: 95 },
      { name: "SQL", level: 72 },
      { name: "MySQL", level: 70 },
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Skills"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Skills
        </h2>
      </motion.div>

      <div className="space-y-10">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + categoryIndex * 0.12 }}
            className="group"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className={`relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} text-primary ring-1 ring-primary/10 transition-all group-hover:ring-primary/25 group-hover:scale-110`}>
                <category.icon size={16} />
              </div>
              <h3 className="text-sm font-semibold text-foreground tracking-wide">{category.title}</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-border/50 to-transparent ml-2" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" aria-label={`${category.title} skills`}>
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: 0.2 + categoryIndex * 0.08 + skillIndex * 0.04,
                  }}
                  className="group/skill relative rounded-lg bg-card/30 border border-border/30 px-3.5 py-2.5 hover:bg-card/60 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-medium text-foreground/80 group-hover/skill:text-foreground transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground tabular-nums">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1 rounded-full bg-border/40 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{
                        duration: 1,
                        delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
