import { motion } from 'framer-motion';
import { GraduationCap, Award, Clock, BookOpen } from 'lucide-react';
import { education } from '../data/education.js';
import SectionHeading, { SectionWrapper } from './SectionHeading.jsx';

const statusConfig = {
  'in-progress': {
    label: 'In Progress',
    icon: Clock,
    color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
  },
  completed: {
    label: 'Completed',
    icon: Award,
    color: 'text-green-400 bg-green-400/10 border-green-400/30',
  },
};

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading title="Education" centered />

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((entry, i) => {
          const Status = statusConfig[entry.status];
          const StatusIcon = Status.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl border border-white/10 bg-bg-card p-6 transition-all hover:scale-[1.02] hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/5 p-1.5 transition-all group-hover:bg-white/10">
                  {entry.logo ? (
                    <img
                      src={entry.logo}
                      alt={`${entry.institution} logo`}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <GraduationCap size={24} className="text-accent" />
                  )}
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${Status.color}`}
                >
                  <StatusIcon size={12} />
                  {Status.label}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white">
                {entry.title}
              </h3>

              <p className="mt-1 text-sm font-medium text-accent">
                {entry.institution}
              </p>

              <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                <BookOpen size={12} />
                {entry.period}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                {entry.description}
              </p>

              {entry.certificateImage && (
                <div className="mt-5 overflow-hidden rounded-lg border border-white/10">
                  <img
                    src={entry.certificateImage}
                    alt={`${entry.title} certificate`}
                    className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
