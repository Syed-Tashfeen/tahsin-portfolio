import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { TwitterIcon } from './Icons';
import { siteConfig } from '../config/site';

export const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    setStatus('success');
    const subject = encodeURIComponent(`Portfolio message from ${email}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-xl mx-auto">
        
        {/* Title matching Screenshot 4 */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center text-neutral-900 dark:text-white mb-10">
          Say Hello
        </h2>

        {/* Top Direct Action: x dm is recommended */}
        <div className="text-left mb-8">
          <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            x dm is recommended
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${siteConfig.email}?subject=Book%20a%20meet%20with%20Tashfeen`}
              className="inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-black font-semibold text-xs sm:text-sm px-4 py-2 rounded-lg transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-black text-black" />
              <span>book a meet</span>
            </a>

            <a
              href={siteConfig.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0084ff] hover:bg-[#0070d8] text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-lg transition-colors"
            >
              <TwitterIcon className="w-4 h-4 fill-white" />
              <span>dm on x</span>
            </a>
          </div>
        </div>

        {/* Form matching Screenshot 5 */}
        <div className="text-left">
          <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            you can mail also
          </p>

          {status === 'success' && (
            <div className="mb-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-600 dark:text-emerald-400">
              Opening your default mail client with your message...
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-neutral-800 dark:text-neutral-300 mb-1.5">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="johndoe69@xyz.com"
                required
                className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-neutral-800 dark:text-neutral-300 mb-1.5">
                Your message
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here."
                required
                className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 resize-y"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-white font-medium py-2.5 rounded-lg text-sm transition-colors"
            >
              Send message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
