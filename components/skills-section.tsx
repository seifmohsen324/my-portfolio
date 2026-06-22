"use client"

import { motion } from "framer-motion"
import {
  Clock3,
  Crown,
  Lightbulb,
  MessageCircle,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react"
import type { IconType } from "react-icons"
import {
  SiArduino,
  SiC,
  SiCplusplus,
  SiCss,
  SiGnubash,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiOctave,
  SiPython,
  SiReact,
} from "react-icons/si"
import { portfolioData } from "@/lib/portfolio-data"

const skillCategories = [
  {
    title: "Languages",
    skills: portfolioData.skills.technical.languages,
  },
  {
    title: "Technologies",
    skills: portfolioData.skills.technical.technologies,
  },
]

const softSkills = portfolioData.skills.soft

const skillIcons: Record<string, { icon: IconType; color: string }> = {
  C: { icon: SiC, color: "text-blue-400" },
  "C++": { icon: SiCplusplus, color: "text-blue-500" },
  Python: { icon: SiPython, color: "text-yellow-300" },
  JavaScript: { icon: SiJavascript, color: "text-yellow-300" },
  HTML: { icon: SiHtml5, color: "text-orange-400" },
  CSS: { icon: SiCss, color: "text-blue-400" },
  Linux: { icon: SiLinux, color: "text-amber-200" },
  MATLAB: { icon: SiOctave, color: "text-orange-400" },
  FPGA: { icon: SiArduino, color: "text-teal-300" },
  Assembly: { icon: SiGnubash, color: "text-emerald-300" },
  React: { icon: SiReact, color: "text-cyan-300" },
  "Next.js": { icon: SiNextdotjs, color: "text-foreground" },
}

const softSkillIcons: Record<string, { icon: LucideIcon; color: string }> = {
  "Problem Solving": { icon: Lightbulb, color: "text-yellow-300" },
  Teamwork: { icon: Users, color: "text-cyan-300" },
  Leadership: { icon: Crown, color: "text-purple-300" },
  "Fast Learner": { icon: Zap, color: "text-emerald-300" },
  Communication: { icon: MessageCircle, color: "text-blue-300" },
  "Time Management": { icon: Clock3, color: "text-orange-300" },
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 relative">
      {/* Background gradient */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-cyan-400 mb-3 tracking-wider uppercase">
            Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A practical toolkit spanning software engineering, AI/ML, systems,
            embedded work, and full-stack web development as a side job.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6"
            >
              <h4 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
                {category.title}
              </h4>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => {
                  const skillIcon = skillIcons[skill.name]
                  const Icon = skillIcon?.icon

                  return (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        {Icon && (
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                            <Icon
                              className={`h-4 w-4 ${skillIcon.color}`}
                              aria-hidden="true"
                            />
                          </span>
                        )}
                        <span className="text-sm text-foreground font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                        style={{
                          boxShadow: "0 0 10px rgba(56, 189, 248, 0.5)",
                        }}
                      />
                    </div>
                  </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h4 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
            Soft Skills
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => {
              const softSkillIcon = softSkillIcons[skill]
              const Icon = softSkillIcon.icon

              return (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="glass flex min-h-24 flex-col items-center justify-center gap-3 rounded-xl p-4 text-center"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <Icon
                      className={`h-5 w-5 ${softSkillIcon.color}`}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-sm font-medium text-foreground">{skill}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
