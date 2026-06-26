import { Collection } from "@/components/Collection";
import { Lookbook } from "@/components/Lookbook";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { CartButton } from "@/components/cart/CartButton";
import { MobileMenu } from "@/components/MobileMenu";

const navLinks = [
  { label: "Coleção", href: "#colecao" },
  { label: "Sobre", href: "#sobre" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "Contato", href: "#contato" },
];

export default function Home() {
  return (
    <main>
      <section className="relative h-dvh w-full overflow-hidden">
        {/* Vídeo de fundo — gerado no Veo 3.
            Coloque o arquivo em: public/videos/hero.mp4
            (opcional: public/videos/hero-poster.jpg como fallback) */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/hero-poster.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Fallback visual caso o vídeo ainda não exista — gradiente tropical */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(120% 120% at 70% 20%, var(--color-gold) 0%, var(--color-coral) 40%, var(--color-palm-deep) 100%)",
          }}
        />

        {/* Overlay para legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />

        {/* Header flutuante */}
        <header className="absolute top-0 left-0 right-0 z-20">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 sm:py-6">
            <a
              href="/"
              className="font-display text-xl font-bold tracking-[0.2em] text-[var(--color-sand)] sm:text-2xl"
            >
              CORALINA
            </a>
            <nav className="hidden items-center gap-9 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm tracking-wide text-[var(--color-sand)]/80 transition-colors hover:text-[var(--color-sand)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <CartButton variant="light" />
              <MobileMenu links={navLinks} variant="light" />
            </div>
          </div>
        </header>

        {/* Conteúdo do hero */}
        <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-20 sm:px-8 sm:pb-24">
          <div className="mx-auto w-full max-w-7xl">
            <p
              className="rise mb-5 text-sm uppercase tracking-[0.35em] text-[var(--color-sand)]/80"
              style={{ animationDelay: "0.1s" }}
            >
              CORALINA · Verão 2026
            </p>

            <h1
              className="rise max-w-4xl font-display text-[clamp(2.25rem,7vw,6rem)] font-bold leading-[1.05] text-[var(--color-sand)]"
              style={{ animationDelay: "0.25s" }}
            >
              O verão é um
              <br />
              estado de espírito.
            </h1>

            <p
              className="rise mt-6 max-w-md text-lg leading-relaxed text-[var(--color-sand)]/85"
              style={{ animationDelay: "0.45s" }}
            >
              Resortwear feito pra quem não espera a estação certa.
            </p>

            <div
              className="rise mt-9 flex flex-col gap-4 sm:flex-row"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="#colecao"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-coral)] px-8 py-4 font-medium text-white transition-colors hover:bg-[var(--color-coral-deep)]"
              >
                Explorar a coleção →
              </a>
              <a
                href="#lookbook"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-sand)]/50 px-8 py-4 font-medium text-[var(--color-sand)] transition-colors hover:bg-[var(--color-sand)]/10"
              >
                Ver lookbook
              </a>
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 sm:block">
          <div className="flex h-10 w-6 justify-center rounded-full border border-[var(--color-sand)]/40 pt-2">
            <div className="h-2 w-1 animate-bounce rounded-full bg-[var(--color-coral)]" />
          </div>
        </div>
      </section>

      {/* Vitrine de produtos */}
      <Collection />

      {/* Lookbook editorial */}
      <Lookbook />

      {/* Sobre a marca */}
      <About />

      {/* Rodapé */}
      <Footer />
    </main>
  );
}
