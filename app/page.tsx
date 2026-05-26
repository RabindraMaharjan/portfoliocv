"use client";

import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Workflow } from "@/components/workflow";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-primary/10 selection:text-primary">
      {/* Subtle background texture */}
      <div className="fixed inset-0 -z-10 bg-dots opacity-[0.03] dark:opacity-[0.05]" />

      <Navigation />

      <main className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
        <Hero />

        <div className="space-y-32 py-24">
          <About />
          <Projects />
          <Experience />
          <Workflow />
          <Skills />
          <Contact />
        </div>

        <Footer />
      </main>
    </div>
  );
}
