import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProofOfWork } from './components/ProofOfWork';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const AppContent: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} transition-colors duration-200`}>
      
      {/* Floating Pill Dock Navigation matching Screenshot 1 */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Page Flow matching Screenshots 1-5 */}
      <main className="relative">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Proof of Work (Featured Projects) */}
        <ProofOfWork />

        {/* 3. Skills */}
        <Skills />

        {/* 5. Education */}
        <Education />

        {/* 6. Say Hello & Mail Form */}
        <Contact />
      </main>

      {/* 7. Minimalist Footer */}
      <Footer />

      {/* Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
