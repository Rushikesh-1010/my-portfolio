import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experience } from '../data/resumeData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative bg-base-800/30">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="eyebrow"
        >
          04 / Experience
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="heading-lg mt-3"
        >
          Where I've put it into practice.
        </motion.h2>

        <div className="mt-14 relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-sky/60 via-line to-transparent" />

          {experience.map((exp, idx) => (
            <motion.div
              key={exp.role + exp.company}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: idx * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 rounded-full bg-base-900 border-2 border-accent-sky flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-sky" />
              </span>

              <div className="glass-card p-6 hover:border-accent-sky/40 transition-colors duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-accent-sky" />
                    <h3 className="font-display font-semibold text-ink-0 text-lg">
                      {exp.role}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-accent-mint border border-accent-mint/30 bg-accent-mint/10 px-2.5 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-ink-3 text-sm mb-4">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.points.map((pt) => (
                    <li key={pt} className="text-sm text-ink-2 flex gap-2.5">
                      <span className="text-accent-sky mt-1.5">▸</span>
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
