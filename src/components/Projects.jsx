import { motion } from 'framer-motion';
import { Network, BookOpen, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/resumeData';

const iconMap = { Network, BookOpen };

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="eyebrow"
        >
          03 / Projects
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="heading-lg mt-3 max-w-2xl"
        >
          Infrastructure I've designed and shipped.
        </motion.h2>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {projects.map((p, idx) => {
            const Icon = iconMap[p.icon] ?? Network;
            return (
              <motion.div
                key={p.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-7 flex flex-col hover:border-accent-sky/40 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="w-11 h-11 rounded-xl bg-accent-sky/10 border border-accent-sky/20 flex items-center justify-center text-accent-sky">
                    <Icon size={20} />
                  </span>
                  <span className="font-mono text-[11px] text-ink-3 tracking-wide uppercase pt-2">
                    {p.type}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-xl text-ink-0">
                  {p.title}
                </h3>
                <p className="text-ink-2 text-sm mt-3 leading-relaxed">
                  {p.description}
                </p>

                <ul className="mt-5 space-y-2.5 flex-1">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm text-ink-2">
                      <CheckCircle2
                        size={15}
                        className="text-accent-mint shrink-0 mt-0.5"
                      />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-line flex flex-wrap gap-2">
                  {p.stack.map((s) => (
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
