import { motion } from 'framer-motion';
import { 
  SiReact, SiTypescript, SiJavascript, SiVite, SiTailwindcss, SiHtml5, SiCss, SiBootstrap, SiThreedotjs, 
  SiNestjs, SiNodedotjs, SiExpress, SiFastapi, SiSocketdotio, SiPostgresql, SiMongodb, SiMysql, 
  SiDocker, SiGit, SiGithub, SiBitbucket, SiVercel, SiNetlify, SiNpm, SiPostman, SiFigma, 
  SiCanva, SiSupabase, SiPython, SiOpenjdk, SiC, SiCplusplus, SiPhp 
} from 'react-icons/si';

const techConfig: Record<string, { icon: any, color: string, slug: string }> = {
  'React 19': { icon: SiReact, color: '#61DAFB', slug: 'React' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6', slug: 'TypeScript' },
  'JavaScript': { icon: SiJavascript, color: '#F7DF1E', slug: 'JavaScript' },
  'Vite': { icon: SiVite, color: '#646CFF', slug: 'Vite' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4', slug: 'Tailwind CSS' },
  'HTML5': { icon: SiHtml5, color: '#E34F26', slug: 'HTML5' },
  'CSS3': { icon: SiCss, color: '#1572B6', slug: 'CSS3' },
  'Bootstrap': { icon: SiBootstrap, color: '#7952B3', slug: 'Bootstrap' },
  'Three.js': { icon: SiThreedotjs, color: '#000000', slug: 'Three.js' },
  'NestJS': { icon: SiNestjs, color: '#E0234E', slug: 'NestJS' },
  'Node.js': { icon: SiNodedotjs, color: '#339933', slug: 'Node.js' },
  'Express.js': { icon: SiExpress, color: '#000000', slug: 'Express.js' },
  'FastAPI': { icon: SiFastapi, color: '#05998B', slug: 'FastAPI' },
  'Socket.io': { icon: SiSocketdotio, color: '#010101', slug: 'Socket.io' },
  'PostgreSQL': { icon: SiPostgresql, color: '#4169E1', slug: 'PostgreSQL' },
  'MongoDB': { icon: SiMongodb, color: '#47A248', slug: 'MongoDB' },
  'MySQL': { icon: SiMysql, color: '#4479A1', slug: 'MySQL' },
  'Docker': { icon: SiDocker, color: '#2496ED', slug: 'Docker' },
  'Git': { icon: SiGit, color: '#F05032', slug: 'Git' },
  'GitHub': { icon: SiGithub, color: '#181717', slug: 'GitHub' },
  'Bitbucket': { icon: SiBitbucket, color: '#0052CC', slug: 'Bitbucket' },
  'Vercel': { icon: SiVercel, color: '#000000', slug: 'Vercel' },
  'Netlify': { icon: SiNetlify, color: '#00C7B7', slug: 'Netlify' },
  'npm': { icon: SiNpm, color: '#CB3837', slug: 'npm' },
  'Postman': { icon: SiPostman, color: '#FF6C37', slug: 'Postman' },
  'Figma': { icon: SiFigma, color: '#F24E1E', slug: 'Figma' },
  'Adobe Photoshop': { icon: SiFigma, color: '#31A8FF', slug: 'Photoshop' }, // Workaround icon
  'Canva': { icon: SiCanva, color: '#00C4CC', slug: 'Canva' },
  'Supabase': { icon: SiSupabase, color: '#3ECF8E', slug: 'Supabase' },
  'Python': { icon: SiPython, color: '#3776AB', slug: 'Python' },
  'Java': { icon: SiOpenjdk, color: '#007396', slug: 'Java' },
  'C': { icon: SiC, color: '#A8B9CC', slug: 'C' },
  'C++': { icon: SiCplusplus, color: '#00599C', slug: 'C++' },
  'PHP': { icon: SiPhp, color: '#777BB4', slug: 'PHP' },
};

const skills = {
  Frontend: ['React 19', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap', 'Three.js'],
  Backend: ['NestJS', 'Node.js', 'Express.js', 'FastAPI', 'Socket.io'],
  Databases: ['PostgreSQL', 'MongoDB', 'MySQL'],
  'DevOps & Tools': ['Docker', 'Git', 'GitHub', 'Bitbucket', 'Vercel', 'Netlify', 'npm', 'Postman'],
  Languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'C++', 'PHP'],
  'Design & Other': ['Figma', 'Adobe Photoshop', 'Canva', 'Supabase']
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="container section-padding">
      <div className="section-header">
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">Tools I use to ship production software.</p>
      </div>

      <div className="tech-stack-container">
        {Object.entries(skills).map(([category, items], sectionIdx) => (
          <motion.div 
            key={category}
            className="tech-category-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: sectionIdx * 0.1 }}
          >
            <h3 className="tech-category-title">{category}</h3>
            <div className="tech-chips-wrapper">
              {items.map((tech) => {
                const config = techConfig[tech];
                if (!config) return null;
                const Icon = config.icon;
                
                return (
                  <motion.div 
                    key={tech} 
                    className="branded-tech-chip"
                    style={{ backgroundColor: config.color }}
                    whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
                  >
                    <Icon className="tech-icon" />
                    <span className="tech-name">{config.slug}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
