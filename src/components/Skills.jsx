import { motion } from 'framer-motion';
import { skills } from '../data/skills.js';
import SectionHeading, { SectionWrapper } from './SectionHeading.jsx';

// Tailwind dynamic class nahi banata, isliye har class poori likhi hui hai
const palette = [
  {
    bar: 'bg-amber-400',
    card: 'border-amber-400/20 bg-amber-400/5 hover:border-amber-400/60 hover:shadow-amber-400/10',
    title: 'group-hover:text-amber-400',
    category: 'text-amber-400/70',
    badge: 'bg-amber-400/15 text-amber-400 border-amber-400/30',
  },
  {
    bar: 'bg-sky-400',
    card: 'border-sky-400/20 bg-sky-400/5 hover:border-sky-400/60 hover:shadow-sky-400/10',
    title: 'group-hover:text-sky-400',
    category: 'text-sky-400/70',
    badge: 'bg-sky-400/15 text-sky-400 border-sky-400/30',
  },
  {
    bar: 'bg-emerald-400',
    card: 'border-emerald-400/20 bg-emerald-400/5 hover:border-emerald-400/60 hover:shadow-emerald-400/10',
    title: 'group-hover:text-emerald-400',
    category: 'text-emerald-400/70',
    badge: 'bg-emerald-400/15 text-emerald-400 border-emerald-400/30',
  },
  {
    bar: 'bg-violet-400',
    card: 'border-violet-400/20 bg-violet-400/5 hover:border-violet-400/60 hover:shadow-violet-400/10',
    title: 'group-hover:text-violet-400',
    category: 'text-violet-400/70',
    badge: 'bg-violet-400/15 text-violet-400 border-violet-400/30',
  },
];

const neutralBadge = 'bg-white/5 text-muted border-white/15';

function SkillCard({ skill, index }) {
  const color = palette[index % palette.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.04 }}
      className={`group relative flex h-full min-h-[8rem] flex-col justify-between overflow-hidden rounded-lg border p-6 transition-all hover:shadow-lg ${color.card}`}
    >
      <div className={`absolute inset-x-0 top-0 h-1 ${color.bar}`} />

      <div className="flex items-start justify-between gap-2">
        <h3
          className={`break-words text-base font-semibold text-white transition-colors sm:text-lg ${color.title}`}
        >
          {skill.name}
        </h3>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${
            skill.proficiency === 'Expert' ? color.badge : neutralBadge
          }`}
        >
          {skill.proficiency}
        </span>
      </div>
      <p
        className={`mt-4 text-xs font-medium uppercase tracking-wider ${color.category}`}
      >
        {skill.category}
      </p>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-bg-secondary/50">
      <SectionHeading
        title="Skills &"
        highlight="Technologies"
        subtitle="Technologies I work with to build exceptional web experiences"
        centered
      />

      <div className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}