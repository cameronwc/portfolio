import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VISIBLE_COUNT = 12;

const wellthy = {
  company: "Wellthy",
  title: "Senior DevSecOps Engineer II (Lead)",
  location: "Huntington Beach, CA",
  period: "January 2022 — Present",
  summary:
    "Lead cloud security and compliance engineering for a healthcare caregiver platform. Consistently exceeded expectations building security programs from scratch, pairing automation with proactive response across 7+ engineering teams.",
  achievements: [
    "Led procurement, testing, contract negotiations and integration of DevSecOps Security and Cloud Security tooling into the full SDLC — SAST, SCA, IAC, Container, CSPM, Secret scanning, Compliance management, and Vulnerability Management",
    "Orchestrated an automated vulnerability pipeline enhanced with ML models, pushing results to a centralized database with internal ticketing for remediation and SLA tracking",
    "Led and passed multiple SOC 2 Type II audits, establishing and operationalizing controls, processes, and evidence collection to exceed compliance standards",
    "Directed all penetration testing efforts for 2023, 2024, and 2025 — vendor selection, scope definition, execution oversight, and remediation follow-up",
    "Architected AI-powered vulnerability remediation system using Claude API: auto-detects tickets, analyzes codebase, generates fix PRs via CircleCI cron pipeline",
    "Designed LLM security firewall with prompt injection detection, PII/PHI redaction, response sanitization, and sub-200ms latency for AI-powered healthcare features",
    "Maintained a 0-day Mean Time to Remediation (MTTR) for all critical and high-severity vulnerabilities through rigorous patching and escalation workflows",
    "Founded Wellthy's Bug Bounty program; triaged, replicated, confirmed, and resolved all submitted findings from external security researchers",
    "Managed all security incidents end-to-end: triage, containment, root cause analysis, and long-term resolution across cloud and application environments",
    "Migrated SAST/SCA/secret scanning to GitHub Advanced Security (CodeQL, Dependabot, Secret Scanning); restructured GitHub admin roles with least-privilege",
    "Led end-to-end CSPM tool migration: evaluated 5 platforms with live AWS PoC environments, wrote ADR, migrated all cloud integrations and alerting",
    "Built and led Wellthy's first security training program for engineers, increasing adoption of secure coding practices and improving issue detection during code review",
    "Coordinated with GRC team on HIPAA, NIST, and GDPR compliance; implemented automated checks and remediation throughout development",
    "Conducted prevention and incident response against DDOS, brute forcing, scraping, credential stuffing, and other attack vectors",
    "Created incident response playbooks, monitoring, and alerting mechanisms for automated containment and response",
    "Audited, monitored, and improved WAF rules in accordance with best practices",
    "Aggregated audit logs from all products and cloud services into SumoLogic; implemented real-time alerting and cross-product correlation rules",
    "Negotiated, implemented, and administered SumoLogic organization-wide including contract negotiation, onboarding, and engineering enablement",
    "Created and enforced secure development patterns for Terraform, Docker, and GitHub Actions; distributed 'Safe Defaults' templates across engineering teams",
    "Introduced and operationalized STRIDE threat modeling across the SDLC using OWASP Threat Dragon to proactively identify and mitigate architectural risks",
    "Served as primary point of contact for all client security questionnaires and vendor audits, strengthening trust posture and accelerating B2B deals",
    "Negotiated multi-year contracts with major security vendors ensuring tool continuity, cost savings, and alignment with scaling needs",
    "Launched and operationalized Dependency Track to centralize SBOM analysis and monitor licenses across the full stack",
    "Developed internal threat intelligence processes and collaborated cross-functionally to establish a more proactive security posture",
    "Built CSAM scanning system combining Cloudflare edge-layer detection with AWS Rekognition Kubernetes CronJob for image moderation compliance",
  ],
};

