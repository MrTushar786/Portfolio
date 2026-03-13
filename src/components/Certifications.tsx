import { motion } from 'framer-motion';
import { Award, ShieldCheck, Trophy, ExternalLink } from 'lucide-react';
import { SiOpenjdk, SiCplusplus } from 'react-icons/si';
import { CONFIG } from '../config';

const iconMap: Record<string, any> = {
  "Java Programming (Core + OOP)": SiOpenjdk,
  "Programming in C++": SiCplusplus,
  "Data Structures & Algorithm": Award,
  "NPTEL Cloud Computing": ShieldCheck,
  "Backend Web Development": ShieldCheck
};

export default function Certifications() {
  return (
    <section id="certifications" className="container section-padding">
      <div className="section-header">
        <h2 className="section-title">{CONFIG.sections.certifications.title}</h2>
        <p className="section-subtitle">{CONFIG.sections.certifications.subtitle}</p>
      </div>

      <div className="bento-grid">
        {/* Achievements */}
        {CONFIG.achievements.map((ach) => (
          <motion.div 
            key={ach.title}
            className="bento-item glass-card"
            style={{ gridColumn: 'span 12', background: 'linear-gradient(90deg, rgba(94, 106, 210, 0.1) 0%, transparent 100%)', border: '1px solid var(--accent)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <div className="feat-icon" style={{ width: '60px', height: '60px', background: 'var(--accent)', color: '#fff', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', borderRadius: '16px' }}>
                <Trophy size={32} />
              </div>
              <div style={{ flex: 1 }}>
                <span className="role-badge" style={{ background: 'var(--accent)', color: '#fff' }}>{ach.role}</span>
                <h3 style={{ fontSize: '1.8rem', marginTop: '8px' }}>{ach.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '1rem' }}>
                  {ach.date} · {ach.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Certifications List */}
        {CONFIG.certifications.map((cert, idx) => {
          const Icon = iconMap[cert.title] || Award;
          return (
            <motion.a 
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bento-item glass-card"
              style={{ gridColumn: 'span 4', display: 'block', textDecoration: 'none' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ color: cert.color, marginBottom: '16px' }}>
                  <Icon size={24} />
                </div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '4px', lineHeight: '1.3', color: 'var(--text-primary)' }}>{cert.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px' }}>{cert.issuer}</p>
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', opacity: 0.7 }}>{cert.date}</span>
                  <ExternalLink size={14} style={{ color: 'var(--accent)', opacity: 0.6 }} />
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
