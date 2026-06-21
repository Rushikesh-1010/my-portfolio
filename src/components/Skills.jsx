import { motion } from 'framer-motion';
import {
  Cloud,
  GitBranch,
  Server,
  Activity,
  Terminal,
  Network,
  Database,
} from 'lucide-react';
import { skillGroups } from '../data/resumeData';

const iconMap = { Cloud, GitBranch, Server, Activity, Terminal, Network, Database };

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative bg-base-800/30">
      <div className="absolute inset-0 bg-grid-faint bg-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_40%,transparent_100%)]" />
      <div className="max-w-6xl mx-auto relative">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="eyebrow"
        >
          02 / Stack
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="heading-lg mt-3 max-w-2xl"
        >
          Technical skills, grouped by what they do.
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, idx) => {
            const Icon = iconMap[group.icon] ?? Cloud;
            return (
              <motion.div
                key={group.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: idx * 0.05 }}
                className="glass-card p-6 hover:border-accent-sky/40 hover:shadow-glow transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-lg bg-accent-sky/10 border border-accent-sky/20 flex items-center justify-center text-accent-sky group-hover:bg-accent-sky/20 transition-colors">
                    <Icon size={16} />
                  </span>
                  <h3 className="font-display font-semibold text-ink-0 text-sm">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span key={s} className="tag-chip">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
