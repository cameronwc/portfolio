import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";

const principles = [
  {
    title: "Start with signal",
    description:
      "I immerse in customer stories, data trails, and operational constraints to ensure each roadmap bet is grounded in real friction and opportunity sizing.",
  },
  {
    title: "Prototype out loud",
    description:
      "I pair lightweight experiments with narrative artifacts so leaders, designers, and engineers can react to the same source of truth early and often.",
  },
  {
    title: "Design for stewardship",
    description:
      "From governance models to observability dashboards, I build the systems that keep AI-assisted experiences safe, inclusive, and measurable.",
  },
];

export function About() {
  return (
    <div>
      <SectionHeading id="about" eyebrow="ABOUT">
        An operator who blends facilitation, code, and storytelling to unblock velocity.
      </SectionHeading>
      <motion.div
        className="section-padding mx-auto mt-10 max-w-4xl space-y-6 text-slate-300"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p>
          I partner with founders and product leaders to de-risk complex launches—facilitating alignment, writing the playbooks,
          and coding the connective tissue when teams need extra hands. My experience spans venture-backed SaaS, enterprise
          transformation, and public sector programs modernizing service delivery.
        </p>
        <p>
          Alongside delivery, I coach teams on the rituals that keep momentum: framing outcomes, instrumenting feedback loops,
          and translating qualitative insight into roadmap conviction. The result is a culture where everyone can see their
          impact in the metrics and the customer stories we celebrate.
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
