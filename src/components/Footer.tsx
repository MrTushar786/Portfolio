import { CONFIG } from '../config';

export default function Footer() {
  const { profile } = CONFIG;
  return (
    <footer id="contact" className="text-center py-12 sm:py-16 px-6 border-t border-[var(--glass-border)] mt-16 w-full max-w-[1200px] mx-auto">
      <h3 className="text-lg sm:text-[1.5rem] italic text-text-secondary mb-6 font-syne px-4">"Building is good. Shipping is what proves skill."</h3>
      <div className="flex justify-center gap-4 sm:gap-6 mb-6 text-sm sm:text-base">
        <a href={`mailto:${profile.email}`} className="text-text-secondary transition-colors duration-300 hover:text-text-primary">Email</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-text-secondary transition-colors duration-300 hover:text-text-primary">LinkedIn</a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="text-text-secondary transition-colors duration-300 hover:text-text-primary">GitHub</a>
      </div>
      <p className="text-text-secondary text-[0.8rem] sm:text-[0.9rem]">
        {profile.fullName} © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
