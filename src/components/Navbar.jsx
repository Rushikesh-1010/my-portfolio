import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import { navLinks, profile } from '../data/resumeData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-base-900/80 backdrop-blur-xl border-b border-line shadow-glass'
          : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-6 sm:px-10 lg:px-24 h-16">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 font-display font-semibold text-ink-0 text-base"
        >
          <span className="w-8 h-8 rounded-lg bg-accent-sky/10 border border-accent-sky/30 flex items-center justify-center text-accent-sky">
            <Terminal size={16} />
          </span>
          <span>
            rushikesh<span className="text-accent-sky">.dev</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`nav-link ${activeSection === link.href ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={profile.resumeFile}
          download
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-sky text-base-950 font-semibold text-sm hover:bg-accent-skydim transition-colors duration-300"
        >
          Resume
        </a>

        <button
          className="md:hidden text-ink-0"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-base-900/95 backdrop-blur-xl border-b border-line"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`py-3 text-sm font-medium border-b border-line/50 last:border-0 ${
                    activeSection === link.href ? 'text-accent-sky' : 'text-ink-2'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.resumeFile}
                download
                className="mt-3 inline-flex justify-center items-center gap-2 px-4 py-3 rounded-lg bg-accent-sky text-base-950 font-semibold text-sm"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
