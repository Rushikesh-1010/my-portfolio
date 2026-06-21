import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/resumeData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Education() {
  return (
    <section id="education" className="section-pad relative">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="eyebrow"
        >
          05 / Education
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="heading-lg mt-3"
        >
          Academic background.
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {education.map((ed, idx) => (
            <motion.div
              key={ed.degree}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: idx * 0.08 }}
              className="glass-card p-6 hover:border-accent-sky/40 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="w-10 h-10 rounded-lg bg-accent-sky/10 border border-accent-sky/20 flex items-center justify-center text-accent-sky mb-4">
                <GraduationCap size={18} />
              </span>
              <h3 className="font-display font-semibold text-ink-0 text-base leading-snug">
                {ed.degree}
              </h3>
              <p className="text-ink-2 text-sm mt-2">{ed.institution}</p>
              <div className="mt-4 pt-4 border-t border-line flex items-center justify-between">
                <span className="font-mono text-xs text-accent-mint">{ed.score}</span>
                <span className="font-mono text-xs text-ink-3">{ed.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
