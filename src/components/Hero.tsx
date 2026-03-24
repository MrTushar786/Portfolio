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
    <section id="home" className="min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-6 pt-[120px] lg:pt-[100px] w-full max-w-[1200px] mx-auto overflow-hidden">
      {/* Left Content */}
      <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
          className="text-[clamp(3.5rem,8vw,5.5rem)] font-extrabold tracking-tighter mb-4 bg-gradient-to-b from-text-primary to-text-secondary bg-clip-text text-transparent leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {CONFIG.profile.fullName.toUpperCase()}
        </motion.h1>

        <motion.h2
          className="text-[clamp(1.1rem,2.5vw,1.3rem)] text-text-secondary max-w-[550px] mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {CONFIG.hero.subtitle}
        </motion.h2>

        <motion.div
          className="h-8 text-[1.1rem] font-medium text-accent mb-10 flex items-start"
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
          className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {CONFIG.hero.stats.map((stat, i) => (
            <div key={i} className="p-4 flex flex-col gap-1 text-left min-w-[160px] glass-card">
              <span className="text-[0.7rem] text-text-secondary uppercase tracking-widest font-bold">{stat.label}</span>
              <span className="text-base text-text-primary font-medium">{stat.value}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
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
      </div>

      {/* Right Content - Profile Image Card */}
      <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center items-center h-full w-full max-w-[450px] mx-auto lg:max-w-none">
        <motion.div
          className="group relative rounded-3xl bg-bg-secondary border border-[var(--glass-border)] interactive-card p-0 flex items-center justify-center aspect-[4/5] w-full overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/photo.png"
            alt={`${CONFIG.profile.fullName} Profile`}
            className="w-full h-full object-cover object-[center_20%] grayscale-[0.1] contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white">
            <p className="font-bold text-[1.4rem] tracking-tight">{CONFIG.profile.fullName}</p>
            <p className="text-[0.95rem] opacity-90 font-medium text-accent">{CONFIG.profile.role}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

