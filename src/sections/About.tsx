import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Automate the Guardrails",
    description:
      "Security controls belong in the pipeline. I wire SAST, SCA, IaC, container, and CSPM coverage directly into delivery so engineers ship safely by default.",
  },
  {
    number: "02",
    title: "Measure Trust Continuously",
    description:
      "From SIEM dashboards to SBOM registries, I centralize signal so compliance evidence, alerting, and trending risk data are always at hand.",
  },
  {
    number: "03",
    title: "Enable Every Engineer",
    description:
      "Training, playbooks, and reusable templates turn security from a gate into a partnership. I build programs that scale good decisions across teams.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm tracking-[0.2em] text-accent-400">
            ABOUT
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            DevSecOps leadership that turns compliance
            <br className="hidden sm:block" /> into an engineering advantage.
          </h2>
        </motion.div>

        <motion.div
          className="mt-8 max-w-3xl space-y-4 leading-relaxed text-slate-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p>
            I'm a security engineer who believes the best guardrails are the
            ones developers never have to think about. Over the past 7+ years
            I've built and led security programs from the ground up — standing up
            vulnerability management platforms, passing SOC 2 audits, running
            incident response, and wiring automated scanning into every stage of
            the pipeline.
          </p>
          <p>
            Most of that work happened at Wellthy, where I've been the sole
            security lead across 7+ engineering teams for a healthcare platform
            handling sensitive caregiver data. Before that I scaled DevSecOps
            tooling for 4,000+ engineers at CVS Health, built defense-grade
            microservices at Parsons, and ran my own consultancy doing pentests
            and full-stack builds. I care about making security feel like a
            tailwind, not a tollbooth.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="font-mono text-2xl font-bold text-accent-400/50">
                {pillar.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
