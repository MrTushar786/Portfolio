import { useState, useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import TechStack from './components/TechStack'
import Footer from './components/Footer'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // Classic smooth lerp for 60fps feel
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, []);

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <main className="app-container">
      <div className="ambient-glow"></div>
      <div className="bg-grid"></div>

      <Navigation toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <TechStack />
      <Footer />
    </main>
  )
}

export default App
