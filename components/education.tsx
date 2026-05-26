"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Information and Communication Technology (BICT)",
    school: "Virinchi College",
    grade: "CGPA: 3.40",
    description: "In-depth study of information systems, communication technologies, and software engineering principles.",
  },
  {
    degree: "Higher Secondary (Science)",
    school: "DAV College",
    grade: "Second Division",
    description: "Focused on Physics, Chemistry, and Mathematics.",
  },
  {
    degree: "Secondary Education",
    school: "Deepmala Secondary English Boarding School",
    grade: "First Division",
    description: "General science and mathematics foundation.",
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
            whileHover={{ y: -4 }}
            className="glass group relative overflow-hidden rounded-3xl p-8 transition-all hover:border-primary/20 dark:hover:border-white/10"
          >
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold tracking-tight text-foreground leading-snug">{edu.degree}</h3>
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground/80">
                  <span>{edu.school}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span className="text-primary/80 font-mono text-xs">{edu.grade}</span>
                </div>
              </div>
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
