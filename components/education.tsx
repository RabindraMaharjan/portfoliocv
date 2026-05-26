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
      <div className="mb-20">
        <h2 className="section-label">
          Academic Foundation
        </h2>
      </div>

      <div className="space-y-8">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.1 }}
            className="glass group relative overflow-hidden rounded-[2.5rem] p-10 transition-all hover:border-primary/20 dark:hover:bg-white/[0.01]"
          >
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold tracking-tight text-foreground leading-snug">{edu.degree}</h3>
                <div className="flex items-center gap-3 text-sm font-semibold text-muted-foreground/80">
                  <span>{edu.school}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-border" />
                  <span className="text-foreground/60 font-mono text-[10px] font-bold uppercase tracking-widest">{edu.grade}</span>
                </div>
              </div>
            </div>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground font-medium max-w-2xl">
              {edu.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
