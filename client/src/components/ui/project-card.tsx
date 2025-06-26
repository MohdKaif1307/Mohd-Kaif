import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  icon: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const handleViewDetails = () => {
    // In a real application, this would navigate to a project detail page
    console.log(`Viewing details for ${project.title}`);
  };

  return (
    <motion.div 
      className="glass-dark rounded-xl overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image}
          alt={`${project.title} project visualization`}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--tech-navy)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-3">
          <i className={`${project.icon} text-[var(--matrix-green)] mr-2`}></i>
          <span className="text-sm font-medium text-[var(--data-gold)]">{project.category}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        
        <p className="text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <motion.span 
              key={tech}
              className="glass px-2 py-1 rounded text-xs"
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button 
            onClick={handleViewDetails}
            className="w-full glass-dark border border-[var(--matrix-green)] hover:bg-[var(--matrix-green)] hover:text-[var(--tech-navy)] transition-colors duration-300"
          >
            View Details
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
