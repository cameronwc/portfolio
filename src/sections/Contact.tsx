import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";

export function Contact() {
  return (
    <div>
      <SectionHeading id="contact" eyebrow="CONNECT">
        Ready to align on your next milestone?
      </SectionHeading>
      <motion.div
        className="section-padding mx-auto mt-12 max-w-4xl text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-lg text-slate-300">
          I collaborate with teams who value clarity, inclusive design, and accountable AI. If you are exploring a new product
          chapter—or need a partner to accelerate the one already underway—let’s talk through the problem space together.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@averymitchell.com"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-glow transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            hello@averymitchell.com
          </a>
          <a
            href="https://cal.com/averymitchell/discovery"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white/40 hover:bg-white/10"
          >
            Schedule a 30-minute intro
          </a>
        </div>
      </motion.div>
    </div>
  );
}
