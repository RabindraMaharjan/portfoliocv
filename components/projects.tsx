"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

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

export function Projects() {
  return (
    <section id="work" className="scroll-mt-32">
      <div className="mb-16">
        <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
          Selected Work
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group glass relative flex flex-col justify-between overflow-hidden rounded-[2rem] p-8 transition-all hover:border-primary/20 dark:hover:bg-white/[0.02] hover:bg-black/[0.02]"
          >
            <div>
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-bold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <Github size={18} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                  <ExternalLink size={18} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>

            <div className="mt-8">
              <div className="mb-4 text-[10px] font-mono uppercase tracking-[0.2em] text-primary/80 font-bold">
                Impact: {project.impact}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-full bg-muted/50 px-3 py-1 text-[10px] font-mono text-muted-foreground border border-border/30">
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
