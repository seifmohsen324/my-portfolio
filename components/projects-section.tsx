"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/lib/portfolio-data"

const projects = portfolioData.projects

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 grid gap-6 md:grid-cols-[1fr_auto] md:items-end"
        >
          <div>
            <h2 className="text-sm font-mono text-cyan-400 mb-3 tracking-wider uppercase">
              Featured Work
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Project Systems
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              A practical mix of AI, security, systems programming, signal
              processing, embedded work, and web interfaces built with an
              engineering-first mindset.
            </p>
          </div>
          <div className="glass rounded-xl px-5 py-4">
            <div className="text-3xl font-bold text-cyan-300">{projects.length}</div>
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Published builds
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="glass group overflow-hidden rounded-2xl border border-white/10"
            >
              <div className="relative h-52 bg-slate-950/70">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  loading={index === 0 ? "eager" : "lazy"}
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                {project.featured && (
                  <div className="absolute right-3 top-3">
                    <Badge className="border-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-background">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-5 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-secondary/50 text-xs text-muted-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 4 && (
                    <Badge
                      variant="secondary"
                      className="bg-secondary/50 text-xs text-muted-foreground"
                    >
                      +{project.tags.length - 4}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-3">
                  {project.github !== "#projects" && (
                    <Button
                      asChild
                      size="sm"
                      variant="ghost"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.codeStatus === "comingSoon" && (
                    <Button
                      size="sm"
                      variant="ghost"
                      disabled
                      className="text-muted-foreground"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code soon
                    </Button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
