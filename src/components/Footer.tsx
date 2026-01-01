export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-10">
      <div className="flex items-center justify-between border-t border-white/10 pt-6 text-sm text-foreground/70">
        <div>© {new Date().getFullYear()} Softsouls.ai • ssoftsouls@gmail.com • +2348028740359</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
        </div>
      </div>
    </footer>
  );
}