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
    <section id="projects" className="container section-padding">
      <div className="section-header">
        <h2 className="section-title">{CONFIG.sections.projects.title}</h2>
        <p className="section-subtitle">{CONFIG.sections.projects.subtitle}</p>
      </div>

      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <motion.div 
            key={proj.title}
            className="bento-item project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="bento-glow"></div>
            <div className="project-header">
              <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
                {proj.type}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.4rem' }}>{proj.title}</h3>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noreferrer" className="project-link" aria-label="GitHub Repository">
                      <Github size={20} />
                    </a>
                  )}
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noreferrer" className="project-link" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              {proj.desc}
            </p>

            <div className="tech-flex mt-auto">
              {proj.tech.map(tech => (
                <span key={tech} className="tech-chip">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
