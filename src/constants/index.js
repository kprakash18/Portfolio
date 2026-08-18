const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
    type: "theme",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Aug 2, 2026",
    title:
      "I Thought Backend Engineering Was About Code Until Production Proved Me Wrong",
    image: "/images/blog1.png",
    link: "https://medium.com/@prakashk23/you-finally-finished-the-feature-you-had-been-working-on-for-two-weeks-the-6837d762258d?sharedUserId=prakashk23",
  },
  {
    id: 2,
    date: "July 27, 2026",
    title:
      "JavaScript: Solving the Mystery of JavaScript Functions",
    image: "/images/JSblog.png",
    link: "https://webdeveloper4004.blogspot.com/",
  },
];

const techStack = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL", "C++"],
  },
  {
    category: "Frontend",
    items: ["React.js", "TypeScript", "Redux", "Zustand"],
  },
  {
    category: "UI & Styling",
    items: ["Tailwind","CSS" ,"shadcn/ui", "Lucide React"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express","BullMQ","WebSockets" ,"REST APIs"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Neo4j", "Redis"],
  },
  {
    category: "AI & ML",
    items: ["Python", "Scikit-Learn", "PCA", "K-Means"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker","Bash"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/kprakash18",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://github.com/kprakash18",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/k-prakash-420b06330",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

// Gallery items commented out for now:
// const gallery = [
//   {
//     id: 1,
//     img: "/images/gal1.png",
//   },
//   {
//     id: 2,
//     img: "/images/gal2.png",
//   },
//   {
//     id: 3,
//     img: "/images/gal3.png",
//   },
//   {
//     id: 4,
//     img: "/images/gal4.png",
//   },
// ];

const gallery = [];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1: Indian Microbiome Database
    {
      id: 5,
      name: "Indian Microbiome Database",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-8 left-8",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "Project Overview.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-8",
          subtitle: "Full-Stack Microbiome Analysis Platform",
          description: [
            "Indian Microbiome Database is a full-stack platform for analyzing microbial diversity in Indian foods.",
            "Featuring PostgreSQL, REST APIs, automated taxonomy enrichment, and interactive D3.js visualizations for exploring complex microbiome datasets.",
            "Enables researchers and scientists to search, filter, compare taxonomy structures, and discover food microbial interactions.",
            "Built with JavaScript, TypeScript, PostgreSQL, D3.js, HTML5, and Tailwind CSS.",
          ],
        },
        {
          id: 2,
          name: "Live Demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://database-sandy-seven.vercel.app",
          position: "top-5 left-48",
        },
        {
          id: 3,
          name: "GitHub Repo",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/kprakash18/Indian-Microbiome-Database",
          position: "top-5 left-88",
        },
        {
          id: 4,
          name: "Database-View.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-48 left-8",
          imageUrl: "/images/Db.png",
          images: [
            "/images/Db.png",
            "/images/Db1.png",
            "/images/Db2.png",
            "/images/Db3.png",
          ],
        },
      ],
    },

    // ▶ Project 2: BleachVerse Platform
    {
      id: 9,
      name: "BleachVerse Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-8 left-52",
      windowPosition: "top-[10vh] left-10",
      children: [
        {
          id: 1,
          name: "BleachVerse.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-8",
          subtitle: "Full-Stack Media Platform",
          description: [
            "BleachVerse is a dedicated content and media streaming platform with rich metadata querying and robust backend architecture.",
            "Built with Node.js, Express, JavaScript, and TypeScript.",
            "Engineered for high performance, caching, and clean RESTful API endpoint structures.",
          ],
        },
        {
          id: 2,
          name: "GitHub Repo",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/kprakash18/BleachVerse-backend",
          position: "top-5 left-48",
        },
        {
          id: 3,
          name: "Preview.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-48 left-8",
          imageUrl: "/images/comingSoon1.png",
        },
      ],
    },

    // ▶ Project 3: RBAC MERN Team Management
    {
      id: 11,
      name: "RBAC Team Management",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-8 left-96",
      windowPosition: "top-[15vh] left-16",
      children: [
        {
          id: 1,
          name: "RBAC Architecture.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-8",
          subtitle: "Role-Based Access Control System",
          description: [
            "Enterprise-grade Role-Based Access Control (RBAC) user and team management platform.",
            "Built with MongoDB, Express, React, and Node.js (MERN) with secure JWT tokens and encrypted credentials.",
            "Allows administrators to define roles, assign granular permissions, and manage organization hierarchy safely.",
          ],
        },
        {
          id: 2,
          name: "GitHub Repo",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/kprakash18/rbac-mern-team-management",
          position: "top-5 left-48",
        },
        {
          id: 3,
          name: "RBAC-Dashboard.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-48 left-8",
          imageUrl: "/images/comingSoon1.png",
        },
      ],
    },

    // ▶ Project 4: DSA Tracker Extension
    {
      id: 6,
      name: "DSA Tracker Extension",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-8",
      windowPosition: "top-[15vh] left-15",
      children: [
        {
          id: 1,
          name: "DSA Tracker.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-8",
          subtitle: "Automated LeetCode Tracker Chrome Extension",
          description: [
            "DSA Tracker is an automated LeetCode tracking Chrome Extension built with React 19, TypeScript, and Manifest V3.",
            "Features real-time DOM parsing, side-panel analytics, problem difficulty categorisation, and zero-latency local state persistence.",
            "Helps developers stay consistent by logging solved problems effortlessly as they practice on LeetCode.",
          ],
        },
        {
          id: 2,
          name: "Chrome Store",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://chromewebstore.google.com/detail/problem-tracker/lgefnafbconohdolbklkfaeeghelacop",
          position: "top-5 left-48",
        },
        {
          id: 3,
          name: "GitHub Repo",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/kprakash18/DSA-tacker",
          position: "top-5 left-88",
        },
        {
          id: 4,
          name: "Preview.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-48 left-8",
          imageUrl: "/images/DsaTracker0.png",
          images: [
            "/images/DsaTracker0.png",
            "/images/DsaTracker5.png",
            "/images/DsaTracker1.png",
            "/images/DsaTracker2.png",
            "/images/DsaTracker3.png",
            "/images/DsaTracker4.png",
          ],
        },
      ],
    },

    // ▶ Project 5: Autocopy Extension
    {
      id: 7,
      name: "Autocopy Extension",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-52",
      windowPosition: "top-[20vh] left-20",
      children: [
        {
          id: 1,
          name: "Autocopy Info.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-8",
          subtitle: "Privacy-First Clipboard Automation",
          description: [
            "A fast, privacy-first Chrome extension that automatically writes highlighted text to your clipboard.",
            "Tracks recent copy history with real-time toast confirmations, duplicate prevention, and website-specific permissions.",
            "Streamlines text copying for researchers, writers, and power users without extra keystrokes.",
          ],
        },
        {
          id: 2,
          name: "Chrome Store",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://chromewebstore.google.com/detail/auto-copy/oegadoigjijlnegdogbbhcmjaamkdnjd",
          position: "top-5 left-48",
        },
        {
          id: 3,
          name: "GitHub Repo",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/kprakash18/Autocopy-extension",
          position: "top-5 left-88",
        },
        {
          id: 4,
          name: "Extension.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-48 left-8",
          imageUrl: "/images/AutoCopy0.png",
          images: [
            "/images/AutoCopy0.png",
            "/images/AutoCopy1.jpeg",
            "/images/AutoCopy2.jpeg",
            "/images/AutoCopy3.jpeg",
            "/images/AutoCopy4.jpeg",
            "/images/AutoCopy5.jpeg",
          ],
        },
      ],
    },

    // ▶ Project 6: Keeper Note App
    {
      id: 10,
      name: "Keeper Note App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-96",
      windowPosition: "top-[25vh] left-24",
      children: [
        {
          id: 1,
          name: "Keeper Info.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-8",
          subtitle: "Full-Stack Note-Taking App",
          description: [
            "Keeper is a full-stack note taking app built with React, Node.js, Express, and MySQL.",
            "Features secure user authentication (Login/Signup), real-time note creation, editing, tagging, and responsive layout.",
            "Utilizes relational MySQL database schemas for data integrity and optimized queries.",
          ],
        },
        {
          id: 2,
          name: "GitHub Repo",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/kprakash18/Keeper",
          position: "top-5 left-48",
        },
        {
          id: 3,
          name: "Keeper-UI.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-48 left-8",
          imageUrl: "/images/keeper1.png",
          images: [
            "/images/keeper1.png",
            "/images/keeper2.png",
          ],
        },
      ],
    },

    // ▶ Project 7: Customer Segmentation ML
    {
      id: 12,
      name: "Customer Segmentation ML",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-96 left-8",
      windowPosition: "top-[25vh] left-28",
      children: [
        {
          id: 1,
          name: "ML Model Details.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-8",
          subtitle: "Unsupervised Machine Learning Clustering",
          description: [
            "Applies unsupervised machine learning techniques to segment customers based on purchasing behavior and demographic data.",
            "Implements K-Means clustering and PCA dimensionality reduction in Python to uncover distinct behavioral patterns.",
            "Enables businesses to optimize marketing strategies, personalization, and customer retention.",
          ],
        },
        {
          id: 2,
          name: "GitHub Repo",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/kprakash18/Customer-Segmentation-ML",
          position: "top-5 left-48",
        },
        {
          id: 3,
          name: "Clusters.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-48 left-8",
          imageUrl: "/images/comingSoon1.png",
        },
      ],
    },

    // ▶ Project 8: 3D Interactive Portfolio
    {
      id: 8,
      name: "3D Interactive Portfolio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-96 left-52",
      windowPosition: "top-[10vh] left-12",
      children: [
        {
          id: 1,
          name: "3D Portfolio.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-8",
          subtitle: "Three.js & WebGL 3D Portfolio",
          description: [
            "An immersive 3D interactive portfolio built using Three.js, React, and TypeScript.",
            "Showcases 3D interactive model rendering, smooth camera physics, custom shaders, and responsive WebGL design.",
            "Designed to offer visitors a captivating visual experience with seamless 60fps animations.",
          ],
        },
        {
          id: 2,
          name: "GitHub Repo",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/kprakash18/3D-Portfolio",
          position: "top-5 left-48",
        },
        {
          id: 3,
          name: "3D-Showcase.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-48 left-8",
          imageUrl: "/images/comingSoon1.png",
        },
      ],
    },
  ],
};


