import React from 'react';

export const Skills: React.FC = () => {
  const row1 = [
    'Python',
    'C++',
    'PyTorch',
    'Transformers',
    'FastAPI',
    'React',
    'TypeScript',
    'Node.js',
  ];

  const row2 = [
    'Google Gemini',
    'MongoDB',
    'MySQL',
    'Drizzle ORM',
    'Express',
    'Git',
    'Proteus',
    'Arduino',
    'Tailwind CSS',
    'asyncio'
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        
        {/* Title matching Screenshot 4 */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-8">
          Skills
        </h2>

        {/* Skill Pills matching Screenshot 4 */}
        <div className="flex flex-col items-center gap-3 w-full">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {row1.map((skill) => (
              <span
                key={skill}
                className="bg-black text-white dark:bg-neutral-800 dark:text-neutral-100 px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md shadow-2xs hover:scale-105 transition-transform cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {row2.map((skill) => (
              <span
                key={skill}
                className="bg-black text-white dark:bg-neutral-800 dark:text-neutral-100 px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md shadow-2xs hover:scale-105 transition-transform cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
