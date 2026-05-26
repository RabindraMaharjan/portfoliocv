"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6">
      <nav
        className={`flex items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-500 ${
          scrolled
            ? "glass shadow-2xl scale-100"
            : "bg-transparent scale-100"
        }`}
      >
        <Link href="/" className="px-4 py-2 text-sm font-black tracking-tighter">
          RM<span className="text-muted-foreground">.</span>
        </Link>

        <div className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground transition-all hover:text-foreground hover:bg-white/[0.05]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="h-4 w-[1px] bg-white/10 mx-2" />

        <div className="flex items-center gap-1">
          <ModeToggle />
          <Link
            href="/resume.pdf"
            className="hidden rounded-full bg-foreground px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-background transition-transform active:scale-95 sm:block"
          >
            Resume
          </Link>
        </div>
      </nav>
    </header>
  );
}
