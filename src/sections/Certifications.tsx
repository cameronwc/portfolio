import { motion } from "framer-motion";

const certifications = [
  {
    name: "AI Security",
    issuer: "Securiti AI",
    year: "2025",
    active: true,
  },
  {
    name: "AWS Security Specialty",
    issuer: "Amazon Web Services",
    year: "2022",
    active: false,
  },
  {
    name: "Terraform Associate",
    issuer: "HashiCorp",
    year: "2022",
    active: false,
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2021",
    active: false,
  },
  {
    name: "FAA Part 107 Remote Pilot",
    issuer: "Federal Aviation Administration",
    year: "",
    active: true,
  },
  {
    name: "GMRS Radio License",
    issuer: "Federal Communications Commission",
    year: "",
    active: true,
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm tracking-[0.2em] text-accent-400">
            CERTIFICATIONS & LICENSES
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Validated expertise across security,
            <br className="hidden sm:block" /> cloud, and field operations.
          </h2>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-white/[0.12]"
            >
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-white">
                  {cert.name}
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  {cert.issuer}
                  {cert.year && ` — ${cert.year}`}
                </p>
              </div>
              {cert.active && (
                <span className="mt-0.5 flex-none rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                  Active
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
