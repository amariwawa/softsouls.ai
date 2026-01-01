import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#091320] via-[#0b1220] to-[#0b1220]" />
      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-28 sm:pt-24 sm:pb-36">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Software Solutions powered by AI automation
          </h1>
          <p className="mt-5 text-lg leading-8 text-foreground/80">
            Softsouls builds tailored automations, chatbots, call agents and workflows that solve real business problems and scale operations.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-black shadow-sm transition hover:bg-accent/90"
            >
              Tell us your pain points
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-6 text-sm font-medium text-foreground transition hover:bg-white/5"
            >
              Get a demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}