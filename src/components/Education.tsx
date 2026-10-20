import React from 'react';
import { GraduationCap } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Education: React.FC = () => {
  const { education } = siteConfig;

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Title matching Screenshot 4 */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center text-neutral-900 dark:text-white mb-10">
          Education
        </h2>

        {/* Clean Education Card matching Screenshot 4 */}
        <div className="w-full flex items-center justify-between gap-4 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-950 shadow-2xs">
          
          <div className="flex items-center gap-4">
            {/* University Crest / Icon */}
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-indigo-50 dark:bg-neutral-800 text-indigo-600 dark:text-indigo-400 shrink-0 border border-neutral-200 dark:border-neutral-700">
              <GraduationCap className="w-6 h-6" />
            </div>

            {/* Degree and Institution */}
            <div className="text-left">
              <h3 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-white leading-snug">
                {education.degree} in {education.field}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-0.5">
                {education.institution}
              </p>
            </div>
          </div>

          {/* Graduation date on right */}
          <div className="text-right shrink-0">
            <span className="text-xs sm:text-sm font-mono text-neutral-500">
              {education.period}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
