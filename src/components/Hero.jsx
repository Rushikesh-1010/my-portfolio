import { motion } from 'framer-motion';
import { Download, FolderGit2, Mail, ArrowDown } from 'lucide-react';
import NetworkTopology from './NetworkTopology';
import { profile } from '../data/resumeData';
import profilePhoto from '../assets/profile.jpeg';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-base-900"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-faint bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
      <NetworkTopology />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base-900/60 to-base-900" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent-sky/10 rounded-full blur-[140px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full px-6 sm:px-10 lg:px-24 pt-28 pb-16 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-10 items-center"
      >
        <div>
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line bg-base-800/60 backdrop-blur-sm mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-mint animate-pulse-slow" />
            <span className="font-mono text-xs text-ink-2 tracking-wide">
              currently provisioning cloud infra @ Cravita Technologies
            </span>
          </motion.div>

          <motion.h1 variants={item} className="heading-xl">
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-mono text-accent-sky text-lg sm:text-xl tracking-tight"
          >
            {profile.role}
          </motion.p>

          <motion.p variants={item} className="body-lead mt-6 max-w-2xl">
            {profile.tagline} MCA candidate skilled in EC2, VPC, IAM, RDS, ALB,
            Auto Scaling, and CloudWatch — building infrastructure that stays up
            when it matters.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <a href={profile.resumeFile} download className="btn-primary">
              <Download size={16} />
              Download Resume
            </a>
            <button
              onClick={() => scrollTo('#projects')}
              className="btn-ghost"
            >
              <FolderGit2 size={16} />
              View Projects
            </button>
            <button onClick={() => scrollTo('#contact')} className="btn-ghost">
              <Mail size={16} />
              Contact Me
            </button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-20 grid grid-cols-3 max-w-md gap-6 font-mono"
          >
            <div>
              <p className="text-2xl text-ink-0 font-semibold">8.5</p>
              <p className="text-xs text-ink-3 mt-1 tracking-wide">MCA CGPA</p>
            </div>
            <div>
              <p className="text-2xl text-ink-0 font-semibold">11+</p>
              <p className="text-xs text-ink-3 mt-1 tracking-wide">AWS services used</p>
            </div>
            <div>
              <p className="text-2xl text-ink-0 font-semibold">2</p>
              <p className="text-xs text-ink-3 mt-1 tracking-wide">AZs deployed across</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="relative mx-auto lg:mx-0 w-full max-w-sm"
        >
          <div className="absolute -inset-4 bg-accent-sky/10 rounded-[2rem] blur-2xl" />
          <div className="relative glass-card p-3 hover:border-accent-sky/40 transition-colors duration-300 animate-float">
            <div className="relative rounded-xl overflow-hidden border border-line">
              <img
                src={profilePhoto}
                alt="Rushikesh Debadwar"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base-950/70 via-transparent to-transparent" />
            </div>

            {/* console-style status footer */}
            <div className="flex items-center justify-between px-2 pt-3 pb-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-mint animate-pulse-slow" />
                <span className="font-mono text-[11px] text-ink-2 tracking-wide">
                  status: available
                </span>
              </div>
              <span className="font-mono text-[11px] text-ink-3">
                Pune, IN
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-ink-3 hover:text-accent-sky transition-colors animate-float"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
