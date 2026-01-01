import Link from "next/link";

export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0e1b2c] to-[#0b1220] p-10 text-center text-foreground transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
        <h3 className="text-2xl font-semibold">Connect smarter. Automate faster.</h3>
        <p className="mt-2 text-foreground/80">
          Softsouls (Software Solutions) delivers AI agents, chatbots, call agents and workflows customized to your business.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-black shadow-sm transition hover:bg-accent/90"
          >
            Get started
          </Link>
          <Link
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 px-6 text-sm font-medium text-foreground transition hover:bg-white/5"
          >
            Talk to an expert
          </Link>
        </div>
        <div className="mt-6 text-sm text-foreground/70">Email: ssoftsouls@gmail.com • Tel: +2348028740359</div>
      </div>
    </section>
  );
}