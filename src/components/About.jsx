import { motion } from 'framer-motion';
import { Cloud, Server, GitBranch, Rocket } from 'lucide-react';
import { aboutHighlights, profile } from '../data/resumeData';

const icons = { 'AWS Cloud': Cloud, Infrastructure: Server, 'CI/CD': GitBranch, 'Cloud Deployment': Rocket };

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="eyebrow"
        >
          01 / About
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="heading-lg mt-3 max-w-2xl"
        >
          Building infrastructure that's reliable by design.
        </motion.h2>

        <div className="mt-12 grid lg:grid-cols-5 gap-10 lg:gap-16">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-3 body-lead text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {aboutHighlights.map((h) => {
              const Icon = icons[h.label] ?? Cloud;
              return (
                <div
                  key={h.label}
                  className="glass-card p-5 hover:border-accent-sky/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon size={18} className="text-accent-sky mb-3" />
                  <p className="text-ink-0 font-semibold text-sm">{h.label}</p>
                  <p className="text-ink-3 text-xs mt-1.5 leading-relaxed">
                    {h.detail}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
