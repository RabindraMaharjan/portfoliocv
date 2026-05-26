"use client";

import { motion } from "framer-motion";
import { Sparkles, Terminal, Cpu, Zap } from "lucide-react";

const tools = [
  {
    name: "Cursor",
    role: "Engineering Cockpit",
    description: "Leveraging AI-native editing for rapid test script development.",
    color: "bg-blue-500/5 text-blue-500 border-blue-500/10",
    icon: Terminal,
  },
  {
    name: "Claude 3.5",
    role: "Reasoning Lane",
    description: "Complex test case generation and deep-dive bug analysis.",
    color: "bg-orange-500/5 text-orange-500 border-orange-500/10",
    icon: Sparkles,
  },
  {
    name: "Copilot",
    role: "Scripting Partner",
    description: "Accelerating boilerplate automation and selector strategies.",
    color: "bg-emerald-500/5 text-emerald-500 border-emerald-500/10",
    icon: Cpu,
  },
  {
    name: "DeepSeek",
    role: "Alternative Logic",
    description: "Cross-verifying complex logic and optimizing SQL queries.",
    color: "bg-purple-500/5 text-purple-500 border-purple-500/10",
    icon: Zap,
  },
];

export function Workflow() {
  return (
    <section id="workflow" className="scroll-mt-32">
      <div className="mb-20">
        <h2 className="section-label">
          Augmented Workflow
        </h2>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground font-medium leading-relaxed tracking-tight">
          Utilizing elite AI reasoning to amplify engineering leverage,
          ensuring faster release cycles with absolute precision.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.1 }}
            className="group glass relative overflow-hidden rounded-[2rem] p-8 transition-all hover:border-primary/20"
          >
            <div className={`mb-6 inline-flex rounded-2xl border p-3 ${tool.color}`}>
              <tool.icon size={24} />
            </div>

            <h3 className="text-lg font-bold tracking-tight text-foreground">{tool.name}</h3>
            <div className="mt-1.5 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground/40">
              {tool.role}
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground font-medium">
              {tool.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
