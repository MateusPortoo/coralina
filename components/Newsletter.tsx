"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
  }

  if (done) {
    return (
      <p className="text-sm text-[var(--color-gold)]">
        Obrigada! Você entrou na nossa lista. 🌴
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-sm gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Seu e-mail"
        className="min-w-0 flex-1 rounded-full border border-[var(--color-sand)]/25 bg-transparent px-4 py-2.5 text-sm text-[var(--color-sand)] placeholder:text-[var(--color-sand)]/40 focus:border-[var(--color-coral)] focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-full bg-[var(--color-coral)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-coral-deep)]"
      >
        Assinar
      </button>
    </form>
  );
}
