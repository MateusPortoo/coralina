import Link from "next/link";
import { ProductImage } from "@/components/ProductImage";
import { getProduct, toneStyles, type Product } from "@/lib/products";

type Tile = {
  slug: string;
  caption: string;
  className: string;
};

const tiles: Tile[] = [
  { slug: "vestido-maresia", caption: "Maresia", className: "md:col-span-2 md:row-span-2" },
  { slug: "chapeu-palha-costa", caption: "Costa", className: "" },
  { slug: "vestido-solara", caption: "Solará", className: "" },
  { slug: "kaftan-botanica", caption: "Botânica", className: "md:col-span-2" },
  { slug: "saida-croche-ilhabela", caption: "Ilhabela", className: "" },
  { slug: "bolsa-palha-mare", caption: "Maré", className: "" },
];

function LookTile({ tile }: { tile: Tile }) {
  const product = getProduct(tile.slug) as Product;

  return (
    <Link
      href={`/produto/${product.slug}`}
      className={`group relative overflow-hidden rounded-2xl ${tile.className}`}
      style={{ background: toneStyles[product.tone] }}
    >
      <ProductImage
        src={product.images[0]}
        alt={product.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="absolute bottom-4 left-5 z-10 translate-y-2 font-display text-xl font-semibold text-[var(--color-sand)] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        {tile.caption}
      </span>
    </Link>
  );
}

export function Lookbook() {
  return (
    <section
      id="lookbook"
      className="bg-[var(--color-cream)] px-5 py-[var(--space-section)] sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[var(--color-coral)]">
            Lookbook
          </p>
          <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.05] text-[var(--color-ink)]">
            Verão 2026 em movimento.
          </h2>
        </div>

        <div className="grid auto-rows-[240px] grid-cols-2 gap-4 md:grid-cols-4">
          {tiles.map((tile) => (
            <LookTile key={tile.slug} tile={tile} />
          ))}
        </div>
      </div>
    </section>
  );
}
