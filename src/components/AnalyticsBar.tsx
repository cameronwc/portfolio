const stats = [
  {
    label: "Critical vulnerability MTTR",
    value: "0 days",
    caption: "Sustained across Wellthy's caregiver platform with automated escalation paths",
  },
  {
    label: "Compliance programs led",
    value: "3x SOC 2",
    caption: "Delivered consecutive Type II audits alongside HIPAA, NIST, and GDPR readiness",
  },
  {
    label: "Engineers enabled",
    value: "4000+",
    caption: "Supported with secure-by-default tooling, reviews, and coaching at CVS Health/Aetna",
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
