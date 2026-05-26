"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ModeToggle } from "./mode-toggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#experience" },
  { label: "Skills", href: "#skills" },
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <nav
        className={`flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 ${
          scrolled
            ? "glass shadow-2xl shadow-background/50 scale-100"
            : "bg-transparent scale-105"
        }`}
      >
        <Link href="/" className="px-3 py-1 text-sm font-bold tracking-tighter">
          RM<span className="text-muted-foreground">.</span>
        </Link>

        <div className="mx-2 h-4 w-[1px] bg-border/50" />

        <div className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/50"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mx-2 h-4 w-[1px] bg-border/50 sm:hidden" />

        <ModeToggle />
      </nav>
    </header>
  );
}
