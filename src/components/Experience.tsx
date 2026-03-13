import { motion } from 'framer-motion';
import { LayoutTemplate, Fingerprint, Route, PieChart, Sparkles } from 'lucide-react';
import { CONFIG } from '../config';

export default function Experience() {
  return (
    <section id="experience" className="container section-padding">
      <div className="section-header">
        <h2 className="section-title">{CONFIG.sections.experience.title}</h2>
        <p className="section-subtitle">{CONFIG.sections.experience.subtitle}</p>
      </div>

      <div className="timeline">
        {CONFIG.experience.map((exp, idx) => (
          <motion.div 
            key={exp.company}
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className={`timeline-dot ${exp.isCurrent ? 'current' : ''}`}></div>
            <div className={`bento-item ${exp.company.toLowerCase().includes('smartmoney') ? 'smartmoney-card' : 'glass-card'}`}>
              <div>
                <span className="role-badge">{exp.type}</span>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>{exp.company}</h3>
                <p style={{ color: 'var(--accent)', fontWeight: '600', marginBottom: '4px' }}>{exp.role}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '16px' }}>
                  {exp.duration} · {exp.location}
                </p>
                
                {exp.description && (
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '0.95rem' }}>
                    {exp.description}
                  </p>
                )}
                
                {exp.highlight && (
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    {exp.highlight}
                  </p>
                )}

                {exp.paragraphs && exp.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.7' }}>
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
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '16px', fontSize: '1.1rem' }}>What I built & own:</h4>
                  <div className="feature-grid">
                    <motion.div whileHover={{ scale: 1.02 }} className="feature-card">
                      <LayoutTemplate className="feat-icon" />
                      <div>
                        <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.9rem' }}>Landing Page</strong>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Full marketing & hero layout</span>
                      </div>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.02 }} className="feature-card">
                      <Fingerprint className="feat-icon" />
                      <div>
                        <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.9rem' }}>Auth & Security</strong>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Login, OTP & validation</span>
                      </div>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.02 }} className="feature-card">
                      <Route className="feat-icon" />
                      <div>
                        <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.9rem' }}>Onboarding</strong>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Multi-step guided flow</span>
                      </div>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} className="feature-card">
                      <PieChart className="feat-icon" />
                      <div>
                        <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.9rem' }}>Dashboard</strong>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Portfolio & tracking charts</span>
                      </div>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} className="feature-card">
                      <Sparkles className="feat-icon" />
                      <div>
                        <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.9rem' }}>Motion Design</strong>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Transitions & micro-interaction</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}

              <div className="tech-flex mt-6">
                {exp.tech.map((tech) => (
                  <span key={tech} className="tech-chip">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
