import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { profile } from '../data/resumeData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const links = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: profile.linkedin,
    href: profile.linkedinUrl,
    icon: FaLinkedinIn,
  },
  {
    label: 'GitHub',
    value: profile.github,
    href: profile.githubUrl,
    icon: FaGithub,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-sky/10 rounded-full blur-[140px]" />
      <div className="max-w-4xl mx-auto relative text-center">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="eyebrow justify-center flex"
        >
          07 / Contact
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="heading-lg mt-3"
        >
          Let's build something reliable.
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="body-lead mt-4 max-w-xl mx-auto"
        >
          Open to entry-level AWS Cloud and DevOps roles. Reach out directly —
          I usually respond within a day.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-12 grid sm:grid-cols-3 gap-5"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.label !== 'Email' ? '_blank' : undefined}
              rel="noreferrer"
              className="glass-card p-6 flex flex-col items-center gap-3 hover:border-accent-sky/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <span className="w-11 h-11 rounded-xl bg-accent-sky/10 border border-accent-sky/20 flex items-center justify-center text-accent-sky">
                <l.icon size={18} />
              </span>
              <div className="text-center">
                <p className="text-ink-0 font-semibold text-sm flex items-center gap-1 justify-center">
                  {l.label}
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </p>
                <p className="text-ink-3 text-xs mt-1 font-mono break-all">
                  {l.value}
                </p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
