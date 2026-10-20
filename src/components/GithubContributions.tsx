import React, { useMemo } from 'react';

export const GithubContributions: React.FC = () => {
  const months = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  
  // Generate consistent pseudo-realistic contribution data
  const weeks = useMemo(() => {
    const data: number[][] = [];
    const seed = [3, 2, 4, 1, 0, 4, 3, 2, 1, 4, 3, 2, 4, 0, 1, 3, 4, 2, 3, 4, 1, 2, 4, 3, 0, 2, 4, 3, 1, 4, 2, 3, 4, 1, 0, 3, 4, 2, 3, 1, 4, 2, 4, 3, 1, 2, 4, 3, 2, 4, 1, 3];
    
    for (let w = 0; w < 52; w++) {
      const days: number[] = [];
      const baseVal = seed[w % seed.length];
      for (let d = 0; d < 7; d++) {
        const hash = (w * 7 + d * 13 + baseVal * 5) % 10;
        let intensity = 0;
        if (hash > 7) intensity = 4;
        else if (hash > 4) intensity = 3;
        else if (hash > 2) intensity = 2;
        else if (hash > 1) intensity = 1;
        days.push(intensity);
      }
      data.push(days);
    }
    return data;
  }, []);

  const getColorClass = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-[#4c1d95] dark:bg-[#3b0764]';
      case 2:
        return 'bg-[#6d28d9] dark:bg-[#581c87]';
      case 3:
        return 'bg-[#8b5cf6] dark:bg-[#7c3aed]';
      case 4:
        return 'bg-[#c084fc] dark:bg-[#a855f7]';
      default:
        return 'bg-[#ebedf0] dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800';
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Title matching Screenshot 3 */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center text-neutral-900 dark:text-white mb-8">
          GitHub Contributions
        </h2>

        <div className="w-full max-w-3xl overflow-x-auto pb-4">
          <div className="min-w-[650px] p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-2xs">
            
            {/* Months Label Row */}
            <div className="flex justify-between text-[11px] font-mono text-neutral-500 mb-2 px-1">
              {months.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>

            {/* Matrix of Contribution Blocks */}
            <div className="flex gap-[3.5px]">
              {weeks.map((week, wIndex) => (
                <div key={wIndex} className="flex flex-col gap-[3.5px]">
                  {week.map((level, dIndex) => (
                    <div
                      key={dIndex}
                      className={`w-[11px] h-[11px] rounded-[2.5px] transition-colors ${getColorClass(level)}`}
                      title={`Activity level: ${level}`}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Bottom Row matching Screenshot 3 */}
            <div className="flex items-center justify-between mt-4 text-xs font-mono text-neutral-600 dark:text-neutral-400 pt-2">
              <span>2178 contributions in the last year</span>
              
              <div className="flex items-center gap-1.5">
                <span className="text-[11px]">Less</span>
                <div className="w-2.5 h-2.5 rounded-[2px] bg-[#ebedf0] dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-[#4c1d95]" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-[#6d28d9]" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-[#8b5cf6]" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-[#c084fc]" />
                <span className="text-[11px]">More</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