const timeline = [
  {
    company: "CVS Health / Aetna Health",
    title: "DevSecOps Engineer → Senior DevSecOps Engineer",
    location: "Denver, CO",
    period: "May 2020 — January 2022",
    highlights: [
      "Promoted to Senior within 4 months; became lead security engineer for Aetna Health DevSecOps",
      "Created integrations, maintained, and administrated: Datatheorem, OWASP Zap, Checkmarx CxSAST, Prisma Cloud Compute (Twistlock), NexusIQ, and Snyk",
      "Built a unified portal for all security tools — easily configured and managed under a single React application hosted in AWS infrastructure",
      "Created security automation microservices in Python, NodeJS, Bash, and AWS utilizing EC2, ECS, ECR, Route53, API Gateway, IAM, S3, VPC, and Lambdas",
      "Supported over 4,000 engineers on Docker, Python, Security, CI/CD, Secure Architecture, Security Reviews, and Audits",
      "Built and integrated a SIEM (ELK stack) into CVS infrastructure",
      "Created an operational analyst team to streamline the security vulnerability management program including documentation, hiring, and training",
      "Collaborated with GRC to define, implement, and remain in compliance with security controls including HIPAA and PCI-DSS",
      "Led procurement, testing, and integration of new security suites",
      "Facilitated technical interviews for DevSecOps engineers and Software Security Analysts",
      "Built, debugged, maintained, and improved CI pipelines/CircleCI orbs in Jenkins and CircleCI",
      "Created and maintained secure by default docker images for use downstream in applications",
    ],
  },
  {
    company: "Parsons",
    title: "Full Stack Software Engineer",
    location: "Colorado Springs, CO",
    period: "March 2019 — January 2020",
    highlights: [
      "Worked with a clearance on microservices and ETL pipelines for multiple sectors of the military",
      "Created scalable object recognition microservices for images and videos with Darknet and YOLO",
      "Wrote/tested RESTful services with Java and Spring",
      "Scanned and remediated vulnerabilities in applications with Fortify Static Code Analysis (SAST)",
      "Developed an automated test suite with Postman/Newman",
      "Designed Cloud Data Enrichment pipelines",
      "Transformed NLP, Data Enrichment, and Import/Export pipelines to production code",
    ],
  },
  {
    company: "Formulated, LLC",
    title: "Founder / Software Engineer",
    location: "Denver, CO",
    period: "January 2017 — May 2020",
    highlights: [
      "Improved client lead generation conversion rate by 79% that improved revenue by $300k",
      "Created Full Stack Web Applications for small businesses that converted leads into customers",
      "Contracted by companies to conduct security reviews, penetration testing, and audits",
      "Created maintainable and scalable CI/CD pipelines for timely and secure updates",
    ],
  },
];

export function Experience() {
  const [expanded, setExpanded] = useState(false);
  const visibleAchievements = expanded
    ? wellthy.achievements
    : wellthy.achievements.slice(0, VISIBLE_COUNT);
  const hiddenCount = wellthy.achievements.length - VISIBLE_COUNT;

  return (
    <section
      id="experience"
      className="border-t border-white/[0.06] py-24 sm:py-32"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm tracking-[0.2em] text-accent-400">
            EXPERIENCE
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            7+ years securing SaaS platforms across
            <br className="hidden sm:block" /> healthcare, enterprise, and
            defense.
          </h2>
        </motion.div>

        {/* Featured: Wellthy */}
        <motion.article
          className="mt-12 rounded-xl border border-accent-500/20 bg-accent-500/[0.03] p-8 sm:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-white">
                  {wellthy.company}
                </h3>
                <span className="rounded-full bg-accent-500/10 px-3 py-0.5 font-mono text-xs text-accent-400">
                  Current
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-slate-300">
                {wellthy.title}
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                {wellthy.location}
              </p>
            </div>
            <span className="font-mono text-sm text-slate-500">
              {wellthy.period}
            </span>
          </div>
          <p className="mt-4 text-slate-400">{wellthy.summary}</p>
          <ul className="mt-6 space-y-3">
            {visibleAchievements.map((achievement) => (
              <li
                key={achievement}
                className="flex gap-3 text-sm text-slate-300"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent-400" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
          <AnimatePresence>
            {!expanded && hiddenCount > 0 && (
              <motion.div
                className="relative mt-2"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="pointer-events-none absolute -top-16 left-0 right-0 h-16 bg-gradient-to-t from-accent-500/[0.03] to-transparent" />
              </motion.div>
            )}
          </AnimatePresence>
          {hiddenCount > 0 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 inline-flex items-center gap-2 font-mono text-xs tracking-wider text-accent-400 transition-colors hover:text-accent-300"
            >
              {expanded ? "Show less" : `Show ${hiddenCount} more`}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
              >
                <path
                  d="M3 4.5l3 3 3-3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </motion.article>

        {/* Timeline: Previous roles */}
        <div className="mt-8 space-y-4">
          {timeline.map((role, index) => (
            <motion.article
              key={role.company}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.1] sm:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {role.company}
                  </h3>
                  <p className="mt-0.5 text-sm text-slate-400">{role.title}</p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {role.location}
                  </p>
                </div>
                <span className="font-mono text-sm text-slate-500">
                  {role.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {role.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm text-slate-400"
                  >
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-slate-600" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
