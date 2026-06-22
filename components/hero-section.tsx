"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowDown, Brain, Cpu, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/lib/portfolio-data"

const focusAreas = [
  { label: "AI / ML", icon: Brain },
  { label: "Cybersecurity", icon: ShieldCheck },
  { label: "Embedded Systems", icon: Cpu },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen px-4 pt-28 pb-20 flex items-center">
      <div className="absolute inset-x-0 top-28 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-20 h-px bg-gradient-to-r from-transparent via-purple-300/30 to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-mono text-cyan-300"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,.8)]" />
            Computer Engineering Student
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 max-w-4xl text-5xl font-bold leading-[0.95] text-balance md:text-7xl lg:text-8xl"
          >
            <span className="text-foreground">Engineering </span>
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              intelligent
            </span>
            <br />
            <span className="text-foreground">secure systems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            I am {portfolioData.personal.name.split(" ")[0]}, a computer engineering
            student building projects across machine learning, cybersecurity,
            systems programming, and embedded hardware. I also take on full-stack
            web development as a side job.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 font-semibold text-background glow-blue hover:from-cyan-400 hover:to-blue-500"
            >
              <a href="#projects">View My Work</a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="relative"
        >
          <div className="glass-strong relative overflow-hidden rounded-2xl p-6">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,.11),transparent_40%,rgba(168,85,247,.12))]" />
            <div className="relative">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-300">
                    Engineering Profile
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-foreground">
                    Seif Mohsen
                  </h2>
                </div>
                <div className="rounded-lg border border-emerald-300/30 bg-emerald-300/10 px-3 py-1.5 text-xs font-mono text-emerald-300">
                  Online
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 1.5, 0, -1.5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative mx-auto mb-8 h-[360px] max-w-[320px]"
              >
                <motion.div
                  animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.75, 0.45] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-cyan-400/30 via-blue-500/10 to-purple-500/30 blur-2xl"
                />
                <div className="absolute -inset-3 rounded-[2rem] border border-cyan-300/25" />
                <div className="absolute inset-0 overflow-hidden rounded-[1.75rem] border border-white/15 bg-secondary shadow-2xl shadow-cyan-950/40">
                  <motion.div
                    animate={{ opacity: [0.2, 0.45, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-cyan-300/20 to-transparent"
                  />
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                  <Image
                    src="/optimized/me-cropped-640.webp"
                    alt="Seif Mohsen portrait"
                    fill
                    sizes="(min-width: 1024px) 320px, 80vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <motion.div
                  animate={{ x: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-3 top-8 rounded-full border border-cyan-300/30 bg-slate-950/70 px-3 py-1.5 text-xs font-mono text-cyan-200 backdrop-blur"
                >
                  AI / ML
                </motion.div>
                <motion.div
                  animate={{ x: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-3 bottom-10 rounded-full border border-purple-300/30 bg-slate-950/70 px-3 py-1.5 text-xs font-mono text-purple-200 backdrop-blur"
                >
                  Developer
                </motion.div>
              </motion.div>

              <div className="border-t border-white/10 pt-6">
                <div className="grid gap-4">
                  {focusAreas.map((area, index) => {
                    const Icon = area.icon
                    return (
                      <motion.div
                        key={area.label}
                        animate={{ x: [0, index % 2 === 0 ? 8 : -8, 0] }}
                        transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className="rounded-lg bg-cyan-400/10 p-2 text-cyan-300">
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="font-medium text-foreground">{area.label}</span>
                        </div>
                        <span className="font-mono text-xs text-muted-foreground">
                          ACTIVE
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {portfolioData.about.stats.slice(0, 3).map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-white/10 bg-black/10 p-4">
                    <div className="text-2xl font-bold text-cyan-300">{stat.value}</div>
                    <div className="mt-1 text-xs leading-tight text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          href="#about"
          className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground md:flex"
        >
          <span className="text-xs font-mono">Scroll</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  )
}
