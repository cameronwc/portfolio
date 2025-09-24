import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";

const skillGroups = [
  {
    title: "Strategy & leadership",
    skills: [
      "Narrative roadmapping",
      "Quarterly planning",
      "Outcome-based OKRs",
      "Executive facilitation",
    ],
  },
  {
    title: "Product & research",
    skills: ["Discovery sprints", "Jobs-to-be-done", "Experiment design", "Mixed-methods analysis"],
  },
  {
    title: "Design & experience",
    skills: ["Systems thinking", "Information architecture", "Content design", "Accessibility"],
  },
  {
    title: "Engineering",
    skills: ["React & TypeScript", "Node.js & serverless", "Postgres & Prisma", "AWS (S3, Lambda, EventBridge)"],
  },
  {
    title: "AI & data",
    skills: ["Prompt orchestration", "Evaluation frameworks", "LangChain", "dbt & modern data stack"],
  },
  {
    title: "Enablement",
    skills: ["Design systems", "Developer tooling", "Playbook authoring", "Team onboarding"],
  },
];

export function Skills() {
  return (
    <div>
      <SectionHeading id="skills" eyebrow="SKILLS">
        A multidisciplinary toolkit for moving from concept to confident launch.
      </SectionHeading>
      <motion.div
        className="section-padding mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="card-surface rounded-3xl border border-white/10 bg-slate-900/70 p-6"
          >
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
