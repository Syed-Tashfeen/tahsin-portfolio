import React, { useState } from 'react';
import { Globe, Bot, Cpu, ShieldAlert, Sun, Layers, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/projects';
import type { Project } from '../data/projects';

export const ProofOfWork: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'fullstack' | 'ai-ml' | 'hardware'>('fullstack');

  const tabs = [
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'ai-ml', label: 'AI & Agents' },
    { key: 'hardware', label: 'Hardware & IoT' },
    { key: 'all', label: 'All Projects' },
  ] as const;

  const filteredProjects = activeTab === 'all'
    ? projectsData
    : projectsData.filter((p) => p.categoryKey === activeTab);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'loan-agent-ey-hackathon':
        return (
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
            <Bot className="w-5 h-5" />
          </div>
        );
      case 'kin-family-safety-assistant':
        return (
          <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center">
            <ShieldAlert className="w-5 h-5" />
          </div>
        );
      case 'safefix-ai':
        return (
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-500 flex items-center justify-center">
            <Terminal className="w-5 h-5" />
          </div>
        );
      case 'smart-solar-grass-cutter':
        return (
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
            <Sun className="w-5 h-5" />
          </div>
        );
      case 'mychotullm':
        return (
          <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center">
            <Cpu className="w-5 h-5" />
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Title matching Screenshot 2 */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center text-neutral-900 dark:text-white mb-8">
          Proof of Work
        </h2>

        {/* Category Tabs Pill Bar */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-1">
          <div className="inline-flex items-center gap-1 p-1 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-900/70">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeTab === tab.key
                    ? 'bg-white dark:bg-black text-black dark:text-white border border-neutral-200 dark:border-neutral-700 shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Cards Grid matching Screenshot 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 flex flex-col justify-between hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors shadow-2xs"
            >
              <div>
                {/* Project Logo Icon */}
                {getProjectIcon(project.id)}

                {/* Title */}
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mt-4 mb-1.5">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-medium border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons matching Screenshot 2 */}
              <div className="flex items-center gap-2 pt-2">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold bg-black text-white hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors"
                  >
                    <Globe className="w-3 h-3" />
                    <span>Website</span>
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-semibold bg-black text-white hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors"
                  >
                    <GithubIcon className="w-3 h-3" />
                    <span>Source</span>
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
