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
      label: "Part-time Intern",
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
      type: "Part-time Intern",
      duration: "Dec 2025 – Present",
      location: "Remote · India",
      isCurrent: true,
      points: [
        "Founding team engineer responsible for architecting and building the entire frontend ecosystem from prototype to production.",
        "Engineered an automated eCAS Portfolio Parser that analyzes mutual fund statements to eliminate manual data entry for users.",
        "Developed interactive financial dashboards to track Net Worth, Portfolio Health, and Expense breakdowns in real-time.",
        "Integrated 'MyGuide'—a conversational AI companion that provides streaming, context-aware financial advice and portfolio insights.",
        "Designed a comprehensive Goal Management system to simulate and track future financial targets like retirement and wealth planning.",
        "Deployed the platform as native iOS and Android applications via Capacitor, ensuring full feature parity across all devices."
      ],
      tech: ['React 19', 'Vite', 'TS', 'Capacitor', 'NestJS', 'SSE', 'Docker']
    },
    {
      company: "Boston Scientific",
      role: "Web Development Intern",
      type: "Internship",
      duration: "June 2025 – July 2025",
      location: "Pune, India",
      isCurrent: false,
      points: [
        "Designed and developed an end-to-end automated interview system that allows administrators to schedule and launch customizable technical interview sessions with configurable durations and subject focus.",
        "Built an intuitive candidate interview interface supporting multi-modal responses including text and Voice-to-Text, along with anti-cheat measures such as tab-switch detection.",
        "Implemented real-time interview monitoring using Socket.IO, enabling interviewers to track candidate activity live and dynamically push new questions during an active interview.",
        "Developed an AI-assisted scoring engine integrated within the admin panel to automatically analyze candidate responses and generate evaluation scores.",
        "Created a centralized HR dashboard to manage interview history, review AI-generated reports, and monitor the overall hiring workflow."
      ],
      tech: ['React', 'NestJS', 'PostgreSQL', 'Socket.IO', 'Docker']
    }
  ],
  projects: [
    {
      id: "tutorhive",
      title: "TutorHive",
      type: "Online Tutor Booking Platform",
      github: "https://github.com/MrTushar786/TutorHive",
      live: "https://tutorhivee.vercel.app/",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "npm"],
      image: "/previews/tutorhive_preview.png",
      features: [
        "Spearheaded the development of a full-stack ecosystem combining tutor discovery, session booking, and profile management into a unified workflow.",
        "Constructed a responsive React frontend with reusable components to ensure consistent UI/UX and seamless navigation across all devices.",
        "Deployed robust RESTful APIs using MongoDB to facilitate efficient data handling and centralized management of tutors, students, and bookings."
      ]
    },
    {
      id: "hostelmanix",
      title: "HostelManix",
      type: "Hostel Management System",
      github: "https://github.com/MrTushar786/HostelManix",
      live: "https://hostelmanix.vercel.app/",
      tech: ["React", "Node.js", "Express.js", "MongoDB Atlas", "npm"],
      image: "/previews/hostelmanix_preview.png",
      features: [
        "Consolidated 4+ core hostel operations (allocations, records, attendance, complaints) into a centralized platform, boosting administrative efficiency by 30%.",
        "Designed a high-fidelity frontend with 15+ reusable components, ensuring intuitive navigation and responsiveness.",
        "Optimized data architecture with MongoDB Atlas APIs to achieve 2-3x faster retrieval rates and high-availability storage for dashboard operations."
      ]
    },
    {
      id: "cv-builder",
      title: "CV Builder",
      type: "Online Resume Creation Platform",
      github: "https://github.com/MrTushar786/CV-Builder",
      live: "https://cv-builder-xi-seven.vercel.app/",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "npm"],
      image: "/previews/cvbuilder_preview.png",
      features: [
        "Launched a modern resume-building engine featuring 100% customizable templates, real-time editing, and instant 1:1 live previews.",
        "Fabricated a modular UI utilizing 20+ React and TypeScript components, optimized with Vite for rapid build times and Tailwind for fluidity.",
        "Streamlined user experience through efficient state management and a scalable architecture capable of handling complex user flows."
      ]
    },
    {
      id: "repairly",
      title: "Repairly",
      type: "Service Management & Booking Platform",
      github: "https://github.com/MrTushar786/Repairly",
      live: "https://repairly.in/",
      tech: ["React", "Supabase", "Tailwind CSS", "Git"],
      image: "/previews/repairly_preview.png",
      features: [
        "Developed a comprehensive mobile repair shop management system featuring a customer-facing portal and a robust administrative dashboard.",
        "Engineered an end-to-end booking workflow and product catalog allowing users to discover available models and schedule repair requests seamlessly.",
        "Built a high-control Admin Panel for real-time management of device models, service listings, booking statuses, and automated shop availability messaging.",
        "Integrated Google Authentication for secure user onboarding and Supabase for real-time database management and backend services."
      ]
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
