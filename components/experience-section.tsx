"use client"

import { motion } from "framer-motion"
import { portfolioData } from "@/lib/portfolio-data"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-cyan-400 mb-3 tracking-wider uppercase">
            Career Path
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            My journey through tech, from internships to leadership roles.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent md:-translate-x-1/2" />

          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 md:-translate-x-1/2 glow-cyan" />

              {/* Content */}
              <div
                className={`flex-1 pl-8 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-2xl p-6 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-1">
                    {exp.title}
                  </h4>
                  <p className="text-purple-400 font-medium mb-1">
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {exp.location}
                  </p>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className={`text-sm text-muted-foreground flex items-start gap-2 ${
                          index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <svg
                          className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded bg-secondary/50 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
