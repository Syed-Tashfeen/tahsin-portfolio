export interface Project {
  id: string;
  title: string;
  category: string;
  categoryKey: 'ai-ml' | 'fullstack' | 'hardware' | 'creative';
  badge?: string;
  summary: string;
  fullDescription: string;
  architecture: string;
  problem: string;
  solution: string;
  tags: string[];
  highlights: string[];
  metrics: { label: string; value: string }[];
  links: {
    github?: string;
    demo?: string;
  };
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "loan-agent-ey-hackathon",
    title: "Agentic AI Loan Assistant",
    category: "Multi-Agent AI Systems",
    categoryKey: "ai-ml",
    badge: "EY Techathon",
    summary: "A 5-agent orchestration pipeline that automates lending intake, credit checks, offer calculations, and instant sanction letter generation.",
    fullDescription: "Architected for the EY Techathon, this system coordinates five specialized intelligent agents (Conversation, KYC, Credit Assessment, Loan Offer, and Document Generation) to transform the traditional loan intake experience into a rapid, conversational, automated journey.",
    problem: "Traditional consumer loan applications involve fragmented forms, manual document verification, and long turnaround times averaging 25 to 30 minutes with high drop-off rates.",
    solution: "Designed an event-driven 5-agent pipeline orchestrated via FastAPI and Gemini 2.5 Flash, providing real-time KYC validation, automated scoring, interactive chat explanations, and on-the-fly PDF generation under 10 seconds.",
    architecture: "Streamlit UI <-> FastAPI Orchestration Gateway <-> Async Gemini 2.5 Flash Wrapper <-> In-Memory Session/Redis Layer <-> PDF Generator Engine",
    tags: ["FastAPI", "Google GenAI (Gemini)", "Python", "Streamlit", "asyncio", "Agentic AI"],
    highlights: [
      "Reduced simulated loan intake cycle from ~25 minutes to under 9 minutes end-to-end",
      "Integrated Gemini 2.5 Flash via asyncio.to_thread wrapper with 2-3s average agent response latency",
      "Automated instant PDF sanction letter generation cutting document turnaround to <10 seconds",
      "Real-time Agent Logs telemetry panel in the UI with timestamps and color-coded orchestration badges"
    ],
    metrics: [
      { label: "Cycle Time", value: "<9 mins" },
      { label: "Agent Response", value: "~2-3s" },
      { label: "Pipeline Depth", value: "5 Agents" },
      { label: "Doc Generation", value: "<10s" }
    ],
    links: {
      github: "https://github.com/Syed-Tashfeen/Loan-Agent-EY-HACKATHON"
    },
    featured: true
  },
  {
    id: "kin-family-safety-assistant",
    title: "Kin — Family Cyber Safety Assistant",
    category: "AI / Multimodal Applications",
    categoryKey: "ai-ml",
    badge: "Multimodal Prototype",
    summary: "AI-powered family cyber-safety companion that protects vulnerable users against digital scams via real-time screen analysis and voice alerts.",
    fullDescription: "Kin serves as an intelligent guardian angel for non-tech-savvy family members. It observes suspicious digital workflows (fake banking OTP prompts, urgent remote-access requests, malicious popups) and warns users conversationally before irreversible actions occur.",
    problem: "Elderly and non-technical users are frequently targeted by deceptive social engineering scams such as fake customer support takeovers and phishing payment requests.",
    solution: "Constructed a multimodal assistant prototype leveraging Gemini Live WebSockets and Web Audio API to process visual cues and screen captures in real time with automated risk classification.",
    architecture: "React 18 / Tailwind Frontend -> Chrome MV3 Extension Side Panel <-> Express 5 WebSocket Backend <-> Google Gemini Live Multimodal API <-> Web Audio Stream & Risk Classifier",
    tags: ["TypeScript", "React 18", "Vite", "Tailwind CSS", "Express 5", "Google Gemini Live", "Web Audio API", "Chrome MV3"],
    highlights: [
      "Google Gemini Live multimodal WebSocket integration for sub-second visual guidance",
      "Chrome Extension Manifest V3 side panel for ambient, non-intrusive supervision",
      "Function-calling tools for contextual screen highlighting and warning dialogues",
      "Simulated scam verification environments for remote-support and spoofed UPI OTP scenarios"
    ],
    metrics: [
      { label: "Modality", value: "Voice + Screen" },
      { label: "API", value: "Gemini Live" },
      { label: "Architecture", value: "Chrome MV3" },
      { label: "State", value: "Prototype" }
    ],
    links: {
      github: "https://github.com/Syed-Tashfeen/Kin-Family-Safety-Assistant"
    },
    featured: true
  },
  {
    id: "safefix-ai",
    title: "SafeFix AI — Smart Diagnostic Engine",
    category: "AI & Automated Diagnostics",
    categoryKey: "ai-ml",
    badge: "Safety Engineering",
    summary: "Automated AI-driven safety triage and diagnostic engine providing guided issue resolution, preventive protocols, and risk mitigation.",
    fullDescription: "SafeFix AI provides intelligent guidance for resolving technical and operational safety issues. Designed with TypeScript, it analyzes contextual risk patterns and prescribes step-by-step verified remediation workflows.",
    problem: "Safety procedures and error troubleshooting often require cross-referencing complex manuals under high pressure, leading to critical delays and procedural mistakes.",
    solution: "Implemented an intuitive diagnostic platform that categorizes severity, performs contextual symptom analysis, and delivers verified remediation checklists in real time.",
    architecture: "TypeScript Frontend Client <-> Safety Rule Engine & API <-> Diagnostic Classification Model <-> Dynamic Checklist Engine",
    tags: ["TypeScript", "React", "AI Diagnostics", "Safety Protocols", "Tailwind CSS", "Node.js"],
    highlights: [
      "Context-aware diagnostic recommendation engine built with strict TypeScript typing",
      "Interactive risk matrix evaluating issue criticality and automated escalation pathways",
      "Dynamic verification checklists that ensure complete adherence to safety protocols",
      "Designed for fast response times with minimal client overhead"
    ],
    metrics: [
      { label: "Type Safety", value: "100% Strict" },
      { label: "Resolution", value: "Step-by-Step" },
      { label: "Engine", value: "TypeScript" },
      { label: "Domain", value: "Safety AI" }
    ],
    links: {
      github: "https://github.com/Syed-Tashfeen/safefix-ai"
    },
    featured: true
  },
  {
    id: "odoo-hackathon-2026",
    title: "Odoo x LPU Hackathon Platform",
    category: "Full-Stack Web Systems",
    categoryKey: "fullstack",
    badge: "Hackathon Build",
    summary: "Enterprise workflow automation and management solution built during the prestigious Odoo x LPU Jalandhar Hackathon 2026.",
    fullDescription: "A specialized hackathon platform addressing business process orchestration and modular data workflows. Engineered with TypeScript to streamline enterprise tracking, user management, and operational pipelines under competitive constraints.",
    problem: "Enterprise management systems often struggle with rigid customization, difficult third-party integrations, and steep user adoption curves.",
    solution: "Built a rapid, modular business workflow platform demonstrating real-time transaction processing, responsive dashboards, and structured service integration.",
    architecture: "TypeScript UI <-> Modular Business Logic Service <-> API Gateway <-> Relational Schema Layer",
    tags: ["TypeScript", "Hackathon 2026", "Business Automation", "React", "Node.js", "API Design"],
    highlights: [
      "Engineered during the Odoo x LPU Jalandhar Hackathon 2026 under strict time constraints",
      "Designed clean modular state architecture for business process telemetry",
      "Implemented comprehensive input validation and interactive administrative controls",
      "Demonstrated rapid end-to-end prototyping and technical presentation"
    ],
    metrics: [
      { label: "Hackathon", value: "LPU 2026" },
      { label: "Language", value: "TypeScript" },
      { label: "Architecture", value: "Modular" },
      { label: "Turnaround", value: "Rapid Sprint" }
    ],
    links: {
      github: "https://github.com/Syed-Tashfeen/odoo-x-lpu-hackathon-2026"
    },
    featured: true
  },
  {
    id: "civic-pulse",
    title: "CivicPulse — Civic Intelligence Platform",
    category: "Full-Stack Web Systems",
    categoryKey: "fullstack",
    badge: "Societal Tech",
    summary: "Modern civic engagement prototype enabling citizens to report societal issues with real-time weather context and structured resolution tracking.",
    fullDescription: "A civic-tech web platform prototype designed to bridge citizen issue reporting (potholes, drainage, sanitation) with municipal weather context to prioritize emergency maintenance workflows and societal well-being.",
    problem: "Civic complaint systems are often disjointed, lack geographic or environmental context, and fail to prioritize issues made urgent by incoming rainfall or societal hazards.",
    solution: "Built a reactive dashboard combining citizen reporting queues with Open-Meteo weather intelligence, backed by a type-safe tRPC and Drizzle ORM data pipeline.",
    architecture: "React + Vite UI <-> tRPC Type-safe Client <-> Node.js / Express Server <-> Drizzle ORM & MySQL <-> Open-Meteo Meteorological API",
    tags: ["TypeScript", "React", "Node.js", "tRPC", "MySQL", "Drizzle ORM", "Open-Meteo API"],
    highlights: [
      "End-to-end TypeScript safety across client-server boundaries using tRPC and Drizzle ORM",
      "Real-time meteorological context fetched via Open-Meteo API to flag weather-sensitive civic hazards",
      "Structured complaint categorization with verified status transition workflows",
      "Designed specifically as a societal prototype to resolve community infrastructure challenges"
    ],
    metrics: [
      { label: "Type Safety", value: "100% tRPC" },
      { label: "Weather API", value: "Open-Meteo" },
      { label: "Purpose", value: "Societal Good" },
      { label: "Stack", value: "Full TypeScript" }
    ],
    links: {
      github: "https://github.com/Syed-Tashfeen/civic-pulse"
    },
    featured: true
  },
  {
    id: "smart-solar-grass-cutter",
    title: "Smart Solar Grass Cutter",
    category: "Embedded Systems & Robotics",
    categoryKey: "hardware",
    badge: "Best Project in Batch",
    summary: "Autonomous solar-powered robotic cutter with 20W photovoltaic panel, real-time ultrasonic obstacle evasion, and Bluetooth mobile control.",
    fullDescription: "An engineering project designed to address high fossil-fuel dependency and manual hazard in landscaping. Built on the ATmega328p architecture, the unit operates completely off-grid with zero carbon emissions.",
    problem: "Conventional grass mowers rely on gasoline engines or corded electric systems with high operational costs, emissions, and risk of blade collision.",
    solution: "Integrated a 20W solar collector with an ATmega328p microcontroller, ultrasonic/IR dual-sensor safety matrix, high-torque DC motor drivers, and Bluetooth telemetry.",
    architecture: "20W Photovoltaic Cell -> Charge Controller & 12V Battery -> ATmega328p MCU -> L298N Motor Driver -> HC-SR04 & IR Sensor Array <-> HC-05 Bluetooth <-> Android App",
    tags: ["Arduino ATmega328p", "HC-SR04", "IR Sensors", "Bluetooth HC-05", "Proteus", "Solar Energy"],
    highlights: [
      "Achieved 6+ hours of uninterrupted autonomous operation per charge cycle with zero external power dependency",
      "Designed real-time obstacle avoidance with a 30 cm detection threshold, cutting false triggers to <5% in field tests",
      "Engineered wireless Android app control over Bluetooth with an effective radius of ~10 meters",
      "Validated complete schematics in Proteus; awarded Best Project in Batch and highest-budget build at ₹6,000"
    ],
    metrics: [
      { label: "Run Time", value: "6+ Hours" },
      { label: "False Triggers", value: "<5%" },
      { label: "Wireless Range", value: "~10m" },
      { label: "Build Award", value: "Best in Batch" }
    ],
    links: {
      github: "https://github.com/Syed-Tashfeen"
    },
    featured: true
  },
  {
    id: "mychotullm",
    title: "myChotuLLM — Transformer From Scratch",
    category: "Deep Learning & LLM Architecture",
    categoryKey: "ai-ml",
    badge: "In Progress",
    summary: "A decoder-only transformer language model built and trained from ground zero in PyTorch to study attention mechanisms and token dynamics.",
    fullDescription: "An in-depth systems research project exploring the inner workings of autoregressive language modeling. Implements multi-head causal self-attention, learned position embeddings, layer normalization, and custom tokenizer pipelines directly in PyTorch.",
    problem: "Most developers consume LLMs strictly as external APIs without understanding attention math, gradient accumulation dynamics, KV caching, or hardware memory bottlenecks.",
    solution: "Implemented every architectural component from mathematical first principles in PyTorch, testing model scales from 1M to 15M parameters on curated datasets.",
    architecture: "Byte/Char Tokenizer -> Embedding & Learned Positional Encodings -> Multi-Layer Decoder Blocks (Scaled Dot-Product Self-Attention + MLP + RMSNorm) -> Autoregressive Sampling Head",
    tags: ["Python", "PyTorch", "Transformer Architecture", "CUDA", "LLMs", "Mathematics"],
    highlights: [
      "Built scaled dot-product multi-head attention and causal masking from scratch",
      "Experimenting across model scales (1M to 15M parameters) targeting perplexity <45 on ~10M tokens",
      "Optimized batch size vs sequence length trade-offs via gradient accumulation, yielding ~3x speedup on single GPU",
      "Implemented autoregressive text generation with greedy, temperature, and top-k probabilistic sampling"
    ],
    metrics: [
      { label: "Model Scale", value: "1M–15M" },
      { label: "Target Perplexity", value: "<45" },
      { label: "Training Speedup", value: "~3x" },
      { label: "Token Corpus", value: "~10M" }
    ],
    links: {
      github: "https://github.com/Syed-Tashfeen"
    },
    featured: true
  },
  {
    id: "trello-board-clone",
    title: "Interactive Trello Board",
    category: "Full-Stack Web Systems",
    categoryKey: "fullstack",
    badge: "Productivity Tool",
    summary: "A responsive drag-and-drop Kanban workflow application with dynamic list management, persistent cards, and task state transitions.",
    fullDescription: "A full-featured project management workspace engineered with modern JavaScript. Features multi-column Kanban pipelines, interactive card reordering, tag management, and clean user experience.",
    problem: "Team workflows need fluid, intuitive visual interfaces for task progression without clunky form reloads.",
    solution: "Built a high-performance Kanban board with dynamic state synchronization, responsive column layouts, and local storage state persistence.",
    architecture: "Component UI Engine -> Drag & Drop Event Handler -> State Persistence Layer",
    tags: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation", "Kanban", "State Management"],
    highlights: [
      "Smooth card manipulation and task lane reorganization",
      "Local persistence preserving boards, cards, and column configurations",
      "Keyboard-accessible interactive elements and clean visual indicators"
    ],
    metrics: [
      { label: "Type", value: "Kanban App" },
      { label: "Language", value: "JavaScript" },
      { label: "Interactions", value: "Drag & Drop" },
      { label: "State", value: "Persistent" }
    ],
    links: {
      github: "https://github.com/Syed-Tashfeen/trello-board"
    },
    featured: false
  }
];
