"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export function Spotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        const { clientX, clientY } = e;
        // Adjust spotlight color based on theme
        const color = theme === "dark"
          ? "rgba(255, 255, 255, 0.03)"
          : "rgba(0, 0, 0, 0.03)";

        spotlightRef.current.style.background = `radial-gradient(800px at ${clientX}px ${clientY}px, ${color}, transparent 80%)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [theme]);

  if (!mounted) return null;

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 lg:block hidden"
    />
  );
}
