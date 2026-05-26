"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Tribhuvan University",
    period: "2016 — 2020",
    description: "Specialized in Software Engineering and Quality Management Systems.",
  },
];

export function Education() {
  return (
    <section id="education" className="scroll-mt-32">
      <div className="mb-16">
        <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
          Academic Foundation
        </h2>
      </div>

      <div className="space-y-6">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass group relative overflow-hidden rounded-3xl p-8 transition-all"
          >
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-foreground">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.school}</p>
              </div>
              <span className="text-xs font-mono text-muted-foreground">{edu.period}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-2xl">
              {edu.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
