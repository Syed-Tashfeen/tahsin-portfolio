export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  category: 'Technical & Engineering' | 'Hackathons & Competitions' | 'System Architecture';
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  skillsGained: string[];
  badge?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "ey-techathon-lead",
    role: "Agentic AI Project Lead — Loan-Agent",
    organization: "EY Techathon Initiative",
    category: "Technical & Engineering",
    period: "2025 / EY Techathon",
    location: "National / Remote",
    description: "Spearheaded the technical development and architecture of an intelligent multi-agent financial loan assistant (Loan-Agent-EY-HACKATHON) themed for enterprise scale.",
    responsibilities: [
      "Designed a 5-agent asynchronous pipeline coordinating conversational intake, KYC screening, credit score heuristic computation, offer synthesis, and document drafting.",
      "Integrated Gemini 2.5 Flash via asynchronous Python wrappers to maintain responsive latencies under 3 seconds per agent transaction.",
      "Implemented live orchestration telemetry panels giving users and reviewers complete transparency into agent decision chains.",
      "Automated instant PDF sanction letter generation cutting turnaround from hours to under 10 seconds."
    ],
    skillsGained: ["Multi-Agent Orchestration", "FastAPI", "Google GenAI API", "Python Asyncio", "Streamlit UI"],
    badge: "EY Techathon"
  },
  {
    id: "galgotias-hardware-lead",
    role: "Hardware & Embedded Systems Lead — Smart Solar Grass Cutter",
    organization: "Department of ECE, Galgotias College of Eng. & Tech.",
    category: "Technical & Engineering",
    period: "Sep 2025 – Oct 2025",
    location: "Greater Noida, India",
    description: "Led the design, simulation, and physical fabrication of the autonomous Smart Solar Grass Cutter, achieving the highest evaluation in the batch.",
    responsibilities: [
      "Formulated the power management circuit marrying a 20W photovoltaic panel with a high-efficiency charge controller and 12V battery bank (6+ hours uninterrupted operation).",
      "Programmed the ATmega328p microcontroller firmware for dual ultrasonic (HC-SR04) and infrared collision detection with <5% false trigger rate.",
      "Engineered Bluetooth telemetry pairing the hardware with custom Android controls over a 10-meter radius.",
      "Validated complete schematics in Proteus; awarded Best Project in Batch and highest-budget build at ₹6,000."
    ],
    skillsGained: ["Embedded C/C++", "Circuit Simulation (Proteus)", "Power Electronics", "Hardware Prototyping"],
    badge: "Batch Best Project"
  },
  {
    id: "odoo-hackathon-2026",
    role: "Hackathon Builder & Full-Stack Developer",
    organization: "Odoo x LPU Jalandhar Hackathon 2026",
    category: "Hackathons & Competitions",
    period: "2026",
    location: "Jalandhar / Remote",
    description: "Built and deployed an enterprise process automation and tracking platform (odoo-x-lpu-hackathon-2026) under competitive hackathon sprint constraints.",
    responsibilities: [
      "Architected clean TypeScript modular services for data workflow orchestration and administrative tracking.",
      "Engineered reactive client interfaces with comprehensive input validation and telemetry dashboards.",
      "Collaborated with multidisciplinary teammates to deliver rapid functional prototypes evaluated by hackathon judges."
    ],
    skillsGained: ["TypeScript", "Rapid Prototyping", "Full-Stack Development", "Business Process Automation"],
    badge: "Hackathon 2026"
  },
  {
    id: "kin-safefix-developer",
    role: "AI & Safety Systems Developer",
    organization: "Open Source & Research Projects (Kin & SafeFix AI)",
    category: "System Architecture",
    period: "2025 – Present",
    location: "GitHub Open Source",
    description: "Researched and built specialized cyber-safety and diagnostic systems (Kin-Family-Safety-Assistant and safefix-ai) leveraging multimodal AI.",
    responsibilities: [
      "Integrated Google Gemini Live multimodal WebSockets with Web Audio API for ambient real-time screen analysis and voice warning triggers.",
      "Designed Chrome Extension Manifest V3 side panel architecture for non-intrusive safety supervision against spoofed transactions.",
      "Implemented strict TypeScript safety diagnostic workflows evaluating issue severity and automated escalation."
    ],
    skillsGained: ["Google Gemini Live", "WebSockets", "Web Audio API", "Chrome MV3", "TypeScript"],
    badge: "Open Source AI"
  }
];
