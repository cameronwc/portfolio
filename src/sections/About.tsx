import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";

const principles = [
  {
    title: "Automate the guardrails",
    description:
      "Security controls belong in the pipeline. I wire SAST, SCA, IaC, container, and CSPM coverage directly into delivery so engineers ship safely by default.",
  },
  {
    title: "Measure trust continuously",
    description:
      "From SIEM dashboards to SBOM registries, I centralize signal so compliance evidence, alerting, and trending risk data are always at hand.",
  },
  {
    title: "Enable every engineer",
    description:
      "Training, playbooks, and reusable templates turn security from a gate into a partnership. I build programs that scale good decisions across teams.",
  },
];

export function About() {
  return (
    <div>
      <SectionHeading id="about" eyebrow="ABOUT">
        DevSecOps leadership that turns compliance into an engineering advantage.
      </SectionHeading>
      <motion.div
        className="section-padding mx-auto mt-10 max-w-4xl space-y-6 text-slate-300"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p>
          I help regulated SaaS teams weave security into day-to-day delivery—from procurement and integration of tooling to
          the automation that keeps evidence flowing. My background spans scaling healthcare startups, enabling Fortune 50
          engineering orgs, and hardening defense-grade microservices.
        </p>
        <p>
          Whether I am formalizing SOC 2 controls, leading incident response, or coaching on secure patterns, the goal is the
          same: pair pragmatic engineering with measurable trust. Teams can move fast because the guardrails, visibility, and
          playbooks are already working in the background.
        </p>
      </motion.div>
      <motion.div
        className="section-padding mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {principles.map((principle) => (
          <motion.div
            key={principle.title}
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="card-surface h-full rounded-3xl border border-white/10 bg-slate-900/70 p-6"
          >
            <h3 className="text-lg font-semibold text-white">{principle.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{principle.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
