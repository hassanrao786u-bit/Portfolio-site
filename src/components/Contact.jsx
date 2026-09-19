import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo.js';
import SectionHeading, { SectionWrapper } from './SectionHeading.jsx';

const socials = [
  {
    name: 'GitHub',
    url: personalInfo.social.github,
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    url: personalInfo.social.linkedin,
    icon: FaLinkedin,
  },

  {
    name: 'WhatsApp',
    url: personalInfo.social.whatsapp,
    icon: FaWhatsapp,
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-bg-secondary/50">
      <SectionHeading
        title="Get In"
        highlight="Touch"
        centered
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-base text-muted sm:text-lg">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Let's connect and build
          something great together.
        </p>

        <div className="mt-10 flex items-center justify-center gap-6">
          {socials.map((social, i) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="group flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-bg-card text-muted transition-all hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/20"
                aria-label={social.name}
              >
                <Icon size={24} />
              </motion.a>
            );
          })}
        </div>

        <motion.a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.social.email}`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 inline-flex items-center gap-2 rounded-md bg-accent px-8 py-3 text-sm font-semibold text-bg-primary transition-all hover:scale-105 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/30 sm:text-base"
        >
          <FaEnvelope size={16} />
          Send an Email
        </motion.a>
      </motion.div>
    </SectionWrapper>
  );
}
