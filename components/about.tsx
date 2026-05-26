"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="scroll-mt-32">
      <div className="mb-20">
        <h2 className="section-label">
          Engineering Philosophy
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="max-w-3xl space-y-10"
      >
        <p className="text-xl text-muted-foreground font-medium leading-relaxed tracking-tight">
          Back in 2021, I embarked on my journey into software quality assurance, and I&apos;ve been
          passionate about ensuring software excellence ever since. My focus is on delivering
          high-quality products through comprehensive testing strategies and meticulous attention
          to detail.
        </p>

        <p className="text-xl text-muted-foreground font-medium leading-relaxed tracking-tight">
          Currently, I work as a{" "}
          <span className="text-foreground">QA Engineer at Wealthlane Financial Inc</span>
          , where I lead quality assurance efforts for enterprise financial software. I specialize in
          end-to-end testing across web and mobile platforms, automation testing with{" "}
          <span className="text-foreground font-semibold">Cypress</span> and{" "}
          <span className="text-foreground font-semibold">Selenium</span>.
        </p>

        <p className="text-xl text-muted-foreground font-medium leading-relaxed tracking-tight">
          With over <span className="text-foreground font-semibold">4 years of experience</span>, I&apos;ve
          developed expertise in various testing methodologies including functional testing,
          regression testing, API testing with <span className="text-foreground font-semibold">Postman</span>,
          and performance testing with <span className="text-foreground font-semibold">JMeter</span>.
        </p>
      </motion.div>
    </section>
  );
}
