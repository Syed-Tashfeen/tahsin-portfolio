import React, { useState } from 'react';
import { FolderGit2, Sparkles } from 'lucide-react';
import { projectsData } from '../data/projects';
import type { Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai-ml' | 'hardware' | 'fullstack'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { key: 'all', label: 'All Projects' },
    { key: 'ai-ml', label: 'AI & LLM Systems' },
    { key: 'hardware', label: 'Embedded & Hardware' },
    { key: 'fullstack', label: 'Full-Stack Web' },
  ] as const;

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.categoryKey === activeFilter);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-500 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Proof of Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
            Real systems, hardware builds, and research experiments engineered with verified specifications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl glass-panel border border-slate-200 dark:border-white/10 gap-1 overflow-x-auto max-w-full">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeFilter === tab.key
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-14 p-6 rounded-2xl glass-panel border border-indigo-500/20 bg-gradient-to-r from-indigo-500/5 via-sky-500/5 to-purple-500/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Interested in deep technical architectures?
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Every project card features an interactive deep-dive modal showing problem statements, pipelines, and verified metrics.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Deep Dive Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
