import { motion } from 'framer-motion';
import { CONFIG } from '../config';
import { GraduationCap, MapPin, Calendar, Star } from 'lucide-react';

export default function About() {
  const { profile } = CONFIG;
  
  return (
    <section id="about" className="container section-padding">
      <div className="section-header">
        <h2 className="section-title">{CONFIG.sections.about.title}</h2>
        <p className="section-subtitle">{CONFIG.sections.about.subtitle}</p>
      </div>

      <div className="bento-grid">
        {/* Main Bio Card */}
        <motion.div 
          className="bento-item glass-card"
          style={{ gridColumn: 'span 8' }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bento-glow"></div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>I'm {profile.fullName}</h3>
          
          {profile.about.bio.map((paragraph, i) => (
            <p key={i} style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '1.05rem', lineHeight: '1.6' }}>
              {paragraph}
            </p>
          ))}
          
          <div style={{ marginTop: '24px', padding: '16px', borderRadius: '12px', background: 'rgba(var(--accent-rgb), 0.1)', border: '1px solid var(--accent)' }}>
            <p style={{ color: 'var(--accent)', fontWeight: 'bold' }}>
              "{profile.about.quote}"
            </p>
          </div>
        </motion.div>

        {/* Profile Stats Card */}
        <motion.div 
          className="bento-item glass-card"
          style={{ 
            gridColumn: 'span 4', 
            padding: 0, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            minHeight: '300px'
          }}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img 
            src="/photo.png" 
            alt={`${profile.fullName} Profile`} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              objectPosition: 'center 20%',
              filter: 'grayscale(0.1) contrast(1.1)'
            }} 
          />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '24px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
            color: '#fff'
          }}>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{profile.fullName}</p>
            <p style={{ fontSize: '0.85rem', opacity: 0.9 }}>{profile.role}</p>
          </div>
        </motion.div>

        <div style={{ gridColumn: 'span 12', marginTop: '32px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--text-primary)' }}>Education Journey</h3>
          <div className="education-journey-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {profile.educationJourney.map((edu, idx) => (
              <motion.div 
                key={edu.degree}
                className="bento-item glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ 
                  position: 'relative', 
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', height: '100%' }}>
                  <div style={{ padding: '10px', background: 'rgba(var(--accent-rgb), 0.1)', borderRadius: '12px', color: 'var(--accent)', flexShrink: 0 }}>
                    <GraduationCap size={24} />
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{edu.institution}</h4>
                    <p style={{ color: 'var(--accent)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '12px' }}>{edu.degree}</p>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Calendar size={14} /> {edu.duration}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <MapPin size={14} /> {edu.location}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontWeight: '600', marginTop: '4px' }}>
                        <Star size={14} style={{ color: '#FFD700' }} /> {edu.stats}
                      </div>
                    </div>
                    
                    <div style={{ 
                      marginTop: 'auto', 
                      padding: '12px', 
                      background: 'rgba(255,255,255,0.03)', 
                      borderRadius: '8px', 
                      fontSize: '0.85rem', 
                      fontStyle: 'italic', 
                      borderLeft: '2px solid var(--accent)' 
                    }}>
                      {edu.highlight}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
