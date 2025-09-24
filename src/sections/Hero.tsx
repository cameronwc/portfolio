import { motion } from "framer-motion";

const heroHighlights = [
  {
    title: "0-day MTTR",
    description: "Critical vulnerabilities remediated the same day through automated escalation and playbooks.",
  },
  {
    title: "Full SDLC coverage",
    description: "SAST, SCA, IaC, container, and CSPM tooling wired into CI/CD with policy-backed gates.",
  },
  {
    title: "Audit-ready automation",
    description: "SOC 2 Type II, HIPAA, NIST, and GDPR controls instrumented with evidence collection built-in.",
  },
  {
    title: "Engineer enablement",
    description: "Bug bounty ops, secure defaults, and coaching programs that keep 4,000+ engineers shipping safely.",
  },
];

export function Hero() {
  return (
    <section
      id="home"
      className="section-padding mx-auto mt-32 flex max-w-6xl flex-col gap-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl space-y-8"
      >
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-brand-200">
          Cameron Cooper — DevSecOps & Cloud Security Engineer
        </span>
        <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
          I build automation that keeps modern cloud platforms compliant, observable, and resilient.
        </h1>
        <p className="text-lg text-slate-300">
          Cloud security and DevSecOps engineer with 7+ years of experience embedding guardrails into the entire SDLC. I lead
          cross-functional teams through threat modeling, tooling integration, and incident response so regulated SaaS products
          stay ahead of audits and adversaries alike.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-glow transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Explore security programs
          </a>
          <a
            href="mailto:cameron@coop.ninja"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white/60 hover:bg-white/10"
          >
            Start a security conversation
          </a>
        </div>
      </motion.div>
      <motion.ul
        className="grid gap-6 pt-4 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {heroHighlights.map((highlight) => (
          <motion.li
            key={highlight.title}
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="card-surface flex h-full items-start gap-4 rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg backdrop-blur"
          >
            <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-500/85 text-base font-semibold text-white">
              •
            </span>
            <div className="space-y-2 text-left">
              <h3 className="text-lg font-semibold text-white">{highlight.title}</h3>
              <p className="text-sm leading-relaxed text-slate-200">{highlight.description}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
