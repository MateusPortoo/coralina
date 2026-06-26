"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type LinkItem = { label: string; href: string };

export function MobileMenu({
  links,
  variant = "dark",
}: {
  links: LinkItem[];
  variant?: "light" | "dark";
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const barColor = variant === "light" ? "bg-[var(--color-sand)]" : "bg-[var(--color-ink)]";

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
      >
        <span className={`h-0.5 w-6 ${barColor}`} />
        <span className={`h-0.5 w-6 ${barColor}`} />
      </button>

      {/* Overlay de menu */}
      <div
        className={`fixed inset-0 z-[80] flex flex-col bg-[var(--color-sand)] text-[var(--color-ink)] transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-6">
          <span className="font-display text-2xl font-bold tracking-[0.2em]">CORALINA</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            className="text-3xl leading-none text-[var(--color-ink)]/60"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-2 px-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl font-bold leading-tight text-[var(--color-ink)] transition-colors hover:text-[var(--color-coral)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="px-5 py-8 text-sm uppercase tracking-[0.3em] text-[var(--color-coral)]">
          Verão 2026
        </p>
      </div>
    </div>
  );
}
