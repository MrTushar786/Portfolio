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
    <section id="certifications" className="w-full max-w-[1200px] mx-auto py-32 px-6">
      <div className="mb-12 sm:mb-16 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">{CONFIG.sections.certifications.title}</h2>
        <p className="text-text-secondary text-sm sm:text-[1.1rem]">{CONFIG.sections.certifications.subtitle}</p>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Achievements */}
        {CONFIG.achievements.map((ach) => (
          <motion.div 
            key={ach.title}
            className="col-span-12 group relative rounded-3xl p-6 sm:p-8 transition-all duration-300 overflow-hidden hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-1 glass-card bg-gradient-to-r from-accent/10 to-transparent border border-accent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 flex-wrap">
              <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-accent text-white flex items-center justify-center rounded-xl shrink-0">
                <Trophy size={28} className="sm:w-8 sm:h-8" />
              </div>
              <div className="flex-1">
                <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-md text-[0.75rem] sm:text-[0.85rem] font-semibold">{ach.role}</span>
                <h3 className="text-[1.3rem] sm:text-[1.8rem] mt-2 font-syne font-bold">{ach.title}</h3>
                <p className="text-text-secondary mt-1 sm:mt-2 text-sm sm:text-base">
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
              className="col-span-12 md:col-span-6 lg:col-span-4 block no-underline group relative rounded-3xl bg-bg-secondary border border-[var(--glass-border)] p-8 transition-all duration-300 overflow-hidden hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-1 glass-card flex flex-col h-full will-change-[transform,opacity]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4" style={{ color: cert.color }}>
                  <Icon size={24} />
                </div>
                <h4 className="text-[1.1rem] mb-1 leading-tight text-text-primary font-bold">{cert.title}</h4>
                <p className="text-text-secondary text-[0.9rem] mb-4">{cert.issuer}</p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-[0.8rem] text-text-secondary opacity-70">{cert.date}</span>
                  <ExternalLink size={14} className="text-accent opacity-60" />
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
