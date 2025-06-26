import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
  level: number;
  category: 'programming' | 'analytics' | 'tools';
}

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'programming':
        return 'text-[var(--data-gold)]';
      case 'analytics':
        return 'text-[var(--electric-blue)]';
      case 'tools':
        return 'text-[var(--matrix-green)]';
      default:
        return 'text-[var(--matrix-green)]';
    }
  };

  const getLevelText = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Proficient';
    return 'Intermediate';
  };

  return (
    <motion.div 
      className="skill-card glass-dark rounded-xl p-6 text-center group"
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div 
        className={`text-4xl mb-4 ${getCategoryColor(skill.category)}`}
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <i className={skill.icon}></i>
      </motion.div>
      <h3 className="font-semibold mb-2">{skill.name}</h3>
      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
        <motion.div 
          className="bg-[var(--matrix-green)] h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
      <span className="text-sm text-gray-400">{getLevelText(skill.level)}</span>
    </motion.div>
  );
}
