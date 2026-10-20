import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Code2, 
  FileText, 
  Sun, 
  Moon 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { useTheme } from '../context/ThemeContext';
import { siteConfig } from '../config/site';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<'home' | 'projects'>('home');

  useEffect(() => {
    const handleScroll = () => {
      const projectsEl = document.getElementById('projects');
      if (projectsEl) {
        const top = projectsEl.getBoundingClientRect().top;
        if (top <= 250) {
          setActiveTab('projects');
        } else {
          setActiveTab('home');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav 
        className="pointer-events-auto rounded-full w-[850px] max-lg:w-[760px] max-md:w-[92vw] px-4 py-2 bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-black/10 dark:border-white/15 flex items-center justify-between shadow-sm transition-all"
        aria-label="Main Navigation"
      >
        <div className="flex items-center justify-center w-full gap-5 sm:gap-7">
          
          {/* Home Icon */}
          <button
            onClick={() => {
              setActiveTab('home');
              scrollTo('hero');
            }}
            className={`p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ${
              activeTab === 'home' ? 'text-[#cc9e2b] dark:text-[#FFC83D]' : 'text-neutral-700 dark:text-neutral-300'
            }`}
            title="Home"
            aria-label="Home"
          >
            <Home className="w-[18px] h-[18px]" />
          </button>

          {/* Proof of Work / Code Icon */}
          <button
            onClick={() => {
              setActiveTab('projects');
              scrollTo('projects');
            }}
            className={`p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ${
              activeTab === 'projects' ? 'text-[#cc9e2b] dark:text-[#FFC83D]' : 'text-neutral-700 dark:text-neutral-300'
            }`}
            title="Proof of Work"
            aria-label="Projects"
          >
            <Code2 className="w-[18px] h-[18px]" />
          </button>

          {/* Separator 1 */}
          <span className="h-5 w-px bg-neutral-300 dark:bg-neutral-700" />

          {/* Resume Icon */}
          <button
            onClick={onOpenResume}
            className="p-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            title="Resume"
            aria-label="Resume"
          >
            <FileText className="w-[18px] h-[18px]" />
          </button>

          {/* GitHub Icon */}
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            title="GitHub"
            aria-label="GitHub"
          >
            <GithubIcon className="w-[18px] h-[18px]" />
          </a>

          {/* X / Twitter Icon */}
          <a
            href={siteConfig.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            title="X (Twitter)"
            aria-label="Twitter"
          >
            <TwitterIcon className="w-[17px] h-[17px]" />
          </a>

          {/* LinkedIn Icon */}
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-[18px] h-[18px]" />
          </a>

          {/* Separator 2 */}
          <span className="h-5 w-px bg-neutral-300 dark:bg-neutral-700" />

          {/* Theme Toggle Icon */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-[18px] h-[18px] text-amber-400" />
            ) : (
              <Moon className="w-[18px] h-[18px] text-neutral-700" />
            )}
          </button>

        </div>
      </nav>
    </header>
  );
};
