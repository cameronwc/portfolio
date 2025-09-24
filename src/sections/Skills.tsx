import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";

const skillGroups = [
  {
    title: "Security automation",
    skills: [
      "Snyk & Nexus IQ",
      "Checkmarx CxSAST",
      "Prisma Cloud (Twistlock)",
      "OWASP Zap & Probely",
      "Data Theorem",
      "Dependency Track",
    ],
  },
  {
    title: "Cloud & infrastructure",
    skills: [
      "AWS (EC2, ECS, ECR, Lambda, RDS, Route 53)",
      "Terraform",
      "Docker & Docker Compose",
      "GitHub Actions",
      "CircleCI & Jenkins",
    ],
  },
  {
    title: "Compliance & governance",
    skills: [
      "SOC 2 Type II",
      "HIPAA",
      "NIST",
      "GDPR",
      "PCI DSS",
      "Bug bounty operations",
    ],
  },
  {
    title: "Observability & artifact mgmt",
    skills: [
      "Sumo Logic",
      "Nexus Repo",
      "Artifactory",
      "Elastic Container Registry",
    ],
  },
  {
    title: "Engineering toolkit",
    skills: [
      "Python (Flask, Django, automation)",
      "React & TypeScript",
      "Node.js",
      "Postgres & MariaDB",
      "MongoDB",
    ],
  },
];

export function Skills() {
  return (
    <div>
      <SectionHeading id="skills" eyebrow="SKILLS">
        Tooling and practices I rely on to automate security at scale.
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
