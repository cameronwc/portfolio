import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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

// Split "4,000+" into a countable number (4000) and its suffix ("+")
function parseValue(value: string): { target: number; suffix: string } {
  const match = value.match(/^([\d,]+)(.*)$/);
  if (!match) return { target: 0, suffix: value };
  return {
    target: parseInt(match[1].replace(/,/g, ""), 10),
    suffix: match[2],
  };
}

function CountUpValue({ value, start }: { value: string; start: boolean }) {
  const { target, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!start) return;
    // The standalone animate() runs outside MotionConfig's reach
    if (reduceMotion) {
      setDisplay(target);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [start, target, reduceMotion]);

  return (
    <span className="text-3xl font-bold tabular-nums text-white sm:text-4xl">
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

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
      <CountUpValue value={metric.value} start={isInView} />
      <span className="mt-2 rounded border border-accent-500/20 bg-accent-500/[0.06] px-2 py-0.5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-400">
        {metric.label}
      </span>
      <span className="mt-2 text-xs text-slate-400">{metric.description}</span>
      {index < metrics.length - 1 && (
        <span
          className="absolute -right-6 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-accent-500/40 to-transparent shadow-glow-sm md:block"
          aria-hidden="true"
        />
      )}
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
