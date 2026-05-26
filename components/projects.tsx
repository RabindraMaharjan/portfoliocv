"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Enterprise Automation Framework",
    description: "Architected a scalable E2E testing solution for a high-traffic fintech platform, reducing regression time by 70%.",
    tech: ["Cypress", "TypeScript", "GitHub Actions"],
    impact: "99.9% Build Reliability",
    link: "#",
  },
  {
    title: "Mobile Quality Suite",
    description: "Comprehensive automated testing for Android and iOS banking applications using Appium and BrowserStack.",
    tech: ["Appium", "Java", "BrowserStack"],
    impact: "Zero Critical Production Bugs",
    link: "#",
  },
  {
    title: "API Performance Tooling",
    description: "Custom performance testing suite designed to simulate 10k+ concurrent users for microservices validation.",
    tech: ["JMeter", "Postman", "Grafana"],
    impact: "30% Throughput Increase",
    link: "#",
  },
];

const springTransition = { type: "spring", stiffness: 100, damping: 20 };

export function Projects() {
  return (
    <section id="work" className="scroll-mt-32">
      <div className="mb-20">
        <h2 className="section-label">
          Selected Work
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ ...springTransition, delay: i * 0.1 }}
            className="group glass relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] p-10 transition-all hover:border-primary/20 dark:hover:bg-white/[0.01] hover:bg-black/[0.01]"
          >
            <div>
              <div className="flex items-start justify-between">
                <h3 className="text-3xl font-bold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <div className="flex gap-4">
                  <Github size={20} className="text-muted-foreground/60 hover:text-foreground cursor-pointer transition-colors" />
                  <ExternalLink size={20} className="text-muted-foreground/60 hover:text-foreground cursor-pointer transition-colors" />
                </div>
              </div>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground font-medium">
                {project.description}
              </p>
            </div>

            <div className="mt-12">
              <div className="mb-5 text-[10px] font-mono uppercase tracking-[0.3em] text-primary/60 font-black">
                Impact: {project.impact}
              </div>
              <div className="flex flex-wrap gap-2.5">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-full bg-muted/40 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground border border-white/5">
                    {t}
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
