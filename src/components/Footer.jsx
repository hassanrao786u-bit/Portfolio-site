import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo.js';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { name: 'GitHub', url: personalInfo.social.github, icon: FaGithub },
  { name: 'LinkedIn', url: personalInfo.social.linkedin, icon: FaLinkedin },
  { name: 'WhatsApp', url: personalInfo.social.whatsapp, icon: FaWhatsapp },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const linkClass = 'text-sm text-muted transition-colors hover:text-accent';
  const iconClass = 'text-muted transition-colors hover:text-accent';

  return (
    <footer className="border-t border-white/5 bg-bg-navbar px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-8 lg:flex-row lg:justify-between">
        <div className="text-center lg:text-left">
          <a href="#home" className="font-mono text-xl font-bold text-accent">&lt;{personalInfo.name}/&gt;</a>
          <p className="mt-2 text-sm text-muted">&copy; {year} All rights reserved.</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-10 gap-y-3">
          {links.map((link) => (
            <a key={link.label} href={link.href} className={linkClass}>{link.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          {socials.map((social) => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name} className={iconClass}>
              <social.icon size={22} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}