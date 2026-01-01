import Link from "next/link";
import BrandIcon from "@/components/BrandIcon";

export default function Showcase() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white p-6 text-black lg:col-span-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="text-sm font-medium text-zinc-600">Industries</div>
          <h3 className="mt-2 text-2xl font-semibold">We work with</h3>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              "Dentists & Hospitals",
              "Hotels",
              "Restaurants",
              "Salons & Spas",
              "Gyms",
              "And more",
            ].map((item) => (
              <div key={item} className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-[2px] hover:shadow-md">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#e8f5ff] via-white to-[#f2fbff] p-6 text-black transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="text-sm font-medium text-zinc-600">Integrations</div>
          <h3 className="mt-2 text-2xl font-semibold">Connect your stack</h3>
          <p className="mt-2 text-sm text-zinc-600">CRMs, calendars, helpdesks, telephony, and data stores.</p>
          <div className="mt-5 flex flex-wrap items-center gap-6">
            <div className="group inline-flex items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-[2px] hover:shadow-md">
              <BrandIcon name="notion" className="h-5 w-5" />
              <span className="text-zinc-700">Notion</span>
            </div>
            <div className="group inline-flex items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-[2px] hover:shadow-md">
              <BrandIcon name="whatsapp" className="h-5 w-5" />
              <span className="text-zinc-700">WhatsApp</span>
            </div>
            <div className="group inline-flex items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-[2px] hover:shadow-md">
              <BrandIcon name="sheets" className="h-5 w-5" />
              <span className="text-zinc-700">Google Sheets</span>
            </div>
            <div className="group inline-flex items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-[2px] hover:shadow-md">
              <BrandIcon name="forms" className="h-5 w-5" />
              <span className="text-zinc-700">Google Forms</span>
            </div>
            <div className="group inline-flex items-center gap-2 rounded-2xl border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-[2px] hover:shadow-md">
              <BrandIcon name="docs" className="h-5 w-5" />
              <span className="text-zinc-700">Google Docs</span>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white p-6 text-black lg:col-span-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="text-sm font-medium text-zinc-600">Why Softsouls</div>
          <h3 className="mt-2 text-2xl font-semibold">Built for practical business outcomes</h3>
          <p className="mt-2 text-sm text-zinc-600">Automations and agents tailored to your workflows, with reliability and guardrails.</p>
          <Link href="#contact" className="mt-4 inline-flex rounded-full bg-black px-4 py-2 text-sm font-medium text-white">Talk to us</Link>
        </div>
      </div>
    </section>
  );
}