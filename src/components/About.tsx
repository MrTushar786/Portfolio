import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="container section-padding">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Building products that actually ship.</p>
      </div>

      <div className="bento-grid">
        <motion.div 
          className="bento-item glass-card"
          style={{ gridColumn: 'span 8' }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bento-glow"></div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>I'm Tushar Ahmad</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '1.05rem' }}>
            I am a Full Stack Web Developer and a Computer Science (B.Tech) student at Lovely Professional University. I specialize in building scalable, production-ready applications that bridge the gap between complex backend logic and intuitive user experiences.
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '1.05rem' }}>
            My approach is product-focused. Whether I'm architecting fintech platforms solo or engineering AI-driven mock interview systems, I take full ownership of the technical stack to ensure performance, security, and scalability. I build for the real world, not just for a portfolio.
          </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '1.05rem' }}>
              My stack centers on <strong>React 19, TypeScript, Vite, Tailwind CSS, NestJS, PostgreSQL, and Docker</strong>. I'm a Computer Science (B.Tech) student at Lovely Professional University with a <strong>CGPA of 7.19</strong>.
            </p>
          <p style={{ color: 'var(--accent)', fontWeight: 'bold' }}>
            "Building is good, but shipping is what proves skill."
          </p>
        </motion.div>

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
            alt="Tushar Ahmad Profile" 
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
            <p style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Tushar Ahmad</p>
            <p style={{ fontSize: '0.75rem', opacity: 0.8 }}>Full Stack Web Developer</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
