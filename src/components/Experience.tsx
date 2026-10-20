import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Scale, Users, Cpu } from 'lucide-react';
import { experienceData } from '../data/experience';
import type { ExperienceItem } from '../data/experience';

export const Experience: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'All Roles' },
    { key: 'Technical & Engineering', label: 'Technical & Engineering' },
    { key: 'Hackathons & Competitions', label: 'Hackathons & Competitions' },
    { key: 'System Architecture', label: 'System Architecture' },
  ];

  const filteredExperience = selectedCategory === 'all'
    ? experienceData
    : experienceData.filter((item) => item.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Technical & Engineering':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Hackathons & Competitions':
        return <Users className="w-5 h-5 text-amber-400" />;
      case 'System Architecture':
        return <Scale className="w-5 h-5 text-sky-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-500 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Roles & Initiatives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Experience & Leadership
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
            Technical leadership, research initiatives, and verified analytical responsibilities.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 rounded-2xl glass-panel border border-slate-200 dark:border-white/10 gap-1">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setSelectedCategory(c.key)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === c.key
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Experience List Cards */}
        <div className="space-y-6">
          {filteredExperience.map((item: ExperienceItem) => (
            <div
              key={item.id}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 hover:border-indigo-500/40 transition-all duration-300 card-shine-effect"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700">
                    {getCategoryIcon(item.category)}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      {item.organization}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Category note badge */}
              <div className="mb-4">
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  {item.category}
                </span>
                {item.badge && (
                  <span className="ml-2 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                    {item.badge}
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Responsibilities */}
              <div className="space-y-2 mb-5">
                {item.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Skills gained */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-mono text-slate-400 mr-2">Skills:</span>
                {item.skillsGained.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
