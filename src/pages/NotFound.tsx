import { Link } from "react-router-dom";
import { PageTransition } from "../components/PageTransition";
import { usePageMeta } from "../hooks/usePageMeta";

export function NotFound() {
  usePageMeta(
    "404 — Cameron Cooper",
    "Page not found."
  );

  return (
    <PageTransition>
      <section className="flex min-h-screen items-center justify-center">
        <div className="section-container py-32 text-center">
          <p className="font-mono text-sm tracking-[0.3em] text-accent-400">
            404 — NOT FOUND
          </p>
          <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
            This route doesn't exist.
          </h1>
          <Link
            to="/"
            className="mt-10 inline-block rounded-lg bg-accent-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-400 hover:shadow-[0_0_28px_rgba(6,182,212,0.45)]"
          >
            Back to home
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
