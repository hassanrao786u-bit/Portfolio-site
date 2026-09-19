import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { experience } from '../data/experience.js';
import SectionHeading, { SectionWrapper } from './SectionHeading.jsx';

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-bg-secondary/50">
      <SectionHeading title="Experience" centered />

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent via-accent/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

        {experience.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pl-12 md:pl-0"
          >
            <div className="absolute left-4 top-2 z-10 h-3 w-3 rounded-full border-2 border-accent bg-bg-primary md:left-1/2 md:-translate-x-1/2" />

            <div className="md:mx-auto md:w-1/2 md:px-8">
              <div className="rounded-xl border border-white/10 bg-bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10">
                <div className="mb-3 flex items-center gap-2 text-xs font-medium text-accent">
                  <Calendar size={14} />
                  {entry.period}
                </div>

                <h3 className="text-lg font-bold text-white">
                  {entry.role}
                </h3>

                <div className="mt-1 flex items-center gap-2 text-sm font-medium text-accent">
                  <Briefcase size={16} />
                  {entry.company}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {entry.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
