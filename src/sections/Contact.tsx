import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";

export function Contact() {
  return (
    <div>
      <SectionHeading id="contact" eyebrow="CONNECT">
        Need a partner to harden your cloud platform?
      </SectionHeading>
      <motion.div
        className="section-padding mx-auto mt-12 max-w-4xl text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-lg text-slate-300">
          I work with teams that treat security as a core product feature—whether you are scaling a healthcare startup, preparing for
          audit, or modernizing enterprise pipelines. Let’s map the risks, automation, and playbooks that keep your releases fast and safe.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:cameron@coop.ninja"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-glow transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            cameron@coop.ninja
          </a>
          <a
            href="https://www.linkedin.com/in/cameronwc"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white/40 hover:bg-white/10"
          >
            Connect on LinkedIn
          </a>
        </div>
      </motion.div>
    </div>
  );
}
