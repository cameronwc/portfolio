import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";

const projects = [
  {
    name: "Home Server Platform",
    description:
      "80TB Unraid virtualization and NAS environment supporting 80+ users with Bitwarden, Nextcloud, Home Assistant, and custom registries.",
    role: "Architect & operator",
    impact: "Maintains 30+ Docker services with 99.99% uptime, automated off-site backups, and Cloudflare-protected ingress.",
  },
  {
    name: "FOSS Photography",
    description:
      "Open source image aggregator created to streamline sourcing of high-quality, royalty-free assets for design projects.",
    role: "Creator & maintainer",
    impact: "Built with React, GitHub Actions, and Heroku to deliver curated imagery with automated security scanning via Snyk.",
  },
  {
    name: "Deauthentication Detector",
    description:
      "Raspberry Pi-based device that identifies Wi-Fi deauthentication attacks and surfaces telemetry on likely sources.",
    role: "Hardware security developer",
    impact: "Combines Python, Node.js, MongoDB, and Aircrack-ng to alert on malicious network activity in real time.",
  },
];

export function Projects() {
  return (
    <div>
      <SectionHeading id="projects" eyebrow="PROJECTS">
        Hands-on initiatives that keep platforms secure and resilient.
      </SectionHeading>
      <div className="section-padding mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            className="card-surface rounded-3xl border border-white/10 bg-slate-900/70 p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <h3 className="text-xl font-semibold text-white">{project.name}</h3>
            <p className="mt-3 text-sm text-slate-300">{project.description}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-brand-200/70">{project.role}</p>
            <p className="mt-2 text-sm font-medium text-brand-100">{project.impact}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
