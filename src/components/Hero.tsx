import React from 'react';
import { siteConfig } from '../config/site';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-[80vh] flex flex-col justify-center items-center pt-36 sm:pt-44 pb-16 px-4 text-center"
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        
        {/* Circular Cosmic Avatar matching Screenshot 1 */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-6 shadow-md border-2 border-neutral-200 dark:border-neutral-800">
          <img 
            src="/avatar.jpg" 
            alt={siteConfig.name} 
            className="w-full h-full object-cover select-none"
          />
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
          Hi, I'm {siteConfig.name}
        </h1>

        {/* Supporting Paragraph */}
        <div className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal space-y-2 mb-8 max-w-xl">
          <p>
            ECE undergraduate, i break things, learn fast, and make shit happen. deep into code, AI, and systems; anything that pushes the limits. actively building transformers from scratch, agentic pipelines, and robotics. still chasing mastery.
          </p>
          <p className="text-neutral-900 dark:text-neutral-200 font-medium">
            If you're working on something real, let's talk.
          </p>
        </div>

        {/* Action Buttons matching Screenshot 1 */}
        <div className="flex items-center justify-center gap-3">
          <a
            href={`mailto:${siteConfig.email}?subject=Let's%20connect%20with%20Tashfeen`}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 shadow-sm transition-all"
          >
            Book a meet
          </a>

          <button
            onClick={scrollToContact}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 shadow-sm transition-all"
          >
            Get in touch
          </button>
        </div>

      </div>
    </section>
  );
};
