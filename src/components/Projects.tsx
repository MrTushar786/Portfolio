import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { CONFIG } from '../config';

const projects = CONFIG.projects.map(p => ({
  ...p,
  desc: p.id === "tutorhive" ? "A full-stack tutor booking platform integrating tutor discovery, session scheduling, and profile management into a single unified workflow." :
        p.id === "hostelmanix" ? "A centralized hostel management platform digitizing operations. Built 15+ reusable frontend components and optimized MongoDB aggregation for 2-3x faster retrieval." :
        p.id === "cv-builder" ? "Dynamic resume creator with real-time editing and instant live preview. Used 20+ modular React + TS components." :
        p.id === "repairly" ? "Production-ready platform covering device repair lifecycle from customer booking to diagnostics and final pickup." : ""
}));

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-[1200px] mx-auto py-32 px-6">
      <div className="mb-12 sm:mb-16 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">{CONFIG.sections.projects.title}</h2>
        <p className="text-text-secondary text-sm sm:text-[1.1rem]">{CONFIG.sections.projects.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <motion.div 
            key={proj.title}
            className="group relative rounded-3xl bg-bg-secondary border border-[var(--glass-border)] p-6 sm:p-8 transition-all duration-300 overflow-hidden hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-1 glass-card flex flex-col h-full will-change-[transform,opacity]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="mb-4">
              <p className="text-accent text-[0.85rem] font-semibold mb-2">
                {proj.type}
              </p>
              <div className="flex justify-between items-center">
                <h3 className="text-[1.4rem]">{proj.title}</h3>
                <div className="flex gap-3">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noreferrer" className="text-text-secondary transition-all duration-300 hover:text-accent hover:-translate-y-0.5 inline-flex" aria-label="GitHub Repository">
                      <Github size={20} />
                    </a>
                  )}
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noreferrer" className="text-text-secondary transition-all duration-300 hover:text-accent hover:-translate-y-0.5 inline-flex" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <p className="text-text-secondary text-[0.95rem]">
              {proj.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto pt-6">
              {proj.tech.map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-bg-tertiary border border-[var(--glass-border)] rounded-full text-[0.8rem] text-text-secondary">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
