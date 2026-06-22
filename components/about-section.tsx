"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/lib/portfolio-data"

const engineeringApproach = [
  {
    title: "Build from fundamentals",
    detail: "Use data structures, algorithms, and systems concepts to shape practical solutions.",
  },
  {
    title: "Validate with evidence",
    detail: "Test behavior, compare outputs, and improve based on measurable results.",
  },
  {
    title: "Think about security",
    detail: "Consider risk, misuse, and reliability while designing software workflows.",
  },
  {
    title: "Document the work",
    detail: "Keep projects understandable through clear structure, notes, and reproducible setup.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-mono text-cyan-400 mb-3 tracking-wider uppercase">
              About Me
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Passionate about{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                engineering systems
              </span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {portfolioData.about.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {portfolioData.about.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Supporting detail */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto w-full max-w-md"
          >
            <div className="glass relative overflow-hidden rounded-2xl border border-white/10 p-6">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
              <div className="mb-6">
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.24em] text-cyan-300">
                  Working Style
                </p>
                <h4 className="text-2xl font-semibold text-foreground">
                  Engineering approach
                </h4>
              </div>

              <div className="grid gap-4">
                {engineeringApproach.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="border-l border-cyan-300/40 pl-4"
                  >
                    <h5 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h5>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
