"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Bug,
  Workflow,
  Wrench,
  Code2,
  Monitor,
  CheckCircle2,
} from "lucide-react";

const skillCategories = [
  {
    title: "Core Testing",
    icon: Bug,
    color: "from-emerald-400/20 to-teal-400/5",
    className: "md:col-span-2 md:row-span-1",
    skills: ["Functional", "Regression", "Smoke", "SIT", "UAT", "E2E"],
  },
  {
    title: "Automation",
    icon: Wrench,
    color: "from-cyan-400/20 to-blue-400/5",
    className: "md:col-span-1 md:row-span-2",
    skills: ["Cypress", "Selenium", "JMeter", "Postman", "REST API"],
  },
  {
    title: "Management",
    icon: Workflow,
    color: "from-violet-400/20 to-purple-400/5",
    className: "md:col-span-1 md:row-span-1",
    skills: ["Jira", "Trello", "TestRail", "Zephyr"],
  },
  {
    title: "Development",
    icon: Code2,
    color: "from-amber-400/20 to-orange-400/5",
    className: "md:col-span-1 md:row-span-1",
    skills: ["Agile", "Scrum", "SDLC", "STLC", "HTML/CSS", "JS"],
  },
  {
    title: "Platforms",
    icon: Monitor,
    color: "from-rose-400/20 to-pink-400/5",
    className: "md:col-span-1 md:row-span-1",
    skills: ["Web", "Mobile (Android/iOS)", "SQL"],
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-6 backdrop-blur-md hover:border-primary/30 transition-colors ${category.className}`}
          >
            {/* Glassmorphism background effect */}
            <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${category.color} blur-2xl opacity-50 group-hover:opacity-80 transition-opacity`} />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <category.icon size={20} />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -5 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: idx * 0.1 + sIdx * 0.05 }}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/50 border border-border/50 text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary/20 transition-all cursor-default"
                  >
                    <CheckCircle2 size={12} className="text-primary/60" />
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
