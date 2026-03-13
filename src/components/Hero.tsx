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
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-[100px] w-full max-w-[1200px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-3 bg-bg-tertiary border border-[var(--glass-border)] px-4 py-2 rounded-full mb-8 text-[0.9rem] font-medium backdrop-blur-[10px]">
          <span className="status-dot"></span>
          <span className="text-text-secondary">
            <span className="text-text-primary">{CONFIG.profile.status.label}</span> · {CONFIG.profile.status.location}
          </span>
        </div>
      </motion.div>

      <motion.h1 
        className="text-[clamp(3rem,8vw,6rem)] font-extrabold tracking-tighter mb-6 bg-gradient-to-b from-text-primary to-text-secondary bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {CONFIG.profile.fullName.toUpperCase()}
      </motion.h1>

      <motion.h2 
        className="text-[clamp(1.2rem,3vw,1.5rem)] text-text-secondary max-w-[600px] mx-auto mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {CONFIG.hero.subtitle}
      </motion.h2>

      <motion.div 
        className="h-10 text-[1.2rem] font-medium text-accent mb-10 flex items-center justify-center"
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
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[600px] mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {CONFIG.hero.stats.map((stat, i) => (
          <div key={i} className="p-4 flex flex-col gap-1 text-left min-w-[160px] glass-card">
            <span className="text-[0.75rem] text-text-secondary uppercase tracking-widest font-semibold">{stat.label}</span>
            <span className="text-base text-text-primary font-medium">{stat.value}</span>
          </div>
        ))}
      </motion.div>

      <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 sm:mt-[48px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <a 
          href="#projects" 
          onClick={(e) => handleScroll(e, 'projects')}
          className="btn-primary w-full sm:w-auto"
        >
          See My Work
        </a>
        <a 
          href={cvFile}
          download={`${CONFIG.profile.fullName.replace(' ', '_')}_CV.pdf`}
          className="btn-secondary w-full sm:w-auto text-center justify-center"
        >
          Download CV
        </a>
      </motion.div>
    </section>
  );
}
