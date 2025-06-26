import { motion } from "framer-motion";
import TypingAnimation from "@/components/ui/typing-animation";
import FloatingParticles from "@/components/ui/floating-particles";

export default function HeroSection() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/Mohd_Kaif_Resume.pdf';
    link.download = 'Mohd_Kaif_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const viewProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen code-bg flex items-center justify-center relative">
      <FloatingParticles />
      
      <div className="container mx-auto px-6 hero-content">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-jetbrains text-[var(--matrix-green)] mb-4">
              <TypingAnimation text='console.log("Hello, World!");' />
            </div>
            
            <motion.h1 
              className="font-orbitron text-5xl lg:text-7xl font-bold mb-6 neon-glow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              MOHD KAIF
            </motion.h1>
            
            <motion.h2 
              className="text-2xl lg:text-3xl font-light mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Data Analyst & Aspiring Data Scientist
            </motion.h2>
            
            <motion.p 
              className="text-lg mb-8 text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Currently analyzing data to drive business decisions, while expanding expertise in machine learning 
              and advanced analytics to transition into data science roles.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button 
                onClick={downloadResume}
                className="glass px-8 py-4 rounded-lg hover:bg-[var(--matrix-green)] hover:text-[var(--tech-navy)] transition-all duration-300 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  animation: 'pulse-glow 2s ease-in-out infinite alternate',
                  boxShadow: '0 0 20px hsla(158, 64%, 52%, 0.5)'
                }}
              >
                <i className="fas fa-download mr-2"></i>
                Download Resume
              </motion.button>
              
              <motion.button 
                onClick={viewProjects}
                className="border border-[var(--matrix-green)] px-8 py-4 rounded-lg hover:bg-[var(--matrix-green)] hover:text-[var(--tech-navy)] transition-all duration-300 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-eye mr-2"></i>
                View Projects
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="flex justify-center lg:justify-start space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.a 
                href="mailto:mr.kabir14320@gmail.com" 
                className="text-2xl hover:text-[var(--matrix-green)] transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <i className="fas fa-envelope"></i>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/mohd-kaif-054b17262/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-[var(--matrix-green)] transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <i className="fab fa-linkedin"></i>
              </motion.a>
              <motion.a 
                href="tel:+919336828088" 
                className="text-2xl hover:text-[var(--matrix-green)] transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <i className="fas fa-phone"></i>
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="glass-dark rounded-2xl p-8"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Data science workspace with multiple monitors showing analytics dashboards" 
                className="rounded-xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--tech-navy)]/50 to-transparent rounded-xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
