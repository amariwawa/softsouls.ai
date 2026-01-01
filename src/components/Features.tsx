const features = [
  { title: "AI Chatbots", body: "Web and messaging chatbots that answer FAQs, capture leads, and route conversations." },
  { title: "AI Call Agents", body: "Voice agents handle reception, reminders, and outbound follow‑ups with natural speech." },
  { title: "Customer Service Agents", body: "Voice AI resolves issues, escalates when needed, and keeps tickets synchronized." },
  { title: "Appointment Bookers", body: "Voice scheduling across calendars and CRMs with confirmations and reminders." },
  { title: "Operations Workflows", body: "Automations across finance, ops, and back office with audit trails." },
  { title: "Custom AI Agents", body: "Purpose‑built agents tuned to your processes and data." },
];

export default function Features() {
  return (
    <section id="solutions" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground">
        Solutions we offer
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="group glow rounded-2xl border border-white/10 bg-black/20 p-6 transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-[2px] hover:scale-[1.01] hover:shadow-lg"
          >
            <div className="text-base font-medium text-foreground">{f.title}</div>
            <p className="mt-2 text-sm text-foreground/70">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}