export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: 'Proficient' | 'Familiar' | 'Actively Learning';
    tag?: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    iconName: "Code2",
    description: "Core languages used for problem solving, algorithm design, and system development.",
    skills: [
      { name: "C++", level: "Proficient", tag: "DSA & Core" },
      { name: "Python", level: "Proficient", tag: "AI/ML & Automation" },
      { name: "JavaScript", level: "Proficient", tag: "Modern ES6+" },
      { name: "TypeScript", level: "Familiar", tag: "Type-Safe Web" },
      { name: "SQL", level: "Familiar", tag: "Relational Queries" },
      { name: "C", level: "Proficient", tag: "Low-Level & Hardware" }
    ]
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    iconName: "BrainCircuit",
    description: "Foundational and modern deep learning, LLM systems, and agent orchestration.",
    skills: [
      { name: "PyTorch", level: "Familiar", tag: "Deep Learning" },
      { name: "Transformer Architecture", level: "Actively Learning", tag: "From Scratch" },
      { name: "Google GenAI (Gemini)", level: "Proficient", tag: "API & Agents" },
      { name: "Multimodal AI", level: "Familiar", tag: "Voice & Vision" },
      { name: "Autoregressive Sampling", level: "Actively Learning", tag: "LLM Generation" },
      { name: "Agent Orchestration", level: "Familiar", tag: "FastAPI + Tools" }
    ]
  },
  {
    id: "backend",
    name: "Backend & Systems",
    iconName: "Server",
    description: "Fast, asynchronous server architectures, RESTful APIs, and network protocols.",
    skills: [
      { name: "FastAPI", level: "Proficient", tag: "Async Python" },
      { name: "Node.js", level: "Proficient", tag: "Server Runtime" },
      { name: "Express.js", level: "Proficient", tag: "REST Services" },
      { name: "REST APIs", level: "Proficient", tag: "API Design" },
      { name: "WebSockets", level: "Familiar", tag: "Live Streams" },
      { name: "tRPC", level: "Familiar", tag: "Type-Safe RPC" }
    ]
  },
  {
    id: "frontend",
    name: "Frontend Development",
    iconName: "Layout",
    description: "Building responsive, modern, and accessible user interfaces and web applications.",
    skills: [
      { name: "React", level: "Proficient", tag: "Component UI" },
      { name: "Tailwind CSS", level: "Proficient", tag: "Utility Styling" },
      { name: "HTML5 / Semantic Web", level: "Proficient", tag: "Accessible Markup" },
      { name: "CSS3 / Modern Layouts", level: "Proficient", tag: "Flex & Grid" },
      { name: "Vite", level: "Proficient", tag: "Build Tooling" },
      { name: "Streamlit", level: "Familiar", tag: "Rapid AI Interfaces" }
    ]
  },
  {
    id: "databases",
    name: "Databases & ORM",
    iconName: "Database",
    description: "Data modeling, schema design, and persistence strategies.",
    skills: [
      { name: "MySQL", level: "Familiar", tag: "Relational DB" },
      { name: "MongoDB", level: "Familiar", tag: "Document Store" },
      { name: "Drizzle ORM", level: "Familiar", tag: "TypeScript ORM" },
      { name: "Redis Caching", level: "Actively Learning", tag: "Session Store" }
    ]
  },
  {
    id: "embedded-tools",
    name: "Hardware, Embedded & Tools",
    iconName: "Cpu",
    description: "Microcontroller circuits, simulation suites, and developer productivity tools.",
    skills: [
      { name: "Arduino / ATmega328p", level: "Proficient", tag: "Robotics & MCUs" },
      { name: "Proteus Simulation", level: "Proficient", tag: "Circuit CAD" },
      { name: "Git & GitHub", level: "Proficient", tag: "Version Control" },
      { name: "Postman", level: "Proficient", tag: "API Testing" },
      { name: "VS Code", level: "Proficient", tag: "Primary Editor" },
      { name: "Linux / Bash", level: "Familiar", tag: "CLI & Tooling" }
    ]
  }
];
