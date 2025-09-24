import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";

const projects = [
  {
    name: "Atlas Copilot",
    description:
      "A GPT-4 powered research assistant that synthesizes qualitative feedback, usage analytics, and support transcripts into action-ready briefs.",
    role: "Product strategy, UX architecture, full-stack engineering",
    impact: "Cut research synthesis time from 5 days to 6 hours and increased NPS by 14 points.",
  },
  {
    name: "Lighthouse Activation",
    description:
      "Multi-step onboarding and pricing experiments that personalized the first 30 days for enterprise accounts.",
    role: "Experiment design, analytics instrumentation, enablement",
    impact: "Improved enterprise activation by 24% and influenced a $6.5M ARR upsell motion.",
  },
  {
    name: "Signal Fabric",
    description:
      "A data contract platform with automated validation and governance workflows across 40+ microservices.",
    role: "Product leadership, technical architecture, stakeholder facilitation",
    impact: "Decreased incident volume by 38% and unlocked near-real-time analytics for GTM teams.",
  },
];

export function Projects() {
  return (
    <div>
      <SectionHeading id="projects" eyebrow="PROJECTS">
        Selected work anchoring outcomes, not just features.
      </SectionHeading>
      <div className="section-padding mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            className="card-surface rounded-3xl border border-white/10 bg-slate-900/70 p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <h3 className="text-xl font-semibold text-white">{project.name}</h3>
            <p className="mt-3 text-sm text-slate-300">{project.description}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-brand-200/70">{project.role}</p>
            <p className="mt-2 text-sm font-medium text-brand-100">{project.impact}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
