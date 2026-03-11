import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  {
    value: "0-day",
    label: "MTTR",
    description: "Critical vulnerability remediation",
  },
  {
    value: "7+",
    label: "Teams",
    description: "Full security coverage at Wellthy",
  },
  {
    value: "17+",
    label: "Programs",
    description: "Security initiatives built from scratch",
  },
  {
    value: "4,000+",
    label: "Engineers",
    description: "Enabled & coached securely",
  },
];

function MetricCard({
  metric,
  index,
}: {
  metric: (typeof metrics)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <span className="text-3xl font-bold text-white sm:text-4xl">
        {metric.value}
      </span>
      <span className="mt-1 font-mono text-sm font-medium tracking-wider text-accent-400">
        {metric.label}
      </span>
      <span className="mt-2 text-xs text-slate-500">{metric.description}</span>
    </motion.div>
  );
}

export function Metrics() {
  return (
    <section className="relative border-y border-white/[0.06] bg-white/[0.01] py-16">
      <div className="section-container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
