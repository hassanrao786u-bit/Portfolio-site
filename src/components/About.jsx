import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo.js';
import SectionHeading, { SectionWrapper } from './SectionHeading.jsx';

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading title="About" highlight="Me" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base leading-relaxed text-muted sm:text-lg"
          >
            {personalInfo.about}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {personalInfo.traits.map((trait) => (
              <span
                key={trait}
                className="cursor-default rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-white transition-all hover:scale-105 hover:border-accent hover:text-accent active:scale-95"
              >
                {trait}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-xl border border-white/10 bg-bg-card shadow-2xl transition-all hover:shadow-accent/10">
            <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/90" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/90" />
                <span className="h-3 w-3 rounded-full bg-green-500/90" />
              </div>
              <span className="ml-3 font-mono text-xs text-muted">
                developer.js
              </span>
            </div>

            <div className="overflow-x-auto p-5">
              <pre className="font-mono text-sm leading-relaxed sm:text-[15px]">
                <code className="text-muted">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-accent">developer</span>{' '}
                  <span className="text-white">= {'{'}</span>
                  {'\n'}
                  <span className="text-sky-400">  name</span>
                  <span className="text-white">:</span>{' '}
                  <span className="text-green-400">'Muhammad Hassan'</span>
                  <span className="text-white">,</span>
                  {'\n'}
                  <span className="text-sky-400">  role</span>
                  <span className="text-white">:</span>{' '}
                  <span className="text-green-400">'MERN Stack Developer'</span>
                  <span className="text-white">,</span>
                  {'\n'}
                  <span className="text-sky-400">  skills</span>
                  <span className="text-white">:</span>{' '}
                  <span className="text-white">[</span>
                  <span className="text-green-400">'React'</span>
                  <span className="text-white">, </span>
                  <span className="text-green-400">'Node.js'</span>
                  <span className="text-white">, </span>
                  <span className="text-green-400">'Express'</span>
                  <span className="text-white">, </span>
                  <span className="text-green-400">'MongoDB'</span>
                  <span className="text-white">, </span>
                  <span className="text-green-400">'Next.js'</span>
                  <span className="text-white">],</span>
                  {'\n'}
                  <span className="text-sky-400">  passion</span>
                  <span className="text-white">:</span>{' '}
                  <span className="text-green-400">'Building pixel-perfect UIs'</span>
                  <span className="text-white">,</span>
                  {'\n'}
                  <span className="text-sky-400">  available</span>
                  <span className="text-white">:</span>{' '}
                  <span className="text-orange-400">true</span>
                  <span className="text-white">,</span>
                  {'\n'}
                  <span className="text-white">{'}'};</span>
                  <span className="inline-block h-4 w-2 animate-blink-cursor bg-accent align-middle" />
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
