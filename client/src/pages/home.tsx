import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const nav = document.querySelector('nav');
        const navHeight = nav ? (nav as HTMLElement).offsetHeight : 0;
        const elementTop = el.getBoundingClientRect().top + window.scrollY;
        setTimeout(() => {
          window.scrollTo({ top: Math.max(0, elementTop - navHeight - 8), behavior: 'smooth' });
        }, 0);
      }
    }
  }, []);
  return (
    <div className="bg-[var(--tech-navy)] text-white font-sans">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
