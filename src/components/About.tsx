import React from 'react';
import { Layers, Bot, Cpu, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/site';

export const About: React.FC = () => {
  const focusAreas = [
    {
      title: 'Full-Stack Development',
      icon: Layers,
      color: 'from-blue-500/20 to-indigo-500/10 text-blue-500',
      description: 'Building responsive interfaces and connecting them to robust backend services, RESTful APIs, and relational/document databases.',
      points: [
        'Component architecture with React & TypeScript',
        'High-performance async backends with FastAPI & Node.js',
        'Database design with MySQL, MongoDB & Drizzle ORM'
      ]
    },
    {
      title: 'AI-Powered Applications',
      icon: Bot,
      color: 'from-purple-500/20 to-pink-500/10 text-purple-500',
      description: 'Exploring multimodal AI, intelligent autonomous assistants, and transformer language model mechanics from the ground up.',
      points: [
        'Multi-agent orchestration with Gemini & LLMs',
        'Decoder-only transformers from scratch in PyTorch',
        'Multimodal voice/screen safety assistants'
      ]
    },
    {
      title: 'Problem Solving & Hardware',
      icon: Cpu,
      color: 'from-emerald-500/20 to-teal-500/10 text-emerald-500',
      description: 'Strengthening programming fundamentals, algorithmic thinking, and bridging software logic with embedded microcontrollers.',
      points: [
        'Data Structures & Algorithms in C++ and Python',
        'Microcontroller programming (ATmega328p / Arduino)',
        'Sensors, motor controls & Proteus circuit simulation'
      ]
    }
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-500 text-xs font-semibold uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Background & Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            A little about me
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
            From circuits and signal mathematics to neural networks and full-stack software systems.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-500" />
              <span>Engineering Journey</span>
            </h3>
            {siteConfig.aboutStory.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-slate-500 font-mono">Location</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">India</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-mono">Degree Focus</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">ECE (2024–2028)</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-mono">Affiliation</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white mt-0.5">AKTU / Galgotias</p>
              </div>
            </div>
          </div>

          {/* Quick Engineering Principles Card */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 space-y-5 bg-gradient-to-b from-indigo-500/5 to-transparent">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Core Engineering Values
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Understand from First Principles</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Building transformers and algorithms from scratch to understand internals rather than treating tools as black boxes.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Ship Working Prototypes</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Translating ideas into working products through hackathons, verifiable codebases, and physical tests.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Continuous Growth Mindset</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Actively learning data structures, systems architecture, and modern AI engineering practices.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* "What I focus on" Area (3 Cards) */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xs font-mono uppercase tracking-widest text-indigo-500 dark:text-indigo-400 font-semibold">
              Areas of Active Interest & Development
            </h3>
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
              What I Focus On
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div 
                  key={area.title}
                  className="glass-panel rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 card-shine-effect group"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {area.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {area.description}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                    {area.points.map((point, i) => (
                      <li key={i} className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
