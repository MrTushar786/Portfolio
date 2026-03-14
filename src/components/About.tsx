import { motion } from 'framer-motion';
import { CONFIG } from '../config';
import { GraduationCap, MapPin, Calendar, Star } from 'lucide-react';

export default function About() {
  const { profile } = CONFIG;

  return (
    <section id="about" className="w-full max-w-[1200px] mx-auto py-32 px-6">
      <div className="mb-12 sm:mb-16 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">{CONFIG.sections.about.title}</h2>
        <p className="text-text-secondary text-sm sm:text-[1.1rem]">{CONFIG.sections.about.subtitle}</p>
      </div>

      <div className="grid grid-cols-12 gap-6 mb-12">
        {/* Main Bio Card */}
        <motion.div
          className="col-span-12 lg:col-span-8 order-2 lg:order-1 group relative rounded-3xl bg-bg-secondary border border-[var(--glass-border)] p-8 interactive-card will-change-[transform,opacity]"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <h3 className="text-[1.8rem] mb-4 text-text-primary">I'm {profile.fullName}</h3>

          {profile.about.bio.map((paragraph, i) => (
            <p key={i} className="text-text-secondary mb-4 text-[1.05rem] leading-relaxed">
              {paragraph}
            </p>
          ))}

          <div className="mt-6 p-4 rounded-xl bg-accent/10 border border-accent">
            <p className="text-accent font-bold">
              "{profile.about.quote}"
            </p>
          </div>
        </motion.div>

        {/* Profile Stats Card */}
        <motion.div
          className="col-span-12 lg:col-span-4 order-1 lg:order-2 group relative rounded-3xl bg-bg-secondary border border-[var(--glass-border)] interactive-card p-0 flex items-center justify-center min-h-[300px] will-change-[transform,opacity]"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="/photo.png"
            alt={`${profile.fullName} Profile`}
            className="w-full h-full object-cover object-[center_20%] grayscale-[0.1] contrast-[1.1]"
          />
          <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
            <p className="font-bold text-[1.1rem]">{profile.fullName}</p>
            <p className="text-[0.85rem] opacity-90">{profile.role}</p>
          </div>
        </motion.div>

        <div className="col-span-12 mt-8 order-3 lg:order-3">
          <h3 className="text-[1.5rem] mb-6 text-text-primary">Education Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.educationJourney.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                className="group relative rounded-3xl bg-bg-secondary border border-[var(--glass-border)] p-8 interactive-card flex flex-col h-full will-change-[transform,opacity]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="flex items-start gap-4 h-full">
                  <div className="p-[10px] bg-accent/10 rounded-xl shrink-0">
                    <GraduationCap size={24} className="text-accent" />
                  </div>
                  <div className="flex-1 flex flex-col h-full">
                    <h4 className="text-[1.2rem] mb-1 text-text-primary">{edu.institution}</h4>
                    <p className="text-accent font-semibold text-[0.9rem] mb-3">{edu.degree}</p>

                    <div className="flex flex-col gap-2 text-text-secondary text-[0.85rem] mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} /> {edu.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} /> {edu.location}
                      </div>
                      <div className="flex items-center gap-2 text-text-primary font-semibold mt-1">
                        <Star size={14} className="text-[#FFD700]" /> {edu.stats}
                      </div>
                    </div>

                    <div className="mt-auto p-3 bg-text-primary/[0.03] rounded-lg text-[0.85rem] italic border-l-2 border-accent">
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
