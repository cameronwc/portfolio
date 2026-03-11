import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-accent-500/[0.07] blur-[120px]" />
        <div className="dot-grid absolute inset-0" />
        <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-gray-950 to-transparent" />
      </div>

      <div className="section-container relative z-10 py-32 text-center">
        <motion.p
          className="font-mono text-sm tracking-[0.3em] text-accent-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          SENIOR DEVSECOPS ENGINEER II AT WELLTHY
        </motion.p>

        <motion.h1
          className="mt-8 text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          Cameron
          <br />
          Cooper
        </motion.h1>

        <motion.p
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          I architect security automation that keeps cloud platforms compliant,
          observable, and resilient — so teams ship fast without compromising
          trust.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
        >
          <a
            href="#experience"
            className="rounded-lg bg-accent-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Explore My Work
          </a>
          <a
            href="/Cameron_Cooper_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/[0.12] px-8 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-white/[0.25] hover:text-white"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-white/[0.12] px-8 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-white/[0.25] hover:text-white"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-[0.2em] text-slate-600">
              SCROLL
            </span>
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              className="text-slate-600"
            >
              <path
                d="M8 4v12m0 0l-4-4m4 4l4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
