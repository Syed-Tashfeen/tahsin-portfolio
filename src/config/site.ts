export interface SiteConfig {
  name: string;
  brandName: string;
  shortName: string;
  role: string;
  statusBadge: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  twitter?: string;
  calCom: string;
  resumeUrl: string;
  bioSummary: string;
  aboutStory: string[];
  education: {
    degree: string;
    field: string;
    institution: string;
    affiliation: string;
    period: string;
    expectedGraduation: string;
    location: string;
    coursework: string[];
  };
}

export const siteConfig: SiteConfig = {
  name: "Syed Tashfeenul Haque",
  brandName: "tashfeen.portfolio",
  shortName: "Tashfeen",
  role: "Electronics & Communication Engineering Student | Software Developer | AI/ML Enthusiast",
  statusBadge: "ECE STUDENT • SOFTWARE & AI",
  headline: "Building technology that solves real-world problems.",
  location: "Greater Noida / New Delhi, India",
  email: "stashfeenulhaque@gmail.com",
  phone: "7763029413",
  github: "https://github.com/Syed-Tashfeen",
  linkedin: "https://www.linkedin.com/in/syed-tashfeenul-haque-b724aa2b5/",
  twitter: "https://x.com/TashfeenulHaque",
  calCom: "https://cal.com/syed-tashfeen-ul-haque-bnm0hp/15min",
  resumeUrl: "/resume/Tashfeen_Resume.pdf",
  bioSummary: "I’m Tashfeen, an Electronics and Communication Engineering student passionate about software development, full-stack engineering, and AI-powered applications. I enjoy turning ideas into practical products through code, experimentation, and continuous learning.",
  aboutStory: [
    "I am an Electronics and Communication Engineering undergraduate at Galgotias College of Engineering and Technology (AKTU) with a solid foundation in C++ and Python, and an active fascination with modern software systems.",
    "My engineering journey bridges physical hardware and intelligent software: from building autonomous solar-powered robotics with obstacle detection to training transformer language models from scratch in PyTorch and architecting multi-agent LLM systems with Google Gemini.",
    "I thrive on hackathons, hands-on experimentation, and collaborative problem-solving. My focus is on turning complex technical fundamentals—data structures, system design, and deep learning architectures—into reliable, impactful products that people can actually use."
  ],
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Electronics and Communication Engineering",
    institution: "Galgotias College of Engineering and Technology",
    affiliation: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    period: "Aug 2024 – May 2028 (Expected)",
    expectedGraduation: "2028",
    location: "Greater Noida, Uttar Pradesh, India",
    coursework: [
      "Data Structures & Algorithms",
      "Signals & Systems",
      "Digital Electronics",
      "Microcontrollers & Embedded Systems",
      "Engineering Mathematics",
      "Object-Oriented Programming"
    ]
  }
};
