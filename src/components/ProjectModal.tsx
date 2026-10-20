import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, Cpu, AlertCircle, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 dark:bg-slate-900/90 text-slate-900 dark:text-white"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
              {project.category}
            </span>
            {project.badge && (
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                {project.badge}
              </span>
            )}
          </div>
          <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {project.title}
          </h3>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="text-center sm:text-left">
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block uppercase">
                {m.label}
              </span>
              <span className="text-base sm:text-lg font-bold text-indigo-600 dark:text-indigo-400">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Content Tabs / Sections */}
        <div className="space-y-6">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1.5 font-semibold">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold text-xs uppercase tracking-wider mb-2">
                <AlertCircle className="w-4 h-4" />
                <span>Problem Statement</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/20">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-xs uppercase tracking-wider mb-2">
                <CheckCircle className="w-4 h-4" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Pipeline Flow */}
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60">
            <div className="flex items-center gap-2 text-indigo-500 text-xs font-mono uppercase tracking-wider mb-2">
              <Cpu className="w-4 h-4" />
              <span>System Architecture & Pipeline</span>
            </div>
            <div className="p-3 rounded-lg bg-white dark:bg-slate-900 font-mono text-xs text-indigo-600 dark:text-indigo-300 overflow-x-auto border border-slate-200 dark:border-slate-800">
              {project.architecture}
            </div>
          </div>

          {/* Verified Highlights */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-semibold">
              Verified Technical Highlights & Implementations
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <ArrowRight className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Badges */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-semibold">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-white hover:bg-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source</span>
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-white"
          >
            Close Deep Dive
          </button>
        </div>

      </div>
    </div>
  );
};
