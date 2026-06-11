import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageTransition } from "../components/PageTransition";
import { ArchitectureDiagram } from "../components/ArchitectureDiagram";
import { usePageMeta } from "../hooks/usePageMeta";

const META_CHIPS = [
  { label: "Role", value: "Architect & Lead" },
  { label: "Company", value: "Wellthy" },
  { label: "Stack", value: "Claude API · CircleCI · Python" },
];

const STEPS = [
  {
    title: "Scheduled detection",
    body: "A CircleCI cron pipeline runs on a schedule and scans the vulnerability ticket queue for open remediation work, so no human has to remember to kick anything off.",
  },
  {
    title: "Codebase analysis",
    body: "For each ticket, the system pulls the affected repository and assembles context: the vulnerable dependency or code path, surrounding code, and the project's conventions.",
  },
  {
    title: "Fix generation",
    body: "Claude analyzes the vulnerability alongside that context and generates a candidate fix scoped to the actual finding.",
  },
  {
    title: "Pull request",
    body: "The pipeline opens a pull request with the generated patch, linked back to the originating ticket for SLA tracking.",
  },
  {
    title: "Human review",
    body: "An engineer reviews, validates, and merges. The system accelerates remediation; accountability stays with people.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 },
} as const;

export function CaseStudyAIRemediation() {
  usePageMeta(
    "AI-Powered Vulnerability Remediation — Cameron Cooper",
    "Case study: an automated vulnerability remediation system using the Claude API and CircleCI, built at Wellthy."
  );

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent-500/[0.07] blur-[120px]" />
          <div className="scanlines absolute inset-0" />
        </div>
        <div className="section-container relative z-10">
          <motion.p
            className="font-mono text-sm tracking-[0.3em] text-accent-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            CASE STUDY
          </motion.p>
          <motion.h1
            className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            AI-Powered Vulnerability Remediation
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            An automated pipeline that detects open vulnerability tickets,
            analyzes the affected codebase, and generates fix pull requests —
            keeping remediation ahead of strict SLAs without pulling engineers
            off product work.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          >
            {META_CHIPS.map((chip) => (
              <span
                key={chip.label}
                className="rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
              >
                <span className="font-mono text-accent-400">{chip.label}</span>
                {" — "}
                {chip.value}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="section-container">
          <motion.div {...fadeUp}>
            <h2 className="font-mono text-sm tracking-[0.2em] text-accent-400">
              THE PROBLEM
            </h2>
            <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-slate-400">
              <p>
                Wellthy's security program holds critical and high-severity
                vulnerabilities to a 0-day mean time to remediation — findings
                are patched the day they surface. On a healthcare platform
                handling sensitive caregiver data, that bar is non-negotiable.
              </p>
              <p>
                But as the automated vulnerability pipeline matured, detection
                outpaced human capacity. Every finding pushed to the
                centralized ticketing system needed an engineer to read it,
                find the affected code, write a patch, and shepherd it through
                review — across 7+ engineering teams with their own roadmaps.
                The bottleneck wasn't finding vulnerabilities. It was fixing
                them.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="section-container">
          <motion.div {...fadeUp}>
            <p className="font-mono text-sm tracking-[0.2em] text-accent-400">
              THE SYSTEM
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Detection to pull request, end to end.
            </h2>
          </motion.div>
          <div className="mt-12">
            <ArchitectureDiagram />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="section-container">
          <motion.div {...fadeUp}>
            <h2 className="font-mono text-sm tracking-[0.2em] text-accent-400">
              HOW IT WORKS
            </h2>
          </motion.div>
          <ol className="mt-10 max-w-3xl space-y-8">
            {STEPS.map((step, index) => (
              <motion.li
                key={step.title}
                className="flex gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <span aria-hidden="true" className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded border border-accent-500/30 bg-accent-500/[0.06] font-mono text-sm text-accent-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {step.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="section-container">
          <motion.div {...fadeUp}>
            <h2 className="font-mono text-sm tracking-[0.2em] text-accent-400">
              OUTCOMES
            </h2>
            <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-slate-400">
              <p>
                The system runs as part of the security program that maintained
                a 0-day mean time to remediation for all critical and
                high-severity vulnerabilities, with full security coverage
                across 7+ engineering teams — without growing the security
                team.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-10">
              <div>
                <span className="text-3xl font-bold text-white sm:text-4xl">
                  0-day
                </span>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-accent-400">
                  MTTR maintained
                </p>
              </div>
              <div>
                <span className="text-3xl font-bold text-white sm:text-4xl">
                  7+
                </span>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-accent-400">
                  Teams covered
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="section-container flex flex-wrap items-center gap-4">
          <Link
            to="/"
            className="rounded-lg border border-white/[0.12] px-8 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-accent-500/40 hover:text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]"
          >
            Back to home
          </Link>
          <Link
            to="/#contact"
            className="rounded-lg bg-accent-500 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-400 hover:shadow-[0_0_28px_rgba(6,182,212,0.45)]"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
