import { motion } from "framer-motion";

const initiatives = [
  {
    title: "Security Training Program",
    org: "Wellthy",
    description:
      "Built and led Wellthy's first security training program for engineers. Evaluated SCORM-compatible platforms, procured and deployed selected vendor, integrated with HRIS for compliance tracking, increasing adoption of secure coding practices and improving issue detection during code review.",
  },
  {
    title: "Org-Wide Threat Modeling",
    org: "Wellthy",
    description:
      "Introduced and operationalized STRIDE threat modeling using OWASP Threat Dragon across 7+ engineering teams. Created data flow and authentication diagrams, documented threats and mitigations, and integrated findings directly into the SDLC.",
  },
  {
    title: "Compliance & Pentest Orchestration",
    org: "Wellthy",
    description:
      "Led and passed multiple SOC 2 Type II audits while aligning HIPAA, NIST, and GDPR controls with automated evidence collection. Directed all penetration testing programs (web, iOS, Android) for 2023-2025 end-to-end. Founded Bug Bounty program, triaging and resolving all external researcher findings.",
  },
  {
    title: "Security Vulnerability Management Team",
    org: "CVS Health / Aetna",
    description:
      "Created an operational analyst team to streamline the security vulnerability management program. Included documentation, hiring, and training. Facilitated technical interviews for DevSecOps engineers and Software Security Analysts.",
  },
  {
    title: "DevSecOps Community Coaching",
    org: "CVS Health / Aetna",
    description:
      "Hosted brown bags and 1:1 sessions for 4,000+ engineers, sharing secure coding practices, Docker, Python, CI/CD pipeline patterns, and threat review rituals across consumer health product teams.",
  },
  {
    title: "SIEM Integration & Log Aggregation",
    org: "CVS Health / Wellthy",
    description:
      "Built and integrated a SIEM (ELK stack) into CVS infrastructure. At Wellthy, negotiated and deployed SumoLogic organization-wide — aggregating audit logs from all products and cloud services with real-time alerting and cross-product correlation rules.",
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="py-24 sm:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm tracking-[0.2em] text-accent-400">
            PROGRAMS & LEADERSHIP
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Scaling secure engineering culture through
            <br className="hidden sm:block" /> enablement and repeatable
            playbooks.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((initiative, index) => (
            <motion.article
              key={initiative.title}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.12]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="font-mono text-xs tracking-wider text-accent-400/80">
                {initiative.org}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {initiative.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {initiative.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
