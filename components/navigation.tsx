"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
    <header className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className={`flex items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-500 pointer-events-auto ${
          scrolled
            ? "glass scale-100"
            : "bg-transparent scale-100"
        }`}
      >
        <Link href="/" className="px-4 py-2 text-sm font-bold tracking-tighter hover:text-primary transition-colors">
          Rabindra<span className="text-muted-foreground">.</span>
        </Link>

        <div className="hidden items-center gap-0.5 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground transition-all hover:text-foreground hover:bg-foreground/[0.03] dark:hover:bg-white/[0.03]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="h-4 w-[1px] bg-border/40 mx-2" />

        <div className="flex items-center gap-1">
          <ModeToggle />
          <Link
            href="/resume.pdf"
            target="_blank"
            className="flex rounded-full border border-border px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground transition-all hover:bg-foreground hover:text-background active:scale-95"
          >
            Resume
          </Link>
        </div>
      </motion.nav>
    </header>
  );
}
