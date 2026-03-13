import { useState, useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
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
      lerp: 0.08,
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
    <main className="min-h-screen relative z-[1]">
      <div className="fixed -top-[10%] sm:-top-[20%] left-1/2 -translate-x-1/2 w-[120vw] sm:w-[80vw] lg:w-[60vw] h-[120vw] sm:h-[80vw] lg:h-[60vw] bg-[radial-gradient(circle,var(--accent-glow)_0%,transparent_70%)] -z-[1] pointer-events-none will-change-transform"></div>
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
