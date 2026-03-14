import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { CONFIG } from '../config';

interface NavigationProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Navigation({ isDarkMode, toggleTheme }: NavigationProps) {
  const links = CONFIG.navLinks;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      const top = elem.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000] p-1.5 sm:p-2 rounded-full bg-[var(--glass-bg)] backdrop-blur-[20px] border border-[var(--glass-border)] shadow-[var(--card-shadow),0_4px_24px_rgba(0,0,0,0.1)] w-[calc(100%-2rem)] sm:w-auto overflow-hidden"
      initial={{ y: -100, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex gap-1 sm:gap-2 items-center justify-between sm:justify-start">
        <div className="flex gap-0.5 sm:gap-2 overflow-x-auto no-scrollbar">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.target}`} 
              onClick={(e) => handleScroll(e, link.target)}
              className="text-text-secondary no-underline text-[0.75rem] sm:text-[0.9rem] font-medium px-3 sm:px-4 py-2 rounded-full transition-all duration-300 hover:text-text-primary hover:bg-text-primary/10 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>
        <button 
          onClick={toggleTheme} 
          className="bg-transparent border-none text-text-secondary cursor-pointer p-2 flex items-center justify-center rounded-full transition-all duration-300 hover:text-text-primary hover:bg-text-primary/10 shrink-0"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </motion.nav>
  );
}
