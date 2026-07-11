export const portfolioData = {
  personal: {
    name: "Gorusu Yeswanth Reddy",
    initials: "GYR",
    role: ["Full Stack Developer", "AI Enthusiast", "Problem Solver", "Backend Engineer", "LeetCode Warrior"],
    location: "Visakhapatnam, Andhra Pradesh, India",
    email: "yeswanth@email.com",
    phone: "+91 98765 43210",
    github: "https://github.com/yeswanthreddy2801-lab",
    linkedin: "https://linkedin.com/in/yeswanth",
    about: [
      "I am an Information Technology engineering student with a deep passion for full stack development and artificial intelligence. I thrive on turning complex ideas into functional, working products that deliver real value.",
      "My core focus areas include Full Stack Development, Artificial Intelligence, Backend Engineering, System Design, and Problem Solving. I approach software engineering with a builder's mindset over a tutorial mindset, prioritizing clean, scalable, and maintainable code in everything I create.",
      "Currently, I am deeply focused on studying Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), vector databases, and AI agents. I believe in continuous learning and adapting to the cutting edge of technology."
    ],
    stats: {
      projectsBuilt: "4+",
      cgpa: "9.34/10",
      leetcode: "600+",
      internshipExperience: "1"
    }
  },
  skills: {
    programming: ["C++", "Java", "Python", "JavaScript", "TypeScript"],
    frontend: ["React", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "Express.js", "REST APIs"],
    databases: ["MongoDB", "MySQL", "Supabase (PostgreSQL)"],
    auth: ["JWT", "bcrypt"],
    stateManagement: ["Zustand"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Docker (Basic)"],
    ai: ["Prompt Engineering", "AI Tools", "LLMs", "RAG (Learning)", "Vector Databases (Learning)"]
  },
  projects: [
    {
      title: "ProteinBox 🥗",
      badge: "Flagship Project ⭐",
      gradient: "from-blue-500 to-green-500",
      description: "A production-grade, full-stack subscription platform for personalized healthy protein breakfast delivery. Users customize their breakfast box by selecting from 25+ protein-rich food items, track nutrition macros in real time, and manage monthly delivery subscriptions — all with zero online payment. The platform supports three distinct user roles: Customer, Admin, and Delivery Boy, each with dedicated dashboards and workflows.",
      features: [
        "Mobile-number-only authentication (no passwords for customers)",
        "Interactive Container Builder with fly-to-box animation",
        "Live nutrition calculator (protein, calories, price)",
        "Three subscription plans: Veg, Non-Veg, High Protein Fitness",
        "Admin dashboard with approval workflow and order management",
        "Delivery Boy dashboard with map integration, route navigation, and real-time delivery status updates",
        "Google Maps integration for address selection and navigation",
        "Supabase PostgreSQL backend with role-based access control",
        "Real-time notifications per user role",
        "Optimistic UI updates on all mutations"
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Supabase", "JWT", "Google Maps API", "Zustand", "Framer Motion"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Real-Time Auction & Bidding Platform 🔨",
      gradient: "from-orange-500 to-red-500",
      description: "A live auction platform enabling users to create auctions, place real-time competitive bids, and track bid history with live countdowns. Designed for low-latency bid updates and concurrent user handling.",
      features: [
        "Real-time bidding with live updates",
        "Countdown auction timers",
        "Complete bid history per item",
        "User authentication and protected routes",
        "Admin controls for auction management",
        "Responsive mobile-first UI"
      ],
      tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Custom Programming Language & Online Compiler 💻",
      badge: "In Progress 🔧",
      gradient: "from-purple-500 to-blue-500",
      description: "Building a custom programming language and compiler from scratch, inspired by platforms like LeetCode and HackerRank. Includes a full lexer, parser, and interpreter pipeline with an online IDE.",
      features: [
        "Lexer and tokenizer implementation",
        "Parser and AST generation",
        "Tree-walk interpreter",
        "Online code editor with syntax highlighting",
        "Sandboxed code execution",
        "Docker-based isolation (planned)",
        "Problem-solving platform (future)"
      ],
      tech: ["Python", "JavaScript", "React", "Docker", "Node.js"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "AI Code Comment Generator 🤖",
      badge: "AI Project 🧠",
      gradient: "from-cyan-500 to-purple-500",
      description: "An AI-powered VS Code extension that intelligently generates meaningful, context-aware code comments by understanding developer workflow and code logic. Reduces documentation overhead and improves codebase maintainability.",
      features: [
        "Tracks developer coding patterns",
        "Understands code logic and intent",
        "Auto-generates professional comments",
        "Stores reasoning for code decisions",
        "Integrates with LLMs (planned: GPT-4 / local models)",
        "Improves long-term code maintainability"
      ],
      tech: ["Python", "VS Code API", "TypeScript", "LLMs", "Prompt Engineering"],
      githubLink: "#",
      liveLink: "#"
    }
  ],
  timeline: [
    {
      year: "2021",
      title: "Started B.Tech (IT)",
      description: "ANITS, Visakhapatnam. Began learning programming with C++."
    },
    {
      year: "2022",
      title: "Competitive Programming Begins",
      description: "Started solving on LeetCode. Focus on DSA, algorithms, problem solving fundamentals."
    },
    {
      year: "2023",
      title: "Full Stack Development",
      description: "Learned React, Node.js, Express, MongoDB. Built first full-stack projects. Explored backend architecture."
    },
    {
      year: "2024",
      title: "Internship",
      description: "Full Stack Developer Intern at Cificap Platform Services Pvt Ltd (Remote). Worked on production-level software, modern web technologies, and real-world development practices."
    },
    {
      year: "2024",
      title: "AI Learning Journey Begins",
      description: "Started studying LLMs, Prompt Engineering, RAG, Vector Databases, AI Agents. Building AI-powered projects."
    },
    {
      year: "2024–25",
      title: "ProteinBox",
      description: "Flagship full-stack project: built complete subscription delivery platform with three role dashboards, maps, and real-time features."
    },
    {
      year: "Future",
      title: "Open to Opportunities",
      description: "Seeking Full Stack / AI roles at innovative product companies."
    }
  ],
  achievements: [
    {
      icon: "🏆",
      title: "600+ LeetCode Problems Solved",
      description: "Strong DSA fundamentals across arrays, graphs, DP, trees."
    },
    {
      icon: "📊",
      title: "CGPA: 9.34 / 10",
      description: "Consistent academic excellence in Information Technology."
    },
    {
      icon: "🤖",
      title: "AI with ChatGPT — Certification",
      description: "Certified in practical AI prompt engineering and tools."
    },
    {
      icon: "📋",
      title: "GATE Qualified (CS)",
      description: "Qualified Graduate Aptitude Test in Engineering (CS/IT)."
    },
    {
      icon: "🚀",
      title: "4+ Full Stack Projects Built",
      description: "End-to-end products: subscription platforms, compilers, real-time systems, AI tools."
    },
    {
      icon: "📚",
      title: "Continuous Learning",
      description: "Currently studying: LLMs, RAG, Vector DBs, AI Agents, System Design, Cloud, Docker."
    }
  ],
  currentlyLearningRow1: ["Large Language Models", "RAG", "Vector Databases", "AI Agents", "System Design", "Cloud Deployment"],
  currentlyLearningRow2: ["Docker", "Kubernetes", "CI/CD", "Microservices", "GraphQL", "Web3 Basics"]
};
