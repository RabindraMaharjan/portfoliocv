"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "EDUCATION", href: "#education" },
  { label: "CONTACT", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/rabindra-maharjan", icon: Linkedin },
  { label: "Email", href: "mailto:ravinmaharjan1@gmail.com", icon: Mail },
  { label: "Phone", href: "tel:+9779861545698", icon: Phone },
];

export function StickyHeader() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            <Link href="/" className="group inline-block">
              <span className="transition-colors group-hover:text-primary">Rabindra</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                Maharjan
              </span>
            </Link>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">
            Quality Assurance Engineer
          </h2>
          <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
            I ensure software quality through meticulous testing and comprehensive QA processes for enterprise applications.
          </p>
        </motion.div>

        {/* Desktop navigation with animated indicator */}
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href;
              return (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                >
                  <Link
                    href={item.href}
                    className="group flex items-center py-3 transition-all"
                  >
                    <span
                      className={`mr-4 h-px transition-all duration-300 ${
                        isActive
                          ? "w-16 bg-primary"
                          : "w-8 bg-muted-foreground/30 group-hover:w-16 group-hover:bg-foreground"
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-dot"
                        className="ml-3 h-1.5 w-1.5 rounded-full bg-primary"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Social links */}
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="ml-1 mt-8 flex items-center gap-5"
        aria-label="Social media"
      >
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative block p-2 text-muted-foreground transition-all hover:text-primary"
              aria-label={link.label}
            >
              <span className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              <link.icon size={20} strokeWidth={1.5} className="relative transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </li>
        ))}
      </motion.ul>
    </header>
  );
}
