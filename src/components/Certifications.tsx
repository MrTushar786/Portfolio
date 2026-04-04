import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, Trophy, ExternalLink, Download, X, Eye, Brain, Sparkles, BookOpen } from 'lucide-react';
import { SiOpenjdk, SiCplusplus } from 'react-icons/si';
import { CONFIG } from '../config';

const iconMap: Record<string, any> = {
  "Java Programming (Core + OOP)": SiOpenjdk,
  "Programming in C++": SiCplusplus,
  "Data Structures & Algorithm": Award,
  "NPTEL Cloud Computing": ShieldCheck,
  "Backend Web Development": ShieldCheck,
  "ChatGPT-4 Prompt Engineering": Sparkles,
  "Build Generative AI Apps": Brain,
  "Finite Automata Theory": BookOpen,
  "Master Generative AI Tools": Sparkles
};

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<{ title: string; link: string } | null>(null);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  const handleDownload = (link: string, filename: string) => {
    const a = document.createElement('a');
    a.href = link;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

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
            onClick={() => ach.link && setSelectedCert({ title: ach.title, link: ach.link })}
            className={`col-span-12 group relative rounded-3xl p-6 sm:p-8 transition-all duration-300 overflow-hidden glass-card bg-gradient-to-r from-accent/10 to-transparent border border-accent ${ach.link ? 'cursor-pointer hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1' : ''}`}
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
                <div className="flex items-center gap-3">
                  <h3 className="text-[1.3rem] sm:text-[1.8rem] mt-2 font-syne font-bold">{ach.title}</h3>
                  {ach.link && <Eye size={18} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity mt-2" />}
                </div>
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
            <motion.div 
              key={cert.title}
              onClick={() => setSelectedCert({ title: cert.title, link: cert.link })}
              className="col-span-12 md:col-span-6 lg:col-span-4 cursor-pointer group relative rounded-3xl bg-bg-secondary border border-[var(--glass-border)] p-8 transition-all duration-300 overflow-hidden hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-1 glass-card flex flex-col h-full will-change-[transform,opacity]"
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
                  <div className="flex items-center gap-2">
                    <span className="text-[0.7rem] text-accent font-bold opacity-0 group-hover:opacity-100 transition-opacity">View Certificate</span>
                    <ExternalLink size={14} className="text-accent opacity-60" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal / Popup */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-[900px] max-h-[90vh] bg-bg-secondary border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/[0.02]">
                <div>
                  <h3 className="text-xl font-bold text-text-primary">{selectedCert.title}</h3>
                  <p className="text-text-secondary text-sm">Certificate Preview</p>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => handleDownload(selectedCert.link, `${selectedCert.title}.jpeg`)}
                    className="p-3 bg-accent text-white rounded-xl hover:bg-accent/80 transition-colors flex items-center gap-2 font-bold text-sm"
                  >
                    <Download size={18} />
                    <span className="hidden sm:inline">Download</span>
                  </button>
                  <button 
                    onClick={() => setSelectedCert(null)}
                    className="p-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-auto p-4 sm:p-8 flex items-center justify-center bg-black/20">
                {selectedCert.link.endsWith('.pdf') ? (
                  <iframe 
                    src={selectedCert.link} 
                    className="w-full h-[60vh] rounded-xl border-0"
                    title={selectedCert.title}
                  />
                ) : (
                  <img 
                    src={selectedCert.link} 
                    alt={selectedCert.title}
                    className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-lg"
                  />
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
