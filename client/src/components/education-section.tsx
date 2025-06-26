import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { educationData, certificationData } from "@/lib/constants";

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--tech-navy)]">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-4xl font-bold mb-4 neon-glow">Education & Certification</h2>
          <div className="w-24 h-1 bg-[var(--matrix-green)] mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div 
            className="glass-dark rounded-xl p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-[var(--matrix-green)] mb-6">Education</h3>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <motion.div 
                  key={index}
                  className="border-l-4 border-[var(--matrix-green)] pl-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                >
                  <h4 className="font-semibold text-lg">{edu.degree}</h4>
                  <p className="text-gray-400">{edu.institution}</p>
                  <span className="text-sm text-[var(--data-gold)]">{edu.year}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="glass-dark rounded-xl p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-[var(--matrix-green)] mb-6">Certification</h3>
            <div className="space-y-6">
              {certificationData.map((cert, index) => (
                <motion.div 
                  key={index}
                  className="border-l-4 border-[var(--matrix-green)] pl-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                >
                  <h4 className="font-semibold text-lg">{cert.title}</h4>
                  <p className="text-gray-400">{cert.issuer}</p>
                  <div className="mt-2">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="glass px-3 py-1 rounded-full text-sm mr-2">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
