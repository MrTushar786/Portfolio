import { CONFIG } from '../config';

export default function Footer() {
  const { profile } = CONFIG;
  return (
    <footer id="contact" className="footer container">
      <h3 className="footer-quote">"Building is good. Shipping is what proves skill."</h3>
      <div className="social-links">
        <a href={`mailto:${profile.email}`} className="social-link">Email</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="social-link">GitHub</a>
      </div>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        {profile.fullName} © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
