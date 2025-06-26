import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 bg-[var(--tech-navy)] border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-400">
            © 2024 Mohd Kaif. Built with passion for data science and innovation.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <motion.a 
              href="mailto:mr.kabir14320@gmail.com" 
              className="text-gray-400 hover:text-[var(--matrix-green)] transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <i className="fas fa-envelope text-xl"></i>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/mohd-kaif-054b17262/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[var(--matrix-green)] transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <i className="fab fa-linkedin text-xl"></i>
            </motion.a>
            <motion.a 
              href="tel:+919336828088" 
              className="text-gray-400 hover:text-[var(--matrix-green)] transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <i className="fas fa-phone text-xl"></i>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
