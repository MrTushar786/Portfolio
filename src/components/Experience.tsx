import { motion } from 'framer-motion';
import { LayoutTemplate, Fingerprint, Route, PieChart, Sparkles } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="container section-padding">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">Real work, real impact.</p>
      </div>

      <div className="timeline">
        <motion.div 
          className="timeline-item"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="timeline-dot current"></div>
          <div className="bento-item smartmoney-card">
            <div>
              <span className="role-badge">Part-time employee</span>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>SmartMoney AI</h3>
              <p style={{ color: 'var(--accent)', fontWeight: '600', marginBottom: '4px' }}>Frontend Web Developer</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '16px' }}>
                Dec 2025 – Present · Remote · India
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '0.95rem' }}>
                SmartMoney AI is an AI-powered fintech startup building intelligent investment tools for Indian retail investors to analyze mutual fund portfolios, track financial goals, and get AI-driven insights.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                I am the sole Frontend Web Developer, collaborating directly with the founding team to ship production-ready interfaces. I own every screen, component, and animation.
              </p>
            </div>
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
              <div className="tech-flex mt-6">
                {['React 19', 'Vite', 'TS', 'Capacitor', 'NestJS', 'SSE', 'Docker'].map((tech) => (
                  <span key={tech} className="tech-chip">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="timeline-item"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="timeline-dot"></div>
          <div className="bento-item glass-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Boston Scientific</h3>
            <p style={{ color: 'var(--accent)', fontWeight: '600', marginBottom: '8px' }}>Web Development Intern</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px' }}>
              June 2025 – July 2025 · On-site · Pune
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.7' }}>
              Engineered a robust full-stack interview system that allows admins to schedule specialized interviews across various technical fields. 
              The platform enables users to take interviews in a monitored environment with live interviewer presence.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.7' }}>
              Implemented real-time user activity tracking using <strong>Socket.io</strong>, allowing interviewers to monitor candidate progress live. 
              For enhanced security, I developed integrated anti-cheat mechanisms including tab-switch detection and navigation restrictions to ensure a professional and integrity-focused interview experience.
            </p>
            <div className="tech-flex mt-4">
              {['React.js', 'NestJS', 'PostgreSQL', 'Socket.io', 'Docker'].map((tech) => (
                <span key={tech} className="tech-chip">{tech}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
