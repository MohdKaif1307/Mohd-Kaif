import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Profile() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const currentExperience = {
    position: "Data Analyst",
    company: "The Red Carpet Ventures",
    location: "Gurugram, India",
    period: "August 2024 - Present",
    highlights: [
      "Automated 6+ manual reporting tasks via Python & Google Apps Script, saving 10+ hours/week",
      "Created real-time dashboards for leadership, accelerating decision-making by 25%",
      "Improved CRM data accuracy by 15% through structured feedback and database checks",
      "Captured client insights at events, resulting in 10% better alignment of offerings to client needs"
    ]
  };

  const personalInfo = {
    name: "Mohd Kaif",
    title: "Data Analyst & Aspiring Data Scientist",
    email: "mr.kabir14320@gmail.com",
    phone: "+91 93368 28088",
    location: "Haryana, India",
    linkedin: "https://www.linkedin.com/in/mohd-kaif-054b17262/"
  };

  const education = {
    degree: "Bachelor of Science (B.Sc)",
    university: "Professor Rajendra Prasad University",
    year: "2023",
    location: "U.P., India"
  };

  return (
    <div className="bg-[var(--tech-navy)] text-white font-sans min-h-screen">
      <Navigation />
      
      <section className="py-32 bg-gradient-to-br from-[var(--electric-blue)] to-[var(--tech-navy)]">
        <div className="container mx-auto px-6" ref={ref}>
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-orbitron text-5xl font-bold mb-4 neon-glow">Professional Profile</h1>
            <div className="w-24 h-1 bg-[var(--matrix-green)] mx-auto rounded-full mb-8"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Comprehensive overview of my professional journey and qualifications
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Personal Information & Photo */}
            <motion.div 
              className="glass-dark rounded-2xl p-8 mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1 text-center">
                  <motion.div 
                    className="relative inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-[var(--matrix-green)] shadow-lg shadow-[var(--matrix-green)]/30 bg-gradient-to-br from-[var(--matrix-green)]/20 to-white/20 backdrop-blur-sm relative">
                      <img 
                        src="/images/mohd_kaif_photo2.png" 
                        alt="Mohd Kaif - Professional Photo"
                        className="w-full h-full object-cover object-center"
                        style={{
                          clipPath: 'circle(50% at center)',
                          filter: 'contrast(1.1) brightness(1.1) saturate(1.2)'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[var(--matrix-green)]/10 rounded-full"></div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="lg:col-span-2">
                  <h2 className="text-4xl font-bold text-[var(--matrix-green)] mb-2">{personalInfo.name}</h2>
                  <p className="text-2xl text-gray-300 mb-6">{personalInfo.title}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div 
                      className="flex items-center glass p-4 rounded-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <i className="fas fa-envelope text-[var(--matrix-green)] mr-3 text-xl"></i>
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <a href={`mailto:${personalInfo.email}`} className="hover:text-[var(--matrix-green)] transition-colors">
                          {personalInfo.email}
                        </a>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center glass p-4 rounded-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <i className="fas fa-phone text-[var(--matrix-green)] mr-3 text-xl"></i>
                      <div>
                        <p className="text-sm text-gray-400">Phone</p>
                        <a href={`tel:${personalInfo.phone}`} className="hover:text-[var(--matrix-green)] transition-colors">
                          {personalInfo.phone}
                        </a>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center glass p-4 rounded-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <i className="fas fa-map-marker-alt text-[var(--matrix-green)] mr-3 text-xl"></i>
                      <div>
                        <p className="text-sm text-gray-400">Location</p>
                        <p>{personalInfo.location}</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center glass p-4 rounded-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <i className="fab fa-linkedin text-[var(--matrix-green)] mr-3 text-xl"></i>
                      <div>
                        <p className="text-sm text-gray-400">LinkedIn</p>
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" 
                           className="hover:text-[var(--matrix-green)] transition-colors">
                          View Profile
                        </a>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Current Experience */}
              <motion.div 
                className="glass-dark rounded-xl p-8"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-[var(--matrix-green)] mb-6 flex items-center">
                  <i className="fas fa-briefcase mr-3"></i>
                  Current Position
                </h3>
                
                <div className="border-l-4 border-[var(--matrix-green)] pl-6">
                  <h4 className="font-bold text-xl mb-1">{currentExperience.position}</h4>
                  <p className="text-[var(--data-gold)] font-semibold">{currentExperience.company}</p>
                  <p className="text-gray-400 mb-2">{currentExperience.location}</p>
                  <span className="glass px-3 py-1 rounded-full text-sm font-medium text-[var(--matrix-green)]">
                    {currentExperience.period}
                  </span>
                  
                  <div className="mt-4">
                    <h5 className="font-semibold mb-3 text-[var(--matrix-green)]">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {currentExperience.highlights.map((highlight, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-start text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                        >
                          <i className="fas fa-star text-[var(--data-gold)] mr-3 mt-1 text-sm"></i>
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Education */}
              <motion.div 
                className="glass-dark rounded-xl p-8"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-[var(--matrix-green)] mb-6 flex items-center">
                  <i className="fas fa-graduation-cap mr-3"></i>
                  Education
                </h3>
                
                <div className="border-l-4 border-[var(--matrix-green)] pl-6">
                  <h4 className="font-bold text-xl mb-1">{education.degree}</h4>
                  <p className="text-[var(--data-gold)] font-semibold">{education.university}</p>
                  <p className="text-gray-400 mb-2">{education.location}</p>
                  <span className="glass px-3 py-1 rounded-full text-sm font-medium text-[var(--matrix-green)]">
                    Graduated {education.year}
                  </span>
                </div>

                {/* Core Competencies */}
                <div className="mt-8">
                  <h5 className="font-semibold mb-4 text-[var(--matrix-green)]">Core Competencies:</h5>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Python & SQL",
                      "Data Analysis", 
                      "Machine Learning",
                      "Statistical Modeling",
                      "Data Visualization",
                      "Excel & VBA",
                      "Power BI",
                      "Dashboard Creation"
                    ].map((skill, index) => (
                      <motion.div 
                        key={skill}
                        className="glass px-3 py-2 rounded-lg text-center text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: 0.8 + (index * 0.05) }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Professional Summary */}
            <motion.div 
              className="glass-dark rounded-xl p-8 mt-8"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[var(--matrix-green)] mb-6 flex items-center">
                <i className="fas fa-user-tie mr-3"></i>
                Professional Summary
              </h3>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                Results-oriented Data Analyst with proven expertise in Python, SQL, and analytics tools, 
                currently driving business insights through automation and dashboard creation. Actively expanding 
                into data science through machine learning projects and statistical modeling. Passionate about 
                transforming complex datasets into strategic business value while building expertise in advanced 
                analytics and predictive modeling.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}