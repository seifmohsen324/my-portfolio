"use client"

import { motion } from "framer-motion"
import { BrainCircuit, Network, ShieldCheck } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

const certifications = portfolioData.certifications
const certificationIcons = [Network, ShieldCheck, BrainCircuit]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-mono text-cyan-400 mb-3 tracking-wider uppercase">
            Credentials
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certifications
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Professional certifications in networking, cybersecurity, and advanced AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = certificationIcons[index] ?? ShieldCheck
            return (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-2xl p-6 text-center group hover:border-cyan-500/30 transition-all"
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform`}
              >
                <Icon className="h-8 w-8 text-background" />
              </div>
              <h4 className="text-sm font-semibold text-foreground mb-2 leading-tight">
                {cert.name}
              </h4>
              <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
              <span className="text-xs font-mono text-cyan-400">{cert.date}</span>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
