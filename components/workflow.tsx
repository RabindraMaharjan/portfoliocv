"use client";

import { motion } from "framer-motion";
import { Sparkles, Terminal, Cpu, Zap } from "lucide-react";

const tools = [
  {
    name: "Cursor",
    role: "Primary Engineering Cockpit",
    description: "Leveraging AI-native editing for rapid test script development and framework refactoring.",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    icon: Terminal,
  },
  {
    name: "Claude 3.5",
    role: "Strategic Reasoning Lane",
    description: "Complex test case generation, documentation drafting, and deep-dive bug analysis.",
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    icon: Sparkles,
  },
  {
    name: "GitHub Copilot",
    role: "Real-time Scripting Partner",
    description: "Accelerating boilerplate automation and suggesting optimized selector strategies.",
    color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    icon: Cpu,
  },
  {
    name: "DeepSeek",
    role: "Alternative Reasoning Lane",
    description: "Cross-verifying complex logic and optimizing SQL queries for database testing.",
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    icon: Zap,
  },
];

export function Workflow() {
  return (
    <section id="workflow" className="scroll-mt-32">
      <div className="mb-16">
        <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
          AI-Augmented QA Workflow
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Utilizing elite AI reasoning to amplify engineering leverage,
          ensuring faster release cycles without compromising on precision.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group glass relative overflow-hidden rounded-[2rem] p-6 transition-all hover:border-primary/20 dark:hover:bg-white/[0.02] hover:bg-black/[0.02]"
          >
            <div className={`mb-4 inline-flex rounded-xl border p-2 ${tool.color}`}>
              <tool.icon size={20} />
            </div>

            <h3 className="font-bold tracking-tight">{tool.name}</h3>
            <div className="mt-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60">
              {tool.role}
            </div>

            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              {tool.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
