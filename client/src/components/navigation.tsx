import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const nav = document.querySelector('nav');
        const navHeight = nav ? (nav as HTMLElement).offsetHeight : 0;
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        const targetY = Math.max(0, elementTop - navHeight - 8);
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 overflow-x-hidden ${
        isScrolled ? 'glass-dark' : 'glass-dark opacity-70'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <motion.div 
              className="font-orbitron font-bold text-xl text-[var(--matrix-green)] neon-glow cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mohd Kaif
            </motion.div>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:text-[var(--matrix-green)] transition-colors duration-300 capitalize"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item}
              </motion.button>
            ))}
            
            <Link href="/profile">
              <motion.div
                className="w-10 h-10 rounded-full bg-[var(--matrix-green)]/20 border-2 border-[var(--matrix-green)] flex items-center justify-center hover:bg-[var(--matrix-green)]/30 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="View Profile"
              >
                <i className="fas fa-user text-[var(--matrix-green)]"></i>
              </motion.div>
            </Link>
          </div>
          
          <button 
            className="md:hidden text-[var(--matrix-green)] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-3 p-3 glass-dark rounded-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2.5 hover:text-[var(--matrix-green)] transition-colors duration-300 capitalize"
              >
                {item}
              </button>
            ))}
            
            <Link href="/profile">
              <div className="flex items-center py-2 hover:text-[var(--matrix-green)] transition-colors duration-300">
                <i className="fas fa-user mr-2"></i>
                Profile
              </div>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
