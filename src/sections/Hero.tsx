import { lazy, Suspense, useEffect, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { Link } from "react-router-dom";
import type { PointerEvent as ReactPointerEvent } from "react";
import { Magnetic } from "../components/Magnetic";

// Lazy-loaded so Three.js ships as its own chunk and never blocks first paint
const WireframeTerrain = lazy(() =>
  import("../components/WireframeTerrain").then((module) => ({
    default: module.WireframeTerrain,
  }))
);

const NAME_LINES = ["Cameron", "Cooper"];

const letterContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
};

const letterItem = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  // Defer the WebGL canvas until the main thread is idle so Three.js init
  // never competes with first paint and hydration
  const [showParticles, setShowParticles] = useState(false);
  const spotX = useMotionValue(-2000);
  const spotY = useMotionValue(-2000);
  const spotlight = useMotionTemplate`radial-gradient(640px circle at ${spotX}px ${spotY}px, rgba(6, 182, 212, 0.08), transparent 70%)`;

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(() => setShowParticles(true), {
        timeout: 1500,
      });
      return () => window.cancelIdleCallback(id);
    }
    const timer = window.setTimeout(() => setShowParticles(true), 350);
    return () => window.clearTimeout(timer);
  }, []);

  const onPointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    spotX.set(event.clientX - rect.left);
    spotY.set(event.clientY - rect.top);
  };

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      onPointerMove={onPointerMove}
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-accent-500/[0.07] blur-[120px]" />
        {showParticles && (
          <Suspense fallback={null}>
            <WireframeTerrain />
          </Suspense>
        )}
        <div className="scanlines absolute inset-0" />
        {/* Cursor spotlight */}
        <motion.div
          className="absolute inset-0 hidden md:block"
          style={{ background: spotlight }}
          aria-hidden="true"
        />
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

        <motion.div
          className="absolute left-1/2 top-[34%] h-72 w-[40rem] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/[0.14] blur-[100px]"
          animate={{ opacity: [0.55, 1, 0.55], scale: [1, 1.15, 1] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <motion.h1
          className="relative mt-8 text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl"
          aria-label="Cameron Cooper"
          variants={letterContainer}
          initial="hidden"
          animate="visible"
        >
          {NAME_LINES.map((line) => (
            <span
              key={line}
              aria-hidden="true"
              className="-mb-[0.12em] block overflow-hidden pb-[0.12em]"
            >
              {line.split("").map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  variants={letterItem}
                  className="inline-block bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
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
          <Magnetic>
            <a
              href="#experience"
              className="rounded-lg bg-accent-500 px-8 py-3.5 text-sm font-semibold text-gray-950 transition hover:bg-accent-400 hover:shadow-[0_0_28px_rgba(6,182,212,0.45)]"
            >
              Explore My Work
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={`${import.meta.env.BASE_URL}Cameron_Cooper_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/[0.12] px-8 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-accent-500/40 hover:text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]"
            >
              Resume
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="rounded-lg border border-white/[0.12] px-8 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-accent-500/40 hover:text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]"
            >
              Get In Touch
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link
            to="/work/ai-remediation"
            className="group inline-flex items-center gap-2 font-mono text-xs tracking-wider text-slate-400 transition-colors hover:text-accent-400"
          >
            FEATURED: AI-POWERED VULNERABILITY REMEDIATION
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
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
            <span className="text-xs tracking-[0.2em] text-slate-400">
              SCROLL
            </span>
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              className="text-slate-400"
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
