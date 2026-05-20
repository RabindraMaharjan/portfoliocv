"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Briefcase } from "lucide-react";

const experiences = [
  {
    period: "2023 — Present",
    title: "QA Engineer",
    company: "Wealthlane Financial Inc",
    url: "#",
    description:
      "Lead QA efforts for enterprise financial software products. Set up and maintain comprehensive test documentation, execute end-to-end testing across web and mobile platforms, and manage the full bug life cycle from reporting to verification.",
    responsibilities: [
      "End-to-end testing of high-complexity features across web and mobile (Android & iOS)",
      "Created automated regression test suites using Cypress and Selenium",
      "Collaborated with development teams and Product owners in Agile (Scrum) environment",
    ],
    skills: ["Cypress", "Selenium", "Agile", "E2E Testing", "Mobile Testing", "Jira"],
  },
  {
    period: "2021 — 2023",
    title: "QA Engineer",
    company: "Asterdio Inc",
    url: "#",
    description:
      "Developed and executed comprehensive software test strategies. Conducted performance testing and manual API testing while mentoring junior team members and collaborating with cross-functional teams.",
    responsibilities: [
      "Performance testing using JMeter and manual API testing using Postman",
      "Managed bug life cycle — troubleshot, isolated, and verified bug fixes",
      "Mentored junior team members and followed Agile methodologies (Scrum/Kanban)",
    ],
    skills: ["JMeter", "Postman", "API Testing", "Scrum", "Kanban", "Performance Testing"],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          Experience
        </h2>
      </motion.div>

      <div>
        <ol className="group/list relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-primary/30 via-border/50 to-transparent hidden sm:block" />

          {experiences.map((exp, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.2 }}
              className="mb-12 last:mb-0"
            >
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition-all duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-primary/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_oklch(0.75_0.18_180_/_0.1)] lg:group-hover:backdrop-blur-sm" />

                {/* Timeline dot */}
                <div className="absolute -left-[5px] top-3 hidden sm:flex">
                  <div className="h-2.5 w-2.5 rounded-full border-2 border-primary/40 bg-background transition-colors group-hover:border-primary group-hover:bg-primary/20" />
                </div>

                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2"
                  aria-label={exp.period}
                >
                  <div className="flex items-center gap-2">
                    <Briefcase size={12} className="text-primary/50 hidden sm:block" />
                    <span>{exp.period}</span>
                  </div>
                </header>

                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base transition-colors"
                        href={exp.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${exp.title} at ${exp.company}`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>
                          {exp.title} ·{" "}
                          <span className="inline-block">
                            {exp.company}
                            <ArrowUpRight
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              aria-hidden="true"
                            />
                          </span>
                        </span>
                      </a>
                    </div>
                  </h3>

                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {exp.description}
                  </p>

                  <ul className="mt-3 space-y-2" aria-label="Key responsibilities">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-2 h-1 w-1 rounded-full bg-primary/60 shrink-0" />
                        <span className="hover:text-foreground/80 transition-colors">{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                    {exp.skills.map((skill) => (
                      <li key={skill}>
                        <span className="inline-flex items-center rounded-full bg-primary/[0.08] px-3 py-1 text-xs font-medium leading-5 text-primary transition-all hover:bg-primary/[0.15] hover:scale-[1.02]">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <a
            className="inline-flex items-center font-medium leading-tight text-foreground group"
            aria-label="View Full Résumé"
            href="/resume.pdf"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-primary motion-reduce:transition-none">
                View Full Résumé
              </span>
              <span className="whitespace-nowrap">
                <ArrowUpRight
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
