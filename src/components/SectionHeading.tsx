import { clsx } from "clsx";
import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

interface SectionHeadingProps extends PropsWithChildren {
  eyebrow: string;
  id: string;
  className?: string;
}

export function SectionHeading({ eyebrow, children, id, className }: SectionHeadingProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={clsx("section-padding mx-auto max-w-6xl", className)}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-300/80">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl md:text-5xl">{children}</h2>
    </motion.section>
  );
}
