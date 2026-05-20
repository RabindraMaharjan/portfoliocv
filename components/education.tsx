"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Information and Communication Technology (BICT)",
    institution: "Virinchi College",
    achievement: "CGPA: 3.40",
    icon: GraduationCap,
    year: "2020",
  },
  {
    degree: "Higher Secondary (Science)",
    institution: "DAV College",
    achievement: "Second Division",
    icon: GraduationCap,
    year: "2016",
  },
  {
    degree: "Secondary Education",
    institution: "Deepmala Secondary English Boarding School",
    achievement: "First Division",
    icon: Award,
    year: "2014",
  },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      ref={ref}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Education"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Education
        </h2>
      </motion.div>

      <ol className="group/list relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-primary/30 via-border/50 to-transparent hidden sm:block" />

        {education.map((edu, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.15 }}
            className="mb-10 last:mb-0"
          >
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-primary/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_oklch(0.75_0.18_180_/_0.1)] lg:group-hover:backdrop-blur-sm" />

              <div className="z-10 mb-2 mt-1 flex items-center sm:col-span-2">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.08] text-primary ring-1 ring-primary/20 transition-all duration-300 group-hover:bg-primary/[0.15] group-hover:ring-primary/40 group-hover:scale-110">
                  <edu.icon size={18} />
                </div>
                <span className="ml-3 hidden sm:inline text-xs font-mono text-muted-foreground/60">{edu.year}</span>
              </div>

              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-foreground group-hover:text-primary transition-colors duration-300">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{edu.institution}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary/[0.08] px-3 py-1 text-xs font-medium text-primary ring-1 ring-primary/10">
                  <span className="h-1 w-1 rounded-full bg-primary/60" />
                  {edu.achievement}
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
