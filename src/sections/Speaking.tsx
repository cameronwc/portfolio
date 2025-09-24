import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";

const sessions = [
  {
    title: "Designing AI copilots you can trust",
    event: "Product-Led Summit 2024",
    description:
      "Shared the evaluation toolkit and change management rituals used to launch Atlas Copilot, including prompt governance and red teaming tactics.",
  },
  {
    title: "Story-first roadmaps",
    event: "Founder Collective Workshop",
    description:
      "Guided founders through crafting narrative artifacts that align investors, operators, and customers when making bold bets.",
  },
  {
    title: "Operationalizing research insights",
    event: "ResearchOps Community",
    description:
      "Walked through the discovery-to-delivery pipeline we built to synthesize qualitative signal and pipe it into planning cadences.",
  },
];

export function Speaking() {
  return (
    <div>
      <SectionHeading id="speaking" eyebrow="SPEAKING & WRITING">
        Making the work transparent through talks, guides, and workshops.
      </SectionHeading>
      <div className="section-padding mx-auto mt-12 max-w-6xl space-y-6">
        {sessions.map((session, index) => (
          <motion.article
            key={session.title}
            className="card-surface rounded-3xl border border-white/10 bg-slate-900/70 p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-semibold text-white">{session.title}</h3>
              <span className="text-sm uppercase tracking-[0.2em] text-brand-200/80">{session.event}</span>
            </div>
            <p className="mt-3 text-sm text-slate-300">{session.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
