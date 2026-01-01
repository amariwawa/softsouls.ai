const steps = [
  {
    title: "Discover",
    body: "Find pain points and find efficient solutions.",
  },
  { title: "Design", body: "Build workflows and agents with guardrails." },
  { title: "Deploy", body: "Launch, monitor, and iterate to scale." },
];

export default function Steps() {
  return (
    <section id="usecases" className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">How we work</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="group glow rounded-2xl border border-white/10 bg-black/20 p-6 transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-[2px] hover:scale-[1.01] hover:shadow-lg">
              <div className="text-base font-medium text-foreground">{s.title}</div>
              <p className="mt-2 text-sm text-foreground/70">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}