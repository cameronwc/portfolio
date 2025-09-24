import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";

const experiences = [
  {
    company: "Northwind Labs",
    title: "Head of Product Engineering",
    period: "2022 — Present",
    summary:
      "Scaled the platform and product teams from seed to Series C while launching AI-powered research and onboarding workflows.",
    achievements: [
      "Directed a multi-disciplinary squad that shipped an LLM-backed insights assistant adopted by 78% of customer success teams within the first quarter.",
      "Established an experimentation program with weekly synth reviews, resulting in a 24% increase in activation for mid-market customers.",
      "Implemented guardrails for prompt libraries, red teaming, and observability that met enterprise compliance requirements.",
    ],
  },
  {
    company: "Cedar & Haze",
    title: "Principal Product Strategist",
    period: "2018 — 2022",
    summary:
      "Consulted with public and private sector organizations on digital transformation, AI adoption, and service design.",
    achievements: [
      "Designed a modular design system and delivery toolkit used across six agencies, improving release cadence by 3x.",
      "Facilitated discovery for a global non-profit to redefine their grants platform, combining research synthesis with roadmap storytelling.",
      "Embedded with engineering to migrate mission-critical workloads to serverless infrastructure with zero downtime.",
    ],
  },
  {
    company: "Fluxline",
    title: "Senior Frontend Engineer",
    period: "2015 — 2018",
    summary:
      "Joined as the first frontend hire to rebuild the analytics product while establishing accessibility and delivery standards.",
    achievements: [
      "Shipped a component library that accelerated new feature delivery by 40% and reduced UI defects by half.",
      "Led user testing cycles with enterprise customers, translating insights into roadmap commitments and executive updates.",
      "Mentored engineers and designers on data visualization best practices and collaborative rituals.",
    ],
  },
];

export function Experience() {
  return (
    <div>
      <SectionHeading id="experience" eyebrow="EXPERIENCE">
        Guiding teams through high-stakes product chapters.
      </SectionHeading>
      <div className="section-padding mx-auto mt-12 max-w-6xl space-y-10">
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.company}
            className="card-surface rounded-3xl border border-white/10 bg-slate-900/70 p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-xl font-semibold text-white">{experience.company}</h3>
              <span className="text-sm uppercase tracking-[0.25em] text-brand-200/80">{experience.period}</span>
            </div>
            <p className="mt-2 text-sm font-semibold text-slate-200">{experience.title}</p>
            <p className="mt-4 text-sm text-slate-300">{experience.summary}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              {experience.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-brand-300" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
