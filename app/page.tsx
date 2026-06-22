import { ParticleField } from "@/components/particle-field"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TechStack } from "@/components/tech-stack"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Animated particle background */}
      <ParticleField />

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 grid-pattern pointer-events-none z-0" />

      {/* Animated gradient background */}
      <div className="fixed inset-0 animated-gradient pointer-events-none z-0" />

      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <TechStack />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
