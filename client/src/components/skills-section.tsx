import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SkillCard from "@/components/ui/skill-card";
import { skillsData } from "@/lib/constants";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="py-20 bg-[var(--tech-navy)]">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-4xl font-bold mb-4 neon-glow">Technical Skills</h2>
          <div className="w-24 h-1 bg-[var(--matrix-green)] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Expertise across the complete data science stack, from data collection to deployment
          </p>
        </motion.div>
        
        <div className="grid skill-grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
