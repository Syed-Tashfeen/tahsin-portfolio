import React from 'react';
import { ExternalLink, ArrowUpRight, Cpu, Bot, Sun, ShieldAlert, Activity, Globe } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  // Select icon and aesthetic based on project
  const getProjectIcon = () => {
    switch (project.id) {
      case 'agentic-loan-assistant':
        return <Bot className="w-5 h-5 text-indigo-400" />;
      case 'mychotullm':
        return <Cpu className="w-5 h-5 text-sky-400" />;
      case 'smart-solar-grass-cutter':
        return <Sun className="w-5 h-5 text-amber-400" />;
      case 'kin-safety-assistant':
        return <ShieldAlert className="w-5 h-5 text-rose-400" />;
      case 'civicpulse':
        return <Activity className="w-5 h-5 text-emerald-400" />;
      default:
        return <Globe className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <div className="glass-panel rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-200 dark:border-white/10 hover:border-indigo-500/40 hover:-translate-y-1.5 transition-all duration-300 card-shine-effect group">
      
      {/* Top Banner / Preview Card */}
      <div className="p-6 pb-0">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700">
              {getProjectIcon()}
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block">
                {project.category}
              </span>
            </div>
          </div>

          {project.badge && (
            <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
              {project.badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
          {project.title}
        </h3>

        <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
          {project.summary}
        </p>

        {/* Metrics Grid Preview */}
        <div className="mt-4 grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
          {project.metrics.slice(0, 2).map((m, i) => (
            <div key={i} className="text-left">
              <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono uppercase block">
                {m.label}
              </span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-1.5 py-0.5 rounded-md text-[10px] font-medium text-slate-400">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="p-6 pt-5 mt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between gap-2">
        <button
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors"
        >
          <span>Architecture & Deep Dive</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="GitHub Source"
              aria-label="GitHub Source"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-indigo-500 hover:text-indigo-400 hover:bg-indigo-500/10 transition-colors"
              title="Live Prototype"
              aria-label="Live Prototype"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

    </div>
  );
};
