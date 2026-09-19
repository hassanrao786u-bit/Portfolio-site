import { motion } from 'framer-motion';
import { skills } from '../data/skills.js';
import SectionHeading, { SectionWrapper } from './SectionHeading.jsx';

const proficiencyColors = {
  Expert: 'bg-accent/15 text-accent border-accent/30',
  Proficient: 'bg-sky-500/15 text-sky-400 border-sky-500/30',
};

function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.04 }}
      className="group rounded-lg border border-white/10 bg-bg-card p-5 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold text-white transition-colors group-hover:text-accent">
          {skill.name}
        </h3>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${proficiencyColors[skill.proficiency]}`}
        >
          {skill.proficiency}
        </span>
      </div>
      <p className="mt-3 text-xs font-medium uppercase tracking-wider text-muted/70">
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
