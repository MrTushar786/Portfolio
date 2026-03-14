import { motion } from 'framer-motion';
import { Activity, FileSearch, BarChart3, Brain, Smartphone, Zap, Eye, ShieldCheck, Sparkles } from 'lucide-react';
import { CONFIG } from '../config';
import { TECH_CONFIG } from '../constants/techConfig';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-black text-text-primary mb-4 tracking-tight">Experience</h2>
        <p className="text-text-secondary text-lg">Real work, real impact.</p>
      </div>

      <div className="relative max-w-[1250px] mx-auto before:absolute before:top-0 before:bottom-0 before:left-4 sm:before:left-6 before:w-[2px] before:bg-[var(--glass-border)]">
        {CONFIG.experience.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-12 sm:pl-20 mb-16 last:mb-0"
          >
            <div className={`absolute left-[9px] sm:left-[17px] top-2 w-4 h-4 rounded-full bg-bg border-2 border-accent z-10 ${exp.isCurrent ? 'border-success shadow-[0_0_12px_rgba(34,197,94,0.4)]' : ''}`}></div>
            <div className={`relative rounded-3xl p-6 sm:p-8 transition-all duration-300 overflow-hidden hover:bg-text-primary/[0.04] hover:border-white/10 hover:-translate-y-1 glass-card ${exp.company.toLowerCase().includes('smartmoney') ? 'bg-bg-tertiary border-2 border-accent/40 shadow-[0_0_40px_rgba(var(--accent-rgb),0.1)]' : 'bg-bg-secondary border border-[var(--glass-border)]'}`}>
              <div className={exp.company.toLowerCase().includes('smartmoney') ? 'flex flex-col gap-6' : ''}>
                <div className={`mb-6 ${exp.company.toLowerCase().includes('smartmoney') ? 'flex flex-col md:flex-row md:items-end justify-between gap-6' : ''}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 bg-accent/20 text-[#a4b1ff] rounded-md text-[0.8rem] font-bold tracking-wide uppercase">{exp.type}</span>
                      {exp.isCurrent && (
                        <div className="flex items-center gap-2 px-3 py-1 bg-success/10 border border-success/20 rounded-md">
                          <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"></div>
                          <span className="text-success text-[0.65rem] font-bold uppercase tracking-wider">Founding Team</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-black text-text-primary mb-2 tracking-tight">
                      {exp.company}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-text-secondary font-bold">
                      <span className="text-accent underline underline-offset-4 decoration-2 decoration-accent/30 text-base sm:text-lg">{exp.role}</span>
                      <span className="hidden sm:block opacity-30">•</span>
                      <span className="text-sm sm:text-base opacity-80 font-medium">{exp.duration} · {exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-8 lg:gap-10">
                  <div className="flex flex-col gap-8">
                    {/* Visual Highlights Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                      {exp.company.toLowerCase().includes('smartmoney') ? (
                        <>
                          {[
                            { icon: <FileSearch className="w-5 h-5" />, label: "eCAS Parser", desc: "Auto-Portfolio" },
                            { icon: <BarChart3 className="w-5 h-5" />, label: "Analytics", desc: "Real-time Docs" },
                            { icon: <Sparkles className="w-5 h-5" />, label: "Insights", desc: "Wealth Tips" },
                            { icon: <Smartphone className="w-5 h-5" />, label: "Cross-Platform", desc: "iOS & Android" }
                          ].map((item, i) => (
                            <div key={i} className="p-3.5 rounded-2xl bg-text-primary/[0.03] border border-text-primary/5 flex flex-col gap-2.5 hover:bg-text-primary/[0.06] hover:border-accent/30 transition-all group">
                              <div className="text-accent opacity-60 group-hover:opacity-100 transition-opacity scale-90 origin-left">{item.icon}</div>
                              <div>
                                <div className="text-text-primary text-[0.7rem] font-black uppercase tracking-wider">{item.label}</div>
                                <div className="text-text-secondary text-[0.6rem] font-bold opacity-60">{item.desc}</div>
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        <>
                          {[
                            { icon: <Zap className="w-5 h-5" />, label: "Automation", desc: "Interview Engine" },
                            { icon: <Eye className="w-5 h-5" />, label: "Live Tracking", desc: "Socket.io Core" },
                            { icon: <ShieldCheck className="w-5 h-5" />, label: "Anti-Cheat", desc: "Tab-Switch Detection" },
                            { icon: <Brain className="w-5 h-5" />, label: "AI Evaluation", desc: "Auto Scoring" }
                          ].map((item, i) => (
                            <div key={i} className="p-3.5 rounded-2xl bg-text-primary/[0.03] border border-text-primary/5 flex flex-col gap-2.5 hover:bg-text-primary/[0.06] hover:border-accent/30 transition-all group">
                              <div className="text-accent opacity-60 group-hover:opacity-100 transition-opacity scale-90 origin-left">{item.icon}</div>
                              <div>
                                <div className="text-text-primary text-[0.7rem] font-black uppercase tracking-wider">{item.label}</div>
                                <div className="text-text-secondary text-[0.6rem] font-bold opacity-60">{item.desc}</div>
                              </div>
                            </div>
                          ))}
                        </>
                      )}
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-text-primary/10 to-transparent"></div>

                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-4 text-text-secondary text-[0.95rem] list-none p-0 m-0">
                      {exp.points?.map((point, i) => (
                        <li key={i} className="relative pl-7 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full before:shadow-[0_0_8px_rgba(var(--accent-rgb),0.5)] font-medium leading-relaxed opacity-80">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-8">
                    {exp.company.toLowerCase().includes('boston') && (
                      <div className="p-5 bg-text-primary/[0.03] border border-text-primary/10 rounded-[1.5rem] relative overflow-hidden group/workflow">
                        <div className="absolute top-0 right-0 p-3 opacity-20 transition-opacity group-hover/workflow:opacity-40">
                          <Activity className="w-10 h-10 text-accent" />
                        </div>
                        
                        <h4 className="text-text-primary text-[0.65rem] font-black uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                          System Workflow
                        </h4>

                        <div className="flex flex-col gap-5">
                          {[
                            { label: 'Scheduling', status: 'Done' },
                            { label: 'Live Interview', status: 'Active' },
                            { label: 'Anti-Cheat & Behaviour', status: 'Live Tracking' },
                            { label: 'AI Evaluation', status: 'Scoring' },
                            { label: 'HR Report', status: 'Generated' }
                          ].map((step, i, arr) => (
                            <div key={i} className="flex items-center gap-3 group/step">
                              <div className="relative flex flex-col items-center">
                                <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(var(--accent-rgb),0.6)] z-10"></div>
                                {i !== arr.length - 1 && <div className="w-[1px] h-8 bg-text-primary/10 absolute top-2 transition-colors group-hover/step:bg-accent/30"></div>}
                              </div>
                              <div className="flex flex-col">
                                <span className="text-text-primary text-[0.75rem] font-bold">{step.label}</span>
                                <span className="text-accent text-[0.6rem] font-black uppercase tracking-widest opacity-60">{step.status}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <div className="flex items-center gap-2 mb-4 opacity-40">
                        <div className="h-px w-6 bg-text-primary"></div>
                        <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-text-primary">Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-2 text-wrap">
                        {exp.tech.map((tech) => {
                          const config = TECH_CONFIG[tech];
                          // If no config found, fallback to default badge style
                          if (!config) return (
                            <span key={tech} className="px-3 py-1.5 bg-text-primary/5 border border-text-primary/10 rounded-lg text-[0.75rem] font-bold text-text-secondary whitespace-nowrap">{tech}</span>
                          );

                          const Icon = config.icon;
                          return (
                            <motion.div 
                              key={tech} 
                              className="inline-flex items-center gap-1.5 px-[10px] py-[4px] rounded-[4px] text-white font-bold text-[0.7rem] uppercase cursor-default shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition-all duration-200"
                              style={{ backgroundColor: config.color }}
                              whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
                            >
                              <Icon className="text-[0.9rem]" />
                              <span className="tracking-wide">{config.slug}</span>
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
        ))}
      </div>
    </section>
  );
}
