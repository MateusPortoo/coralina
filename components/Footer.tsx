import Link from "next/link";
import { Newsletter } from "@/components/Newsletter";

const columns = [
  {
    title: "Loja",
    links: [
      { label: "Vestidos", href: "/#colecao" },
      { label: "Maiôs", href: "/#colecao" },
      { label: "Saídas", href: "/#colecao" },
      { label: "Acessórios", href: "/#colecao" },
    ],
  },
  {
    title: "Atendimento",
    links: [
      { label: "Trocas e devoluções", href: "#" },
      { label: "Guia de medidas", href: "#" },
      { label: "Entregas", href: "#" },
      { label: "Fale conosco", href: "#" },
    ],
  },
  {
    title: "CORALINA",
    links: [
      { label: "Sobre", href: "/#sobre" },
      { label: "Lookbook", href: "/#lookbook" },
      { label: "Sustentabilidade", href: "#" },
      { label: "Lojas", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="contato" className="bg-[var(--color-ink)] px-5 py-16 text-[var(--color-sand)] sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Topo: marca + newsletter */}
        <div className="flex flex-col gap-10 border-b border-[var(--color-sand)]/15 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-3xl font-bold tracking-[0.2em]">CORALINA</p>
            <p className="mt-3 max-w-xs text-sm text-[var(--color-sand)]/60">
              O verão é um estado de espírito.
            </p>
          </div>
          <div>
            <p className="mb-3 text-sm text-[var(--color-sand)]/70">
              Novidades e ofertas, direto no seu e-mail.
            </p>
            <Newsletter />
          </div>
        </div>

        {/* Colunas de links */}
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-3 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-sand)]/90">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-sand)]/60 transition-colors hover:text-[var(--color-sand)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-sand)]/90">
              Social
            </h3>
            <ul className="space-y-2.5">
              {["Instagram", "TikTok", "Pinterest"].map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-sm text-[var(--color-sand)]/60 transition-colors hover:text-[var(--color-sand)]"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rodapé legal */}
        <div className="flex flex-col gap-3 border-t border-[var(--color-sand)]/15 pt-8 text-xs text-[var(--color-sand)]/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 CORALINA. Projeto fictício de demonstração.</p>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-[var(--color-sand)]">
              Privacidade
            </a>
            <a href="#" className="transition-colors hover:text-[var(--color-sand)]">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
