"use client"

import { motion } from "framer-motion"
import type { IconType } from "react-icons"
import {
  SiArduino,
  SiC,
  SiCplusplus,
  SiGnubash,
  SiJavascript,
  SiKalilinux,
  SiLinux,
  SiNextdotjs,
  SiOctave,
  SiPython,
  SiReact,
  SiTensorflow,
} from "react-icons/si"

type TechItem = {
  name: string
  icon: IconType
  color: string
}

const techStack: TechItem[] = [
  { name: "C", icon: SiC, color: "text-blue-400" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-500" },
  { name: "Python", icon: SiPython, color: "text-yellow-300" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
  { name: "React", icon: SiReact, color: "text-cyan-300" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
  { name: "Linux", icon: SiLinux, color: "text-amber-200" },
  { name: "MATLAB", icon: SiOctave, color: "text-orange-400" },
  { name: "FPGA", icon: SiArduino, color: "text-teal-300" },
  { name: "Assembly", icon: SiGnubash, color: "text-emerald-300" },
  { name: "Cybersecurity", icon: SiKalilinux, color: "text-sky-300" },
  { name: "Machine Learning", icon: SiTensorflow, color: "text-orange-300" },
]

export function TechStack() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-mono text-cyan-400 mb-3 tracking-wider uppercase">
            Working Toolkit
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            The stack behind my current software, AI, systems, hardware, and web
            development projects.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: [0, -1680] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 28,
                  ease: "linear",
                },
              }}
              className="flex gap-6 pr-6"
            >
              {[...techStack, ...techStack].map((tech, index) => {
                const Icon = tech.icon

                return (
                <motion.div
                  key={`${tech.name}-${index}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex-shrink-0 glass rounded-xl px-6 py-4 flex items-center gap-3 cursor-pointer hover:border-cyan-500/30 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                    <Icon className={`h-6 w-6 ${tech.color}`} aria-hidden="true" />
                  </div>
                  <span className="text-foreground font-medium whitespace-nowrap">
                    {tech.name}
                  </span>
                </motion.div>
                )
              })}
            </motion.div>
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  )
}
