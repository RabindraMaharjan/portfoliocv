"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";

const roles = [
  "Quality Assurance Engineer",
  "Automation Tester",
  "Bug Detective",
  "Software Quality Advocate",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function useTypingEffect(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseDuration = 2000) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const animate = useCallback(() => {
    const currentWord = words[currentWordIndex];

    if (!isDeleting) {
      if (currentText.length < currentWord.length) {
        return setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        return setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    } else {
      if (currentText.length > 0) {
        return setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return undefined;
      }
    }
  }, [currentText, currentWordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseDuration]);

  useEffect(() => {
    const timeout = animate();
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [animate]);

  return currentText;
}

function HeroGeometry() {
  const shapes = useMemo(() => [
    { x: "10%", y: "15%", size: 60, rotate: 45, delay: 0, duration: 20 },
    { x: "85%", y: "20%", size: 40, rotate: 0, delay: 2, duration: 25 },
    { x: "75%", y: "70%", size: 50, rotate: 30, delay: 4, duration: 22 },
    { x: "15%", y: "75%", size: 35, rotate: 60, delay: 1, duration: 18 },
    { x: "50%", y: "10%", size: 25, rotate: 15, delay: 3, duration: 24 },
    { x: "90%", y: "50%", size: 30, rotate: 75, delay: 5, duration: 20 },
  ], []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute border border-primary/[0.08] rounded-lg"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
          }}
          initial={{ opacity: 0, rotate: shape.rotate, scale: 0.5 }}
          animate={{
            opacity: [0, 0.6, 0],
            rotate: [shape.rotate, shape.rotate + 180, shape.rotate + 360],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const typedRole = useTypingEffect(roles);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const stats = useMemo(() => [
    { value: "4+", label: "Years Experience" },
    { value: "50+", label: "Projects Tested" },
    { value: "1k+", label: "Test Cases" },
    { value: "2", label: "Companies" },
  ], []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-primary/[0.04] blur-[120px] animate-float" />
        <div className="absolute -bottom-[30%] -right-[20%] w-[60%] h-[60%] rounded-full bg-primary/[0.03] blur-[100px] animate-float-delayed" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-primary/[0.02] blur-[80px] animate-float-slow" />
      </div>

      {/* Geometric shapes */}
      <HeroGeometry />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-8 inline-flex">
            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/[0.08] text-primary text-sm font-medium border border-primary/20 backdrop-blur-sm animate-glow-pulse">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Open to Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] tracking-tight mb-2">
              Rabindra
            </h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/50 animate-gradient-text">
                Maharjan
              </span>
            </h1>
          </motion.div>

          {/* Typing effect */}
          <motion.div variants={itemVariants} className="mb-8 h-10 flex items-center justify-center">
            {mounted && (
              <p className="text-xl sm:text-2xl text-muted-foreground font-mono">
                <span className="text-primary/70">&gt;</span>{" "}
                <span>{typedRole}</span>
                <span className="typed-cursor text-primary ml-0.5">|</span>
              </p>
            )}
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12"
          >
            I ensure software quality through meticulous testing and verification.
            With <span className="text-foreground font-medium">4+ years</span> of experience,
            I specialize in end-to-end testing, automation, and improving QA processes
            for enterprise software products.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto mb-14"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="relative group p-5 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: "inset 0 1px 0 0 oklch(0.75 0.18 180 / 0.1)" }} />
                <div className="relative">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-1 tabular-nums">{stat.value}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#about"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm overflow-hidden transition-shadow hover:shadow-[0_0_30px_oklch(0.75_0.18_180_/_0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore My Work
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </motion.a>
            <motion.a
              href="mailto:ravinmaharjan1@gmail.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-medium text-sm transition-all hover:bg-secondary hover:border-primary/30"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase">Scroll</span>
            <ArrowDown size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
