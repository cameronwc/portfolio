import { motion } from "framer-motion";

const heroHighlights = [
  "Product strategy that begins with customer narrative and ends with measurable lift",
  "Experimentation rituals that align research, design, engineering, and go-to-market",
  "Responsible AI systems that keep humans in the loop and respect organizational guardrails",
];

export function Hero() {
  return (
    <header
      id="home"
      className="section-padding mx-auto mt-32 flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl space-y-8"
      >
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-brand-200">
          Avery Mitchell — Product & AI Engineer
        </span>
        <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
          I design and ship consequential products where AI, storytelling, and systems engineering intersect.
        </h1>
        <p className="text-lg text-slate-300">
          Over the last decade I have guided cross-functional teams through ambiguous platform bets—from greenfield research to
          scaled adoption. My work pairs prototyping and qualitative discovery with analytical rigor, ensuring that every launch
          ladders into a durable growth narrative.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-glow transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            View selected work
          </a>
          <a
            href="mailto:hello@averymitchell.com"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white/60 hover:bg-white/10"
          >
            Request a collaboration call
          </a>
        </div>
      </motion.div>
      <motion.ul
        className="grid gap-4 sm:grid-cols-2 lg:max-w-md"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {heroHighlights.map((highlight) => (
          <motion.li
            key={highlight}
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="card-surface flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-6"
          >
            <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-500/80 text-xs font-semibold text-white">
              •
            </span>
            <p className="text-sm text-slate-200">{highlight}</p>
          </motion.li>
        ))}
      </motion.ul>
    </header>
  );
}
