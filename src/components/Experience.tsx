import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, FileSearch, BarChart3, Brain, Smartphone, Zap, Eye, ShieldCheck, Sparkles, ChevronRight } from 'lucide-react';
import { CONFIG } from '../config';
import { TECH_CONFIG } from '../constants/techConfig';

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const experiences = CONFIG.experience;

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="flex flex-col items-center mb-12 sm:mb-16">
        <h2 className="text-4xl sm:text-5xl font-black text-text-primary mb-4 tracking-tight">Experience</h2>
        <p className="text-text-secondary text-lg">Real work, real impact.</p>
      </div>

      <div className="max-w-[1250px] mx-auto">
        {/* Mobile Experience Selector - Horizontal Tabs */}
        <div className="flex md:hidden overflow-x-auto no-scrollbar gap-2 mb-8 pb-2 px-1">
          {experiences.map((exp, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`px-5 py-3 rounded-2xl whitespace-nowrap transition-all duration-300 border font-bold text-sm flex items-center gap-2 ${activeIndex === idx
                  ? 'bg-accent text-white border-accent shadow-[0_8px_20px_rgba(var(--accent-rgb),0.3)]'
                  : 'bg-bg-secondary text-text-secondary border-[var(--glass-border)]'
                }`}
            >
              <span className="opacity-60">{idx + 1}.</span>
              {exp.company}
              {exp.isCurrent && <div className="w-1.5 h-1.5 rounded-full bg-success"></div>}
            </button>
          ))}
        </div>

        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-6 w-[2px] bg-gradient-to-b from-accent/50 via-[var(--glass-border)] to-transparent"></div>

          <div className="flex flex-col gap-12 md:gap-16">
            {experiences.map((exp, index) => {
              // On mobile, only show the active card with animation
              const isVisible = !isMobile || activeIndex === index;

              return (
                <AnimatePresence key={index} mode="wait">
                  {isVisible && (
                    <motion.div
                      key={isMobile ? activeIndex : index}
                      initial={isMobile ? { opacity: 0, x: 20 } : { opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={isMobile ? { opacity: 0, x: -20 } : undefined}
                      transition={{ duration: 0.5, delay: isMobile ? 0 : index * 0.1 }}
                      className="relative md:pl-20"
                    >
                      {/* Desktop Timeline Dot */}
                      <div className={`hidden md:block absolute left-[17px] top-6 w-4 h-4 rounded-full bg-bg border-2 border-accent z-10 ${exp.isCurrent ? 'border-success shadow-[0_0_12px_rgba(34,197,94,0.4)]' : ''}`}></div>

                      <div className={`relative rounded-[2.5rem] p-6 sm:p-8 interactive-card ${exp.company.toLowerCase().includes('smartmoney')
                          ? 'bg-bg-tertiary border-accent/40 shadow-[0_0_40px_rgba(var(--accent-rgb),0.1)]'
                          : 'bg-bg-secondary border-[var(--glass-border)]'
                        }`}>

                        {/* Background Decoration */}
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/5 blur-[100px] pointer-events-none"></div>

                        <div className="flex flex-col gap-6">
                          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-3 mb-4">
                                <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-lg text-[0.7rem] font-bold tracking-widest uppercase">{exp.type}</span>
                                {exp.isCurrent && (
                                  <div className="flex items-center gap-2 px-3 py-1 bg-success/5 border border-white/20 rounded-xl">
                                    <div className="w-2 h-2 rounded-full bg-success"></div>
                                    <span className="text-success text-[0.7rem] font-black uppercase tracking-wider">Founding Team</span>
                                  </div>
                                )}
                              </div>
                              <h3 className="text-3xl sm:text-4xl font-black text-text-primary mb-3 tracking-tight">
                                {exp.company}
                              </h3>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-text-secondary font-bold">
                                <span className="text-accent text-[1.1rem]">{exp.role}</span>
                                <span className="hidden sm:block opacity-30">|</span>
                                <span className="text-sm opacity-60 font-medium">{exp.duration} · {exp.location}</span>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
                            <div className="flex flex-col gap-8">
                              {/* Visual Highlights - Scrollable on Mobile, Grid on Desktop */}
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {(exp.company.toLowerCase().includes('smartmoney') ? [
                                  { icon: <FileSearch />, label: "eCAS Parser", desc: "Auto-Portfolio" },
                                  { icon: <BarChart3 />, label: "Analytics", desc: "Real-time Docs" },
                                  { icon: <Sparkles />, label: "Insights", desc: "Wealth Tips" },
                                  { icon: <Smartphone />, label: "CROSS-PLATFORM", desc: "iOS & Android" }
                                ] : [
                                  { icon: <Zap />, label: "Automation", desc: "Interview Engine" },
                                  { icon: <Eye />, label: "Live Tracking", desc: "Socket.io Core" },
                                  { icon: <ShieldCheck />, label: "Anti-Cheat", desc: "Proctoring" },
                                  { icon: <Brain />, label: "AI Eval", desc: "Auto Scoring" }
                                ]).map((item, i) => (
                                  <div key={i} className="p-4 rounded-3xl bg-text-primary/[0.03] border border-text-primary/5 flex flex-col gap-3 transition-all group interactive-card !p-4 !rounded-3xl !border-0 hover:bg-white/5">
                                    <div className="text-accent w-8 h-8 flex items-center justify-center bg-accent/10 rounded-xl group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                      {item.icon}
                                    </div>
                                    <div>
                                      <div className="text-text-primary text-[0.75rem] font-black uppercase mb-0.5">{item.label}</div>
                                      <div className="text-text-secondary text-[0.65rem] font-bold opacity-50">{item.desc}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>

                              <div className="h-px w-full bg-gradient-to-r from-text-primary/10 to-transparent"></div>

                              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-4">
                                {exp.points?.map((point, i) => (
                                  <li key={i} className="flex gap-3 text-text-secondary text-[0.9rem] leading-relaxed group/point">
                                    <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-1 transition-transform group-hover/point:translate-x-1" />
                                    <span className="opacity-90 font-medium group-hover:opacity-100 transition-opacity">{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="flex flex-col gap-8">
                              {exp.company.toLowerCase().includes('boston') && (
                                <div className="p-5 bg-accent/5 border border-accent/20 rounded-[2rem] relative overflow-hidden group/workflow">
                                  <h4 className="text-text-primary text-[0.7rem] font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                    <Activity className="w-4 h-4 text-accent animate-pulse" />
                                    System Workflow
                                  </h4>
                                  <div className="flex flex-col gap-5">
                                    {['Scheduling', 'Live Interview', 'Anti-Cheat', 'AI Eval'].map((step, i) => (
                                      <div key={i} className="flex items-center gap-4">
                                        <div className="w-6 h-6 rounded-full border border-accent/30 flex items-center justify-center text-[0.7rem] font-bold text-accent">
                                          {i + 1}
                                        </div>
                                        <span className="text-text-primary text-[0.8rem] font-bold">{step}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              <div>
                                <div className="flex items-center gap-2 mb-4">
                                  <div className="h-[1px] w-6 bg-accent opacity-50"></div>
                                  <span className="text-[0.7rem] font-black uppercase tracking-widest text-text-secondary">Core Stack</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {exp.tech.map((tech) => {
                                    const config = TECH_CONFIG[tech];
                                    if (!config) return <span key={tech} className="px-3 py-1 bg-bg-tertiary border border-[var(--glass-border)] rounded-full text-[0.7rem] text-text-secondary opacity-60">{tech}</span>;
                                    const Icon = config.icon;
                                    return (
                                      <motion.div
                                        key={tech}
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white font-bold text-[0.7rem] uppercase cursor-default shadow-sm transition-all duration-200"
                                        style={{ backgroundColor: config.color }}
                                        whileHover={!isMobile ? { scale: 1.1, filter: 'brightness(1.15)', y: -2 } : undefined}
                                        whileTap={{ scale: 0.95 }}
                                      >
                                        <Icon className="text-[0.9rem]" />
                                        <span className="tracking-wider">{config.slug}</span>
                                      </motion.div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              );
            })}
          </div>
        </div>

        {/* Navigation Indicator for Mobile */}
        <div className="md:hidden flex justify-center gap-2 mt-8">
          {experiences.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-8 bg-accent' : 'w-2 bg-text-primary/10'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
