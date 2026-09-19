import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Code2, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/personalInfo.js';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-4 pt-20 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 flex items-center gap-2"
          >
            <Sparkles size={16} className="text-accent" />
            <span className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-accent sm:text-sm">
              Hello, I'm
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-accent">Muhammad</span>
            <br />
            <span className="text-accent">Hassan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-xl font-semibold text-white sm:text-2xl md:text-3xl"
          >
            {personalInfo.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-4 max-w-md text-sm text-muted sm:text-base md:text-lg"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href={personalInfo.resumeUrl}
              download
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-bg-primary transition-all hover:scale-105 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/30 sm:text-base"
            >
              <Download size={18} className="transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </a>

            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-64}
              className="group inline-flex cursor-pointer items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/10 sm:text-base md:border md:bg-transparent md:text-white md:hover:border-accent md:hover:text-accent md:hover:scale-105 bg-accent border-accent text-bg-primary hover:bg-accent-hover hover:border-accent-hover md:bg-transparent md:text-white md:border-white/20"
            >
              <Code2 size={18} />
              View Projects
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-64}
              className="group inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-accent sm:text-base"
            >
              Get in Touch
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl" />

              <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-accent/30 sm:h-64 sm:w-64 md:h-80 md:w-80">
                <img
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 to-transparent" />
              </div>

              <div className="absolute -bottom-2 -right-2 flex items-center gap-2 rounded-full border border-accent/30 bg-bg-card px-4 py-2 shadow-lg sm:-bottom-3 sm:-right-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                </span>
                <span className="text-xs font-semibold text-accent sm:text-sm">
                  Available for hire
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted/40 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-1.5 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
