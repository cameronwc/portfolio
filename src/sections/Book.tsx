import { motion } from "framer-motion";

export function Book() {
  return (
    <section id="book" className="py-24 sm:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm tracking-[0.2em] text-accent-400">
            BOOK
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Helping others break into
            <br className="hidden sm:block" /> DevSecOps.
          </h2>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col items-start gap-8 rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:flex-row sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img
            src="/book-cover.jpg"
            alt="Breaking into DevSecOps book cover"
            className="w-40 flex-none rounded-lg shadow-lg sm:w-48"
          />

          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Breaking into DevSecOps
            </h3>
            <p className="mt-1 text-sm text-accent-400/80">
              A Practical Guide for Launching Your Career in Secure Software
              Delivery
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              A hands-on guide covering everything from security fundamentals to
              building DevSecOps pipelines, threat modeling, and landing your
              first role. Written for engineers, career switchers, and anyone
              looking to break into the field.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-md border border-white/[0.08] px-3 py-1.5 text-xs text-slate-400">
                Kindle &mdash; $9.99
              </span>
              <span className="rounded-md border border-white/[0.08] px-3 py-1.5 text-xs text-slate-400">
                Paperback &mdash; $19.99
              </span>
            </div>

            <div className="mt-6">
              <a
                href="https://www.amazon.com/Breaking-into-DevSecOps-Practical-Launching-ebook/dp/B0GSHSK4H5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md border border-white/[0.08] px-4 py-2 text-sm text-slate-300 transition hover:border-white/[0.2] hover:text-white"
              >
                View on Amazon
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
