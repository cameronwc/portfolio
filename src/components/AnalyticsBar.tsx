const stats = [
  {
    label: "New revenue unlocked",
    value: "$18.4M",
    caption: "Through launch of AI-assisted onboarding and pricing experiments",
  },
  {
    label: "Workflow acceleration",
    value: "6.2x",
    caption: "Average reduction in delivery time after enablement playbooks",
  },
  {
    label: "Research participants",
    value: "320+",
    caption: "Synthesized across discovery sprints and longitudinal studies",
  },
];

export function AnalyticsBar() {
  return (
    <section className="section-padding mx-auto mt-10 max-w-6xl">
      <div className="card-surface grid gap-8 rounded-3xl border border-white/10 bg-slate-900/60 px-6 py-8 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-2 text-center sm:text-left">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-200/70">{stat.label}</p>
            <p className="text-3xl font-semibold text-white sm:text-4xl">{stat.value}</p>
            <p className="text-sm text-slate-300/80">{stat.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
