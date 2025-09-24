import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";

const experiences = [
  {
    company: "Wellthy",
    title: "Senior DevSecOps Engineer II (Lead)",
    period: "2022 — Present",
    summary:
      "Lead cloud security and compliance engineering for a healthcare caregiver platform, pairing automation with proactive response.",
    achievements: [
      "Integrated full-stack security tooling (SAST, SCA, IaC, container, CSPM) into CI/CD with automated remediation pathways.",
      "Built an ML-enhanced vulnerability pipeline plus Dependency Track SBOM monitoring to centralize risk reporting in Sumo Logic.",
      "Sustained a 0-day MTTR on critical issues while passing consecutive SOC 2 Type II audits and maintaining HIPAA/NIST/GDPR readiness.",
    ],
  },
  {
    company: "CVS Health / Aetna",
    title: "Senior DevSecOps Engineer",
    period: "2020 — 2022",
    summary:
      "Owned DevSecOps enablement for consumer health products, supporting thousands of engineers shipping securely at scale.",
    achievements: [
      "Centralized Data Theorem, Checkmarx, Prisma Cloud, Nexus IQ, and Snyk inside an AWS-hosted management portal.",
      "Authored secure-by-default Docker images and automation microservices (Python, Node.js, Bash) that hardened CI/CD workflows.",
      "Coached 4,000+ engineers through threat reviews, pipeline tuning, and brown-bag sessions to accelerate compliant releases.",
    ],
  },
  {
    company: "Parsons",
    title: "Full Stack Software Engineer",
    period: "2019 — 2020",
    summary:
      "Delivered mission-ready microservices and analytics pipelines for defense clients with strict security requirements.",
    achievements: [
      "Developed scalable object recognition services using Darknet and YOLO to process imagery and video intelligence.",
      "Shipped production REST services in Java/Spring and modernized AngularJS front-ends with automated Postman test suites.",
      "Hardened NLP and ETL pipelines through SAST remediation and cloud data enrichment patterns.",
    ],
  },
  {
    company: "Formulated, LLC",
    title: "Founder / Software Engineer",
    period: "2017 — 2020",
    summary:
      "Ran a security-focused consultancy delivering conversion-driven web platforms for small businesses.",
    achievements: [
      "Lifted client lead conversion rates by 79%, unlocking more than $300K in revenue for a flagship customer.",
      "Delivered full-stack applications with maintainable CI/CD pipelines for timely, secure updates.",
      "Conducted penetration testing and security audits to harden infrastructure for each engagement.",
    ],
  },
];

export function Experience() {
  return (
    <div>
      <SectionHeading id="experience" eyebrow="EXPERIENCE">
        Security leadership across healthcare, enterprise, and defense teams.
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
