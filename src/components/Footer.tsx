export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="font-mono text-xs text-slate-600">
          CC<span className="text-accent-500/50">.</span>{" "}
          {new Date().getFullYear()}
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/cameronwc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-600 transition-colors hover:text-slate-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/cameronwc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-600 transition-colors hover:text-slate-400"
          >
            LinkedIn
          </a>
          <a
            href="https://cameroncooperphotography.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-600 transition-colors hover:text-slate-400"
          >
            Photography
          </a>
        </div>
      </div>
    </footer>
  );
}
