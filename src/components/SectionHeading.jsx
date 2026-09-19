import { motion } from 'framer-motion';

export default function SectionHeading({
  title,
  highlight,
  subtitle,
  centered = false,
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
      >
        {title} {highlight && <span className="text-accent">{highlight}</span>}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-base text-muted sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: centered ? '64px' : '48px' }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`mt-4 h-1 rounded-full bg-accent ${centered ? 'mx-auto' : ''}`}
      />
    </div>
  );
}

export function SectionWrapper({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`px-4 py-20 sm:px-6 md:py-28 lg:px-8 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
