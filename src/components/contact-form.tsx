"use client";

import { useState, FormEvent } from "react";

// Web3Forms emails submissions to you without your address ever appearing
// in the page source (so scrapers and curious visitors can't see it).
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY ?? "");
    data.append("subject", "New message from amantanwar.dev");

    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <p className="text-lg font-semibold">Thanks — message sent!</p>
        <p className="mt-2 text-muted">I'll get back to you soon.</p>
      </div>
    );
  }

  const input =
    "w-full rounded-lg border border-border bg-bg px-4 py-3 text-text placeholder:text-muted focus:border-accent focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border bg-surface p-6 sm:p-8">
      {/* Honeypot: hidden from people, bots fill it in and get rejected. */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Name</span>
          <input name="name" required className={input} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Email</span>
          <input name="email" type="email" required className={input} placeholder="you@example.com" />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium">Message</span>
        <textarea name="message" required rows={5} className={input} placeholder="What would you like to talk about?" />
      </label>

      <button
        type="submit"
        disabled={status === "sending" || !ACCESS_KEY}
        className="w-full rounded-lg bg-accent px-6 py-3 font-semibold text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-500">Something went wrong. Please try again, or reach me on LinkedIn.</p>
      )}
      {!ACCESS_KEY && (
        <p className="text-sm text-muted">Contact form not configured yet — please use LinkedIn for now.</p>
      )}
    </form>
  );
}
