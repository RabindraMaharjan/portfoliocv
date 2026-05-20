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
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
          About
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-4"
      >
        <p className="text-muted-foreground leading-relaxed">
          Back in 2021, I embarked on my journey into software quality assurance, and I&apos;ve been
          passionate about ensuring software excellence ever since. My focus is on delivering
          high-quality products through comprehensive testing strategies and meticulous attention
          to detail.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Currently, I work as a{" "}
          <span className="text-foreground font-medium relative inline-block group">
            <span className="relative z-10 hover:text-primary transition-colors cursor-default">QA Engineer at Wealthlane Financial Inc</span>
            <span className="absolute bottom-0 left-0 h-px w-full bg-primary/30 group-hover:bg-primary/60 transition-colors" />
          </span>
          , where I lead quality assurance efforts for enterprise financial software. I specialize in
          end-to-end testing across web and mobile platforms, automation testing with{" "}
          <span className="text-foreground font-medium">Cypress</span> and{" "}
          <span className="text-foreground font-medium">Selenium</span>, and ensuring that our
          products meet the highest standards of quality.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          With over{" "}
          <span className="text-foreground font-medium">4 years of experience</span>, I&apos;ve
          developed expertise in various testing methodologies including functional testing,
          regression testing, API testing with{" "}
          <span className="text-foreground font-medium">Postman</span>, and performance testing
          with <span className="text-foreground font-medium">JMeter</span>. I thrive in{" "}
          <span className="text-foreground font-medium">Agile environments</span> and enjoy
          collaborating with cross-functional teams to deliver exceptional software products.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          When I&apos;m not hunting bugs, you can find me exploring new testing tools, staying
          updated with the latest QA trends, or contributing to improving development processes.
        </p>
      </motion.div>
    </section>
  );
}
