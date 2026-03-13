import { motion } from 'framer-motion';
import { LayoutTemplate, Fingerprint, Route, PieChart, Sparkles } from 'lucide-react';
import { CONFIG } from '../config';

export default function Experience() {
  return (
    <section id="experience" className="w-full max-w-[1200px] mx-auto py-32 px-6">
      <div className="mb-12 sm:mb-16 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">{CONFIG.sections.experience.title}</h2>
        <p className="text-text-secondary text-sm sm:text-[1.1rem]">{CONFIG.sections.experience.subtitle}</p>
      </div>

      <div className="relative max-w-[800px] mx-auto before:absolute before:top-0 before:bottom-0 before:left-4 sm:before:left-6 before:w-[2px] before:bg-[var(--glass-border)]">
        {CONFIG.experience.map((exp, idx) => (
          <motion.div 
            key={exp.company}
            className="relative pl-10 sm:pl-16 mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className={`absolute left-[9px] sm:left-[17px] top-2 w-4 h-4 rounded-full bg-bg border-2 border-accent z-10 ${exp.isCurrent ? 'border-success shadow-[0_0_12px_rgba(34,197,94,0.4)]' : ''}`}></div>
            <div className={`relative rounded-3xl p-6 sm:p-8 transition-all duration-300 overflow-hidden hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-1 glass-card ${exp.company.toLowerCase().includes('smartmoney') ? 'grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 md:gap-12 items-center bg-bg-tertiary border border-accent' : 'bg-bg-secondary border border-[var(--glass-border)]'}`}>
              <div>
                <span className="inline-block px-3 py-1.5 bg-accent/20 text-[#a4b1ff] rounded-md text-[0.85rem] font-semibold mb-4">{exp.type}</span>
                <h3 className="text-[1.8rem] mb-2">{exp.company}</h3>
                <p className="text-accent font-semibold mb-1">{exp.role}</p>
                <p className="text-text-secondary text-[0.85rem] mb-4">
                  {exp.duration} · {exp.location}
                </p>
                
                {exp.description && (
                  <p className="text-text-secondary mb-4 text-[0.95rem]">
                    {exp.description}
                  </p>
                )}
                
                {exp.highlight && (
                  <p className="text-text-secondary text-[0.95rem]">
                    {exp.highlight}
                  </p>
                )}

                {exp.paragraphs && exp.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-text-secondary mb-4 leading-relaxed">
                    {p.includes('Socket.io') ? (
                      <>
                        Implemented real-time user activity tracking using <strong>Socket.io</strong>, allowing interviewers to monitor candidate progress live. 
                        For enhanced security, I developed integrated anti-cheat mechanisms including tab-switch detection and navigation restrictions to ensure a professional and integrity-focused interview experience.
                      </>
                    ) : p}
                  </p>
                ))}
              </div>

              {exp.company.toLowerCase().includes('smartmoney') && (
                <div>
                  <h4 className="text-text-primary mb-4 text-[1.1rem]">What I built & own:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <motion.div whileHover={{ scale: 1.02 }} className="bg-bg-secondary border border-[var(--glass-border)] rounded-xl p-3 flex items-center gap-3 transition-all duration-300 hover:bg-white/[0.06] hover:border-accent">
                      <LayoutTemplate className="text-accent bg-accent/15 p-2 rounded-lg w-9 h-9 shrink-0" />
                      <div>
                        <strong className="text-text-primary block text-[0.9rem]">Landing Page</strong>
                        <span className="text-text-secondary text-[0.8rem]">Full marketing & hero layout</span>
                      </div>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.02 }} className="bg-bg-secondary border border-[var(--glass-border)] rounded-xl p-3 flex items-center gap-3 transition-all duration-300 hover:bg-white/[0.06] hover:border-accent">
                      <Fingerprint className="text-accent bg-accent/15 p-2 rounded-lg w-9 h-9 shrink-0" />
                      <div>
                        <strong className="text-text-primary block text-[0.9rem]">Auth & Security</strong>
                        <span className="text-text-secondary text-[0.8rem]">Login, OTP & validation</span>
                      </div>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.02 }} className="bg-bg-secondary border border-[var(--glass-border)] rounded-xl p-3 flex items-center gap-3 transition-all duration-300 hover:bg-white/[0.06] hover:border-accent">
                      <Route className="text-accent bg-accent/15 p-2 rounded-lg w-9 h-9 shrink-0" />
                      <div>
                        <strong className="text-text-primary block text-[0.9rem]">Onboarding</strong>
                        <span className="text-text-secondary text-[0.8rem]">Multi-step guided flow</span>
                      </div>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} className="bg-bg-secondary border border-[var(--glass-border)] rounded-xl p-3 flex items-center gap-3 transition-all duration-300 hover:bg-white/[0.06] hover:border-accent">
                      <PieChart className="text-accent bg-accent/15 p-2 rounded-lg w-9 h-9 shrink-0" />
                      <div>
                        <strong className="text-text-primary block text-[0.9rem]">Dashboard</strong>
                        <span className="text-text-secondary text-[0.8rem]">Portfolio & tracking charts</span>
                      </div>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} className="bg-bg-secondary border border-[var(--glass-border)] rounded-xl p-3 flex items-center gap-3 transition-all duration-300 hover:bg-white/[0.06] hover:border-accent">
                      <Sparkles className="text-accent bg-accent/15 p-2 rounded-lg w-9 h-9 shrink-0" />
                      <div>
                        <strong className="text-text-primary block text-[0.9rem]">Motion Design</strong>
                        <span className="text-text-secondary text-[0.8rem]">Transitions & micro-interaction</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-6">
                {exp.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-bg-tertiary border border-[var(--glass-border)] rounded-full text-[0.8rem] text-text-secondary">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
