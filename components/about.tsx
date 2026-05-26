"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="scroll-mt-32"
      aria-label="About me"
    >
      <div className="mb-16">
        <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
          Origin Story
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-3xl space-y-6"
      >
        <p className="text-lg text-muted-foreground leading-relaxed">
          Back in 2021, I embarked on my journey into software quality assurance, and I&apos;ve been
          passionate about ensuring software excellence ever since. My focus is on delivering
          high-quality products through comprehensive testing strategies and meticulous attention
          to detail.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed">
          Currently, I work as a{" "}
          <span className="text-foreground font-semibold">QA Engineer at Wealthlane Financial Inc</span>
          , where I lead quality assurance efforts for enterprise financial software. I specialize in
          end-to-end testing across web and mobile platforms, automation testing with{" "}
          <span className="text-foreground font-semibold">Cypress</span> and{" "}
          <span className="text-foreground font-semibold">Selenium</span>, and ensuring that our
          products meet the highest standards of quality.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed">
          With over <span className="text-foreground font-semibold">4 years of experience</span>, I&apos;ve
          developed expertise in various testing methodologies including functional testing,
          regression testing, API testing with <span className="text-foreground font-semibold">Postman</span>,
          and performance testing with <span className="text-foreground font-semibold">JMeter</span>.
        </p>
      </motion.div>
    </section>
  );
}
