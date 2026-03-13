export default function Footer() {
  return (
    <footer id="contact" className="footer container">
      <h3 className="footer-quote">"Building is good. Shipping is what proves skill."</h3>
      <div className="social-links">
        <a href="mailto:tusharahmad3.0@gmail.com" className="social-link">Email</a>
        <a href="https://linkedin.com/in/tusharahmad786" target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
        <a href="https://github.com/MrTushar786" target="_blank" rel="noreferrer" className="social-link">GitHub</a>
      </div>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        Tushar Ahmad © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
