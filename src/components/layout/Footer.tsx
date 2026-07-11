import { portfolioData } from '../../data/portfolio';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from '../shared/icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-gray-200 dark:border-white/10 mt-20 relative z-10">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Designed & Developed by</p>
          <p className="text-xl font-bold font-heading text-gradient">{portfolioData.personal.name}</p>
        </div>
        
        <p className="text-sm font-medium mb-6">
          Built with React, TypeScript & Framer Motion
        </p>

        <div className="flex gap-4 mb-8">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="p-3 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <p className="text-xs text-gray-400 dark:text-gray-500">
          © {currentYear} {portfolioData.personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
