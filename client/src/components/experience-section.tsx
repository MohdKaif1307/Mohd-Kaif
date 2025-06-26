import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { experienceData } from "@/lib/constants";

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--tech-navy)]">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-4xl font-bold mb-4 neon-glow">Work Experience</h2>
          <div className="w-24 h-1 bg-[var(--matrix-green)] mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {experienceData.map((job, index) => (
            <motion.div
              key={index}
              className="timeline-item glass-dark rounded-xl p-8 mb-8 ml-8 relative"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="timeline-dot"></div>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[var(--matrix-green)] mb-2">{job.position}</h3>
                  <h4 className="text-lg font-semibold">{job.company}</h4>
                  <p className="text-gray-400">{job.location}</p>
                </div>
                <div className="text-right mt-2 lg:mt-0">
                  <span className={`glass px-3 py-1 rounded-full text-sm font-medium ${
                    job.current ? 'text-[var(--data-gold)]' : ''
                  }`}>
                    {job.period}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-2 text-gray-300">
                {job.responsibilities.map((responsibility, idx) => (
                  <motion.li 
                    key={idx}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: (index * 0.2) + (idx * 0.1) }}
                  >
                    <i className="fas fa-chevron-right text-[var(--matrix-green)] mr-3 mt-1"></i>
                    {responsibility}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
