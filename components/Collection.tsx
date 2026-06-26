"use client";

import { useState } from "react";
import Link from "next/link";
import { ProductImage } from "@/components/ProductImage";
import { products, priceBRL, toneStyles, type Product } from "@/lib/products";

const categories = ["Tudo", "Vestidos", "Maiôs", "Saídas", "Acessórios"];

function ProductCard({ product }: { product: Product }) {
  const onSand = product.tone === "sand";
  const labelColor = onSand ? "text-[var(--color-ink)]" : "text-[var(--color-sand)]";

  return (
    <Link href={`/produto/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
        {/* Placeholder na paleta da marca (visível enquanto não há foto real) */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ background: toneStyles[product.tone] }}
        />

        {/* Foto real (por cima do placeholder) */}
        <ProductImage
          src={product.images[0]}
          alt={product.name}
          className="absolute inset-0 z-10 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Motivo botânico sutil (fica sob a foto) */}
        <svg
          className="absolute inset-0 h-full w-full opacity-20"
          viewBox="0 0 200 260"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M100 240 C 100 180, 60 160, 50 110 M100 240 C 100 180, 140 160, 150 110 M100 240 L100 40"
            stroke="currentColor"
            strokeWidth="2"
            className={labelColor}
          />
          <circle cx="100" cy="40" r="10" className={labelColor} fill="currentColor" opacity="0.5" />
        </svg>

        {product.isNew && (
          <span className="absolute left-3 top-3 z-20 rounded-full bg-[var(--color-ink)]/80 px-3 py-1 text-[0.65rem] uppercase tracking-widest text-[var(--color-sand)]">
            Novo
          </span>
        )}

        {/* "Ver produto" sobe no hover */}
        <span className="absolute inset-x-3 bottom-3 z-20 flex translate-y-[120%] items-center justify-center rounded-full bg-[var(--color-ink)] py-3 text-sm font-medium text-[var(--color-sand)] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Ver produto →
        </span>
      </div>

      <div className="mt-3 flex items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-lg leading-tight text-[var(--color-ink)]">
            {product.name}
          </h3>
          <p className="text-sm text-[var(--color-ink)]/50">{product.category}</p>
        </div>
        <p className="font-medium text-[var(--color-ink)]">{priceBRL(product.price)}</p>
      </div>
    </Link>
  );
}

export function Collection() {
  const [active, setActive] = useState("Tudo");

  const visible =
    active === "Tudo" ? products : products.filter((p) => p.category === active);

  return (
    <section
      id="colecao"
      className="bg-[var(--color-cream)] px-5 py-[var(--space-section)] text-[var(--color-ink)] sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--color-coral)]">
              Coleção Verão 2026
            </p>
            <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.05]">
              Feito pra usar agora.
            </h2>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  active === cat
                    ? "border-[var(--color-coral)] bg-[var(--color-coral)] text-white"
                    : "border-[var(--color-ink)]/15 text-[var(--color-ink)]/70 hover:border-[var(--color-ink)]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {visible.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
