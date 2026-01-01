"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      const json = await res.json();
      setStatus(json.message || "Thanks. We will reach out shortly.");
      form.reset();
    } catch {
      setStatus("Something went wrong. Please email ssoftsouls@gmail.com.");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white p-8 text-black lg:col-span-2">
          <h3 className="text-2xl font-semibold">Tell us your pain points</h3>
          <p className="mt-2 text-sm text-zinc-600">Describe your workflows and where automation can help.</p>
          <form onSubmit={submit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input name="name" placeholder="Your name" className="rounded-lg border border-zinc-300 p-3 sm:col-span-1" required />
            <input name="email" type="email" placeholder="Email" className="rounded-lg border border-zinc-300 p-3 sm:col-span-1" required />
            <input name="phone" placeholder="Phone" className="rounded-lg border border-zinc-300 p-3 sm:col-span-1" />
            <input name="company" placeholder="Company" className="rounded-lg border border-zinc-300 p-3 sm:col-span-1" />
            <textarea name="message" placeholder="Describe your business problem..." className="rounded-lg border border-zinc-300 p-3 sm:col-span-2 h-32" required />
            <button type="submit" className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-sm font-medium text-white sm:col-span-2">Send</button>
          </form>
          {status && <div className="mt-4 text-sm">{status}</div>}
        </div>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#e8f5ff] via-white to-[#f2fbff] p-8 text-black">
          <h4 className="text-lg font-semibold">Contact</h4>
          <div className="mt-3 text-sm text-zinc-700">Email: ssoftsouls@gmail.com</div>
          <div className="mt-1 text-sm text-zinc-700">Telephone: +2348028740359</div>
          <div className="mt-6 text-sm text-zinc-700">We specialize in chatbots, AI agents, call agents, customer service agents, receptionists, appointment bookers, and tailored workflows.</div>
        </div>
      </div>
    </section>
  );
}