import { ProductImage } from "@/components/ProductImage";
import { getProduct, toneStyles, type Product } from "@/lib/products";

const pillars = [
  { title: "Feito à mão", text: "Crochê, bordado e acabamentos artesanais em cada peça." },
  { title: "Tecidos naturais", text: "Linho, seda e fibras que respiram com o calor." },
  { title: "Atemporal", text: "Peças pra usar por muitos verões — não por uma estação." },
];

export function About() {
  const product = getProduct("vestido-solara") as Product;

  return (
    <section
      id="sobre"
      className="bg-[var(--color-palm-deep)] px-5 py-[var(--space-section)] text-[var(--color-sand)] sm:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Texto */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--color-gold)]">
            Sobre a CORALINA
          </p>
          <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.05]">
            Nascemos no verão que não acaba.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-[var(--color-sand)]/80">
            A CORALINA nasceu da vontade de levar a costa brasileira pra dentro do
            guarda-roupa — cor, leveza e artesania em peças que vão da areia ao
            jantar. Cada coleção é desenhada no Brasil e feita pra durar.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title}>
                <h3 className="font-display text-lg font-semibold text-[var(--color-gold)]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-sand)]/70">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Imagem */}
        <div
          className="relative aspect-[4/5] overflow-hidden rounded-3xl"
          style={{ background: toneStyles[product.tone] }}
        >
          <ProductImage
            src={product.images[0]}
            alt="Campanha CORALINA"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
