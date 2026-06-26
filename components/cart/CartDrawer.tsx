"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ProductImage } from "@/components/ProductImage";
import { useCart } from "@/lib/cart";
import { priceBRL, toneStyles } from "@/lib/products";

export function CartDrawer() {
  const { items, isOpen, close, setQty, removeItem, total, count } = useCart();

  // Trava o scroll do body enquanto o drawer está aberto.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={close}
        aria-hidden="true"
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Painel */}
      <aside
        aria-label="Sacola de compras"
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-full max-w-md flex-col bg-[var(--color-sand)] text-[var(--color-ink)] shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cabeçalho */}
        <div className="flex items-center justify-between border-b border-[var(--color-ink)]/10 px-6 py-5">
          <h2 className="font-display text-xl font-bold">
            Sua sacola{count > 0 && ` (${count})`}
          </h2>
          <button
            type="button"
            onClick={close}
            aria-label="Fechar sacola"
            className="text-2xl leading-none text-[var(--color-ink)]/60 transition-colors hover:text-[var(--color-ink)]"
          >
            ×
          </button>
        </div>

        {/* Conteúdo */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="text-[var(--color-ink)]/60">Sua sacola está vazia.</p>
            <Link
              href="/#colecao"
              onClick={close}
              className="rounded-full bg-[var(--color-coral)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-coral-deep)]"
            >
              Explorar a coleção
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="divide-y divide-[var(--color-ink)]/10">
                {items.map((item) => (
                  <li key={`${item.slug}-${item.size}`} className="flex gap-4 py-4">
                    <div
                      className="relative h-24 w-20 shrink-0 overflow-hidden rounded-lg"
                      style={{ background: toneStyles[item.tone] }}
                    >
                      <ProductImage
                        src={item.image}
                        alt={item.name}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between gap-2">
                        <div>
                          <h3 className="font-display text-base leading-tight">{item.name}</h3>
                          <p className="text-sm text-[var(--color-ink)]/50">Tam. {item.size}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.slug, item.size)}
                          aria-label={`Remover ${item.name}`}
                          className="text-sm text-[var(--color-ink)]/40 transition-colors hover:text-[var(--color-coral)]"
                        >
                          Remover
                        </button>
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-2">
                        {/* Stepper de quantidade */}
                        <div className="flex items-center rounded-full border border-[var(--color-ink)]/20">
                          <button
                            type="button"
                            onClick={() => setQty(item.slug, item.size, item.qty - 1)}
                            aria-label="Diminuir quantidade"
                            className="px-3 py-1 text-[var(--color-ink)]/60 transition-colors hover:text-[var(--color-ink)]"
                          >
                            −
                          </button>
                          <span className="min-w-6 text-center text-sm">{item.qty}</span>
                          <button
                            type="button"
                            onClick={() => setQty(item.slug, item.size, item.qty + 1)}
                            aria-label="Aumentar quantidade"
                            className="px-3 py-1 text-[var(--color-ink)]/60 transition-colors hover:text-[var(--color-ink)]"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-medium">{priceBRL(item.price * item.qty)}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rodapé */}
            <div className="border-t border-[var(--color-ink)]/10 px-6 py-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[var(--color-ink)]/70">Subtotal</span>
                <span className="font-display text-xl font-bold">{priceBRL(total)}</span>
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-[var(--color-coral)] py-4 font-medium text-white transition-colors hover:bg-[var(--color-coral-deep)]"
              >
                Finalizar compra
              </button>
              <p className="mt-3 text-center text-xs text-[var(--color-ink)]/40">
                Frete e cupom calculados no checkout
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
