"use client";

import { useCart } from "@/lib/cart";

function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 8h12l-1 12H7L6 8Z M9 8V6a3 3 0 0 1 6 0v2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CartButton({ variant = "dark" }: { variant?: "light" | "dark" }) {
  const { open, count } = useCart();

  const colors =
    variant === "light"
      ? "border-[var(--color-sand)]/40 text-[var(--color-sand)] hover:bg-[var(--color-sand)] hover:text-[var(--color-ink)]"
      : "border-[var(--color-ink)]/30 text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-sand)]";

  return (
    <button
      type="button"
      onClick={open}
      aria-label={`Abrir sacola, ${count} ${count === 1 ? "item" : "itens"}`}
      className={`relative inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm tracking-wide transition-colors ${colors}`}
    >
      <BagIcon />
      <span className="hidden sm:inline">Sacola</span>
      {count > 0 && (
        <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--color-coral)] px-1 text-[0.7rem] font-semibold text-white">
          {count}
        </span>
      )}
    </button>
  );
}
