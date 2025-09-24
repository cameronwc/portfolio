import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";

const sessions = [
  {
    title: "Security enablement program",
    event: "Wellthy",
    description:
      "Built the company's first security training track, authored Terraform/Docker/GitHub Actions safe defaults, and launched a bug bounty program to keep engineers proactive.",
  },
  {
    title: "Compliance orchestration",
    event: "Wellthy",
    description:
      "Led multi-year SOC 2 Type II audits while aligning HIPAA, NIST, and GDPR controls with automated evidence collection and executive reporting.",
  },
  {
    title: "DevSecOps community coaching",
    event: "CVS Health / Aetna",
    description:
      "Hosted brown bags and 1:1 sessions for 4,000+ engineers, sharing secure coding practices, pipeline patterns, and threat review rituals.",
  },
];

export function Speaking() {
  return (
    <div>
      <SectionHeading id="speaking" eyebrow="PROGRAMS & LEADERSHIP">
        Scaling secure engineering culture through enablement and repeatable playbooks.
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
