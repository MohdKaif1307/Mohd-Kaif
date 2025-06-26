import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[var(--tech-navy)] to-[var(--electric-blue)]">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-4xl font-bold mb-4 neon-glow">About Me</h2>
          <div className="w-24 h-1 bg-[var(--matrix-green)] mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="glass-dark rounded-2xl p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Advanced data analytics interface with multiple charts and graphs" 
              className="rounded-xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[var(--matrix-green)]">Passionate Data Scientist</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Highly motivated data scientist with a strong foundation in data analysis, statistical modeling, and machine learning. 
              Proficient in Python with expertise in data visualization and MySQL database management.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Skilled in data cleaning and exploratory data analysis (EDA), adept at problem-solving and extracting insights 
              from complex datasets. Possesses a solid understanding of data mining techniques and a passion for leveraging 
              data to drive actionable business decisions.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                className="glass p-4 rounded-lg text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-[var(--data-gold)] mb-2">2+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </motion.div>
              <motion.div 
                className="glass p-4 rounded-lg text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-[var(--data-gold)] mb-2">10+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
