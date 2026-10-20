import React, { useState, useEffect, useMemo } from 'react';
import { siteConfig } from '../config/site';

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ApiResponse {
  total?: Record<string, number>;
  contributions: ContributionDay[];
}

export const GithubContributions: React.FC = () => {
  const username = useMemo(() => {
    return siteConfig.github.split('/').filter(Boolean).pop() || 'Syed-Tashfeen';
  }, []);

  const cacheKey = `github_contributions_${username}`;

  const [contributions, setContributions] = useState<ContributionDay[]>(() => {
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed?.contributions && Array.isArray(parsed.contributions)) {
          return parsed.contributions;
        }
      }
    } catch {
      // Ignore cache read error
    }
    return [];
  });

  const [totalCount, setTotalCount] = useState<number>(() => {
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (typeof parsed?.total?.lastYear === 'number') {
          return parsed.total.lastYear;
        }
      }
    } catch {
      // Ignore cache read error
    }
    return 0;
  });

  const [isLoading, setIsLoading] = useState<boolean>(contributions.length === 0);
  const [hasError, setHasError] = useState<boolean>(false);
  const [hoveredDay, setHoveredDay] = useState<{ day: ContributionDay; x: number; y: number } | null>(null);

  // Fetch live contributions from GitHub API
  useEffect(() => {
    let isMounted = true;

    const fetchContributions = async () => {
      try {
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }
        const data: ApiResponse = await response.json();
        if (isMounted && data.contributions && Array.isArray(data.contributions)) {
          setContributions(data.contributions);
          const total = data.total?.lastYear ?? data.contributions.reduce((acc, c) => acc + c.count, 0);
          setTotalCount(total);
          setIsLoading(false);
          setHasError(false);

          try {
            localStorage.setItem(cacheKey, JSON.stringify(data));
          } catch {
            // Ignore quota exceeded errors
          }
        }
      } catch (err) {
        console.error('Error fetching GitHub contributions:', err);
        if (isMounted) {
          setContributions((current) => {
            if (current.length === 0) {
              setHasError(true);
            }
            return current;
          });
          setIsLoading(false);
        }
      }
    };

    fetchContributions();

    return () => {
      isMounted = false;
    };
  }, [username, cacheKey]);

  // Group days into weeks of 7 days (columns)
  const weeks = useMemo(() => {
    if (!contributions || contributions.length === 0) return [];
    const grouped: ContributionDay[][] = [];
    for (let i = 0; i < contributions.length; i += 7) {
      grouped.push(contributions.slice(i, i + 7));
    }
    return grouped;
  }, [contributions]);

  // Calculate month labels aligned with week columns
  const monthLabels = useMemo(() => {
    if (weeks.length === 0) return [];
    const labels: { index: number; label: string }[] = [];
    let lastLabeledWeek = -10;
    let lastMonth = -1;

    weeks.forEach((week, wIndex) => {
      if (!week[0]) return;
      const date = new Date(`${week[0].date}T00:00:00`);
      const month = date.getMonth();

      if (month !== lastMonth) {
        lastMonth = month;
        // Skip month if it's the very first partial week and another month is right ahead
        if (wIndex === 0 && weeks.length > 2) {
          const nextMonthDate = new Date(`${weeks[2][0]?.date}T00:00:00`);
          if (nextMonthDate.getMonth() !== month) {
            return;
          }
        }
        // Ensure at least 3 weeks spacing so month labels never overlap
        if (wIndex - lastLabeledWeek >= 3) {
          labels.push({
            index: wIndex,
            label: date.toLocaleDateString('en-US', { month: 'short' }),
          });
          lastLabeledWeek = wIndex;
        }
      }
    });

    return labels;
  }, [weeks]);

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
        return 'bg-[#ebedf0] dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800';
    }
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(`${dateStr}T00:00:00`);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Title matching portfolio styling - clickable to GitHub */}
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center mb-8 text-center"
          title="Open GitHub profile"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            GitHub Contributions
          </h2>
          <span className="mt-1 text-xs font-mono text-purple-600 dark:text-purple-400 group-hover:underline flex items-center gap-1">
            @{username}
            <span className="text-[10px]">↗</span>
          </span>
        </a>

        <div className="w-full max-w-3xl overflow-x-auto pb-4">
          <div className="min-w-[670px] p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-2xs relative">
            
            {/* Loading state skeleton */}
            {isLoading && (
              <div className="animate-pulse space-y-3">
                <div className="flex justify-between h-3 bg-neutral-100 dark:bg-neutral-900 rounded mb-2" />
                <div className="h-[95px] bg-neutral-100 dark:bg-neutral-900/50 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-mono text-neutral-400">Loading live GitHub contributions...</span>
                </div>
                <div className="flex justify-between h-3 bg-neutral-100 dark:bg-neutral-900 rounded mt-4" />
              </div>
            )}

            {/* Error Fallback */}
            {hasError && !isLoading && (
              <div className="py-8 text-center">
                <p className="text-sm text-neutral-500 font-mono mb-2">Unable to load live GitHub activity right now.</p>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-purple-600 dark:text-purple-400 hover:underline"
                >
                  View profile on GitHub ↗
                </a>
              </div>
            )}

            {/* Live Contributions Grid */}
            {!isLoading && weeks.length > 0 && (
              <>
                {/* Month Labels Aligned With Week Columns */}
                <div className="flex gap-[3.5px] h-4 mb-2 relative">
                  {weeks.map((_, wIndex) => {
                    const match = monthLabels.find((m) => m.index === wIndex);
                    return (
                      <div key={wIndex} className="w-[11px] relative shrink-0">
                        {match && (
                          <span className="absolute left-0 top-0 text-[11px] font-mono text-neutral-500 select-none pointer-events-none whitespace-nowrap">
                            {match.label}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Contribution Tiles Matrix - each square opens GitHub contributions directly */}
                <div className="flex gap-[3.5px]">
                  {weeks.map((week, wIndex) => (
                    <div key={wIndex} className="flex flex-col gap-[3.5px] shrink-0">
                      {week.map((day, dIndex) => (
                        <a
                          key={dIndex}
                          href={
                            day.count > 0
                              ? `https://github.com/${username}?tab=overview&from=${day.date}&to=${day.date}`
                              : `https://github.com/${username}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-[11px] h-[11px] rounded-[2.5px] transition-all duration-150 cursor-pointer hover:scale-135 hover:ring-2 hover:ring-purple-400/90 hover:z-20 block ${getColorClass(
                            day.level
                          )}`}
                          title={`${day.count} contribution${day.count === 1 ? '' : 's'} on ${formatDate(day.date)} (Click to view on GitHub)`}
                          onMouseEnter={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            setHoveredDay({
                              day,
                              x: rect.left + rect.width / 2,
                              y: rect.top,
                            });
                          }}
                          onMouseLeave={() => setHoveredDay(null)}
                        />
                      ))}
                      {/* Fill empty days if the last week has fewer than 7 days */}
                      {week.length < 7 &&
                        Array.from({ length: 7 - week.length }).map((_, emptyIdx) => (
                          <div
                            key={`empty-${emptyIdx}`}
                            className="w-[11px] h-[11px] rounded-[2.5px] opacity-0 pointer-events-none"
                          />
                        ))}
                    </div>
                  ))}
                </div>

                {/* Bottom Bar: Total Count + Color Legend */}
                <div className="flex items-center justify-between mt-4 text-xs font-mono text-neutral-600 dark:text-neutral-400 pt-2">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group cursor-pointer"
                    title="Open GitHub profile"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Live sync" />
                    <span className="group-hover:underline">{totalCount} contributions in the last year</span>
                    <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </a>
                  
                  <div className="flex items-center gap-1.5 select-none">
                    <span className="text-[11px]">Less</span>
                    <div
                      className="w-2.5 h-2.5 rounded-[2px] bg-[#ebedf0] dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800"
                      title="No contributions"
                    />
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-[#4c1d95]" title="1-3 contributions" />
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-[#6d28d9]" title="4-6 contributions" />
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-[#8b5cf6]" title="7-9 contributions" />
                    <div className="w-2.5 h-2.5 rounded-[2px] bg-[#c084fc]" title="10+ contributions" />
                    <span className="text-[11px]">More</span>
                  </div>
                </div>
              </>
            )}

            {/* Floating Custom Tooltip */}
            {hoveredDay && (
              <div
                className="fixed z-50 pointer-events-none -translate-x-1/2 -translate-y-full mb-2 px-2.5 py-1.5 rounded-lg bg-neutral-900/95 text-white dark:bg-white/95 dark:text-neutral-900 text-[11px] font-mono shadow-xl border border-neutral-700/50 dark:border-neutral-200/50 backdrop-blur-xs whitespace-nowrap animate-in fade-in zoom-in-95 duration-100 flex flex-col items-center gap-0.5"
                style={{
                  left: `${hoveredDay.x}px`,
                  top: `${hoveredDay.y - 6}px`,
                }}
              >
                <div>
                  <span className="font-semibold">
                    {hoveredDay.day.count === 0 ? 'No' : hoveredDay.day.count} contribution{hoveredDay.day.count === 1 ? '' : 's'}
                  </span>{' '}
                  on {formatDate(hoveredDay.day.date)}
                </div>
                <span className="text-[9.5px] text-purple-400 dark:text-purple-600 flex items-center gap-1">
                  Click to open on GitHub ↗
                </span>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
