export const portfolioData = {
  // Personal Information
  personal: {
    name: "Seif Mohsen Ibrahim Abdelfattah",
    title: "Computer Engineering Student & Software Engineer",
    email: "seifmohsen324@gmail.com", 
    phone: "+20 1010244955", 
    location: "Egypt",
    cvLink: "/cv/Seif-Mohsen-CV.html", // CV file in public/cv/
  },

  // About Section
  about: {
    headline: "Building innovative software solutions",
    description: [
      "Sophomore Computer Engineering student at Egypt University of Informatics focused on building reliable software and engineering systems.",
      "I work across software engineering, AI/ML, cybersecurity, systems programming, and embedded systems, using fundamentals from computer engineering to turn ideas into practical projects.",
      "Full-stack web development is my side job and delivery skill: I build responsive web apps with React, Next.js, JavaScript, HTML, and CSS when a project needs a polished interface.",
    ],
    stats: [
      { label: "Projects Completed", value: "15+" },
      { label: "Internship Experience", value: "1" },
      { label: "Leadership Roles", value: "2" },
      { label: "Certifications", value: "3" },
    ],
  },

  // Technical Skills
  skills: {
    technical: {
      languages: [
        { name: "C", level: 90 },
        { name: "C++", level: 85 },
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
      ],
      technologies: [
        { name: "Linux", level: 85 },
        { name: "MATLAB", level: 80 },
        { name: "FPGA", level: 75 },
        { name: "Assembly", level: 70 },
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
      ],
    },
    soft: [
      "Problem Solving",
      "Teamwork",
      "Leadership",
      "Fast Learner",
      "Communication",
      "Time Management",
    ],
  },

  // Experience
  experience: [
    {
      title: "AI & Machine Learning Intern",
      company: "Elevo Pathway",
      location: "Egypt",
      period: "2024",
      description:
        "Contributed to machine learning projects focusing on data preprocessing, model training, and validation.",
      achievements: [
        "Built ML models using Python and scikit-learn",
        "Worked on data preprocessing and feature engineering",
        "Validated model performance on real datasets",
      ],
      technologies: ["Python", "scikit-learn", "ML"],
    },
    {
      title: "PR Leader",
      company: "ODC Club (Open Data Center)",
      location: "Egypt University of Informatics",
      period: "2023 - 2024",
      description:
        "Led a team of 10 members, organizing events and managing community engagement.",
      achievements: [
        "Led and coordinated a team of 10 members",
        "Organized multiple tech events and workshops",
        "Built community around open data initiatives",
      ],
      technologies: ["Leadership", "Event Management", "Community Building"],
    },
    {
      title: "University Ambassador",
      company: "Egypt University of Informatics",
      location: "Egypt",
      period: "2023 - Present",
      description:
        "Guided and supported new students, helping them transition and succeed in their academic journey.",
      achievements: [
        "Mentored and guided new students",
        "Supported student engagement and integration",
        "Represented university at orientation events",
      ],
      technologies: ["Mentoring", "Leadership", "Student Support"],
    },
  ],

  // Projects
  projects: [
    {
      title: "ShopNova Product Landing Page",
      description:
        "A polished product landing page designed to present a modern shopping brand with clear sections, responsive layout, and focused calls to action.",
      shortDescription: "Responsive product landing page",
      image: "/optimized/shopnova-real-800.webp",
      tags: ["Web Development", "Landing Page", "UI Design", "Responsive"],
      github: "https://github.com/seifmohsen324/Shopnova-E-Commerce-Landing-Page",
      featured: true,
    },
    {
      title: "Balaghny Web App",
      description:
        "A full-stack web application where I built both the frontend and backend, including website scraping to collect and compare pricing data.",
      shortDescription: "Full-stack price scraping web app",
      image: "/optimized/balaghny-real-800.webp",
      tags: ["Full Stack", "Backend", "Frontend", "Web Scraping", "Pricing"],
      github: "#projects",
      codeStatus: "comingSoon",
      featured: true,
    },
    {
      title: "PhishGuard Browser Extension",
      description:
        "A browser extension that detects and protects against phishing attacks using machine learning.",
      shortDescription: "AI-powered phishing detection browser extension",
      image: "/optimized/phishguard-800.webp",
      tags: ["Python", "JavaScript", "ML", "Cybersecurity"],
      github: "https://github.com/seifmohsen324/PhishGuard", 
      featured: true,
    },
    {
      title: "Traffic Sign Recognition",
      description:
        "A computer vision model built in a Jupyter Notebook to classify traffic signs from image data.",
      shortDescription: "Computer vision traffic sign classifier",
      image: "/optimized/traffic-sign-recognition.svg",
      tags: ["Python", "Computer Vision", "ML", "Jupyter Notebook"],
      github: "https://github.com/seifmohsen324/traffic-sign-recognition-",
    },
    {
      title: "Sales Forecasting",
      description:
        "A notebook-based machine learning project for forecasting sales patterns from historical data.",
      shortDescription: "Sales prediction ML notebook",
      image: "/optimized/sales-forecasting.svg",
      tags: ["Python", "Forecasting", "ML", "Data Analysis"],
      github: "https://github.com/seifmohsen324/sales-forecasting",
    },
    {
      title: "Movie Recommendation System",
      description:
        "A recommendation-system project that suggests movies based on patterns in user or item data.",
      shortDescription: "Movie recommendation engine",
      image: "/optimized/movie-recommendation-system.svg",
      tags: ["Python", "Recommendation System", "ML", "Jupyter Notebook"],
      github: "https://github.com/seifmohsen324/movie-recommendation-system-",
    },
    {
      title: "Loan Approval Prediction",
      description:
        "A machine learning notebook for predicting loan approval outcomes from applicant and financial features.",
      shortDescription: "Loan approval classification model",
      image: "/optimized/loan-approval-prediction.svg",
      tags: ["Python", "Classification", "ML", "Data Analysis"],
      github: "https://github.com/seifmohsen324/loan-approval-prediction-description-",
    },
    {
      title: "Customer Segmentation with Clustering",
      description:
        "An unsupervised learning project that groups customers into segments using clustering techniques.",
      shortDescription: "Customer clustering analysis",
      image: "/optimized/customer-segmentation.svg",
      tags: ["Python", "Clustering", "ML", "Data Analysis"],
      github: "https://github.com/seifmohsen324/Customer-Segmentation-with-Clustering",
    },
    {
      title: "Student Score Prediction Model",
      description:
        "A predictive notebook that models student performance using learning and activity-related features.",
      shortDescription: "Student performance prediction",
      image: "/optimized/student-score-prediction.svg",
      tags: ["Python", "Regression", "ML", "Jupyter Notebook"],
      github: "https://github.com/seifmohsen324/student-score-predection-model",
    },
    {
      title: "Sudoku Game",
      description:
        "An interactive Sudoku game with solving algorithms and difficulty levels.",
      shortDescription: "Interactive puzzle game with AI solver",
      image: "/optimized/sudoku-game-800.webp",
      tags: ["C++", "Algorithms"],
      github: "https://github.com/seifmohsen324/Sudoku",
      featured: true,
    },
    {
      title: "Library Management System",
      description:
        "A comprehensive library management system for book tracking, user management, and transactions.",
      shortDescription: "Complete library management solution",
      image: "/optimized/library-management-system-800.webp",
      tags: ["C++", "Database", "System Design"],
      github: "https://github.com/seifmohsen324/university-library-system",
      featured: true,
    },
    {
      title: "Noise Filtering System",
      description:
        "Signal processing system for filtering noise from audio and sensor data.",
      shortDescription: "Audio/signal noise filtering system",
      image: "/optimized/noise-filtering-system-800.webp",
      tags: ["MATLAB", "Signal Processing", "DSP"],
      github: "#projects",
      codeStatus: "comingSoon",
    },
    {
      title: "Maze Solving Car",
      description:
        "Embedded system for autonomous car that solves mazes using sensors and algorithms.",
      shortDescription: "Autonomous maze-solving robot",
      image: "/optimized/maze-solving-car-800.webp",
      tags: ["Embedded Systems", "C", "Robotics", "FPGA"],
      github: "https://github.com/seifmohsen324/Manual-and-Autonomus-maze-solving-car",
    },
    {
      title: "Linux Task Manager",
      description:
        "Command-line task manager for Linux systems with process monitoring and management.",
      shortDescription: "Linux process management tool",
      image: "/optimized/linux-task-manager-800.webp",
      tags: ["C", "Linux", "System Programming"],
      github: "https://github.com/seifmohsen324/Linux-Task-Manager",
    },
    {
      title: "Akinator-Style Country Guessing Game",
      description:
        "Interactive guessing game that predicts countries based on user answers.",
      shortDescription: "AI-powered country prediction game",
      image: "/optimized/akinator-800.webp",
      tags: ["Python", "AI", "Game Development"],
      github: "https://github.com/seifmohsen324/Akinator-country-guessing-game-",
    },
    {
      title: "Customized Feed Algorithm",
      description:
        "Machine learning algorithm that personalizes content feed based on user preferences and behavior.",
      shortDescription: "Personalized content feed ML system",
      image: "/optimized/customized-feed-algorithm-800.webp",
      tags: ["Python", "ML", "Algorithms"],
      github: "https://github.com/seifmohsen324/Customized-Feed-Algorithm",
    },
    {
      title: "Social Media & Smartphone Addiction Analysis",
      description:
        "A data analysis notebook exploring patterns and indicators around social media and smartphone addiction.",
      shortDescription: "Behavioral data analysis notebook",
      image: "/optimized/social-media-smartphone-addiction.svg",
      tags: ["Python", "Data Analysis", "ML", "Jupyter Notebook"],
      github: "https://github.com/seifmohsen324/Social-Media-Smartphones-Addiction",
    },
    {
      title: "Hangman Game",
      description:
        "A classic Hangman word game implemented in C with interactive guessing logic.",
      shortDescription: "Classic C terminal game",
      image: "/optimized/hangman-game.svg",
      tags: ["C", "Game Development", "CLI"],
      github: "https://github.com/seifmohsen324/Hangman-Game",
    },
  ],

  // Certifications
  certifications: [
    {
      name: "Cisco CCNA",
      issuer: "Cisco",
      date: "2024",
      description: "Networking fundamentals and enterprise networking",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "IBM Cybersecurity",
      issuer: "IBM",
      date: "2024",
      description: "Cybersecurity principles and best practices",
      color: "from-orange-400 to-red-600",
    },
    {
      name: "ALX AICE",
      issuer: "ALX Africa",
      date: "2024",
      description: "Advanced AI and Cloud Engineering",
      color: "from-purple-400 to-pink-600",
    },
  ],

  // Social Links
  social: {
    github: "https://github.com/seifmohsen324", 
    linkedin: "https://www.linkedin.com/in/seifmohsen/", 
    email: "seifmohsen324@gmail.com", 
  },

  // Contact Form
  contact: {
    title: "Let's Create Something Amazing",
    description:
      "Have a project idea, want to collaborate, or just want to chat? Feel free to reach out!",
  },

  // Navigation
  navigation: [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ],
}
