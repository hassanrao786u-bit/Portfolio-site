import { personalInfo } from '../data/personalInfo.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-bg-navbar px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm text-muted">
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-muted/60">
          Built with React, Vite, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
}
