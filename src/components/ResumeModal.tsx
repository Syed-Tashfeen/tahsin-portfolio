import React, { useEffect } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/site';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.open(siteConfig.resumeUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col glass-panel rounded-3xl shadow-2xl border border-white/10 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <span className="font-bold text-sm tracking-wide">Resume Preview</span>
            <span className="text-[11px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              Verified 2025/2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Direct Download Button */}
            <a
              href={siteConfig.resumeUrl}
              download="Tashfeen_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* In-Browser New Tab */}
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Document Viewer Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white dark:bg-slate-900/60 font-sans text-slate-800 dark:text-slate-200 text-left">
          
          {/* Resume Header */}
          <div className="text-center pb-6 border-b border-slate-200 dark:border-slate-800">
            <h2 id="resume-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {siteConfig.name}
            </h2>
            <div className="mt-2 flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <span>{siteConfig.phone}</span>
              <span>•</span>
              <a href={`mailto:${siteConfig.email}`} className="text-indigo-600 dark:text-indigo-400 hover:underline">
                {siteConfig.email}
              </a>
              <span>•</span>
              <a href={siteConfig.github} target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                GitHub
              </a>
              <span>•</span>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 border-b border-slate-200 dark:border-slate-800 pb-1">
              SUMMARY
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              ECE undergraduate with a solid foundation in C++ and Python, a strong inclination towards mathematics and analytical thinking. Actively studying LLM and transformer architectures — building models from scratch and applying concepts across real-world projects with a structured problem-solving mindset.
            </p>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 border-b border-slate-200 dark:border-slate-800 pb-1">
              PROJECTS
            </h3>
            
            <div className="space-y-5 text-xs sm:text-sm">
              {/* Smart Solar Grass Cutter */}
              <div>
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    Smart Solar Grass Cutter <span className="font-normal text-xs text-slate-500">| Arduino ATmega328p, HC-SR04, IR Sensors, Bluetooth (HC-05), Proteus</span>
                  </h4>
                  <span className="text-xs font-mono text-slate-500">Sep 2025 – Oct 2025</span>
                </div>
                <ul className="mt-1.5 space-y-1 list-disc pl-4 text-slate-600 dark:text-slate-300">
                  <li>Designed and built an autonomous solar-powered grass cutter integrating a 20W solar panel with an ATmega328p microcontroller; achieved 6+ hours of uninterrupted operation per charge cycle with zero external power dependency.</li>
                  <li>Implemented real-time obstacle detection using ultrasonic and IR sensors with a 30 cm detection threshold, cutting false-trigger rate to under 5% in field tests.</li>
                  <li>Enabled wireless Android app control over Bluetooth with an effective range of ~10 m, reducing direct manual intervention by 80% compared to conventional mowers.</li>
                  <li>Simulated and validated complete circuit in Proteus; recognized as the best project in the batch and highest-budget build at ₹6,000.</li>
                </ul>
              </div>

              {/* Agentic AI Loan Assistant */}
              <div>
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    Agentic AI Loan Assistant <span className="font-normal text-xs text-slate-500">| FastAPI, Streamlit, Google GenAI (Gemini), Python, asyncio</span>
                  </h4>
                  <span className="text-xs font-mono text-slate-500">EY Techathon</span>
                </div>
                <ul className="mt-1.5 space-y-1 list-disc pl-4 text-slate-600 dark:text-slate-300">
                  <li>Architected a 5-agent orchestration pipeline (Conversation -&gt; KYC -&gt; Credit -&gt; Offer -&gt; Document) with a FastAPI backend and Streamlit frontend themed for Tata Capital.</li>
                  <li>Integrated Google GenAI (Gemini 2.5 Flash) via an asyncio.to_thread wrapper, achieving average agent response latency of ~2-3 s; reduced simulated loan intake cycle from ~25 min to under 9 min end-to-end.</li>
                  <li>Implemented in-memory session persistence (optional Redis) and automated PDF sanction letter generation, cutting document turnaround from hours to &lt;10 s.</li>
                  <li>Built a real-time Agent Logs panel in the Streamlit UI with timestamps and color-coded badges for live orchestration monitoring across all 5 agents.</li>
                </ul>
              </div>

              {/* myChotuLLM */}
              <div>
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    myChotuLLM <span className="font-normal text-xs text-slate-500">| Python, PyTorch, Transformer Architecture</span>
                  </h4>
                  <span className="text-xs font-mono text-slate-500">In Progress</span>
                </div>
                <ul className="mt-1.5 space-y-1 list-disc pl-4 text-slate-600 dark:text-slate-300">
                  <li>Building a decoder-only transformer from scratch in PyTorch — implementing scaled dot-product multi-head self-attention, learned positional encodings, and autoregressive text generation with greedy and top-k sampling.</li>
                  <li>Experimenting with model scales from 1M to 15M parameters; targeting a character-level perplexity of &lt;45 on a curated text corpus with ~10M tokens.</li>
                  <li>Profiling training throughput and memory utilization to optimize batch size vs. sequence length trade-offs, achieving ~3x training speed-up with gradient accumulation on a single GPU.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 border-b border-slate-200 dark:border-slate-800 pb-1">
              EDUCATION
            </h3>
            <div className="flex flex-wrap justify-between items-baseline text-xs sm:text-sm">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Abdul Kalam Technical University (AKTU) / Galgotias College of Eng. & Tech.
                </h4>
                <p className="italic text-slate-600 dark:text-slate-400">
                  B.Tech – Electronics and Communication Engineering
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Relevant Coursework: Data Structures & Algorithms, Digital Electronics, Signals & Systems, Embedded Systems, Engineering Mathematics, Microcontrollers
                </p>
              </div>
              <span className="text-xs font-mono text-slate-500">Aug 2024 – May 2028 (Expected)</span>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 border-b border-slate-200 dark:border-slate-800 pb-1">
              SKILLS
            </h3>
            <div className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
              <p><strong>Languages:</strong> Python, C++, JavaScript, SQL, C</p>
              <p><strong>ML & AI:</strong> PyTorch, Transformers, LLM Architecture, Google GenAI (Gemini)</p>
              <p><strong>Backend & Frameworks:</strong> Node.js, Express, FastAPI, REST APIs</p>
              <p><strong>Frontend:</strong> React, HTML, CSS, Tailwind CSS</p>
              <p><strong>Databases:</strong> MongoDB, SQL, MySQL</p>
              <p><strong>Tools:</strong> Git, GitHub, Postman, Proteus</p>
            </div>
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
          <span className="text-xs text-slate-500">
            Path: <code className="text-indigo-500">{siteConfig.resumeUrl}</code>
          </span>
          <a
            href={siteConfig.resumeUrl}
            download="Tashfeen_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Tashfeen_Resume.pdf</span>
          </a>
        </div>

      </div>
    </div>
  );
};
