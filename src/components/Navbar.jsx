import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Education', to: 'education' },
  { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const lockRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (lockRef.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -54% 0px' }
    );
    navLinks.forEach(({ to }) => {
      const el = document.getElementById(to);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (to) => {
    setActive(to);
    lockRef.current = true;
    setTimeout(() => {
      lockRef.current = false;
    }, 600);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-navbar/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="home"
            smooth="easeOutCubic"
            duration={400}
            onClick={() => handleNavClick('home')}
            className="cursor-pointer font-mono text-xl font-bold text-accent transition-colors hover:text-accent-hover sm:text-2xl"
          >
            &lt;Muhammad Hassan/&gt;
          </Link>

          <div className="hidden items-center gap-1 lg:absolute lg:right-10 lg:top-0 lg:flex lg:h-16">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth="easeOutCubic"
                duration={400}
                offset={-64}
                onClick={() => handleNavClick(link.to)}
                className={`cursor-pointer rounded-md px-3 py-2 text-lg font-bold transition-colors hover:text-accent ${
                  active === link.to ? 'text-accent' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-md p-2 text-muted transition-colors hover:text-accent lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/5 bg-bg-navbar/95 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth="easeOutCubic"
                  duration={400}
                  offset={-64}
                  onClick={() => {
                    handleNavClick(link.to);
                    setMenuOpen(false);
                  }}
                  className={`cursor-pointer rounded-md px-4 py-3 text-sm font-medium transition-colors hover:bg-white/5 hover:text-accent ${
                    active === link.to ? 'text-accent bg-white/5' : 'text-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}