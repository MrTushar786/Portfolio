/**
 * Global Configuration for Portfolio Links and Data
 */
export const CONFIG = {
  profile: {
    fullName: "Tushar Ahmad",
    email: "tusharahmad3.0@gmail.com",
    github: "https://github.com/MrTushar786",
    linkedin: "https://linkedin.com/in/tusharahmad786",
    portfolioRepo: "https://github.com/MrTushar786/Portfolio",
    role: "Full Stack Web Developer",
    location: "Remote · India",
    educationJourney: [
      {
        institution: "Lovely Professional University",
        degree: "B.Tech in Computer Science & Engineering",
        duration: "2023 – Present",
        location: "Phagwara, Punjab",
        highlight: "Current Milestone: Deep diving into Full Stack Engineering & System Design.",
        stats: "CGPA: 7.2"
      },
      {
        institution: "Kendriya Vidyalaya",
        degree: "Intermediate (Class XII)",
        duration: "2022 – 2023",
        location: "Haridwar, Uttarakhand",
        highlight: "Core Focus: Physics, Chemistry & Mathematics.",
        stats: "Percentage: 68%"
      },
      {
        institution: "Kendriya Vidyalaya",
        degree: "Matriculation (Class X)",
        duration: "2020 – 2021",
        location: "Haridwar, Uttarakhand",
        highlight: "Foundation of my logical thinking and scientific curiosity.",
        stats: "Percentage: 88%"
      }
    ],
    about: {
      bio: [
        "I am a Full Stack Web Developer and a Computer Science (B.Tech) student at Lovely Professional University. I specialize in building scalable, production-ready applications that bridge the gap between complex backend logic and intuitive user experiences.",
        "My approach is product-focused. Whether I'm architecting fintech platforms solo or engineering AI-driven mock interview systems, I take full ownership of the technical stack to ensure performance, security, and scalability. I build for the real world, not just for a portfolio."
      ],
      quote: "Building is good, but shipping is what proves skill."
    },
    status: {
      label: "Part-time Employee",
      location: "Remote"
    }
  },
  hero: {
    titles: [
      "Currently building fintech at SmartMoney AI",
      "I build scalable full stack applications",
      "I ship products, not just projects",
      "Frontend Web Developer at a real startup"
    ],
    subtitle: "Full Stack Web Developer · Software Engineer · Builder. I don't just write code — I build products that work in production.",
    stats: [
      { label: "Location", value: "Remote · India" },
      { label: "Experience", value: "2+ Years" },
      { label: "Focus", value: "Full Stack" }
    ]
  },
  experience: [
    {
      company: "SmartMoney AI",
      role: "Frontend Web Developer",
      type: "Part-time employee",
      duration: "Dec 2025 – Present",
      location: "Remote · India",
      isCurrent: true,
      description: "SmartMoney AI is an AI-powered fintech startup building intelligent investment tools for Indian retail investors to analyze mutual fund portfolios, track financial goals, and get AI-driven insights.",
      highlight: "I am the sole Frontend Web Developer, collaborating directly with the founding team to ship production-ready interfaces. I own every screen, component, and animation.",
      tech: ['React 19', 'Vite', 'TS', 'Capacitor', 'NestJS', 'SSE', 'Docker']
    },
    {
      company: "Boston Scientific",
      role: "Web Development Intern",
      type: "Internship",
      duration: "June 2025 – July 2025",
      location: "On-site · Pune",
      isCurrent: false,
      paragraphs: [
        "Engineered a robust full-stack interview system that allows admins to schedule specialized interviews across various technical fields. The platform enables users to take interviews in a monitored environment with live interviewer presence.",
        "Implemented real-time user activity tracking using Socket.io, allowing interviewers to monitor candidate progress live. For enhanced security, I developed integrated anti-cheat mechanisms including tab-switch detection and navigation restrictions to ensure a professional and integrity-focused interview experience."
      ],
      tech: ['React.js', 'NestJS', 'PostgreSQL', 'Socket.io', 'Docker']
    }
  ],
  projects: [
    {
      id: "tutorhive",
      title: "TutorHive",
      type: "Full-Stack Development",
      github: "https://github.com/MrTushar786/TutorHive",
      live: "https://tutorhivee.vercel.app/",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "npm"]
    },
    {
      id: "hostelmanix",
      title: "HostelManix",
      type: "Management System",
      github: "https://github.com/MrTushar786/HostelManix",
      live: "https://hostelmanix.vercel.app/",
      tech: ["React", "Express.js", "MongoDB Atlas"]
    },
    {
      id: "cv-builder",
      title: "CV Builder",
      type: "Frontend Tool",
      github: "https://github.com/MrTushar786/CV-Builder",
      live: "https://cv-builder-xi-seven.vercel.app/",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS"]
    },
    {
      id: "repairly",
      title: "Repairly",
      type: "Workflow Platform",
      github: "https://github.com/MrTushar786/Repairly",
      live: "https://repairly.in/",
      tech: ["JavaScript", "Node.js", "Express.js", "MongoDB"]
    }
  ],
  certifications: [
    {
      title: "Java Programming (Core + OOP)",
      issuer: "NeoColab",
      date: "May 2025",
      color: "#007396",
      link: "https://drive.google.com/file/d/1ikiOJlvTdlynaIUPunt-slvWeeKb28S_/view"
    },
    {
      title: "NPTEL Cloud Computing",
      issuer: "Swayam",
      date: "Feb 2025",
      color: "#4F46E5",
      link: "https://drive.google.com/file/d/1AC6BiJ0dyr6srqnFA7wL7I2bBs-2SUVJ/view"
    },
    {
      title: "Programming in C++",
      issuer: "NeoColab",
      date: "Dec 2024",
      color: "#00599C",
      link: "https://drive.google.com/file/d/1sWCBkl9IW-UGgJsHGssHR8x6XpxyCRUM/view"
    },
    {
      title: "Data Structures & Algorithm",
      issuer: "NeoColab",
      date: "Dec 2024",
      color: "#10B981",
      link: "https://drive.google.com/file/d/1GJvSz5npxyPq2p_2tOTKY9fxcDBRb6E9/view"
    },
    {
      title: "Backend Web Development",
      issuer: "Rising Tech Pro",
      date: "March 2024",
      color: "#F59E0B",
      link: "https://drive.google.com/file/d/1SyukQTyjZcpaT805uAGw87tuyqrONgtt/view"
    }
  ],
  achievements: [
    {
      title: "Code-A-Haunt (24-hour Hackathon)",
      role: "Hackathon Participant",
      date: "Feb 2024",
      description: "Demonstrated intense problem-solving and team collaboration under pressure. Focused on rapid development, efficient task distribution, and decision-making in a time-bound environment."
    }
  ],
  skills: {
    Frontend: ['React 19', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap', 'Three.js'],
    Backend: ['NestJS', 'Node.js', 'Express.js', 'FastAPI', 'Socket.io'],
    Databases: ['PostgreSQL', 'MongoDB', 'MySQL'],
    'DevOps & Tools': ['Docker', 'Git', 'GitHub', 'Bitbucket', 'Vercel', 'Netlify', 'npm', 'Postman'],
    Languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'C++', 'PHP'],
    'Design & Other': ['Figma', 'Adobe Photoshop', 'Canva', 'Supabase']
  },
  navLinks: [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Experience', target: 'experience' },
    { name: 'Projects', target: 'projects' },
    { name: 'Awards', target: 'certifications' },
  ],
  sections: {
    about: { title: "About Me", subtitle: "The journey from student to builder." },
    experience: { title: "Experience", subtitle: "Real work, real impact." },
    projects: { title: "Other Projects", subtitle: "A showcase of full-stack engineering projects." },
    certifications: { title: "Certifications & Achievements", subtitle: "Verified skills and competitive wins." },
    techStack: { title: "Tech Stack", subtitle: "Tools I use to ship production software." }
  }
};
