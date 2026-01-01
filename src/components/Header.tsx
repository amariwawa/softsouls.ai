import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-10">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="glow h-3.5 w-3.5 rounded-full bg-accent" />
            <span className="text-xl font-semibold tracking-tight text-foreground">
              Softsouls.ai
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-foreground/80 sm:flex">
            <Link href="#solutions">Solutions</Link>
            <Link href="#usecases">Process</Link>
            <Link href="#contact">Contact</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden rounded-full border border-white/10 px-4 py-2 text-sm text-foreground/80 transition hover:bg-white/5 sm:inline-flex"
            >
              Get a demo
            </Link>
            <Link
              href="#contact"
              className="inline-flex rounded-full bg-accent px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-accent/90"
            >
              Start free trial
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}