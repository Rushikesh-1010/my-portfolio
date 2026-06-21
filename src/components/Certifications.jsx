import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certifications } from '../data/resumeData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad relative bg-base-800/30">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="eyebrow"
        >
          06 / Certifications
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="heading-lg mt-3"
        >
          Continued learning.
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: idx * 0.08 }}
              className="glass-card p-6 flex items-start gap-4 hover:border-accent-sky/40 transition-colors duration-300"
            >
              <span className="w-10 h-10 shrink-0 rounded-lg bg-accent-amber/10 border border-accent-amber/25 flex items-center justify-center text-accent-amber">
                <Award size={18} />
              </span>
              <div>
                <h3 className="font-display font-semibold text-ink-0 text-base leading-snug">
                  {cert.title}
                </h3>
                <p className="text-ink-3 text-sm mt-1.5">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
