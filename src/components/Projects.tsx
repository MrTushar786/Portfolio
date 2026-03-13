import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "TutorHive",
    type: "Full-Stack Development",
    desc: "A full-stack tutor booking platform integrating tutor discovery, session scheduling, and profile management into a single unified workflow.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "npm"],
    github: "https://github.com/MrTushar786/TutorHive",
    live: "#"
  },
  {
    title: "HostelManix",
    type: "Management System",
    desc: "A centralized hostel management platform digitizing operations. Built 15+ reusable frontend components and optimized MongoDB aggregation for 2-3x faster retrieval.",
    tech: ["React", "Express.js", "MongoDB Atlas"],
    github: "https://github.com/MrTushar786/HostelManix",
    live: "#"
  },
  {
    title: "CV Builder",
    type: "Frontend Tool",
    desc: "Dynamic resume creator with real-time editing and instant live preview. Used 20+ modular React + TS components.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    github: "https://github.com/MrTushar786/CV-Builder",
    live: "#"
  },
  {
    title: "Repairly",
    type: "Workflow Platform",
    desc: "Production-ready platform covering device repair lifecycle from customer booking to diagnostics and final pickup.",
    tech: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/MrTushar786/Repairly",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="container section-padding">
      <div className="section-header">
        <h2 className="section-title">Other Projects</h2>
        <p className="section-subtitle">A showcase of full-stack engineering projects.</p>
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
