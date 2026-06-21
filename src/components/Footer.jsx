import { profile } from '../data/resumeData';

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 sm:px-10 lg:px-24 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-ink-3">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
        </p>
        <p className="font-mono text-xs text-ink-3">{profile.location}</p>
      </div>
    </footer>
  );
}
