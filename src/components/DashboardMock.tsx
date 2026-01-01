export default function DashboardMock() {
  return (
    <div className="mx-auto -mt-14 w-full max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur sm:p-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="glow rounded-xl border border-white/10 bg-black/20 p-5">
          <div className="text-sm text-foreground/70">Revenue</div>
          <div className="mt-2 text-3xl font-semibold text-foreground">$12,450</div>
        </div>
        <div className="glow rounded-xl border border-white/10 bg-black/20 p-5">
          <div className="text-sm text-foreground/70">Savings</div>
          <div className="mt-2 text-3xl font-semibold text-foreground">$3,200</div>
        </div>
        <div className="glow rounded-xl border border-white/10 bg-black/20 p-5">
          <div className="text-sm text-foreground/70">Time Saved</div>
          <div className="mt-2 text-3xl font-semibold text-foreground">275h</div>
        </div>
      </div>
      
    </div>
  );
}