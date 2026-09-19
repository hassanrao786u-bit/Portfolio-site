import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects.js';
import SectionHeading, { SectionWrapper } from './SectionHeading.jsx';

function ProjectCard({ project, index }) {
  const hasLinks = project.liveDemoUrl || project.githubUrl;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-bg-card transition-all hover:scale-[1.02] hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10"
    >
      <div className="relative h-52 overflow-hidden sm:h-56">
        {project.liveDemoUrl ? (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} live demo`}
            className="block h-full"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </a>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/20 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-white transition-colors group-hover:text-accent">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        {hasLinks && (
          <div className="mt-5 flex items-center gap-4 border-t border-white/5 pt-4">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
              >
                <Github size={16} />
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading title="My" highlight="Projects" />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
