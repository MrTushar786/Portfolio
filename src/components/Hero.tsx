import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIG } from '../config';
import cvFile from '../assets/Cv/Tushar Cv-5.pdf';

const titles = CONFIG.hero.titles;

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      const top = elem.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section container">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="status-badge">
          <span className="status-dot"></span>
          <span className="status-text">
            <span>{CONFIG.profile.status.label}</span> · {CONFIG.profile.status.location}
          </span>
        </div>
      </motion.div>

      <motion.h1 
        className="hero-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {CONFIG.profile.fullName.toUpperCase()}
      </motion.h1>

      <motion.h2 
        className="hero-subtitle"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {CONFIG.hero.subtitle}
      </motion.h2>

      <motion.div 
        className="cycling-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            "{titles[index]}"
          </motion.span>
        </AnimatePresence>
      </motion.div>

      {/* Hero Stats - Smartly handling the extra space */}
      <motion.div 
        className="hero-stats-grid"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {CONFIG.hero.stats.map((stat, i) => (
          <div key={i} className="hero-stat-card glass-card">
            <span className="stat-label">{stat.label}</span>
            <span className="stat-value">{stat.value}</span>
          </div>
        ))}
      </motion.div>

      <motion.div 
        className="hero-actions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{ marginTop: '48px' }}
      >
        <a 
          href="#projects" 
          onClick={(e) => handleScroll(e, 'projects')}
          className="btn-primary"
        >
          See My Work
        </a>
        <a 
          href={cvFile}
          download={`${CONFIG.profile.fullName.replace(' ', '_')}_CV.pdf`}
          className="btn-secondary"
        >
          Download CV
        </a>
      </motion.div>
    </section>
  );
}
