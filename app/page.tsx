"use client";

import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Spotlight } from "@/components/spotlight";
import { MeshBackground } from "@/components/mesh-background";
import { StickyHeader } from "@/components/sticky-header";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans noise-bg">
      <MeshBackground />
      <Spotlight />
      <Navigation />

      <Hero />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <StickyHeader />

          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Skills />
            <Education />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
