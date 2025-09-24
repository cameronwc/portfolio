export function Footer() {
  return (
    <footer className="section-padding mx-auto mt-24 max-w-5xl pb-12 text-center text-sm text-slate-400">
      <p>© {new Date().getFullYear()} Avery Mitchell. Built with React, Vite, Tailwind, and Framer Motion.</p>
      <p className="mt-2 text-xs text-slate-500">
        Deployed automatically to Amazon S3 via GitHub Actions with cache-aware asset publishing.
      </p>
    </footer>
  );
}
