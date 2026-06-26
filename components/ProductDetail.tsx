"use client";

import { useState } from "react";
import Link from "next/link";
import { ProductImage } from "@/components/ProductImage";
import { useCart } from "@/lib/cart";
import { priceBRL, toneStyles, type Product } from "@/lib/products";

const sizes = ["PP", "P", "M", "G", "GG"];

const details = [
  "Composição: tecido premium, toque macio e respirável",
  "Modelagem brasileira — veste do PP ao GG",
  "Entrega para todo o Brasil",
  "Troca grátis em até 30 dias",
];

export function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState<string | null>(null);
  const [hint, setHint] = useState(false);

  function handleAdd() {
    if (!size) {
      setHint(true);
      return;
    }
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price,
      size,
      image: product.images[0],
      tone: product.tone,
    });
  }

  return (
    <main className="min-h-dvh bg-[var(--color-sand)] text-[var(--color-ink)]">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
        <Link
          href="/#colecao"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--color-ink)]/60 transition-colors hover:text-[var(--color-ink)]"
        >
          ← Voltar para a coleção
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Galeria */}
          <div className="flex flex-col-reverse gap-4 sm:flex-row">
            {/* Miniaturas */}
            {product.images.length > 1 && (
              <div className="flex gap-3 sm:flex-col">
                {product.images.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={`relative h-20 w-16 overflow-hidden rounded-lg border-2 transition-colors ${
                      activeImage === i
                        ? "border-[var(--color-coral)]"
                        : "border-transparent"
                    }`}
                    style={{ background: toneStyles[product.tone] }}
                  >
                    <ProductImage
                      src={img}
                      alt={`${product.name} ${i + 1}`}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Imagem principal */}
            <div
              className="relative aspect-[3/4] flex-1 overflow-hidden rounded-2xl"
              style={{ background: toneStyles[product.tone] }}
            >
              <ProductImage
                src={product.images[activeImage]}
                alt={product.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              {product.isNew && (
                <span className="absolute left-4 top-4 z-10 rounded-full bg-[var(--color-ink)]/80 px-3 py-1 text-[0.65rem] uppercase tracking-widest text-[var(--color-sand)]">
                  Novo
                </span>
              )}
            </div>
          </div>

          {/* Informações */}
          <div className="lg:py-4">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--color-coral)]">
              {product.category}
            </p>
            <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-tight">
              {product.name}
            </h1>
            <p className="mt-4 text-2xl font-medium">{priceBRL(product.price)}</p>

            <p className="mt-6 max-w-md leading-relaxed text-[var(--color-ink)]/70">
              {product.description}
            </p>

            {/* Tamanhos */}
            <div className="mt-8">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium">Tamanho</span>
                <span className="text-sm text-[var(--color-ink)]/50">Guia de medidas</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      setSize(s);
                      setHint(false);
                    }}
                    className={`h-12 w-12 rounded-full border text-sm font-medium transition-colors ${
                      size === s
                        ? "border-[var(--color-coral)] bg-[var(--color-coral)] text-white"
                        : "border-[var(--color-ink)]/20 hover:border-[var(--color-ink)]/50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              {hint && (
                <p className="mt-3 text-sm text-[var(--color-coral)]">
                  Selecione um tamanho antes de adicionar.
                </p>
              )}
            </div>

            {/* Botão de sacola */}
            <button
              type="button"
              onClick={handleAdd}
              className="mt-8 w-full rounded-full bg-[var(--color-coral)] py-4 text-base font-medium text-white transition-colors hover:bg-[var(--color-coral-deep)] sm:max-w-sm"
            >
              Adicionar à sacola
            </button>

            {/* Detalhes */}
            <ul className="mt-10 space-y-3 border-t border-[var(--color-ink)]/10 pt-8">
              {details.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-[var(--color-ink)]/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-coral)]" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
