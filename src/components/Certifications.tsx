import { motion } from 'framer-motion';
import { Award, ShieldCheck, Trophy, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: "Java Programming (Core + OOP)",
    issuer: "NeoColab",
    date: "May 2025",
    icon: SiOpenjdk,
    color: "#007396"
  },
  {
    title: "NPTEL Cloud Computing",
    issuer: "Swayam",
    date: "Feb 2025",
    icon: ShieldCheck,
    color: "#4F46E5"
  },
  {
    title: "Programming in C++",
    issuer: "NeoColab",
    date: "Dec 2024",
    icon: SiCplusplus,
    color: "#00599C"
  },
  {
    title: "Data Structures & Algorithm",
    issuer: "NeoColab",
    date: "Dec 2024",
    icon: Award,
    color: "#10B981"
  },
  {
    title: "Backend Web Development",
    issuer: "Rising Tech Pro",
    date: "March 2024",
    icon: ShieldCheck,
    color: "#F59E0B"
  }
];

import { SiOpenjdk, SiCplusplus } from 'react-icons/si';

export default function Certifications() {
  return (
    <section id="certifications" className="container section-padding">
      <div className="section-header">
        <h2 className="section-title">Certifications & Achievements</h2>
        <p className="section-subtitle">Verified skills and competitive wins.</p>
      </div>

      <div className="bento-grid">
        {/* Hackathon Achievement */}
        <motion.div 
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
              <span className="role-badge" style={{ background: 'var(--accent)', color: '#fff' }}>Hackathon Participant</span>
              <h3 style={{ fontSize: '1.8rem', marginTop: '8px' }}>Code-A-Haunt (24-hour Hackathon)</h3>
              <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '1rem' }}>
                Feb 2024 · Demonstrated intense problem-solving and team collaboration under pressure. 
                Focused on rapid development, efficient task distribution, and decision-making in a time-bound environment.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Certifications List */}
        {certifications.map((cert, idx) => (
          <motion.div 
            key={cert.title}
            className="bento-item glass-card"
            style={{ gridColumn: 'span 4' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ color: cert.color, marginBottom: '16px' }}>
                <cert.icon size={24} />
              </div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '4px', lineHeight: '1.3' }}>{cert.title}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px' }}>{cert.issuer}</p>
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', opacity: 0.7 }}>{cert.date}</span>
                <ExternalLink size={14} style={{ color: 'var(--accent)', opacity: 0.6 }} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
