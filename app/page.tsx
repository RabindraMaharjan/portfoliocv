"use client";

import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Workflow } from "@/components/workflow";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Spotlight } from "@/components/spotlight";
import { BackgroundGlow } from "@/components/background-glow";

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-foreground selection:text-background transition-colors duration-500">
      {/* Background Layering */}
      <BackgroundGlow />
      <div className="fixed inset-0 -z-10 bg-dots opacity-[0.02] dark:opacity-[0.04]" />
      <Spotlight />

      <Navigation />

      <main className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
        <Hero />

        <div className="space-y-40 py-24">
          <About />
          <Projects />
          <Experience />
          <Education />
          <Workflow />
          <Skills />
          <Contact />
        </div>

        <Footer />
      </main>
    </div>
  );
}
