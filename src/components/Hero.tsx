import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cvFile from '../assets/Cv/Tushar Cv-5.pdf';

const titles = [
  "Currently building fintech at SmartMoney AI",
  "I build scalable full stack applications",
  "I ship products, not just projects",
  "Full Stack Web Developer at a real startup"
];

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
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="hero-image-container"
      >
        <img 
          src="/photo.png" 
          alt="Tushar Ahmad" 
          className="hero-image"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="status-badge">
          <span className="status-dot"></span>
          <span className="status-text">
            <span>Part-time Employee</span> · Remote
          </span>
        </div>
      </motion.div>

      <motion.h1 
        className="hero-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        TUSHAR AHMAD
      </motion.h1>

      <motion.h2 
        className="hero-subtitle"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Full Stack Web Developer · Software Engineer · Builder.
        <br />
        I don't just write code — I build products that work in production.
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

      <motion.div 
        className="hero-actions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
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
          download="Tushar_Ahmad_CV.pdf"
          className="btn-secondary"
        >
          Download CV
        </a>
      </motion.div>
    </section>
  );
}
