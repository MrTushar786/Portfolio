import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface NavigationProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Navigation({ isDarkMode, toggleTheme }: NavigationProps) {
  const links = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Experience', target: 'experience' },
    { name: 'Projects', target: 'projects' },
    { name: 'Awards', target: 'certifications' },
  ];

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
      className="nav-wrapper"
      initial={{ y: -50, opacity: 0, x: '-50%' }}
      animate={{ y: 0, opacity: 1, x: '-50%' }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="nav-content">
        {links.map((link) => (
          <a 
            key={link.name} 
            href={`#${link.target}`} 
            onClick={(e) => handleScroll(e, link.target)}
            className="nav-link"
          >
            {link.name}
          </a>
        ))}
        <button 
          onClick={toggleTheme} 
          className="theme-toggle"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </motion.nav>
  );
}