const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/adrian.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/adrian-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/adrian-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Full-Stack & Backend Engineer",
      image: "/images/adrian.jpg",
      description: [
        "Hey! I'm Prakash 👋 — a Full-Stack & Backend Engineer passionate about designing scalable systems, performant APIs, and intuitive user experiences.",
        "I specialize in Javascript, React, Node.js, Express, and databases like PostgreSQL, MongoDB, and Neo4j. From building real-time event systems with WebSockets & BullMQ to Chrome extensions used by developers daily, I love solving complex technical challenges.",
        "I believe great software is built on clean architectures, resilient databases, and thoughtful UX that feels effortless to use.",
        "When I'm not coding, you'll find me writing technical deep-dives on Medium, exploring new open-source tooling, or optimizing system architectures at 2 AM 🚀",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

export const TERMINAL_COMMANDS = [
  "help",
  "skills",
  "techstack",
  "projects",
  "work",
  "open",
  "about",
  "bio",
  "contact",
  "resume",
  "blogs",
  "articles",
  "neofetch",
  "prakash",
  "sudo hire",
  "matrix",
  "clear",
  "cls",
  "whoami",
  "date",
  "history",
  "theme dark",
  "theme light",
  "echo",
  "exit",
];

export const TERMINAL_HELP = [
  { cmd: "skills, techstack", desc: "View technical skills" },
  { cmd: "projects, work", desc: "Browse all 8 projects" },
  { cmd: "1 - 8, open <num>", desc: "Open project directly in Finder" },
  { cmd: "about, bio", desc: "Read developer background" },
  { cmd: "blogs, articles", desc: "Read Medium articles" },
  { cmd: "contact", desc: "Get in touch & social links" },
  { cmd: "resume", desc: "View / download resume" },
  { cmd: "neofetch, prakash", desc: "System info & ASCII logo" },
  { cmd: "theme <dark|light>", desc: "Toggle dark / light UI theme" },
  { cmd: "sudo hire", desc: "Hire Prakash 🎉" },
  { cmd: "matrix", desc: "Enter digital rain animation" },
  { cmd: "clear, cls", desc: "Clear terminal screen" },
  { cmd: "date, whoami, history", desc: "Utility commands" },
];

export const NEOFETCH_INFO = {
  os: "PrakashOS 15.0 Sequoia",
  host: "MacBook Pro (Apple Silicon)",
  kernel: "React 19 + GSAP + Vite 8",
  role: "Full-Stack & Backend Engineer",
  shell: "zsh 5.9",
  terminal: "PrakashOS Terminal.app",
  memory: "64 GB Unified RAM",
  palette: ["#000000", "#ff5f56", "#ffbd2e", "#00A154", "#38bdf8", "#c084fc", "#ffffff"],
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };