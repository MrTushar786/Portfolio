import { motion } from 'framer-motion';
import { CONFIG } from '../config';
import { TECH_CONFIG } from '../constants/techConfig';

const techConfig = TECH_CONFIG;

const skills = CONFIG.skills;

export default function TechStack() {
  return (
    <section id="tech-stack" className="w-full max-w-[1200px] mx-auto py-32 px-6">
      <div className="mb-12 sm:mb-16 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">{CONFIG.sections.techStack.title}</h2>
        <p className="text-text-secondary text-sm sm:text-[1.1rem]">{CONFIG.sections.techStack.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items], sectionIdx) => (
          <motion.div 
            key={category}
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: sectionIdx * 0.1 }}
          >
            <h3 className="text-[1.1rem] font-semibold mb-5 text-text-secondary uppercase tracking-widest">{category}</h3>
            <div className="flex flex-wrap gap-[10px]">
              {items.map((tech) => {
                const config = techConfig[tech];
                if (!config) return null;
                const Icon = config.icon;
                
                return (
                  <motion.div 
                    key={tech} 
                    className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-[4px] text-white font-bold text-[0.85rem] uppercase cursor-default shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition-all duration-200"
                    style={{ backgroundColor: config.color }}
                    whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
                  >
                    <Icon className="text-[1.1rem]" />
                    <span className="tracking-wide">{config.slug}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
