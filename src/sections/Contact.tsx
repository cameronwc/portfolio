import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm tracking-[0.2em] text-accent-400">
            GET IN TOUCH
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's build something secure.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-slate-400">
            I partner with teams that treat security as a core product feature.
            Whether you're scaling a healthcare startup, preparing for audit, or
            modernizing enterprise pipelines — let's talk.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <a
            href="mailto:cameron.w.cooper@gmail.com"
            className="rounded-lg bg-accent-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-400"
          >
            cameron.w.cooper@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/cameronwc"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/[0.12] px-8 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-white/[0.25] hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/cameronwc"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/[0.12] px-8 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-white/[0.25] hover:text-white"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
